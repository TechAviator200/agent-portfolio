import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgent } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };
const ACCENT = "#34b5fa";

export default function Page() {
  const agent = getAgent("overit");
  if (!agent) return <main className="p-8">Agent not found</main>;

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(52,181,250,0.08)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>Tech Aviator Labs</Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/media-entertainment" className="hover:text-white transition-colors">Media</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <MobileNav />
          <Link href="/projects#contact" className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95" style={NAV_FONT}>
            Work With Us
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/media-entertainment" className="inline-flex items-center gap-1.5 text-sm text-[#acaab0] hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Media &amp; Entertainment
            </Link>
          </div>

          {/* Hero — copy left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Left: content */}
            <div className="relative">
              <div className="absolute -top-20 left-0 w-80 h-64 bg-[#34b5fa]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#34b5fa] mb-4" style={NAV_FONT}>
                  AI Dating · Real-Time Social
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#fcf8fe] leading-tight mb-4" style={NAV_FONT}>
                  OverIt
                </h1>
                <p className="text-sm font-semibold text-[#acaab0] mb-4" style={NAV_FONT}>
                  An AI-assisted dating system built to make digital interaction feel less transactional. Real-time match scoring, conversation context, and personalized suggestions.
                </p>
                <p className="text-base text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
                  {agent.description}
                </p>

                <h3 className="text-sm font-bold uppercase tracking-widest text-[#acaab0] mb-4" style={NAV_FONT}>What It Does</h3>
                <ul className="space-y-3 mb-8">
                  {agent.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: ACCENT }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[#acaab0]" style={BODY_FONT}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a href={agent.demoUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all active:scale-95 hover:shadow-[0_0_24px_rgba(52,181,250,0.4)]"
                    style={{ backgroundColor: ACCENT, color: "#003853", ...NAV_FONT }}>
                    Launch Demo
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {agent.github && (
                    <a href={agent.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#48474c] text-[#acaab0] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#34b5fa] hover:text-[#34b5fa] transition-all"
                      style={NAV_FONT}>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  <Link href="/projects#contact"
                    className="inline-flex items-center gap-2 border border-[#48474c] text-[#acaab0] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#34b5fa] hover:text-[#34b5fa] transition-all"
                    style={NAV_FONT}>
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="rounded-2xl overflow-hidden border border-[#48474c]/20 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/overit-hero.png"
                alt="OverIt"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Architecture + Tech Attributes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            <div className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-8">
              <h3 className="text-lg font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Architecture</h3>
              <div className="grid grid-cols-2 gap-4">
                {(agent.stack ?? ["Next.js", "Supabase", "OpenAI", "TypeScript"]).map((tech) => (
                  <div key={tech} className="rounded-lg border border-[#48474c]/20 bg-[#1f1f25] px-4 py-3">
                    <p className="text-xs text-[#acaab0] font-medium" style={NAV_FONT}>{tech}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-mono text-xs text-[#76757a] border-t border-[#48474c]/20 pt-4">
                {agent.architecture}
              </p>
            </div>

            <div className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#acaab0] mb-6" style={NAV_FONT}>Key Attributes</h3>
              <div className="space-y-4">
                {[
                  { title: "Kinetic Speed", desc: "Real-time match scoring and conversation suggestions delivered with sub-second latency.", color: ACCENT },
                  { title: "Content Aware", desc: "AI suggestion layer understands conversation context, tone, and user intent to keep interactions natural.", color: "#ba9eff" },
                  { title: "Privacy First", desc: "Built on Supabase with row-level security — user data stays private and access is scoped to each session.", color: "#7de9ff" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                    <div>
                      <p className="text-sm font-semibold text-[#fcf8fe] mb-0.5" style={NAV_FONT}>{item.title}</p>
                      <p className="text-xs text-[#acaab0] leading-relaxed" style={BODY_FONT}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {agent.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-[#48474c] bg-[#131317] text-xs text-[#acaab0]" style={NAV_FONT}>{tag}</span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#1f1f25] bg-[#0e0e12]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
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
