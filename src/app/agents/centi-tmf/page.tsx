import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgent } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

const PRIMARY = "#ba9eff";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
      <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>Tech Aviator Labs</Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
          <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
          <Link href="/healthcare" className="hover:text-white transition-colors">Healthcare</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </div>
        <MobileNav />
          <Link href="/projects#contact" className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95" style={NAV_FONT}>
          Work With Us
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
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
  );
}

export default function Page() {
  const agent = getAgent("centi-tmf");
  if (!agent) return <main className="p-8">Agent not found</main>;

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      <NavBar />

      <main className="pt-28 pb-24">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="mb-6">
            <Link href="/healthcare" className="inline-flex items-center gap-1.5 text-sm text-[#acaab0] hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Healthcare &amp; Life Sciences
            </Link>
          </div>

          {/* Hero section */}
          <div className="relative mb-20">
            <div className="absolute -top-20 left-0 w-96 h-64 bg-[#ba9eff]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#34b5fa] mb-4" style={NAV_FONT}>
                Healthcare AI · Clinical Compliance
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#fcf8fe] leading-tight mb-6" style={NAV_FONT}>
                Clinical trial compliance,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9eff] to-[#7de9ff]">
                  structured.
                </span>
              </h1>
              <p className="text-lg text-[#acaab0] leading-relaxed mb-8 max-w-2xl" style={BODY_FONT}>
                {agent.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={agent.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#ba9eff] text-[#2b006e] px-6 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_24px_rgba(186,158,255,0.4)] transition-all active:scale-95"
                  style={NAV_FONT}
                >
                  Launch Demo
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {agent.github && (
                  <a href={agent.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#48474c] text-[#acaab0] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#ba9eff] hover:text-[#ba9eff] transition-all"
                    style={NAV_FONT}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}
                {agent.apiDocsUrl && (
                  <a href={agent.apiDocsUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#48474c] text-[#acaab0] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#ba9eff] hover:text-[#ba9eff] transition-all"
                    style={NAV_FONT}>
                    API Docs
                  </a>
                )}
                <Link href="/agents/centi-tmf/case-study"
                  className="inline-flex items-center gap-2 border border-[#ba9eff]/40 text-[#ba9eff] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#ba9eff]/10 transition-all"
                  style={NAV_FONT}>
                  Case Study
                </Link>
              </div>
            </div>
          </div>

          {/* Demo (Loom embed — preserved) */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#fcf8fe] mb-2" style={NAV_FONT}>See It In Action</h2>
            <p className="text-sm text-[#acaab0] mb-6" style={BODY_FONT}>
              Watch centiTMF review trial documents, surface missing records, and generate an inspection-readiness view.
            </p>
            <div className="rounded-xl overflow-hidden border border-[#48474c]/20 bg-[#131317]">
              <iframe
                src="https://www.loom.com/embed/f26581ecf65b4368b5d5f3e9c61d7ca0"
                loading="lazy" style={{ border: 0 }}
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture"
                className="block w-full aspect-video"
                title="centiTMF — AI Inspection Readiness Demo"
              />
            </div>
            <a href="https://www.loom.com/share/f26581ecf65b4368b5d5f3e9c61d7ca0" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#acaab0] hover:text-[#ba9eff] transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch on Loom
            </a>
          </div>

          {/* Structure for high-stakes workflows */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Problem", body: "Clinical trial teams manage large volumes of essential documents across fragmented workflows. Reviewing materials manually makes it difficult to spot gaps early and stay continuously inspection-ready." },
              { label: "Solution", body: "centiTMF organizes document review by surfacing missing or incomplete records, highlighting potential compliance issues, and supporting a more structured readiness workflow." },
              { label: "Impact", body: "Expected to reduce the manual burden of trial document review and accelerate the process of identifying issues before audits or inspections." },
            ].map(({ label, body }) => (
              <div key={label} className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>{label}</p>
                <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{body}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#fcf8fe] mb-8" style={NAV_FONT}>How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Ingest documents", body: "Upload or connect a document set or trial record collection." },
                { step: "02", title: "Review structure", body: "Agent checks against expected documentation requirements and internal logic." },
                { step: "03", title: "Surface gaps", body: "Flags missing, incomplete, or inconsistent artifacts with context." },
                { step: "04", title: "Readiness view", body: "Returns a clearer picture of where the trial stands and what needs attention." },
              ].map(({ step, title, body }) => (
                <div key={step} className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-6">
                  <span className="text-3xl font-extrabold" style={{ color: `${PRIMARY}30` }}>{step}</span>
                  <p className="mt-2 text-sm font-semibold text-[#fcf8fe]" style={NAV_FONT}>{title}</p>
                  <p className="mt-1 text-xs text-[#acaab0] leading-relaxed" style={BODY_FONT}>{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Capabilities + Why it matters */}
          <div className="mb-20 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Key Capabilities</h2>
              <ul className="space-y-3">
                {agent.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: PRIMARY }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  { label: "Regulated workflow, not generic AI", detail: "Built for compliance-sensitive environments where outputs must be auditable, explainable, and useful to ops teams." },
                  { label: "Plain-English outputs", detail: "In regulated environments, the cost of discovering issues late is high. centiTMF moves teams toward earlier visibility." },
                  { label: "Structured over black-box", detail: "Every flag includes context. Operators see what was missing and why — not just a score." },
                ].map(({ label, detail }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: PRIMARY }} />
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

      <Footer />
    </div>
  );
}
