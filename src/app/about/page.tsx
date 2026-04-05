import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>TechAviatorLabs</Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about" className="text-[#ba9eff] border-b border-[#ba9eff]/50 pb-0.5">About</Link>
          </div>
          <MobileNav />
          <Link href="/projects#contact" className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95" style={NAV_FONT}>
            Start a Conversation
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Hero */}
          <header className="mb-20 relative">
            <div className="absolute -top-20 right-0 w-96 h-64 bg-[#ba9eff]/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative max-w-4xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#34b5fa] mb-4" style={NAV_FONT}>
                About Us
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#fcf8fe] leading-tight mb-8" style={NAV_FONT}>
                Just Bring Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9eff] to-[#34b5fa]">
                  Idea.
                </span>
                {" "}We Will Build It.
              </h1>
              <p className="text-lg text-[#acaab0] leading-relaxed max-w-2xl" style={BODY_FONT}>
                We build AI-powered products and agentic systems that solve real problems across media &amp; entertainment, enterprise, and healthcare &amp; life sciences. From agent architecture to production deployment, we design and ship end-to-end systems that automate complex workflows and deliver measurable outcomes.
              </p>
            </div>
          </header>

          {/* The Iho Philosophy */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>The TechAviatorLabs Philosophy</h2>
              <div className="space-y-4 text-[#acaab0]" style={BODY_FONT}>
                <p className="leading-relaxed">
                  Our focus is on practical AI solutions — agents that understand context, learn from interactions, and deliver measurable value.
                </p>
                <p className="leading-relaxed">
                  Every system is built with deterministic reliability at its core. Operators always know what the agent did, why it did it, and what to do next. No black boxes in high-stakes environments.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Precision Engineering", desc: "Systems designed to be correct by construction, not corrected after the fact. Every decision is auditable.", color: "#ba9eff" },
                { title: "Deterministic Systems", desc: "AI that behaves predictably. No probabilistic surprises in regulated or high-stakes contexts.", color: "#34b5fa" },
                { title: "Human-in-the-Loop", desc: "Automation that amplifies human judgment, not replaces it. Operators stay in control.", color: "#7de9ff" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                    <div>
                      <h4 className="font-semibold text-[#fcf8fe] mb-1" style={NAV_FONT}>{item.title}</h4>
                      <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Models */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#fcf8fe] mb-8" style={NAV_FONT}>Engagement Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-[#ba9eff]/20 bg-[#131317] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ba9eff]/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ba9eff" strokeWidth="1.5" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#fcf8fe]" style={NAV_FONT}>Tactical Sprints</h3>
                </div>
                <p className="text-[#acaab0] text-sm leading-relaxed mb-6" style={BODY_FONT}>
                  Focused 2–4 week engagements to scope, prototype, and validate an agentic system or AI workflow. Best for teams evaluating feasibility or needing a working prototype fast.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-[#1f1f25] p-4">
                    <p className="text-2xl font-extrabold text-[#ba9eff]" style={NAV_FONT}>2–4</p>
                    <p className="text-xs text-[#76757a]" style={BODY_FONT}>Weeks to MVP</p>
                  </div>
                  <div className="rounded-lg bg-[#1f1f25] p-4">
                    <p className="text-2xl font-extrabold text-[#ba9eff]" style={NAV_FONT}>&lt;10ms</p>
                    <p className="text-xs text-[#76757a]" style={BODY_FONT}>Response Latency Target</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#34b5fa]/20 bg-[#131317] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#34b5fa]/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#34b5fa" strokeWidth="1.5" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#fcf8fe]" style={NAV_FONT}>Strategic Retainers</h3>
                </div>
                <p className="text-[#acaab0] text-sm leading-relaxed mb-6" style={BODY_FONT}>
                  Ongoing embedded partnership for product teams building AI-first systems. Monthly cadence with clear OKRs, full-stack delivery, and architecture guidance.
                </p>
                <div className="space-y-2">
                  {["Architecture review + implementation", "Weekly delivery cadence", "Production-grade output with full handoff", "Async + sync support included"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-shrink-0 text-[#34b5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-xs text-[#acaab0]" style={BODY_FONT}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Domains */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#fcf8fe] mb-8" style={NAV_FONT}>Domain Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { domain: "Healthcare & Life Sciences", items: ["Clinical trial compliance", "FHIR/HL7 interoperability", "Lab workflow automation", "Patient data infrastructure"], color: "#ba9eff", href: "/healthcare" },
                { domain: "Enterprise AI", items: ["Outbound automation", "Knowledge management", "Document intelligence", "Compliance workflow"], color: "#34b5fa", href: "/enterprise" },
                { domain: "Media & Entertainment", items: ["Audio/content curation", "Real-time personalization", "AI conversation layer", "Recommendation systems"], color: "#7de9ff", href: "/media-entertainment" },
              ].map((d) => (
                <Link key={d.domain} href={d.href} className="group rounded-xl border border-[#48474c]/20 bg-[#131317] p-8 hover:border-opacity-60 transition-all" style={{ borderColor: `${d.color}20` }}>
                  <h3 className="font-bold text-[#fcf8fe] mb-4" style={{ color: d.color, ...NAV_FONT }}>{d.domain}</h3>
                  <ul className="space-y-2">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#acaab0]" style={BODY_FONT}>
                        <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold" style={{ color: d.color, ...NAV_FONT }}>
                    View Projects
                    <svg className="h-3 w-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center rounded-2xl border border-[#48474c]/20 bg-[#131317] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ba9eff]/10 blur-[60px]" />
            <h3 className="text-2xl font-bold text-[#fcf8fe] mb-4 relative" style={NAV_FONT}>
              Let&apos;s Build Something Real.
            </h3>
            <p className="text-[#acaab0] mb-6 relative max-w-md mx-auto" style={BODY_FONT}>
              Whether you&apos;re evaluating a new AI system or accelerating an existing one, let&apos;s chat.
            </p>
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
