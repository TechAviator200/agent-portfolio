export type Agent = {
  slug: "radioboy" | "adina-outreach" | "edge-health";
  category: "media-entertainment" | "healthcare" | "enterprise";
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  bullets: string[];
  architecture: string;
};

export const agents: Agent[] = [
  {
    slug: "radioboy",
    category: "media-entertainment",
    title: "RadioBoy",
    description: "AI-powered audio streaming agent that curates and delivers personalized radio experiences.",
    tags: ["audio", "streaming", "personalization"],
    demoUrl: process.env.NEXT_PUBLIC_RADIOBOY_URL || "#",
    bullets: [
      "Real-time audio stream curation",
      "Listener preference learning",
      "Cross-platform delivery",
    ],
    architecture: "Next.js + streaming API + edge workers",
  },
  {
    slug: "adina-outreach",
    category: "enterprise",
    title: "Adina Outreach Agent",
    description: "Automated outreach agent that manages personalized communication campaigns at scale.",
    tags: ["outreach", "communication", "automation"],
    demoUrl: process.env.NEXT_PUBLIC_ADINA_OUTREACH_URL || "#",
    bullets: [
      "Multi-channel campaign orchestration",
      "Personalized message generation",
      "Response tracking and follow-ups",
    ],
    architecture: "Next.js + message queue + CRM integration",
  },
  {
    slug: "edge-health",
    category: "healthcare",
    title: "Edge Health",
    description: "Health monitoring agent that runs diagnostics and reports on edge infrastructure status.",
    tags: ["health", "monitoring", "edge"],
    demoUrl: process.env.NEXT_PUBLIC_EDGE_HEALTH_URL || "#",
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
