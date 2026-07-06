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
  radioboy: {
    badge: "Live",
    badgeBg: "bg-[#ba9eff]/10",
    badgeText: "text-[#ba9eff]",
    badgeBorder: "border-[#ba9eff]/20",
    borderHover: "hover:border-[#ba9eff]/30",
    iconBg: "bg-[#ba9eff]/20",
    iconColor: "text-[#ba9eff]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9a3 3 0 016 0m-8.485-1.515a7 7 0 0110.97 0M4.222 4.222a11 11 0 0115.556 0M12 18h.01" />
      </svg>
    ),
    image: "/radioboy-hero.png",
    imageAlt: "RadioBoy boombox hero",
  },
  overit: {
    badge: "Demo",
    badgeBg: "bg-[#34b5fa]/10",
    badgeText: "text-[#34b5fa]",
    badgeBorder: "border-[#34b5fa]/20",
    borderHover: "hover:border-[#34b5fa]/30",
    iconBg: "bg-[#34b5fa]/20",
    iconColor: "text-[#34b5fa]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    image: "/overit-hero.png",
    imageAlt: "AI dating app interface",
  },
};

export default function Page() {
  const agents = getAgentsByCategory("media-entertainment");

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>
            TechAviatorLabs
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/media-entertainment" className="text-[#ba9eff] border-b border-[#ba9eff]/50 pb-0.5">Media</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/projects#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <MobileNav />
          <Link
            href="/projects#contact"
            className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95"
            style={NAV_FONT}
          >
            Start a Conversation
          </Link>
        </div>
      </nav>

      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Hero */}
          <header className="mb-16 relative text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ba9eff]/10 rounded-full blur-[120px] pointer-events-none" />
            <h1 className="text-[3.5rem] md:text-6xl font-extrabold leading-tight tracking-tighter mb-4 text-[#fcf8fe]" style={NAV_FONT}>
              Media &amp; Entertainment
            </h1>
            <p className="text-xl text-[#acaab0] max-w-2xl mx-auto" style={BODY_FONT}>
              We build AI that helps people discover music, personalize what they hear, and stay connected to what moves them. Environments where latency, taste, and user behavior are the product.
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

            {/* JENDAYA — client case study, not a self-hosted demo agent */}
            <Link
              href="/agents/jendaya/case-study"
              className="group relative bg-[#131317] rounded-xl p-8 border border-[#48474c]/15 hover:border-[#34b5fa]/30 transition-all duration-500 flex flex-col h-full shadow-2xl"
            >
              {/* Icon + Badge row */}
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-[#34b5fa]/20 flex items-center justify-center text-[#34b5fa]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#34b5fa]/10 text-[#34b5fa] text-[10px] font-bold tracking-widest uppercase border border-[#34b5fa]/20" style={NAV_FONT}>
                  Case Study
                </span>
              </div>

              {/* Title + Description */}
              <div className="mb-auto">
                <h3 className="text-2xl font-bold mb-3 text-[#fcf8fe]" style={NAV_FONT}>JENDAYA</h3>
                <p className="text-[#acaab0] mb-6 leading-relaxed text-sm" style={BODY_FONT}>
                  A two-sided iOS platform for Paris Fashion Week: real-time talent navigation and an operations console for event coordinators.
                </p>
              </div>

              {/* Tags + Image */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["fashion tech", "real-time", "iOS"].map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-[#25252b] text-[#acaab0] text-[10px] font-medium" style={NAV_FONT}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-40 rounded-xl overflow-hidden mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/jendaya-qr-checkin.png"
                    alt="JENDAYA QR check-in screen"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#0b0b0f] border-t border-[#1f1f25]/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-lg font-bold text-white" style={NAV_FONT}>TechAviatorLabs</Link>
          <div className="flex gap-8 text-xs text-[#acaab0]" style={NAV_FONT}>
            <Link href="/projects#contact" className="hover:text-[#34b5fa] transition-colors">Contact</Link>
            <Link href="/case-studies" className="hover:text-[#34b5fa] transition-colors">Case Studies</Link>
            <Link href="/about" className="hover:text-[#34b5fa] transition-colors">About</Link>
          </div>
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2026 Tech Aviator Labs</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
