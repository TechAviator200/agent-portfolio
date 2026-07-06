import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import type { Metadata } from "next";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };
const ACCENT = "#ba9eff";

export const metadata: Metadata = {
  title: "JENDAYA Case Study — Tech Aviator Labs",
  description:
    "Led product strategy, technical delivery, and live production operations for JENDAYA during Paris Fashion Week.",
};

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: ACCENT }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm text-[#acaab0]" style={BODY_FONT}>{children}</span>
    </li>
  );
}

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter text-[#fcf8fe] mb-8" style={NAV_FONT}>
                Building Live Event Infrastructure for Paris Fashion Week
              </h1>

              <dl className="space-y-2 mb-8">
                {[
                  { label: "Client", value: "JENDAYA (London-based Creative Agency)" },
                  { label: "Industry", value: "Venture Studio (Talent Agency, Fashion Tech, and Entertainment)" },
                  { label: "Role", value: "Lead Product Engineer" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:gap-6">
                    <dt className="text-xs font-bold uppercase tracking-widest text-[#76757a] sm:w-24 flex-shrink-0 pt-0.5" style={NAV_FONT}>
                      {label}
                    </dt>
                    <dd className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="text-lg text-[#acaab0] leading-relaxed max-w-2xl mb-6" style={BODY_FONT}>
                Led product strategy, technical delivery, and live production operations for JENDAYA during Paris Fashion Week.
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

          {/* ── Overview ─────────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>Overview</h2>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Paris Fashion Week is one of the most operationally demanding events in the creative industry. Hundreds of talent, coordinators, managers, and agencies move between venues on constantly evolving schedules where even a small delay can ripple across an entire day&apos;s programming.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              JENDAYA, a London-based creative agency, partnered with TechAviatorLabs to design and build a mobile platform capable of supporting both the people attending Fashion Week and the operational teams coordinating it behind the scenes.
            </p>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              The project was delivered over an accelerated two-month timeline and deployed live during Paris Fashion Week Menswear SS27.
            </p>
          </section>

          {/* ── The Challenge ────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>The Challenge</h2>
            <p className="text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
              The engagement presented two distinct but interconnected problems.
            </p>

            <h3 className="text-lg font-bold text-[#fcf8fe] mb-3" style={NAV_FONT}>1. The Talent Experience</h3>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Talent needed a reliable mobile experience that allowed them to:
            </p>
            <ul className="space-y-3 mb-4">
              <CheckItem>View their schedules</CheckItem>
              <CheckItem>Navigate between shows</CheckItem>
              <CheckItem>Receive operational updates</CheckItem>
              <CheckItem>Access QR check-ins</CheckItem>
              <CheckItem>Submit content</CheckItem>
              <CheckItem>Manage invitations and Plus Ones</CheckItem>
            </ul>
            <p className="text-[#acaab0] leading-relaxed mb-10" style={BODY_FONT}>
              The platform needed to remain responsive despite changing schedules and varying network conditions across Paris.
            </p>

            <h3 className="text-lg font-bold text-[#fcf8fe] mb-3" style={NAV_FONT}>2. Agency Operations</h3>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Behind every successful Fashion Week activation is a large operational team. Coordinators, managers, and administrators needed visibility into:
            </p>
            <ul className="space-y-3 mb-4">
              <CheckItem>Event schedules</CheckItem>
              <CheckItem>Talent assignments</CheckItem>
              <CheckItem>Check-ins</CheckItem>
              <CheckItem>Content approvals</CheckItem>
              <CheckItem>Operational requests</CheckItem>
              <CheckItem>Day-of-event changes</CheckItem>
            </ul>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              Without a centralized operational layer, these workflows were spread across messaging apps, spreadsheets, and manual coordination.
            </p>
          </section>

          {/* ── Discovery ────────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>Discovery</h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              Before writing a single line of production code, TechAviatorLabs worked with the JENDAYA team to understand how Fashion Week actually operated. Rather than designing from assumptions, discovery sessions focused on identifying the highest-friction operational workflows.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Three themes consistently emerged:
            </p>
            <ul className="space-y-3 mb-6">
              <CheckItem>Schedule coordination across multiple venues</CheckItem>
              <CheckItem>Talent communication during rapidly changing events</CheckItem>
              <CheckItem>Operational visibility for coordinators and managers</CheckItem>
            </ul>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              Those findings became the foundation of the product roadmap.
            </p>
          </section>

          {/* ── Solution ─────────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>Solution</h2>
            <p className="text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
              TechAviatorLabs partnered with JENDAYA to design the JENDAYA iOS platform as two connected experiences.
            </p>

            <h3 className="text-lg font-bold text-[#fcf8fe] mb-3" style={NAV_FONT}>Talent Experience</h3>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              A native iOS application allowing talent to:
            </p>
            <ul className="space-y-3 mb-10">
              <CheckItem>View personalized schedules</CheckItem>
              <CheckItem>Navigate between events</CheckItem>
              <CheckItem>Check into venues using QR codes</CheckItem>
              <CheckItem>Upload event content</CheckItem>
              <CheckItem>Request Plus Ones</CheckItem>
              <CheckItem>Receive role-specific experiences</CheckItem>
            </ul>

            <h3 className="text-lg font-bold text-[#fcf8fe] mb-3" style={NAV_FONT}>Operations Console</h3>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              A business platform enabling operational teams to:
            </p>
            <ul className="space-y-3 mb-6">
              <CheckItem>Assign talent to events</CheckItem>
              <CheckItem>Manage coordinators</CheckItem>
              <CheckItem>Approve requests</CheckItem>
              <CheckItem>Moderate submitted content</CheckItem>
              <CheckItem>Monitor check-ins</CheckItem>
              <CheckItem>Coordinate live event logistics</CheckItem>
            </ul>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              The two systems remained synchronized so operational changes could immediately reflect in the talent experience.
            </p>
          </section>

          {/* ── Engineering Under Real Constraints ───────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>Engineering Under Real Constraints</h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              Unlike many enterprise engagements, development occurred while multiple stakeholders were traveling internationally. Engineering continued across multiple time zones while preparing for a fixed launch date that could not move.
            </p>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Additional constraints included:
            </p>
            <ul className="space-y-3 mb-6">
              <CheckItem>Limited local development infrastructure</CheckItem>
              <CheckItem>International travel</CheckItem>
              <CheckItem>App Store submission timelines</CheckItem>
              <CheckItem>French market availability</CheckItem>
              <CheckItem>Production deployment immediately before Fashion Week</CheckItem>
            </ul>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              These constraints required rapid decision making and continuous prioritization throughout development.
            </p>
          </section>

          {/* ── Tradeoffs ────────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-6 leading-snug" style={NAV_FONT}>Tradeoffs</h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              One of the most valuable lessons from this engagement was understanding the difference between software that works in development and software that survives live operations. Several tradeoffs shaped the project.
            </p>

            <div className="divide-y divide-[#1f1f25]">
              {[
                {
                  title: "Security Before Features",
                  body: "Rather than optimizing for feature count, security and role-based permissions were prioritized first. Operational users required different permissions than talent, making access control foundational to the platform.",
                },
                {
                  title: "Reliability Over Perfection",
                  body: "Some feature requests were intentionally deferred so the core operational workflows remained stable. The priority became ensuring that schedules loaded reliably, QR check-ins worked, and assignments remained accurate before expanding functionality.",
                },
                {
                  title: "Continuous Production Iteration",
                  body: "Fashion Week began only days after launch. Rather than treating launch as the finish line, engineering shifted into live operational support. Real user feedback immediately informed iterative improvements.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="py-5">
                  <h4 className="text-sm font-semibold text-[#fcf8fe] mb-2" style={NAV_FONT}>{title}</h4>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── What Broke, and How We Fixed It ──────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-6 leading-snug" style={NAV_FONT}>What Broke, and How We Fixed It</h2>
            <p className="text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
              Launching during a live international event meant production issues surfaced under real operating conditions. Instead of waiting for a future release cycle, issues were triaged and resolved throughout Fashion Week.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "QR Check-In Logic",
                  issue: "QR scanning occasionally associated users with the incorrect event during same-day schedules.",
                  resolution: "The check-in logic was refined to correctly resolve same-day event conflicts.",
                  result: "More accurate check-ins and reduced coordinator intervention.",
                },
                {
                  title: "Coordinator Operations",
                  issue: "Coordinators initially lacked visibility into assigned talent and event responsibilities.",
                  resolution: "Operational visibility was refined so each coordinator's dashboard reflected their actual scope of responsibility.",
                  result: "Coordinators gained a focused operational dashboard that reflected their real responsibilities.",
                },
                {
                  title: "French App Store Availability",
                  issue: "Late in deployment, the application encountered an App Store availability issue affecting France.",
                  resolution: "App Store configuration, regional availability, and compliance settings were reviewed and corrected before Fashion Week commenced.",
                  result: "The application became available for French users prior to launch.",
                },
              ].map(({ title, issue, resolution, result }) => (
                <div key={title} className="rounded-xl border border-[#48474c]/30 bg-[#131317] p-6">
                  <h3 className="text-base font-bold text-[#fcf8fe] mb-4" style={NAV_FONT}>{title}</h3>
                  <p className="text-sm text-[#acaab0] leading-relaxed mb-2" style={BODY_FONT}>
                    <strong className="text-[#fcf8fe]">Issue:</strong> {issue}
                  </p>
                  <p className="text-sm text-[#acaab0] leading-relaxed mb-2" style={BODY_FONT}>
                    <strong className="text-[#fcf8fe]">Resolution:</strong> {resolution}
                  </p>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                    <strong className="text-[#fcf8fe]">Result:</strong> {result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Results ──────────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>Results</h2>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              The platform launched successfully for Paris Fashion Week Menswear SS27. Outcomes included:
            </p>
            <ul className="space-y-3">
              <CheckItem>Successfully deployed to the Apple App Store</CheckItem>
              <CheckItem>Live production support during Fashion Week</CheckItem>
              <CheckItem>100+ active users onboarded</CheckItem>
              <CheckItem>Real-time coordination between talent and operational teams</CheckItem>
              <CheckItem>Continuous production improvements throughout the week</CheckItem>
              <CheckItem>Interest from additional agencies exploring similar operational platforms</CheckItem>
            </ul>
          </section>

          {/* ── Lessons Learned ──────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>Lessons Learned</h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              Building software for live events requires a fundamentally different mindset than building traditional enterprise applications.
            </p>

            <div className="bg-[#ba9eff]/10 border-l-4 border-[#ba9eff] p-6 rounded-r-xl mb-6">
              <p className="text-[#acaab0] leading-relaxed italic" style={BODY_FONT}>
                The success of the project wasn&apos;t measured by whether the app launched. It was measured by whether coordinators, managers, and talent could depend on it while standing outside a venue with no room for failure.
              </p>
            </div>

            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              The engagement reinforced a principle that continues to guide TechAviatorLabs: shipping software is only half the job. The other half is supporting it when real people depend on it.
            </p>
          </section>

          {/* ── Technology Stack ─────────────────────────────────────────── */}
          <section className="py-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>Technology Stack</h2>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              A modern iOS and web stack with real-time data sync, role-based access control, and QR-based check-in infrastructure, deployed through a continuous integration and App Store release pipeline.
            </p>
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
