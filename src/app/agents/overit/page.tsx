import Link from "next/link";
import { getAgent } from "@/lib/agents";

export default function Page() {
  const agent = getAgent("overit");
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
            id="overit-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Heart */}
            <path d="M30 40 Q25 30 18 30 Q8 30 8 42 Q8 54 30 65 Q52 54 52 42 Q52 30 42 30 Q35 30 30 40" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Chat bubble */}
            <path d="M120 20 Q120 10 135 10 L165 10 Q175 10 175 20 L175 35 Q175 45 165 45 L145 45 L135 55 L138 45 Q120 45 120 35 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Swipe arrow */}
            <path d="M150 100 Q165 90 180 100" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M175 95 L180 100 L175 105" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Star */}
            <path d="M50 140 L55 128 L60 140 L73 135 L62 143 L67 156 L55 148 L43 156 L48 143 L37 135 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Phone outline */}
            <rect x="160" y="130" width="22" height="38" rx="4" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="171" cy="163" r="2" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#overit-doodles)" />
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
          href="/media-entertainment"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#3dd9d9] active:scale-[0.98]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Media & Entertainment
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Illustration */}
          <div className="flex items-center justify-center rounded-2xl bg-white p-8">
            <svg viewBox="0 0 300 280" fill="none" className="h-full w-full max-w-md">
              {/* Phone frame */}
              <rect x="90" y="20" width="120" height="200" rx="16" fill="#2a3142" />
              <rect x="96" y="30" width="108" height="180" rx="10" fill="#1a1f2e" />

              {/* Screen - profile card */}
              <rect x="100" y="38" width="100" height="120" rx="8" fill="#fbd5c8" opacity="0.8" />
              {/* Profile photo placeholder */}
              <ellipse cx="150" cy="75" rx="28" ry="25" fill="#3dd9d9" opacity="0.4" />
              <ellipse cx="150" cy="65" rx="18" ry="16" fill="#fbd5c8" />
              <path d="M122 90 Q130 78 150 75 Q170 78 178 90 L178 105 Q150 115 122 105 Z" fill="#3dd9d9" opacity="0.5" />

              {/* Name & info */}
              <rect x="108" y="115" width="60" height="6" rx="3" fill="#2a3142" opacity="0.6" />
              <rect x="115" y="125" width="45" height="4" rx="2" fill="#2a3142" opacity="0.3" />

              {/* AI suggestion bubble */}
              <rect x="103" y="135" width="94" height="16" rx="8" fill="#3dd9d9" opacity="0.2" />
              <rect x="110" y="139" width="70" height="3" rx="1.5" fill="#3dd9d9" opacity="0.6" />
              <rect x="110" y="144" width="50" height="3" rx="1.5" fill="#3dd9d9" opacity="0.4" />

              {/* Swipe buttons */}
              <circle cx="125" cy="175" r="16" fill="#ff6b6b" opacity="0.2" />
              <path d="M119 169 L131 181 M131 169 L119 181" stroke="#ff6b6b" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="175" cy="175" r="16" fill="#3dd9d9" opacity="0.2" />
              <path d="M168 175 Q173 169 178 175 Q183 181 175 185 Q169 181 168 175" fill="#3dd9d9" opacity="0.7" />

              {/* Home indicator */}
              <rect x="135" y="212" width="30" height="3" rx="1.5" fill="#3dd9d9" opacity="0.4" />

              {/* Floating hearts */}
              <path d="M40 80 Q37 74 32 74 Q26 74 26 80 Q26 87 40 95 Q54 87 54 80 Q54 74 48 74 Q43 74 40 80" fill="#3dd9d9" opacity="0.3" />
              <path d="M248 60 Q246 55 242 55 Q238 55 238 60 Q238 66 248 72 Q258 66 258 60 Q258 55 254 55 Q250 55 248 60" fill="#ff9f43" opacity="0.3" />
              <path d="M260 130 Q258 126 255 126 Q252 126 252 130 Q252 134 260 138 Q268 134 268 130 Q268 126 265 126 Q262 126 260 130" fill="#3dd9d9" opacity="0.4" />

              {/* Stars */}
              <path d="M55 140 L57 134 L59 140 L65 138 L60 142 L62 148 L57 144 L52 148 L54 142 L49 138 Z" fill="#3dd9d9" opacity="0.3" />
              <path d="M240 170 L242 165 L244 170 L249 168 L245 172 L247 177 L242 173 L237 177 L239 172 L235 168 Z" fill="#ff9f43" opacity="0.3" />
            </svg>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {agent.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-[#3dd9d9]">{agent.title}</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-300">{agent.description}</p>

            {/* Stack */}
            {agent.stack && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white">Stack</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {agent.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#3dd9d9]/30 bg-[#3dd9d9]/10 px-3 py-1 text-xs font-medium text-[#3dd9d9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* What it does */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">What it does</h2>
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

            {/* Architecture */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white">Architecture</h2>
              <p className="mt-3 rounded-lg border border-zinc-700 bg-zinc-800/30 px-4 py-3 font-mono text-sm text-zinc-200">
                {agent.architecture}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              {isLive ? (
                <a
                  href={agent.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#3dd9d9] px-6 py-3 text-sm font-semibold text-[#1a1f2e] transition-all hover:bg-[#2bc4c4] hover:shadow-lg hover:shadow-[#3dd9d9]/25 active:scale-[0.98]"
                >
                  Launch Demo
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 text-sm text-zinc-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500"></span>
                  Demo deploying
                </span>
              )}
              {agent.github && (
                <a
                  href={agent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#3dd9d9] hover:text-[#3dd9d9] active:scale-[0.98]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
