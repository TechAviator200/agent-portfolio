import Link from "next/link";
import { getAgent } from "@/lib/agents";

export default function Page() {
  const agent = getAgent("labflow-ai");
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
            id="labflow-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Flask / beaker */}
            <path d="M25 20 L25 45 L15 65 L45 65 L35 45 L35 20 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M20 20 L40 20" stroke="#3dd9d9" strokeWidth="0.8" />
            <ellipse cx="30" cy="57" rx="8" ry="4" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Flow arrows / workflow */}
            <path d="M80 30 L100 30" stroke="#3dd9d9" strokeWidth="1" />
            <path d="M97 27 L101 30 L97 33" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="105" y="24" width="20" height="12" rx="2" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <path d="M125 30 L140 30" stroke="#3dd9d9" strokeWidth="1" />
            <path d="M137 27 L141 30 L137 33" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Document lines */}
            <rect x="155" y="15" width="30" height="40" rx="2" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <path d="M160 25 L180 25 M160 31 L177 31 M160 37 L180 37 M160 43 L173 43" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Graph / trend */}
            <path d="M15 120 L30 110 L50 115 L70 100 L85 105" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="30" cy="110" r="2" fill="#3dd9d9" opacity="0.6" />
            <circle cx="50" cy="115" r="2" fill="#3dd9d9" opacity="0.6" />
            <circle cx="70" cy="100" r="2" fill="#3dd9d9" opacity="0.6" />
            {/* Checkmark / audit */}
            <circle cx="140" cy="120" r="15" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <path d="M133 120 L138 125 L148 113" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* DNA helix - lab context */}
            <path d="M170 90 Q180 95 170 100 Q160 105 170 110 Q180 115 170 120 Q160 125 170 130" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <path d="M175 90 Q165 95 175 100 Q185 105 175 110 Q165 115 175 120 Q185 125 175 130" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            {/* SOP label box */}
            <rect x="20" y="155" width="32" height="16" rx="2" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <path d="M24 163 L28 163 M30 163 L48 163" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Node graph */}
            <circle cx="120" cy="160" r="5" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <circle cx="140" cy="150" r="4" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <circle cx="155" cy="165" r="4" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <circle cx="135" cy="172" r="3" stroke="#3dd9d9" strokeWidth="0.8" fill="none" />
            <path d="M125 160 L136 152 M144 152 L152 163 M139 172 L152 167 M125 162 L133 171" stroke="#3dd9d9" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#labflow-doodles)" />
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Illustration */}
          <div className="flex items-center justify-center rounded-2xl bg-white p-8">
            <svg viewBox="0 0 300 280" fill="none" className="h-full w-full max-w-md">
              {/* Background accents */}
              <circle cx="260" cy="40" r="30" fill="#3dd9d9" opacity="0.08" />
              <circle cx="40" cy="240" r="25" fill="#3dd9d9" opacity="0.08" />

              {/* Unstructured SOP document (left) */}
              <rect x="20" y="50" width="80" height="110" rx="4" fill="#2a3142" />
              <rect x="26" y="57" width="68" height="96" rx="2" fill="#1a1f2e" />
              {/* Messy text lines */}
              <rect x="30" y="64" width="55" height="5" rx="1" fill="#888" opacity="0.6" />
              <rect x="30" y="73" width="40" height="4" rx="1" fill="#666" opacity="0.5" />
              <rect x="30" y="81" width="60" height="4" rx="1" fill="#888" opacity="0.5" />
              <rect x="30" y="89" width="35" height="4" rx="1" fill="#555" opacity="0.5" />
              <rect x="30" y="97" width="58" height="4" rx="1" fill="#777" opacity="0.5" />
              <rect x="30" y="105" width="45" height="4" rx="1" fill="#555" opacity="0.4" />
              <rect x="30" y="113" width="62" height="4" rx="1" fill="#777" opacity="0.4" />
              <rect x="30" y="121" width="30" height="4" rx="1" fill="#555" opacity="0.4" />
              {/* "SOP" label */}
              <rect x="26" y="140" width="28" height="12" rx="2" fill="#ff9f43" opacity="0.8" />
              <text x="40" y="149" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">SOP</text>

              {/* AI processing box (center) */}
              <rect x="115" y="75" width="70" height="65" rx="6" fill="white" stroke="#e5e5e5" strokeWidth="1.5" />
              <rect x="121" y="82" width="58" height="45" rx="3" fill="#e8f5f5" />
              {/* AI brain icon */}
              <circle cx="150" cy="95" r="12" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
              <path d="M144 93 Q148 89 152 93 Q156 89 160 93" stroke="#3dd9d9" strokeWidth="1" fill="none" />
              <path d="M144 97 Q148 101 152 97 Q156 101 160 97" stroke="#3dd9d9" strokeWidth="1" fill="none" />
              <circle cx="150" cy="95" r="2" fill="#3dd9d9" opacity="0.5" />
              <text x="150" y="117" textAnchor="middle" fontSize="6" fill="#1a1f2e" fontWeight="bold">AI PARSE</text>

              {/* Arrow: SOP → AI */}
              <path d="M100 105 L115 105" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="3 2" />
              <path d="M112 102 L116 105 L112 108" fill="#3dd9d9" />

              {/* Structured output panel (right) */}
              <rect x="200" y="40" width="85" height="155" rx="6" fill="white" stroke="#e5e5e5" strokeWidth="1.5" />
              <rect x="207" y="48" width="71" height="140" rx="3" fill="#f8fffe" />

              {/* Step 1 */}
              <rect x="211" y="54" width="30" height="5" rx="1" fill="#3dd9d9" opacity="0.6" />
              <rect x="211" y="62" width="60" height="3" rx="1" fill="#ccc" />
              <rect x="211" y="68" width="50" height="3" rx="1" fill="#ccc" />
              <path d="M267 57 L270 60 L276 54" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />

              {/* Divider */}
              <path d="M211 76 L273 76" stroke="#e5e5e5" strokeWidth="0.8" />

              {/* Step 2 */}
              <rect x="211" y="81" width="30" height="5" rx="1" fill="#3dd9d9" opacity="0.6" />
              <rect x="211" y="89" width="55" height="3" rx="1" fill="#ccc" />
              <rect x="211" y="95" width="48" height="3" rx="1" fill="#ccc" />
              <path d="M267 84 L270 87 L276 81" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />

              {/* Divider */}
              <path d="M211 103 L273 103" stroke="#e5e5e5" strokeWidth="0.8" />

              {/* Step 3 - flagged */}
              <rect x="211" y="108" width="30" height="5" rx="1" fill="#ff9f43" opacity="0.7" />
              <rect x="211" y="116" width="55" height="3" rx="1" fill="#ccc" />
              <rect x="211" y="122" width="40" height="3" rx="1" fill="#ccc" />
              <circle cx="271" cy="112" r="5" fill="#ff9f43" opacity="0.9" />
              <path d="M271 108.5 L271 112 M271 114 L271 114.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />

              {/* Divider */}
              <path d="M211 130 L273 130" stroke="#e5e5e5" strokeWidth="0.8" />

              {/* Step 4 */}
              <rect x="211" y="135" width="30" height="5" rx="1" fill="#3dd9d9" opacity="0.6" />
              <rect x="211" y="143" width="58" height="3" rx="1" fill="#ccc" />
              <rect x="211" y="149" width="45" height="3" rx="1" fill="#ccc" />
              <path d="M267 138 L270 141 L276 135" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />

              {/* Arrow: AI → structured */}
              <path d="M185 105 L200 105" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="3 2" />
              <path d="M197 102 L201 105 L197 108" fill="#3dd9d9" />

              {/* Person - lab scientist */}
              <ellipse cx="75" cy="207" rx="18" ry="16" fill="#fbd5c8" />
              <ellipse cx="75" cy="193" rx="22" ry="14" fill="#1a3a4a" />
              <path d="M53 205 Q63 190 75 185 Q87 190 97 205" fill="#1a3a4a" />
              <path d="M57 217 Q53 242 57 272 L93 272 Q97 242 93 217 Q75 227 57 217" fill="white" />
              <path d="M57 217 L65 272" stroke="#e5e5e5" strokeWidth="1" />
              <path d="M93 217 L85 272" stroke="#e5e5e5" strokeWidth="1" />
              <path d="M57 227 Q43 239 35 255" stroke="#fbd5c8" strokeWidth="9" strokeLinecap="round" />
              <path d="M93 227 Q107 239 115 253" stroke="#fbd5c8" strokeWidth="9" strokeLinecap="round" />

              {/* Human review badge */}
              <rect x="115" y="218" width="52" height="20" rx="4" fill="#2a3142" />
              <text x="141" y="232" textAnchor="middle" fontSize="7" fill="#3dd9d9" fontWeight="bold">REVIEW ✓</text>

              {/* Knowledge graph nodes (bottom right) */}
              <circle cx="230" cy="228" r="6" fill="#3dd9d9" opacity="0.3" stroke="#3dd9d9" strokeWidth="1" />
              <circle cx="250" cy="218" r="5" fill="#3dd9d9" opacity="0.2" stroke="#3dd9d9" strokeWidth="1" />
              <circle cx="268" cy="232" r="5" fill="#3dd9d9" opacity="0.2" stroke="#3dd9d9" strokeWidth="1" />
              <circle cx="248" cy="242" r="4" fill="#3dd9d9" opacity="0.15" stroke="#3dd9d9" strokeWidth="1" />
              <path d="M236 228 L245 220 M255 220 L264 230 M252 242 L264 234 M236 230 L245 241" stroke="#3dd9d9" strokeWidth="0.8" opacity="0.6" />
            </svg>
          </div>

          {/* Right side - Content */}
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
              <span className="text-white">LabFlow </span>
              <span className="text-[#3dd9d9]">AI</span>
            </h1>
            <p className="mt-2 text-base font-medium text-zinc-400">
              Workflow Structuring & Validation Layer for Scientific Operations
            </p>
            <p className="mt-4 text-lg text-zinc-300">{agent.description}</p>

            {/* What it does */}
            <div className="mt-8">
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

            {/* Tech Stack */}
            {agent.stack && (
              <div className="mt-8">
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

            {/* Architecture */}
            <div className="mt-6">
              <p className="rounded-lg border border-zinc-700 bg-zinc-800/30 px-4 py-3 font-mono text-sm text-zinc-200">
                {agent.architecture}
              </p>
            </div>

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
      </main>
    </div>
  );
}
