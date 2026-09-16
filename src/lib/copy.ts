export type Locale = "pt" | "en";

export const NAV = [
  { href: "/software", key: "software" as const },
  { href: "/infrastructure", key: "infrastructure" as const },
  { href: "/consulting", key: "consulting" as const },
  { href: "/support", key: "support" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export const copy = {
  pt: {
    nav: {
      software: "Software",
      infrastructure: "Infraestrutura",
      consulting: "Consultoria",
      support: "Suporte",
      about: "Sobre",
      contact: "Contacto",
    },
    lang: { pt: "PT", en: "EN" },
    hero: {
      kicker: "Integrador TIC · desde 2008",
      title: "Tecnologia que as organizações realmente usam.",
      howTitle: "How We Help",
      howBody:
        "Desenhamos, integramos e operamos software, infraestrutura e cibersegurança para empresas que precisam de sistemas a funcionar — em Portugal, Moçambique e nos mercados onde já operamos.",
      talkTitle: "Ready to Talk?",
      talkBody:
        "Fale connosco sobre o próximo projecto de software, data centre, cloud ou suporte. Respondemos com um próximo passo concreto.",
      cta: "Contactar",
      play: "Ver o que fazemos",
    },
    pillars: {
      label: "Quatro pilares",
      title: "Uma empresa. Quatro formas de ajudar.",
      items: [
        {
          href: "/software",
          kicker: "01",
          title: "Software",
          body: "Aplicações, plataformas e integrações que ligam o negócio aos sistemas que já tem.",
        },
        {
          href: "/infrastructure",
          kicker: "02",
          title: "Infraestrutura",
          body: "Redes, data centre, cloud e colaboração — desenhadas para aguentar o dia a dia.",
        },
        {
          href: "/consulting",
          kicker: "03",
          title: "Consultoria",
          body: "Arquitectura, transformação e escolha de tecnologia com quem depois implementa.",
        },
        {
          href: "/support",
          kicker: "04",
          title: "Suporte",
          body: "Operação, manutenção e resposta — para o ambiente não parar quando o projecto acaba.",
        },
      ],
    },
    trust: {
      label: "Parceiros e certificações",
      note: "Nomes públicos. Marcas registadas pertencem aos respectivos detentores.",
      items: [
        "Cisco Gold Partner",
        "HPE Partner Ready",
        "CrowdStrike Elevate",
        "Huawei Certified Service Partner",
      ],
    },
    about: {
      kicker: "Sobre a Real Life Technologies",
      title: "Integrador TIC, nascido em 2008.",
      lead: "A Real Life Technologies nasceu em Abril de 2008 para alargar o âmbito dos serviços de tecnologias de informação e comunicação já prestados a clientes exigentes. Desde 2010 internacionalizou a operação e presta serviços em mais de 20 países, em três continentes.",
      body: "Somos cerca de 150 pessoas. Sede em Algés, operação em Moçambique, e uma prática de parceiro certificado junto dos fabricantes com quem os clientes já trabalham — Cisco, HPE, CrowdStrike, Huawei e outros. Este site é um protótipo da nova presença digital: o mesmo negócio, uma linguagem à altura da empresa.",
      facts: [
        { k: "2008", v: "Fundação" },
        { k: "~150", v: "Pessoas" },
        { k: "20+", v: "Países" },
        { k: "PT · MZ", v: "Operação" },
      ],
    },
    software: {
      kicker: "Software",
      title: "Sistemas que o negócio consegue abrir de manhã.",
      lead: "Aplicações à medida, portais, integrações e camadas digitais à volta das plataformas que já existem — sem um folheto a fingir de produto. No site actual isto aparece misturado com notícias de parceiros; aqui fica um pilar próprio.",
      points: [
        "Aplicações web, portais de cliente e ferramentas internas",
        "Integração entre sistemas, APIs e dados que o negócio já corre",
        "Software e serviços à volta de HPE, incluindo a camada que o cliente opera",
        "Modernização de aplicações que ainda aguentam o dia a dia",
      ],
    },
    infrastructure: {
      kicker: "Infraestrutura",
      title: "A base em que o resto assenta.",
      lead: "Redes, data centre, storage, cloud híbrida e colaboração. O trabalho que não se vê quando corre bem — e que não pode falhar. HPE Partner Ready e Aruba entram aqui como capacidade, não como logótipos de stock.",
      points: [
        "Redes, campus e cibersegurança de perímetro",
        "Data centre, storage e infraestrutura convergente HPE",
        "Cloud híbrida e serviços Aruba / hybrid IT",
        "Colaboração e postos de trabalho",
      ],
    },
    consulting: {
      kicker: "Consultoria",
      title: "Decisões de arquitectura com quem depois constrói.",
      lead: "Ajudamos a escolher, sequenciar e governar tecnologia — com a mesma equipa que pode entregar o resultado, não um relatório que fica na gaveta.",
      points: [
        "Arquitectura de sistemas e de rede",
        "Planos de transformação e migração",
        "Selecção de plataformas e parceiros",
        "Governação, risco e operação",
      ],
    },
    support: {
      kicker: "Suporte",
      title: "Operar o que foi entregue.",
      lead: "Manutenção, monitorização e resposta. CrowdStrike Elevate e Huawei Certified Service Partner no site actual são prova de operação — não de um folheto. O ambiente tem de continuar a funcionar depois do projecto.",
      points: [
        "Suporte e manutenção de ambientes em produção",
        "Endpoint, higiene e resposta (incluindo a prática CrowdStrike publicada)",
        "Patches, actualizações e operação Huawei Certified Service Partner",
        "Acordos de serviço à medida da operação",
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Pronto a falar?",
      lead: "Este formulário é um protótipo — não envia e-mail. Use o endereço geral para o pedido real.",
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      message: "Mensagem",
      send: "Enviar mensagem",
      sent: "Recebido no protótipo. Para o pedido real: geral@reallife.pt",
      addressLabel: "Lisboa",
      emailLabel: "E-mail",
    },
    cookies: {
      title: "Cookies",
      body: "Usamos apenas cookies essenciais neste protótipo (idioma e consentimento). Sem rastreio de publicidade.",
      accept: "Aceitar",
      reject: "Recusar",
    },
    footer: {
      rights: "Real Life Technologies. Protótipo — não é o site de produção.",
      privacy: "Privacidade",
      proto: "Protótipo DatabyPassion",
    },
    privacy: {
      kicker: "Privacidade",
      title: "Como tratamos dados neste protótipo.",
      body: "Este site é um protótipo de design. O formulário de contacto não envia dados para um servidor. O idioma e a escolha de cookies ficam no seu browser. O site de produção em reallife.pt continua a ser a presença oficial até ao go-live.",
    },
    ctaStrip: {
      title: "Um site à altura da operação.",
      body: "Software, infraestrutura, consultoria e suporte — numa linguagem que um CIO e um cliente conseguem ler.",
      action: "Falar connosco",
    },
  },
  en: {
    nav: {
      software: "Software",
      infrastructure: "Infrastructure",
      consulting: "Consulting",
      support: "Support",
      about: "About",
      contact: "Contact",
    },
    lang: { pt: "PT", en: "EN" },
    hero: {
      kicker: "ICT integrator · since 2008",
      title: "Technology organisations actually run.",
      howTitle: "How We Help",
      howBody:
        "We design, integrate and operate software, infrastructure and cybersecurity for companies that need systems that work — in Portugal, Mozambique and the markets we already serve.",
      talkTitle: "Ready to Talk?",
      talkBody:
        "Talk to us about the next software, data-centre, cloud or support programme. We reply with a concrete next step.",
      cta: "Contact us",
      play: "See what we do",
    },
    pillars: {
      label: "Four pillars",
      title: "One firm. Four ways in.",
      items: [
        {
          href: "/software",
          kicker: "01",
          title: "Software",
          body: "Applications, platforms and integrations that connect the business to the systems it already has.",
        },
        {
          href: "/infrastructure",
          kicker: "02",
          title: "Infrastructure",
          body: "Networks, data centre, cloud and collaboration — built to hold the working day.",
        },
        {
          href: "/consulting",
          kicker: "03",
          title: "Consulting",
          body: "Architecture, transformation and technology choice with the team that then implements.",
        },
        {
          href: "/support",
          kicker: "04",
          title: "Support",
          body: "Operations, maintenance and response — so the environment does not stall when the project ends.",
        },
      ],
    },
    trust: {
      label: "Partners and certifications",
      note: "Public names. Registered marks belong to their respective holders.",
      items: [
        "Cisco Gold Partner",
        "HPE Partner Ready",
        "CrowdStrike Elevate",
        "Huawei Certified Service Partner",
      ],
    },
    about: {
      kicker: "About Real Life Technologies",
      title: "An ICT integrator, founded in 2008.",
      lead: "Real Life Technologies was founded in April 2008 to extend the information and communications technology services already delivered to demanding clients. Internationalisation began in 2010. The firm now delivers in more than 20 countries across three continents.",
      body: "We are around 150 people. Headquarters in Algés, an operation in Mozambique, and a certified-partner practice with the vendors clients already run — Cisco, HPE, CrowdStrike, Huawei and others. This site is a prototype of the new digital presence: the same business, in a language that matches the firm.",
      facts: [
        { k: "2008", v: "Founded" },
        { k: "~150", v: "People" },
        { k: "20+", v: "Countries" },
        { k: "PT · MZ", v: "Operations" },
      ],
    },
    software: {
      kicker: "Software",
      title: "Systems the business can open in the morning.",
      lead: "Custom applications, portals, integrations and digital layers around platforms that already exist — not a brochure pretending to be a product. On the live WordPress site this is mixed with partner news; here it is its own pillar.",
      points: [
        "Web applications, customer portals and internal tools",
        "System integration, APIs and data the business already runs",
        "Software and wrap-around services on HPE platforms",
        "Modernisation of applications that still hold the working day",
      ],
    },
    infrastructure: {
      kicker: "Infrastructure",
      title: "The layer everything else sits on.",
      lead: "Networks, data centre, storage, hybrid cloud and collaboration. The work you do not notice when it holds — and that cannot fail. HPE Partner Ready and Aruba sit here as capability, not as stock logos.",
      points: [
        "Networking, campus and perimeter security",
        "Data centre, storage and HPE converged infrastructure",
        "Hybrid cloud and Aruba / hybrid IT services",
        "Collaboration and workplace",
      ],
    },
    consulting: {
      kicker: "Consulting",
      title: "Architecture decisions with the team that then builds.",
      lead: "We help choose, sequence and govern technology — with the same people who can deliver the result, not a report that stays in a drawer.",
      points: [
        "Systems and network architecture",
        "Transformation and migration plans",
        "Platform and partner selection",
        "Governance, risk and operations",
      ],
    },
    support: {
      kicker: "Support",
      title: "Operate what was delivered.",
      lead: "Maintenance, monitoring and response. CrowdStrike Elevate and Huawei Certified Service Partner on the current site are evidence of operations — not a brochure. The environment has to keep running after the project ends.",
      points: [
        "Production support and maintenance",
        "Endpoint, hygiene and response (including the published CrowdStrike practice)",
        "Patches, upgrades and Huawei Certified Service Partner operations",
        "Service agreements shaped to the operation",
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Ready to talk?",
      lead: "This form is a prototype — it does not send email. Use the general address for a real request.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      send: "Send message",
      sent: "Captured in the prototype. For a real request: geral@reallife.pt",
      addressLabel: "Lisbon",
      emailLabel: "Email",
    },
    cookies: {
      title: "Cookies",
      body: "This prototype uses essential cookies only (language and consent). No advertising tracking.",
      accept: "Accept",
      reject: "Reject",
    },
    footer: {
      rights: "Real Life Technologies. Prototype — not the production site.",
      privacy: "Privacy",
      proto: "DatabyPassion prototype",
    },
    privacy: {
      kicker: "Privacy",
      title: "How this prototype handles data.",
      body: "This site is a design prototype. The contact form does not send data to a server. Language and cookie choice stay in your browser. The production site at reallife.pt remains the official presence until go-live.",
    },
    ctaStrip: {
      title: "A site that matches the operation.",
      body: "Software, infrastructure, consulting and support — in a language a CIO and a client can both read.",
      action: "Talk to us",
    },
  },
} as const;
