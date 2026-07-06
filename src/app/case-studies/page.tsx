import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

// Featured JENDAYA hero collage
const JD_CASE_IMG_1 = "/jendaya-case-study-1.png";
const JD_CASE_IMG_2 = "/jendaya-case-study-2.png";
const JD_CASE_IMG_3 = "/jendaya-case-study-3.png";
const JD_CASE_IMG_4 = "/jendaya-case-study-4.png";

// All Case Studies list thumbnail collage
const JD_LOGO = "/jendaya-logo.png";

const caseStudies = [
  {
    title: 'The \u201cMessy Middle\u201d of Compliance Intelligence',
    subtitle: "centiTMF",
    category: "Healthcare AI",
    categoryColor: "#ba9eff",
    desc: "How an autonomous Clinical Trial Master File agent bridges the gap between raw document volumes and inspection-ready compliance state \u2014 eliminating the most manual and error-prone phase of trial documentation.",
    href: "/agents/centi-tmf/case-study",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJgL9FBgxR48lG3FIlyR0mmV6NhFG53aPziF0Sjf5lEMOZaiCGz3yUhTYAmfGvEQDp7Tb57fMB1WAEUV248tXY-Ez34dnIMh4VPANnNBdaVzXAfOYr1jfEQZ5vS1amnY7qz84ZPoOgdEqgsOLwf3d_uPPNM-RaesECkFXkagVH-k6xerxfoSzpHw3kZYoPkieI7HyNwPHkx-xgSi-bd8GmyEaEzDNu2qqX8LLhmzZD8rc4P2AmCvrFpPmRVZ-OVjuBA6Bm9HLJYndA",
    tags: ["Compliance", "NLP", "FDA 21 CFR", "Clinical Trials"],
    stats: [{ label: "Document Categories", value: "0\u2013100" }, { label: "Inspection Ready", value: "100%" }],
    external: false,
  },
  {
    title: "Building Live Event Infrastructure for Paris Fashion Week",
    subtitle: "JENDAYA",
    category: "Media & Entertainment",
    categoryColor: "#34b5fa",
    desc: "How a two-sided iOS platform, talent navigation and an operations console, kept Paris Fashion Week talent and coordinators in sync in real time, with production fixes made live during the event.",
    href: "https://apps.apple.com/us/app/jendaya/id6773907783",
    images: [JD_LOGO, JD_CASE_IMG_1, JD_CASE_IMG_2, JD_CASE_IMG_3],
    tags: ["Fashion Tech", "Real-Time Systems", "iOS"],
    stats: [{ label: "Active Users", value: "100+" }, { label: "Deployment", value: "Live" }],
    external: true,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0e0e12] overflow-x-hidden" style={BODY_FONT}>
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

      <main className="pt-24 min-h-screen flex flex-col">
        {/* ── Featured Case Study Hero: JENDAYA ───────────────────────────────── */}
        <section className="bg-[#131317] py-32 flex-1 relative overflow-hidden flex items-center">
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left: content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f1f25] border border-[#48474c]/30 text-[#34b5fa] text-xs mb-6" style={NAV_FONT}>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l.39 1.572a9 9 0 01-8.19 6.938V18m0 0v-3.75m0 3.75h3.75m-3.75 0H8.25" />
                  </svg>
                  Case Study · Media &amp; Entertainment
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={NAV_FONT}>
                  <span className="text-white">It Has to Work.</span> <br />
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)" }}>
                    It Can&apos;t Break IRL.
                  </span>
                </h2>

                <p className="text-[#acaab0] text-lg leading-relaxed mb-10 max-w-xl" style={BODY_FONT}>
                  How I built a two-way OS for a London creative agency during Paris Fashion Week. Two connected systems, a talent app and an operations console, kept in sync in real time during one of the most demanding weeks in fashion. Deployed live at Paris Fashion Week Menswear SS27, with production fixes shipped mid-event.
                </p>

                <div className="grid grid-cols-3 gap-8 mb-12">
                  <div>
                    <h4 className="text-white font-bold text-3xl mb-1" style={NAV_FONT}>100+</h4>
                    <p className="text-sm text-[#76757a] uppercase tracking-wider" style={NAV_FONT}>Active Users</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-3xl mb-1" style={NAV_FONT}>2-Sided</h4>
                    <p className="text-sm text-[#76757a] uppercase tracking-wider" style={NAV_FONT}>Real-Time Sync</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-3xl mb-1" style={NAV_FONT}>Live</h4>
                    <p className="text-sm text-[#76757a] uppercase tracking-wider" style={NAV_FONT}>Deployed at PFW SS27</p>
                  </div>
                </div>

                <Link
                  href="/agents/jendaya/case-study"
                  className="inline-block py-4 px-10 rounded-2xl font-bold text-[#2b006e] hover:shadow-[0_0_30px_rgba(186,158,255,0.3)] hover:-translate-y-0.5 transition-all active:scale-95"
                  style={{ background: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)", ...NAV_FONT }}
                >
                  Read Case Study
                </Link>
              </div>

              {/* Right: rotated image collage */}
              <div className="flex-1 grid grid-cols-2 gap-4 max-w-md w-full">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(-2deg)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={JD_CASE_IMG_1} alt="JENDAYA case study screen 1" className="w-full object-cover aspect-square hover:scale-110 transition-transform duration-500 opacity-80" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(3deg)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={JD_CASE_IMG_3} alt="JENDAYA case study screen 3" className="w-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-500 opacity-80" />
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(1deg)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={JD_CASE_IMG_2} alt="JENDAYA case study screen 2" className="w-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-500 opacity-80" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#48474c]/20 bg-[#1f1f25]" style={{ transform: "rotate(-4deg)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={JD_CASE_IMG_4} alt="JENDAYA case study screen 4" className="w-full object-cover aspect-square hover:scale-110 transition-transform duration-500 opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── More Case Studies ─────────────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-8 w-full">
          <h2 className="text-3xl font-bold text-[#fcf8fe] mb-12" style={NAV_FONT}>All Case Studies</h2>
          <div className="space-y-12">
            {caseStudies.map((cs, i) => {
              const cardClassName = "group block relative overflow-hidden rounded-xl bg-[#131317] border border-[#48474c]/15 hover:border-[#ba9eff]/30 transition-all duration-500 shadow-2xl";
              const cardContent = (
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${cs.images ? "md:h-[590px]" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 overflow-hidden ${cs.images ? "md:h-full" : "md:h-auto"} ${i % 2 === 1 ? "md:order-last" : ""}`}>
                    {cs.images ? (
                      <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-0.5">
                        {cs.images.map((img) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={img}
                            src={img}
                            alt={cs.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          />
                        ))}
                      </div>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className={`absolute inset-0 ${i % 2 === 0 ? "bg-gradient-to-r from-transparent to-[#131317]" : "bg-gradient-to-l from-transparent to-[#131317]"}`} />
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col justify-center">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 w-fit"
                      style={{ backgroundColor: `${cs.categoryColor}15`, color: cs.categoryColor, border: `1px solid ${cs.categoryColor}30`, ...NAV_FONT }}
                    >
                      {cs.category}
                    </span>
                    <h2 className="text-2xl font-bold text-[#fcf8fe] mb-2 group-hover:text-[#ba9eff] transition-colors" style={NAV_FONT}>
                      {cs.title}
                    </h2>
                    <p className="text-sm text-[#76757a] mb-4" style={NAV_FONT}>{cs.subtitle}</p>
                    <p className="text-[#acaab0] leading-relaxed text-sm mb-6" style={BODY_FONT}>{cs.desc}</p>

                    <div className="flex gap-8 mb-6">
                      {cs.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-2xl font-extrabold text-[#fcf8fe]" style={NAV_FONT}>{stat.value}</p>
                          <p className="text-xs text-[#76757a]" style={BODY_FONT}>{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-[#1f1f25] text-[#acaab0] text-[10px] font-medium" style={NAV_FONT}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );

              return cs.external ? (
                <a key={cs.href} href={cs.href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
                  {cardContent}
                </a>
              ) : (
                <Link key={cs.href} href={cs.href} className={cardClassName}>
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="px-8 py-32 max-w-5xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold text-[#fcf8fe] mb-8" style={NAV_FONT}>
            Ready for your next{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)" }}>
              Deployment?
            </span>
          </h2>
          <p className="text-[#acaab0] mb-12 text-lg" style={BODY_FONT}>
            We are currently accepting high-priority consulting engagements.
          </p>
          <Link
            href="/projects#contact"
            className="inline-block bg-white text-black font-bold py-4 px-10 rounded-2xl hover:bg-[#ba9eff] hover:text-[#2b006e] transition-all hover:-translate-y-0.5 shadow-xl active:scale-95"
            style={NAV_FONT}
          >
            Start a Conversation
          </Link>
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
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2026 Tech Aviator Labs</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
