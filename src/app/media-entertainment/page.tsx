import Link from "next/link";
import { getAgentsByCategory } from "@/lib/agents";

export default function Page() {
  const agents = getAgentsByCategory("media-entertainment");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1f2e]">
      {/* Background doodle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="media-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Music notes */}
            <path
              d="M20 30 Q25 25 25 35 M25 35 L25 20 M25 20 Q30 18 30 22"
              stroke="#3dd9d9"
              strokeWidth="1"
              fill="none"
            />
            {/* VR headset */}
            <rect x="150" y="25" width="30" height="12" rx="6" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="158" cy="31" r="3" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <circle cx="172" cy="31" r="3" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Ticket */}
            <rect x="60" y="80" width="35" height="20" rx="2" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="60" cy="90" r="4" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <circle cx="95" cy="90" r="4" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Diamond */}
            <path d="M170 100 L180 90 L190 100 L180 115 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Controller */}
            <rect x="30" y="150" width="30" height="18" rx="8" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <circle cx="40" cy="159" r="2" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="159" r="2" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Monitor */}
            <rect x="140" y="150" width="40" height="30" rx="2" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="155" y="180" width="10" height="8" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#media-doodles)" />
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
            <span className="text-white">Media & </span>
            <span className="text-[#3dd9d9]">Entertainment</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Agents built for creative workflows, content strategy, and entertainment tooling.
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
                  {/* Person with VR headset */}
                  <rect x="70" y="90" width="60" height="50" rx="4" fill="#2a3142" />
                  <rect x="75" y="95" width="50" height="35" rx="2" fill="#3dd9d9" opacity="0.3" />

                  {/* Person */}
                  <ellipse cx="100" cy="55" rx="20" ry="18" fill="#fbd5c8" />
                  <ellipse cx="100" cy="42" rx="22" ry="15" fill="#3dd9d9" />
                  <rect x="80" y="50" width="40" height="8" rx="4" fill="#2a3142" />
                  <circle cx="88" cy="54" r="3" fill="#3dd9d9" opacity="0.5" />
                  <circle cx="112" cy="54" r="3" fill="#3dd9d9" opacity="0.5" />

                  {/* Body */}
                  <path d="M85 75 Q80 95 85 115 L115 115 Q120 95 115 75 Q100 80 85 75" fill="white" />

                  {/* Music notes */}
                  <path d="M30 40 Q35 35 35 45 M35 45 L35 25 Q42 22 42 28" stroke="#3dd9d9" strokeWidth="2" fill="none" />
                  <path d="M160 30 Q165 25 165 35 M165 35 L165 20 Q172 17 172 23" stroke="#3dd9d9" strokeWidth="2" fill="none" />

                  {/* Ticket */}
                  <rect x="145" y="70" width="35" height="20" rx="2" fill="#3dd9d9" opacity="0.3" />
                  <circle cx="145" cy="80" r="4" fill="white" />
                  <circle cx="180" cy="80" r="4" fill="white" />

                  {/* Diamond */}
                  <path d="M25 90 L35 80 L45 90 L35 105 Z" fill="#3dd9d9" opacity="0.4" />
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
          <p className="mb-4 text-zinc-300">Interested in building a media agent?</p>
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
