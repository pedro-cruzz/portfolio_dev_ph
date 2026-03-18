const portfolio = {
  name: 'Pedro',
  role: 'Desenvolvedor Full-Stack',
  statusLabel: 'disponivel para projetos',
  intro:
    'Use este layout como ponto de partida para apresentar quem voce e, seus principais projetos e os canais de contato. A estrutura ja esta pronta para voce so trocar os textos e links.',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/seuusuario',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/seuusuario',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:voce@email.com',
      icon: 'mail',
    },
  ],
  about: [
    'Esta home foi montada com base no visual do seu prototipo: fundo escuro, grade sutil, brilhos em cyan e ambar, tipografia forte e uma navegacao limpa no topo.',
    'A ideia aqui e deixar um setup inicial bonito e funcional para voce comecar a preencher com suas informacoes reais sem precisar redesenhar a estrutura principal.',
  ],
  highlights: [
    {
      label: 'Visual',
      title: 'Hero inspirado no prototipo',
      description:
        'Titulo central grande, badge de status, CTAs, icones sociais e atmosfera parecida com a arte que voce enviou.',
    },
    {
      label: 'Estrutura',
      title: 'Secoes prontas para crescer',
      description:
        'Sobre, habilidades, projetos, curriculo e contato ja existem como blocos independentes com links pelo menu.',
    },
    {
      label: 'Edicao',
      title: 'Conteudo separado em um arquivo',
      description:
        'Voce pode trocar nome, links, textos e cards rapidamente no arquivo de dados sem precisar mexer no layout inteiro.',
    },
  ],
  skills: [
    {
      name: 'React',
      tag: 'front-end',
      description:
        'Base para componentes reutilizaveis, paginas dinamicas e evolucao do portfolio em etapas.',
    },
    {
      name: 'Tailwind CSS',
      tag: 'styling',
      description:
        'Permite ajustar o visual direto nos componentes e iterar rapido em cima do prototipo.',
    },
    {
      name: 'JavaScript',
      tag: 'logica',
      description:
        'Essencial para interacoes, manipulacao de dados e futuras integracoes com APIs.',
    },
    {
      name: 'UI Design',
      tag: 'interface',
      description:
        'Ajuda a transformar referencia visual em telas consistentes, claras e com identidade propria.',
    },
    {
      name: 'Responsividade',
      tag: 'mobile',
      description:
        'A estrutura ja esta preparada para funcionar em desktop, tablet e celular.',
    },
    {
      name: 'Git & Deploy',
      tag: 'workflow',
      description:
        'Pronto para publicar em plataformas como Vercel, Netlify ou GitHub Pages.',
    },
  ],
  projects: [
    {
      title: 'Projeto 01',
      description:
        'Substitua este card por um case real, mostrando objetivo, solucao desenvolvida e stack utilizada.',
      stack: ['React', 'Tailwind', 'Vite'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Projeto 02',
      description:
        'Aqui voce pode destacar uma landing page, dashboard, e-commerce ou qualquer projeto que represente seu estilo.',
      stack: ['UI', 'Responsivo', 'Deploy'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Projeto 03',
      description:
        'Use o terceiro card para reforcar variedade: projeto autoral, freelancer, clone de interface ou estudo de caso.',
      stack: ['Componentes', 'UX', 'Front-end'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ],
  resume: {
    cards: [
      {
        label: 'Foco',
        value: 'Interfaces modernas e responsivas',
      },
      {
        label: 'Modelo',
        value: 'Freela, remoto ou oportunidades CLT',
      },
      {
        label: 'Atualizacao',
        value: 'Pronto para adicionar seu PDF',
      },
    ],
    note:
      'Quando quiser, este bloco pode virar uma timeline com experiencias, formacao, certificacoes ou um botao real para download do curriculo.',
    link: '#',
    ctaLabel: 'Adicionar curriculo',
  },
  contact: {
    email: 'voce@email.com',
    location: 'Sao Paulo, Brasil',
    phone: '+55 (11) 99999-9999',
    linkedin: 'https://linkedin.com/in/seuusuario',
    message:
      'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos criar algo incrivel juntos!',
    info: [
      {
        label: 'Email',
        value: 'voce@email.com',
        href: 'mailto:voce@email.com',
        icon: 'email',
      },
      {
        label: 'Localizacao',
        value: 'Sao Paulo, Brasil',
        href: null,
        icon: 'location',
      },
      {
        label: 'Telefone',
        value: '+55 (11) 99999-9999',
        href: 'tel:+5511999999999',
        icon: 'phone',
      },
    ],
    socialLinks: [
      {
        label: 'GitHub',
        href: 'https://github.com/seuusuario',
        username: '@seuusuario',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/seuusuario',
        username: '/in/seuusuario',
        icon: 'linkedin',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/seuusuario',
        username: '@seuusuario',
        icon: 'twitter',
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/seuusuario',
        username: '@seuusuario',
        icon: 'instagram',
      },
    ],
  },
}

export default portfolio
