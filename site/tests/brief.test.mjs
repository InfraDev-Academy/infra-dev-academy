import test from 'node:test';
import assert from 'node:assert/strict';
import { CONTACT_EMAIL, createBrief, SERVICES } from '../assets/brief.mjs';

const valid = { name: 'Cliente de teste', company: 'Atividade de teste', service: 'suporte',
  system: 'Aplicação de teste', timing: 'combinar',
  goal: 'O programa de teste não abre após a atualização.' };

test('pedido completo usa o canal confirmado e preserva o contexto', () => {
  const brief = createBrief(valid);
  assert.equal(brief.ok, true);
  const url = new URL(brief.mailto);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, CONTACT_EMAIL);
  assert.equal(url.searchParams.get('body'), brief.body);
  assert.match(brief.body, /Programa|Aplicação de teste/);
  assert.match(brief.body, /Podemos alinhar escopo/);
});

test('avaliação inicial não exige nome, empresa ou sistema', () => {
  const brief = createBrief({ service: 'avaliar', timing: 'planejar', goal: valid.goal });
  assert.equal(brief.ok, true);
  assert.match(brief.body, /Nome: Não informado/);
  assert.match(brief.body, /Sistema ou tecnologia: A avaliar/);
});

test('cada serviço permitido produz um assunto correspondente', () => {
  for (const [service, label] of Object.entries(SERVICES)) {
    const brief = createBrief({ ...valid, service });
    assert.equal(brief.ok, true);
    assert.equal(new URL(brief.mailto).searchParams.get('subject'), `Orçamento InfraDev — ${label}`);
  }
});

test('acentos, emojis, ampersands e linhas são preservados no corpo', () => {
  const goal = 'Preciso corrigir “ação & integração” 😊.\r\nEste é um cenário fictício.';
  const brief = createBrief({ ...valid, goal });
  assert.equal(brief.ok, true);
  assert.match(new URL(brief.mailto).searchParams.get('body'), /ação & integração/);
  assert.match(brief.body, /😊\.\nEste/);
});

test('texto do visitante não acrescenta destinatários nem cabeçalhos', () => {
  const brief = createBrief({ ...valid, name: 'Teste\nBcc: exemplo@example.test',
    goal: 'Teste de encoding &bcc=exemplo@example.test&subject=outro #fragmento' });
  const url = new URL(brief.mailto);
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
  assert.equal(url.hash, '');
  assert.equal(url.pathname, CONTACT_EMAIL);
  assert.equal(url.searchParams.has('bcc'), false);
});

test('necessidade vazia, curta ou só com espaços é recusada', () => {
  for (const goal of ['', '  ', 'Problema curto', '   texto curto   ']) {
    assert.equal(createBrief({ ...valid, goal }).ok, false);
  }
});

test('limites de descrição são respeitados sem truncar conteúdo', () => {
  assert.equal(createBrief({ ...valid, goal: 'a'.repeat(20) }).ok, true);
  assert.equal(createBrief({ ...valid, goal: 'a'.repeat(600) }).ok, true);
  assert.equal(createBrief({ ...valid, goal: 'a'.repeat(601) }).ok, false);
});

test('limites dos campos opcionais não podem ser burlados por entrada programática', () => {
  for (const [field, length] of [['name', 100], ['company', 120], ['system', 120]]) {
    assert.equal(createBrief({ ...valid, [field]: 'a'.repeat(length) }).ok, true);
    assert.equal(createBrief({ ...valid, [field]: 'a'.repeat(length + 1) }).ok, false);
  }
});

test('valores inesperados de serviço e prazo não chegam ao e-mail', () => {
  for (const service of ['__proto__', 'constructor', 'pagamento', 'mailto:outro@example.test']) {
    assert.equal(createBrief({ ...valid, service }).ok, false);
  }
  assert.equal(createBrief({ ...valid, timing: '24/7' }).ok, false);
});

test('entradas ausentes e texto Unicode malformado não quebram o fluxo', () => {
  for (const input of [null, undefined, 42, 'entrada inválida']) {
    assert.equal(createBrief(input).ok, false);
  }
  assert.equal(createBrief({ ...valid, name: '\uD800' }).ok, true);
});
