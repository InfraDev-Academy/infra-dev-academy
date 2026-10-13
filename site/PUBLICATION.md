# Publicação da InfraDev — proposta não executada

## Arquitetura recomendada

Manter `infradevatlas.online` e `www` no Sites atual, preservando a landing page e o formulário do Atlas. Publicar o institucional estático em **um destino separado**, a partir do código do PR #12. A InfraDev será o hub da marca; os produtos terão páginas e estágios próprios.

Opção de menor custo previsto: Cloudflare Pages Free, somente arquivos estáticos, inicialmente com o endereço `pages.dev` atribuído pela plataforma. A documentação consultada informa solicitações estáticas gratuitas e sem limite de requisições, e 500 builds mensais no plano Free. Não são necessárias Functions, banco, API de e-mail, npm ou servidor pago para o fluxo entregue. O custo incremental de hospedagem previsto é zero dentro desse plano; a conta e as condições precisam ser confirmadas antes de contratar ou publicar.

O upload manual no painel cria um projeto **Direct Upload**. Segundo a documentação do Pages, esse mesmo projeto não pode depois ser convertido para integração Git; uma migração futura exigiria outro projeto e ajuste dos links ou do domínio institucional. Nesta fase, manter o GitHub como fonte de verdade e publicar apenas pacotes gerados de commits aprovados preserva o controle de cada release.

Depois, se o fundador aprovar DNS, pode-se ligar um novo subdomínio, por exemplo `infradev.infradevatlas.online`. Um subdomínio no Pages pode usar CNAME no DNS atual, sem migrar NS. O apex e o `www` continuam apontando para Sites. O nome é **uma proposta**, não um endereço publicado.

O destino no Pages deve ser associado ao subdomínio no painel da plataforma antes da criação do CNAME indicado por ela. Não copiar os IPs do Atlas para o novo site. Não configurar credenciais, account links, auto deploy ou contas pessoais nesta etapa sem autorização específica.

Uma segunda opção é um Site separado no ChatGPT, aproveitando a conta existente. O custo/limites dessa alternativa não foram apurados nesta missão. O projeto atual do Atlas não deve ser reaproveitado como destino de upload do institucional.

GitHub Pages não foi escolhido como padrão: a política restringe sites cujo objetivo principal seja facilitar transações comerciais ou fornecer SaaS. Para uma frente explicitamente de captação e contratação, optar por Pages/hosting comercial adequado evita depender de uma interpretação permissiva dessa restrição. Esta é uma decisão de arquitetura, não uma afirmação de que todo portfólio no GitHub Pages é proibido.

## Configuração preparada

O script `prepare-release.mjs` não usa rede e não possui comando de deploy. Copia somente HTML e assets públicos; exclui testes, documentos de auditoria, fontes de manutenção, Git e qualquer projeto privado.

Revisão, sem indexação:

```sh
node site/prepare-release.mjs --output release-review
python site/tests/validate.py --directory release-review
```

Para a versão pública, **após confirmar o endereço e aprovar a publicação**, informe a origem real. A origem abaixo é apenas exemplo reservado para testes, não destino de produção:

```sh
node site/prepare-release.mjs --output release-final --origin https://infradev.example
python site/tests/validate.py --directory release-final
```

Com origem explícita, são gerados canonical, `og:url`, imagem social absoluta, URL da organização, sitemap e robots. Sem origem, o pacote permanece com `noindex` e `Disallow: /`. A página 404 permanece sem indexação em ambos os modos.

O script recusa origem HTTP, credenciais, caminhos, consultas, portas não padrão, o domínio atual do Atlas e saídas não vazias. Não é necessário nem permitido mudar DNS para gerar o pacote. A saída deve ser nova e fora de `site/`; o código fonte não é sobrescrito.

## Fluxo de publicação

Em 13/10/2026, o fundador autorizou a publicação inicial em um endereço `pages.dev` separado, sem alterar DNS, fazer merge ou tocar no Atlas. O pacote de revisão do commit `c1e33d0` foi gerado e validado, mas a publicação depende do acesso à conta Cloudflare. Merge, DNS, contratação e qualquer mudança no Atlas requerem decisões próprias.

1. Revisar conteúdo e diff do PR #12. Conferir a operação em 320, 390, 768 e 1440 px, zoom 200%, teclado e ao menos um leitor de tela.
2. Testar Menu/Escape, seleção de serviço, erros, atualização do resumo, copiar/fallback e abertura de rascunho em desktop e Android. Enviar um pedido fictício para o canal confirmado e verificar o recebimento com autorização do fundador.
3. Escolher o provedor e a origem institucional. Confirmar plano, acesso à conta e condições. Nenhum domínio novo é obrigatório.
4. Usar somente a autorização já concedida para `pages.dev` e confirmar o projeto/plano antes do upload. A origem escolhida deve pertencer ao institucional, preservando o Atlas. Merge e DNS não fazem parte dessa autorização.
5. Preparar e validar o pacote a partir do commit aprovado. Para o primeiro deploy, um upload manual do diretório gerado evita habilitar publicação em cada push.
   Se o painel exigir os arquivos antes de informar a URL `pages.dev` definitiva, publicar primeiro o pacote sem `--origin`, que mantém `noindex`; depois confirmar a URL atribuída, gerar outro pacote com ela e fazer uma segunda publicação. Não assumir que o nome escolhido será a URL final.
6. Se futuramente usar integração Git, criar outro projeto Pages e limitar a origem ao repositório/branch aprovados. Uma configuração possível é raiz do repositório, comando `node site/prepare-release.mjs --output site-dist --origin <origem-real>` e diretório de saída `site-dist`; essa integração ainda não existe.
7. Conferir HTTPS, status HTTP, cabeçalhos `_headers`, página 404, imagem social, canonical e contato no site publicado. `_headers` é específico de hosts compatíveis com Cloudflare Pages; em outro host, configurar o equivalente.
8. Somente se aprovada a opção de subdomínio: associá-lo no Pages, adicionar exclusivamente o CNAME solicitado na GoDaddy e validar SSL. Nunca mudar os A do apex, o CNAME do `www` ou os NS do Atlas nesta entrega.

## Reversão e manutenção

Registrar commit e versão do destino institucional. Para reverter conteúdo, restaurar uma publicação anterior no **novo destino**. A primeira publicação pode ser retirada ou revertida sem mexer no Atlas. Se existir subdomínio institucional, alterações ou remoção de seu DNS exigem aprovação própria.

Atualizações de texto passam pelo PR e pelos checks. Qualquer alteração de código executável exige repetir testes pertinentes. Mudança de origem exige regenerar canonical/sitemap/CSP. O hash CSP do JSON-LD é gerado automaticamente; não o editar manualmente. Recursos sem nome versionado têm revalidação de cache para evitar scripts antigos após atualização.

Não inserir scripts de análise, pagamentos, calendário, formulários terceiros ou integrações pessoais sem definir finalidade, segurança, manutenção e autorização. Ao mudar coleta/canais, atualizar privacidade. Não anunciar disponibilidade comercial de produtos apenas por existirem arquivos ou testes internos.

## Próxima integração de marca

Depois de publicar a URL institucional, preparar uma mudança específica no site Atlas: navegação consistente, identificação como produto InfraDev e link de retorno ao hub. Reutilizar paleta, linguagem e componentes compatíveis; manter o formulário e o armazenamento próprios do produto. Essa mudança não faz parte do deploy desta missão e terá diff, testes e aprovação separados.

Consulta complementar de 13/10/2026: uma resposta DNS-over-HTTPS do Google para `infradev.infradevatlas.online` retornou `NXDOMAIN`. Esse endereço ainda não pode ser usado como link público. Definir a URL institucional somente após escolher e configurar o destino de hospedagem; validar novamente antes de editar a página do Atlas.

## Referências consultadas em 12/10/2026

- [Cloudflare Pages: preços de assets estáticos](https://developers.cloudflare.com/pages/functions/pricing/)
- [Cloudflare Pages: limites](https://developers.cloudflare.com/pages/platform/limits/)
- [Subdomínios e DNS externo](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Configuração de build](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cabeçalhos estáticos](https://developers.cloudflare.com/pages/configuration/headers/)
- [Política e limites do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
