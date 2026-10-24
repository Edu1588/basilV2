import type { Dict } from './pt';

// Texto das landing pages da BrasilVisa em inglês. Mesma forma de pt.ts.

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

const en: Dict = {
  lang: 'en',
  langLabel: 'English',
  checkedOn: 'checked on October 23, 2026',
  source: 'Source',

  wa: {
    geral: 'Hello, I found BrasilVisa through your website and would like some guidance on my case.',
    investidor: 'Hello, I am interested in the investor visa for Brazil. Could you advise me?',
    imobiliario: 'Hello, I would like to know about residence in Brazil through buying property.',
    reuniao: 'Hello, I would like to bring my family to live with me in Brazil.',
    chineses: 'Hello, I am a Chinese citizen and would like guidance on visas and residence in Brazil.',
    crnm: 'Hello, I need help with my CRNM (registration, renewal or regularization).',
    naturalizacao: 'Hello, I would like to know whether I can become a Brazilian citizen.',
    vistoEua: 'Hello, I would like guidance on a US visa.',
  },

  fotos: {
    investidor: 'Handshake over a desk with a contract in an office',
    imobiliario: 'Modern luxury residential home with contemporary architecture and illuminated garden',
    reuniao: 'Family walking together holding hands outdoors across an open field',
    chineses: 'Executive international business conference table with delegates and official document folders',
    crnm: 'Hands organizing documents and an ID card on a desk',
    naturalizacao: 'Person seen from behind by a window, holding a document folder',
    vistoEua: 'Hands checking a passport and a boarding pass',
    escritorio: 'Meeting table with document folders and a passport in a bright office',
    acolhimento: 'Traveler with luggage in a modern airport lounge observing aircraft takeoff in sunlight',
  },

  nav: {
    home: 'Home',
    quemSomos: 'About us',
    servicos: 'Services',
    cta: 'Chat on WhatsApp',
    skip: 'Skip to content',
    languages: 'Language',
  },

  common: {
    talk: 'Talk to a specialist',
    reply24: 'We reply within 24 hours.',
    mobileCta: 'Talk to a specialist',
    mobileCtaNote: 'Reply within 24h',
    trust: [
      'Service in Portuguese, English and Chinese',
      'Office in São Paulo',
      'Reply within 24 hours',
    ],
    breadcrumbLabel: 'You are here',
    faqTitle: 'Frequently asked questions',
    otherServices: 'Other services',
    seeMore: 'Learn more',
  },

  footer: {
    company: 'BrasilVisa Assessoria Empresarial Ltda',
    cnpj: 'CNPJ 38.076.921/0001-00',
    hq: 'Head office: Av. Marquês de São Vicente, 230, Cj 1619, Barra Funda, São Paulo SP, 01139-000',
    branch: "Branch: Rua Hugo D'Antola, 146, Piso Superior, Sala B, Água Branca, São Paulo SP",
    legal:
      'BrasilVisa is a private immigration consultancy. We are not affiliated with the Federal Police (Polícia Federal), the Ministry of Justice and Public Security, the Ministry of Foreign Affairs (Itamaraty), the Central Bank of Brazil, or the US Embassy or consulates. Decisions on visas, residence permits and naturalization rest solely with the authorities, and no outcome is guaranteed. Government fees are paid directly to the government and are not part of our fees.',
    privacy: 'Privacy Policy',
    rights: 'All rights reserved.',
  },

  home: {
    meta: {
      title: 'BrasilVisa: investor visa and residence in Brazil',
      description: 'Immigration consultancy in São Paulo: investor visa, real estate, family reunification, CRNM, naturalization and US visa. In English, Portuguese and Chinese.',
    },
    hero: {
      kicker: 'Immigration consultancy in São Paulo',
      title: 'Immigration to Brazil with a team that guides you through every step.',
      subtitle: 'Advice for investors, families and foreigners already living in Brazil. Office in São Paulo, with service in Portuguese, English and Chinese.',
      cta: 'Talk to a specialist',
      secondary: 'See services',
      note: 'We reply within 24 hours.',
    },
    servicesTitle: 'How we can help',
    formTitle: 'Would you rather we contact you?',
    formText: 'Leave your contact details and topic. We reply within 24 hours.',
    where: { title: 'Where to find us', route: 'Get directions' },
  },

  services: {
    investidor: {
      label: 'Investor visa',
      card: 'Residence in Brazil by investing from R$ 500,000 in a Brazilian company.',
      meta: {
        title: 'Investor visa for Brazil from R$ 500,000 | BrasilVisa',
        description: 'Residence in Brazil as an investor: company setup, foreign exchange, Central Bank registration and residence application, from abroad or in Brazil.',
      },
      hero: {
        title: 'Residence in Brazil as an investor, from the currency exchange to your foreigner ID card.',
        subtitle:
          'For those who want to invest from R$ 500,000 in a Brazilian company and live in the country. We handle the company setup, the capital inflow and the residence application, whether you are abroad or already in Brazil.',
      },
      blocks: [
        {
          type: 'list',
          title: 'What the rule requires',
          items: [
            'Minimum investment of R$ 500,000 in foreign currency, in a new or existing company.',
            'From R$ 150,000 when the investment is in innovation, research, science or technology, in a company linked to an incubator, technology park, accelerator or public innovation program.',
            'A 3-year investment or business plan that creates jobs or income.',
            'Foreign capital paid into the articles of association and evidenced by the foreign exchange contract.',
          ],
          src: SRC.rn13,
          srcLabel: 'RN CNIg 13/2017, as amended by RN 49/2024',
        },
        {
          type: 'steps',
          title: 'How we support you',
          items: [
            { title: 'Assessment', text: 'We review your profile, the amount and type of business, and whether the application is filed from abroad or from Brazil.' },
            { title: 'CPF and representative in Brazil', text: 'We guide you through the foreigner CPF and the power of attorney for the person who will represent you in the country.' },
            { title: 'Company setup', text: 'Articles of association, registration with the Junta Comercial and CNPJ, with the foreign capital provided for.' },
            { title: 'Foreign exchange and Central Bank', text: 'We guide the transfer through the formal exchange market and the declaration of foreign direct investment in the Central Bank system (SCE-IED), mandatory from US$ 100,000.' },
            { title: 'Bank account and business plan', text: 'Support opening the company bank account and preparing the plan required by the rule.' },
            { title: 'Residence application', text: 'Filing on MigranteWeb, follow-up and, once approved, registration with the Federal Police to issue the CRNM.' },
          ],
        },
        {
          type: 'facts',
          title: 'Timelines',
          items: [
            { label: 'Official review of the application', value: 'Up to 30 days, or up to 60 days if additional documents are requested.' },
            { label: 'Full process', value: 'Our team estimates 30 to 90 days, from company to residence, depending on the case. This is an estimate, not a guarantee.' },
          ],
          src: SRC.govLaboral,
          srcLabel: 'gov.br',
        },
        {
          type: 'facts',
          title: 'From abroad or already in Brazil',
          items: [
            { label: 'Abroad', value: 'Application for prior authorization and then the investor visa at the Brazilian consulate in your country.' },
            { label: 'Already in Brazil', value: 'The application can be filed from here, without leaving the country.' },
          ],
        },
        {
          type: 'table',
          title: 'Government fees',
          head: ['Fee', 'Amount'],
          rows: [
            ['Residence permit application', 'R$ 168.13'],
            ['CRNM issuance', 'R$ 204.77'],
          ],
          note: 'Paid to the government. Our fee is separate and quoted during the assessment.',
          src: SRC.govLaboral,
          srcLabel: 'gov.br',
        },
        {
          type: 'text',
          title: 'How long it is valid',
          paragraphs: [
            'Residence is granted for an indefinite period, subject to carrying out the investment plan. To keep it, the company shows what has been done: filings, employees and tax payments.',
          ],
        },
      ],
      faq: [
        { q: 'What is the minimum amount for the investor visa?', a: 'R$ 500,000 in foreign currency. For innovation, science or technology projects, from R$ 150,000, if the company meets the requirements of the rule.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017' },
        { q: 'Can I apply while in Brazil?', a: 'Yes. The rule allows applications from people already in the country. Those abroad apply for the authorization and then for the visa at the consulate.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 6' },
        { q: 'Is the residence permanent?', a: 'It is for an indefinite period, but depends on proving that the investment plan has been carried out. We help you organize that evidence.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 6' },
        { q: 'Do I really need a business plan?', a: 'Yes, it is mandatory. It covers 3 years and shows the business, the jobs or income created and how the money will be used.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 4' },
        { q: 'How does the money enter Brazil?', a: 'Through the formal exchange market, as foreign direct investment, declared in the Central Bank system when the transfer is US$ 100,000 or more. We guide each step with the bank.', src: SRC.bcb278, srcLabel: 'Resolução BCB 278' },
      ],
      cta: { title: 'Let us assess your investment.', text: 'Tell us the amount, the type of business and where you are. We reply within 24 hours with the possible path.' },
      disclaimer: 'The decision on the residence permit rests with the Ministry of Justice and Public Security. Amounts and rules checked on October 23, 2026; they may change.',
    },

    imobiliario: {
      label: 'Real estate investment',
      card: 'Residence by buying property from R$ 1 million (R$ 700,000 in the North and Northeast).',
      meta: {
        title: 'Residence through real estate in Brazil | BrasilVisa',
        description: 'Residence in Brazil by buying property from R$ 1 million, or R$ 700,000 in the North and Northeast. Contract review, exchange and application.',
      },
      hero: {
        title: 'Residence in Brazil by buying property, with the currency exchange done right.',
        subtitle: 'For those who want to invest in urban property in Brazil and live in the country. We support the contract review, the capital transfer and the residence application.',
      },
      blocks: [
        {
          type: 'list',
          title: 'What the rule requires',
          items: [
            'Urban property, completed or under construction, worth R$ 1 million or more; in the North and Northeast, R$ 700,000.',
            'More than one property can be combined to reach the minimum.',
            'Your own funds coming from abroad, evidenced by a statement from a bank authorized by the Central Bank.',
            'Financing only counts for the portion above the minimum.',
          ],
          src: SRC.rn36,
          srcLabel: 'RN CNIg 36/2018, as amended by RN 46/2021 and 49/2024',
        },
        {
          type: 'steps',
          title: 'How we support you',
          items: [
            { title: 'Property and contract', text: 'Review before you sign: title registration, encumbrances and the documents of the seller or developer.' },
            { title: 'Foreign exchange', text: 'Guidance on the transfer so that the inflow of capital from abroad is properly evidenced.' },
            { title: 'Residence application', text: 'Preparation of the application with the required documents.' },
            { title: 'CRNM', text: 'Registration with the Federal Police and issuance of the ID card.' },
          ],
        },
        {
          type: 'facts',
          title: 'Timelines and stay',
          items: [
            { label: 'Initial residence', value: '4 years, which can become indefinite if you keep the property.' },
            { label: 'Minimum presence', value: '14 days in Brazil every 2 years.' },
          ],
          src: SRC.rn46,
          srcLabel: 'RN CNIg 46/2021',
        },
      ],
      faq: [
        { q: 'How much do I need to invest?', a: 'R$ 1 million in urban property, or R$ 700,000 in the states of the North and Northeast.', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018' },
        { q: 'Can I buy off plan?', a: 'Yes, with a registered purchase and sale commitment, a building permit and an incorporation memorandum.', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018' },
        { q: 'Can I finance part of the property?', a: 'Only the portion above the minimum amount. The minimum must be paid with funds from abroad.', src: SRC.rn36, srcLabel: 'RN CNIg 36/2018, art. 3' },
        { q: 'How many days do I need to stay in Brazil?', a: 'At least 14 days every 2 years, counted from registration with the Federal Police.', src: SRC.rn46, srcLabel: 'RN CNIg 46/2021' },
        { q: 'When does the residence become indefinite?', a: 'After the initial 4 years, by proving that you kept the investment.', src: SRC.rn46, srcLabel: 'RN CNIg 46/2021' },
      ],
      cta: { title: 'Have you chosen the property?', text: 'Send us the address and price. We check whether the investment qualifies before you sign.' },
      disclaimer: 'The decision rests with the Ministry of Justice and Public Security. We do not act as real estate brokers.',
    },

    reuniao: {
      label: 'Family reunification',
      card: 'Bring your spouse, children and parents to live with you in Brazil.',
      meta: {
        title: 'Family reunification visa for Brazil | BrasilVisa',
        description: 'Bring your spouse, children, parents or siblings to live with you in Brazil. Documents, apostille, translation and application follow-up.',
      },
      hero: {
        title: 'Bring your family to live with you in Brazil.',
        subtitle: 'For those already living in Brazil, as Brazilians or as foreigners with residence, who want to bring a spouse, children, parents or siblings. We organize the documents and follow the application.',
      },
      blocks: [
        {
          type: 'list',
          title: 'Who can be sponsored',
          items: [
            'Spouse or partner, including in a stable union, without discrimination.',
            'Children.',
            'Parents, grandparents, grandchildren and siblings of a Brazilian or of an immigrant with residence.',
            'Anyone who has a Brazilian under their guardianship or custody.',
          ],
          src: SRC.lei13445,
          srcLabel: 'Lei 13.445/2017, art. 37',
        },
        {
          type: 'steps',
          title: 'How we support you',
          items: [
            { title: 'Relationship', text: 'We check the family relationship and the type of residence of the sponsor.' },
            { title: 'Documents', text: 'List of certificates, criminal records for the last 5 years and proof of the relationship.' },
            { title: 'Apostille and translation', text: 'We guide the legalization and sworn translation of foreign documents.' },
            { title: 'Application and CRNM', text: 'Filing, follow-up and issuance of your family member’s ID card.' },
          ],
        },
        {
          type: 'list',
          title: 'Good to know',
          items: [
            'A family member with family reunification residence can work in Brazil.',
            'The family member’s residence follows the term of the sponsor’s residence.',
            'Government fees: R$ 168.13 for the application and R$ 204.77 for the CRNM.',
          ],
          src: SRC.pfReuniao,
          srcLabel: 'Polícia Federal',
        },
      ],
      faq: [
        { q: 'Who can be sponsored through family reunification?', a: 'Spouse or partner, children, parents, grandparents, grandchildren and siblings, as well as anyone who has a Brazilian under their guardianship or custody.', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017, art. 37' },
        { q: 'Will my family member be able to work?', a: 'Yes. Family reunification residence allows you to work in Brazil.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, art. 45' },
        { q: 'How long is the residence valid?', a: 'It follows the sponsor’s: indefinite if yours is indefinite; with the same expiry date if yours is temporary.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, art. 153' },
        { q: 'Which documents are required?', a: 'ID document, birth or marriage certificates, criminal records for the last 5 years and proof of the relationship, with apostille and translation when foreign.', src: SRC.pfReuniao, srcLabel: 'Polícia Federal' },
        { q: 'Does a stable union count?', a: 'Yes, with proof of the union.', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017, art. 37' },
      ],
      cta: { title: 'Who do you want to bring?', text: 'Tell us the relationship and where the person is. We reply within 24 hours.' },
      disclaimer: 'The decision rests with the Federal Police and the Ministry of Justice and Public Security.',
    },

    chineses: {
      label: 'Chinese citizens',
      card: 'Business, investment and family reunification visas, with service in Chinese.',
      meta: {
        title: 'Brazil for Chinese citizens: visits, investment, family',
        description: 'Visa exemption for Chinese citizens until December 31, 2026, residence through investment and family reunification. Service in Chinese in São Paulo.',
      },
      hero: {
        title: 'Brazil for Chinese citizens: visits, investment and family, with service in Chinese.',
        subtitle: 'We explain the entry and residence rules and guide you through every step in Chinese, Portuguese or English.',
      },
      blocks: [
        {
          type: 'steps',
          title: 'Three paths',
          items: [
            { title: 'Visits and business', text: 'Since May 11, 2026, Chinese citizens with an ordinary passport can visit Brazil without a visa for up to 30 days, for tourism or business, without working. Valid until December 31, 2026, unless officially extended. To stay longer, a visa is required.' },
            { title: 'Investment', text: 'Investor residence from R$ 500,000 in a Brazilian company, or by buying property from R$ 1 million.' },
            { title: 'Family reunification', text: 'For those already living in Brazil who want to bring their family.' },
          ],
          src: SRC.pequim,
          srcLabel: 'Embassy of Brazil in Beijing',
        },
        {
          type: 'text',
          title: 'Already in Brazil?',
          paragraphs: [
            'Some types of residence can be requested from here, such as investor residence. Each case needs to be assessed: visa-free entry does not give the right to work or to stay beyond 30 days.',
          ],
        },
        {
          type: 'text',
          title: 'Documents from China',
          paragraphs: ['China joined the Apostille Convention on November 7, 2023. Chinese documents need an apostille and a sworn translation into Portuguese.'],
        },
      ],
      faq: [
        { q: 'Do I need a visa to visit Brazil?', a: 'No, for visits of up to 30 days, until December 31, 2026, unless officially extended. For other purposes or longer stays, a visa is required.', src: SRC.pequim, srcLabel: 'Embassy of Brazil in Beijing' },
        { q: 'Can I work if I enter without a visa?', a: 'No. The exemption does not allow work. To work or invest, you need the appropriate residence permit.', src: SRC.pequim, srcLabel: 'Embassy of Brazil in Beijing' },
        { q: 'I entered without a visa. Can I apply for residence while in Brazil?', a: 'For some types, yes, such as investor residence. We assess your case before any application.', src: SRC.rn13, srcLabel: 'RN CNIg 13/2017, art. 6' },
        { q: 'What happens if I stay longer than 30 days?', a: 'An irregular stay incurs a daily fine and may lead to deportation. That is why planning should start before your permitted stay ends.', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: 'Do my Chinese documents need to be legalized?', a: 'Yes: an apostille in China and a sworn translation in Brazil.', src: '', srcLabel: '' },
      ],
      cta: { title: 'Talk to us in Chinese.', text: 'We reply within 24 hours.' },
      disclaimer: 'Entry rules may change. Checked on October 23, 2026 with the Embassy of Brazil in Beijing.',
    },

    crnm: {
      label: 'CRNM (formerly RNE)',
      card: 'Registration, renewal and regularization of your foreigner ID card.',
      meta: {
        title: 'CRNM (formerly RNE): registration and renewal | BrasilVisa',
        description: 'Registration, renewal and regularization of the CRNM, formerly RNE. Official deadlines and fees explained. Office in São Paulo near the Federal Police.',
      },
      hero: {
        title: 'Your CRNM without the headache: registration, renewal and regularization.',
        subtitle: 'We prepare your file according to the legal basis of your residence and follow every step until the card is in your hands. Office across from the Federal Police in Água Branca, São Paulo.',
      },
      blocks: [
        {
          type: 'facts',
          title: 'Deadlines you need to know',
          items: [
            { label: 'Temporary visa', value: 'Register within 90 days of entry.' },
            { label: 'Residence approved in Brazil', value: 'Register within 30 days of publication.' },
            { label: 'Renewal', value: 'Up to 90 days before expiry, in person at the Federal Police.' },
            { label: 'Filing receipt', value: 'Guarantees the same rights for up to 180 days.' },
          ],
          src: SRC.pfFaq,
          srcLabel: 'Polícia Federal and Decreto 9.199/2017',
        },
        {
          type: 'table',
          title: 'Government fees',
          head: ['Fee', 'Amount'],
          rows: [
            ['Residence permit application', 'R$ 168.13'],
            ['CRNM issuance', 'R$ 204.77'],
            ['Appointment and card pickup', 'Free'],
          ],
          note: 'Paid to the government. Our fee is separate and quoted during the assessment.',
          src: SRC.govCrnm,
          srcLabel: 'gov.br',
        },
        {
          type: 'list',
          title: 'What we do',
          items: [
            'We identify the right legal basis for your application.',
            'We build the document checklist for your profile.',
            'We review forms and details before submission.',
            'We guide you on the GRU payment slip and the appointment.',
            'We prepare you for the in-person appointment.',
            'We follow the application until you pick up your card.',
          ],
        },
      ],
      faq: [
        { q: 'My CRNM is about to expire and I cannot find an appointment at the Federal Police. What should I do?', a: 'Renewal can start 90 days before expiry and the filing receipt guarantees your rights for up to 180 days. Start early.', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: 'How much does it cost?', a: 'Government fees of R$ 168.13 and R$ 204.77, paid to the government. Our fee is quoted during the assessment.', src: SRC.govCrnm, srcLabel: 'gov.br' },
        { q: 'I am over 60 or have a disability. Does my card expire?', a: 'In these cases, the card for indefinite residence becomes valid indefinitely. We check whether you qualify.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, art. 74' },
        { q: 'Is there a fine for an expired card?', a: 'For temporary residence, yes, a daily fine. For permanent residence, there is no renewal fine.', src: SRC.pfFaq, srcLabel: 'Polícia Federal' },
        { q: 'What is the deadline to register after I arrive?', a: '90 days after entry with a temporary visa, or 30 days from publication if the residence was approved in Brazil.', src: SRC.decreto, srcLabel: 'Decreto 9.199/2017, arts. 64 and 66' },
      ],
      cta: { title: 'Does your card expire in the coming months?', text: 'The sooner you start, the more appointment dates you will find.' },
      disclaimer: 'We provide consulting and guidance. Applications are filed through official channels and the decision rests with the Federal Police.',
    },

    naturalizacao: {
      label: 'Brazilian naturalization',
      card: 'Assessment of the right type and a complete file through to the decision.',
      meta: {
        title: 'Brazilian naturalization: requirements | BrasilVisa',
        description:
          'Ordinary, reduced-term or extraordinary Brazilian naturalization. Eligibility assessment, complete file and follow-up until the decision.',
      },
      hero: {
        title: 'Brazilian naturalization with the right file from the first submission.',
        subtitle: 'We assess which type applies to you, organize the documents and follow the application until the decision.',
      },
      blocks: [
        {
          type: 'facts',
          title: 'Types',
          items: [
            { label: 'Ordinary', value: '4 years of residence, ability to communicate in Portuguese and no criminal conviction.' },
            { label: 'Reduced term', value: '1 year for those with a Brazilian child, spouse or partner, among other cases provided by law.' },
            { label: 'Extraordinary', value: 'More than 15 uninterrupted years in Brazil.' },
          ],
          src: SRC.lei13445,
          srcLabel: 'Lei 13.445/2017, arts. 65 to 67',
        },
        {
          type: 'text',
          title: 'How the official process works',
          paragraphs: ['The application is free and filed on the Naturalizar-se platform, with an in-person step at the Federal Police. The estimated timeline is up to 180 days. If the application is denied, an appeal can be filed within 10 days.'],
          src: SRC.govNat,
          srcLabel: 'gov.br',
        },
      ],
      faq: [
        { q: 'How many years do I need to live in Brazil?', a: '4 years for ordinary naturalization; 1 year with a Brazilian child, spouse or partner; more than 15 years for extraordinary naturalization.', src: SRC.lei13445, srcLabel: 'Lei 13.445/2017' },
        { q: 'Do I need to prove that I speak Portuguese?', a: 'Yes, with the Celpe-Bras or other documents accepted by the Ministry of Justice.', src: '', srcLabel: '' },
        { q: 'How much does it cost and how long does it take?', a: 'The official application is free and has an estimated timeline of up to 180 days. Our fee is quoted during the assessment.', src: SRC.govNat, srcLabel: 'gov.br' },
        { q: 'What if the application is denied?', a: 'An appeal can be filed within 10 days. We guide you through the appeal.', src: SRC.govNat, srcLabel: 'gov.br' },
        { q: 'Will I lose my original nationality?', a: 'It depends on the law of your country. We check your case before you apply.', src: '', srcLabel: '' },
      ],
      cta: { title: 'Find out if you can already become a Brazilian citizen.', text: '' },
      disclaimer: 'The decision on naturalization rests with the Ministry of Justice and Public Security.',
    },

    vistoEua: {
      label: 'US visa',
      card: 'Reviewed DS-160 and preparation for the consular interview.',
      meta: {
        title: 'US visa assistance: DS-160 and interview | BrasilVisa',
        description:
          'US visa assistance in São Paulo: reviewed DS-160, document checklist and mock interview. No promise of approval.',
      },
      hero: {
        title: 'Your US visa without the guesswork: from the DS-160 to the interview.',
        subtitle: 'We review your history, organize your documents and prepare you for the interview at the consulate.',
      },
      blocks: [
        {
          type: 'list',
          title: 'What is included',
          items: [
            'Assessment of your profile and the right visa category for your trip.',
            'Assisted completion of the DS-160 with a final check of your details.',
            'Document checklist tailored to your profile.',
            'Guidance on the fee and scheduling through the official channel.',
            'Mock interview with feedback.',
          ],
        },
        {
          type: 'text',
          title: 'Good to know',
          paragraphs: ['Since October 1, 2025, almost all applicants need an in-person interview, including for many renewals. Wait times vary by city.'],
          src: SRC.waitTimes,
          srcLabel: 'US Department of State',
        },
      ],
      faq: [
        { q: 'Do you guarantee the visa?', a: 'No. The decision rests solely with the consulate. We reduce the mistakes that most often lead to a refusal.', src: '', srcLabel: '' },
        { q: 'How much is the consular fee?', a: 'The tourist and business visa fee is charged and paid directly to the US government. We give you the current amount during the assessment.', src: '', srcLabel: '' },
        { q: 'Do I need an interview to renew?', a: 'As a rule, yes, since October 1, 2025. Some recent renewals may be exempt; we check your case.', src: '', srcLabel: '' },
        { q: 'Is there an extra US$ 250 fee?', a: 'It is provided for in US law and charged only if the visa is issued, but when collection will start is still unclear. We will let you know once there is official confirmation.', src: '', srcLabel: '' },
        { q: 'What do you do besides the DS-160?', a: 'Profile assessment, documents that show your ties to Brazil and a mock interview with feedback.', src: '', srcLabel: '' },
      ],
      cta: { title: 'Let us prepare your interview.', text: 'Tell us where you are going and when. We reply within 24 hours.' },
      disclaimer: 'BrasilVisa is not affiliated with the US Embassy or consulates. We do not guarantee visa issuance: the decision rests solely with the consular authority.',
    },
  },

  quemSomos: {
    meta: {
      title: 'About us | BrasilVisa, immigration consultancy in São Paulo',
      description: 'Meet BrasilVisa, an immigration consultancy in São Paulo founded by Clariane Alcantara, with two offices in the city.',
    },
    title: 'BrasilVisa: immigration consultancy in São Paulo.',
    text: 'BrasilVisa advises foreigners who want to invest, live or regularize their status in Brazil. Founded by Clariane Alcantara, with a background in International and Immigration Law.',
    years: '', // PREENCHER: anos de atuação (o site atual diz 9 em algumas páginas e 10 em outras)
    addresses: 'Two offices in São Paulo, one of them across from the Federal Police in Água Branca.',
    howTitle: 'How we work',
    how: [
      { title: 'Follow-up', text: 'You always know which stage your process is at.' },
      { title: 'Tailored', text: 'Each case has its own legal basis and its own document list.' },
      { title: 'Legal deadlines', text: 'We plan ahead so no deadline is missed.' },
      { title: 'Transparency', text: 'Government fees kept separate from our fees, with the link for each amount.' },
    ],
    reviewsTitle: 'What our clients say',
    // Depoimentos já publicados em brasillvisa.com.br. PREENCHER: confirmar autorização de uso.
    reviews: [
      { name: 'Rafaela, Salvador/BA', text: 'Excellent service. Great support and professionalism, thank you Dr. Clariane. I recommend it!' },
      { name: 'Luiz, Campinas', text: 'Great service, committed and attentive professionals, with good communication and outstanding support. Highly recommended!' },
      { name: 'Tiago, Curitiba/PR', text: 'Just want to say thanks, excellent service, fast and honest. Gratitude and success.' },
    ],
    photoPending: 'Team photo coming soon',
  },

  contato: {
    form: {
      name: 'Name',
      phone: 'WhatsApp',
      email: 'Email',
      subject: 'Topic',
      subjects: ['Investor visa', 'Real estate investment', 'Family reunification', 'CRNM', 'Naturalization', 'US visa', 'Other'],
      language: 'Preferred language',
      languages: ['Português', 'English', '中文'],
      message: 'Message',
      consent: 'I have read and agree to the Privacy Policy.',
      submit: 'Send',
      sending: 'Sending',
      note: 'Please do not send documents here. We use your details only to reply to you.',
      error: 'We could not send your message. Please try again or contact us on WhatsApp.',
      required: 'Please fill in this field.',
    },
  },

  obrigado: {
    meta: { title: 'Message received | BrasilVisa', description: 'We have received your message through the BrasilVisa website. We reply within 24 hours, in the language you chose.' },
    title: 'We have received your message.',
    text: 'We will reply within 24 hours, in the language you chose. If it is urgent, message us now on WhatsApp.',
    waButton: 'Open WhatsApp',
    back: 'Back to home',
  },

  notFound: {
    meta: { title: 'Page not found | BrasilVisa', description: 'This page does not exist.' },
    title: 'This page does not exist.',
    text: 'The address may have changed. Choose where to go next:',
  },

  privacidade: {
    meta: { title: 'Privacy Policy | BrasilVisa', description: 'How BrasilVisa collects, uses and protects your personal data, in accordance with the LGPD.' },
    title: 'Privacy Policy',
    controller: 'Data controller: BrasilVisa Assessoria Empresarial Ltda, CNPJ 38.076.921/0001-00.',
    updated: 'Last updated: October 23, 2026.',
    sections: [
      { title: 'What data we collect', text: 'Name, phone number, email and the message you send through the form or WhatsApp. If you accept, audience measurement cookies.' },
      { title: 'How we use it', text: 'To reply to your enquiry and, if you hire us, to provide the consulting service.' },
      { title: 'Legal basis', text: 'Brazilian General Data Protection Law (Lei 13.709/2018): consent, to reply to your enquiry, and performance of a contract, for the consulting service you hire.' },
      { title: 'Who we share it with', text: 'We never sell data. We share it only with government bodies when you yourself request the service, and with hosting and messaging providers needed to serve you.' },
      { title: 'How long we keep it', text: 'For as long as needed to serve you and to meet legal obligations. [prazo de guarda a preencher]' },
      { title: 'Your rights', text: 'You can request access to, correction, deletion and portability of your data, and withdraw your consent at any time.' },
      { title: 'Cookies', text: 'Measurement cookies are only used with your consent. You can refuse or delete cookies in your browser settings.' },
      { title: 'Data protection officer', text: 'Data protection officer: [nome a preencher]. Email: contato@brasillvisa.com.br.' },
    ],
  },
};

export default en;
