# DESIGN: Landing pages BrasilVisa

## Base
Mesma base visual e técnica do projeto Migrafácil (papel de documento oficial, guilhoché, ficha CRNM no herói, um único momento de movimento forte), trocada para a marca BrasilVisa.

## Cores (site atual brasillvisa.com.br)
| Token | Hex | Uso |
|---|---|---|
| carmim-vivo | #CB3438 | Vermelho do logo: números de etapas, destaques, foco |
| carmim | #B8282C | Vermelho mais escuro para texto e hover sobre fundo claro (contraste AA) |
| tinta | #33373D | Cinza escuro do logo: títulos, tabelas, card principal |
| noite | #24272C | Fundo do herói e da faixa de CTA |
| tinta-escura | #1B1D21 | Rodapé |
| papel | #F6F6F7 | Fundo geral |
| guilloche | #D9DBDF | Linhas e divisórias |
WhatsApp continua no verde oficial (#25D366) com o logo, como pedido no projeto anterior.

## Tipografia (do site atual)
- Montserrat (títulos), Heebo (texto), Noto Sans SC nas páginas em chinês.

## Formato de landing page
- Cabeçalho enxuto: logo, idiomas e WhatsApp (sem menu); serviços no rodapé e na página inicial.
- Um modelo único para as 7 páginas de serviço (`[servico].astro`), montado por blocos de conteúdo (lista, etapas, fatos, tabela, texto), FAQ de 5, ficha lateral com WhatsApp e aviso legal, faixa de CTA e "outros serviços".
- Mensagem de WhatsApp específica por serviço em todos os botões da página.
