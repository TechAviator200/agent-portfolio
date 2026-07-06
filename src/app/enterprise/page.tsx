import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { getAgentsByCategory } from "@/lib/agents";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

const ADINA_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBqpOSbH9jsUkqwNlKaivCCOygZS9Y7ZKQaDNLDc9YI2C9OsTF_fjP6Gn9yNNjLRDfwkNqVVJO5zTnmUztOdPfXgB1seALYfTxfw7RBf0patVdApYn17gS_GepJkOVtGcL8FgCDJYaQWuh5K1gajJvTxVoKxVUh2MzWjk2LVPmX4AFrbRRjmbKXuvDidOU-NuQOghHvnhGHbDauRLyzVsDuMSiQ-dat_MPMTvibUviTyZWscT7Hq7Hz17TnO2tokYJzB4QnXhtzNEo-";

export default function Page() {
  const agents = getAgentsByCategory("enterprise");
  const adina = agents.find((a) => a.slug === "adina-outreach");

  return (
    <div className="min-h-screen bg-[#0e0e12] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(52,181,250,0.08)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>TechAviatorLabs</Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <Link href="/projects" className="hover:text-white transition-colors">Products</Link>
            <Link href="/enterprise" className="text-[#34b5fa] border-b border-[#34b5fa]/50 pb-0.5">Enterprise</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/projects#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <MobileNav />
          <Link href="/projects#contact" className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95" style={NAV_FONT}>
            Start a Conversation
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
        {/* Hero */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white leading-none" style={NAV_FONT}>
              Enterprise
            </h1>
            <p className="text-xl text-[#acaab0] max-w-2xl leading-relaxed" style={BODY_FONT}>
              We build production-grade AI systems for enterprise workflows: outbound automation, knowledge management, and structured decision pipelines. Systems that operators can see into, not black boxes.
            </p>
          </div>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Adina Main Card — 8 cols */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-[#131317] border border-[#48474c]/10 shadow-2xl transition-all duration-500 hover:shadow-[#ba9eff]/5">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(186,158,255,0.05) 0%, rgba(52,181,250,0.05) 100%)" }} />
            <div className="p-8 md:p-12 relative flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#006591]/20 border border-[#34b5fa]/20 text-[#34b5fa] text-xs font-bold uppercase tracking-widest mb-6" style={NAV_FONT}>
                  AI Outbound System
                </div>
                <h2 className="text-4xl font-bold text-white mb-4" style={NAV_FONT}>
                  {adina?.title ?? "Adina Outreach Agent"}
                </h2>
                <p className="text-[#acaab0] mb-8 leading-relaxed" style={BODY_FONT}>
                  An AI system that handles lead research, context gathering, and personalized outreach drafting, then queues everything for human review. Built for sales teams that want to scale output without losing control of the message.
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {["AI SDR", "Outbound Automation", "Workflow", "Enterprise AI"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-[#1f1f25] border border-[#48474c]/20 text-[#acaab0] text-xs" style={NAV_FONT}>{tag}</span>
                  ))}
                </div>
                <Link
                  href={adina ? `/agents/${adina.slug}` : "/agents/adina-outreach"}
                  className="inline-flex items-center gap-3 py-4 px-8 rounded-xl font-bold text-[#2b006e] transition-transform active:scale-95 group/btn"
                  style={{ background: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)", ...NAV_FONT }}
                >
                  View System
                  <svg className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 aspect-square relative flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl blur-3xl opacity-20" style={{ background: "linear-gradient(135deg, #ba9eff 0%, #34b5fa 100%)" }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ADINA_IMAGE}
                  alt="Adina Outreach Agent"
                  className="w-full h-full object-cover rounded-2xl relative z-10 border border-[#48474c]/20"
                />
              </div>
            </div>
          </div>

          {/* Stats cards — 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex-1 p-8 rounded-2xl bg-[#1f1f25] border border-[#48474c]/10 flex flex-col justify-between">
              <svg className="h-10 w-10 text-[#34b5fa] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2" style={NAV_FONT}>Human in the Loop</h3>
                <p className="text-[#acaab0] text-sm leading-relaxed" style={BODY_FONT}>Every action is logged and reviewable. No automated sends without operator approval.</p>
              </div>
            </div>
            <div className="flex-1 p-8 rounded-2xl bg-[#1f1f25] border border-[#48474c]/10 flex flex-col justify-between">
              <svg className="h-10 w-10 text-[#ba9eff] mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2" style={NAV_FONT}>Auditable by Design</h3>
                <p className="text-[#acaab0] text-sm leading-relaxed" style={BODY_FONT}>Every decision the system makes is traceable. Operators see what ran, why, and what it produced.</p>
              </div>
            </div>
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
