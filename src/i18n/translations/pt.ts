export const pt = {
  nav: {
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    experience: 'Experiência',
    support: 'Apoie',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  hero: {
    hello: 'olá, meu nome é',
    description:
      'Desenvolvedor Full Stack júnior apaixonado por tecnologia. Construo aplicações web modernas com React, TypeScript, Node.js e NestJS — com foco em performance, escalabilidade e experiência do usuário.',
    viewProjects: 'Ver projetos',
    statYears: 'anos em tech',
    statRepos: 'repositórios',
    statFollowers: 'seguidores',
    coffeeBadge: 'movido a café ☕',
  },
  about: {
    title: 'Sobre mim',
    paragraph1:
      'Minha trajetória em tecnologia começou na infraestrutura de TI — suporte, redes e configuração de ambientes — e evoluiu para o desenvolvimento de software. Nesse caminho, construí websites responsivos e interfaces otimizadas para diferentes dispositivos, sempre com foco em entregar valor real: produtos mais rápidos, acessíveis e agradáveis de usar.',
    paragraph2:
      'Hoje sou Desenvolvedor de Software na Hortti, a infraestrutura digital das Ceasas: uma plataforma que conecta todas as centrais de abastecimento do Brasil em um só lugar, digitalizando o comércio de hortifrúti e aproximando produtores, comerciantes e compradores. Lá desenvolvo funcionalidades de ponta a ponta com React, TypeScript, NestJS e PostgreSQL — da modelagem do banco à interface — aplicando testes de unidade e boas práticas de arquitetura em um produto que movimenta o abastecimento alimentar do país.',
    paragraph3:
      'Meu objetivo é seguir crescendo resolvendo problemas de verdade. Determinado a evoluir profissionalmente, estou sempre aberto a desafios, boas conversas e oportunidades de aprendizado.',
    factRole: 'Full Stack Developer',
    factDegree: 'Eng. de Software (cursando)',
  },
  skills: {
    title: 'Skills & Tecnologias',
  },
  projects: {
    title: 'Projetos em destaque',
    subtitle: 'Uma seleção de projetos pessoais — clique para ver o código no GitHub.',
    screenshotAlt: (name: string) => `Screenshot do projeto ${name}`,
    viewAll: (count: number) => `Ver todos os ${count} repositórios`,
  },
  experience: {
    title: 'Experiência',
    current: 'ATUAL',
  },
  education: {
    title: 'Formação',
    ongoing: 'cursando',
    completed: 'concluído',
  },
  github: {
    publicRepos: 'repositórios públicos',
    followers: 'seguidores',
    stars: 'stars recebidas',
    memberSince: 'no GitHub desde',
    statsTitle: 'estatísticas',
    langsTitle: 'linguagens mais usadas',
    loading: 'carregando…',
    statsUnavailable: 'estatísticas indisponíveis no momento — veja direto no perfil',
  },
  support: {
    kicker: 'apoie meu trabalho',
    title: 'Me pague um café ☕',
    description:
      'Gostou do meu trabalho ou de algum projeto? Você pode apoiar minha jornada como dev com uma contribuição de qualquer valor via PIX. Todo apoio vira café — e café vira código.',
    amountLabel: 'Valor da contribuição',
    customAmountLabel: 'Outro valor (R$)',
    customAmountPlaceholder: 'ex.: 15,00',
    messageLabel: 'Mensagem (opcional)',
    messagePlaceholder: 'Deixe um recado :)',
    submit: 'Gerar PIX',
    generating: 'Gerando cobrança…',
    awaitingPayment: 'aguardando pagamento',
    scanTitle: 'Escaneie o QR Code para pagar',
    scanDescription: 'Abra o app do seu banco e escaneie o código, ou use o copia-e-cola abaixo.',
    copyCode: 'Copiar código PIX',
    copied: 'Copiado!',
    expiresIn: 'expira em',
    paidTitle: 'Pagamento recebido! 💚',
    paidDescription: 'Muito obrigado pelo apoio — ele faz toda a diferença. Bom café garantido!',
    expiredTitle: 'Este PIX expirou',
    startOver: 'Gerar um novo',
    cancel: 'Cancelar',
    errorGeneric: 'Não foi possível gerar a cobrança agora. Tente novamente em instantes.',
    unavailable: 'As contribuições estão temporariamente indisponíveis.',
    amountHint: (min: string, max: string) => `entre ${min} e ${max}`,
    invalidAmount: 'Informe um valor válido.',
    qrAlt: 'QR Code PIX para contribuição',
  },
  contact: {
    kicker: 'e agora?',
    title: 'Vamos conversar!',
    description:
      'Estou sempre aberto a novas oportunidades, projetos e boas conversas sobre tecnologia. Me chama!',
  },
  footer: 'construído do zero com muito café',
}

export type Translation = typeof pt
