import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgent } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };
const ACCENT = "#7de9ff";

export default function Page() {
  const agent = getAgent("edge-health");
  if (!agent) return <main className="p-8">Agent not found</main>;

  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(125,233,255,0.06)]">
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
          <div className="relative mb-16">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#7de9ff]/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7de9ff] mb-4" style={NAV_FONT}>
                Healthcare AI · FHIR Infrastructure
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[#fcf8fe] leading-tight mb-6" style={NAV_FONT}>
                Edge
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7de9ff] to-[#34b5fa]">
                  FHIR
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
                  <span key={badge} className="inline-flex items-center px-4 py-3 rounded-full border border-[#7de9ff]/30 text-[#7de9ff] text-sm font-medium" style={NAV_FONT}>
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
              Watch EdgeFHIR relay vitals in real-time, handle offline queuing, and flush the outbox on reconnect.
            </p>
            <div className="rounded-xl overflow-hidden border border-[#48474c]/20 bg-[#131317]">
              <iframe
                src="https://www.loom.com/embed/50db14cfad9e4cdb8829be56bd9ae5ab"
                loading="lazy" style={{ border: 0 }}
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture"
                className="block w-full aspect-video"
                title="EdgeFHIR Demo"
              />
            </div>
            <a href="https://www.loom.com/share/50db14cfad9e4cdb8829be56bd9ae5ab" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#acaab0] hover:text-[#7de9ff] transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch on Loom
            </a>
          </div>

          {/* Expected Impact */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>Expected Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                "Reduces time to patient context for care teams working across disconnected systems",
                "Eliminates manual repeated lookups through consolidated FHIR retrieval and summarization",
                "Store-and-forward relay ensures no data loss during connectivity outages at the edge",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-[#fcf8fe] mb-6" style={NAV_FONT}>How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Ingest vitals", body: "Simulator streams patient vitals to the relay API at the edge." },
                { step: "02", title: "Triage & score", body: "Rules-based AI scores SpO2, HR, Temp, RR with LOINC-coded FHIR observations." },
                { step: "03", title: "Queue & relay", body: "Connectivity-aware relay forwards to cloud. Outbox queues on disconnect, flushes on reconnect." },
                { step: "04", title: "Monitor & alert", body: "Dashboard shows real-time status, anomaly flags, and simulation mode across the pipeline." },
              ].map(({ step, title, body }) => (
                <div key={step} className="rounded-xl border border-[#48474c]/20 bg-[#131317] p-6">
                  <span className="text-3xl font-extrabold" style={{ color: `${ACCENT}30` }}>{step}</span>
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
                  { label: "Interoperability by default", detail: "FHIR R4 + LOINC codes mean outputs plug directly into existing health data pipelines." },
                  { label: "Resilient at the edge", detail: "Filesystem outbox queue means no data loss if connectivity drops — relay handles it automatically." },
                  { label: "Simulation modes for dev", detail: "Normal, desat, fever, tachy modes let teams test triage logic without real patients." },
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
