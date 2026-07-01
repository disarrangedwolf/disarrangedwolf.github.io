export const siteConfig = {
  brand: {
    name: 'DisarrangedWolf',
    logoText: './DisarrangedWolf',
  },
  seo: {
    title: 'DisarrangedWolf - Security Consultant Portfolio Theme',
    description:
      'A dark terminal-inspired Astro theme for security consultants, penetration testers, and incident response specialists.',
    author: 'DisarrangedWolf',
    keywords:
      'security consultant portfolio, penetration testing, incident response, cybersecurity analyst, full stack dev',
    siteName: 'DisarrangedWolf',
    themeColor: '#0D1117',
    twitterCard: 'summary',
  },
  jsonLd: {
    type: 'ProfessionalService',
    areaServed: 'Worldwide',
    serviceType: [
      'Penetration Testing',
      'Incident Response',
      'Security Auditing',
      'Infrastructure Security',
    ],
  },
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Certs', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#redacted-testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  contact: {
    email: 'wolf@disarrangedwolf.com',
    formHelp: 'At tthis time we are not accepting work, but feel free to ask any questions!',
    emailLabel: 'TARGET_EMAIL',
    emailPlaceholder: 'user@domain.com',
    messageLabel: 'PAYLOAD',
    messagePlaceholder: 'Enter scope details...',
    submitLabel: 'Execute Transmit',
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  hero: {
    command: 'scanning...',
    terminalSequence: ['scanning...', 'threat profile mapped...', 'access granted...'],
    title: 'Find The Breach',
    highlightedTitle: 'Before It Finds You',
    description:
      'I am a full stack dev and cyber security analyst who is very new to both worlds.  ',
    primaryCta: { label: 'Initiate Contact', href: '#contact' },
    secondaryCta: { label: 'View Operations', href: '#services' },
    proof: {
      stats: [
        { value: , suffix: '+', label: '' },
        { value: , suffix: '', label: '' },
        { value: , suffix: '', label: '' },
      ],
    },
  },
  sections: {
    services: {
      heading: '',
    },
    methodology: {
      heading: '',
    },
    certifications: {
      heading: '',
    },
    toolstack: {
      heading: '',
      terminalTitle: '',
      promptUser: '',
      promptPath: '',
      command: '',
      summary: {
        directories: 4,
        tools: 18,
      },
    },
    projects: {
      heading: '',
    },
    testimonials: {
      heading: '',
      eyebrow: '',
      note: '',
    },
    contact: {
      heading: './establish-link',
    },
  },
  services: [
    {
      title: '',
      desc: '',
      icon: 'lock',
    },
    {
      title: '',
      desc: '',
      icon: 'dns',
    },
    {
      title: '',
      desc: '',
      icon: 'shield',
    },
    {
      title: '',
      desc: '',
      icon: 'memory',
    },
  ],
  methodology: [
    {
      title: '',
      desc: '',
      icon: 'target',
    },
    {
      title: '',
      desc: '',
      icon: 'code_blocks',
    },
    {
      title: '',
      desc: '',
      icon: 'check_circle',
    },
  ],
  certifications: [
    {
      name: '',
      title: '',
      issuer: '',
      file: '',
      issued: '',
      status: '',
    },
    {
      name: '',
      title: '',
      issuer: '',
      file: '',
      issued: '',
      status: '',
    },
    {
      name: '',
      title: '',
      issuer: '',
      file: '',
      issued: '',
      status: '',
    },
  ],
  toolCategories: [
    {
      name: '',
      owner: '',
      size: '',
      tools: ['', '', '', '', ''],
    },
    {
      name: '',
      owner: '',
      size: '',
      tools: ['', '', '', ''],
    },
    {
      name: '',
      owner: '',
      size: '',
      tools: ['', '', '', '', ''],
    },
    {
      name: ' ',
      owner: '',
      size: '',
      tools: ['', '', '', ''],
    },
  ],
  projects: [
    {
      name: '',
      category: '',
      desc: '',
      tech: ['', '', ''],
    },
    {
      name: '',
      category: '',
      desc: '',
      tech: ['', '', ''],
    },
  ],
  testimonials: [
    {
      quote:
        '',
      attribution: '',
      sector: '',
      rating: 5,
    },
    {
      quote:
        '',
      attribution: '',
      sector: '',
      rating: 5,
    },
    {
      quote:
        '',
      attribution: '',
      sector: '',
      rating: 5,
    },
  ],
  footer: {
    status: 'CONNECTION SECURE',
  },
} as const;
