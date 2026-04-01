import Link from "next/link";
import { getAgent } from "@/lib/agents";

export default function Page() {
  const agent = getAgent("edge-health");
  if (!agent) return <main className="p-8">Agent not found</main>;

  const isLive = agent.demoUrl && agent.demoUrl !== "#";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1f2e]">
      {/* Background doodle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="edge-health-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Heart with pulse */}
            <path
              d="M30 30 Q25 23 18 30 Q10 40 30 55 Q50 40 42 30 Q35 23 30 30"
              stroke="#3dd9d9"
              strokeWidth="1"
              fill="none"
            />
            {/* Pulse line */}
            <path d="M150 35 L160 35 L165 25 L170 45 L175 35 L185 35" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Server rack */}
            <rect x="60" y="80" width="35" height="45" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M60 92 L95 92 M60 104 L95 104 M60 116 L95 116" stroke="#3dd9d9" strokeWidth="0.5" />
            <circle cx="90" cy="86" r="2" fill="#3dd9d9" opacity="0.5" />
            <circle cx="90" cy="98" r="2" fill="#3dd9d9" opacity="0.5" />
            <circle cx="90" cy="110" r="2" fill="#3dd9d9" opacity="0.5" />
            {/* Network globe */}
            <circle cx="160" cy="100" r="18" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <ellipse cx="160" cy="100" rx="8" ry="18" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <path d="M142 100 L178 100" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Stethoscope */}
            <path d="M35 150 Q30 160 35 170 Q40 180 45 175" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="45" cy="178" r="5" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Data flow */}
            <circle cx="140" cy="160" r="4" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="160" cy="150" r="4" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="180" cy="160" r="4" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M144 160 L156 152 M164 152 L176 158" stroke="#3dd9d9" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#edge-health-doodles)" />
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
              {/* Background elements */}
              <circle cx="250" cy="50" r="25" fill="#3dd9d9" opacity="0.1" />
              <circle cx="50" cy="230" r="20" fill="#3dd9d9" opacity="0.1" />

              {/* Server rack - left */}
              <rect x="30" y="80" width="60" height="100" rx="4" fill="#2a3142" />
              <rect x="35" y="90" width="50" height="18" rx="2" fill="#1a1f2e" />
              <rect x="35" y="113" width="50" height="18" rx="2" fill="#1a1f2e" />
              <rect x="35" y="136" width="50" height="18" rx="2" fill="#1a1f2e" />
              <rect x="35" y="159" width="50" height="18" rx="2" fill="#1a1f2e" />
              {/* Status lights */}
              <circle cx="78" cy="99" r="3" fill="#3dd9d9" />
              <circle cx="78" cy="122" r="3" fill="#3dd9d9" />
              <circle cx="78" cy="145" r="3" fill="#ff9f43" />
              <circle cx="78" cy="168" r="3" fill="#3dd9d9" />

              {/* Central dashboard */}
              <rect x="110" y="60" width="100" height="80" rx="6" fill="white" stroke="#e5e5e5" strokeWidth="2" />
              <rect x="118" y="68" width="84" height="55" rx="3" fill="#e8f5f5" />

              {/* Health metrics on screen */}
              <path d="M125 90 L135 90 L140 80 L145 100 L150 90 L160 90" stroke="#3dd9d9" strokeWidth="2" fill="none" />
              <rect x="170" y="95" width="8" height="20" fill="#3dd9d9" opacity="0.6" />
              <rect x="182" y="85" width="8" height="30" fill="#3dd9d9" opacity="0.8" />
              <rect x="125" y="105" width="35" height="4" rx="1" fill="#ccc" />
              <rect x="125" y="113" width="25" height="4" rx="1" fill="#ccc" />

              {/* Monitor stand */}
              <rect x="150" y="140" width="20" height="15" fill="#ddd" />
              <rect x="135" y="155" width="50" height="5" rx="2" fill="#ccc" />

              {/* Server rack - right */}
              <rect x="230" y="80" width="50" height="90" rx="4" fill="#2a3142" />
              <rect x="235" y="88" width="40" height="15" rx="2" fill="#1a1f2e" />
              <rect x="235" y="108" width="40" height="15" rx="2" fill="#1a1f2e" />
              <rect x="235" y="128" width="40" height="15" rx="2" fill="#1a1f2e" />
              <rect x="235" y="148" width="40" height="15" rx="2" fill="#1a1f2e" />
              {/* Status lights */}
              <circle cx="268" cy="95" r="2.5" fill="#3dd9d9" />
              <circle cx="268" cy="115" r="2.5" fill="#3dd9d9" />
              <circle cx="268" cy="135" r="2.5" fill="#3dd9d9" />
              <circle cx="268" cy="155" r="2.5" fill="#3dd9d9" />

              {/* Connection lines */}
              <path d="M90 130 L110 105" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M210 105 L230 120" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Edge nodes floating */}
              <circle cx="60" cy="50" r="12" fill="#3dd9d9" opacity="0.2" />
              <circle cx="60" cy="50" r="6" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
              <path d="M60 44 L60 56 M54 50 L66 50" stroke="#3dd9d9" strokeWidth="1" />

              <circle cx="160" cy="30" r="12" fill="#3dd9d9" opacity="0.2" />
              <circle cx="160" cy="30" r="6" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
              <path d="M160 24 L160 36 M154 30 L166 30" stroke="#3dd9d9" strokeWidth="1" />

              <circle cx="260" cy="45" r="12" fill="#3dd9d9" opacity="0.2" />
              <circle cx="260" cy="45" r="6" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
              <path d="M260 39 L260 51 M254 45 L266 45" stroke="#3dd9d9" strokeWidth="1" />

              {/* Data flow lines to nodes */}
              <path d="M60 62 L60 80" stroke="#3dd9d9" strokeWidth="1" strokeDasharray="3 2" />
              <path d="M160 42 L160 60" stroke="#3dd9d9" strokeWidth="1" strokeDasharray="3 2" />
              <path d="M260 57 L260 80" stroke="#3dd9d9" strokeWidth="1" strokeDasharray="3 2" />

              {/* Person - healthcare professional */}
              <ellipse cx="150" cy="210" rx="20" ry="18" fill="#fbd5c8" />
              <ellipse cx="150" cy="196" rx="24" ry="16" fill="#1a3a4a" />
              <path d="M126 205 Q138 188 150 183 Q162 188 174 205" fill="#1a3a4a" />
              <path d="M130 230 Q125 250 130 275 L170 275 Q175 250 170 230 Q150 240 130 230" fill="white" />
              <path d="M130 230 L138 275" stroke="#e5e5e5" strokeWidth="1" />
              <path d="M170 230 L162 275" stroke="#e5e5e5" strokeWidth="1" />
              <path d="M142 235 Q138 248 142 255 Q146 262 150 258" stroke="#3dd9d9" strokeWidth="2" fill="none" />
              <circle cx="150" cy="260" r="4" fill="#3dd9d9" />
              <path d="M130 240 Q115 250 105 265" stroke="#fbd5c8" strokeWidth="10" strokeLinecap="round" />
              <path d="M170 240 Q185 250 195 265" stroke="#fbd5c8" strokeWidth="10" strokeLinecap="round" />
              <rect x="90" y="260" width="25" height="18" rx="2" fill="#2a3142" />
              <rect x="93" y="263" width="19" height="12" fill="#3dd9d9" opacity="0.3" />

              {/* Alert notification */}
              <circle cx="270" cy="200" r="15" fill="#ff9f43" opacity="0.2" />
              <path d="M270 190 L270 200 M270 205 L270 206" stroke="#ff9f43" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Right — Title + description + actions */}
          <div className="flex flex-col justify-center">
            {/* Badges */}
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
              <span className="text-white">Edge </span>
              <span className="text-[#3dd9d9]">Health</span>
            </h1>
            <p className="mt-2 text-base font-medium text-zinc-400">
              AI Infrastructure Monitoring and FHIR Relay Agent
            </p>
            <p className="mt-4 text-lg text-zinc-300">{agent.description}</p>

            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              Edge Health demonstrates my ability to build AI-assisted infrastructure products for high-stakes environments where interoperability, system reliability, and operational clarity matter.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {isLive ? (
                <a
                  href={agent.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#3dd9d9] px-5 py-3 text-sm font-semibold text-[#1a1f2e] transition-all hover:bg-[#2bc4c4] hover:shadow-lg hover:shadow-[#3dd9d9]/25 active:scale-[0.98]"
                >
                  Launch Demo
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-5 py-3 text-sm text-zinc-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
                  Demo deploying
                </span>
              )}
              <Link
                href="/projects#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-[#3dd9d9] hover:text-[#3dd9d9] active:scale-[0.98]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* ── Demo ─────────────────────────────────────────────────────────── */}
        <div className="mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">See it in action</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Watch Edge Health monitor edge-system status, surface anomalies, and demonstrate infrastructure visibility in real time.
            </p>
          </div>

          {/* Responsive Loom embed */}
          <div className="relative w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 aspect-video">
            <iframe
              src="https://www.loom.com/embed/50db14cfad9e4cdb8829be56bd9ae5ab"
              frameBorder="0"
              allowFullScreen
              allow="fullscreen"
              className="absolute inset-0 h-full w-full"
              title="Edge Health — AI Infrastructure Monitoring Demo"
            />
          </div>

          {/* Fallback CTA */}
          <div className="mt-4 flex items-center gap-2">
            <a
              href="https://www.loom.com/share/50db14cfad9e4cdb8829be56bd9ae5ab"
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
                  label: "Infrastructure-adjacent AI product",
                  detail: "Built to sit between real-world systems and operators — not as a wrapper on top, but as a relay layer with real operational logic.",
                },
                {
                  label: "Healthcare interoperability thinking",
                  detail: "Demonstrates understanding of FHIR R4, relay patterns, and the messy reality of distributed health data integration.",
                },
                {
                  label: "Platform + product crossover",
                  detail: "Store-and-forward relay with AI triage layer shows ability to reason about both the plumbing and the operator-facing product.",
                },
                {
                  label: "Backend complexity → operator tooling",
                  detail: "Telemetry and vitals pipeline surfaced as a clean operational dashboard — translating low-level signals into actionable insight.",
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
