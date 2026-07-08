import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import type { Metadata } from "next";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

export const metadata: Metadata = {
  title: "JENDAYA Case Study — Tech Aviator Labs",
  description:
    "How we built a two-way OS for a London creative agency during Paris Fashion Week — and every hard decision that shaped it.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>TechAviatorLabs</Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/case-studies" className="text-[#ba9eff] border-b border-[#ba9eff]/50 pb-0.5">Case Studies</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <MobileNav />
          <Link href="/projects#contact" className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95" style={NAV_FONT}>
            Start a Conversation
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* Breadcrumb */}
          <div className="pt-10 pb-2">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-[#acaab0] transition-colors hover:text-[#ba9eff]"
              style={NAV_FONT}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>
          </div>

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ba9eff] mb-5" style={NAV_FONT}>
                Case Study · Media &amp; Entertainment
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter text-[#fcf8fe] mb-6" style={NAV_FONT}>
                It Has to Work. It Can&apos;t Break IRL.
              </h1>

              <p className="text-lg text-[#acaab0] leading-relaxed max-w-2xl mb-6" style={BODY_FONT}>
                How we built a two-way OS for a London creative agency during Paris Fashion Week.
              </p>
              <p className="text-xs text-[#76757a]" style={NAV_FONT}>Written by Max</p>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(-2deg)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/jendaya-case-study-1.png" alt="JENDAYA case study screen 1" className="w-full object-cover aspect-square" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(2deg)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/jendaya-case-study-3.png" alt="JENDAYA case study screen 3" className="w-full object-cover aspect-[4/5]" />
                </div>
              </div>
              <div className="pt-10 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(2deg)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/jendaya-case-study-2.png" alt="JENDAYA case study screen 2" className="w-full object-cover aspect-[4/5]" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(-2deg)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/jendaya-case-study-4.png" alt="JENDAYA case study screen 4" className="w-full object-cover aspect-square" />
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-3xl mx-auto">

          {/* ── The Problem ───────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>The problem</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              Talent needed to move fast. The team behind them needed to see everything.
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              JENDAYA, a London-based creative agency, came to TechAviatorLabs with a challenge specific to Paris Fashion Week Menswear SS27, but familiar to anyone who&apos;s run a large live event.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Their talent needed a reliable way to check schedules, navigate between shows, check in at venues, and submit content, often on unreliable networks, mid-city, between events that could shift with no warning.
            </p>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              Behind them, coordinators and managers needed visibility into all of it: who was assigned where, what had been approved, what was changing day-of. Before this project, that visibility lived across messaging apps, spreadsheets, and manual coordination. At Fashion Week scale, that&apos;s not an inconvenience, it&apos;s where things start to break.
            </p>
          </section>

          {/* ── What We Built ──────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>What we built</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              Two connected experiences, one shared view
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              We built the JENDAYA platform as two connected experiences, kept in sync in real time so an operational change on one side showed up instantly on the other.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              <strong className="text-[#fcf8fe]">The Talent Experience</strong> is a native iOS app that gives talent their personalized schedule, event navigation, QR check-in, content upload, Plus One requests, and role-specific access, everything they need to move through Fashion Week without missing a beat.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
              <strong className="text-[#fcf8fe]">The Operations Console</strong> is the platform behind the scenes, where coordinators assign talent to events, manage teams, approve requests, moderate content, and coordinate the logistics of a live international event in real time.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: "100+", desc: "Active users onboarded during Fashion Week" },
                { metric: "2-sided", desc: "Talent app and operations console, kept in real-time sync" },
                { metric: "Live", desc: "Deployed during Paris Fashion Week Menswear SS27" },
              ].map(({ metric, desc }) => (
                <div key={metric} className="rounded-xl border border-[#48474c]/30 bg-[#131317] p-5">
                  <p className="text-4xl font-extrabold text-[#ba9eff] mb-2" style={NAV_FONT}>{metric}</p>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── How We Approached It ─────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>How we approached it</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              No room for a second attempt
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Fashion Week has no &ldquo;we&apos;ll fix it next sprint.&rdquo; The launch date couldn&apos;t move, and the event itself started days after the app went live. That meant every decision, what to build, what to defer, what to protect, had to be made with real people standing outside real venues in mind.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              We prioritized reliability over feature count. The workflows that mattered most (schedules, check-ins, and assignments) were built to be rock-solid before anything else was added. Talent-facing extras that would have been nice to have got deferred so the core operational spine stayed steady.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              We designed for two very different audiences on one platform. Talent and agency staff needed access to very different things, and getting that right from day one, instead of retrofitting it later, was foundational.
            </p>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              We planned for live production support, not just launch. From the moment the app went live, our team stayed on to support JENDAYA through Fashion Week itself, watching how the system held up under real usage and iterating as needed.
            </p>
          </section>

          {/* ── The Result ───────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>The result</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              It held up when real people depended on it
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              The JENDAYA platform launched successfully on the Apple App Store and served over 100 active users during Paris Fashion Week Menswear SS27. Coordinators had a single operational view of a week they used to run out of group chats and spreadsheets. Talent had a reliable app in their pocket for one of the most fast-moving weeks in fashion.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
              More importantly, the platform did what it was built to do: it held up when real people depended on it, in a city they didn&apos;t live in, at an event that couldn&apos;t wait.
            </p>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              Check out the{" "}
              <a
                href="https://apps.apple.com/us/app/jendaya/id6773907783"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ba9eff] underline hover:text-[#34b5fa] transition-colors"
              >
                app
              </a>
              {" "}for yourself.
            </p>
          </section>

          {/* ── Engineering Breakdown (collapsible) ─────────── */}
          <section className="py-14">
            <details className="group">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4 rounded-xl border border-[#48474c]/30 bg-[#131317] px-6 py-5 hover:border-[#ba9eff]/40 transition-colors">
                <div>
                  <p className="text-base font-bold text-[#fcf8fe]" style={NAV_FONT}>Engineering Breakdown</p>
                  <p className="text-sm text-[#acaab0] mt-1" style={BODY_FONT}>
                    Click for the technical decisions, tradeoffs, and production fixes behind the build.
                  </p>
                </div>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-[#ba9eff] transition-transform group-open:rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>

              <div className="mt-10 divide-y divide-[#1f1f25]">

                {/* What broke first */}
                <div className="pb-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>What broke first</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
                    QR check-ins started resolving to the wrong event. There&apos;s no next sprint to fix it in.
                  </h3>
                  <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
                    Within days of launch, QR scanning began occasionally associating talent with the wrong event when two events fell on the same day. Here, it was someone standing outside a venue who couldn&apos;t get in.
                  </p>

                  <div className="border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl px-6 py-5 mb-6">
                    <p className="text-sm font-bold text-amber-400 mb-2" style={NAV_FONT}>The fix</p>
                    <p className="text-[#acaab0] leading-relaxed text-sm" style={BODY_FONT}>
                      There was no waiting for a future release cycle. The check-in logic was refined and shipped mid-week, live, while Fashion Week was running.
                    </p>
                  </div>

                  <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                    That single incident set the tone for the rest of the engagement: launch wasn&apos;t the finish line, it was the start of an ongoing production support job.
                  </p>
                </div>

                {/* Key Decision: Access Control */}
                <div className="py-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Key decision</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
                    Should access control be built in from day one, or layered in once core features shipped?
                  </h3>

                  <div className="rounded-xl border border-[#48474c]/30 bg-[#0e0e12] p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-2" style={NAV_FONT}>The trade-off</p>
                    <h4 className="text-base font-bold text-[#fcf8fe] mb-5" style={NAV_FONT}>Should access control ship on day one, or come later?</h4>

                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                      <div className="rounded-lg border border-red-900/50 bg-red-900/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2" style={NAV_FONT}>Rejected</p>
                        <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                          <strong className="text-[#fcf8fe]">Ship features first, add permissions later</strong><br />
                          Faster to demo, faster to get in front of the client. But access control retrofitted after the fact tends to leave gaps exactly where the stakes are highest, and talent data and operational data were sitting on the same platform.
                        </p>
                      </div>
                      <div className="rounded-lg border border-green-900/50 bg-green-900/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2" style={NAV_FONT}>Chosen</p>
                        <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                          <strong className="text-[#fcf8fe]">Role-based permissions from day one</strong><br />
                          Operational users and talent had explicitly different access from the first build, not a later patch.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1f1f25]">
                      <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                        <strong className="text-[#fcf8fe]">Why:</strong> Two very different audiences, talent and agency staff, were touching the same platform. Getting access control wrong here wasn&apos;t a UX bug. It was a real exposure risk on a live international event with the agency&apos;s own operations running through it.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Decision: Social Features */}
                <div className="py-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Key decision</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
                    Should talent-facing social features ship with v1, or get cut for launch?
                  </h3>

                  <div className="rounded-xl border border-[#48474c]/30 bg-[#0e0e12] p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-2" style={NAV_FONT}>The trade-off</p>
                    <h4 className="text-base font-bold text-[#fcf8fe] mb-5" style={NAV_FONT}>Should v1 include talent-facing social features?</h4>

                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                      <div className="rounded-lg border border-red-900/50 bg-red-900/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2" style={NAV_FONT}>Rejected</p>
                        <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                          <strong className="text-[#fcf8fe]">Ship a fuller v1</strong><br />
                          Include talent-facing social features alongside the core scheduling and check-in tools, for a more complete first release.
                        </p>
                      </div>
                      <div className="rounded-lg border border-green-900/50 bg-green-900/10 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2" style={NAV_FONT}>Chosen</p>
                        <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                          <strong className="text-[#fcf8fe]">Defer social features. Protect the operational core.</strong><br />
                          Engineering time stayed focused on the workflows carrying the most operational risk: schedules, check-ins, and assignments.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1f1f25]">
                      <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                        <strong className="text-[#fcf8fe]">Why:</strong> A missed notification is an annoyance. A broken check-in strands someone outside a venue. Under a fixed, unmovable launch date, the operationally critical path mattered more than a richer feature set, so the richer feature set waited.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What Else Broke */}
                <div className="py-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>In production</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fcf8fe] mb-6 leading-snug" style={NAV_FONT}>
                    What else broke, and how it got fixed
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Coordinator Operations",
                        issue: "Coordinators initially lacked clear visibility into their own assigned talent and responsibilities.",
                        fix: "Operational visibility was refined so each coordinator's dashboard reflected their actual scope.",
                        result: "A focused dashboard that matched what coordinators were actually responsible for.",
                      },
                      {
                        title: "French App Store Availability",
                        issue: "Late in deployment, the app hit an App Store availability issue affecting France, days before a France-based launch.",
                        fix: "App Store configuration, regional availability, and compliance settings were corrected before Fashion Week began.",
                        result: "Available to French users before doors opened.",
                      },
                    ].map(({ title, issue, fix, result }) => (
                      <div key={title} className="rounded-xl border border-[#48474c]/30 bg-[#0e0e12] p-6">
                        <h4 className="text-base font-bold text-[#fcf8fe] mb-4" style={NAV_FONT}>{title}</h4>
                        <p className="text-sm text-[#acaab0] leading-relaxed mb-2" style={BODY_FONT}>
                          <strong className="text-[#fcf8fe]">Issue:</strong> {issue}
                        </p>
                        <p className="text-sm text-[#acaab0] leading-relaxed mb-2" style={BODY_FONT}>
                          <strong className="text-[#fcf8fe]">Fix:</strong> {fix}
                        </p>
                        <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                          <strong className="text-[#fcf8fe]">Result:</strong> {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Retrospective */}
                <div className="py-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Retrospective</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fcf8fe] mb-6 leading-snug" style={NAV_FONT}>
                    What we&apos;d do differently
                  </h3>

                  <div className="divide-y divide-[#1f1f25]">
                    {[
                      {
                        title: "Plan for live production support from day one, not as a contingency.",
                        body: "This wasn't a normal post-launch bug cycle. Fashion Week started days after launch, which meant triage had to happen in real time, in production, with no buffer. We'd build that expectation, and the on-call capacity for it, into the plan from the start next time, instead of discovering it under pressure.",
                      },
                      {
                        title: "Treat access control as v1 scope, always.",
                        body: "This one held up. Building permissions in from day one instead of retrofitting them was the right call, and it's the one decision we wouldn't revisit even under more time pressure.",
                      },
                      {
                        title: "Respect the \u201cboring\u201d operational workflows. They're the real product.",
                        body: "The talent app is what people see and screenshot. The operations console is what actually determined whether the week ran smoothly. We'd protect coordinator tooling even more aggressively next time, since that's where a breakdown compounds fastest.",
                      },
                    ].map(({ title, body }) => (
                      <div key={title} className="py-5">
                        <h4 className="text-sm font-semibold text-[#fcf8fe] mb-2" style={NAV_FONT}>{title}</h4>
                        <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-14">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Tech stack</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fcf8fe] mb-6 leading-snug" style={NAV_FONT}>
                    How it&apos;s built
                  </h3>

                  <dl className="space-y-3">
                    {[
                      { label: "Frontend", value: "Next.js, React" },
                      { label: "Native iOS", value: "Swift, Xcode, Capacitor (for shared web-based flows alongside native UI)" },
                      { label: "Database", value: "Managed real-time database with a relational data model" },
                      { label: "Access & Check-In", value: "Role-Based Access Control (RBAC), QR Code Infrastructure" },
                      { label: "CI/CD & Distribution", value: "Continuous integration pipeline with automated App Store delivery" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col sm:flex-row sm:gap-6">
                        <dt className="text-xs font-bold uppercase tracking-widest text-[#76757a] sm:w-40 flex-shrink-0 pt-0.5" style={NAV_FONT}>
                          {label}
                        </dt>
                        <dd className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

              </div>
            </details>
          </section>

          </div>

          {/* Bottom nav */}
          <div className="pt-14 flex items-center justify-between">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-[#acaab0] transition-colors hover:text-[#ba9eff]"
              style={NAV_FONT}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>
            <Link href="/media-entertainment" className="text-sm text-[#acaab0] transition-colors hover:text-[#ba9eff]" style={NAV_FONT}>
              Media &amp; Entertainment projects →
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
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2026 Tech Aviator Labs</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
