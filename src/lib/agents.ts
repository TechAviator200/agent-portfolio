export type Agent = {
  slug: "radioboy" | "adina-outreach" | "edge-health" | "overit" | "centi-tmf" | "labflow-ai";
  category: "media-entertainment" | "healthcare" | "enterprise";
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  bullets: string[];
  architecture: string;
  github?: string;
  apiDocsUrl?: string;
  stack?: string[];
  badges?: string[];
};

export const agents: Agent[] = [
  {
    slug: "radioboy",
    category: "media-entertainment",
    title: "RadioBoy",
    description: "AI-powered audio streaming agent that curates and delivers personalized radio experiences.",
    tags: ["audio", "streaming", "personalization"],
    demoUrl: "https://radio-boy.onrender.com/",
    bullets: [
      "Real-time audio stream curation",
      "Listener preference learning",
      "Cross-platform delivery",
    ],
    architecture: "Next.js + streaming API + edge workers",
  },
  {
    slug: "overit",
    category: "media-entertainment",
    title: "OverIt",
    description:
      "AI-assisted dating app prototype built with Next.js and Supabase. Features swipe discovery, curated Daily Drop matches, real-time messaging, and AI conversation suggestions.",
    tags: ["dating", "AI", "real-time", "Supabase"],
    demoUrl: "https://overit-dating-app.vercel.app",
    github: "https://github.com/TechAviator200/overit-dating-app",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Postgres"],
    bullets: [
      "Swipe-based discovery with AI-powered match scoring",
      "Daily Drop curated match recommendations",
      "Real-time messaging with AI conversation suggestions",
    ],
    architecture: "Next.js + Supabase Realtime + Postgres + AI suggestions layer",
  },
  {
    slug: "adina-outreach",
    category: "enterprise",
    title: "Adina Outreach Agent",
    description:
      "An AI-assisted outbound system that helps teams orchestrate personalized outreach, manage follow-ups, and scale communication workflows with more visibility and operational control.",
    tags: ["AI SDR", "Outbound Automation", "Workflow", "Enterprise AI"],
    demoUrl: "https://adina-bot.onrender.com/",
    badges: ["Live Demo", "AI Workflow", "Enterprise AI"],
    stack: ["Next.js", "Node.js", "OpenAI", "Message Queue", "CRM Integration", "Vercel", "Render"],
    bullets: [
      "Multi-channel campaign orchestration with per-contact personalization",
      "AI-generated outreach messages with tone and context awareness",
      "Structured follow-up logic with configurable cadence and exit conditions",
      "Response tracking and reply classification for operator review",
      "Operator visibility layer — every action logged and explainable",
      "Campaign execution discipline: rate limits, deduplication, and send controls",
    ],
    architecture: "Next.js + OpenAI + message queue + CRM integration + Render",
  },
  {
    slug: "centi-tmf",
    category: "healthcare",
    title: "centiTMF",
    description:
      "AI-powered TMF analysis system that predicts regulatory inspection risk, detects missing artifacts, and analyzes protocol deviations across clinical trial sites.",
    tags: ["Healthcare AI", "Clinical Trials", "Regulatory", "AI Agent"],
    demoUrl: "https://centi-tmf-agent.vercel.app",
    github: "https://github.com/TechAviator200/centiTMF-agent",
    apiDocsUrl: "https://centitmf-agent.onrender.com/docs",
    badges: ["Production Deployment", "AI Agent", "Healthcare AI"],
    stack: ["FastAPI", "Next.js", "Supabase", "Cloudflare R2", "OpenAI GPT-4o", "Docker", "Render", "Vercel"],
    bullets: [
      "TMF artifact classification and completeness analysis",
      "Protocol deviation detection across trial sites",
      "Site-level inspection risk scoring",
      "Inspection simulation engine",
      "Audit question copilot",
    ],
    architecture: "FastAPI + Next.js + Supabase Postgres + Cloudflare R2 + OpenAI GPT-4o",
  },
  {
    slug: "labflow-ai",
    category: "healthcare",
    title: "LabFlow AI",
    description:
      "AI workflow copilot that converts unstructured scientific SOPs into structured, traceable, semantic-ready experiment records — with human-in-the-loop review and full auditability.",
    tags: ["AI", "Biotech", "Workflow Automation", "FastAPI", "Next.js", "Semantic Data", "Human-in-the-Loop"],
    demoUrl: "https://lab-flow-ai.vercel.app/",
    github: "https://github.com/TechAviator200/LabFlowAI",
    badges: ["Live Demo", "Biotech AI", "Workflow Automation"],
    stack: ["Next.js", "FastAPI", "Supabase", "OpenAI-compatible LLM", "Vercel", "Render"],
    bullets: [
      "Converts unstructured SOPs into structured, step-by-step workflows",
      "Extracts materials, parameters, and expected outputs per step",
      "Flags ambiguities and missing metadata for human review",
      "Human-in-the-loop review layer with inline annotation support",
      "Maintains full auditability and workflow traceability",
      "Semantic-ready output compatible with knowledge-graph pipelines",
    ],
    architecture: "FastAPI + Next.js + Supabase + OpenAI-compatible LLM + Vercel + Render",
  },
  {
    slug: "edge-health",
    category: "healthcare",
    title: "Edge Health",
    description:
      "A healthcare infrastructure agent that monitors distributed edge systems, surfaces anomalies, and supports reliable data relay and operational visibility across health integrations.",
    tags: ["Healthcare AI", "FHIR", "Infrastructure", "AI Agent"],
    demoUrl: "https://edgefhir-relay.vercel.app/",
    badges: ["Live Demo", "Healthcare AI", "FHIR Relay"],
    stack: ["FastAPI", "Next.js", "FHIR R4", "Python", "Uvicorn", "Vercel", "Render"],
    bullets: [
      "FHIR R4 store-and-forward relay with filesystem outbox queue",
      "Real-time edge infrastructure diagnostics and node status aggregation",
      "AI-assisted vitals triage scoring (SpO2, HR, Temp, RR) with LOINC-coded observations",
      "Connectivity-aware relay with automatic reconnect and outbox flush",
      "Anomaly detection and alerting across simulation modes (desat, fever, tachy)",
      "Operational visibility dashboard for distributed health data pipelines",
    ],
    architecture: "Simulator → FastAPI Relay (:8000) → FHIR R4 Cloud (:9000) | outbox/ queue on reconnect",
  },
];

export function getAgent(slug: string): Agent | undefined {
  return agents.find(agent => agent.slug === slug);
}

export function getAgentsByCategory(category: Agent["category"]): Agent[] {
  return agents.filter(agent => agent.category === category);
}
