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
    description: "Automated outreach agent that manages personalized communication campaigns at scale.",
    tags: ["outreach", "communication", "automation"],
    demoUrl: "https://adina-bot.onrender.com/",
    bullets: [
      "Multi-channel campaign orchestration",
      "Personalized message generation",
      "Response tracking and follow-ups",
    ],
    architecture: "Next.js + message queue + CRM integration",
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
    description: "Health monitoring agent that runs diagnostics and reports on edge infrastructure status.",
    tags: ["health", "monitoring", "edge"],
    demoUrl: "https://edgefhir-relay.vercel.app/",
    bullets: [
      "Real-time infrastructure diagnostics",
      "Anomaly detection and alerting",
      "Edge node status aggregation",
    ],
    architecture: "Next.js + edge functions + telemetry pipeline",
  },
];

export function getAgent(slug: string): Agent | undefined {
  return agents.find(agent => agent.slug === slug);
}

export function getAgentsByCategory(category: Agent["category"]): Agent[] {
  return agents.filter(agent => agent.category === category);
}
