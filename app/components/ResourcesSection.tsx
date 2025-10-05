"use client";
import React, { useEffect, useRef, useState } from "react";

type Card = {
  tone: "violet" | "amber" | "blue";
  title: React.ReactNode;
  desc: string;
};

const CARDS: Card[] = [
  {
    tone: "violet",
    title: (
      <>
        75% of our blogs rank
        <br /> on Google
      </>
    ),
    desc: "We adhere to Google’s E-E-A-T guidelines and always curate user-centric content, which helps us rank on Google, every time!",
  },
  {
    tone: "amber",
    title: (
      <>
        Case studies designed
        <br /> to celebrate success
      </>
    ),
    desc: "Easy-to-understand and thoughtfully designed case studies to understand the importance of content writing.",
  },
  {
    tone: "blue",
    title: (
      <>
        Content samples that
        <br /> our clients loved
      </>
    ),
    desc: "100+ content samples to go through, curated in different tonalities, styles, and voices, using various content writing practices.",
  },
];

export default function ResourcesSection() {
  /* --- mobile slider state --- */
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // Update active dot on scroll
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const handler = () => {
      const idx = Math.round(vp.scrollLeft / vp.clientWidth);
      setActive(Math.max(0, Math.min(CARDS.length - 1, idx)));
    };

    vp.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => vp.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (i: number) => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.scrollTo({ left: i * vp.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading (use the wording from your screenshot) */}
        <h2 className="text-center font-serif text-[34px] leading-tight text-[#2F2F2F] md:text-5xl">
          All of the resources
          <br className="block" /> we have
        </h2>

        {/* ---------- Mobile slider ---------- */}
        <div className="mt-10 md:hidden">
          <div
            ref={viewportRef}
            className="
              -mx-4 px-4
              flex overflow-x-auto snap-x snap-mandatory scroll-smooth
              gap-5
            "
            style={{ scrollPadding: "0 16px" }}
          >
            {CARDS.map((c, i) => (
              <div key={i} className="min-w-full snap-center">
                <Card tone={c.tone} title={c.title} desc={c.desc} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            {CARDS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === active ? "bg-[#42175B]" : "bg-[#D9D5E6]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------- Desktop grid (unchanged) ---------- */}
        <div className="mt-10 hidden md:mt-14 md:grid md:grid-cols-3 md:gap-5">
          {CARDS.map((c, i) => (
            <Card key={i} tone={c.tone} title={c.title} desc={c.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */
function Card({
  tone,
  title,
  desc,
}: {
  tone: "violet" | "amber" | "blue";
  title: React.ReactNode;
  desc: string;
}) {
  const toneCls: Record<
    typeof tone,
    { iconBg: string; icon: string; to: string; title: string }
  > = {
    violet: {
      iconBg: "bg-[#42175B]/10",
      icon: "text-[#42175B]",
      to: "#F6E7FF",
      title: "text-[#42175B]",
    },
    amber: {
      iconBg: "bg-[#FBBA18]/10",
      icon: "text-[#FBBA18]",
      to: "#FFF6DE",
      title: "text-[#E6A300]",
    },
    blue: {
      iconBg: "bg-[#3070E2]/10",
      icon: "text-[#3070E2]",
      to: "#EAF3FF",
      title: "text-[#3070E2]",
    },
  };

  const t = toneCls[tone];

  return (
    <article
      className={`
        rounded-[22px] border border-[#E7E7EF]
        bg-gradient-to-br from-white to-[${t.to}]
        p-7 md:p-9 shadow-[0_6px_18px_rgba(0,0,0,0.04)]
      `}
      style={{
        // small inline style to support dynamic gradient "to" color in tailwind
        backgroundImage: `linear-gradient(to bottom right, #ffffff, ${t.to})`,
      }}
    >
      {/* Icon */}
      <div
        className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[16px] ${t.iconBg}`}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className={t.icon}
        >
          <path
            d="M5 5h14M5 12h14M5 19h9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h3
        className={`font-serif text-[26px] leading-snug md:text-[28px] ${t.title}`}
      >
        {title}
      </h3>

      <p className="mt-4 text-[15px] leading-7 text-[#343434] opacity-90">
        {desc}
      </p>
    </article>
  );
}
