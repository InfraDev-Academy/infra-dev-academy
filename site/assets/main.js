import { createBrief, SERVICES } from './brief.mjs';

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
const menu = document.querySelector('.menu-button');
const nav = document.getElementById('navegacao');
const mobile = window.matchMedia('(max-width: 880px)');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  nav.hidden = mobile.matches && !open;
}
function updateMenu() {
  menu.hidden = !mobile.matches;
  setMenu(false);
}
updateMenu();
mobile.addEventListener('change', updateMenu);
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});
const builder = document.getElementById('request-builder');
const form = document.getElementById('brief-form');
const result = document.getElementById('brief-result');
const preview = document.getElementById('brief-preview');
const email = document.getElementById('email-ready');
const status = document.getElementById('brief-status');
const service = document.getElementById('client-service');
const copy = document.getElementById('copy-brief');
function clearResult() {
  result.hidden = true;
  preview.value = '';
  email.removeAttribute('href');
  status.textContent = '';
  for (const field of form.elements) {
    field.setCustomValidity?.('');
    field.removeAttribute('aria-invalid');
  }
}
form.addEventListener('input', clearResult);
form.addEventListener('change', clearResult);
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const selection = link.dataset.service;
    if (Object.hasOwn(SERVICES, selection)) {
      clearResult();
      service.value = selection;
    }
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  clearResult();
  const brief = createBrief(Object.fromEntries(new FormData(form)));
  if (!brief.ok) {
    const [fieldName, message] = Object.entries(brief.errors)[0];
    for (const [name, error] of Object.entries(brief.errors)) {
      const field = form.elements.namedItem(name);
      field?.setAttribute('aria-invalid', 'true');
      field?.setCustomValidity(error);
    }
    status.textContent = message;
    form.elements.namedItem(fieldName)?.focus();
    form.reportValidity();
    return;
  }
  preview.value = brief.body;
  email.href = brief.mailto;
  result.hidden = false;
  status.textContent = 'Resumo preparado. Abra seu e-mail e envie a mensagem para concluir a solicitação.';
  email.focus();
});
copy.addEventListener('click', async () => {
  if (!preview.value) return;
  const body = preview.value;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(body);
    if (preview.value === body) status.textContent = 'Resumo copiado. Cole no seu e-mail e envie para infradevacademy@gmail.com.';
  } catch {
    if (preview.value !== body) return;
    preview.focus();
    preview.select();
    status.textContent = 'Selecione Copiar no seu aparelho e envie o resumo por e-mail para infradevacademy@gmail.com.';
  }
});
// Reveal only after listeners are attached. Direct email and navigation also work without JS.
builder.hidden = false;
