"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_FONT = { fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" };

const NAV_LINKS = [
  { label: "Products", href: "/projects" },
  { label: "Media & Entertainment", href: "/media-entertainment" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Healthcare & Life Sciences", href: "/healthcare" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/projects#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button — only visible on mobile */}
      <button
        onClick={() => setOpen(true)}
        className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-[#acaab0] hover:text-white hover:bg-[#1f1f25] transition-colors"
        aria-label="Open menu"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#0e0e12] border-l border-[#1f1f25] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#1f1f25]">
          <Link
            href="/"
            className="text-base font-bold text-white tracking-tighter"
            style={NAV_FONT}
            onClick={() => setOpen(false)}
          >
            TechAviatorLabs
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[#acaab0] hover:text-white hover:bg-[#1f1f25] transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm text-[#acaab0] hover:text-white hover:bg-[#1f1f25] transition-colors"
              style={NAV_FONT}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pt-2">
          <Link
            href="/projects#contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-[#ba9eff] text-[#2b006e] px-6 py-3 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(186,158,255,0.4)] transition-all active:scale-95"
            style={NAV_FONT}
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </>
  );
}
