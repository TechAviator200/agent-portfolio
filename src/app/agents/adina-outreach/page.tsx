import Link from "next/link";
import { getAgent } from "@/lib/agents";

export default function Page() {
  const agent = getAgent("adina-outreach");
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
            id="adina-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Envelope */}
            <rect x="20" y="25" width="35" height="24" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M20 25 L37.5 40 L55 25" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Chat bubbles */}
            <path d="M150 20 Q150 10 165 10 L185 10 Q195 10 195 20 L195 35 Q195 45 185 45 L165 45 L155 55 L158 45 Q150 45 150 35 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Network nodes */}
            <circle cx="80" cy="90" r="8" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="110" cy="75" r="5" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <circle cx="110" cy="105" r="5" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <path d="M88 90 L105 77 M88 90 L105 103" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Arrow */}
            <path d="M160 90 L180 90 M175 85 L180 90 L175 95" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Calendar */}
            <rect x="30" y="130" width="30" height="28" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M30 138 L60 138" stroke="#3dd9d9" strokeWidth="0.5" />
            <rect x="35" y="142" width="5" height="5" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <rect x="43" y="142" width="5" height="5" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <rect x="51" y="142" width="5" height="5" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Graph */}
            <path d="M140 170 L140 140 L180 140" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M145 165 L155 155 L165 160 L175 145" stroke="#3dd9d9" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#adina-doodles)" />
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
          href="/enterprise"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#3dd9d9] active:scale-[0.98]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Enterprise
        </Link>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Illustration */}
          <div className="flex items-center justify-center rounded-2xl bg-white p-8">
            <svg viewBox="0 0 300 280" fill="none" className="h-full w-full max-w-md">
              <circle cx="250" cy="40" r="25" fill="#3dd9d9" opacity="0.1" />
              <circle cx="40" cy="240" r="20" fill="#3dd9d9" opacity="0.1" />

              {/* Central monitor */}
              <rect x="90" y="60" width="120" height="90" rx="8" fill="white" stroke="#e5e5e5" strokeWidth="2" />
              <rect x="98" y="68" width="104" height="70" rx="4" fill="#e8f5f5" />
              <rect x="105" y="75" width="90" height="12" rx="2" fill="#3dd9d9" opacity="0.3" />
              <rect x="105" y="92" width="90" height="10" rx="1" fill="#ccc" opacity="0.5" />
              <rect x="105" y="106" width="90" height="10" rx="1" fill="#ccc" opacity="0.5" />
              <rect x="105" y="120" width="60" height="10" rx="1" fill="#ccc" opacity="0.5" />
              <rect x="140" y="150" width="20" height="20" fill="#ddd" />
              <rect x="120" y="170" width="60" height="6" rx="2" fill="#ccc" />

              {/* Outgoing envelopes */}
              <g transform="translate(220, 80)">
                <rect x="0" y="0" width="40" height="28" rx="3" fill="#3dd9d9" opacity="0.8" />
                <path d="M0 0 L20 15 L40 0" stroke="white" strokeWidth="1.5" fill="none" />
              </g>
              <g transform="translate(235, 120)">
                <rect x="0" y="0" width="35" height="24" rx="3" fill="#3dd9d9" opacity="0.5" />
                <path d="M0 0 L17.5 12 L35 0" stroke="white" strokeWidth="1" fill="none" />
              </g>
              <g transform="translate(245, 155)">
                <rect x="0" y="0" width="30" height="20" rx="2" fill="#3dd9d9" opacity="0.3" />
                <path d="M0 0 L15 10 L30 0" stroke="white" strokeWidth="1" fill="none" />
              </g>

              {/* Incoming replies */}
              <g transform="translate(20, 90)">
                <rect x="0" y="0" width="35" height="24" rx="3" fill="#ff9f43" opacity="0.6" />
                <path d="M0 0 L17.5 12 L35 0" stroke="white" strokeWidth="1" fill="none" />
              </g>
              <g transform="translate(35, 130)">
                <rect x="0" y="0" width="30" height="20" rx="2" fill="#ff9f43" opacity="0.4" />
              </g>

              {/* Person */}
              <ellipse cx="150" cy="210" rx="22" ry="20" fill="#fbd5c8" />
              <ellipse cx="150" cy="195" rx="26" ry="18" fill="#3dd9d9" />
              <path d="M124 205 Q135 185 150 180 Q165 185 176 205" fill="#3dd9d9" />
              <path d="M128 232 Q123 255 128 280 L172 280 Q177 255 172 232 Q150 242 128 232" fill="white" />
              <path d="M128 245 Q110 250 100 260" stroke="#fbd5c8" strokeWidth="10" strokeLinecap="round" />
              <path d="M172 245 Q190 250 200 260" stroke="#fbd5c8" strokeWidth="10" strokeLinecap="round" />
              <rect x="85" y="258" width="130" height="15" rx="3" fill="#2a3142" />
              <rect x="90" y="261" width="120" height="9" rx="2" fill="#1a1f2e" />

              {/* Connection lines */}
              <path d="M55 102 L90 102" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M210 95 L220 88" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M210 110 L235 128" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M210 125 L245 160" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Status indicators */}
              <circle cx="260" cy="95" r="6" fill="#3dd9d9" />
              <circle cx="270" cy="140" r="5" fill="#3dd9d9" opacity="0.7" />
              <circle cx="275" cy="175" r="4" fill="#3dd9d9" opacity="0.4" />
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
              <span className="text-white">Adina </span>
              <span className="text-[#3dd9d9]">Outreach</span>
            </h1>
            <p className="mt-2 text-base font-medium text-zinc-400">
              Transparent AI Outreach Agent for Scalable Campaign Execution
            </p>
            <p className="mt-4 text-lg text-zinc-300">{agent.description}</p>

            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              Built for operators who want outbound scale without losing visibility — every action is logged, structured, and reviewable.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
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
        </div>

        {/* ── Demo ─────────────────────────────────────────────────────────── */}
        <div className="mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">See it in action</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Watch Adina handle personalized outreach workflows, follow-up logic, and operator visibility in action.
            </p>
          </div>

          {/* Responsive Loom embed */}
          <div className="relative w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 aspect-video">
            <iframe
              src="https://www.loom.com/embed/56d8e031b4004d2f83a840e2467acf1e"
              frameBorder="0"
              allowFullScreen
              allow="fullscreen"
              className="absolute inset-0 h-full w-full"
              title="Adina Outreach — AI Campaign Execution Demo"
            />
          </div>

          {/* Fallback CTA */}
          <div className="mt-4">
            <a
              href="https://www.loom.com/share/56d8e031b4004d2f83a840e2467acf1e"
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
                  label: "Workflow product, not a chat wrapper",
                  detail: "Adina is a structured execution system — cadences, exit conditions, reply classification — not a prompt-and-respond bot.",
                },
                {
                  label: "Operator control by design",
                  detail: "Every outbound action is logged and reviewable. Transparency is built into the architecture, not bolted on.",
                },
                {
                  label: "Sales ops domain knowledge",
                  detail: "Rate limits, deduplication, follow-up windows — the product reflects real outbound operational constraints, not demo-ware.",
                },
                {
                  label: "AI outputs made legible",
                  detail: "Generated messages, send decisions, and reply classifications are surfaced to operators in a way that builds trust over time.",
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
