// Texto das landing pages da BrasilVisa em português. Fonte: COPY.md (aprovado na Fase 3).
// en.ts e zh.ts seguem exatamente a mesma forma.
// Campos vazios ("") ou listas vazias escondem o bloco correspondente na página.

const SRC = {
  rn13: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/migracoes/portal-de-imigracao-laboral/autorizacao-de-residencia-laboral-1/normas-de-imigracao-laboral/resolucoes-normativas/resolucao_normativa_no_13_de_12_de_dezembro_de_2017.pdf',
  rn36: 'https://www.legisweb.com.br/legislacao/?id=369540',
  rn46: 'https://www.lex.com.br/resolucao-cnig-no-46-de-9-de-dezembro-de-2021/',
  govLaboral: 'https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-para-fins-laborais-a-imigrantes',
  bcb278: 'https://www.bcb.gov.br/content/financialstability/Brazilian_Prudential_Financial_Regulation_Docs/ResolutionBCB278.pdf',
  lei13445: 'https://www2.camara.leg.br/legin/fed/lei/2017/lei-13445-24-maio-2017-784925-publicacaooriginal-152812-pl.html',
  decreto: 'https://www2.camara.leg.br/legin/fed/decret/2017/decreto-9199-20-novembro-2017-785772-publicacaooriginal-154263-pe.html',
  pfReuniao: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/pt/nacionalidade/objetivo/servico/documentos?nacionalidade=outras-nacionalidades&objetivo=residencia&servico=reuniao-familiar-permanente',
  pequim: 'https://www.gov.br/mre/pt-br/embaixada-pequim/setor-consular-2/novas-regras-de-visto-para-nacionais-chineses-4e2d56fd516c6c118d745df47b7e8bc165b089c4',
  pfFaq: 'https://www.gov.br/pf/pt-br/assuntos/imigracao/duvidas-frequentes',
  govCrnm: 'https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio',
  govNat: 'https://www.gov.br/pt-br/servicos/solicitar-naturalizacao',
  waitTimes: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html',
};

type Block =
  | { type: 'list'; title: string; items: string[]; note?: string; src?: string; srcLabel?: string }
  | { type: 'steps'; title: string; items: { title: string; text: string }[]; note?: string; src?: string; srcLabel?: string }
  | { type: 'facts'; title: string; items: { label: string; value: string }[]; note?: string; src?: string; srcLabel?: string }
  | { type: 'table'; title: string; head: string[]; rows: string[][]; note?: string; src?: string; srcLabel?: string }
  | { type: 'text'; title: string; paragraphs: string[]; note?: string; src?: string; srcLabel?: string };

type FaqItem = { q: string; a: string; src: string; srcLabel: string };

type Service = {
  label: string;
  card: string;
  meta: { title: string; description: string };
  hero: { title: string; subtitle: string };
  blocks: Block[];
  faq: FaqItem[];
  cta: { title: string; text: string };
  disclaimer: string;
};

/** Tipa cada serviço como Service sem perder as chaves literais. */
function defineServices<K extends string>(s: Record<K, Service>) {
  return s;
}

const pt = {
  lang: 'pt-BR',
  langLabel: 'Português',
  checkedOn: 'conferido em 23/10/2026',
  source: 'Fonte',

  wa: {
    geral: 'Olá, vim pelo site da BrasilVisa e gostaria de orientação sobre o meu caso.',
    investidor: 'Olá, tenho interesse no visto de investidor no Brasil. Pode me orientar?',
    imobiliario: 'Olá, quero saber sobre residência no Brasil pela compra de imóvel.',
    reuniao: 'Olá, quero trazer minha família para morar comigo no Brasil.',
    chineses: 'Olá, sou cidadão chinês e quero orientação sobre visto e residência no Brasil.',
    crnm: 'Olá, preciso de ajuda com a minha CRNM (registro, renovação ou regularização).',
    naturalizacao: 'Olá, quero saber se posso me naturalizar brasileiro.',
    vistoEua: 'Olá, quero orientação para o visto americano.',
  },

  fotos: {
    investidor: 'Aperto de mãos sobre uma mesa com contrato em um escritório',
    imobiliario: 'Residência moderna de alto padrão com arquitetura contemporânea e jardim iluminado',
    reuniao: 'Família unida caminhando de mãos dadas ao ar livre em paisagem verde',
    chineses: 'Mesa executiva de conferência de negócios bilaterais com delegação internacional e pastas de documentos',
    crnm: 'Mãos organizando documentos e uma carteira de identificação sobre a mesa',
    naturalizacao: 'Pessoa de costas junto à janela segurando uma pasta de documentos',
    vistoEua: 'Mãos conferindo um passaporte e um cartão de embarque',
    escritorio: 'Mesa de reunião com pastas de documentos e um passaporte em escritório iluminado',
    acolhimento: 'Passageiro com bagagem em lounge moderno de aeroporto acompanhando decolagem de aeronave',
  },

  nav: {
    home: 'Início',
    quemSomos: 'Quem somos',
    servicos: 'Serviços',
    cta: 'Falar no WhatsApp',
    skip: 'Pular para o conteúdo',
    languages: 'Idioma',
  },

  common: {
    talk: 'Falar com especialista',
    reply24: 'Retorno em até 24 horas.',
    mobileCta: 'Falar com especialista',
    mobileCtaNote: 'Retorno em até 24h',
    trust: [
      'Atendimento em português, inglês e chinês',
      'Escritório em São Paulo',
      'Retorno em até 24 horas',
    ],
    breadcrumbLabel: 'Você está em',
    faqTitle: 'Perguntas frequentes',
    otherServices: 'Outros serviços',
    seeMore: 'Saiba mais',
  },

  footer: {
    company: 'BrasilVisa Assessoria Empresarial Ltda',
    cnpj: 'CNPJ 38.076.921/0001-00',
    hq: 'Matriz: Av. Marquês de São Vicente, 230, Cj 1619, Barra Funda, São Paulo SP, 01139-000',
    branch: "Filial: Rua Hugo D'Antola, 146, Piso Superior, Sala B, Água Branca, São Paulo SP",
    legal:
      'A BrasilVisa é uma empresa privada de consultoria em imigração. Não temos vínculo com a Polícia Federal, o Ministério da Justiça e Segurança Pública, o Itamaraty, o Banco Central, a Embaixada ou os consulados dos Estados Unidos. Decisões sobre vistos, autorizações de residência e naturalização cabem exclusivamente às autoridades, e nenhum resultado é garantido. Taxas oficiais são pagas diretamente ao governo e não fazem parte dos nossos honorários.',
    privacy: 'Política de Privacidade',
    rights: 'Todos os direitos reservados.',
  },

  home: {
    meta: {
      title: 'BrasilVisa: visto de investidor, residência e naturalização',
      description: 'Consultoria em imigração em São Paulo: visto de investidor, imóvel, reunião familiar, CRNM, naturalização e visto americano. Em português, inglês e chinês.',
    },
    hero: {
      kicker: 'Consultoria em imigração em São Paulo',
      title: 'Imigração para o Brasil com quem acompanha cada etapa.',
      subtitle: 'Consultoria para investidores, famílias e estrangeiros que já vivem no Brasil. Escritório em São Paulo e atendimento em português, inglês e chinês.',
      cta: 'Falar com especialista',
      secondary: 'Ver serviços',
      note: 'Retorno em até 24 horas.',
    },
    servicesTitle: 'Como podemos ajudar',
    formTitle: 'Prefere que a gente chame você?',
    formText: 'Deixe seu contato e o assunto. Retornamos em até 24 horas.',
    where: { title: 'Onde estamos', route: 'Como chegar' },
  },

  services: defineServices({
    investidor: {
      label: 'Visto de investidor',
      card: 'Residência no Brasil investindo a partir de R$ 500 mil em empresa brasileira.',
      meta: {
        title: 'Visto de investidor no Brasil a partir de R$ 500 mil',
        description: 'Residência no Brasil como investidor: abertura de empresa, câmbio, Banco Central e pedido de residência. Para quem está no exterior ou já no Brasil.',
      },
      hero: {
        title: 'Residência no Brasil como investidor, do câmbio à carteira de estrangeiro.',
        subtitle:
          'Para quem quer investir a partir de R$ 500 mil em uma empresa brasileira e viver no país. Cuidamos da abertura da empresa, da entrada do capital e do pedido de residência, para quem está no exterior ou já está no Brasil.',
      },
      blocks: [
        {
          type: 'list',
          title: 'O que a regra exige',
          items: [
            'Investimento mínimo de R$ 500 mil em moeda estrangeira, em empresa nova ou já existente.',
            'A partir de R$ 150 mil quando o investimento é em inovação, pesquisa, ciência ou tecnologia, em empresa ligada a incubadora, parque tecnológico, aceleradora ou programa público de inovação.',
            'Plano de investimento ou de negócios para 3 anos, com geração de emprego ou renda.',
            'Capital estrangeiro integralizado no contrato social e comprovado pelo contrato de câmbio.',
          ],
          src: SRC.rn13,
          srcLabel: 'RN CNIg 13/2017, alterada pela RN 49/2024',
        },
        {
          type: 'steps',
          title: 'Como acompanhamos você',
          items: [
            { title: 'Diagnóstico', text: 'Avaliamos seu perfil, o valor e o tipo de negócio, e se o pedido sai do exterior ou do Brasil.' },
            { title: 'CPF e representante no Brasil', text: 'Orientamos o CPF de estrangeiro e a procuração para quem vai representar você no país.' },
            { title: 'Abertura da empresa', text: 'Contrato social, registro na Junta Comercial e CNPJ, com o capital estrangeiro previsto.' },
            { title: 'Câmbio e Banco Central', text: 'Orientamos a remessa pelo câmbio formal e a declaração do investimento estrangeiro direto no sistema do Banco Central (SCE-IED), obrigatória a partir de US$ 100 mil.' },
            { title: 'Conta e plano de negócios', text: 'Apoio na abertura da conta da empresa e na montagem do plano exigido pela norma.' },
            { title: 'Pedido de residência', text: 'Protocolo no MigranteWeb, acompanhamento e, após o deferimento, registro na Polícia Federal para emitir a CRNM.' },
          ],
        },
        {
          type: 'facts',
          title: 'Prazos',
          items: [
            { label: 'Análise oficial do pedido', value: 'Até 30 dias, ou até 60 dias se houver exigência.' },
            { label: 'Processo completo', value: 'Nossa equipe estima de 30 a 90 dias, da empresa à residência, conforme o caso. É uma estimativa, não uma garantia.' },
          ],
          src: SRC.govLaboral,
          srcLabel: 'gov.br',
        },
        {
          type: 'facts',
          title: 'Do exterior ou já no Brasil',
          items: [
            { label: 'No exterior', value: 'Pedido de autorização prévia e, depois, visto de investidor no consulado brasileiro do seu país.' },
            { label: 'Já no Brasil', value: 'O pedido pode ser feito daqui, sem precisar sair do país.' },
          ],
        },
        {
          type: 'table',
          title: 'Taxas oficiais',
          head: ['Taxa', 'Valor'],
          rows: [
            ['Pedido de autorização de residência', 'R$ 168,13'],
            ['Emissão da CRNM', 'R$ 204,77'],
          ],
          note: 'Pagas ao governo. Nosso honorário é à parte e informado no diagnóstico.',
          src: SRC.govLaboral,
          srcLabel: 'gov.br',
        },
        {
          type: 'text',
          title: 'Por quanto tempo vale',
          paragraphs: [
            'A residência é por prazo indeterminado, condicionada à execução do plano de investimento. Para manter, a empresa comprova o que foi feito: declarações, empregados e recolhimentos.',
          ],
        },
      ],
      faq: [
        { q: 'Qual o valor mínimo para o visto de investidor?', a: 'R$ 500 mil em moeda estrangeira. Em projetos de inovação, ciência ou tecnologia, a partir de R$ 150 mil, se a empresa cumprir os requisitos da norma.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017' },
        { q: 'Posso fazer o pedido estando no Brasil?', a: 'Sim. A norma permite o pedido de quem já está no país. Quem está fora pede a autorização e depois o visto no consulado.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 6' },
        { q: 'A residência é permanente?', a: 'É por prazo indeterminado, mas depende de comprovar a execução do plano de investimento. Ajudamos a organizar essa comprovação.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 6' },
        { q: 'Preciso mesmo de plano de negócios?', a: 'Sim, é obrigatório. Ele cobre 3 anos e mostra o negócio, os empregos ou a renda gerados e como o valor será aplicado.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 4' },
        { q: 'Como o dinheiro entra no Brasil?', a: 'Por câmbio formal, com finalidade de investimento estrangeiro direto, declarado no sistema do Banco Central quando a remessa é de US$ 100 mil ou mais. Orientamos cada etapa com o banco.', src: SRC.bcb278, srcLabel: 'Resolução BCB 278' },
      ],
      cta: { title: 'Vamos avaliar o seu investimento.', text: 'Conte o valor, o tipo de negócio e onde você está. Respondemos em até 24 horas com o caminho possível.' },
      disclaimer: 'A decisão sobre a autorização de residência é do Ministério da Justiça e Segurança Pública. Valores e regras conferidos em 23/10/2026; podem mudar.',
    },

    imobiliario: {
      label: 'Investimento imobiliário',
      card: 'Residência pela compra de imóvel a partir de R$ 1 milhão (R$ 700 mil no Norte e Nordeste).',
      meta: {
        title: 'Residência por investimento imobiliário | BrasilVisa',
        description: 'Residência no Brasil pela compra de imóvel a partir de R$ 1 milhão, ou R$ 700 mil no Norte e Nordeste. Análise do contrato, câmbio e pedido.',
      },
      hero: {
        title: 'Residência no Brasil pela compra de imóvel, com o câmbio feito do jeito certo.',
        subtitle: 'Para quem quer investir em imóvel urbano no Brasil e morar no país. Apoiamos a análise do contrato, a remessa do capital e o pedido de residência.',
      },
      blocks: [
        {
          type: 'list',
          title: 'O que a regra exige',
          items: [
            'Imóvel urbano, pronto ou em construção, de R$ 1 milhão ou mais; no Norte e Nordeste, R$ 700 mil.',
            'Pode somar mais de um imóvel para chegar ao mínimo.',
            'Recursos próprios vindos do exterior, comprovados por declaração do banco autorizado pelo Banco Central.',
            'Financiamento só conta na parte que passar do mínimo.',
          ],
          src: SRC.rn36,
          srcLabel: 'RN CNIg 36/2018, alterada pelas RN 46/2021 e 49/2024',
        },
        {
          type: 'steps',
          title: 'Como acompanhamos você',
          items: [
            { title: 'Imóvel e contrato', text: 'Análise antes de assinar: matrícula, ônus e documentação do vendedor ou da incorporadora.' },
            { title: 'Câmbio', text: 'Orientação da remessa para que a entrada do capital do exterior fique comprovada.' },
            { title: 'Pedido de residência', text: 'Montagem do pedido com a documentação exigida.' },
            { title: 'CRNM', text: 'Registro na Polícia Federal e emissão da carteira.' },
          ],
        },
        {
          type: 'facts',
          title: 'Prazos e permanência',
          items: [
            { label: 'Residência inicial', value: '4 anos, que podem passar a prazo indeterminado mantendo o imóvel.' },
            { label: 'Presença mínima', value: '14 dias no Brasil a cada 2 anos.' },
          ],
          src: SRC.rn46,
          srcLabel: 'RN CNIg 46/2021',
        },
      ],
      faq: [
        { q: 'Quanto preciso investir?', a: 'R$ 1 milhão em imóvel urbano, ou R$ 700 mil nos estados do Norte e do Nordeste.', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018' },
        { q: 'Posso comprar na planta?', a: 'Sim, com promessa de compra e venda registrada, alvará de construção e memorial de incorporação.', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018' },
        { q: 'Posso financiar parte do imóvel?', a: 'Só a parte que passar do valor mínimo. O mínimo precisa ser pago com recursos vindos do exterior.', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018, art. 3' },
        { q: 'Quantos dias preciso ficar no Brasil?', a: 'Pelo menos 14 dias a cada 2 anos, contados do registro na Polícia Federal.', src: SRC.rn46, srcLabel: 'RN CNIg 46/2021' },
        { q: 'Quando a residência deixa de ter prazo?', a: 'Depois dos 4 anos iniciais, comprovando que manteve o investimento.', src: SRC.rn46, srcLabel: 'RN CNIg 46/2021' },
      ],
      cta: { title: 'Já escolheu o imóvel?', text: 'Envie o endereço e o valor. Avaliamos se o investimento se enquadra antes de você assinar.' },
      disclaimer: 'A decisão é do Ministério da Justiça e Segurança Pública. Não fazemos intermediação imobiliária.',
    },

    reuniao: {
      label: 'Reunião familiar',
      card: 'Traga cônjuge, filhos e pais para morar com você no Brasil.',
      meta: {
        title: 'Visto de reunião familiar no Brasil | BrasilVisa',
        description:
          'Traga cônjuge, filhos, pais ou irmãos para morar com você no Brasil. Documentos, apostila, tradução e acompanhamento do pedido de reunião familiar.',
      },
      hero: {
        title: 'Traga sua família para morar com você no Brasil.',
        subtitle: 'Para quem já vive no Brasil, como brasileiro ou estrangeiro com residência, e quer trazer cônjuge, filhos, pais ou irmãos. Organizamos os documentos e acompanhamos o pedido.',
      },
      blocks: [
        {
          type: 'list',
          title: 'Quem pode ser chamado',
          items: [
            'Cônjuge ou companheiro, inclusive em união estável, sem discriminação.',
            'Filhos.',
            'Pais, avós, netos e irmãos de brasileiro ou de imigrante com residência.',
            'Quem tem brasileiro sob tutela ou guarda.',
          ],
          src: SRC.lei13445,
          srcLabel: 'Lei 13.445/2017, art. 37',
        },
        {
          type: 'steps',
          title: 'Como acompanhamos você',
          items: [
            { title: 'Vínculo', text: 'Conferimos o vínculo e o tipo de residência de quem chama.' },
            { title: 'Documentos', text: 'Lista de certidões, antecedentes criminais dos últimos 5 anos e prova do vínculo.' },
            { title: 'Apostila e tradução', text: 'Orientamos a legalização e a tradução juramentada dos documentos estrangeiros.' },
            { title: 'Pedido e CRNM', text: 'Protocolo, acompanhamento e emissão da carteira do familiar.' },
          ],
        },
        {
          type: 'list',
          title: 'Bom saber',
          items: [
            'O familiar com reunião familiar pode trabalhar no Brasil.',
            'A residência do familiar acompanha o prazo de quem chamou.',
            'Taxas oficiais: R$ 168,13 pelo pedido e R$ 204,77 pela CRNM.',
          ],
          src: SRC.pfReuniao,
          srcLabel: 'Polícia Federal',
        },
      ],
      faq: [
        { q: 'Quem pode ser chamado por reunião familiar?', a: 'Cônjuge ou companheiro, filhos, pais, avós, netos e irmãos, além de quem tem brasileiro sob tutela ou guarda.', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017, art. 37' },
        { q: 'Meu familiar poderá trabalhar?', a: 'Sim. A residência por reunião familiar permite trabalhar no Brasil.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, art. 45' },
        { q: 'Por quanto tempo a residência vale?', a: 'Acompanha a de quem chamou: indeterminada se a sua for indeterminada; com o mesmo vencimento se a sua for temporária.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, art. 153' },
        { q: 'Quais documentos são pedidos?', a: 'Documento de identidade, certidões de nascimento ou casamento, antecedentes criminais dos últimos 5 anos e prova do vínculo, com apostila e tradução quando estrangeiros.', src: SRC.pfReuniao, srcLabel: 'Polícia Federal' },
        { q: 'União estável vale?', a: 'Sim, com comprovação da união.', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017, art. 37' },
      ],
      cta: { title: 'Quem você quer trazer?', text: 'Conte o vínculo e onde a pessoa está. Respondemos em até 24 horas.' },
      disclaimer: 'A decisão é da Polícia Federal e do Ministério da Justiça e Segurança Pública.',
    },

    chineses: {
      label: 'Cidadãos chineses',
      card: 'Visto de negócios, investimento e reunião familiar, com atendimento em chinês.',
      meta: {
        title: 'Brasil para chineses: visita, investimento e família',
        description:
          'Isenção de visto para chineses até 31/12/2026, residência por investimento e reunião familiar. Atendimento em chinês, português e inglês em São Paulo.',
      },
      hero: {
        title: 'Brasil para cidadãos chineses: visita, investimento e família, com atendimento em chinês.',
        subtitle: 'Explicamos as regras de entrada e de residência e acompanhamos cada etapa em chinês, português ou inglês.',
      },
      blocks: [
        {
          type: 'steps',
          title: 'Três caminhos',
          items: [
            { title: 'Visita e negócios', text: 'Desde 11/05/2026, cidadãos chineses com passaporte comum podem visitar o Brasil sem visto por até 30 dias, para turismo ou negócios, sem trabalhar. Vale até 31/12/2026, salvo prorrogação oficial. Para ficar mais tempo, é preciso visto.' },
            { title: 'Investimento', text: 'Residência como investidor a partir de R$ 500 mil em empresa brasileira, ou pela compra de imóvel a partir de R$ 1 milhão.' },
            { title: 'Reunião familiar', text: 'Para quem já mora no Brasil e quer trazer a família.' },
          ],
          src: SRC.pequim,
          srcLabel: 'Embaixada do Brasil em Pequim',
        },
        {
          type: 'text',
          title: 'Já está no Brasil?',
          paragraphs: [
            'Algumas modalidades de residência podem ser pedidas daqui, como a de investidor. Cada caso precisa de análise: a entrada sem visto não dá direito a trabalhar nem a ficar além dos 30 dias.',
          ],
        },
        {
          type: 'text',
          title: 'Documentos da China',
          paragraphs: ['A China aderiu à Convenção da Apostila em 07/11/2023. Documentos chineses precisam de apostila e de tradução juramentada para o português.'],
        },
      ],
      faq: [
        { q: 'Preciso de visto para visitar o Brasil?', a: 'Não, para visitas de até 30 dias, até 31/12/2026, salvo prorrogação oficial. Para outras finalidades ou estadias mais longas, é preciso visto.', src: SRC.pequim, srcLabel: 'Embaixada do Brasil em Pequim' },
        { q: 'Posso trabalhar entrando sem visto?', a: 'Não. A isenção não permite trabalho. Para trabalhar ou investir, é preciso a autorização de residência adequada.', src: SRC.pequim, srcLabel: 'Embaixada do Brasil em Pequim' },
        { q: 'Entrei sem visto. Posso pedir residência estando no Brasil?', a: 'Em algumas modalidades, sim, como a de investidor. Avaliamos o seu caso antes de qualquer pedido.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 6' },
        { q: 'O que acontece se eu passar dos 30 dias?', a: 'A estadia irregular gera multa diária e pode levar à deportação. Por isso o planejamento deve começar antes do vencimento.', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: 'Meus documentos chineses precisam de legalização?', a: 'Sim: apostila na China e tradução juramentada no Brasil.', src: '', srcLabel: '' },
      ],
      cta: { title: 'Fale com a gente em chinês.', text: 'Retorno em até 24 horas.' },
      disclaimer: 'Regras de entrada podem mudar. Conferido em 23/10/2026 na Embaixada do Brasil em Pequim.',
    },

    crnm: {
      label: 'CRNM (antigo RNE)',
      card: 'Registro, renovação e regularização da carteira de estrangeiro.',
      meta: {
        title: 'CRNM (antigo RNE): registro e renovação | BrasilVisa',
        description: 'Registro, renovação e regularização da CRNM, o antigo RNE. Prazos e taxas oficiais explicados. Escritório em frente à PF da Água Branca, São Paulo.',
      },
      hero: {
        title: 'CRNM sem dor de cabeça: registro, renovação e regularização.',
        subtitle: 'Montamos seu processo conforme a sua base legal de residência e acompanhamos cada etapa até a carteira na sua mão. Escritório em frente à Polícia Federal da Água Branca, em São Paulo.',
      },
      blocks: [
        {
          type: 'facts',
          title: 'Prazos que você precisa conhecer',
          items: [
            { label: 'Visto temporário', value: 'Registro em até 90 dias após a entrada.' },
            { label: 'Residência aprovada no Brasil', value: 'Registro em até 30 dias da publicação.' },
            { label: 'Renovação', value: 'Até 90 dias antes do vencimento, presencial na PF.' },
            { label: 'Protocolo', value: 'Garante os mesmos direitos por até 180 dias.' },
          ],
          src: SRC.pfFaq,
          srcLabel: 'Polícia Federal e Decreto 9.199/2017',
        },
        {
          type: 'table',
          title: 'Taxas oficiais',
          head: ['Taxa', 'Valor'],
          rows: [
            ['Pedido de autorização de residência', 'R$ 168,13'],
            ['Emissão da CRNM', 'R$ 204,77'],
            ['Agendamento e retirada', 'Gratuito'],
          ],
          note: 'Pagas ao governo. Nosso honorário é à parte e informado no diagnóstico.',
          src: SRC.govCrnm,
          srcLabel: 'gov.br',
        },
        {
          type: 'list',
          title: 'O que fazemos',
          items: [
            'Identificamos a base legal certa para o seu pedido.',
            'Montamos o checklist de documentos do seu perfil.',
            'Revisamos formulários e dados antes do envio.',
            'Orientamos a GRU e o agendamento.',
            'Preparamos você para o atendimento presencial.',
            'Acompanhamos o pedido até a retirada.',
          ],
        },
      ],
      faq: [
        { q: 'Minha CRNM vai vencer e não acho vaga na PF. O que faço?', a: 'A renovação pode começar 90 dias antes do vencimento e o protocolo garante seus direitos por até 180 dias. Comece cedo.', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: 'Quanto custa?', a: 'Taxas oficiais de R$ 168,13 e R$ 204,77, pagas ao governo. Nosso honorário é informado no diagnóstico.', src: SRC.govCrnm, srcLabel: 'gov.br' },
        { q: 'Tenho mais de 60 anos ou deficiência. Minha carteira vence?', a: 'A carteira de residência por prazo indeterminado passa a ter validade indeterminada nesses casos. Verificamos se você se enquadra.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, art. 74' },
        { q: 'Carteira vencida dá multa?', a: 'Na residência temporária, sim, multa diária. Na permanente, não há multa de renovação.', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: 'Qual o prazo para me registrar depois de chegar?', a: '90 dias após a entrada com visto temporário, ou 30 dias da publicação se a residência foi aprovada no Brasil.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, arts. 64 e 66' },
      ],
      cta: { title: 'Sua carteira vence nos próximos meses?', text: 'Quanto antes começar, mais datas você encontra.' },
      disclaimer: 'Prestamos consultoria e orientação. O protocolo é feito nos canais oficiais e a decisão é da Polícia Federal.',
    },

    naturalizacao: {
      label: 'Naturalização brasileira',
      card: 'Diagnóstico da modalidade e dossiê completo até a decisão.',
      meta: {
        title: 'Naturalização brasileira: requisitos e prazos | BrasilVisa',
        description:
          'Naturalização brasileira ordinária, com prazo reduzido ou extraordinária. Diagnóstico de elegibilidade, dossiê completo e acompanhamento até a decisão.',
      },
      hero: {
        title: 'Naturalização brasileira com o dossiê certo desde o primeiro envio.',
        subtitle: 'Analisamos qual modalidade se aplica a você, organizamos os documentos e acompanhamos o pedido até a decisão.',
      },
      blocks: [
        {
          type: 'facts',
          title: 'Modalidades',
          items: [
            { label: 'Ordinária', value: '4 anos de residência, comunicação em português e sem condenação penal.' },
            { label: 'Prazo reduzido', value: '1 ano para quem tem filho, cônjuge ou companheiro brasileiro, entre outras hipóteses da lei.' },
            { label: 'Extraordinária', value: 'Mais de 15 anos ininterruptos no Brasil.' },
          ],
          src: SRC.lei13445,
          srcLabel: 'Lei 13.445/2017, arts. 65 a 67',
        },
        {
          type: 'text',
          title: 'Como é o processo oficial',
          paragraphs: ['O pedido é gratuito e feito na plataforma Naturalizar-se, com etapa presencial na Polícia Federal. O prazo estimado é de até 180 dias. Se o pedido for negado, cabe recurso em 10 dias.'],
          src: SRC.govNat,
          srcLabel: 'gov.br',
        },
      ],
      faq: [
        { q: 'Quantos anos preciso morar no Brasil?', a: '4 anos na ordinária; 1 ano com filho, cônjuge ou companheiro brasileiro; mais de 15 anos na extraordinária.', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017' },
        { q: 'Preciso provar que falo português?', a: 'Sim, com o Celpe-Bras ou outros documentos aceitos pelo Ministério da Justiça.', src: '', srcLabel: '' },
        { q: 'Quanto custa e quanto demora?', a: 'O pedido oficial é gratuito e tem prazo estimado de até 180 dias. Nosso honorário é informado no diagnóstico.', src: SRC.govNat, srcLabel: 'gov.br' },
        { q: 'E se o pedido for negado?', a: 'Cabe recurso em até 10 dias. Orientamos o recurso.', src: SRC.govNat, srcLabel: 'gov.br' },
        { q: 'Vou perder minha nacionalidade de origem?', a: 'Depende da lei do seu país. Verificamos o seu caso antes do pedido.', src: '', srcLabel: '' },
      ],
      cta: { title: 'Descubra se você já pode se naturalizar.', text: '' },
      disclaimer: 'A decisão sobre a naturalização é do Ministério da Justiça e Segurança Pública.',
    },

    vistoEua: {
      label: 'Visto americano',
      card: 'DS-160 revisado e preparação para a entrevista no consulado.',
      meta: {
        title: 'Visto americano: DS-160 e entrevista | BrasilVisa',
        description:
          'Assessoria para visto americano em São Paulo: DS-160 revisado, checklist de documentos e simulação de entrevista. Sem promessa de aprovação.',
      },
      hero: {
        title: 'Visto americano sem adivinhação: do DS-160 à entrevista.',
        subtitle: 'Revisamos seu histórico, organizamos os documentos e preparamos você para a entrevista no consulado.',
      },
      blocks: [
        {
          type: 'list',
          title: 'O que está incluído',
          items: [
            'Diagnóstico do perfil e da categoria de visto certa para a viagem.',
            'Preenchimento assistido do DS-160 com validação final dos dados.',
            'Checklist de documentos ajustado ao seu perfil.',
            'Orientação de taxa e agendamento no canal oficial.',
            'Simulação de entrevista com feedback.',
          ],
        },
        {
          type: 'text',
          title: 'Bom saber',
          paragraphs: ['Desde 01/10/2025, quase todos os solicitantes precisam de entrevista presencial, inclusive em muitas renovações. O tempo de espera muda por cidade.'],
          src: SRC.waitTimes,
          srcLabel: 'Departamento de Estado dos EUA',
        },
      ],
      faq: [
        { q: 'Vocês garantem o visto?', a: 'Não. A decisão é exclusiva do consulado. Reduzimos os erros que mais levam à negativa.', src: '', srcLabel: '' },
        { q: 'Quanto custa a taxa consular?', a: 'A taxa do visto de turismo e negócios é cobrada e paga diretamente ao governo dos EUA. Informamos o valor atualizado no diagnóstico.', src: '', srcLabel: '' },
        { q: 'Preciso de entrevista para renovar?', a: 'Em regra, sim, desde 01/10/2025. Algumas renovações recentes podem ser dispensadas; verificamos o seu caso.', src: '', srcLabel: '' },
        { q: 'Existe uma taxa extra de US$ 250?', a: 'Está prevista em lei americana, cobrada só se o visto for emitido, mas o início da cobrança ainda não está claro. Avisamos quando houver confirmação oficial.', src: '', srcLabel: '' },
        { q: 'O que vocês fazem além do DS-160?', a: 'Diagnóstico do perfil, documentos que mostram seus vínculos com o Brasil e simulação de entrevista com feedback.', src: '', srcLabel: '' },
      ],
      cta: { title: 'Vamos preparar sua entrevista.', text: 'Conte para onde vai e quando. Respondemos em até 24 horas.' },
      disclaimer: 'A BrasilVisa não tem vínculo com a Embaixada ou os consulados dos EUA. Não garantimos a emissão do visto: a decisão é exclusiva da autoridade consular.',
    },
  }),

  quemSomos: {
    meta: {
      title: 'Quem somos | BrasilVisa, imigração em São Paulo',
      description: 'Conheça a BrasilVisa, consultoria em imigração em São Paulo fundada por Clariane Alcantara, com dois endereços na capital paulista.',
    },
    title: 'BrasilVisa: consultoria em imigração em São Paulo.',
    text: 'A BrasilVisa orienta estrangeiros que querem investir, morar ou regularizar sua situação no Brasil. Fundada por Clariane Alcantara, com trajetória em Direito Internacional e Migratório.',
    years: '', // PREENCHER: anos de atuação (o site atual diz 9 em algumas páginas e 10 em outras)
    addresses: 'Dois endereços em São Paulo, um deles em frente à Polícia Federal da Água Branca.',
    howTitle: 'Como trabalhamos',
    how: [
      { title: 'Acompanhamento', text: 'Você sabe em que etapa o seu processo está.' },
      { title: 'Sob medida', text: 'Cada caso tem a sua base legal e a sua lista de documentos.' },
      { title: 'Prazos legais', text: 'Planejamos com antecedência para não perder prazos.' },
      { title: 'Transparência', text: 'Taxas oficiais separadas dos honorários, com o link de cada valor.' },
    ],
    reviewsTitle: 'O que dizem nossos clientes',
    // Depoimentos já publicados em brasillvisa.com.br. PREENCHER: confirmar autorização de uso.
    reviews: [
      { name: 'Rafaela, Salvador/BA', text: 'Excelente prestação de serviço. Ótimo atendimento e profissionalismo, obrigado Doutora Clariane. Recomendo!' },
      { name: 'Luiz, Campinas', text: 'Ótimo atendimento, profissionais comprometidos e atenciosos, com boa comunicação e suporte espetacular. Super recomendo!' },
      { name: 'Tiago, Curitiba/PR', text: 'Só agradecer, excelente serviço, rápido e honesto. Gratidão e sucesso.' },
    ],
    photoPending: 'Foto da equipe em breve',
  },

  contato: {
    form: {
      name: 'Nome',
      phone: 'WhatsApp',
      email: 'Email',
      subject: 'Assunto',
      subjects: ['Visto de investidor', 'Investimento imobiliário', 'Reunião familiar', 'CRNM', 'Naturalização', 'Visto americano', 'Outro'],
      language: 'Idioma preferido',
      languages: ['Português', 'English', '中文'],
      message: 'Mensagem',
      consent: 'Li e concordo com a Política de Privacidade.',
      submit: 'Enviar',
      sending: 'Enviando',
      note: 'Não envie documentos por aqui. Usamos seus dados só para responder ao seu contato.',
      error: 'Não foi possível enviar. Tente de novo ou fale pelo WhatsApp.',
      required: 'Preencha este campo.',
    },
  },

  obrigado: {
    meta: { title: 'Mensagem recebida | BrasilVisa', description: 'Recebemos sua mensagem pelo site da BrasilVisa. Retornamos em até 24 horas, no idioma que você escolheu.' },
    title: 'Recebemos sua mensagem.',
    text: 'Retornamos em até 24 horas, no idioma que você escolheu. Se for urgente, chame a gente agora no WhatsApp.',
    waButton: 'Abrir WhatsApp',
    back: 'Voltar ao início',
  },

  notFound: {
    meta: { title: 'Página não encontrada | BrasilVisa', description: 'Esta página não existe.' },
    title: 'Esta página não existe.',
    text: 'O endereço pode ter mudado. Escolha por onde seguir:',
  },

  privacidade: {
    meta: { title: 'Política de Privacidade | BrasilVisa', description: 'Como a BrasilVisa coleta, usa e protege seus dados pessoais, conforme a LGPD.' },
    title: 'Política de Privacidade',
    controller: 'Responsável pelo tratamento: BrasilVisa Assessoria Empresarial Ltda, CNPJ 38.076.921/0001-00.',
    updated: 'Última atualização: 23/10/2026.',
    sections: [
      { title: 'Quais dados coletamos', text: 'Nome, telefone, email e a mensagem que você envia pelo formulário ou pelo WhatsApp. Se você aceitar, cookies de medição de audiência.' },
      { title: 'Para que usamos', text: 'Para responder ao seu contato e, se você contratar, para prestar a consultoria.' },
      { title: 'Base legal', text: 'Lei Geral de Proteção de Dados (Lei 13.709/2018): consentimento, para responder ao contato, e execução de contrato, para a consultoria contratada.' },
      { title: 'Com quem compartilhamos', text: 'Nunca vendemos dados. Compartilhamos apenas com órgãos oficiais quando você mesmo pede o serviço, e com fornecedores de hospedagem e mensagens necessários para o atendimento.' },
      { title: 'Por quanto tempo guardamos', text: 'Pelo tempo necessário para o atendimento e para cumprir obrigações legais. [prazo de guarda a preencher]' },
      { title: 'Seus direitos', text: 'Você pode pedir acesso, correção, exclusão e portabilidade dos seus dados, e revogar o consentimento a qualquer momento.' },
      { title: 'Cookies', text: 'Cookies de medição só são usados com o seu consentimento. Você pode recusar ou apagar os cookies nas configurações do navegador.' },
      { title: 'Contato do encarregado', text: 'Encarregado de dados: [nome a preencher]. Email: contato@brasillvisa.com.br.' },
    ],
  },
};

export default pt;
export type Dict = typeof pt;
export type ServiceKey = keyof Dict['services'];
export type { Block, FaqItem, Service };
