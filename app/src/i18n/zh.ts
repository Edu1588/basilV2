import type { Dict } from './pt';

// Texto das landing pages da BrasilVisa em chinês simplificado. Mesma forma de pt.ts.

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

const zh: Dict = {
  lang: 'zh-CN',
  langLabel: '中文',
  checkedOn: '核实日期：2026年10月23日',
  source: '来源',

  wa: {
    geral: '您好，我是通过BrasilVisa网站找到您的，想就我的情况咨询一下。',
    investidor: '您好，我对巴西投资者签证感兴趣，能否为我介绍一下？',
    imobiliario: '您好，我想了解通过购买房产获得巴西居留的相关信息。',
    reuniao: '您好，我想把家人接到巴西和我一起生活。',
    chineses: '您好，我是中国公民，想咨询巴西签证和居留的相关事宜。',
    crnm: '您好，我的CRNM居留卡需要协助办理（登记、续期或合法化）。',
    naturalizacao: '您好，我想了解自己是否可以申请加入巴西国籍。',
    vistoEua: '您好，我想咨询美国签证的办理。',
  },

  fotos: {
    investidor: '办公室里，双方在放有合同的桌面上握手',
    imobiliario: '现代高档豪宅建筑与雅致花园景观',
    reuniao: '一家人携手漫步在户外草地的温馨合影',
    chineses: '国际商务会议高端圆桌与中外代表洽谈现场',
    crnm: '双手在桌上整理文件和一张身份证件',
    naturalizacao: '一人背对镜头站在窗边，手持文件夹',
    vistoEua: '双手核对护照和登机牌',
    escritorio: '明亮办公室中的会议桌，桌上放着文件夹和一本护照',
    acolhimento: '现代机场候机厅内携带行李的旅客与起飞航班',
  },

  nav: {
    home: '首页',
    quemSomos: '关于我们',
    servicos: '服务项目',
    cta: 'WhatsApp咨询',
    skip: '跳到正文',
    languages: '语言',
  },

  common: {
    talk: '咨询专业顾问',
    reply24: '24小时内回复。',
    mobileCta: '咨询专业顾问',
    mobileCtaNote: '24小时内回复',
    trust: [
      '提供葡萄牙语、英语和中文服务',
      '圣保罗设有办公室',
      '24小时内回复',
    ],
    breadcrumbLabel: '当前位置',
    faqTitle: '常见问题',
    otherServices: '其他服务',
    seeMore: '了解详情',
  },

  footer: {
    company: 'BrasilVisa Assessoria Empresarial Ltda',
    cnpj: 'CNPJ 38.076.921/0001-00',
    hq: '总部：Av. Marquês de São Vicente, 230, Cj 1619, Barra Funda, São Paulo SP, 01139-000',
    branch: "分部：Rua Hugo D'Antola, 146, Piso Superior, Sala B, Água Branca, São Paulo SP",
    legal:
      'BrasilVisa是一家私营移民咨询公司，与联邦警察、司法和公共安全部、外交部、巴西中央银行以及美国驻巴西大使馆或领事馆均无隶属关系。签证、居留许可和入籍的审批完全由相关政府机关决定，我们不保证任何结果。政府规费由您直接缴纳给政府，不包含在我们的服务费中。',
    privacy: '隐私政策',
    rights: '版权所有。',
  },

  home: {
    meta: {
      title: 'BrasilVisa：巴西投资者签证、居留与入籍',
      description:
        '圣保罗移民咨询：投资者签证、房产投资居留、家庭团聚、CRNM居留卡、入籍及美国签证。提供葡萄牙语、英语和中文服务。',
    },
    hero: {
      kicker: '圣保罗移民咨询',
      title: '移民巴西，每一步都有专人陪您走过。',
      subtitle: '为投资者、家庭以及已在巴西生活的外国人提供咨询服务。办公室位于圣保罗，提供葡萄牙语、英语和中文服务。',
      cta: '咨询专业顾问',
      secondary: '查看服务',
      note: '24小时内回复。',
    },
    servicesTitle: '我们能为您做什么',
    formTitle: '希望我们主动联系您？',
    formText: '请留下您的联系方式和咨询事项，我们将在24小时内回复。',
    where: { title: '我们的地址', route: '查看路线' },
  },

  services: {
    investidor: {
      label: '投资者签证',
      card: '向巴西公司投资50万雷亚尔起，即可申请巴西居留。',
      meta: {
        title: '巴西投资者签证，50万雷亚尔起 | BrasilVisa',
        description:
          '以投资者身份获得巴西居留：公司注册、外汇汇入、巴西中央银行登记及向司法部提交申请。无论您身在海外还是已在巴西均可办理。',
      },
      hero: {
        title: '以投资者身份获得巴西居留，从外汇汇入到外国人居留卡全程办理。',
        subtitle:
          '适合计划向巴西公司投资50万雷亚尔起并在巴西生活的人士。我们负责公司注册、资金汇入和居留申请，无论您身在海外还是已在巴西。',
      },
      blocks: [
        {
          type: 'list',
          title: '法规要求',
          items: [
            '以外币投资至少50万雷亚尔，可投资新设公司或现有公司。',
            '如投资于创新、研究、科学或技术领域，且公司与孵化器、科技园、加速器或政府创新项目相关联，最低投资额为15万雷亚尔。',
            '提交3年期投资计划或商业计划，须创造就业或收入。',
            '外资须计入公司章程的实缴资本，并以外汇合同作为证明。',
          ],
          src: SRC.rn13,
          srcLabel: 'RN CNIg 13/2017，经RN 49/2024修订',
        },
        {
          type: 'steps',
          title: '我们如何协助您',
          items: [
            { title: '评估', text: '评估您的个人情况、投资金额和业务类型，并确定从海外还是在巴西境内提交申请。' },
            { title: 'CPF与巴西代理人', text: '指导您办理外国人CPF，以及为在巴西代表您的人出具授权委托书。' },
            { title: '公司注册', text: '公司章程、Junta Comercial登记及CNPJ，并在章程中列明外资。' },
            { title: '外汇与巴西中央银行', text: '指导您通过正规外汇渠道汇款，并在巴西中央银行系统（SCE-IED）申报外国直接投资；10万美元及以上须强制申报。' },
            { title: '银行账户与商业计划', text: '协助开立公司银行账户，并编制法规要求的商业计划。' },
            { title: '居留申请', text: '在MigranteWeb提交申请并跟进；获批后到联邦警察办理登记，领取CRNM居留卡。' },
          ],
        },
        {
          type: 'facts',
          title: '办理时间',
          items: [
            { label: '官方审批', value: '最长30天；如需补件，最长60天。' },
            { label: '完整流程', value: '我们的团队预计从公司注册到获得居留需要30至90天，视个案而定。此为估计时间，并非保证。' },
          ],
          src: SRC.govLaboral,
          srcLabel: 'gov.br',
        },
        {
          type: 'facts',
          title: '在海外或已在巴西',
          items: [
            { label: '在海外', value: '先申请预先许可，然后在您所在国家的巴西领事馆申请投资者签证。' },
            { label: '已在巴西', value: '可在巴西境内提交申请，无需离境。' },
          ],
        },
        {
          type: 'table',
          title: '政府规费',
          head: ['费用项目', '金额'],
          rows: [
            ['居留许可申请', '168.13雷亚尔'],
            ['CRNM居留卡制卡', '204.77雷亚尔'],
          ],
          note: '缴纳给政府。我们的服务费另计，将在评估时告知。',
          src: SRC.govLaboral,
          srcLabel: 'gov.br',
        },
        {
          type: 'text',
          title: '有效期多久',
          paragraphs: [
            '居留为无限期，但须执行投资计划。为保持居留，公司须证明计划的执行情况：申报材料、雇员和缴税记录。',
          ],
        },
      ],
      faq: [
        { q: '投资者签证的最低投资额是多少？', a: '以外币投资50万雷亚尔。创新、科学或技术类项目，如公司符合法规要求，最低为15万雷亚尔。', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017' },
        { q: '我可以在巴西境内申请吗？', a: '可以。法规允许已在巴西的人士提出申请。身在海外的人士先申请许可，再到领事馆申请签证。', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017，第6条' },
        { q: '这是永久居留吗？', a: '居留为无限期，但须证明投资计划已执行。我们协助您整理相关证明材料。', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017，第6条' },
        { q: '一定需要商业计划吗？', a: '是的，这是必需的。计划涵盖3年，说明业务内容、创造的就业或收入，以及资金的使用方式。', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017，第4条' },
        { q: '资金如何汇入巴西？', a: '通过正规外汇渠道，以外国直接投资的名义汇入；汇款达到10万美元及以上时，须在巴西中央银行系统申报。我们会配合银行指导每个步骤。', src: SRC.bcb278, srcLabel: 'Resolução BCB 278' },
      ],
      cta: { title: '让我们为您评估投资方案。', text: '请告诉我们投资金额、业务类型和您目前所在地，我们将在24小时内回复可行方案。' },
      disclaimer: '居留许可由司法和公共安全部审批决定。金额和规定核实于2026年10月23日，日后可能变动。',
    },

    imobiliario: {
      label: '房产投资居留',
      card: '购买100万雷亚尔起的房产即可申请居留（北部和东北部地区为70万雷亚尔）。',
      meta: {
        title: '巴西房产投资居留 | BrasilVisa',
        description:
          '购买100万雷亚尔起的城市房产即可申请巴西居留，北部和东北部地区为70万雷亚尔。提供合同审核、外汇汇入和居留申请服务。',
      },
      hero: {
        title: '购房获得巴西居留，外汇汇入一步到位。',
        subtitle: '适合计划投资巴西城市房产并在巴西生活的人士。我们协助审核合同、汇入资金并提交居留申请。',
      },
      blocks: [
        {
          type: 'list',
          title: '法规要求',
          items: [
            '城市房产（现房或在建）价值100万雷亚尔及以上；北部和东北部地区为70万雷亚尔。',
            '可合并多处房产以达到最低金额。',
            '须为来自海外的自有资金，并由巴西中央银行授权的银行出具证明。',
            '贷款仅可用于超出最低金额的部分。',
          ],
          src: SRC.rn36,
          srcLabel: 'RN CNIg 36/2018，经RN 46/2021和49/2024修订',
        },
        {
          type: 'steps',
          title: '我们如何协助您',
          items: [
            { title: '房产与合同', text: '签约前审核：产权登记、抵押等权利负担，以及卖方或开发商的文件。' },
            { title: '外汇', text: '指导汇款流程，确保来自海外的资金汇入有据可查。' },
            { title: '居留申请', text: '按要求准备申请材料。' },
            { title: 'CRNM居留卡', text: '到联邦警察办理登记并领取居留卡。' },
          ],
        },
        {
          type: 'facts',
          title: '期限与居住要求',
          items: [
            { label: '首次居留', value: '4年；持续持有房产即可转为无限期居留。' },
            { label: '最低居住时间', value: '每2年在巴西停留至少14天。' },
          ],
          src: SRC.rn46,
          srcLabel: 'RN CNIg 46/2021',
        },
      ],
      faq: [
        { q: '需要投资多少？', a: '城市房产100万雷亚尔，北部和东北部各州为70万雷亚尔。', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018' },
        { q: '可以购买期房吗？', a: '可以，须有已登记的买卖预约合同、建筑许可证和开发备案文件。', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018' },
        { q: '房款可以部分贷款吗？', a: '仅超出最低金额的部分可以贷款。最低金额须以来自海外的资金支付。', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018，第3条' },
        { q: '我需要在巴西停留多少天？', a: '自在联邦警察登记之日起，每2年至少停留14天。', src: SRC.rn46, srcLabel: 'RN CNIg 46/2021' },
        { q: '居留何时转为无限期？', a: '首次居留4年期满后，证明您仍持有该投资即可。', src: SRC.rn46, srcLabel: 'RN CNIg 46/2021' },
      ],
      cta: { title: '您已选好房产了吗？', text: '请把地址和价格发给我们，我们会在您签约前评估这笔投资是否符合要求。' },
      disclaimer: '审批由司法和公共安全部决定。我们不从事房产中介业务。',
    },

    reuniao: {
      label: '家庭团聚',
      card: '接配偶、子女和父母来巴西与您一起生活。',
      meta: {
        title: '巴西家庭团聚签证 | BrasilVisa',
        description:
          '接配偶、子女、父母或兄弟姐妹来巴西与您一起生活。提供文件准备、海牙认证、翻译及家庭团聚申请的全程跟进。',
      },
      hero: {
        title: '接家人来巴西与您一起生活。',
        subtitle: '适合已在巴西生活的巴西公民或持有居留的外国人，希望接配偶、子女、父母或兄弟姐妹来巴西。我们负责整理文件并跟进申请。',
      },
      blocks: [
        {
          type: 'list',
          title: '可以申请团聚的家属',
          items: [
            '配偶或伴侣，包括稳定同居关系，不受歧视。',
            '子女。',
            '巴西公民或持有居留的移民的父母、祖父母或外祖父母、孙子女或外孙子女以及兄弟姐妹。',
            '监护或抚养巴西公民的人。',
          ],
          src: SRC.lei13445,
          srcLabel: 'Lei 13.445/2017，第37条',
        },
        {
          type: 'steps',
          title: '我们如何协助您',
          items: [
            { title: '亲属关系', text: '核实亲属关系以及担保人的居留类型。' },
            { title: '文件', text: '提供所需证明清单，包括近5年无犯罪记录证明和亲属关系证明。' },
            { title: '海牙认证与翻译', text: '指导外国文件的认证和宣誓翻译。' },
            { title: '申请与CRNM居留卡', text: '提交申请、跟进进度，并为家属领取居留卡。' },
          ],
        },
        {
          type: 'list',
          title: '温馨提示',
          items: [
            '以家庭团聚获得居留的家属可以在巴西工作。',
            '家属的居留期限与担保人的居留期限一致。',
            '政府规费：申请费168.13雷亚尔，CRNM居留卡204.77雷亚尔。',
          ],
          src: SRC.pfReuniao,
          srcLabel: 'Polícia Federal',
        },
      ],
      faq: [
        { q: '哪些家属可以通过家庭团聚申请？', a: '配偶或伴侣、子女、父母、祖父母或外祖父母、孙子女或外孙子女以及兄弟姐妹，还有监护或抚养巴西公民的人。', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017，第37条' },
        { q: '我的家属可以工作吗？', a: '可以。家庭团聚居留允许在巴西工作。', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017，第45条' },
        { q: '居留有效期多久？', a: '与担保人一致：您的居留为无限期，家属也为无限期；您的居留为临时居留，家属的到期日与您相同。', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017，第153条' },
        { q: '需要哪些文件？', a: '身份证件、出生证明或结婚证明、近5年无犯罪记录证明以及亲属关系证明；外国文件须办理海牙认证和翻译。', src: SRC.pfReuniao, srcLabel: 'Polícia Federal' },
        { q: '稳定同居关系可以吗？', a: '可以，须提供同居关系证明。', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017，第37条' },
      ],
      cta: { title: '您想接哪位家人来巴西？', text: '请告诉我们亲属关系以及对方目前所在地，我们将在24小时内回复。' },
      disclaimer: '审批由联邦警察和司法和公共安全部决定。',
    },

    chineses: {
      label: '中国公民专区',
      card: '商务、投资和家庭团聚签证，全程中文服务。',
      meta: {
        title: '中国公民赴巴西：访问、投资与家庭团聚 | BrasilVisa',
        description:
          '中国公民免签入境巴西有效至2026年12月31日，另可办理投资居留和家庭团聚。圣保罗办公室，提供中文、葡萄牙语和英语服务。',
      },
      hero: {
        title: '中国公民赴巴西：访问、投资与家庭团聚，全程中文服务。',
        subtitle: '我们为您讲解入境和居留规定，并以中文、葡萄牙语或英语陪您办好每一步。',
      },
      blocks: [
        {
          type: 'steps',
          title: '三种途径',
          items: [
            { title: '访问与商务', text: '自2026年5月11日起，持普通护照的中国公民可免签入境巴西，每次停留最长30天，可用于旅游或商务活动，但不得工作。该政策有效至2026年12月31日，除非官方宣布延期。如需停留更久，须办理签证。' },
            { title: '投资', text: '向巴西公司投资50万雷亚尔起，可获得投资者居留；或购买100万雷亚尔起的房产获得居留。' },
            { title: '家庭团聚', text: '适合已在巴西生活、希望把家人接来团聚的人士。' },
          ],
          src: SRC.pequim,
          srcLabel: '巴西驻北京大使馆',
        },
        {
          type: 'text',
          title: '您已经在巴西了吗？',
          paragraphs: [
            '部分居留类型可以在巴西境内申请，例如投资者居留。每个情况都需要单独评估：免签入境并不代表可以工作，也不能停留超过30天。',
          ],
        },
        {
          type: 'text',
          title: '来自中国的文件',
          paragraphs: ['中国已于2023年11月7日加入《海牙公约》（取消外国公文认证要求的公约）。中国出具的文件须办理海牙认证（Apostille），并在巴西进行葡萄牙语宣誓翻译。'],
        },
      ],
      faq: [
        { q: '访问巴西需要签证吗？', a: '停留不超过30天的访问无需签证，政策有效至2026年12月31日，除非官方宣布延期。如出于其他目的或需要更长时间停留，须办理签证。', src: SRC.pequim, srcLabel: '巴西驻北京大使馆' },
        { q: '免签入境后可以工作吗？', a: '不可以。免签政策不允许工作。如需工作或投资，须申请相应的居留许可。', src: SRC.pequim, srcLabel: '巴西驻北京大使馆' },
        { q: '我是免签入境的，可以在巴西境内申请居留吗？', a: '部分类型可以，例如投资者居留。在提交任何申请之前，我们会先评估您的情况。', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017，第6条' },
        { q: '如果停留超过30天会怎样？', a: '非法滞留将被按日处以罚款，并可能被遣返出境。因此，请在停留期满之前尽早规划。', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: '我的中国文件需要认证吗？', a: '需要：在中国办理海牙认证，并在巴西进行宣誓翻译。', src: '', srcLabel: '' },
      ],
      cta: { title: '欢迎用中文与我们沟通。', text: '24小时内回复。' },
      disclaimer: '入境规定可能变动。以上信息于2026年10月23日依据巴西驻北京大使馆公告核实。',
    },

    crnm: {
      label: 'CRNM居留卡（原RNE）',
      card: '外国人居留卡的登记、续期和合法化。',
      meta: {
        title: 'CRNM居留卡（原RNE）：登记与续期 | BrasilVisa',
        description:
          'CRNM居留卡（原RNE）的登记、续期和合法化，详细说明官方期限和规费。办公室位于圣保罗Água Branca联邦警察局对面。',
      },
      hero: {
        title: '轻松办好CRNM居留卡：登记、续期与合法化。',
        subtitle: '我们根据您的居留法律依据准备材料，并全程跟进，直到您拿到居留卡。办公室位于圣保罗Água Branca联邦警察局对面。',
      },
      blocks: [
        {
          type: 'facts',
          title: '您需要了解的期限',
          items: [
            { label: '临时签证', value: '入境后90天内办理登记。' },
            { label: '在巴西获批的居留', value: '自公告之日起30天内办理登记。' },
            { label: '续期', value: '到期前90天起可办理，须本人到联邦警察办理。' },
            { label: '申请回执', value: '最长180天内享有同等权利。' },
          ],
          src: SRC.pfFaq,
          srcLabel: 'Polícia Federal及Decreto 9.199/2017',
        },
        {
          type: 'table',
          title: '政府规费',
          head: ['费用项目', '金额'],
          rows: [
            ['居留许可申请', '168.13雷亚尔'],
            ['CRNM居留卡制卡', '204.77雷亚尔'],
            ['预约与领卡', '免费'],
          ],
          note: '缴纳给政府。我们的服务费另计，将在评估时告知。',
          src: SRC.govCrnm,
          srcLabel: 'gov.br',
        },
        {
          type: 'list',
          title: '我们的服务内容',
          items: [
            '确定适用于您申请的法律依据。',
            '根据您的情况制定文件清单。',
            '提交前审核表格和信息。',
            '指导GRU缴费单和预约。',
            '帮助您做好现场办理的准备。',
            '全程跟进，直到您领取居留卡。',
          ],
        },
      ],
      faq: [
        { q: '我的CRNM居留卡快到期了，但联邦警察约不到号，怎么办？', a: '续期可在到期前90天开始办理，申请回执可在最长180天内保障您的权利。请尽早开始。', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: '费用是多少？', a: '政府规费为168.13雷亚尔和204.77雷亚尔，缴纳给政府。我们的服务费将在评估时告知。', src: SRC.govCrnm, srcLabel: 'gov.br' },
        { q: '我已年满60岁或有残疾，居留卡会过期吗？', a: '在这些情况下，无限期居留的居留卡将变为无限期有效。我们会核实您是否符合条件。', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017，第74条' },
        { q: '居留卡过期会被罚款吗？', a: '临时居留会，按日计罚。永久居留没有续期罚款。', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: '抵达巴西后多久内必须办理登记？', a: '持临时签证入境的，入境后90天内；在巴西获批居留的，自公告之日起30天内。', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017，第64条和第66条' },
      ],
      cta: { title: '您的居留卡近几个月内到期吗？', text: '越早开始，可选的预约日期越多。' },
      disclaimer: '我们提供咨询和指导服务。申请须通过官方渠道提交，审批由联邦警察决定。',
    },

    naturalizacao: {
      label: '巴西入籍',
      card: '评估适用的入籍类型，准备完整材料，直至获得审批结果。',
      meta: {
        title: '巴西入籍：条件与期限 | BrasilVisa',
        description:
          '巴西普通入籍、缩短期限入籍和特别入籍。提供资格评估、完整材料准备及全程跟进直至审批结果。',
      },
      hero: {
        title: '巴西入籍，首次提交就备齐正确材料。',
        subtitle: '我们分析适用于您的入籍类型，整理文件，并跟进申请直至审批结果。',
      },
      blocks: [
        {
          type: 'facts',
          title: '入籍类型',
          items: [
            { label: '普通入籍', value: '居留满4年，能用葡萄牙语沟通，且无刑事定罪记录。' },
            { label: '缩短期限入籍', value: '子女、配偶或伴侣为巴西公民的，居留满1年即可，另有法律规定的其他情形。' },
            { label: '特别入籍', value: '在巴西连续居住超过15年。' },
          ],
          src: SRC.lei13445,
          srcLabel: 'Lei 13.445/2017，第65条至第67条',
        },
        {
          type: 'text',
          title: '官方流程',
          paragraphs: ['申请免费，通过Naturalizar-se平台提交，并须到联邦警察现场办理一个环节。预计审批时间最长180天。如申请被拒，可在10天内提出申诉。'],
          src: SRC.govNat,
          srcLabel: 'gov.br',
        },
      ],
      faq: [
        { q: '我需要在巴西居住多少年？', a: '普通入籍4年；子女、配偶或伴侣为巴西公民的1年；特别入籍须超过15年。', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017' },
        { q: '需要证明我会说葡萄牙语吗？', a: '需要，可提供Celpe-Bras证书或司法部认可的其他文件。', src: '', srcLabel: '' },
        { q: '费用多少？需要多长时间？', a: '官方申请免费，预计审批时间最长180天。我们的服务费将在评估时告知。', src: SRC.govNat, srcLabel: 'gov.br' },
        { q: '如果申请被拒怎么办？', a: '可在10天内提出申诉，我们会指导您完成申诉。', src: SRC.govNat, srcLabel: 'gov.br' },
        { q: '我会失去原国籍吗？', a: '这取决于您原籍国的法律。我们会在申请前核实您的情况。', src: '', srcLabel: '' },
      ],
      cta: { title: '了解您现在是否已可申请入籍。', text: '' },
      disclaimer: '入籍由司法和公共安全部审批决定。',
    },

    vistoEua: {
      label: '美国签证',
      card: '审核DS-160表格，并为领事馆面签做好准备。',
      meta: {
        title: '美国签证协助：DS-160与面签 | BrasilVisa',
        description:
          '圣保罗美国签证协助服务：审核DS-160表格、文件清单和模拟面签。不承诺签证获批。',
      },
      hero: {
        title: '美国签证不再靠猜：从DS-160到面签。',
        subtitle: '我们审核您的个人经历，整理文件，并帮助您为领事馆面签做好准备。',
      },
      blocks: [
        {
          type: 'list',
          title: '服务内容',
          items: [
            '评估您的个人情况及适合此次出行的签证类别。',
            '协助填写DS-160表格，并最终核对信息。',
            '根据您的情况定制文件清单。',
            '指导通过官方渠道缴费和预约。',
            '模拟面签并给出反馈。',
          ],
        },
        {
          type: 'text',
          title: '温馨提示',
          paragraphs: ['自2025年10月1日起，几乎所有申请人都须现场面签，许多续签也不例外。等待时间因城市而异。'],
          src: SRC.waitTimes,
          srcLabel: '美国国务院',
        },
      ],
      faq: [
        { q: '你们能保证拿到签证吗？', a: '不能。签证完全由领事馆决定。我们帮助您减少最常导致拒签的错误。', src: '', srcLabel: '' },
        { q: '领事签证费是多少？', a: '旅游和商务签证费由美国政府收取，直接向其缴纳。我们会在评估时告知最新金额。', src: '', srcLabel: '' },
        { q: '续签需要面签吗？', a: '自2025年10月1日起，原则上需要。部分近期到期的续签可能免面签，我们会核实您的情况。', src: '', srcLabel: '' },
        { q: '是否有额外的250美元费用？', a: '美国法律已有相关规定，仅在签证签发时收取，但何时开始收取尚不明确。一旦官方确认，我们会及时通知您。', src: '', srcLabel: '' },
        { q: '除了DS-160，你们还提供哪些服务？', a: '个人情况评估、证明您与巴西联系的文件准备，以及模拟面签和反馈。', src: '', srcLabel: '' },
      ],
      cta: { title: '让我们帮您准备面签。', text: '请告诉我们您的目的地和出行时间，我们将在24小时内回复。' },
      disclaimer: 'BrasilVisa与美国驻巴西大使馆或领事馆无隶属关系。我们不保证签证签发，审批完全由领事官员决定。',
    },
  },

  quemSomos: {
    meta: {
      title: '关于我们 | BrasilVisa，圣保罗移民咨询',
      description: '了解BrasilVisa：由Clariane Alcantara创立的圣保罗移民咨询公司，在圣保罗市设有两处办公地点。',
    },
    title: 'BrasilVisa：圣保罗移民咨询。',
    text: 'BrasilVisa为希望在巴西投资、生活或办理身份合法化的外国人提供咨询服务。公司由Clariane Alcantara创立，她在国际法和移民法领域拥有丰富经验。',
    years: '', // PREENCHER: anos de atuação (o site atual diz 9 em algumas páginas e 10 em outras)
    addresses: '在圣保罗设有两处办公地点，其中一处位于Água Branca联邦警察局对面。',
    howTitle: '我们的工作方式',
    how: [
      { title: '全程跟进', text: '您随时了解自己的申请进展到哪一步。' },
      { title: '量身定制', text: '每个案例都有其适用的法律依据和专属文件清单。' },
      { title: '法定期限', text: '提前规划，确保不错过任何期限。' },
      { title: '透明收费', text: '政府规费与服务费分开列明，每笔金额均附官方链接。' },
    ],
    reviewsTitle: '客户评价',
    // Depoimentos já publicados em brasillvisa.com.br. PREENCHER: confirmar autorização de uso.
    reviews: [
      { name: 'Rafaela, Salvador/BA', text: '服务非常出色。接待周到，专业可靠，感谢Clariane律师。强烈推荐！' },
      { name: 'Luiz, Campinas', text: '服务很好，团队认真负责、细致周到，沟通顺畅，支持非常到位。强烈推荐！' },
      { name: 'Tiago, Curitiba/PR', text: '衷心感谢，服务出色，高效又诚信。祝事业兴旺。' },
    ],
    photoPending: '团队照片即将上线',
  },

  contato: {
    form: {
      name: '姓名',
      phone: 'WhatsApp',
      email: '电子邮箱',
      subject: '咨询事项',
      subjects: ['投资者签证', '房产投资居留', '家庭团聚', 'CRNM居留卡', '入籍', '美国签证', '其他'],
      language: '首选语言',
      languages: ['Português', 'English', '中文'],
      message: '留言',
      consent: '我已阅读并同意隐私政策。',
      submit: '提交',
      sending: '正在提交',
      note: '请勿通过此处发送证件文件。您的信息仅用于回复您的咨询。',
      error: '提交失败。请重试，或通过WhatsApp联系我们。',
      required: '请填写此项。',
    },
  },

  obrigado: {
    meta: { title: '已收到您的留言 | BrasilVisa', description: '我们已通过BrasilVisa网站收到您的留言，将在24小时内以您选择的语言回复。' },
    title: '我们已收到您的留言。',
    text: '我们将在24小时内以您选择的语言回复。如有急事，请立即通过WhatsApp联系我们。',
    waButton: '打开WhatsApp',
    back: '返回首页',
  },

  notFound: {
    meta: { title: '页面不存在 | BrasilVisa', description: '此页面不存在。' },
    title: '此页面不存在。',
    text: '网址可能已更改。请选择您要前往的页面：',
  },

  privacidade: {
    meta: { title: '隐私政策 | BrasilVisa', description: 'BrasilVisa如何依据LGPD收集、使用和保护您的个人数据。' },
    title: '隐私政策',
    controller: '数据控制者：BrasilVisa Assessoria Empresarial Ltda，CNPJ 38.076.921/0001-00。',
    updated: '最后更新：2026年10月23日。',
    sections: [
      { title: '我们收集哪些数据', text: '您通过表单或WhatsApp提供的姓名、电话、电子邮箱和留言内容。如您同意，还包括用于受众统计的Cookie。' },
      { title: '数据用途', text: '用于回复您的咨询；如您委托我们，则用于提供咨询服务。' },
      { title: '法律依据', text: '巴西《通用数据保护法》（Lei 13.709/2018）：回复咨询基于您的同意；提供已委托的咨询服务基于合同履行。' },
      { title: '数据共享', text: '我们绝不出售数据。仅在您本人申请相关服务时与政府机关共享，以及与提供服务所必需的主机托管和通讯服务商共享。' },
      { title: '保存期限', text: '在提供服务和履行法定义务所需的期限内保存。[prazo de guarda a preencher]' },
      { title: '您的权利', text: '您可以要求访问、更正、删除和转移您的数据，并可随时撤回同意。' },
      { title: 'Cookie', text: '统计类Cookie仅在您同意后使用。您可以在浏览器设置中拒绝或删除Cookie。' },
      { title: '数据保护负责人', text: '数据保护负责人：[nome a preencher]。电子邮箱：contato@brasillvisa.com.br。' },
    ],
  },
};

export default zh;
