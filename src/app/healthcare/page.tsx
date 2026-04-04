import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgentsByCategory } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

const cardConfig: Record<string, {
  badge: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  borderHover: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
}> = {
  "centi-tmf": {
    badge: "Production Ready",
    badgeBg: "bg-[#34b5fa]/10",
    badgeText: "text-[#34b5fa]",
    badgeBorder: "border-[#34b5fa]/20",
    borderHover: "hover:border-[#ba9eff]/30",
    iconBg: "bg-[#ba9eff]/20",
    iconColor: "text-[#ba9eff]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l.39 1.572a9 9 0 01-8.19 6.938V18m0 0v-3.75m0 3.75h3.75m-3.75 0H8.25" />
      </svg>
    ),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJgL9FBgxR48lG3FIlyR0mmV6NhFG53aPziF0Sjf5lEMOZaiCGz3yUhTYAmfGvEQDp7Tb57fMB1WAEUV248tXY-Ez34dnIMh4VPANnNBdaVzXAfOYr1jfEQZ5vS1amnY7qz84ZPoOgdEqgsOLwf3d_uPPNM-RaesECkFXkagVH-k6xerxfoSzpHw3kZYoPkieI7HyNwPHkx-xgSi-bd8GmyEaEzDNu2qqX8LLhmzZD8rc4P2AmCvrFpPmRVZ-OVjuBA6Bm9HLJYndA",
    imageAlt: "Clinical research laboratory",
  },
  "labflow-ai": {
    badge: "Beta v2.4",
    badgeBg: "bg-[#ba9eff]/10",
    badgeText: "text-[#ba9eff]",
    badgeBorder: "border-[#ba9eff]/20",
    borderHover: "hover:border-[#34b5fa]/30",
    iconBg: "bg-[#34b5fa]/20",
    iconColor: "text-[#34b5fa]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l.39 1.572a9 9 0 01-8.19 6.938V18m0 0v-3.75m0 3.75h3.75m-3.75 0H8.25" />
      </svg>
    ),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm_auG2Xpro61H77yGNk1MQ2L4bKFR3tmPrvyRsYaslhEnzyCDWgP9gcyq0xkpQD2xnlbevWoN7IiNUR7-IBY1dkD098XEimNfX5hV_EbsnpsxZJvk-SIT_ZeMWgH4zdvc4d_URe2eVGysQ6Cq_KlQ7tZxvzIXXMSNPSRl5p4-IooAodfzLwpZzRT9vOyUOyFLiw4KubRmBTUZJ0HnzvwVj82wvsl1R9hYCBAHIz63miT6Uv2QVIZLWHN795xxQ0rpoTWFQKD7Nv_x",
    imageAlt: "Automated lab sample processing",
  },
  "edge-health": {
    badge: "Edge Active",
    badgeBg: "bg-[#7de9ff]/10",
    badgeText: "text-[#7de9ff]",
    badgeBorder: "border-[#7de9ff]/20",
    borderHover: "hover:border-[#7de9ff]/30",
    iconBg: "bg-[#7de9ff]/20",
    iconColor: "text-[#7de9ff]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3EzjK2rctTcvwxx8yetuD4a1Oe2sR6Kra0cIxy1Jpe200-vp5-uqW0DFm340-r84CADBOXPPjdpxIMqifdYhWFjouCAxeKYeK4cJCZI9u8xUIWbltN6h37uuUOb-op-CKPoRag-cktQ7-OQmlKDLFCKUlSz4PeXwoWmaV5zk4yzPt43o8xsxBkYSyfeFNY6Feawd1mJGrV6fc1CXGGtbhTkP1-qfvkE2X8pFPUBCO0DUATtfF_nvky4ZPgqwroBu6MLpyd-w9fAQt",
    imageAlt: "Futuristic medical monitoring interface",
  },
};

export default function Page() {
  const agents = getAgentsByCategory("healthcare");

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>Tech Aviator Labs</Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/healthcare" className="text-[#ba9eff] border-b border-[#ba9eff]/50 pb-0.5">Healthcare</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/projects#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <MobileNav />
          <Link href="/projects#contact" className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95" style={NAV_FONT}>
            Work With Us
          </Link>
        </div>
      </nav>

      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Hero */}
          <header className="mb-16 relative text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ba9eff]/10 rounded-full blur-[120px] pointer-events-none" />
            <h1 className="text-[3.5rem] md:text-6xl font-extrabold leading-tight tracking-tighter mb-4 text-[#fcf8fe]" style={NAV_FONT}>
              Healthcare &amp; Life Sciences
            </h1>
            <p className="text-xl text-[#acaab0] max-w-2xl mx-auto" style={BODY_FONT}>
              We build AI systems for regulated healthcare environments: clinical trial compliance, lab workflow automation, and FHIR-based interoperability. Every output is traceable. Every decision is explainable.
            </p>
          </header>

          {/* 3-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {agents.map((agent) => {
              const cfg = cardConfig[agent.slug];
              if (!cfg) return null;
              return (
                <Link
                  key={agent.slug}
                  href={`/agents/${agent.slug}`}
                  className={`group relative bg-[#131317] rounded-xl p-8 border border-[#48474c]/15 ${cfg.borderHover} transition-all duration-500 flex flex-col h-full shadow-2xl`}
                >
                  {/* Icon + Badge row */}
                  <div className="mb-6 flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-lg ${cfg.iconBg} flex items-center justify-center ${cfg.iconColor}`}>
                      {cfg.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full ${cfg.badgeBg} ${cfg.badgeText} text-[10px] font-bold tracking-widest uppercase border ${cfg.badgeBorder}`} style={NAV_FONT}>
                      {cfg.badge}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div className="mb-auto">
                    <h3 className="text-2xl font-bold mb-3 text-[#fcf8fe]" style={NAV_FONT}>{agent.title}</h3>
                    <p className="text-[#acaab0] mb-6 leading-relaxed text-sm" style={BODY_FONT}>
                      {agent.description.split(".")[0]}.
                    </p>
                  </div>

                  {/* Tags + Image */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {agent.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-[#25252b] text-[#acaab0] text-[10px] font-medium" style={NAV_FONT}>{tag}</span>
                      ))}
                    </div>
                    <div className="h-40 rounded-xl overflow-hidden mt-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cfg.image}
                        alt={cfg.imageAlt}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#0b0b0f] border-t border-[#1f1f25]/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-lg font-bold text-white" style={NAV_FONT}>Tech Aviator Labs</Link>
          <div className="flex gap-8 text-xs text-[#acaab0]" style={NAV_FONT}>
            <Link href="/projects#contact" className="hover:text-[#34b5fa] transition-colors">Contact</Link>
            <Link href="/case-studies" className="hover:text-[#34b5fa] transition-colors">Case Studies</Link>
            <Link href="/about" className="hover:text-[#34b5fa] transition-colors">About</Link>
          </div>
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2025 Tech Aviator Labs. All rights reserved.</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
