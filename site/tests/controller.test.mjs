import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { createBrief, SERVICES } from '../assets/brief.mjs';

// Contract tests for the real controller using a small DOM adapter, not a browser.
// Layout, native mail handlers and assistive technology still require browser/device QA.
const code = readFileSync(new URL('../assets/main.js', import.meta.url), 'utf8')
  .replace(/^import[^\n]+\n/, '');

class Element extends EventTarget {
  constructor(name) { super(); this.name = name; this.value = ''; this.hidden = false;
    this.attributes = new Map(); this.dataset = {}; this.selected = false; }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  removeAttribute(name) { this.attributes.delete(name); }
  setCustomValidity(message) { this.error = message; }
  focus() { this.focused = true; }
  select() { this.selected = true; }
  set href(value) { this.setAttribute('href', value); }
  get href() { return this.getAttribute('href'); }
}

function fixture(clipboard) {
  const ids = ['year', 'navegacao', 'request-builder', 'brief-form', 'brief-result',
    'brief-preview', 'email-ready', 'brief-status', 'client-service', 'client-goal', 'copy-brief'];
  const nodes = Object.fromEntries(ids.map(id => [id, new Element(id)]));
  const menu = new Element('menu');
  const navLinks = [new Element('services-link'), new Element('contact-link')];
  nodes.navegacao.querySelectorAll = () => navLinks;
  nodes['request-builder'].hidden = true;
  nodes['brief-result'].hidden = true;
  const fields = ['name', 'company', 'service', 'goal', 'system', 'timing'].map(name => new Element(name));
  fields.namedItem = name => fields.find(field => field.name === name);
  const form = nodes['brief-form'];
  form.elements = fields;
  form.reportValidity = () => { form.validityReported = true; };
  fields.namedItem('service').value = 'suporte';
  fields.namedItem('timing').value = 'combinar';
  nodes['client-service'] = fields.namedItem('service');
  nodes['client-goal'] = fields.namedItem('goal');
  const serviceLinks = Object.keys(SERVICES).map(service => {
    const link = new Element(service); link.dataset.service = service; return link;
  });
  const document = new EventTarget();
  document.getElementById = id => nodes[id];
  document.querySelector = () => menu;
  document.querySelectorAll = () => serviceLinks;
  const media = new EventTarget(); media.matches = true;
  const FormData = class {
    constructor(f) { this.entries = f.elements.map(field => [field.name, field.value]); }
    [Symbol.iterator]() { return this.entries[Symbol.iterator](); }
  };
  vm.runInNewContext(code, { document, window: { matchMedia: () => media },
    navigator: { clipboard }, FormData, createBrief, SERVICES, Date, Error, Object });
  const dispatch = (node, type) => node.dispatchEvent(new Event(type, { cancelable: true }));
  const fill = (name, value) => { fields.namedItem(name).value = value; dispatch(form, 'input'); };
  const submit = () => dispatch(form, 'submit');
  return { nodes, menu, navLinks, serviceLinks, document, media, form, fields, fill, submit, dispatch };
}

test('jornada de orçamento produz um rascunho sem permitir submissão nativa', () => {
  const f = fixture();
  assert.equal(f.nodes['request-builder'].hidden, false);
  f.fill('goal', 'Meu programa de teste apresenta erro ao abrir.');
  assert.equal(f.submit(), false);
  assert.equal(f.nodes['brief-result'].hidden, false);
  assert.match(f.nodes['email-ready'].href, /^mailto:infradevacademy@gmail.com\?/);
  assert.match(f.nodes['brief-status'].textContent, /envie a mensagem/);
});

test('edição de um pedido elimina o resumo anterior e o endereço preparado', () => {
  const f = fixture();
  f.fill('goal', 'Meu programa de teste apresenta erro ao abrir.'); f.submit();
  f.fill('goal', 'A nova necessidade é revisar uma consulta no sistema.');
  assert.equal(f.nodes['brief-result'].hidden, true);
  assert.equal(f.nodes['brief-preview'].value, '');
  assert.equal(f.nodes['email-ready'].href, null);
  f.submit();
  assert.match(f.nodes['brief-preview'].value, /nova necessidade/);
  assert.doesNotMatch(f.nodes['brief-preview'].value, /erro ao abrir/);
});

test('entrada inválida mantém resultado oculto e apresenta orientação', () => {
  const f = fixture(); f.fill('goal', 'curto'); f.submit();
  assert.equal(f.nodes['brief-result'].hidden, true);
  assert.equal(f.fields.namedItem('goal').getAttribute('aria-invalid'), 'true');
  assert.equal(f.fields.namedItem('goal').focused, true);
  assert.match(f.nodes['brief-status'].textContent, /20 a 600/);
});

test('copiar funciona e a indisponibilidade da área de transferência oferece seleção manual', async () => {
  const copied = [];
  const f = fixture({ writeText: async value => copied.push(value) });
  f.fill('goal', 'Meu programa de teste apresenta erro ao abrir.'); f.submit();
  f.dispatch(f.nodes['copy-brief'], 'click');
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(copied[0], f.nodes['brief-preview'].value);
  assert.match(f.nodes['brief-status'].textContent, /Resumo copiado/);
  const unavailable = fixture();
  unavailable.fill('goal', 'Meu programa de teste apresenta erro ao abrir.'); unavailable.submit();
  unavailable.dispatch(unavailable.nodes['copy-brief'], 'click');
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(unavailable.nodes['brief-preview'].selected, true);
  assert.match(unavailable.nodes['brief-status'].textContent, /Selecione Copiar/);
});

test('menu abre, fecha por Escape e volta à navegação visível no desktop', () => {
  const f = fixture();
  assert.equal(f.nodes.navegacao.hidden, true);
  f.dispatch(f.menu, 'click'); assert.equal(f.nodes.navegacao.hidden, false);
  const escape = new Event('keydown'); Object.defineProperty(escape, 'key', { value: 'Escape' });
  f.document.dispatchEvent(escape);
  assert.equal(f.nodes.navegacao.hidden, true); assert.equal(f.menu.focused, true);
  f.media.matches = false; f.dispatch(f.media, 'change');
  assert.equal(f.nodes.navegacao.hidden, false); assert.equal(f.menu.hidden, true);
});

test('serviço escolhido na página entra no próximo pedido', () => {
  const f = fixture(); f.dispatch(f.serviceLinks.find(link => link.dataset.service === 'automacao'), 'click');
  f.fill('goal', 'Quero automatizar uma tarefa repetitiva no sistema de teste.'); f.submit();
  assert.match(f.nodes['brief-preview'].value, /Serviço: Automação ou integração/);
});
