"use client";

import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };
const BODY_FONT = { fontFamily: "var(--font-manrope), Manrope, sans-serif" };

const verticals = [
  {
    label: "Media & Entertainment",
    labelColor: "text-[#ba9eff]",
    labelBg: "bg-[#ba9eff]/10",
    labelBorder: "border-[#ba9eff]/20",
    title: "Media & Entertainment",
    desc: "AI systems for audio curation, real-time personalization, and social connection. Built where latency and taste are the product.",
    href: "/media-entertainment",
    btnColor: "text-[#ba9eff]",
    btnBorder: "border-[#ba9eff]/20",
    btnHoverBg: "hover:bg-[#ba9eff]",
    btnHoverText: "hover:text-[#2b006e]",
    shadowColor: "hover:shadow-[0_0_80px_-12px_rgba(186,158,255,0.15)]",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjimpIVBy4vnhJOgwTUwsQf_p97YU6ck8Pooo6p89E3psjCw0KfgwsCOwW6FChVzmWLnSyy_2RgChFDjN4-jllUYdHfCaM3bDLwN1D6i6_P7G04qvImFKXayOj71Whi-QdDaHR0zaFZ2UJ3jykfcpFprk7ZI8LM0yYXtnQReTvb_8KNuwKUwaeuzQsj5uqYAbmuEDmIbOMxU2YBhattoPeSGeFikxiNTFZbrFXlU7aUVZS7FJgaQwdqiIZzitsv2D8e-U9OZoy-jen",
  },
  {
    label: "Enterprise",
    labelColor: "text-[#34b5fa]",
    labelBg: "bg-[#34b5fa]/10",
    labelBorder: "border-[#34b5fa]/20",
    title: "Enterprise",
    desc: "Production-grade AI systems for outbound automation, knowledge management, and structured enterprise workflows.",
    href: "/enterprise",
    btnColor: "text-[#34b5fa]",
    btnBorder: "border-[#34b5fa]/20",
    btnHoverBg: "hover:bg-[#34b5fa]",
    btnHoverText: "hover:text-[#003853]",
    shadowColor: "hover:shadow-[0_0_80px_-12px_rgba(52,181,250,0.15)]",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXvz13EilS9dfrXMM4FNrIyhTmJg2CD9IFS59caVUkVbtfF46zsF6CD19HyOTGcwNj5SHrOPw_NB-GRXRl5FlEfYzwMAahhKMVKtmF-uNw5DO5CGkWu2ab0iHJE7_jt7-aCzQBO4ZHJB3StfMU_tGRlJMls0x-xI3DSOk7lIn4CI5hcdrxB7VM3m8eOPFvm2I1c7KBVG-qTUuz4mRLoM6n6a8WgQyDzBagfEb9FVqKq5Zxf8hCTHBbMqwUyflcZDk3JbLGzKwhk0zc",
  },
  {
    label: "Healthcare & Life Sciences",
    labelColor: "text-[#ba9eff]",
    labelBg: "bg-[#ba9eff]/10",
    labelBorder: "border-[#ba9eff]/20",
    title: "Healthcare & Life Sciences",
    desc: "AI systems for clinical trial compliance, lab automation, and FHIR interoperability. Traceable outputs for regulated environments.",
    href: "/healthcare",
    btnColor: "text-[#ba9eff]",
    btnBorder: "border-[#ba9eff]/20",
    btnHoverBg: "hover:bg-[#ba9eff]",
    btnHoverText: "hover:text-[#2b006e]",
    shadowColor: "hover:shadow-[0_0_80px_-12px_rgba(186,158,255,0.15)]",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaXkC7okM_ABBkFm7XnDL5in0kKEaefaw7rHJSGj5N3MsAVmPf4t1tta54sA8-SAjtbgx6k2dG0lxCs63uXSvmNid3VrE4i4yLnrii9cvLxofZKYY-knbxjfU9AIa4Jhl0FpzOB9qVCuCeKP-SfTfRTh-tqOaxeoI_0vMHKG4ygqJeK4VOg9Wt-6hq7dmROp8lJhlsKTh_kEyHnXZemNpxLvvaG_7pey9nHfz9dabxUTfKrQf_G7lf4qbsUmDaV1XHrLRMJ-XooNlc",
  },
];

export default function ProjectsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <div className="min-h-screen bg-[#0e0e12] overflow-x-hidden" style={BODY_FONT}>
      {/* Nav */}
      <nav className="fixed top-0 w-full h-[72px] z-50 bg-[#0e0e12]/60 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(186,158,255,0.12)]">
        <div className="flex justify-between items-center px-8 w-full max-w-7xl mx-auto h-full">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white" style={NAV_FONT}>
            TechAviatorLabs
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#acaab0]">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white transition-colors" style={NAV_FONT}>
                Products
                <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#131317]/95 border border-[#48474c]/20 rounded-xl p-2 shadow-2xl backdrop-blur-md">
                  {[
                    { label: "Media & Entertainment", href: "/media-entertainment" },
                    { label: "Enterprise", href: "/enterprise" },
                    { label: "Healthcare & Life Sciences", href: "/healthcare" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-sm text-[#acaab0] hover:text-white hover:bg-[#ba9eff]/10 transition-colors"
                      style={NAV_FONT}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <MobileNav />
          <Link
            href="#contact"
            className="hidden md:inline-flex bg-[#ba9eff] text-[#2b006e] px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95"
            style={NAV_FONT}
          >
            Start a Conversation
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12">
        {/* Hero */}
        <div className="max-w-7xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-none mb-8" style={NAV_FONT}>
            Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9eff] to-[#34b5fa]">
              Solutions
            </span>
          </h1>
        </div>

        {/* Vertical Cards */}
        <div className="max-w-7xl mx-auto space-y-12 mb-32">
          {verticals.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className={`group relative overflow-hidden rounded-xl bg-[#131317] border-none shadow-[0_0_50px_-12px_rgba(186,158,255,0.05)] transition-all duration-500 ${v.shadowColor} block cursor-pointer`}
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e12] via-[#0e0e12]/80 to-transparent" />
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 md:p-16">
                <div className="md:col-span-8">
                  <span
                    className={`inline-block px-3 py-1 rounded-full ${v.labelBg} ${v.labelColor} text-[10px] tracking-widest uppercase mb-6 border ${v.labelBorder}`}
                    style={NAV_FONT}
                  >
                    {v.label}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight" style={NAV_FONT}>
                    {v.title}
                  </h2>
                  <p className="text-[#acaab0] text-lg md:text-xl leading-relaxed max-w-xl" style={BODY_FONT}>
                    {v.desc}
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <span
                    className={`flex items-center gap-3 bg-[#1f1f25] ${v.btnColor} px-8 py-4 rounded-xl font-bold border ${v.btnBorder} ${v.btnHoverBg} ${v.btnHoverText} transition-all duration-300`}
                    style={NAV_FONT}
                  >
                    Explore Solution
                    <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Key Capabilities */}
        <div className="max-w-7xl mx-auto mb-32">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4" style={NAV_FONT}>
            <span className="w-12 h-px bg-[#ba9eff]" />
            Key Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "hub", title: "Auditable Decisions", desc: "Every step in the system is traceable. Operators see what ran, what it decided, and why.", color: "#ba9eff" },
              { icon: "security", title: "Full Traceability", desc: "Compliance-ready output with complete decision logs. Built for regulated industries from day one.", color: "#34b5fa" },
              { icon: "speed", title: "Production Infrastructure", desc: "FastAPI backends, cloud-native deployment, and observability built in. Not a demo stack.", color: "#ba9eff" },
            ].map((cap) => (
              <div key={cap.title} className="p-8 rounded-xl bg-[#1f1f25] border-b-2" style={{ borderColor: `${cap.color}40` }}>
                <div className="w-10 h-10 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: `${cap.color}20`, color: cap.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h4 className="text-white text-xl font-bold mb-4" style={NAV_FONT}>{cap.title}</h4>
                <p className="text-[#acaab0] leading-relaxed" style={BODY_FONT}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section — preserved with EmailJS */}
        <section id="contact" className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-[#48474c]/20 bg-[#131317] p-10 md:p-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
              {/* Left */}
              <div className="lg:w-2/5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#34b5fa] mb-4" style={NAV_FONT}>
                  Start a Conversation
                </p>
                <h2 className="text-4xl font-extrabold leading-tight text-white mb-4" style={NAV_FONT}>
                  Got a project<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9eff] to-[#34b5fa]">in mind?</span>
                </h2>
                <p className="text-[#acaab0] leading-relaxed max-w-sm" style={BODY_FONT}>
                  Let&apos;s discuss your next agentic system, workflow automation, or AI product challenge.
                </p>
              </div>

              {/* Right — Contact form (EmailJS preserved) */}
              <div className="lg:w-1/2">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm text-[#acaab0]" style={NAV_FONT}>
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-full rounded-lg border border-[#48474c] bg-[#1f1f25] px-4 py-3 text-white placeholder-[#76757a] transition-colors focus:border-[#ba9eff] focus:outline-none"
                        style={BODY_FONT}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm text-[#acaab0]" style={NAV_FONT}>
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full rounded-lg border border-[#48474c] bg-[#1f1f25] px-4 py-3 text-white placeholder-[#76757a] transition-colors focus:border-[#ba9eff] focus:outline-none"
                        style={BODY_FONT}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-[#acaab0]" style={NAV_FONT}>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      className="w-full resize-none rounded-lg border border-[#48474c] bg-[#1f1f25] px-4 py-3 text-white placeholder-[#76757a] transition-colors focus:border-[#ba9eff] focus:outline-none"
                      style={BODY_FONT}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-70 ${
                      status === "success"
                        ? "bg-green-500 text-white"
                        : status === "error"
                        ? "bg-red-500 text-white"
                        : "bg-[#ba9eff] text-[#2b006e] hover:shadow-[0_0_20px_rgba(186,158,255,0.4)]"
                    }`}
                    style={NAV_FONT}
                  >
                    {status === "sending" && "Sending..."}
                    {status === "success" && "Message Sent!"}
                    {status === "error" && "Failed to Send"}
                    {status === "idle" && (
                      <>
                        Send Message
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#1f1f25] bg-[#0e0e12] mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
          <Link href="/" className="text-lg font-bold text-white" style={NAV_FONT}>TechAviatorLabs</Link>
          <div className="flex gap-8 text-xs text-[#acaab0]" style={NAV_FONT}>
            <Link href="#contact" className="hover:text-[#34b5fa] transition-colors">Contact</Link>
            <Link href="/case-studies" className="hover:text-[#34b5fa] transition-colors">Case Studies</Link>
            <Link href="/about" className="hover:text-[#34b5fa] transition-colors">About</Link>
          </div>
          <div className="text-xs text-[#acaab0] text-center md:text-right" style={NAV_FONT}><span>© 2025 Tech Aviator Labs. All rights reserved.</span><br /><span className="text-[#76757a]">Built by Max</span></div>
        </div>
      </footer>
    </div>
  );
}
