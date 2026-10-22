/**
 * Central portfolio data for Niranjan Kannan.
 * Target Role: Associate Product Manager | Enterprise Fintech.
 * Focused strictly on Product Management, Customer Discovery, PRDs, System Design & Fintech Infrastructure.
 * All facts directly reflect Niranjan's resume with zero duplicates.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Niranjan Kannan',
  displayName: 'Niranjan Kannan',
  firstName: 'NIRANJAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A NIRANJAN ORIGINAL',
  role: 'Associate Product Manager | Enterprise Fintech',
  tagline: ['Associate Product Manager', 'Enterprise Fintech', 'Product & Discovery'],
  intro:
    'Customer-focused fintech professional with experience across customer discovery, requirements definition, technical solutioning, cross-functional execution and product adoption. Built product case studies involving user research, usability testing, experimentation, product metrics and guardrails.',
  location: 'Bengaluru, India',
  email: 'niranjanxdata@gmail.com',
  phone: '+91-8073691938',
  links: {
    linkedin: 'https://www.linkedin.com/in/niranjan7/',
    github: 'https://github.com/Nxjndata',
    portfolio: 'https://nxjndata.github.io/Portfolio-Website/',
    medium: 'https://medium.com/@niranjankannan',
    resumeDoc: 'https://docs.google.com/document/d/1NgRssnexe0xdr4aTqPyL7jJHcPqORazdeb7kAWC-bGk/edit?usp=sharing',
  },
  resumePdf: '/assets/Niranjan_Kannan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Niranjan Kannan',
  },
  interests: [
    'Product Management',
    'Customer Discovery & PRDs',
    'Fintech & Payment Systems',
    'Usability Testing & A/B Experimentation',
    'API Architecture & System Design',
  ],
};

export const education = [
  {
    school: 'SRM Institute of Science & Technology',
    place: 'Kattankulathur, Tamil Nadu',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2021 – 2025',
    score: 'B.Tech CSE',
  },
];

export const experience = [
  {
    company: 'CoinDCX',
    role: 'Business Development Executive, Enterprise Business',
    place: 'Bengaluru',
    period: 'Sep 2025 – Jun 2026',
    points: [
      "Owned the customer lifecycle from discovery to adoption, personally onboarding 11 of the team's 14 institutional firms in under 10 months across requirements gathering, solutioning, negotiation, API integration, go-live and post-launch adoption.",
      "Early member of the Enterprise team, working directly with the VP to take the institutional business 0→1; onboarded the team's first client, with trading volume beginning in month 3 against typical 5–6 month enterprise cycles.",
      'Conducted customer discovery with founders, Heads of Trading and engineering teams; translated needs around API connectivity, latency, liquidity, leverage and algorithmic trading into structured requirements, implementation plans and product feedback.',
      'Served as the technical point of contact between customers and Product, Engineering, API, Compliance, Legal and Operations; coordinated integrations, resolved go-live blockers and reproduced API failures to identify root causes.',
      'Closed and managed a strategic account: Identified $2B+ monthly trading potential in discovery, secured VP approval for commercial incentives and negotiated the deal; the account scaled from $300M to $2B+ monthly volume, with me driving adoption and expansion.',
      'Built AI-assisted prospecting and market-intelligence workflows using Apollo.io and Perplexity Finance; documented onboarding processes and mentored 2 interns who independently generated 10–15 qualified meetings in one week.',
      'Recognized with the Super Satoshi Award (Dec 2025) for overall contribution to the business.',
    ],
  },
  {
    company: 'Quantitative Analyst — Financial Risk & Reporting Optimization',
    role: 'Quantitative Analyst',
    place: 'Freelance, Remote',
    period: 'Aug 2024 – Sep 2025',
    points: [
      'Built Python/SQL ETL pipelines integrating broker APIs and financial data, standardizing data for reporting, analysis and downstream decision-making.',
      'Built SQL validation workflows that reduced compliance reporting errors by 20% and Power BI dashboards that reduced reporting latency by 30%.',
      'Developed Monte Carlo simulation and sentiment-analysis models to support financial analysis and decision-making.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  logo?: string;
  brand?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'bot' | 'pipeline' | 'receiver';
};

export const projects: Project[] = [
  {
    id: 'navi-upi-receiver-mode',
    title: 'Receiver Mode: Navi UPI',
    year: '2026',
    genre: 'UPI Concept • Android-first • Product Case Study',
    logline: '“Eliminating time-to-QR friction and payment-confidence anxiety for 50+ observed drivers.”',
    logo: '/assets/navi-logo.png',
    brand: 'Navi',
    caseStudy: 'https://docs.google.com/presentation/d/1pkrTnT7N0qOxFCLE9Jw3dd7Ndd6jSuhQhdfJCWcRbng/edit?usp=sharing',
    stack: ['Product Discovery', 'Android UX', 'UPI Systems', 'MVP Scoping', 'Usability Testing', 'Guardrail Metrics'],
    build: [
      'Identified recurring time-to-QR and payment-confidence friction from 50+ observations of drivers keeping their UPI QR as a screenshot or wallpaper; benchmarked the existing My QR flow and defined the problem around faster QR access and payment confirmation.',
      'Scoped the MVP and defined a north-star metric plus false/delayed-confirmation guardrail; designed a home-screen shortcut and confirmation experience while separating QR access from confirmation due to widget limitations.',
      'Designed a 5–10 driver interview → prototype usability test → small-cohort validation plan to test the core hypothesis before broader rollout.',
    ],
    features: [
      'Home-screen quick QR access shortcut bypassing app-lock friction',
      'Dual surface UX: always-on home widget + floating action bubble',
      'High-confidence instant audio-visual payment confirmation',
      'Architectural separation of QR display from confirmation stream (widget limits)',
      'North-star metric & false/delayed-confirmation guardrail framework',
      '3-phase validation roadmap: 5–10 driver tests → prototype usability → cohort rollout',
    ],
    metrics: [
      { value: '50+ Obs', label: 'driver payment friction observations' },
      { value: '2 Surfaces', label: 'always-on widget & floating bubble' },
      { value: '1 North Star', label: 'time-to-QR & confirmation confidence' },
      { value: '5-10 Drivers', label: 'interview & prototype testing cohort' },
      { value: 'Zero False', label: 'delayed-confirmation guardrail limit' },
    ],
    palette: { from: '#170624', via: '#31104d', to: '#061a12', accent: '#1bf6a6' },
    motif: 'receiver',
  },
  {
    id: 'arata-checkout-teardown',
    title: 'Arata Checkout Teardown',
    year: '2026',
    genre: 'Product Case Study • D2C • Checkout UX',
    logline: '“Framed as a prominence problem: fixing checkout abandonment before users walk away.”',
    logo: '/assets/arata-logo.jpg',
    brand: 'Arata',
    caseStudy: 'https://app.notion.com/p/Arata-Mobile-Checkout-Teardown-COD-Cost-Visibility-and-RTO-b99d67abde3883539d2481559659bcdb?source=copy_link',
    stack: ['Figma', 'Product Teardown', 'Usability Testing', 'A/B Test Design', 'Guardrail Metrics'],
    build: [
      'Comprehensive teardown of a mobile D2C cart-to-checkout flow, diagnosing a critical COD cost-visibility flaw where users saw ₹20 now + ₹392.67 on delivery without an upfront ₹412.67 total.',
      'Framed the root friction as a prominence problem rather than a hidden-charge issue, prioritizing 4 key product findings across COD cost visibility, payment messaging, competing visual attention, and cart-close modal interpretation.',
      'Designed an actionable validation plan: a 5–8 participant qualitative usability test framework followed by an A/B experimentation plan with checkout completion as primary metric and 5 guardrails (COD cancellation, RTO, AOV, payment failure, contribution/order).',
    ],
    features: [
      'Mobile D2C checkout funnel teardown & Figma mockups',
      'Prominence diagnosis: surfacing ₹412.67 COD total upfront',
      '4 prioritized findings: COD visibility, payment timing, attention & cart-close',
      '5–8 participant qualitative usability study framework',
      'A/B test experiment design: Checkout completion vs guardrail metrics',
    ],
    metrics: [
      { value: '4 Findings', label: 'prioritized product opportunities' },
      { value: '₹412.67', label: 'COD total prominence solved' },
      { value: '5-8 Users', label: 'usability study cohort' },
      { value: '5 Guardrails', label: 'cancel, RTO, AOV, fail, margin' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'vector-trading-engine',
    title: 'Vector Trading Engine',
    year: '2026',
    genre: 'Fintech Architecture • Execution • Solo Build',
    logline: '“13 sequenced phases from market-data ingestion to deterministic execution and recovery.”',
    demo: 'https://youtu.be/58AhSlwcqHs?si=Zr5966jGCV-mNMmo',
    github: 'https://github.com/Nxjndata/Algo-Trading-Bot',
    stack: ['Python', 'FastAPI', 'PostgreSQL/TimescaleDB', 'Next.js', 'Docker'],
    build: [
      'Owned the entire product roadmap and system architecture as sole builder, sequencing 13 distinct phases across market-data ingestion, signal generation, risk management, execution, reconciliation, monitoring, and automated recovery.',
      'Designed 9 deterministic risk gates and 144 automated test suites covering execution and failure edge cases; implemented reconciliation mechanisms achieving <150ms testnet execution latency with zero discrepancies against exchange state.',
      'Optimized the strategy across 60 days of historical tick data, cutting trade frequency by 80% and transaction costs by 79%; validated zero data loss under OS-crash simulation.',
    ],
    features: [
      '13 sequenced system phases (ingest → signal → risk → execution → reconcile → recover)',
      '9 deterministic pre-trade risk gates',
      '144 automated tests for execution and failure scenarios',
      'Zero reconciliation discrepancies against exchange state (<150ms latency)',
      'OS-crash fault tolerance with state recovery',
      'Strategy optimization: -80% trade frequency, -79% transaction costs',
    ],
    metrics: [
      { value: '13 Phases', label: 'sequenced product roadmap' },
      { value: '9 Gates', label: 'deterministic risk gates' },
      { value: '144 Tests', label: 'automated test suites' },
      { value: '<150ms', label: 'execution latency' },
      { value: '-79%', label: 'transaction cost reduction' },
    ],
    palette: { from: '#24060b', via: '#7a1805', to: '#09070a', accent: '#ff5e3a' },
    motif: 'shield',
  },
  {
    id: 'alphabot',
    title: 'Alphabot',
    year: '2025',
    genre: 'AI × Stock Selection • Machine Learning • Quant Automation',
    logline: '“What if an equity research analyst had enough coffee to fight a bear?”',
    stack: ['Python', 'LSTM', 'XGBoost', 'Pandas', 'NumPy', 'APIs'],
    build: [
      'Engineered an AI-powered stock selection engine combining historical market feeds, technical indicator engineering, and machine learning models for equity research automation.',
      'Trained and evaluated hybrid LSTM and XGBoost models on time-series pricing data to identify alpha signals and momentum breakouts across volatile market conditions.',
      'Built automated data collection and reporting workflows that slashed manual analyst research time from 30+ hours down to 5 hours per week.',
    ],
    features: [
      'Hybrid LSTM & XGBoost quantitative predictive models',
      'Automated multi-source market data & API ingestion',
      'Feature engineering across momentum, volatility & volume metrics',
      'Automated equity research digest & alert generation',
      'Real-time backtesting & return uplift benchmarking',
    ],
    metrics: [
      { value: '88.7%', label: 'prediction accuracy' },
      { value: '13.7%', label: 'portfolio return uplift' },
      { value: '25+ Hrs/Wk', label: 'manual research automated' },
      { value: '<500ms', label: 'inference latency' },
    ],
    github: 'https://github.com/Nxjndata/Algo-Trading-Bot',
    palette: { from: '#1a0826', via: '#581c87', to: '#09050d', accent: '#c084fc' },
    motif: 'bot',
  },
  {
    id: 'financial-data-pipeline',
    title: 'Financial Data Pipeline',
    year: '2025',
    genre: 'Data Infrastructure • ETL Architecture • Docker & MySQL',
    logline: '“Because copying data between spreadsheets is not a personality trait.”',
    stack: ['Python', 'MySQL', 'Docker', 'REST APIs', 'Data Validation'],
    build: [
      'Architected a production-style, containerized ETL data pipeline that extracts, normalizes, validates, and loads real-time financial market data from multiple disparate APIs into MySQL.',
      'Designed strict schema validation and anomaly detection checks to catch corrupted price ticks, missing volumes, and API rate-limit errors before database write operations.',
      'Containerized the complete ingest, transform, and persistence stack using Docker for deterministic local and cloud environments, powering downstream analytics dashboards.',
    ],
    features: [
      'Multi-source financial API extraction with exponential backoff & rate-limiting',
      'Robust data cleaning, normalization, and timezone harmonization',
      'Schema validation & anomaly detection gate before SQL insertion',
      'Containerized deployment with Docker & Docker Compose',
      'Automated scheduled syncs for daily equity & market metrics',
    ],
    metrics: [
      { value: '6 Nodes', label: 'API → Extract → Transform → Validate → SQL → Analytics' },
      { value: '99.9%', label: 'pipeline ingestion reliability' },
      { value: '0 Discrepancies', label: 'schema validation pass rate' },
      { value: 'Daily Automated', label: 'scheduled ingestion cycles' },
    ],
    github: 'https://github.com/Nxjndata/ETL-Finance-Pipeline',
    palette: { from: '#021814', via: '#065f46', to: '#020b08', accent: '#34d399' },
    motif: 'pipeline',
  },
  {
    id: 'coindcx-enterprise-0to1',
    title: 'CoinDCX Enterprise 0→1',
    year: '2025 – 2026',
    genre: 'B2B Product • Discovery • Institutional Adoption',
    logline: '“Translating ambiguous institutional requirements into product roadmap and rapid adoption.”',
    stack: ['Product Discovery', 'PRDs', 'REST APIs', 'WebSockets', 'Apollo.io', 'Perplexity'],
    build: [
      "Early member taking the institutional business 0→1 directly alongside the VP; personally onboarded 11 of the team's 14 institutional firms in under 10 months across discovery, requirements, solutioning, API integration, and go-live.",
      'Conducted extensive customer discovery with founders, Heads of Trading, and engineers; translated complex needs around API latency, liquidity, leverage, and algorithmic execution into structured PRDs, implementation plans, and product feedback.',
      'Served as technical point of contact between institutional clients and Product, Eng, Compliance, Legal, and Ops; reproduced API failures to pinpoint root causes and clear go-live blockers.',
      'Identified $2B+ monthly trading potential during discovery, secured VP sign-off on commercial incentives, and scaled a strategic account from $300M to $2B+ monthly volume.',
    ],
    features: [
      'End-to-end customer lifecycle: discovery → requirements → adoption',
      'Discovery interviews with founders & Heads of Trading',
      'Structured requirements definition & PRD feedback to Product/Eng',
      'Root-cause analysis & API failure reproduction',
      'AI-assisted market intelligence & prospecting with Apollo.io & Perplexity',
      'Super Satoshi Award (Dec 2025) for overall business contribution',
    ],
    metrics: [
      { value: '11 of 14', label: 'institutional firms onboarded' },
      { value: '<10 Mos', label: 'accelerated adoption cycle' },
      { value: '$2B+/mo', label: 'strategic account scale' },
      { value: 'Month 3', label: 'first trading vs 5-6 mo cycle' },
      { value: '10-15', label: 'qualified meetings/wk by interns' },
    ],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'super-satoshi',
    title: 'Super Satoshi Award',
    org: 'CoinDCX Enterprise Business',
    detail: 'Recognized with the Super Satoshi Award (Dec 2025) for overall contribution to the Enterprise Business unit and 0→1 institutional scaling.',
    laurel: 'Company Honor',
  },
  {
    id: 'onboarding-scale',
    title: '11 of 14 Firms Onboarded',
    org: 'CoinDCX Enterprise Team',
    detail: "Personally onboarded 11 of the team's 14 institutional firms in under 10 months, taking institutional trading from 0→1 alongside the VP.",
    laurel: '0→1 Execution',
  },
  {
    id: 'strategic-account',
    title: '$300M → $2B+/Mo Scale',
    org: 'Strategic Institutional Account',
    detail: 'Identified $2B+ potential in discovery, secured VP commercial approval, negotiated deal, and drove post-launch adoption from $300M to $2B+ monthly.',
    laurel: 'Impact & Adoption',
  },
  {
    id: 'vector-system',
    title: '144 Tests & <150ms Latency',
    org: 'Vector Algorithmic Engine',
    detail: 'Designed 9 deterministic risk gates, 144 automated test suites, and zero reconciliation discrepancies against exchange state as sole builder.',
    laurel: 'System Design',
  },
  {
    id: 'intern-mentorship',
    title: 'Intern Ramping & AI Workflows',
    org: 'Enterprise Operations',
    detail: 'Built AI-assisted prospecting workflows with Apollo.io and Perplexity Finance; mentored 2 interns who generated 10–15 qualified meetings in a single week.',
    laurel: 'Leadership & AI',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle', name: 'Oracle OCI Generative AI Professional' },
  { issuer: 'Oracle', name: 'Oracle Cloud Infrastructure Foundations Associate' },
  { issuer: 'Agile', name: 'Agile Business Analysis' },
  { issuer: 'Cisco', name: 'Cisco Data Analytics Essentials' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'product',
    title: 'Product & Discovery',
    subtitle: 'From problem definition to user adoption',
    skills: [
      { name: 'Requirement Gathering', mono: 'Rg', note: 'Primary' },
      { name: 'PRD Writing', mono: 'Pr' },
      { name: 'User Flows & Stories', mono: 'Uf' },
      { name: 'Acceptance Criteria', mono: 'Ac' },
      { name: 'Problem Definition', mono: 'Pd' },
      { name: 'Solution Design', mono: 'Sd' },
      { name: 'Prioritization', mono: 'Pz' },
      { name: 'Product Teardown', mono: 'Pt' },
      { name: 'Figma', mono: 'Fg' },
      { name: 'Product Adoption', mono: 'Pa' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Experimentation',
    subtitle: 'Data-informed decisions and guardrails',
    skills: [
      { name: 'SQL', mono: 'Sq', note: 'Core' },
      { name: 'Python', mono: 'Py' },
      { name: 'Product Metrics', mono: 'Pm' },
      { name: 'A/B Test Design', mono: 'Ab' },
      { name: 'Guardrail Metrics', mono: 'Gm' },
      { name: 'Funnel Analysis', mono: 'Fa' },
      { name: 'Adoption Analysis', mono: 'Aa' },
      { name: 'Power BI', mono: 'Bi' },
      { name: 'Mixpanel / Amplitude', mono: 'Mx' },
    ],
  },
  {
    id: 'technical',
    title: 'Technical & Architecture',
    subtitle: 'APIs, dependencies and failure recovery',
    skills: [
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'API Integration', mono: 'Ai' },
      { name: 'Root Cause Analysis', mono: 'Rc' },
      { name: 'Reconciliation', mono: 'Re' },
      { name: 'Failure Recovery', mono: 'Fr' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'WebSockets', mono: 'Ws' },
      { name: 'PostgreSQL/TimescaleDB', mono: 'Pg' },
      { name: 'Docker', mono: 'Dk' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI & Modern Tooling',
    subtitle: 'AI-assisted research, spec writing & agents',
    skills: [
      { name: 'Claude & ChatGPT', mono: 'Cc' },
      { name: 'Perplexity Finance', mono: 'Pf' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Generative AI', mono: 'Ga' },
      { name: 'AI Spec Writing & Prototyping', mono: 'Sp' },
      { name: 'LLM Workflows', mono: 'Lw' },
      { name: 'RAG & MCP Basics', mono: 'Rg' },
      { name: 'Apollo.io Workflows', mono: 'Ap' },
    ],
  },
  {
    id: 'client-domain',
    title: 'Client, GTM & Domain',
    subtitle: 'Fintech infrastructure and enterprise scale',
    skills: [
      { name: 'Customer Discovery', mono: 'Cd' },
      { name: 'Technical Solutioning', mono: 'Ts' },
      { name: 'Client Onboarding', mono: 'Co' },
      { name: 'Commercial Negotiation', mono: 'Cn' },
      { name: 'Stakeholder Management', mono: 'Sm' },
      { name: 'Institutional Trading', mono: 'It' },
      { name: 'Compliance & Legal Collaboration', mono: 'Cl' },
      { name: 'Agile & Scrum Fundamentals', mono: 'Ag' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Requirement Gathering': ['Navi UPI Receiver Mode (benchmarking My QR flow)', 'CoinDCX customer discovery', 'Arata Cart-to-Checkout PRD', 'Institutional API specifications'],
  'PRD Writing': ['Arata checkout product teardown', 'Navi UPI Receiver Mode MVP PRD', 'Vector 13-phase system spec', 'CoinDCX requirements'],
  'User Flows & Stories': ['Navi driver QR & confirmation flow', 'Arata mobile checkout flow', 'CoinDCX institutional onboarding journey'],
  'Acceptance Criteria': ['Vector 144 automated test suites', 'Arata A/B experiment spec', 'Navi false-confirmation guardrail'],
  'Problem Definition': ['Navi driver time-to-QR & payment confidence friction (50+ obs)', 'Arata COD prominence diagnosis', 'CoinDCX API failure root cause analysis'],
  'Solution Design': ['Navi home-screen shortcut & separated confirmation widget', 'Vector 9 deterministic risk gates', 'Arata checkout prominence redesign'],
  Prioritization: ['Navi MVP scoping & widget constraint separation', 'Arata 4 prioritized product findings', 'CoinDCX go-live blocker resolution'],
  'Product Teardown': ['Arata Cart-to-Checkout Teardown (Figma mockups & usability study)', 'Navi UPI My QR flow benchmarking'],
  Figma: ['Arata checkout redesign mockups', 'Visual prominence flows', 'Navi UPI widget & bubble concepts'],
  'Product Adoption': ['CoinDCX 11 institutional clients onboarded', '$300M → $2B+/mo strategic account expansion'],
  SQL: ['SQL validation workflows (-20% errors)', 'Quantitative Analyst ETL pipelines', 'TimescaleDB'],
  Python: ['Vector algorithmic engine', 'Python ETL pipelines', 'Monte Carlo & sentiment models'],
  'Product Metrics': ['Navi north-star (time-to-QR) & payment confidence', 'Checkout completion primary metric', 'CoinDCX trading adoption metrics'],
  'A/B Test Design': ['Arata checkout experiment framework', 'Navi phased rollout & cohort validation plan'],
  'Guardrail Metrics': ['Navi false/delayed-confirmation limit', 'COD cancellation, RTO, AOV, payment failure, contribution margin / order'],
  'Funnel Analysis': ['D2C Cart-to-Checkout drop-off analysis', 'Enterprise institutional conversion funnel'],
  'Adoption Analysis': ['Tracking volume beginning in Month 3', 'Strategic account scaling to $2B+/mo'],
  'Power BI': ['End-to-end dashboards cutting reporting latency by 30%'],
  'REST APIs': ['CoinDCX institutional trading APIs', 'Vector Binance Futures API', 'Broker APIs'],
  'API Integration': ['CoinDCX technical discussions with customer eng teams', 'API troubleshooting'],
  'Root Cause Analysis': ['Reproducing API failures to identify root causes with Product/Eng'],
  Reconciliation: ['Vector zero discrepancy engine against exchange state'],
  'Failure Recovery': ['Vector zero data loss under OS-crash simulation'],
  FastAPI: ['Vector backend API architecture'],
  WebSockets: ['Real-time market data streaming in Vector', 'CoinDCX low-latency feeds'],
  'PostgreSQL/TimescaleDB': ['Vector time-series tick data and order history'],
  Docker: ['Containerized pipeline and microservices deployment'],
  'Claude & ChatGPT': ['AI-assisted research, product specs, and rapid prototyping'],
  'Perplexity Finance': ['Market intelligence and institutional prospecting research'],
  'Prompt Engineering': ['Custom LLM workflows for structured requirements analysis'],
  'Generative AI': ['Oracle OCI Generative AI Professional certification'],
  'Customer Discovery': ['Navi driver friction discovery (50+ observations)', 'Founders, Heads of Trading and eng teams at CoinDCX'],
  'Technical Solutioning': ['Navi widget limitations vs shortcut separation', 'Translating latency, liquidity, and leverage into implementation plans'],
  'Client Onboarding': ['11 of 14 institutional firms onboarded in <10 months'],
  'Commercial Negotiation': ['Secured VP approval for volume-committed commercial incentives'],
  'Stakeholder Management': ['Cross-functional collaboration with Product, Eng, Legal, Compliance, Ops'],
  'Institutional Trading': ['Fintech infrastructure, perpetual futures, algo execution'],
  'Compliance & Legal Collaboration': ['Resolving partner requirements and regulatory constraints'],
  'Agile & Scrum Fundamentals': ['Agile Business Analysis certification, sprint planning familiarity'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#7a1805', to: '#09070a', accent: '#ff5e3a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const emerald: Palette = { from: '#170624', via: '#31104d', to: '#061a12', accent: '#1bf6a6' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The CS Foundation',
    period: '2021 – 2025',
    synopsis: 'Computer Science & Engineering at SRM Institute of Science & Technology, Kattankulathur — building the technical foundation across algorithms, data structures, and system design.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Core Systems & Logic',
        description: 'B.Tech in Computer Science & Engineering at SRM IST — mastering algorithms, relational databases, APIs, and systems thinking.',
        tags: ['SRM IST', 'B.Tech CSE', 'Algorithms'],
        runtime: '2021 – 2025',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Certifications & Credentials',
        description: 'Earned Oracle OCI Generative AI Professional, OCI Foundations Associate, Agile Business Analysis, and Cisco Data Analytics.',
        tags: ['OCI GenAI', 'Agile BA', 'Cisco'],
        runtime: '4 Credentials',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Data & Quantitative Optimization',
    period: 'Aug 2024 – Sep 2025',
    synopsis: 'Quantitative Analyst — financial risk and reporting optimization across APIs, ETL pipelines, and validation systems.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Building the Data Pipelines',
        description: 'Built Python/SQL ETL pipelines integrating broker APIs and financial data, standardizing datasets for reporting and downstream decisions.',
        tags: ['Python', 'SQL', 'Broker APIs', 'ETL'],
        runtime: 'Aug 2024 – Sep 2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Validation & Live Dashboards',
        description: 'Built SQL validation workflows that cut compliance reporting errors by 20% and Power BI dashboards reducing latency by 30%.',
        tags: ['Power BI', '-20% Errors', '-30% Latency'],
        runtime: 'Reporting Engine',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'CoinDCX 0→1 Enterprise Scale',
    period: 'Sep 2025 – Jun 2026',
    synopsis: 'Early member taking institutional business 0→1 directly with VP — personally onboarding 11 of 14 firms and translating requirements into product feedback.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Customer Discovery to Adoption',
        description: 'Personally onboarded 11 of 14 institutional firms in <10 months, accelerating the cycle with first trading beginning in month 3.',
        tags: ['CoinDCX', '11 of 14 Firms', '<10 Mos'],
        runtime: 'Sep 2025 – Jun 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Technical Bridge',
        description: 'Connected customers with Product, Eng, Legal and Ops; reproduced API failures to resolve go-live blockers and structured commercial incentives.',
        tags: ['PRDs', 'REST APIs', 'Root Cause'],
        runtime: 'Cross-functional',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'Super Satoshi & $2B+ Scale',
        description: 'Scaled a strategic account from $300M to $2B+ monthly volume; awarded the Super Satoshi Award (Dec 2025) for overall contribution.',
        tags: ['Super Satoshi', '$300M → $2B+', 'AI Workflows'],
        runtime: 'Dec 2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Product Discovery, Teardowns & Architecture',
    period: '2026',
    synopsis: 'Three hands-on product builds — Navi UPI Receiver Mode, Arata Cart-to-Checkout UX Teardown, and Vector Algorithmic Trading Engine.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Receiver Mode: Navi UPI',
        description: 'Android-first UPI concept eliminating time-to-QR friction and payment anxiety for drivers via always-on widget, quick bubble & confirmation.',
        tags: ['Navi UPI', 'Android-first', 'Driver Research', 'MVP Scope'],
        runtime: 'Case Study',
        palette: emerald,
      },
      {
        code: 'S04 E02',
        title: 'Arata Checkout Teardown',
        description: 'Mobile D2C checkout teardown identifying COD prominence issue, prioritizing 4 UX findings, usability test plan, and A/B test with guardrail metrics.',
        tags: ['Figma', 'Product Teardown', 'A/B Testing', 'Guardrails'],
        runtime: 'Case Study',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Vector — Algorithmic Engine',
        description: 'Sole builder sequencing 13-phase roadmap, 9 deterministic risk gates, 144 automated tests, and <150ms testnet execution latency.',
        tags: ['Python', 'FastAPI', 'TimescaleDB', 'Next.js'],
        runtime: 'Solo Build',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next: Product Management",
    period: 'Now streaming',
    synopsis: 'Ready to drive product discovery, requirements, and execution for ambitious enterprise fintech and B2B products.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Associate Product Manager',
        description: 'Looking to tackle messy, high-leverage product problems where customer discovery, technical architecture, and business impact converge.',
        tags: ['APM', 'Enterprise Fintech', 'Let’s Build'],
        runtime: 'Now streaming',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Target role', title: 'APM Fintech', detail: 'Associate Product Manager | Enterprise Fintech', palette: crimson },
  { label: 'UPI Case Study', title: 'Navi Receiver Mode', detail: 'Android-first UPI concept for driver QR & confirmation', palette: emerald },
  { label: '0→1 execution', title: '11 of 14 Firms', detail: 'Personally onboarded at CoinDCX in <10 months', palette: amber },
  { label: 'Product case study', title: 'Arata Teardown', detail: 'Checkout UX, usability study & A/B guardrails', palette: ocean },
  { label: 'Solo build', title: 'Vector Engine', detail: '13-phase roadmap, 9 risk gates, 144 tests', palette: crimson },
  { label: 'Account scale', title: '$300M → $2B+', detail: 'Scaled strategic institutional trading volume', palette: violet },
  { label: 'Discovery velocity', title: 'Month 3 Trading', detail: 'First client trading vs 5–6 month typical cycles', palette: jade },
  { label: 'AI workflows', title: 'AI-Assisted PM', detail: 'Apollo.io, Perplexity, Claude, ChatGPT, Spec writing', palette: ocean },
  { label: 'Data reduction', title: '30% Latency', detail: 'Reduced reporting latency via live Power BI dashboards', palette: jade },
  { label: 'Credentials', title: 'Oracle OCI AI', detail: 'OCI Generative AI Professional & Agile BA', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Target Role',
    title: 'Associate Product Manager',
    lines: ['Enterprise Fintech · Product Discovery · Requirements & Adoption', 'Bengaluru, India · niranjanxdata@gmail.com'],
    chips: ['APM', 'Fintech', 'Customer Discovery', 'PRDs'],
  },
  {
    kicker: '0→1 Track Record',
    title: 'CoinDCX Enterprise',
    lines: [
      'Early member taking institutional business 0→1 directly with VP.',
      'Personally onboarded 11 of 14 institutional firms in <10 months.',
      'Scaled a strategic account from $300M to $2B+ monthly trading volume.',
    ],
    chips: ['11 of 14 Firms', '$2B+/Mo Scale', 'Super Satoshi Award'],
  },
  {
    kicker: 'UPI Case Study',
    title: 'Receiver Mode: Navi UPI',
    lines: [
      'Android-first UPI concept for drivers addressing time-to-QR & confidence friction.',
      'Designed dual-surface UX: always-on home widget and floating quick bubble.',
      'Scoped MVP, north-star metrics, guardrails and 3-phase driver validation plan.',
    ],
    chips: ['Android UX', 'Driver Research', 'MVP Scoping', 'Guardrail Metrics'],
  },
  {
    kicker: 'Product Case Study',
    title: 'Arata Checkout Teardown',
    lines: [
      'Mobile D2C checkout teardown diagnosing COD cost prominence friction.',
      'Prioritized 4 UX opportunities: payment messaging & cart-close interpretation.',
      'Designed usability testing framework & A/B test with 5 guardrail metrics.',
    ],
    chips: ['Figma Mockups', 'Usability Study', 'A/B Testing', 'Guardrail Metrics'],
  },
  {
    kicker: 'Technical Architecture',
    title: 'Vector — Solo Build',
    lines: [
      'Sequenced 13-phase roadmap across market-data, risk, execution & recovery.',
      'Designed 9 deterministic risk gates and 144 automated test suites.',
      'Achieved <150ms testnet execution latency with zero reconciliation discrepancies.',
    ],
    chips: ['Python', 'FastAPI', 'TimescaleDB', 'Next.js', 'Docker'],
  },
  {
    kicker: 'Education & Certifications',
    title: 'CS & AI Credentials',
    lines: [
      'B.Tech in Computer Science & Engineering — SRM IST (2021–2025).',
      'Oracle OCI Generative AI Professional · OCI Foundations Associate.',
      'Agile Business Analysis · Cisco Data Analytics Essentials.',
    ],
    chips: ['SRM IST B.Tech', 'OCI GenAI', 'Agile BA', 'Cisco Analytics'],
  },
];

export type ProfileId = 'niranjan' | 'recruiter' | 'founder' | 'developer';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'niranjan',
    name: 'Niranjan',
    blurb: 'Product Manager’s Cut — full story in order',
    color: '#ff4218',
    order: ['about', 'originals', 'journey', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Hiring Manager',
    blurb: 'Case studies, product metrics & resume first',
    color: '#4cc9ff',
    order: ['originals', 'story', 'skills', 'moments', 'about', 'journey', 'picks'],
  },
  {
    id: 'founder',
    name: 'Founder / CPO',
    blurb: '0→1 product execution, discovery & enterprise adoption',
    color: '#ffb547',
    order: ['originals', 'moments', 'skills', 'about', 'journey', 'story', 'picks'],
  },
  {
    id: 'developer',
    name: 'Tech Lead',
    blurb: 'System design, APIs, failure recovery & code',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • APM Overview', palette: violet },
  originals: { nav: 'Originals', card: 'Case Studies & Builds', meta: `${projects.length} Productions • Teardown & Solo Build`, palette: crimson },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Product Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'Product Toolbox', meta: `${skillCategories.length} Categories • Zero Duplicates`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
