import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareRelease, publicationOrigin } from '../prepare-release.mjs';

const source = join(dirname(fileURLToPath(import.meta.url)), '..');
const output = () => mkdtempSync(join(tmpdir(), 'infradev-release-test-'));

test('pacote de revisão fica sem indexação e não inclui código de manutenção', () => {
  const result = prepareRelease({ output: output() });
  assert.equal(result.indexable, false);
  assert.equal(result.deployed, false);
  assert.match(readFileSync(join(result.output, 'index.html'), 'utf8'), /noindex,nofollow/);
  assert.match(readFileSync(join(result.output, '_headers'), 'utf8'), /X-Robots-Tag: noindex/);
  assert.equal(readdirSync(result.output).includes('tests'), false);
  assert.equal(readdirSync(result.output).includes('README.md'), false);
});

test('origem institucional gera canonical, Open Graph, sitemap e robots consistentes', () => {
  const before = readFileSync(join(source, 'index.html'), 'utf8');
  const result = prepareRelease({ output: output(), origin: 'https://infradev.example' });
  const html = readFileSync(join(result.output, 'index.html'), 'utf8');
  assert.match(html, /rel="canonical" href="https:\/\/infradev.example\/"/);
  assert.match(html, /property="og:image" content="https:\/\/infradev.example\/assets\/og.png"/);
  assert.match(html, /content="index,follow"/);
  assert.match(readFileSync(join(result.output, 'robots.txt'), 'utf8'), /Sitemap: https:\/\/infradev.example\/sitemap.xml/);
  assert.match(readFileSync(join(result.output, 'sitemap.xml'), 'utf8'), /privacidade.html/);
  assert.equal(readFileSync(join(source, 'index.html'), 'utf8'), before);
});

test('CSP aceita os metadados exatos e proíbe submissão a servidor', () => {
  const result = prepareRelease({ output: output(), origin: 'https://infradev.example' });
  const html = readFileSync(join(result.output, 'index.html'), 'utf8');
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1];
  const hash = createHash('sha256').update(json).digest('base64');
  const headers = readFileSync(join(result.output, '_headers'), 'utf8');
  assert.ok(headers.includes(`'sha256-${hash}'`));
  assert.match(headers, /form-action 'none'/);
  assert.match(headers, /connect-src 'none'/);
  assert.equal(JSON.parse(json).url, 'https://infradev.example/');
});

test('o domínio atual do Atlas não pode ser usado como origem de publicação', () => {
  for (const origin of ['https://infradevatlas.online', 'https://www.infradevatlas.online',
    'https://INFRADEVATLAS.ONLINE', 'https://infradevatlas.online.']) {
    assert.throws(() => publicationOrigin(origin));
  }
  assert.equal(publicationOrigin('https://infradev.infradevatlas.online'), 'https://infradev.infradevatlas.online');
});

test('origens com credenciais, caminhos ou protocolos inadequados são recusadas', () => {
  for (const origin of ['http://infradev.example', 'https://usuario:senha@infradev.example',
    'https://infradev.example/site', 'https://infradev.example/?x=1',
    'https://infradev.example/#frag', 'https://infradev.example:8443', 'https://localhost']) {
    assert.throws(() => publicationOrigin(origin));
  }
});

test('saída existente é preservada e o diretório de código não pode ser sobrescrito', () => {
  const directory = output();
  writeFileSync(join(directory, 'preservar.txt'), 'Conteúdo anterior');
  assert.throws(() => prepareRelease({ output: directory }));
  assert.equal(readFileSync(join(directory, 'preservar.txt'), 'utf8'), 'Conteúdo anterior');
  assert.throws(() => prepareRelease({ output: source }));
  assert.throws(() => prepareRelease({ output: join(source, 'dist') }));
  assert.throws(() => prepareRelease({ output: join(source, '..') }));
});
