// All site content lives here. Edit text in this file; components read from it.
// Anything in [square brackets] is a placeholder for you to fill in.

export const site = {
  name: 'Basit Ali',
  role: 'Backend Engineer and AI Engineer',
  location: 'Islamabad, Pakistan',
  email: 'basitaliaps@gmail.com',
  resume: '/Basit-Ali-CV.pdf',
  // Put your photo at public/basit-ali.jpg (portrait, about 800x1000). Set to null to hide.
  photo: '/basit-ali.jpg',
  socials: [
    { label: 'GitHub', href: 'https://github.com/basitali0318' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/basit-ali-aps' },
  ],
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Backend and AI Engineer, Islamabad',
  headline: 'I build reliable backend services and AI systems, from typed APIs to agent workflows.',
  supporting:
    'Currently at SustainStrat Analytics, working with NestJS, PostgreSQL, LangGraph and MCP on process analysis and Digital Twin modeling.',
}

// links: set to null when a link does not exist; the button is then hidden.
export const projects = [
  {
    title: 'Testomatic (Testify.ai)',
    year: '2025–26',
    team: true,
    problem:
      'Writing and maintaining UI tests by hand is slow, and the tests break whenever the interface changes.',
    tags: ['LangGraph', 'Playwright', 'Llama 3.3'],
    outcome:
      'Final year project. LangGraph maps the DOM and an LLM generates Playwright tests from it. I built the Python backend in the early phase; the team later moved to Angular and Electron because of browser sandboxing limits. [metric]',
    links: { live: null, github: null },
  },
  {
    title: 'Digital Twin / BPMN Flow Analysis Engine',
    year: '[year]',
    team: false,
    problem:
      'Process models are hard to reason about until you can trace how work actually flows through them.',
    tags: ['BPMN', 'Digital Twin', '[tech]'],
    outcome:
      'Built at SustainStrat Analytics as the flow analysis layer for BPM and Digital Twin modeling. [metric]',
    links: { live: null, github: null },
  },
  {
    title: 'BPMN Generator',
    year: '[year]',
    team: false,
    problem: 'Drawing BPMN process models by hand takes time and is easy to get inconsistent.',
    tags: ['BPMN', '[tech]', '[tech]'],
    outcome: 'Generates BPMN process models. [metric]',
    links: { live: null, github: null },
  },
  {
    title: 'Chess Web Application',
    year: '[year]',
    team: false,
    problem: 'Play chess in the browser against a strong engine or a friend, without running a server.',
    tags: ['JavaScript', 'Stockfish WASM', 'Firebase RTDB'],
    outcome:
      'Frontend-only app. Stockfish compiled to WebAssembly runs the AI opponent in the browser, and Firebase Realtime Database syncs multiplayer games. [metric]',
    links: { live: null, github: null },
  },
  {
    title: 'AI Search and Rescue',
    year: '[year]',
    team: false,
    problem: '[add one line description]',
    tags: ['[tech]', '[tech]', '[tech]'],
    outcome: '[metric]',
    links: { live: null, github: null },
  },
]

export const about = {
  paragraphs: [
    'I am a backend and AI engineer based in Islamabad. I work at SustainStrat Analytics as a Backend Engineer and AI Engineering Fellow, and I graduated with a BS in Software Engineering from Bahria University Islamabad in June 2026.',
    'Most of my work sits between APIs and language models: typed backends in NestJS, Prisma and PostgreSQL on one side, and LangGraph agents, RAG pipelines and MCP integrations on the other. I keep access rules explicit with RBAC and check behaviour with Playwright, so the system does what the spec says.',
  ],
  skills: [
    {
      group: 'Backend',
      items: ['Node.js', 'NestJS', 'TypeScript', 'Python', 'Prisma ORM', 'PostgreSQL', 'RBAC'],
    },
    {
      group: 'AI and Automation',
      items: ['LangChain', 'LangGraph', 'RAG pipelines', 'MCP', 'n8n', 'Claude API'],
    },
    {
      group: 'Testing',
      items: ['Playwright', 'LLM-driven test generation'],
    },
    {
      group: 'Tools',
      items: ['Nginx', 'Firebase', 'JWT', 'Claude Code', 'React (basic)'],
    },
  ],
}

export const experience = [
  {
    role: 'Backend Engineer and AI Engineering Fellow',
    company: 'SustainStrat Analytics (SMC-Private) Limited',
    location: 'Islamabad',
    dates: '[start] 2026 – Present',
    bullets: [
      'Built a process flow analysis engine for BPM and Digital Twin modeling. [metric]',
      'Develop backend services and AI workflows for the analytics platform. [metric]',
    ],
  },
  {
    role: 'Backend Engineer Intern',
    company: 'Dovigo Talent Center',
    location: '[location]',
    dates: 'Sep 2025 – [end]',
    bullets: [
      'Built REST APIs with Node.js, NestJS and TypeScript on PostgreSQL through Prisma ORM. [metric]',
      'Implemented role-based access control for protected endpoints. [metric]',
    ],
  },
  {
    role: 'Frontend Development Intern',
    company: 'National Incubation Center for Aerospace Technologies (NICAT)',
    location: 'Rawalpindi',
    dates: 'Summer 2023',
    bullets: [
      'Built React interfaces backed by Firebase. [metric]',
      'Implemented JWT-based authentication for user sessions.',
    ],
  },
]

export const education = [
  {
    title: 'BS Software Engineering',
    org: 'Bahria University Islamabad',
    detail: 'Graduated June 2026. Final year project: Testomatic (team).',
  },
]

export const certifications = [
  { title: 'Build with Claude API', org: 'Anthropic Academy' },
  { title: 'Claude Code in Action', org: 'Anthropic Academy' },
  { title: 'Intro to Agents', org: 'Anthropic Academy' },
  { title: 'Intro to MCP', org: 'Anthropic Academy' },
]
