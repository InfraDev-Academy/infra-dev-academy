"""Portable static checks. Does not claim browser, Lighthouse or WCAG certification."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import argparse
import json
import re
import struct


class Page(HTMLParser):
    void = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.tags, self.stack, self.errors = path, [], [], []
        self.data, self.scripts = [], []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag not in self.void:
            self.stack.append(tag)
        if tag == 'script':
            self.scripts.append({'type': attrs.get('type'), 'data': ''})

    def handle_endtag(self, tag):
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
        else:
            self.errors.append(f'Unexpected closing tag: {tag}')

    def handle_data(self, data):
        self.data.append(data)
        if self.stack and self.stack[-1] == 'script':
            self.scripts[-1]['data'] += data


def require(condition, message):
    if not condition:
        raise AssertionError(message)


def contrast(first, second):
    def luminance(value):
        value = value.lstrip('#')
        if len(value) == 3:
            value = ''.join(char * 2 for char in value)
        values = [int(value[i:i + 2], 16) / 255 for i in (0, 2, 4)]
        channels = [v / 12.92 if v <= .04045 else ((v + .055) / 1.055) ** 2.4 for v in values]
        return sum(v * w for v, w in zip(channels, (.2126, .7152, .0722)))
    a, b = sorted([luminance(first), luminance(second)])
    return (b + .05) / (a + .05)


def validate(directory):
    pages = {}
    for name in ('index.html', 'privacidade.html', '404.html'):
        path = directory / name
        page = Page(path)
        page.feed(path.read_text())
        require(not page.stack and not page.errors, f'{name}: unbalanced HTML: {page.errors}')
        pages[path.resolve()] = page
        ids = [a['id'] for _, a in page.tags if 'id' in a]
        require(len(ids) == len(set(ids)), f'{name}: duplicate id')
        require(sum(t == 'h1' for t, _ in page.tags) == 1, f'{name}: must have one h1')
        require(any(t == 'html' and a.get('lang') == 'pt-BR' for t, a in page.tags), f'{name}: language')
        for key in ('description', 'viewport', 'robots'):
            require(any(t == 'meta' and a.get('name') == key and a.get('content') for t, a in page.tags), f'{name}: missing {key}')
        labels = {a.get('for') for t, a in page.tags if t == 'label'}
        for tag, attrs in page.tags:
            if tag in ('input', 'textarea', 'select'):
                require(attrs.get('id') in labels, f'{name}: unlabeled field')
            for ref in ('aria-labelledby', 'aria-describedby', 'aria-controls'):
                for target in attrs.get(ref, '').split():
                    require(target in ids, f'{name}: broken {ref}: {target}')
            require(not any(key.startswith('on') for key in attrs), f'{name}: inline event handler')
            if attrs.get('target') == '_blank':
                require({'noopener', 'noreferrer'} <= set(attrs.get('rel', '').split()), f'{name}: external link isolation')

    local_links = 0
    for path, page in pages.items():
        for _, attrs in page.tags:
            for attribute in ('href', 'src'):
                value = attrs.get(attribute)
                if not value:
                    continue
                url = urlsplit(value)
                if url.scheme:
                    require(url.scheme in ('https', 'mailto'), f'{path.name}: unexpected protocol')
                    if url.scheme == 'mailto':
                        require(url.path == 'infradevacademy@gmail.com', 'unconfirmed email')
                    if url.scheme == 'https':
                        require('infra-dev-assistent' not in url.path and 'agent-sync-layer' not in url.path, 'private code link')
                    continue
                target = ((directory / unquote(url.path).lstrip('/')) if url.path.startswith('/')
                          else (path.parent / unquote(url.path))) if url.path else path
                target = target.resolve()
                require(target.exists(), f'{path.name}: missing target {value}')
                if url.fragment and target in pages:
                    require(any(a.get('id') == unquote(url.fragment) for _, a in pages[target].tags), f'broken anchor {value}')
                local_links += 1
        for script in page.scripts:
            if script['type'] == 'application/ld+json':
                schema = json.loads(script['data'])
                require(schema['name'] == 'InfraDev' and schema['email'] == 'infradevacademy@gmail.com', 'structured data mismatch')

    index = pages[(directory / 'index.html').resolve()]
    require(any(a.get('id') == 'request-builder' and 'hidden' in a for _, a in index.tags), 'JS builder must start hidden')
    require(any(a.get('role') == 'status' and a.get('aria-live') == 'polite' for _, a in index.tags), 'missing accessible feedback')
    for file in ('main.js', 'brief.mjs'):
        script = (directory / 'assets' / file).read_text()
        require(not re.search(r'innerHTML|outerHTML|insertAdjacentHTML|localStorage|sessionStorage|document\.cookie|fetch\s*\(|XMLHttpRequest|sendBeacon', script), 'unsafe rendering or unexpected data transmission')

    css = (directory / 'assets/styles.css').read_text()
    require(css.count('{') == css.count('}'), 'unbalanced CSS blocks')
    require('prefers-reduced-motion' in css and ':focus-visible' in css, 'missing focus/motion rules')
    require('@media(max-width:880px)' in css and '@media(max-width:560px)' in css, 'missing responsive rules')
    colors = dict(re.findall(r'--([\w-]+):(#[\da-fA-F]{3,6})', css))
    pairs = [('ink', 'paper'), ('muted', 'paper'), ('green', 'paper'), ('ink', 'white'),
             ('muted', 'white'), ('green', 'white'), ('white', 'dark'), ('mint', 'dark'),
             ('dark-muted', 'dark'), ('dark', 'mint')]
    ratios = [contrast(colors[a], colors[b]) for a, b in pairs]
    ratios += [contrast(colors[a], '#eaf0e5') for a in ('muted', 'green')]
    ratios += [contrast(colors[a], '#193731') for a in ('dark-muted', 'white', 'mint')]
    require(min(ratios) >= 4.5, f'theme text contrast below 4.5: {min(ratios):.2f}')
    require(contrast('#84978a', colors['white']) >= 3, 'input border contrast below 3')
    data = (directory / 'assets/og.png').read_bytes()
    require(data[:8] == b'\x89PNG\r\n\x1a\n', 'invalid social PNG')
    require(struct.unpack('>II', data[16:24]) == (1200, 630), 'incorrect social image dimensions')
    assets = list((directory / 'assets').iterdir())
    runtime = sum(p.stat().st_size for p in assets if p.suffix != '.svg' or p.name == 'favicon.svg')
    runtime += sum(p.stat().st_size for p in pages)
    require(runtime < 150_000, f'public asset budget exceeded: {runtime}')
    return {'pages': len(pages), 'local_links': local_links, 'text_contrast_pairs': len(ratios),
            'minimum_text_contrast': round(min(ratios), 2), 'public_bytes': runtime,
            'browser_tested': False, 'passed': True}


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--directory', type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    print(json.dumps(validate(args.directory.resolve()), ensure_ascii=False, indent=2))
