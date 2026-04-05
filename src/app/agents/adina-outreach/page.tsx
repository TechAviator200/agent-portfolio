import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgent } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };
const ACCENT = "#34b5fa";

export default function Page() {
  const agent = getAgent("adina-outreach");
  if (!agent) return <main className="p-8">Agent not found</main>;

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(52,181,250,0.08)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>TechAviatorLabs</Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <MobileNav />
          <Link href="/projects#contact" className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95" style={NAV_FONT}>
            Start a Conversation
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/enterprise" className="inline-flex items-center gap-1.5 text-sm text-[#acaab0] hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Enterprise
            </Link>
          </div>

          {/* Hero */}
          <div className="relative mb-16">
            <div className="absolute -top-20 left-0 w-96 h-64 bg-[#34b5fa]/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#34b5fa] mb-4" style={NAV_FONT}>
                Enterprise AI · Outbound Automation
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#fcf8fe] leading-tight mb-6" style={NAV_FONT}>
                Adina{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34b5fa] to-[#ba9eff]">
                  Outreach
                </span>
              </h1>
              <p className="text-lg text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
                {agent.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={agent.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all active:scale-95"
                  style={{ backgroundColor: ACCENT, color: "#003853", ...NAV_FONT }}>
                  Launch Demo
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {agent.badges?.map((badge) => (
                  <span key={badge} className="inline-flex items-center px-4 py-3 rounded-full border border-[#34b5fa]/30 text-[#34b5fa] text-sm font-medium" style={NAV_FONT}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Demo (Loom embed — preserved) */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#fcf8fe] mb-2" style={NAV_FONT}>See It In Action</h2>
            <p className="text-sm text-[#acaab0] mb-6" style={BODY_FONT}>
              Watch Adina research a lead, generate personalized outreach, and queue it for review. End to end in one workflow.
            </p>
            <div className="rounded-xl overflow-hidden border border-[#48474c]/20 bg-[#131317]">
              <iframe
                src="https://www.loom.com/embed/56d8e031b4004d2f83a840e2467acf1e"
                loading="lazy" style={{ border: 0 }}
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture"
                className="block w-full aspect-video"
                title="Adina Outreach Agent Demo"
              />
            </div>
            <a href="https://www.loom.com/share/56d8e031b4004d2f83a840e2467acf1e" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#acaab0] hover:text-[#34b5fa] transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch on Loom
            </a>
          </div>

          {/* Key Capabilities + Why it matters */}
          <div className="mb-20 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Key Capabilities</h2>
              <ul className="space-y-3">
                {agent.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: ACCENT }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#acaab0]" style={BODY_FONT}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Why This Matters</h2>
              <ul className="space-y-4">
                {[
                  { label: "Eliminates context-switching", detail: "Lead research, company context, and first-draft writing consolidated into one automated workflow." },
                  { label: "Operator-first visibility", detail: "Every action is logged and explainable — no black-box decisions in a high-stakes sales motion." },
                  { label: "Production discipline built-in", detail: "Rate limits, deduplication, and send controls prevent the common failure modes of automated outreach." },
                ].map(({ label, detail }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <div>
                      <p className="text-sm font-semibold text-[#fcf8fe]" style={NAV_FONT}>{label}</p>
                      <p className="mt-0.5 text-sm text-[#acaab0]" style={BODY_FONT}>{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* System Architecture */}
          {agent.stack && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#fcf8fe] mb-4" style={NAV_FONT}>System Architecture</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {agent.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full border border-[#48474c] bg-[#131317] text-xs text-[#acaab0]" style={NAV_FONT}>{tech}</span>
                ))}
              </div>
              <p className="rounded-lg border border-[#48474c]/20 bg-[#131317] px-4 py-3 font-mono text-sm text-[#acaab0]">
                {agent.architecture}
              </p>
            </div>
          )}
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
