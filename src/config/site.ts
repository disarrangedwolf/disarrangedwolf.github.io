export const siteConfig = {
  brand: {
    name: 'DisarrangedWOlf',
    logoText: './DisarrangedWOlf',
  },
  seo: {
    title: 'DisarrangedWolf, LLC',
    description:
      'Fullstack Developer and Cyber Security Analyst in training',
    author: 'DisarrangedWolf',
    keywords:
      'security consultant portfolio, penetration testing, incident response, cybersecurity, front stack, rear stack, full stack, developer',
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
      'Full Stack Development',
    ],
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/disarrangedwolf' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  sections: {
    services: {
      heading: 'sudo list-services',
    },
    methodology: {
      heading: 'cat /etc/methodology',
    },
    certifications: {
      heading: 'cat /etc/certs',
    },
    toolstack: {
      heading: 'ls -la /opt/tools',
      terminalTitle: '/opt/tools - secure inventory',
      promptUser: 'op@node',
      promptPath: '/opt/tools',
      command: 'ls -la',
      summary: {
        directories: 4,
        tools: 18,
      },
    },
    projects: {
      heading: 'cat /var/log/projects',
    },
  },
  services: [
    {
      title: 'Penetration Testing',
      desc: 'Comprehensive red-team operations simulating advanced persistent threats to uncover critical vulnerabilities.',
      icon: 'lock',
    },
    {
      title: 'Incident Response',
      desc: 'Rapid containment, eradication, and recovery from active breaches. Digital forensics and malware analysis.',
      icon: 'dns',
    },
    {
      title: 'Security Auditing',
      desc: 'Code reviews, cloud infrastructure assessments, and compliance checks (SOC2, HIPAA) for robust posture.',
      icon: 'shield',
    },
    {
      title: 'Infrastructure Security',
      desc: 'Zero-trust architecture implementation, network segmentation, and secure CI/CD pipeline integration.',
      icon: 'memory',
    },
  ],
  certifications: [
    {
      name: 'OSCP',
      title: 'Offensive Security Certified Professional',
      issuer: 'OffSec',
      file: 'oscp.cert',
      issued: '2023-04-12',
      status: 'active',
    },
    {
      name: 'CISSP',
      title: 'Certified Information Systems Security Professional',
      issuer: 'ISC2',
      file: 'cissp.cert',
      issued: '2022-09-18',
      status: 'active',
    },
    {
      name: 'CEH',
      title: 'Certified Ethical Hacker',
      issuer: 'EC-Council',
      file: 'ceh.cert',
      issued: '2021-06-03',
      status: 'active',
    },
  ],r: {
    status: 'CONNECTION SECURE',
  },
} as const;
