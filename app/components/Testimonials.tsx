"use client";

import { useState } from "react";

/* Wave (unchanged) */
function Wave({
  position = "top",
  className = "",
}: {
  position?: "top" | "bottom";
  className?: string;
}) {
  const pos =
    position === "top"
      ? "top-0 -translate-y-full"
      : "bottom-0 translate-y-full";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-0 w-full overflow-hidden leading-[0] ${pos} ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[76px] w-[200%] md:w-full"
      >
        <path
          d="M0,64 C160,112 320,112 480,88 C640,64 800,16 960,24 C1120,32 1280,96 1440,112 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

type Testimonial = {
  quote: string;
  name: string;
  date: string;
  href?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Lörem ipsum kyl nihåvis på begösode. Antiposäde evirar fastän neng nifesk. Binar funde. Spesade dohologi ultrapättp, ponur. Bin krodar fastän niv. Du kan vara drabbad.",
    name: "Samrth Iyer",
    date: "2022.03.06",
    href: "#",
  },
  {
    quote:
      "We’ve seen measurable growth after partnering with the team. Great comms, on-time delivery, and consistent quality.",
    name: "Tanvi Desai",
    date: "2023.11.02",
    href: "#",
  },
  {
    quote:
      "Exactly what we needed to scale content without losing voice. Strategy + execution that actually moves the needle.",
    name: "Arjun Menon",
    date: "2024.04.18",
    href: "#",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="relative bg-gradient-to-b from-[#FFF6E9]/70 to-[#F4F1FF]/70 py-16 md:py-24 overflow-x-hidden">
      <Wave position="top" className="text-white" />

      {/* ✅ Remove side padding on very small screens to stop overflow */}
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
        {/* ✅ Flex instead of grid so small screens don’t over-stretch */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* RIGHT on desktop / TOP on mobile */}
          <div className="order-1 lg:order-2 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1B1B22] leading-tight text-center lg:text-left">
              Don’t Just Take Our <br className="hidden md:block" />
              Word for it
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#4A4A55] text-center lg:text-left">
              We’ve been reviewed more than 20,000 times with{" "}
              <br className="hidden md:block" />
              an average of 4.5 out 5 rating.
            </p>

            {/* Ratings */}
            <div className="mt-10 lg:mt-12 w-full overflow-hidden">
              {/* Mobile/Tablet */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:hidden">
                <RatingBlock
                  logo="Clutch"
                  color="#0A6"
                  score="4.5"
                  brand="clutch"
                />
                <RatingBlock
                  logo="GoodFirms"
                  color="#3070E2"
                  score="4.5"
                  brand="goodfirms"
                />
                <RatingBlock
                  logo="Trustpilot"
                  color="#22C55E"
                  score="4.5"
                  brand="trustpilot"
                />
              </div>

              {/* Desktop with dividers */}
              <div className="hidden lg:flex items-center justify-between">
                <RatingBlock
                  logo="Clutch"
                  color="#0A6"
                  score="4.5"
                  brand="clutch"
                />
                <div className="h-20 w-px bg-[#E5E0EF]" />
                <RatingBlock
                  logo="GoodFirms"
                  color="#3070E2"
                  score="4.5"
                  brand="goodfirms"
                />
                <div className="h-20 w-px bg-[#E5E0EF]" />
                <RatingBlock
                  logo="Trustpilot"
                  color="#22C55E"
                  score="4.5"
                  brand="trustpilot"
                />
              </div>
            </div>
          </div>

          {/* LEFT on desktop / BOTTOM on mobile */}
          <div className="order-2 lg:order-1 w-full">
            {/* ✅ Key fix: width fully fluid on all screens */}
            <div className="relative w-full overflow-hidden max-w-full sm:max-w-[680px] mx-auto px-2">
              {/* Prev */}
              <button
                aria-label="Previous"
                onClick={prev}
                className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-black/10 bg-white/90 p-2 hover:shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Next */}
              <button
                aria-label="Next"
                onClick={next}
                className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-black/10 bg-white/90 p-2 hover:shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Card */}
              <div className="relative rounded-[18px] border border-[#E7E2F0] bg-white/95 shadow-[0_8px_30px_rgba(19,18,66,0.06)] overflow-hidden">
                <div className="absolute -left-4 -top-4 sm:-left-6 sm:-top-6 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#42175B] text-white grid place-content-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8.5 16c0-3.59 2.91-6.5 6.5-6.5V7C10.91 7 7 10.91 7 15.5V16h1.5Zm7 0c0-3.59 2.91-6.5 6.5-6.5V7C17.91 7 14 10.91 14 15.5V16h1.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="h-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${idx * 100}%)` }}
                  >
                    {TESTIMONIALS.map((t, i) => (
                      <article
                        key={i}
                        className="min-w-full px-5 sm:px-6 pb-8 pt-14 md:px-10 md:pt-16"
                      >
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-7 sm:leading-8 text-[#432F67] font-semibold">
                          {t.quote}
                        </p>

                        <div className="mt-10 flex items-end justify-between gap-4">
                          <div>
                            <div className="text-[#1B1B22] font-semibold">
                              {t.name}
                            </div>
                            <div className="text-xs text-[#7A6E8A] mt-1">
                              {t.date}
                            </div>
                          </div>

                          {t.href && (
                            <a
                              href={t.href}
                              className="text-[13px] underline text-[#1B1B22] hover:text-[#42175B]"
                            >
                              Read more
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="mt-5 flex items-center justify-center gap-3">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      i === idx ? "bg-[#42175B]" : "bg-[#C7BBD9]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Rating item */
function RatingBlock({
  logo,
  color,
  score,
  brand,
}: {
  logo: string;
  color: string;
  score: string;
  brand: "clutch" | "goodfirms" | "trustpilot";
}) {
  const brandStyles: Record<typeof brand, string> = {
    clutch: "text-[#205C7B]",
    goodfirms: "text-[#3070E2]",
    trustpilot: "text-[#0EA5A0]",
  };
  return (
    <div className="flex flex-col items-center text-center min-w-[120px]">
      <div
        className={`text-xl xl:text-2xl font-semibold ${brandStyles[brand]}`}
      >
        {logo}
      </div>
      <div className="mt-2 text-2xl xl:text-3xl font-semibold text-[#1B1B22]">
        {score}
      </div>
      <div className="mt-2 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < 4} color={color} />
        ))}
      </div>
    </div>
  );
}

function Star({ filled, color }: { filled: boolean; color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.6l2.4 4.86 5.37.78-3.88 3.78.92 5.36L12 16.98 7.19 18.38l.92-5.36L4.23 9.24l5.37-.78L12 3.6Z"
        fill={filled ? color : "none"}
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  );
}
