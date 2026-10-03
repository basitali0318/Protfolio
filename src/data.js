// All site content lives here. Edit text in this file; components read from it.
// Anything in [square brackets] is a placeholder for you to fill in.

// CV and photo URLs. In Vercel builds these point to Vercel Blob
// (see scripts/upload-assets.mjs); locally they fall back to public/.
import assets from './assets.json'

export const site = {
  name: 'Basit Ali',
  role: 'Backend and AI Engineer',
  location: 'Islamabad, Pakistan',
  email: 'basitaliaps@gmail.com',
  resume: assets.cv,
  photo: assets.photo,
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
    'At SustainStrat Analytics I build RAG chatbots, LangGraph agent workflows and NestJS APIs on top of real business process data.',
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
      'Final year project. The pipeline extracts the DOM from a URL, maps buttons, inputs and forms with LangGraph agents, generates tests with Llama 3.3 and runs them in Playwright with no manual scripting. I built the Python backend in the early phase; the team later moved to Angular and Electron because of browser sandboxing limits. [metric]',
    links: { live: null, github: null },
  },
  {
    title: 'Digital Twin / BPMN Flow Analysis Engine',
    year: '[year]',
    team: false,
    problem:
      'Process owners had BPMN diagrams but no direct way to see where a process could be simplified or what a change would do.',
    tags: ['DeepSeek V4', 'n8n', 'LangGraph'],
    outcome:
      'Built at SustainStrat Analytics. A Digital Twin server combines DeepSeek V4 with rule-based checks to suggest fixes, such as removing redundant gateways, directly on auto-generated BPMN diagrams. n8n flows route agent output to the dashboard and trigger What-if Analysis automatically. [metric]',
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
      'Frontend-only app. Stockfish compiled to WebAssembly runs the AI opponent in the browser, and Firebase Realtime Database syncs game state between players in real time. [metric]',
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
    'I am a backend and AI engineer based in Islamabad. I have worked at SustainStrat Analytics since July 2024, and I graduated with a BS in Software Engineering from Bahria University Islamabad in June 2026.',
    'Most of my work sits between APIs and language models: NestJS and Prisma services on one side, and RAG pipelines, LangGraph agents and n8n automations on the other. The goal is always the same: an AI feature that runs on real company data and that the rest of the system can depend on.',
  ],
  skills: [
    {
      group: 'Backend',
      items: ['Node.js', 'NestJS', 'TypeScript', 'Python', 'Prisma ORM', 'PostgreSQL', 'REST API design', 'RBAC'],
    },
    {
      group: 'AI and Automation',
      items: [
        'LangChain',
        'LangGraph',
        'RAG pipelines',
        'Multi-agent orchestration',
        'MCP',
        'n8n',
        'Claude API',
        'DeepSeek V4',
        'Llama 3.3',
      ],
    },
    {
      group: 'Testing',
      items: ['Playwright', 'LLM-driven test generation'],
    },
    {
      group: 'Tools',
      items: ['BPMN modeling', 'Firebase', 'Nginx', 'Claude Code', 'Angular', 'React (basic)'],
    },
  ],
}

export const experience = [
  {
    role: 'Backend and AI Engineer',
    company: 'SustainStrat Analytics (SMC-Private) Limited',
    location: 'Islamabad',
    dates: 'Jul 2024 – Present',
    bullets: [
      'Built a RAG chatbot that answers natural-language questions from company process, organization and structure data, including jobs, activities and BPMN diagrams.',
      'Built a Digital Twin server that combines DeepSeek V4 with rule-based logic to suggest process optimizations directly on auto-generated BPMN diagrams.',
      'Automated cross-system workflows with LangGraph agents and n8n, syncing data to the Digital Twin dashboard and triggering What-if Analysis without manual handoffs.',
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
    dates: 'Jun 2023 – Aug 2023',
    bullets: [
      'Built responsive frontend interfaces in React, backed by Firebase.',
      'Implemented JWT-based authentication and integrated the UI with backend APIs alongside the backend team.',
      'Improved the user experience through design changes driven by review feedback.',
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
  { title: 'Build with Claude API', org: 'Anthropic, 2026' },
  { title: 'Claude Code in Action', org: 'Anthropic, 2026' },
  { title: 'Intro to Agents', org: 'Anthropic, 2026' },
  { title: 'Intro to MCP', org: 'Anthropic, 2026' },
]
