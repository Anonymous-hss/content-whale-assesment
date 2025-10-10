"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

export default function CaseStudies() {
  /* =========================
   * DESKTOP (md+) TRACK LOGIC
   * ========================= */
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  const directionRef = useRef<"left" | "right" | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const end = endRef.current;
    if (!section || !viewport || !track || !end) return;

    const measure = () => {
      const firstCard = track.children[0] as HTMLElement | undefined;
      if (!firstCard) return { cardWidth: 360, gap: 24 };
      const cardWidth = firstCard.getBoundingClientRect().width;
      const cs = getComputedStyle(track);
      const gap =
        parseFloat((cs as any).gap || (cs as any).columnGap || "0") || 0;
      viewport.style.width = `${cardWidth * 2 + gap}px`;
      return { cardWidth, gap };
    };

    let { cardWidth, gap } = measure();

    const onResize = () => {
      const m = measure();
      cardWidth = m.cardWidth;
      gap = m.gap;
    };
    window.addEventListener("resize", onResize);

    track.style.transform = "translateX(0px)";
    track.style.transition = "transform 0ms";

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        if (e.isIntersecting && directionRef.current !== "left") {
          directionRef.current = "left";
          const shift = cardWidth + gap;
          track.style.transition =
            "transform 900ms cubic-bezier(0.22,1,0.36,1)";
          track.style.transform = `translateX(-${shift}px)`;
        } else if (!e.isIntersecting && directionRef.current !== "right") {
          directionRef.current = "right";
          track.style.transition =
            "transform 900ms cubic-bezier(0.22,1,0.36,1)";
          track.style.transform = "translateX(0px)";
        }
      },
      { root: null, threshold: 0 }
    );

    io.observe(end);

    return () => {
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  /* =========================
   * MOBILE CAROUSEL (snap)
   * ========================= */
  const mobileWrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = mobileWrapRef.current;
    if (!el) return;

    const getGap = () => {
      const cs = getComputedStyle(el);
      return parseFloat((cs as any).gap || (cs as any).columnGap || "0") || 0;
    };

    let gap = getGap();

    const onResize = () => {
      gap = getGap();
      onScroll(); // re-evaluate the index
    };

    const onScroll = () => {
      const first = el.children[0] as HTMLElement | undefined;
      if (!first) return;
      const step = first.offsetWidth + gap;
      const idx = Math.round(el.scrollLeft / step);
      setActive(Math.max(0, Math.min(idx, el.children.length - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollToIndex = (i: number) => {
    const el = mobileWrapRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const cs = getComputedStyle(el);
    const gap =
      parseFloat((cs as any).gap || (cs as any).columnGap || "0") || 0;
    const step = first.offsetWidth + gap;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  /* =========================
   * Hover vs Touch logic
   * - hoverEnabled === true => keep original group-hover behavior (desktop)
   * - hoverEnabled === false => use click/tap to toggle "activeIndex" and
   *   apply inline styles to mimic the hover-animations (tablet/mobile)
   * ========================= */
  const [hoverEnabled, setHoverEnabled] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      // enable hover only on large desktop-like devices with a fine pointer
      const supportsHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;
      // Use 1024px as the safe desktop cutoff so tablets (md) are treated as touch
      const isWide = window.innerWidth >= 1024;
      setHoverEnabled(Boolean(supportsHover && isWide));
    };

    update();
    window.addEventListener("resize", update);
    // also listen for changes to hover media query (some devices can change)
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqHandler = () => update();
    if (mq.addEventListener) mq.addEventListener("change", mqHandler);
    else (mq as any).addListener(mqHandler);

    return () => {
      window.removeEventListener("resize", update);
      if (mq.removeEventListener) mq.removeEventListener("change", mqHandler);
      else (mq as any).removeListener(mqHandler);
    };
  }, []);

  // close any active card when clicking outside the section (touch devices)
  useEffect(() => {
    if (hoverEnabled) return; // desktop keeps hover; no extra document listener needed
    const onDocClick = (e: MouseEvent) => {
      const sec = sectionRef.current;
      if (!sec) return;
      if (!sec.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [hoverEnabled]);

  const toggleCard = (idx: number) => {
    if (hoverEnabled) return; // ignore clicks on desktop — hover handles it
    setActiveIndex((cur) => (cur === idx ? null : idx));
  };

  /* Helper inline styles for non-hover (touch) devices.
     We only inject these when hoverEnabled === false so desktop keeps Tailwind hover rules. */
  const nonHover = !hoverEnabled;

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#FFF8FB] to-[#F9FBFF] py-16 md:py-20 overflow-hidden"
    >
      <Wave position="top" className="text-white" />

      <div className="mx-auto max-w-7xl px-4 relative">
        {/* ==================== DESKTOP / TABLET LAYOUT ==================== */}
        <div className="hidden md:flex items-start gap-10">
          {/* LEFT COPY (STATIC) */}
          <div className="shrink-0 w-[320px] sm:w-[380px] md:w-[420px]">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#353535] leading-tight">
              Expert Content <br /> Writing Solutions
            </h2>
            <p className="mt-4 text-[#2a2a2a]">
              Providing real-world results. Few case studies to look at.
            </p>
            <a href="/contact-customer.php" className="inline-block mt-6">
              <button className="rounded-md bg-[#42175B] px-6 py-3 text-white text-[15px] font-medium hover:opacity-90 transition">
                Want to Know More?
                <svg
                  className="ml-2 inline-block"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M3 9.5H15M15 9.5L10.5 5M15 9.5L10.5 14"
                    stroke="white"
                    strokeWidth="0.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>

          {/* RIGHT SCROLL TRACK (same as before) */}
          <div
            ref={viewportRef}
            className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
          >
            <div
              ref={trackRef}
              className="flex gap-6 pr-6 will-change-transform"
              style={{ transform: "translateX(0px)" }}
            >
              {/* ---------- CARD 1 (desktop/tablet) ---------- */}
              <article
                onClick={() => toggleCard(0)}
                className="group min-w-[380px] md:min-w-[420px] max-w-[460px] rounded-2xl border border-[#E3E3E3] bg-gradient-to-b from-white to-[#FFE7E7] shadow-[0_10px_30px_rgba(19,18,66,0.06)] p-6 relative overflow-hidden"
              >
                <div className="relative z-[2]">
                  <img
                    src="/case-studies/Khatabook.svg"
                    alt="KhataBook"
                    className="h-8 w-auto"
                  />
                  <p className="mt-3 text-[16px] leading-snug text-[#2a2a2a]">
                    KhataBook&apos;s Transformation with Content Whale
                  </p>
                </div>

                {/* hover stats */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-5 right-5 top-[140px] grid grid-cols-2 gap-4 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-[1]"
                  // Inline style for touch: show/hide + translate override when active
                  style={
                    nonHover
                      ? {
                          opacity: activeIndex === 0 ? 1 : 0,
                          transform:
                            activeIndex === 0
                              ? "translateY(0)"
                              : "translateY(8px)",
                          transition: "opacity .3s, transform .45s",
                        }
                      : undefined
                  }
                >
                  <div
                    className="rounded-2xl bg-white px-5 py-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-[#E8E2E5] translate-x-6 group-hover:translate-x-0 transition-transform duration-500"
                    style={
                      nonHover
                        ? {
                            transform:
                              activeIndex === 0
                                ? "translateX(0)"
                                : "translateX(24px)",
                            transition: "transform .5s",
                          }
                        : undefined
                    }
                  >
                    <div className="text-[#A3131D] text-[14px] leading-none">
                      Keywords Ranked
                    </div>
                    <div className="text-[#A3131D] font-extrabold tracking-tight text-[42px] leading-none mt-2">
                      28316
                    </div>
                  </div>

                  <div
                    className="rounded-2xl bg-white px-5 py-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-[#E8E2E5] -translate-x-6 group-hover:translate-x-0 transition-transform duration-500 delay-75"
                    style={
                      nonHover
                        ? {
                            transform:
                              activeIndex === 0
                                ? "translateX(0)"
                                : "translateX(-24px)",
                            transition: "transform .5s .075s",
                          }
                        : undefined
                    }
                  >
                    <div className="text-[#A3131D] text-[14px] leading-none">
                      New Heights
                    </div>
                    <div className="text-[#A3131D] font-extrabold tracking-tight text-[42px] leading-none mt-2">
                      17x
                    </div>
                  </div>

                  <div
                    className="rounded-2xl bg-white px-5 py-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-[#E8E2E5] translate-x-6 group-hover:translate-x-0 transition-transform duration-500 delay-150"
                    style={
                      nonHover
                        ? {
                            transform:
                              activeIndex === 0
                                ? "translateX(0)"
                                : "translateX(24px)",
                            transition: "transform .5s .15s",
                          }
                        : undefined
                    }
                  >
                    <div className="text-[#A3131D] text-[14px] leading-none">
                      New Heights
                    </div>
                    <div className="text-[#A3131D] font-extrabold tracking-tight text-[42px] leading-none mt-2">
                      17x
                    </div>
                  </div>

                  <div
                    className="rounded-2xl bg-white px-5 py-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-[#E8E2E5] -translate-x-6 group-hover:translate-x-0 transition-transform duration-500 delay-200"
                    style={
                      nonHover
                        ? {
                            transform:
                              activeIndex === 0
                                ? "translateX(0)"
                                : "translateX(-24px)",
                            transition: "transform .5s .2s",
                          }
                        : undefined
                    }
                  >
                    <div className="text-[#A3131D] text-[14px] leading-none">
                      Traffic Growth
                    </div>
                    <div className="flex items-end justify-center gap-1 mt-2">
                      <span className="text-[#A3131D] font-extrabold tracking-tight text-[42px] leading-none">
                        1.4
                      </span>
                      <span className="text-[#A3131D] text-[20px] font-semibold leading-none mb-1">
                        million
                      </span>
                    </div>
                  </div>
                </div>

                <img
                  src="/case-studies/NothingPhone.svg"
                  alt="Nothing Phone 1"
                  className="relative z-[1] mt-6 w-full max-w-[420px] rounded-[14px] transition-transform duration-500 ease-out group-hover:translate-y-[240px]"
                  style={
                    nonHover
                      ? {
                          transform:
                            activeIndex === 0
                              ? "translateY(240px)"
                              : "translateY(0)",
                          transition: "transform .5s",
                        }
                      : undefined
                  }
                />
              </article>

              {/* ---------- CARD 2 (desktop/tablet) ---------- */}
              <article
                onClick={() => toggleCard(1)}
                className="group min-w-[380px] md:min-w-[420px] max-w-[460px] rounded-2xl border border-[#E3E3E3] bg-gradient-to-br from-white to-[#F1FFFF] shadow-[0_10px_30px_rgba(19,18,66,0.06)] p-6 relative overflow-hidden"
              >
                <img
                  src="/case-studies/RealisticIDCards.svg"
                  alt="Heritage Hospitals Badge"
                  className="mx-auto w-[230px] rounded-md transition-transform duration-500 group-hover:-translate-y-[72%]"
                  style={
                    nonHover
                      ? {
                          transform:
                            activeIndex === 1
                              ? "translateY(-72%)"
                              : "translateY(0)",
                          transition: "transform .5s",
                        }
                      : undefined
                  }
                />

                <div className="absolute inset-x-0 top-[24%] z-[1] hidden md:flex flex-col gap-3 px-4">
                  <div className="flex gap-3">
                    <div
                      className="rounded-[14px] border border-[#d9d2db] bg-white/95 px-4 py-4 shadow-sm translate-x-[-120%] transition-transform duration-500 group-hover:translate-x-0 text-right"
                      style={
                        nonHover
                          ? {
                              transform:
                                activeIndex === 1
                                  ? "translateX(0)"
                                  : "translateX(-120%)",
                              transition: "transform .5s",
                            }
                          : undefined
                      }
                    >
                      <div className="flex items-start justify-end gap-2 text-[#085681]">
                        <img
                          src="/images/slide-2-gloab.svg"
                          alt=""
                          className="h-6 w-6 shrink-0"
                        />
                        <div className="text-sm w-[200px] leading-snug">
                          No Digital Regional <br /> Presence
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-[14px] border border-[#d9d2db] bg-white/95 px-4 py-4 shadow-sm translate-x-[120%] transition-transform duration-500 group-hover:translate-x-0 delay-100 text-left"
                      style={
                        nonHover
                          ? {
                              transform:
                                activeIndex === 1
                                  ? "translateX(0)"
                                  : "translateX(120%)",
                              transition: "transform .5s .1s",
                            }
                          : undefined
                      }
                    >
                      <div className="flex items-start gap-2 text-[#085681]">
                        <img
                          src="/images/slide-two-start.svg"
                          alt=""
                          className="h-6 w-6 shrink-0"
                        />
                        <div className="text-sm w-[200px] leading-snug">
                          Lack of Online Healthcare <br /> Expertise
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div
                      className="rounded-[14px] border border-[#d9d2db] bg-white/95 px-5 py-4 text-center shadow-sm translate-x-[-120%] transition-transform duration-500 group-hover:translate-x-0 delay-150"
                      style={
                        nonHover
                          ? {
                              transform:
                                activeIndex === 1
                                  ? "translateX(0)"
                                  : "translateX(-120%)",
                              transition: "transform .5s .15s",
                            }
                          : undefined
                      }
                    >
                      <div className="text-[#085681] text-sm">
                        Keywords Ranked
                      </div>
                      <div className="text-[#085681] font-semibold tracking-tight text-[42px] leading-none mt-1">
                        10,047
                      </div>
                    </div>
                    <div
                      className="rounded-[14px] border border-[#d9d2db] bg-white/95 px-5 py-4 text-center shadow-sm translate-x-[120%] transition-transform duration-500 group-hover:translate-x-0 delay-200"
                      style={
                        nonHover
                          ? {
                              transform:
                                activeIndex === 1
                                  ? "translateX(0)"
                                  : "translateX(120%)",
                              transition: "transform .5s .2s",
                            }
                          : undefined
                      }
                    >
                      <div className="text-[#085681] text-sm">
                        Traffic Growth
                      </div>
                      <div className="text-[#085681] font-semibold tracking-tight text-[42px] leading-none mt-1">
                        1.5{" "}
                        <span className="align-baseline text-[20px] font-medium ml-1">
                          times
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#E7EEF2] bg-gradient-to-b from-white to-[#ECFAFF] p-4">
                  <div className="flex items-center gap-3">
                    <img src="/case-studies/hostpitals.svg" alt="hospital" />
                  </div>
                  <p className="mt-3 text-[15px] text-[#2a2a2a]">
                    Putting Heritage Hospitals on the Map
                  </p>
                </div>
              </article>

              {/* ---------- CARD 3 (desktop/tablet) ---------- */}
              <article
                onClick={() => toggleCard(2)}
                className="group min-w-[380px] md:min-w-[420px] max-w-[460px] rounded-2xl border border-[#E3E3E3] bg-gradient-to-br from-white to-[#FDEDFD] shadow-[0_10px_30px_rgba(19,18,66,0.06)] p-6 relative overflow-hidden"
              >
                <div className="text-center">
                  <img
                    src="/case-studies/slider-logo-3.png"
                    alt="KnowledgeHut"
                    className="mx-auto h-8 w-auto"
                  />
                  <p className="mt-2 text-sm text-[#2a2a2a]">
                    Fintech | Website Content
                  </p>
                  <p className="mt-3 text-[20px] md:text-[22px] font-semibold text-[#000300] leading-snug">
                    Empowering{" "}
                    <span className="bg-gradient-to-r from-[#FF8D1A] to-[#D90DBC] bg-clip-text text-transparent">
                      KNOWLEDGEHUT
                    </span>{" "}
                    through Strategic Content Marketing
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-[38%] z-[1] hidden md:flex flex-col gap-3 px-5">
                  <div className="flex w-full justify-center">
                    <div
                      className="rounded-2xl border border-[#E9D7F3] bg-white px-5 py-3 shadow-sm flex items-center gap-3 translate-x-[-120%] transition-transform duration-500 group-hover:translate-x-0"
                      style={
                        nonHover
                          ? {
                              transform:
                                activeIndex === 2
                                  ? "translateX(0)"
                                  : "translateX(-120%)",
                              transition: "transform .5s",
                            }
                          : undefined
                      }
                    >
                      <img
                        src="/case-studies/slider-logo-3.png"
                        alt=""
                        className="h-5 w-5"
                      />
                      <span className="text-[#b036ce] text-[15px] font-medium">
                        Limited online visibility
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <div
                      className="rounded-2xl border border-[#E9D7F3] bg-white px-5 py-3 text-center shadow-sm translate-x-[-120%] transition-transform duration-500 group-hover:translate-x-0 delay-150"
                      style={
                        nonHover
                          ? {
                              transform:
                                activeIndex === 2
                                  ? "translateX(0)"
                                  : "translateX(-120%)",
                              transition: "transform .5s .15s",
                            }
                          : undefined
                      }
                    >
                      <div className="text-[#b036ce] text-sm">
                        Keywords Ranked
                      </div>
                      <div className="text-[#b036ce] font-serif text-4xl font-semibold">
                        28,316
                      </div>
                    </div>
                    <div
                      className="rounded-2xl border border-[#E9D7F3] bg-white px-5 py-3 text-center shadow-sm translate-x-[120%] transition-transform duration-500 group-hover:translate-x-0 delay-200"
                      style={
                        nonHover
                          ? {
                              transform:
                                activeIndex === 2
                                  ? "translateX(0)"
                                  : "translateX(120%)",
                              transition: "transform .5s .2s",
                            }
                          : undefined
                      }
                    >
                      <div className="text-[#b036ce] text-sm">New Heights</div>
                      <div className="text-[#b036ce] font-serif text-4xl font-semibold">
                        17x
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="/case-studies/slider-img-3.png"
                  alt=""
                  className="relative z-[1] mt-6 w-full rounded-md transition-transform duration-500 group-hover:translate-y-[72%]"
                  style={
                    nonHover
                      ? {
                          transform:
                            activeIndex === 2
                              ? "translateY(72%)"
                              : "translateY(0)",
                          transition: "transform .5s",
                        }
                      : undefined
                  }
                />
              </article>
            </div>
          </div>
        </div>

        {/* ==================== MOBILE LAYOUT ==================== */}
        <div className="md:hidden">
          {/* optional short intro kept concise */}
          <div className="text-center mb-6">
            <h2 className="text-[26px] font-semibold text-[#353535] leading-tight">
              Expert Content <br /> Writing Solutions
            </h2>
            <p className="mt-2 text-[#2a2a2a] text-[14px]">
              Providing real-world results. Few case studies to look at.
            </p>
          </div>

          {/* Snap carousel */}
          <div
            ref={mobileWrapRef}
            className="
              -mx-4 px-4 
              flex gap-4 overflow-x-auto snap-x snap-mandatory 
              [&::-webkit-scrollbar]:hidden [scrollbar-width:none]
            "
          >
            {/* CARD 1 (mobile) */}
            <article className="snap-center shrink-0 w-[86%] max-w-[420px] rounded-2xl border border-[#E3E3E3] bg-gradient-to-b from-white to-[#FFE7E7] shadow-[0_10px_30px_rgba(19,18,66,0.06)] p-6 relative overflow-hidden">
              <img
                src="/case-studies/Khatabook.svg"
                alt="KhataBook"
                className="h-8 w-auto"
              />
              <p className="mt-3 text-[16px] leading-snug text-[#2a2a2a]">
                KhataBook&apos;s Transformation with Content Whale
              </p>
              <img
                src="/case-studies/NothingPhone.svg"
                alt="Nothing Phone 1"
                className="relative z-[1] mt-[100px] w-full max-w-[420px] rounded-[14px]"
              />
            </article>

            {/* CARD 2 (mobile) */}
            <article className="snap-center shrink-0 w-[86%] max-w-[420px] rounded-2xl border border-[#E3E3E3] bg-gradient-to-br from-white to-[#F1FFFF] shadow-[0_10px_30px_rgba(19,18,66,0.06)] p-6 relative overflow-hidden">
              <img
                src="/case-studies/RealisticIDCards.svg"
                alt="Heritage Hospitals Badge"
                className="mx-auto w-[230px] rounded-md"
              />
              <div className="mt-6 rounded-xl border border-[#E7EEF2] bg-gradient-to-b from-white to-[#ECFAFF] p-4">
                <div className="flex items-center gap-3">
                  <img src="/case-studies/hostpitals.svg" alt="hospital" />
                </div>
                <p className="mt-3 text-[15px] text-[#2a2a2a]">
                  Putting Heritage Hospitals on the Map
                </p>
              </div>
            </article>

            {/* CARD 3 (mobile) */}
            <article className="snap-center shrink-0 w-[86%] max-w-[420px] rounded-2xl border border-[#E3E3E3] bg-gradient-to-br from-white to-[#FDEDFD] shadow-[0_10px_30px_rgba(19,18,66,0.06)] p-6 relative overflow-hidden">
              <div className="text-center">
                <img
                  src="/case-studies/slider-logo-3.png"
                  alt="KnowledgeHut"
                  className="mx-auto h-8 w-auto"
                />
                <p className="mt-2 text-sm text-[#2a2a2a]">
                  Fintech | Website Content
                </p>
                <p className="mt-3 text-[18px] font-semibold text-[#000300] leading-snug">
                  Empowering{" "}
                  <span className="bg-gradient-to-r from-[#FF8D1A] to-[#D90DBC] bg-clip-text text-transparent">
                    KNOWLEDGEHUT
                  </span>{" "}
                  through Strategic Content Marketing
                </p>
              </div>
              <img
                src="/case-studies/slider-img-3.png"
                alt=""
                className="relative z-[1] mt-6 w-full rounded-md"
              />
            </article>
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-[6px] w-[6px] rounded-full transition ${
                  active === i ? "bg-[#42175B]" : "bg-[#C7BFD2]"
                }`}
              />
            ))}
          </div>

          {/* CTA (optional) */}
          <div className="mt-6 text-center">
            <a href="/contact-customer.php" className="inline-block">
              <button className="rounded-md bg-[#42175B] px-6 py-3 text-white text-[15px] font-medium hover:opacity-90 transition">
                Want to Know More?
                <svg
                  className="ml-2 inline-block"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M3 9.5H15M15 9.5L10.5 5M15 9.5L10.5 14"
                    stroke="white"
                    strokeWidth="0.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* sentinel for desktop nudge */}
      <div ref={endRef} aria-hidden className="h-px w-px"></div>
    </section>
  );
}
