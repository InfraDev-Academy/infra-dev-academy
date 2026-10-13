export const CONTACT_EMAIL = 'infradevacademy@gmail.com';
export const SERVICES = Object.freeze({
  avaliar: 'Avaliação da necessidade',
  suporte: 'Suporte técnico remoto',
  software: 'Desenvolvimento ou correção de software',
  automacao: 'Automação ou integração',
});
const TIMINGS = Object.freeze({
  combinar: 'Podemos combinar', semana: 'Nesta semana',
  mes: 'Neste mês', planejar: 'Estou planejando',
});
function text(value) {
  return typeof value === 'string' ? value.toWellFormed().trim().replace(/\r\n?/g, '\n') : '';
}
export function createBrief(input = {}) {
  if (!input || typeof input !== 'object') input = {};
  const values = {
    name: text(input.name), company: text(input.company), goal: text(input.goal),
    system: text(input.system), service: text(input.service), timing: text(input.timing),
  };
  const errors = {};
  for (const [field, max] of [['name', 100], ['company', 120], ['system', 120]]) {
    if (values[field].length > max) errors[field] = `Use no máximo ${max} caracteres.`;
  }
  if (!Object.hasOwn(SERVICES, values.service)) errors.service = 'Selecione um serviço disponível.';
  if (!Object.hasOwn(TIMINGS, values.timing)) errors.timing = 'Selecione um prazo disponível.';
  if (values.goal.length < 20 || values.goal.length > 600) {
    errors.goal = 'Descreva a necessidade com 20 a 600 caracteres, sem contar espaços nas extremidades.';
  }
  if (Object.keys(errors).length) return { ok: false, errors };
  // Only the allowlisted service enters the subject; user text stays in the encoded body.
  const subject = `Orçamento InfraDev — ${SERVICES[values.service]}`;
  const body = [
    'Olá, Lucas. Gostaria de avaliar uma necessidade com a InfraDev.', '',
    `Serviço: ${SERVICES[values.service]}`,
    `Nome: ${values.name || 'Não informado'}`,
    `Empresa ou atividade: ${values.company || 'Não informada'}`,
    `Sistema ou tecnologia: ${values.system || 'A avaliar'}`,
    `Prazo desejado: ${TIMINGS[values.timing]}`, '',
    'Necessidade:', values.goal, '',
    'Podemos alinhar escopo, orçamento e agendamento?',
  ].join('\n');
  return { ok: true, body, subject,
    mailto: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
