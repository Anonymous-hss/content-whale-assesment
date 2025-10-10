"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "@/app/components/Container";
import { NAV_ITEMS } from "@/app/components/nav";

/**
 * Header
 * - Sticky 72px header with subtle bg/blur/shadow on scroll
 * - Desktop: logo + full nav + "Rank on AI" pill + gradient CTA
 * - Mobile: logo (left) + gradient "Contact us" CTA (right) — NO hamburger
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-head"
          : "bg-transparent"
      }`}
    >
      <Container className="h-[72px] flex items-center">
        <div className="flex w-full items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center flex-shrink-0"
          >
            <Image
              src="/logo.svg"
              alt="Content Whale"
              width={110}
              height={32}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          {/* Note: nav becomes flex at md and above; it now takes available space,
              can wrap on narrower md/tablet widths, and centers items so layout
              doesn't overflow */}
          <nav className="hidden md:flex items-center gap-7 md:flex-1 md:justify-center md:flex-wrap">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-1 text-[14px] leading-none text-ink-700 hover:text-ink-900 transition-colors whitespace-nowrap min-w-0"
              >
                {item.label}
                {item.hasMenu && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-y-[1px]"
                  >
                    <path
                      d="M2.25 4.5L6 8.25 9.75 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            ))}

            {/* "Rank On AI" + NEW badge */}
            {/* Keep original styling but move the large left padding to only large screens */}
            <div className="flex items-center gap-2 text-[14px] font-medium text-[#ff9a44] lg:pl-90">
              <span>Rank On AI</span>
              <span className="bg-accent-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                NEW
              </span>
            </div>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#42175B] to-[#8C31C1] px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition"
            >
              Let’s Talk
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </nav>

          {/* Mobile CTA only (no hamburger) */}
          <Link
            href="#contact"
            className="md:hidden inline-flex items-center rounded-full bg-gradient-to-r from-[#42175B] to-[#8C31C1] px-4 py-2 text-sm font-semibold text-white shadow-card hover:opacity-90 transition"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </header>
  );
}
