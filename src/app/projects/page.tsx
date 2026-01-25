"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const projects = [
  {
    title: "Media & Entertainment",
    href: "/media-entertainment",
    illustration: (
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
        <path d="M152 75 L175 75 M152 80 L170 80 M152 85 L165 85" stroke="#2a3142" strokeWidth="1" />

        {/* Diamond */}
        <path d="M25 90 L35 80 L45 90 L35 105 Z" fill="#3dd9d9" opacity="0.4" />

        {/* Controller */}
        <rect x="150" y="110" width="30" height="18" rx="8" fill="#2a3142" />
        <circle cx="157" cy="119" r="3" fill="#3dd9d9" opacity="0.5" />
        <circle cx="173" cy="119" r="3" fill="#3dd9d9" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Enterprise",
    href: "/enterprise",
    illustration: (
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
    ),
  },
  {
    title: "Healthcare",
    href: "/healthcare",
    illustration: (
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

        {/* Chat bubble */}
        <path d="M140 130 Q140 120 155 120 L175 120 Q185 120 185 130 L185 145 Q185 155 175 155 L155 155 L145 165 L148 155 Q140 155 140 145 Z" fill="#3dd9d9" opacity="0.2" />
        <rect x="148" y="130" width="30" height="2" fill="#3dd9d9" opacity="0.5" />
        <rect x="148" y="136" width="25" height="2" fill="#3dd9d9" opacity="0.5" />
        <rect x="148" y="142" width="20" height="2" fill="#3dd9d9" opacity="0.5" />
      </svg>
    ),
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
    <div className="relative min-h-screen overflow-hidden bg-[#1a1f2e]">
      {/* Background doodle pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="project-doodles"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Lightbulb */}
            <circle cx="30" cy="30" r="8" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M26 40 L34 40 M27 43 L33 43" stroke="#3dd9d9" strokeWidth="1" />
            {/* Envelope */}
            <rect x="150" y="20" width="24" height="16" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M150 20 L162 30 L174 20" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Clock */}
            <circle cx="80" cy="100" r="12" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M80 100 L80 92 M80 100 L86 100" stroke="#3dd9d9" strokeWidth="1" />
            {/* Calculator */}
            <rect x="160" y="100" width="20" height="28" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <rect x="164" y="104" width="12" height="6" stroke="#3dd9d9" strokeWidth="0.5" fill="none" />
            {/* Coffee cup */}
            <path d="M20 150 L20 170 Q20 178 30 178 L40 178 Q50 178 50 170 L50 150 Z" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M50 155 Q60 155 60 162 Q60 170 50 170" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Arrow */}
            <path d="M100 170 Q120 160 140 170" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            <path d="M135 165 L140 170 L135 175" stroke="#3dd9d9" strokeWidth="1" fill="none" />
            {/* Music note */}
            <path d="M170 160 Q165 160 165 155 Q165 150 170 150 L170 140 Q178 137 178 143" stroke="#3dd9d9" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#project-doodles)" />
      </svg>

      <main className="relative z-10 mx-auto max-w-6xl px-8 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Projects Section */}
        <section className="mb-24">
          <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-white">My Recent </span>
            <span className="text-[#3dd9d9]">Projects</span>
          </h1>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="group flex flex-col items-center"
              >
                {/* Card with illustration */}
                <div className="mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-4 transition-all duration-200 ease-out group-hover:shadow-xl group-hover:shadow-[#3dd9d9]/10 group-hover:-translate-y-2">
                  <div className="h-40 w-40">
                    {project.illustration}
                  </div>
                </div>

                {/* Title below card */}
                <h2 className="text-center text-lg font-semibold text-zinc-200 transition-colors group-hover:text-[#3dd9d9]">
                  {project.title}
                </h2>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Left side - Heading and illustration */}
            <div className="lg:w-2/5">
              <h2 className="mb-8 text-4xl font-bold leading-tight">
                <span className="text-white">Got a project in</span>
                <br />
                <span className="text-[#3dd9d9]">mind?</span>
              </h2>

              {/* Person climbing chart illustration */}
              <svg
                className="h-64 w-64"
                viewBox="0 0 250 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bar chart */}
                <rect x="60" y="200" width="40" height="60" fill="#e8e8e8" />
                <rect x="110" y="150" width="40" height="110" rx="2" fill="#3dd9d9" opacity="0.6" />
                <rect x="160" y="80" width="40" height="180" rx="2" fill="#3dd9d9" />

                {/* Person climbing */}
                {/* Head */}
                <ellipse cx="95" cy="130" rx="18" ry="16" fill="#fbd5c8" />
                <ellipse cx="95" cy="118" rx="20" ry="14" fill="#3dd9d9" />
                <path d="M75 125 Q85 110 95 105 Q105 110 115 125" fill="#3dd9d9" />

                {/* Body */}
                <path d="M80 148 Q75 170 80 190 L110 190 Q115 170 110 148 Q95 155 80 148" fill="white" />

                {/* Arms */}
                <path d="M78 155 Q60 165 55 180" stroke="#fbd5c8" strokeWidth="8" strokeLinecap="round" />
                <path d="M112 155 Q130 150 140 145" stroke="#fbd5c8" strokeWidth="8" strokeLinecap="round" />

                {/* Legs */}
                <path d="M85 190 Q70 210 65 240" stroke="#3dd9d9" strokeWidth="14" strokeLinecap="round" />
                <path d="M105 190 Q120 210 130 230" stroke="#3dd9d9" strokeWidth="14" strokeLinecap="round" />

                {/* Shoes */}
                <ellipse cx="65" cy="245" rx="12" ry="5" fill="white" />
                <ellipse cx="130" cy="235" rx="12" ry="5" fill="white" />

                {/* Tablet/phone in hand */}
                <rect x="135" y="138" width="15" height="20" rx="2" fill="#2a3142" />
                <rect x="137" y="140" width="11" height="15" fill="#3dd9d9" opacity="0.3" />
              </svg>
            </div>

            {/* Right side - Contact form */}
            <div className="lg:w-1/2">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-zinc-300"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-[#3dd9d9] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-zinc-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-[#3dd9d9] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-zinc-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-[#3dd9d9] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                    status === "success"
                      ? "bg-green-500 text-white"
                      : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#3dd9d9] text-[#1a1f2e] hover:bg-[#2bc4c4] hover:shadow-lg hover:shadow-[#3dd9d9]/25"
                  } disabled:opacity-70 active:scale-[0.98]`}
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
        </section>
      </main>
    </div>
  );
}
