# InfraDev — site institucional comercial

Evolução da implementação existente do PR [#12](https://github.com/InfraDev-Academy/infra-dev-academy/pull/12), na branch `feat/infradev-commercial-site`. A fonte continua em `site/`; nenhuma implementação concorrente foi criada. O site do Atlas e a frente Academy do PR #10 não foram alterados.

## Entrega

- Marca InfraDev, apresentação do fundador e três serviços: suporte remoto, software e automação/integração.
- Portfólio com quatro projetos próprios, fontes auditadas e maturidade explícita.
- Atlas em destaque, ligação com sua página existente e separação entre serviços e produtos em evolução.
- Processo comercial: necessidade → avaliação → orçamento → aceite e agenda → execução e revisão.
- Menu mobile, navegação por teclado, Escape, link para pular conteúdo, campos rotulados, feedback acessível e redução de movimento.
- Pedido de orçamento preparado no navegador, por e-mail, com alternativa de copiar o resumo.
- Privacidade, página 404, favicon, metadados sociais e imagem PNG 1200 × 630.
- Gerador de pacote estático com canonical, sitemap, robots e cabeçalhos para Cloudflare Pages. Sem publicação automática.

## Canal e comportamento comercial

`infradevacademy@gmail.com` foi confirmado pelo conector Gmail e pela página pública de privacidade do Atlas. O endereço provisório foi removido. Nenhum número de WhatsApp foi presumido.

O assistente prepara um **rascunho**. “Abrir meu e-mail” chama o aplicativo configurado no aparelho; o visitante precisa enviar a mensagem. “Copiar resumo” oferece alternativa quando o aplicativo ou a área de transferência não estiver disponível. Não existe confirmação falsa de recebimento, backend de leads, pagamento, contrato ou agenda automática. O pedido editado invalida o resumo anterior.

Sem JavaScript, o endereço direto de e-mail e a navegação permanecem acessíveis. Os campos do assistente só aparecem depois de seu código ser inicializado. Os textos do visitante não entram em HTML executável nem adicionam destinatários ao endereço de e-mail.

## Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo institucional e marcação semântica |
| `assets/styles.css` | Tema, componentes, responsividade e foco |
| `assets/main.js` | Menu, formulário, estado do resumo e copiar |
| `assets/brief.mjs` | Validação e geração do pedido por e-mail |
| `privacidade.html`, `404.html`, `robots.txt` | Páginas auxiliares e bloqueio de indexação do rascunho |
| `assets/favicon.svg`, `assets/og.png`, `assets/og-source.svg` | Identidade e compartilhamento social |
| `prepare-release.mjs` | Pacote com apenas recursos públicos e SEO da origem escolhida |
| `tests/brief.test.mjs`, `tests/controller.test.mjs`, `tests/release.test.mjs` | Testes de comportamento, controlador e preparação de release |
| `tests/validate.py` | HTML, referências, metadados, tema e orçamento de bytes |
| `AUDIT-2026-10-12.md`, `PUBLICATION.md`, `COMMERCIAL.md` | Evidências, implantação e operação comercial |

## Executar e conferir

Node.js 22 ou superior e Python 3. Não é necessário instalar dependências JavaScript.

```sh
node --check site/assets/main.js
node --check site/assets/brief.mjs
node --check site/prepare-release.mjs
node --test site/tests/brief.test.mjs site/tests/controller.test.mjs site/tests/release.test.mjs
python site/tests/validate.py
git diff --check
```

Para revisão visual em uma máquina com navegador, a partir da raiz do repositório:

```sh
python -m http.server 8080 --directory site
```

Abra `http://localhost:8080/`. Os módulos JavaScript devem ser servidos por HTTP; abrir o HTML por `file://` não testa o assistente corretamente. O endereço acima é local e não publica o site na internet.

## Resultado observado em 12/10/2026

22 testes Node aprovados. O controlador foi exercitado com um adaptador de DOM em memória, **não com um navegador**. A checagem estática passou nas três páginas, com 30 referências locais válidas, 15 pares de contraste de texto e mínimo de 5,47:1. O limite do pacote de recursos públicos sem compressão é 150 kB; a medição da entrega ficou abaixo dele. Há checagens de sintaxe e whitespace.

A imagem social foi gerada a partir do SVG e inspecionada visualmente. Browser QA do site institucional, leitor de tela, Lighthouse, envio/recebimento real de e-mail e comportamento dos aplicativos de e-mail continuam pendentes. Não há alegação de conformidade WCAG completa ou de nota Lighthouse.

## Publicação e manutenção

O rascunho usa `noindex,nofollow`. O gerador só habilita indexação quando recebe uma origem HTTPS institucional explícita. Ele recusa o domínio atual do Atlas, diretórios de código e saídas que já contenham arquivos. Geração de arquivos **não realiza deploy nem DNS**.

Consulte [o plano de publicação](PUBLICATION.md) antes de preparar uma versão pública. Revise o aviso de privacidade se canais, rastreamento, coleta ou hospedagem mudarem. Revise os estágios dos produtos antes de alterar suas ofertas. O SVG social pode ser convertido novamente com Inkscape:

```sh
inkscape site/assets/og-source.svg --export-type=png --export-filename=site/assets/og.png
```

Os componentes visuais são comuns às páginas institucionais. A direção aprovada pelo fundador é tornar a InfraDev o hub de navegação do ecossistema; a sincronização visual e os links de retorno das páginas de produto são uma etapa posterior, após definir a URL institucional.
