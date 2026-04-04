import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgent } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };
const ACCENT = "#ba9eff";

export default function Page() {
  const agent = getAgent("radioboy");
  if (!agent) return <main className="p-8">Agent not found</main>;

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
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
              <div className="absolute -top-20 left-0 w-80 h-64 bg-[#ba9eff]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ba9eff] mb-4" style={NAV_FONT}>
                  Audio Curation · AI Streaming
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#fcf8fe] leading-tight mb-6" style={NAV_FONT}>
                  RadioBoy
                </h1>
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all active:scale-95 hover:shadow-[0_0_24px_rgba(186,158,255,0.4)]"
                    style={{ backgroundColor: ACCENT, color: "#2b006e", ...NAV_FONT }}>
                    Launch Demo
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link href="/projects#contact"
                    className="inline-flex items-center gap-2 border border-[#48474c] text-[#acaab0] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#ba9eff] hover:text-[#ba9eff] transition-all"
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
                src="/radioboy-hero.png"
                alt="RadioBoy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Architecture + Neural Tuning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            <div className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-8">
              <h3 className="text-lg font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Architecture</h3>
              <div className="grid grid-cols-2 gap-4">
                {(agent.stack ?? ["Next.js", "Streaming API", "Edge Workers", "Node.js"]).map((tech) => (
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
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#acaab0] mb-4" style={NAV_FONT}>How It Learns</h3>
              <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                RadioBoy adapts curation to listener mood, time-of-day, and engagement signals in real time. No manual configuration. The system tunes itself as it observes.
              </p>
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
