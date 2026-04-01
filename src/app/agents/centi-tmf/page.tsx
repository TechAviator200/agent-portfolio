import Link from "next/link";
import { getAgent } from "@/lib/agents";

export default function Page() {
  const agent = getAgent("centi-tmf");
  if (!agent) return <main className="p-8">Agent not found</main>;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1f2e]">
      {/* Background doodle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="centi-tmf-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Clipboard / document */}
            <rect x="20" y="20" width="30" height="40" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="27" y="15" width="16" height="10" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <path d="M25 32 L45 32 M25 38 L42 38 M25 44 L45 44 M25 50 L38 50" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Magnifying glass */}
            <circle cx="150" cy="40" r="12" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M159 49 L168 58" stroke="#3dd9d9" strokeWidth="1.5" strokeLinecap="round" />
            {/* Shield / compliance */}
            <path d="M90 80 Q90 70 100 70 Q110 70 110 80 L110 95 Q110 105 100 110 Q90 105 90 95 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M95 90 L99 95 L107 84" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* DNA / clinical */}
            <path d="M160 80 Q170 85 160 90 Q150 95 160 100 Q170 105 160 110 Q150 115 160 120" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M165 80 Q155 85 165 90 Q175 95 165 100 Q155 105 165 110 Q175 115 165 120" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Risk gauge */}
            <path d="M25 150 A20 20 0 0 1 65 150" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M45 150 L45 132" stroke="#3dd9d9" strokeWidth="1" />
            <circle cx="45" cy="150" r="3" fill="#3dd9d9" opacity="0.5" />
            {/* Network dots */}
            <circle cx="130" cy="160" r="4" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="155" cy="148" r="4" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="175" cy="165" r="4" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M134 160 L151 150 M159 150 L171 163" stroke="#3dd9d9" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#centi-tmf-doodles)" />
      </svg>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <Link href="/" className="text-xl font-bold text-white">
          Portfolio
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm text-zinc-300 transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/projects" className="text-sm text-zinc-300 transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="/projects#contact" className="text-sm text-zinc-300 transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-6xl px-8 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Breadcrumb */}
        <Link
          href="/healthcare"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#3dd9d9] active:scale-[0.98]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Healthcare
        </Link>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Illustration */}
          <div className="flex items-center justify-center rounded-2xl bg-white p-8">
            <svg viewBox="0 0 300 280" fill="none" className="h-full w-full max-w-md">
              {/* Background accents */}
              <circle cx="260" cy="40" r="30" fill="#3dd9d9" opacity="0.08" />
              <circle cx="40" cy="240" r="25" fill="#3dd9d9" opacity="0.08" />

              {/* Large document / TMF binder */}
              <rect x="40" y="50" width="90" height="130" rx="4" fill="#2a3142" />
              <rect x="44" y="54" width="82" height="122" rx="2" fill="#1a1f2e" />
              <rect x="50" y="62" width="70" height="8" rx="1" fill="#3dd9d9" opacity="0.3" />
              <rect x="50" y="75" width="60" height="6" rx="1" fill="#3dd9d9" opacity="0.2" />
              <rect x="50" y="85" width="65" height="6" rx="1" fill="#3dd9d9" opacity="0.2" />
              <rect x="50" y="95" width="55" height="6" rx="1" fill="#3dd9d9" opacity="0.2" />
              <path d="M50 108 L110 108" stroke="#3dd9d9" strokeWidth="0.5" opacity="0.4" />
              <rect x="50" y="113" width="70" height="6" rx="1" fill="#3dd9d9" opacity="0.15" />
              <rect x="50" y="123" width="58" height="6" rx="1" fill="#3dd9d9" opacity="0.15" />
              <rect x="50" y="133" width="65" height="6" rx="1" fill="#3dd9d9" opacity="0.15" />
              <circle cx="105" cy="150" r="10" fill="#ff9f43" opacity="0.9" />
              <path d="M105 144 L105 151 M105 154 L105 155" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

              {/* AI analysis panel */}
              <rect x="150" y="40" width="110" height="80" rx="6" fill="white" stroke="#e5e5e5" strokeWidth="1.5" />
              <rect x="158" y="48" width="94" height="55" rx="3" fill="#e8f5f5" />
              <path d="M175 90 A22 22 0 0 1 220 90" stroke="#e5e5e5" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M175 90 A22 22 0 0 1 207 67" stroke="#3dd9d9" strokeWidth="4" fill="none" strokeLinecap="round" />
              <text x="197" y="88" textAnchor="middle" fontSize="10" fill="#1a1f2e" fontWeight="bold">72</text>
              <text x="197" y="98" textAnchor="middle" fontSize="6" fill="#666">Risk Score</text>
              <rect x="237" y="70" width="8" height="25" rx="1" fill="#3dd9d9" opacity="0.5" />
              <rect x="249" y="60" width="8" height="35" rx="1" fill="#ff9f43" opacity="0.7" />
              <rect x="225" y="75" width="8" height="20" rx="1" fill="#3dd9d9" opacity="0.3" />
              <path d="M130 90 L150 75" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Output / report panel */}
              <rect x="150" y="140" width="110" height="70" rx="6" fill="white" stroke="#e5e5e5" strokeWidth="1.5" />
              <rect x="158" y="148" width="94" height="54" rx="3" fill="#f8fffe" />
              <rect x="164" y="154" width="50" height="5" rx="1" fill="#3dd9d9" opacity="0.4" />
              <rect x="164" y="163" width="80" height="4" rx="1" fill="#ccc" />
              <rect x="164" y="171" width="70" height="4" rx="1" fill="#ccc" />
              <rect x="164" y="179" width="75" height="4" rx="1" fill="#ccc" />
              <path d="M237 163 L240 166 L246 160" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
              <path d="M237 171 L240 174 L246 168" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
              <circle cx="241" cy="180" r="4" fill="#ff9f43" opacity="0.6" />
              <path d="M205 120 L205 140" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="3 2" />

              {/* Person */}
              <ellipse cx="80" cy="200" rx="18" ry="16" fill="#fbd5c8" />
              <ellipse cx="80" cy="186" rx="22" ry="14" fill="#1a3a4a" />
              <path d="M58 198 Q68 183 80 178 Q92 183 102 198" fill="#1a3a4a" />
              <path d="M62 210 Q58 235 62 265 L98 265 Q102 235 98 210 Q80 220 62 210" fill="white" />
              <path d="M62 210 L70 265" stroke="#e5e5e5" strokeWidth="1" />
              <path d="M98 210 L90 265" stroke="#e5e5e5" strokeWidth="1" />
              <path d="M62 220 Q48 232 40 248" stroke="#fbd5c8" strokeWidth="9" strokeLinecap="round" />
              <path d="M98 220 Q112 232 120 246" stroke="#fbd5c8" strokeWidth="9" strokeLinecap="round" />

              {/* FDA badge */}
              <rect x="120" y="230" width="36" height="20" rx="4" fill="#2a3142" />
              <text x="138" y="244" textAnchor="middle" fontSize="8" fill="#3dd9d9" fontWeight="bold">FDA</text>

              {/* Shield checkmark */}
              <path d="M238 210 Q238 200 248 200 Q258 200 258 210 L258 222 Q258 232 248 237 Q238 232 238 222 Z" fill="#3dd9d9" opacity="0.2" stroke="#3dd9d9" strokeWidth="1" />
              <path d="M242 218 L246 223 L254 212" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Right — Title + description + actions */}
          <div className="flex flex-col justify-center">
            {agent.badges && (
              <div className="mb-4 flex flex-wrap gap-2">
                {agent.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-[#3dd9d9]/10 border border-[#3dd9d9]/30 px-3 py-1 text-xs font-medium text-[#3dd9d9]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-white">centi</span>
              <span className="text-[#3dd9d9]">TMF</span>
            </h1>
            <p className="mt-2 text-base font-medium text-zinc-400">
              AI Inspection Readiness Agent for Clinical Trial Master Files
            </p>
            <p className="mt-4 text-lg text-zinc-300">{agent.description}</p>

            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              centiTMF demonstrates product judgment for structured, high-trust workflows — where auditability, usability, and operational clarity matter as much as model capability.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={agent.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3dd9d9] px-5 py-3 text-sm font-semibold text-[#1a1f2e] transition-all hover:bg-[#2bc4c4] hover:shadow-lg hover:shadow-[#3dd9d9]/25 active:scale-[0.98]"
              >
                View Live
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              {agent.github && (
                <a
                  href={agent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-[#3dd9d9] hover:text-[#3dd9d9] active:scale-[0.98]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
              {agent.apiDocsUrl && (
                <a
                  href={agent.apiDocsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-[#3dd9d9] hover:text-[#3dd9d9] active:scale-[0.98]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  API Docs
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ── Demo ─────────────────────────────────────────────────────────── */}
        <div className="mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">See it in action</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Watch centiTMF analyze TMF risk, surface missing artifacts, and generate inspection-readiness reports in real time.
            </p>
          </div>

          {/* Responsive Loom embed */}
          <div className="relative w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 aspect-video">
            <iframe
              src="https://www.loom.com/embed/f26581ecf65b4368b5d5f3e9c61d7ca0"
              frameBorder="0"
              allowFullScreen
              allow="fullscreen"
              className="absolute inset-0 h-full w-full"
              title="centiTMF — AI Inspection Readiness Demo"
            />
          </div>

          {/* Fallback CTA */}
          <div className="mt-4 flex items-center gap-2">
            <a
              href="https://www.loom.com/share/f26581ecf65b4368b5d5f3e9c61d7ca0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-[#3dd9d9]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch on Loom
            </a>
          </div>
        </div>

        {/* ── Capabilities + Product Signal ────────────────────────────────── */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Key Capabilities */}
          <div>
            <h2 className="text-xl font-semibold text-white">Key Capabilities</h2>
            <ul className="mt-4 space-y-3">
              {agent.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#3dd9d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-200">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why This Matters */}
          <div>
            <h2 className="text-xl font-semibold text-white">Why this matters</h2>
            <ul className="mt-4 space-y-4">
              {[
                {
                  label: "Regulated workflow product thinking",
                  detail: "Built for compliance-sensitive environments where every output must be auditable and explainable — not just accurate.",
                },
                {
                  label: "Applied AI for healthcare operations",
                  detail: "Not a generic chatbot. A structured workflow tool for document-heavy, high-stakes clinical trial work.",
                },
                {
                  label: "Human-legible outputs",
                  detail: "Inspection risk scores, missing artifact detection, and audit-ready reports that ops teams can act on immediately.",
                },
                {
                  label: "Product + engineering crossover",
                  detail: "Designed and built end-to-end — from API design and data modeling to UI — demonstrating full-stack AI product judgment.",
                },
              ].map(({ label, detail }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#3dd9d9]" />
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{label}</p>
                    <p className="mt-0.5 text-sm text-zinc-400">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Tech Stack + Architecture ─────────────────────────────────────── */}
        <div className="mt-16 space-y-6">
          {agent.stack && (
            <div>
              <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {agent.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <p className="rounded-lg border border-zinc-700 bg-zinc-800/30 px-4 py-3 font-mono text-sm text-zinc-200">
            {agent.architecture}
          </p>
        </div>
      </main>
    </div>
  );
}
