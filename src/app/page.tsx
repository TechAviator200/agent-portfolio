import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

const HERO_VIDEO = "/techaviatorlabs-hero.mp4";
const HERO_POSTER = "/techaviatorlabs-hero-poster.jpg";
const MEDIA_IMAGE = "/radioboy-hero.png";
const ENTERPRISE_IMAGE = "/enterprise-hero.png";
const HEALTHCARE_IMAGE = "/healthcare-hero.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>
            TechAviatorLabs
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#acaab0] hover:text-white transition-colors text-sm" style={NAV_FONT}>
                Products
                <svg className="h-3 w-3 ml-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-left z-50">
                <div className="bg-[#131317]/95 border border-[#48474c]/20 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                  <Link href="/media-entertainment" className="block px-4 py-3 rounded-lg text-sm text-[#acaab0] hover:text-white hover:bg-[#ba9eff]/10 transition-colors" style={NAV_FONT}>Media &amp; Entertainment</Link>
                  <Link href="/enterprise" className="block px-4 py-3 rounded-lg text-sm text-[#acaab0] hover:text-white hover:bg-[#34b5fa]/10 transition-colors" style={NAV_FONT}>Enterprise</Link>
                  <Link href="/healthcare" className="block px-4 py-3 rounded-lg text-sm text-[#acaab0] hover:text-white hover:bg-[#ba9eff]/10 transition-colors" style={NAV_FONT}>Healthcare &amp; Life Sciences</Link>
                </div>
              </div>
            </div>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <MobileNav />
          <Link
            href="/projects#contact"
            className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95"
            style={NAV_FONT}
          >
            Start a Conversation
          </Link>
        </div>
      </nav>

      <main>
        {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
        <section className="relative min-h-[calc(100vh-72px)] flex items-center pt-24 pb-20">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#ba9eff]/10 rounded-full blur-[140px]" />
          </div>

          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Left content */}
              <div className="md:col-span-6 space-y-8">
                <h1
                  className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white"
                  style={NAV_FONT}
                >
                  We Build{" "}
                  <span className="text-[#ba9eff]">AI Systems.</span>
                  {" "}From Concept to{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)" }}
                  >
                    Production.
                  </span>
                </h1>
                <p className="text-[#acaab0] text-lg md:text-xl max-w-xl leading-relaxed" style={BODY_FONT}>
                  We design the architecture, build the system, and ship it to production. Across healthcare, enterprise, and media. One team, end to end.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/projects"
                    className="px-8 py-4 rounded-xl font-bold text-[#2b006e] hover:shadow-[0_0_24px_rgba(186,158,255,0.4)] hover:-translate-y-0.5 transition-all active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)",
                      ...NAV_FONT,
                    }}
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/case-studies"
                    className="bg-[#1f1f25] border border-[#48474c]/30 px-8 py-4 rounded-xl font-bold text-[#ba9eff] hover:bg-[#25252b] hover:-translate-y-0.5 transition-all active:scale-95"
                    style={NAV_FONT}
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>

              {/* Right visual */}
              <div className="md:col-span-6 relative h-[500px]">
                <div className="absolute inset-0 bg-[#ba9eff]/10 rounded-full blur-[120px]" />
                <div className="relative z-10 h-full rounded-xl border border-[#48474c]/20 overflow-hidden shadow-2xl group"
                  style={{ background: "rgba(19, 19, 23, 0.6)", backdropFilter: "blur(20px)" }}>
                  <video
                    src={HERO_VIDEO}
                    poster={HERO_POSTER}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: TRUST BAR ─────────────────────────────────────────── */}
        <section className="py-12 border-t border-[#1f1f25]/50 bg-[#000000]/30">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-center text-[#acaab0] text-sm uppercase tracking-widest mb-10" style={NAV_FONT}>
              Built on
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 duration-500">
              {["OpenAI", "LangChain", "FastAPI", "Vercel", "Supabase", "AWS", "Docker"].map((tech) => (
                <span key={tech} className="text-xl font-bold text-[#fcf8fe]" style={NAV_FONT}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: HOW WE BUILD ──────────────────────────────────────── */}
        <section className="py-24 bg-[#000000]">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center text-[#fcf8fe] mb-16" style={NAV_FONT}>
              How We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-[33%] right-[33%] h-px bg-gradient-to-r from-transparent via-[#48474c]/30 to-transparent" />

              {[
                {
                  icon: (
                    <svg className="h-8 w-8 text-[#ba9eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  ),
                  title: "Scope the Problem",
                  desc: "We map your data sources, workflows, and constraints before writing a line of code.",
                  border: "#ba9eff",
                  shadow: "rgba(186,158,255,0.1)",
                },
                {
                  icon: (
                    <svg className="h-8 w-8 text-[#34b5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Build the System",
                  desc: "We write the code ourselves. RAG pipelines and agents reasoning where AI should make the call, deterministic logic where it shouldn't. Every decision the system makes can be traced back to why it made it.",
                  border: "#34b5fa",
                  shadow: "rgba(52,181,250,0.1)",
                },
                {
                  icon: (
                    <svg className="h-8 w-8 text-[#ba9eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Ship to Production",
                  desc: "We don't hand you a demo and walk away. We deploy it, watch how it holds up under real usage, and fix what breaks before it becomes your problem. That's the difference between a prototype and a system people can depend on.",
                  border: "#ba9eff",
                  shadow: "rgba(186,158,255,0.1)",
                },
              ].map((step) => (
                <div key={step.title} className="text-center z-10">
                  <div
                    className="w-16 h-16 bg-[#1f1f25] rounded-full flex items-center justify-center mx-auto mb-6 border"
                    style={{ borderColor: `${step.border}20`, boxShadow: `0 0 30px ${step.shadow}` }}
                  >
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-[#fcf8fe]" style={NAV_FONT}>{step.title}</h4>
                  <p className="text-[#acaab0] leading-relaxed px-4" style={BODY_FONT}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: VERTICALS ─────────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#fcf8fe] mb-16" style={NAV_FONT}>Built Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Media & Entertainment",
                hover: "#ba9eff",
                href: "/media-entertainment",
                image: MEDIA_IMAGE,
                desc: "Audio curation and real-time AI personalization.",
              },
              {
                label: "Enterprise",
                hover: "#34b5fa",
                href: "/enterprise",
                image: ENTERPRISE_IMAGE,
                desc: "Outbound automation and enterprise knowledge workflows.",
              },
              {
                label: "Healthcare & Life Sciences",
                hover: "#ba9eff",
                href: "/healthcare",
                image: HEALTHCARE_IMAGE,
                desc: "Clinical trial compliance and lab workflow automation.",
              },
            ].map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group relative overflow-hidden rounded-xl h-80 cursor-pointer border border-[#48474c]/10 block"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/40 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.image}
                  alt={v.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  style={{ backgroundColor: `${v.hover}20` }}
                />
                <div className="absolute bottom-0 left-0 p-8 z-30">
                  <h4 className="text-2xl font-bold mb-2 text-[#fcf8fe]" style={NAV_FONT}>{v.label}</h4>
                  <p className="text-sm text-[#acaab0] mb-4 opacity-0 group-hover:opacity-100 transition-opacity" style={BODY_FONT}>{v.desc}</p>
                  <span className="text-sm font-bold text-white flex items-center gap-2" style={NAV_FONT}>
                    Explore
                    <svg className="h-4 w-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: FINAL CTA ─────────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="bg-[#131317] rounded-xl p-12 md:p-20 text-center relative overflow-hidden border border-[#48474c]/10">
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(186,158,255,0.5), transparent)" }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#fcf8fe] mb-6 max-w-3xl mx-auto" style={NAV_FONT}>
                Have a problem that needs a real AI system behind it?
              </h2>
              <p className="text-[#acaab0] text-lg md:text-xl mb-12 max-w-xl mx-auto" style={BODY_FONT}>
                Bring the problem. We design, build, and ship the system — architecture to production.
              </p>
              <Link
                href="/projects#contact"
                className="inline-block px-12 py-5 rounded-full font-bold text-[#2b006e] text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(186,158,255,0.3)] transition-all active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)",
                  ...NAV_FONT,
                }}
              >
                Start a Conversation
              </Link>
            </div>
            {/* Ambient glow */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ba9eff]/20 rounded-full blur-[100px]" />
          </div>
        </section>
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
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2025 Tech Aviator Labs. All rights reserved.</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
