import Link from "next/link";
import { getAgentsByCategory } from "@/lib/agents";

export default function Page() {
  const agents = getAgentsByCategory("healthcare");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1f2e]">
      {/* Background doodle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="healthcare-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Heart */}
            <path
              d="M30 25 Q25 18 18 25 Q10 35 30 50 Q50 35 42 25 Q35 18 30 25"
              stroke="#3dd9d9"
              strokeWidth="1"
              fill="none"
            />
            {/* Pulse line */}
            <path d="M150 30 L160 30 L165 20 L170 40 L175 30 L185 30" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Stethoscope */}
            <path d="M70 90 Q65 100 70 110 Q75 120 80 115" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="80" cy="118" r="5" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Pills */}
            <ellipse cx="160" cy="100" rx="6" ry="10" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M154 100 L166 100" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Clipboard */}
            <rect x="20" y="130" width="22" height="30" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="26" y="125" width="10" height="8" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <path d="M25 140 L37 140 M25 146 L35 146 M25 152 L37 152" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* DNA helix */}
            <path d="M140 140 Q150 145 140 150 Q130 155 140 160 Q150 165 140 170" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M145 140 Q135 145 145 150 Q155 155 145 160 Q135 165 145 170" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Cross */}
            <path d="M95 45 L95 65 M85 55 L105 55" stroke="#3dd9d9" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#healthcare-doodles)" />
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
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#3dd9d9] active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-white">Healthcare / </span>
            <span className="text-[#3dd9d9]">HealthTech</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Agents for clinical triage, interoperability, and structured healthcare workflows.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Link
              key={agent.slug}
              href={`/agents/${agent.slug}`}
              className="group flex flex-col"
            >
              {/* Card */}
              <div className="flex h-48 items-center justify-center rounded-2xl bg-white p-6 transition-all duration-200 ease-out group-hover:shadow-xl group-hover:shadow-[#3dd9d9]/10 group-hover:-translate-y-2">
                {/* Illustration */}
                <svg viewBox="0 0 200 160" fill="none" className="h-full w-full">
                  {/* Doctor figure */}
                  <ellipse cx="100" cy="50" rx="22" ry="20" fill="#fbd5c8" />
                  <ellipse cx="100" cy="35" rx="25" ry="18" fill="#1a3a4a" />
                  <path d="M78 45 Q85 30 100 25 Q115 30 122 45" fill="#1a3a4a" />

                  {/* Body with coat */}
                  <path d="M75 72 Q70 100 75 130 L125 130 Q130 100 125 72 Q100 80 75 72" fill="white" />
                  <path d="M75 72 L85 130" stroke="#e5e5e5" strokeWidth="1" />
                  <path d="M125 72 L115 130" stroke="#e5e5e5" strokeWidth="1" />

                  {/* Stethoscope */}
                  <path d="M90 75 Q85 90 90 100 Q95 110 100 105" stroke="#3dd9d9" strokeWidth="2" fill="none" />
                  <circle cx="100" cy="108" r="4" fill="#3dd9d9" />

                  {/* Arms */}
                  <path d="M75 80 Q55 95 45 110" stroke="#fbd5c8" strokeWidth="10" strokeLinecap="round" />
                  <path d="M125 80 Q145 95 155 105" stroke="#fbd5c8" strokeWidth="10" strokeLinecap="round" />

                  {/* Left hand with clipboard */}
                  <rect x="30" y="105" width="25" height="35" rx="2" fill="#2a3142" />
                  <rect x="33" y="110" width="19" height="25" fill="white" />
                  <rect x="36" y="115" width="13" height="2" fill="#ccc" />
                  <rect x="36" y="120" width="10" height="2" fill="#ccc" />
                  <rect x="36" y="125" width="13" height="2" fill="#ccc" />

                  {/* Health icons floating */}
                  {/* Heart with plus */}
                  <circle cx="160" cy="40" r="18" fill="#3dd9d9" opacity="0.15" />
                  <path d="M160 35 Q155 30 150 35 Q145 42 160 52 Q175 42 170 35 Q165 30 160 35" fill="#3dd9d9" opacity="0.6" />
                  <path d="M157 42 L163 42 M160 39 L160 45" stroke="white" strokeWidth="1.5" />

                  {/* Pulse line */}
                  <circle cx="45" cy="35" r="15" fill="#3dd9d9" opacity="0.15" />
                  <path d="M32 35 L40 35 L43 28 L47 42 L50 35 L58 35" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />

                  {/* Pills */}
                  <ellipse cx="170" cy="100" rx="8" ry="12" fill="#3dd9d9" opacity="0.4" />
                  <path d="M162 100 L178 100" stroke="white" strokeWidth="1" />
                </svg>
              </div>

              {/* Content below card */}
              <div className="mt-5">
                <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-[#3dd9d9]">
                  {agent.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-300">
                  {agent.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-zinc-300">Building a healthcare technology solution?</p>
          <Link
            href="/projects#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#3dd9d9] px-6 py-3 text-sm font-semibold text-[#1a1f2e] transition-all hover:bg-[#2bc4c4] hover:shadow-lg hover:shadow-[#3dd9d9]/25 active:scale-[0.98]"
          >
            Get in Touch
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
