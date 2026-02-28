// Profile data — Sang Bui | Software Development Services

export const profileData = {
  name: 'SANG BUI',
  title: 'Full-Stack Software Developer',
  tagline: 'I build the software your business needs — web apps, APIs, AI integrations, shipped on time.',
  clients: 6,
  productsShipped: 150,
  experience: '5+ years',
  availability: 'Currently available for new projects',
  services: [
    'Full-Stack Web Development',
    'AI & Automation Pipelines',
    'API Design & Integration',
    'Tech Consulting',
  ],
  contact: {
    email: 'contact@sangbui20501.com',
    linkedin: 'linkedin.com/in/sangbui20501',
  },
};

export const skills = [
  { name: 'React/Next.js', icon: 'devicon-react-original', category: 'Frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', category: 'Language' },
  { name: 'Java/Kotlin', icon: 'devicon-java-plain', category: 'Backend' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain', category: 'Backend' },
  { name: 'Quarkus', icon: '🔥', category: 'Backend' },
  { name: 'Python', icon: 'devicon-python-plain', category: 'Language' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', category: 'Database' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', category: 'DevOps' },
  { name: 'Docker', icon: 'devicon-docker-plain', category: 'DevOps' },
  { name: 'Terraform', icon: 'devicon-terraform-plain', category: 'DevOps' },
  { name: 'ArgoCD', icon: 'devicon-argocd-plain', category: 'DevOps' },
  { name: 'GitHub Actions', icon: 'devicon-github-original', category: 'DevOps' },
  { name: 'AI Workflow / Automation', icon: '✦', category: 'AI', featured: true },
];

export const projects = [
  {
    name: 'AI Workflow Platform',
    client: 'Deepxplore',
    description: 'Problem: engineering teams spending weeks on manual performance testing. Solution: end-to-end AI platform with automated test generation, intelligent analysis, and reporting. Outcome: testing cycles cut from days to hours.',
    completed: true,
    stack: ['Java', 'Quarkus', 'Next.js', 'GCP', 'Auth0'],
    featured: true,
  },
  {
    name: 'AI Security Platform',
    client: 'Be Software',
    description: 'Problem: security teams drowning in vulnerability alerts with no clear fix path. Solution: AI-powered vuln scanner that analyzes Ansible/Puppet systems, auto-generates remediation playbooks, and deploys fixes. Features: custom scan workflows, compliance checks (HIPAA, ISO), cloud scanning.',
    completed: true,
    stack: ['Ruby on Rails', 'React', 'TypeScript', 'Kafka', 'PostgreSQL'],
  },
  {
    name: 'Payment Platform',
    client: 'Handlpay',
    description: 'Scalable payment processing with multi-gateway support and real-time transaction tracking. Built to handle growth without re-architecture.',
    completed: true,
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'K8s'],
  },
  {
    name: 'Enterprise Sales Tool',
    client: 'Metro Digital',
    description: 'B2B sales management platform for one of Europe\'s largest wholesale operators. 3 years of iterative delivery — microservices, TDD, and zero-downtime deploys.',
    completed: true,
    stack: ['TypeScript', 'Java', 'React', 'Spring Boot', 'K8s'],
  },
  {
    name: 'Card Trading Platform',
    client: 'DuelAllDay',
    description: 'Full product build: TCG data catalog, ordering system, and payments. Went from idea to live product with real users.',
    completed: true,
    stack: ['Next.js', 'Django', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'IoT Fleet Tracker',
    client: 'SAMCO - AIOT Lab',
    description: 'Real-time vehicle tracking for municipal garbage collection across Vietnam. Live map, IoT device integration, ops dashboard.',
    completed: true,
    stack: ['React', '.NET', 'PostgreSQL', 'OpenStreetMap'],
  },
];

// Additional technologies
export const extraTechs = [
  { name: 'Kafka',          icon: 'devicon-apachekafka-original' },
  { name: 'Redis',          icon: 'devicon-redis-plain' },
  { name: 'gRPC',           icon: '⚡' },
  { name: 'Terragrunt',     icon: '🏗️' },
  { name: 'Datadog',        icon: '📊' },
  { name: 'GCP',            icon: 'devicon-googlecloud-plain' },
  { name: 'Solr',           icon: '🔍' },
  { name: 'Cassandra',      icon: 'devicon-cassandra-plain' },
];
