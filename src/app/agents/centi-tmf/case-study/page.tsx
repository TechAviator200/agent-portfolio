import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import type { Metadata } from "next";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

export const metadata: Metadata = {
  title: "centiTMF Case Study — Tech Aviator Labs",
  description:
    "How I designed a compliance intelligence system for clinical trials — and every hard architectural decision that shaped it.",
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
        <div className="max-w-3xl mx-auto px-6">

          {/* Breadcrumb */}
          <div className="pt-10 pb-2">
            <Link
              href="/agents/centi-tmf"
              className="inline-flex items-center gap-2 text-sm text-[#acaab0] transition-colors hover:text-[#ba9eff]"
              style={NAV_FONT}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to centiTMF
            </Link>
          </div>

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ba9eff] mb-5" style={NAV_FONT}>
              Case Study · Healthcare AI
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter text-[#fcf8fe] mb-6" style={NAV_FONT}>
              I built a compliance intelligence system for clinical trials. Here&apos;s every hard decision I made.
            </h1>
            <p className="text-lg text-[#acaab0] leading-relaxed max-w-2xl mb-6" style={BODY_FONT}>
              centiTMF helps clinical teams know if they&apos;re inspection-ready before the auditors show up. Building it meant figuring out where AI should make decisions, where humans should, and what happens when the LLM confidently gets it wrong.
            </p>
            <p className="text-xs text-[#76757a]" style={NAV_FONT}>Written by Max</p>
          </section>

          {/* ── The Problem ──────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>The problem</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              Clinical trials run on paperwork. Nobody knows if it&apos;s complete until it&apos;s too late.
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-4" style={BODY_FONT}>
              Every clinical trial produces a Trial Master File: hundreds of documents across multiple sites that must be complete, consistent, and audit-ready at all times. In practice, compliance teams spend hours manually checking whether documents are filed, current, and correctly categorized. They usually find the gaps when an inspector is already asking questions.
            </p>
            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              The question I started with was simple: could an AI system continuously answer &ldquo;if regulators reviewed this study tomorrow, where would we be exposed?&rdquo;
            </p>
          </section>

          {/* ── What Broke First ─────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>What broke first</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              The LLM couldn&apos;t explain itself. In compliance, that&apos;s a dealbreaker.
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              My first instinct was to let the LLM do the heavy lifting: read the documents, assess compliance, generate risk flags. It worked impressively in demos. It failed in the ways that matter.
            </p>

            {/* Failure callout */}
            <div className="border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl px-6 py-5 mb-6">
              <p className="text-sm font-bold text-amber-400 mb-2" style={NAV_FONT}>The failure</p>
              <p className="text-[#acaab0] leading-relaxed text-sm" style={BODY_FONT}>
                The model would flag a site as non-compliant but couldn&apos;t trace the flag back to a specific rule or a specific missing document. When I asked &ldquo;why did you flag this?&rdquo;, the answer was a plausible-sounding paragraph that was sometimes wrong. In a compliance context, an unexplainable flag is worse than no flag at all. It creates false urgency, erodes trust, and can&apos;t survive an auditor asking &ldquo;show me how you determined this.&rdquo;
              </p>
            </div>

            <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              This changed my entire architecture. I stopped asking &ldquo;what can the LLM do?&rdquo; and started asking &ldquo;where does explainability matter more than intelligence?&rdquo;
            </p>
          </section>

          {/* ── Three Trust Tiers ────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Key decision</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              I split the system into three trust tiers.
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
              Instead of one AI system doing everything, I designed three layers with different levels of autonomy based on how much explainability each function requires.
            </p>

            <div className="flex flex-col gap-2">
              {/* Deterministic */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border border-green-800/50 bg-green-900/10 px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-green-400 sm:w-44 flex-shrink-0" style={NAV_FONT}>
                  Deterministic
                </span>
                <span className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                  Rule engine evaluates structured facts against named rules. Every flag traces to a specific condition. No LLM involved.
                </span>
              </div>
              {/* Human-in-the-loop */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border border-[#34b5fa]/30 bg-[#34b5fa]/5 px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#34b5fa] sm:w-44 flex-shrink-0" style={NAV_FONT}>
                  Human-in-the-loop
                </span>
                <span className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                  AI classifies documents automatically, but users can override before filing. Override is logged for audit trail.
                </span>
              </div>
              {/* LLM-assisted */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border border-[#ba9eff]/30 bg-[#ba9eff]/5 px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ba9eff] sm:w-44 flex-shrink-0" style={NAV_FONT}>
                  LLM-assisted
                </span>
                <span className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                  GPT-4o generates narrative summaries and answers bounded audit questions. It reads the facts; it doesn&apos;t create them.
                </span>
              </div>
            </div>

            <p className="mt-6 text-[#acaab0] leading-relaxed" style={BODY_FONT}>
              The principle: the higher the compliance stakes, the less the LLM is allowed to decide. It can summarize and explain, but the underlying judgments are deterministic and traceable.
            </p>
          </section>

          {/* ── Audit Q&A Tradeoff ───────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Hardest call</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              Audit Q&amp;A: free generation vs. grounded answers
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              The most useful feature in centiTMF is the ability to ask natural-language questions about a study&apos;s compliance status. &ldquo;Are we ready for an inspection at Site 012?&rdquo; &ldquo;What&apos;s our biggest exposure right now?&rdquo; Building this meant choosing between two approaches.
            </p>

            <div className="rounded-xl border border-[#48474c]/30 bg-[#131317] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-2" style={NAV_FONT}>The trade-off</p>
              <h3 className="text-base font-bold text-[#fcf8fe] mb-5" style={NAV_FONT}>How should the AI answer audit questions?</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-lg border border-red-900/50 bg-red-900/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2" style={NAV_FONT}>Rejected</p>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                    <strong className="text-[#fcf8fe]">Free LLM generation</strong><br />
                    Let the model reason over raw documents and generate answers directly. More flexible, more natural. But impossible to verify and prone to hallucinating compliance status.
                  </p>
                </div>
                <div className="rounded-lg border border-green-900/50 bg-green-900/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2" style={NAV_FONT}>Chosen</p>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                    <strong className="text-[#fcf8fe]">Grounded answers</strong><br />
                    LLM reads from the structured fact model, compliance flags, and deviation signals. It can synthesize and narrate, but every claim maps back to a named data point.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1f1f25]">
                <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                  <strong className="text-[#fcf8fe]">Why:</strong> A compliance team can&apos;t use an answer they can&apos;t defend. If an auditor asks &ldquo;how did you determine Site 012 is at risk?&rdquo;, the answer needs to trace back to specific flags and specific rules, not a language model&apos;s interpretation of a PDF. Bounding the LLM&apos;s input to structured data means the answers are as reliable as the fact model, and the fact model is deterministic.
                </p>
              </div>
            </div>
          </section>

          {/* ── Classification Tradeoff ──────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Key decision</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              Classification: automate it, but let humans override it.
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-6" style={BODY_FONT}>
              When a document is uploaded, the system classifies it automatically (consent form, monitoring report, 1572, delegation log, etc.). Early on I had to decide: should classification be fully automated, or should there be a human check?
            </p>

            <div className="rounded-xl border border-[#48474c]/30 bg-[#131317] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-2" style={NAV_FONT}>The trade-off</p>
              <h3 className="text-base font-bold text-[#fcf8fe] mb-5" style={NAV_FONT}>Should document classification be fully automatic?</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-lg border border-red-900/50 bg-red-900/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2" style={NAV_FONT}>Rejected</p>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                    <strong className="text-[#fcf8fe]">Fully automatic</strong><br />
                    Faster ingestion, less manual work. But a misclassified document silently corrupts the compliance model downstream. One wrong label means a missing artifact that isn&apos;t actually missing.
                  </p>
                </div>
                <div className="rounded-lg border border-green-900/50 bg-green-900/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2" style={NAV_FONT}>Chosen</p>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                    <strong className="text-[#fcf8fe]">Auto-classify + manual override</strong><br />
                    AI classifies with a confidence score. Users review and can override before filing. The original AI classification is preserved as metadata, so you can audit the AI&apos;s accuracy over time.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1f1f25]">
                <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>
                  <strong className="text-[#fcf8fe]">Why:</strong> Classification errors compound. A misclassified document means the completeness engine thinks something is missing when it isn&apos;t, or worse, thinks something is present when it&apos;s not. The override mechanism costs a few seconds of human time per document but prevents cascading errors in the compliance model. Preserving the AI&apos;s original guess as <code className="font-mono text-[#ba9eff] text-xs bg-[#1f1f25] px-1.5 py-0.5 rounded">detected_artifact_type</code> creates a feedback loop for improving classification accuracy over time.
                </p>
              </div>
            </div>
          </section>

          {/* ── What I Built ─────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>What I built</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-5 leading-snug" style={NAV_FONT}>
              The system in its final form
            </h2>
            <p className="text-[#acaab0] leading-relaxed mb-8" style={BODY_FONT}>
              centiTMF processes uploaded trial documents through a layered pipeline: classify, extract, structure into a fact model, evaluate against compliance rules, score risk, and surface results through a dashboard and natural-language audit interface.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: "0–100", desc: "Inspection readiness score with explainable penalty breakdown per site" },
                { metric: "10", desc: "Data-driven compliance rules evaluated against structured facts" },
                { metric: "100%", desc: "Every flag traceable to a named rule and a named fact" },
              ].map(({ metric, desc }) => (
                <div key={metric} className="rounded-xl border border-[#48474c]/30 bg-[#131317] p-5">
                  <p className="text-4xl font-extrabold text-[#ba9eff] mb-2" style={NAV_FONT}>{metric}</p>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Retrospective ────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Retrospective</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-6 leading-snug" style={NAV_FONT}>
              What I&apos;d do differently
            </h2>

            <div className="divide-y divide-[#1f1f25]">
              {[
                {
                  title: "Start with the fact model, not the LLM",
                  body: "I spent early cycles trying to get the LLM to reason about compliance directly. If I started over, I'd build the structured fact model first and only add LLM capabilities once the deterministic layer was solid. The foundation matters more than the intelligence layer.",
                },
                {
                  title: "Build the override audit trail from day one",
                  body: "The classification override feature was a later addition. In hindsight, any system where humans correct AI outputs should have the audit trail designed in from the start, not bolted on. The data it generates — where the AI is wrong, how often, on which document types — is some of the most valuable data in the system.",
                },
                {
                  title: "Test with messier data earlier",
                  body: "The demo seed data is clean and well-structured. Real TMF documents are inconsistent, mislabeled, and sometimes contradictory. I'd pressure-test the classification and extraction pipeline with uglier data sooner to find the edge cases that matter.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="py-5">
                  <h4 className="text-sm font-semibold text-[#fcf8fe] mb-2" style={NAV_FONT}>{title}</h4>
                  <p className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Tech Stack ───────────────────────────────────────────────── */}
          <section className="py-14 border-b border-[#1f1f25]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#76757a] mb-3" style={NAV_FONT}>Tech stack</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#fcf8fe] mb-6 leading-snug" style={NAV_FONT}>
              How it&apos;s built
            </h2>

            <dl className="space-y-3 mb-10">
              {[
                { label: "Backend", value: "FastAPI, Python 3.11, SQLAlchemy 2.0 (async), Pydantic v2" },
                { label: "Frontend", value: "Next.js 14, TypeScript, Tailwind CSS (App Router)" },
                { label: "Database", value: "PostgreSQL 16 + pgvector (Supabase in production)" },
                { label: "Storage", value: "Cloudflare R2 (production), MinIO (local dev)" },
                { label: "AI", value: "GPT-4o for narrative, OpenAI embeddings, deterministic fallbacks throughout" },
                { label: "Infra", value: "Docker Compose (local), Vercel + Render (production)" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-6">
                  <dt className="text-xs font-bold uppercase tracking-widest text-[#76757a] sm:w-28 flex-shrink-0 pt-0.5" style={NAV_FONT}>
                    {label}
                  </dt>
                  <dd className="text-sm text-[#acaab0] leading-relaxed" style={BODY_FONT}>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://centi-tmf-agent.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ba9eff] text-[#2b006e] px-6 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_24px_rgba(186,158,255,0.4)] transition-all active:scale-95"
                style={NAV_FONT}
              >
                Live app
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://github.com/TechAviator200/centiTMF-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#48474c] text-[#acaab0] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#ba9eff] hover:text-[#ba9eff] transition-all"
                style={NAV_FONT}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub repo
              </a>
            </div>
          </section>

          {/* Bottom nav */}
          <div className="pt-14 flex items-center justify-between">
            <Link
              href="/agents/centi-tmf"
              className="inline-flex items-center gap-2 text-sm text-[#acaab0] transition-colors hover:text-[#ba9eff]"
              style={NAV_FONT}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to centiTMF
            </Link>
            <Link href="/healthcare" className="text-sm text-[#acaab0] transition-colors hover:text-[#ba9eff]" style={NAV_FONT}>
              Healthcare projects →
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
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2025 Tech Aviator Labs. All rights reserved.</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
