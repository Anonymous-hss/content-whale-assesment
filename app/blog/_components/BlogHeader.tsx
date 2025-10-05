"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * BlogHeader
 * - Left: Logo
 * - Center: Nav (Modules ▾, Pricing, About, Resource ▾)
 * - Right: CTAs ("Sign up now", "Request Callback")
 * - Mobile: Logo + hamburger; slide-down panel with nav + CTAs
 *
 * Notes:
 * - The logo uses an inline SVG to avoid asset coupling. Replace with <Image> if you have a file.
 * - Submenu chevrons are decorative (no dropdowns yet, just like the screenshot).
 * - Sticky + light shadow to match the clean blog aesthetic.
 */
export default function BlogHeader() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // subtle shadow after a tiny scroll (keeps it crisp on white/gradient hero)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll when mobile panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="text-[14.5px] text-[#1F2937] hover:text-[#0B5FE8] transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow ${
        isScrolled ? "shadow-[0_1px_0_0_rgba(15,23,42,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[66px] w-full max-w-7xl items-center justify-between px-4">
        {/* Left: Logo */}
        <Link
          href="/blog"
          aria-label="Go to blog homepage"
          className="flex items-center gap-2"
        >
          {/* Inline Suvit-like logo (replace with Image if you have the asset) */}
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#4F8EF9] to-[#2F62E8]">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="currentColor"
            >
              <rect x="4" y="4" width="7" height="7" rx="1.5" />
              <rect x="13" y="4" width="7" height="7" rx="1.5" opacity=".85" />
              <rect x="4" y="13" width="7" height="7" rx="1.5" opacity=".85" />
            </svg>
          </span>
          <span className="text-[18px] font-semibold tracking-tight text-[#0F172A]">
            SUVIT
          </span>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <button className="group inline-flex items-center gap-1 text-[14.5px] text-[#1F2937] hover:text-[#0B5FE8]">
            Modules
            <ChevronDown />
          </button>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">About</NavLink>
          <button className="group inline-flex items-center gap-1 text-[14.5px] text-[#1F2937] hover:text-[#0B5FE8]">
            Resource
            <ChevronDown />
          </button>
        </nav>

        {/* Right: CTAs (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#signup"
            className="inline-flex items-center rounded-md bg-[#2563EB] px-4 py-2 text-[13.5px] font-semibold text-white hover:bg-[#1E54C9] transition-colors"
          >
            Sign up now
          </Link>
          <Link
            href="#callback"
            className="inline-flex items-center rounded-md border border-[#CFE0FF] bg-white px-4 py-2 text-[13.5px] font-semibold text-[#1E3A8A] hover:border-[#AFCBFF] transition-colors"
          >
            Request Callback
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 md:hidden"
          onClick={() => setOpen(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-[#0F172A]"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile slide-down panel */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close"
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="absolute inset-x-0 top-[66px] z-50 rounded-b-2xl border-t border-gray-100 bg-white shadow-xl">
            <div className="px-4 py-4">
              <nav className="grid gap-3">
                <button className="flex items-center justify-between rounded-md px-2 py-2 text-[15px] text-[#111827] hover:bg-gray-50">
                  <span>Modules</span>
                  <ChevronDown />
                </button>
                <NavLink href="#">Pricing</NavLink>
                <NavLink href="#">About</NavLink>
                <button className="flex items-center justify-between rounded-md px-2 py-2 text-[15px] text-[#111827] hover:bg-gray-50">
                  <span>Resource</span>
                  <ChevronDown />
                </button>
              </nav>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="#signup"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#2563EB] px-4 py-2.5 text-[14px] font-semibold text-white hover:bg-[#1E54C9] transition-colors"
                >
                  Sign up now
                </Link>
                <Link
                  href="#callback"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-md border border-[#CFE0FF] bg-white px-4 py-2.5 text-[14px] font-semibold text-[#1E3A8A] hover:border-[#AFCBFF] transition-colors"
                >
                  Request Callback
                </Link>
              </div>

              <div className="mt-3 flex justify-center">
                <button
                  aria-label="Close menu"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-[13px] text-gray-600 hover:text-gray-800"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      className="text-current opacity-70"
      aria-hidden="true"
    >
      <path
        d="M2.25 4.5L6 8.25 9.75 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
