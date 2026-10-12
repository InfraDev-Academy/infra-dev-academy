import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = dirname(fileURLToPath(import.meta.url));
const publicFiles = [
  'index.html', 'privacidade.html', '404.html',
  'assets/styles.css', 'assets/main.js', 'assets/brief.mjs',
  'assets/favicon.svg', 'assets/og.png',
];
const atlasHosts = new Set(['infradevatlas.online', 'www.infradevatlas.online']);

export function publicationOrigin(value) {
  const url = new URL(value);
  const hostname = url.hostname.toLowerCase().replace(/\.$/, '');
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash ||
      url.pathname !== '/' || url.port || !hostname.includes('.') || atlasHosts.has(hostname)) {
    throw new Error('Use uma origem HTTPS institucional separada do domínio atual do Atlas, sem caminho ou credenciais.');
  }
  return url.origin;
}

function within(parent, child) {
  const rel = relative(parent, child);
  return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}

export function prepareRelease({ output, origin } = {}) {
  if (!output) throw new Error('Informe --output para um diretório vazio de saída.');
  const destination = resolve(output);
  if (within(source, destination) || within(destination, source)) {
    throw new Error('A saída precisa ficar fora de site/ e não pode ser ancestral dele.');
  }
  if (existsSync(destination) && readdirSync(destination).length) {
    throw new Error('A saída não está vazia. Escolha outro diretório; nenhum arquivo foi sobrescrito.');
  }
  const base = origin ? publicationOrigin(origin) : null;
  // Validate every asset before creating an output, rather than leave a partial release.
  for (const file of publicFiles) {
    if (!existsSync(join(source, file))) throw new Error(`Recurso obrigatório ausente: ${file}`);
  }
  const documents = new Map();
  let schemaHash;
  for (const file of ['index.html', 'privacidade.html']) {
    let html = readFileSync(join(source, file), 'utf8');
    if (base) {
      const url = file === 'index.html' ? `${base}/` : `${base}/${file}`;
      html = html.replace('content="noindex,nofollow"', 'content="index,follow"');
      html = html.replace('</head>', `  <link rel="canonical" href="${url}">\n</head>`);
      if (file === 'index.html') {
        html = html.replace('content="./assets/og.png"', `content="${base}/assets/og.png"`);
        html = html.replace('</head>', `  <meta property="og:url" content="${url}">\n</head>`);
      }
    }
    if (file === 'index.html') {
      html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
        (_, start, json, end) => {
          const schema = JSON.parse(json);
          if (base) { schema.url = `${base}/`; schema['@id'] = `${base}/#organization`; }
          const serialized = JSON.stringify(schema);
          schemaHash = createHash('sha256').update(serialized).digest('base64');
          return `${start}${serialized}${end}`;
        });
    }
    documents.set(file, html);
  }
  if (!schemaHash) throw new Error('Metadados estruturados ausentes; confira index.html.');
  mkdirSync(destination, { recursive: true });
  for (const file of publicFiles) {
    const target = join(destination, file);
    mkdirSync(dirname(target), { recursive: true });
    if (documents.has(file)) writeFileSync(target, documents.get(file));
    else copyFileSync(join(source, file), target);
  }
  writeFileSync(join(destination, 'robots.txt'), base
    ? `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n');
  if (base) {
    writeFileSync(join(destination, 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}/</loc></url><url><loc>${base}/privacidade.html</loc></url></urlset>\n`);
  }
  const csp = `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'none'; script-src 'self' 'sha256-${schemaHash}'; style-src 'self'; img-src 'self'; connect-src 'none'`;
  writeFileSync(join(destination, '_headers'), [
    '/*', `  Content-Security-Policy: ${csp}`,
    '  X-Content-Type-Options: nosniff', '  X-Frame-Options: DENY',
    '  Referrer-Policy: no-referrer',
    '  Permissions-Policy: camera=(), microphone=(), geolocation=()',
    '  Cache-Control: public, max-age=0, must-revalidate',
    ...(base ? [] : ['  X-Robots-Tag: noindex, nofollow']), '',
  ].join('\n'));
  return { output: destination, origin: base, indexable: Boolean(base),
    files: [...publicFiles, 'robots.txt', '_headers', ...(base ? ['sitemap.xml'] : [])],
    deployed: false };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    const options = {};
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i];
      if (!['--output', '--origin'].includes(key) || !args[i + 1] || args[i + 1].startsWith('--')) {
        throw new Error('Uso: node site/prepare-release.mjs --output <diretório-vazio> [--origin https://endereço-institucional]');
      }
      options[key.slice(2)] = args[i + 1];
    }
    console.log(JSON.stringify(prepareRelease(options), null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
