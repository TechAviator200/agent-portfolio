import Link from "next/link";
import { getAgentsByCategory } from "@/lib/agents";

export default function Page() {
  const agents = getAgentsByCategory("enterprise");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1f2e]">
      {/* Background doodle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="enterprise-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Chart bars */}
            <rect x="20" y="40" width="8" height="20" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="32" y="30" width="8" height="30" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="44" y="35" width="8" height="25" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Gear */}
            <circle cx="160" cy="40" r="12" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="160" cy="40" r="6" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Network nodes */}
            <circle cx="80" cy="100" r="6" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="110" cy="85" r="4" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <circle cx="110" cy="115" r="4" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <path d="M86 100 L106 87 M86 100 L106 113" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Document */}
            <rect x="150" y="100" width="25" height="32" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M155 110 L170 110 M155 118 L168 118 M155 126 L165 126" stroke="#3dd9d9" strokeWidth="0.5" />
            {/* Envelope */}
            <rect x="30" y="140" width="28" height="20" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M30 140 L44 152 L58 140" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Clock */}
            <circle cx="120" cy="170" r="14" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M120 170 L120 160 M120 170 L128 170" stroke="#3dd9d9" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#enterprise-doodles)" />
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
            <span className="text-[#3dd9d9]">Enterprise</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Agents for operations, outreach, workflow automation, and internal productivity.
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
                  {/* Central monitor */}
                  <rect x="70" y="50" width="60" height="45" rx="4" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                  <rect x="75" y="55" width="50" height="32" rx="2" fill="#e8f5f5" />
                  <rect x="80" y="60" width="15" height="8" fill="#3dd9d9" opacity="0.4" />
                  <rect x="80" y="70" width="40" height="2" fill="#ccc" />
                  <rect x="80" y="75" width="35" height="2" fill="#ccc" />
                  <rect x="95" y="95" width="10" height="12" fill="#ddd" />
                  <rect x="85" y="107" width="30" height="4" rx="1" fill="#ccc" />

                  {/* Left monitor */}
                  <rect x="15" y="65" width="45" height="35" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                  <rect x="19" y="69" width="37" height="24" rx="2" fill="#e8f5f5" />
                  <path d="M25 80 L32 75 L40 85 L48 72" stroke="#3dd9d9" strokeWidth="1.5" fill="none" />
                  <rect x="33" y="100" width="8" height="8" fill="#ddd" />

                  {/* Right monitor */}
                  <rect x="140" y="65" width="45" height="35" rx="3" fill="white" stroke="#e5e5e5" strokeWidth="1" />
                  <rect x="144" y="69" width="37" height="24" rx="2" fill="#e8f5f5" />
                  <rect x="150" y="74" width="8" height="14" fill="#3dd9d9" opacity="0.4" />
                  <rect x="161" y="78" width="8" height="10" fill="#ff9f43" opacity="0.4" />
                  <rect x="172" y="72" width="6" height="16" fill="#3dd9d9" opacity="0.6" />
                  <rect x="158" y="100" width="8" height="8" fill="#ddd" />

                  {/* Connection lines */}
                  <path d="M60 82 L70 82" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M130 82 L140 82" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M100 50 L100 35 L37 35 L37 65" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M100 50 L100 35 L162 35 L162 65" stroke="#3dd9d9" strokeWidth="1.5" strokeDasharray="3 2" />

                  {/* Small nodes */}
                  <circle cx="100" cy="35" r="4" fill="#3dd9d9" />
                  <circle cx="37" cy="35" r="3" fill="#3dd9d9" opacity="0.6" />
                  <circle cx="162" cy="35" r="3" fill="#3dd9d9" opacity="0.6" />

                  {/* Bottom elements */}
                  <rect x="30" y="130" width="25" height="18" rx="2" fill="#2a3142" />
                  <rect x="145" y="130" width="25" height="18" rx="2" fill="#2a3142" />
                  <path d="M55 139 L145 139" stroke="#3dd9d9" strokeWidth="1" strokeDasharray="4 3" />
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
          <p className="mb-4 text-zinc-300">Need an enterprise automation agent?</p>
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
