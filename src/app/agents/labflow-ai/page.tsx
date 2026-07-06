import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgent } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };
const ACCENT = "#34b5fa";

export default function Page() {
  const agent = getAgent("labflow-ai");
  if (!agent) return <main className="p-8">Agent not found</main>;

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(52,181,250,0.08)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>TechAviatorLabs</Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/healthcare" className="hover:text-white transition-colors">Healthcare</Link>
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
            <Link href="/healthcare" className="inline-flex items-center gap-1.5 text-sm text-[#acaab0] hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Healthcare &amp; Life Sciences
            </Link>
          </div>

          {/* Hero */}
          <div className="relative mb-20">
            <div className="absolute -top-20 right-0 w-96 h-64 bg-[#34b5fa]/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#34b5fa] mb-4" style={NAV_FONT}>
                Healthcare AI · Lab Operations
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#fcf8fe] leading-tight mb-6" style={NAV_FONT}>
                LabFlow{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34b5fa] to-[#7de9ff]">
                  AI
                </span>
              </h1>
              <p className="text-xl text-[#acaab0] mb-2 font-semibold" style={NAV_FONT}>
                Workflow Structuring &amp; Validation Layer for Scientific Operations
              </p>
              <p className="text-base text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
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
                {agent.github && (
                  <a href={agent.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#48474c] text-[#acaab0] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#34b5fa] hover:text-[#34b5fa] transition-all"
                    style={NAV_FONT}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mb-20 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Key Capabilities</h2>
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
              <h2 className="text-2xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Why This Matters</h2>
              <ul className="space-y-4">
                {[
                  { label: "Structured over black-box", detail: "Converts ambiguous SOPs into step-by-step records with full traceability — not a summarization tool." },
                  { label: "Human-in-the-loop by design", detail: "Every automated extraction goes through a human review layer before becoming canonical." },
                  { label: "Semantic-ready output", detail: "Compatible with knowledge-graph pipelines and downstream ML workflows." },
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

          {/* Tech Stack */}
          {agent.stack && (
            <div className="mb-12">
              <h2 className="text-xl font-bold text-[#fcf8fe] mb-4" style={NAV_FONT}>Tech Stack</h2>
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
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2026 Tech Aviator Labs</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
