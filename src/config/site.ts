export const siteConfig = {
  brand: {
    name: 'NULLTRACE',
    logoText: './NULLTRACE',
  },
  seo: {
    title: 'NULLTRACE - Security Consultant Portfolio Theme',
    description:
      'A dark terminal-inspired Astro theme for security consultants, penetration testers, and incident response specialists.',
    author: 'NULLTRACE',
    keywords:
      'security consultant portfolio, penetration testing, incident response, Astro theme, cybersecurity website',
    siteName: 'NULLTRACE',
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
    email: 'hello@nulltrace.security',
    formHelp: 'Demo form: connect this action to your preferred form endpoint before publishing.',
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
      'I identify vulnerabilities before adversaries do. Specializing in penetration testing, incident response, and securing mission-critical infrastructure.',
    primaryCta: { label: 'Initiate Contact', href: '#contact' },
    secondaryCta: { label: 'View Operations', href: '#services' },
    proof: {
      stats: [
        { value: 47, suffix: '+', label: 'engagements' },
        { value: 12, suffix: '', label: 'CVEs filed' },
        { value: 0, suffix: '', label: 'breaches post-engagement' },
      ],
    },
  },
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
    testimonials: {
      heading: '# REDACTED-TESTIMONIALS',
      eyebrow: 'client statements // identities withheld',
      note: 'All quotes are anonymized for operational security and NDA compliance.',
    },
    contact: {
      heading: './establish-link',
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
  methodology: [
    {
      title: 'Vulnerability Analysis',
      desc: 'Identify flaws, misconfigurations, and outdated components before adversaries can exploit them.',
      icon: 'target',
    },
    {
      title: 'Exploitation',
      desc: 'Execute proof-of-concept attacks safely to demonstrate real-world risk without disrupting service.',
      icon: 'code_blocks',
    },
    {
      title: 'Reporting & Remediation',
      desc: 'Deliver actionable remediation guidance, prioritized for business impact and recovery speed.',
      icon: 'check_circle',
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
  ],
  toolCategories: [
    {
      name: 'offensive',
      owner: 'redteam',
      size: '28K',
      tools: ['Burp Suite Pro', 'Metasploit', 'Cobalt Strike', 'Nmap', 'Wireshark'],
    },
    {
      name: 'defensive',
      owner: 'blueteam',
      size: '19K',
      tools: ['Splunk', 'Suricata', 'OSSEC', 'CrowdStrike Falcon'],
    },
    {
      name: 'scripting-dev',
      owner: 'operator',
      size: '34K',
      tools: ['Python', 'Bash', 'Go', 'Rust', 'PowerShell'],
    },
    {
      name: 'cloud-iam',
      owner: 'platform',
      size: '23K',
      tools: ['AWS Security Hub', 'Azure AD', 'Terraform', 'Docker/K8s'],
    },
  ],
  projects: [
    {
      name: 'Project.OVERWATCH',
      category: 'Red Team Operation',
      desc: 'Anonymized execution of a full-scale external and internal penetration test for a Fortune 500 financial institution. Discovered and remediated a zero-day in their custom middleware.',
      tech: ['Cobalt Strike', 'Python', 'Ghidra'],
    },
    {
      name: 'ZeroTrust.ARCH',
      category: 'Infra Design',
      desc: 'Architected a complete identity-aware zero-trust network for a distributed healthcare provider, enforcing granular access controls across multi-cloud environments.',
      tech: ['AWS', 'Terraform', 'Okta'],
    },
  ],
  testimonials: [
    {
      quote:
        'Their assessment translated technical risk into board-level decisions without losing the evidence our engineering team needed to fix issues fast.',
      attribution: 'Fortune 500 CISO',
      sector: 'Financial Sector',
      rating: 5,
    },
    {
      quote:
        'The incident response support was precise, calm, and deeply practical. We moved from containment to recovery with a clear chain of custody.',
      attribution: 'VP of Infrastructure',
      sector: 'Healthcare Platform',
      rating: 5,
    },
    {
      quote:
        'The red-team engagement exposed attack paths our internal controls had missed and left us with remediation steps we could actually execute.',
      attribution: 'Director of Security Engineering',
      sector: 'SaaS Enterprise',
      rating: 5,
    },
  ],
  footer: {
    status: 'CONNECTION SECURE',
  },
} as const;
