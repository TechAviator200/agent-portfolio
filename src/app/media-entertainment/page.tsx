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
  accentColor: string;
  image: string;
  imageAlt: string;
  tagBg: string;
}> = {
  radioboy: {
    badge: "Live",
    badgeBg: "bg-[#ba9eff]/10",
    badgeText: "text-[#ba9eff]",
    badgeBorder: "border-[#ba9eff]/20",
    borderHover: "hover:border-[#ba9eff]/30",
    accentColor: "group-hover:text-[#ba9eff]",
    image: "/radioboy-hero.png",
    imageAlt: "RadioBoy boombox hero",
    tagBg: "bg-[#25252b]",
  },
  overit: {
    badge: "Demo",
    badgeBg: "bg-[#34b5fa]/10",
    badgeText: "text-[#34b5fa]",
    badgeBorder: "border-[#34b5fa]/20",
    borderHover: "hover:border-[#34b5fa]/30",
    accentColor: "group-hover:text-[#34b5fa]",
    image: "/overit-hero.png",
    imageAlt: "AI dating app interface",
    tagBg: "bg-[#25252b]",
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

      <main className="pt-28 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Hero */}
          <header className="mb-16 relative">
            <div className="absolute -top-16 left-0 w-96 h-64 bg-[#ba9eff]/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">

              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-6 text-[#fcf8fe]"
                style={NAV_FONT}
              >
                Media &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9eff] to-[#34b5fa]">
                  Entertainment
                </span>
              </h1>
              <p className="text-lg text-[#acaab0] max-w-2xl" style={BODY_FONT}>
                We build AI that helps people discover music, personalize what they hear, and stay connected to what moves them. Environments where latency, taste, and user behavior are the product.
              </p>
              <div className="mt-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-sm text-[#acaab0] hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Products
                </Link>
              </div>
            </div>
          </header>

          {/* Agent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {agents.map((agent) => {
              const cfg = cardConfig[agent.slug];
              if (!cfg) return null;
              return (
                <Link
                  key={agent.slug}
                  href={`/agents/${agent.slug}`}
                  className={`group relative bg-[#131317] rounded-xl border border-[#48474c]/15 ${cfg.borderHover} transition-all duration-500 shadow-2xl overflow-hidden flex flex-col`}
                >
                  {/* Image area */}
                  <div className="relative h-52 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cfg.image}
                      alt={cfg.imageAlt}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-[#131317]/40 to-transparent" />
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full ${cfg.badgeBg} ${cfg.badgeText} text-[10px] font-bold tracking-widest uppercase border ${cfg.badgeBorder}`}
                      style={NAV_FONT}
                    >
                      {cfg.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className={`text-2xl font-bold mb-3 text-[#fcf8fe] ${cfg.accentColor} transition-colors`} style={NAV_FONT}>
                      {agent.title}
                    </h3>
                    <p className="text-[#acaab0] leading-relaxed text-sm mb-6 flex-1" style={BODY_FONT}>
                      {agent.description.split(".").slice(0, 2).join(".")}.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agent.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className={`px-2 py-1 rounded-md ${cfg.tagBg} text-[#acaab0] text-[10px] font-medium`} style={NAV_FONT}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="relative rounded-xl border border-[#48474c]/20 bg-[#131317] p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ba9eff]/10 blur-[60px]" />
            <p className="text-[#acaab0] mb-2 text-sm relative" style={BODY_FONT}>Ready to deploy?</p>
            <h3 className="text-2xl font-bold text-[#fcf8fe] mb-6 relative" style={NAV_FONT}>
              Interested in building a media agent?
            </h3>
            <Link
              href="/projects#contact"
              className="inline-flex items-center gap-2 bg-[#ba9eff] text-[#2b006e] px-8 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_24px_rgba(186,158,255,0.4)] transition-all active:scale-95 relative"
              style={NAV_FONT}
            >
              Start a Conversation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#1f1f25] bg-[#0e0e12]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
          <Link href="/" className="text-lg font-bold text-white" style={NAV_FONT}>TechAviatorLabs</Link>
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
