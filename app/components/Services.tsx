import Image from "next/image";
import Container from "./Container";

/**
 * Services Section
 * - Card 1 (Content Writing): precise, layered per Figma (356×420)
 * - Card 2/3: temp (single artwork images) until you share their exact layers
 */
export default function Services() {
  return (
    <section className="relative">
      <Container className="py-16 md:py-24">
        {/* Section title */}
        <h2 className="text-center font-serif font-bold text-[28px] md:text-[40px] leading-tight">
          <span className="text-ink-900">Choose the Solution </span>
          <span className="bg-gradient-to-r from-[#8C31C1] to-[#FF9A44] bg-clip-text text-transparent">
            that Best Suits You
          </span>
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
          <ContentWritingCard />
          <SeoWriting />
          <TranslationServices />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------ CARD 1 — LAYERED (Content Writing) ------------------------ */
/**
 * Exact Figma frame size: 356 × 420
 * Layers (inside illustration area):
 *  - image 659: width 123.87, height 212, top 160, left -57, rotation -90°, radius 19.11, shadow (x:2, y:4, blur:8, opacity:16%)
 *  - ZenBook Duo 14: width 210, height 196.99, top 222.01, left 184, radius TL/TR/BL 5.27, BR 13.01
 *  - image 661: width 168, height 236.14, top 304, left -9, shadow (x:2.08, y:2.08, blur:4.16, opacity:16%)
 *
 * Export your PNGs to:
 *   /public/services/content/image-659.png
 *   /public/services/content/zenbook.png
 *   /public/services/content/image-661.png
 */
function ContentWritingCard() {
  return (
    <article
      className="
        relative bg-white w-full max-w-[356px] h-[420px]
        rounded-[16px] border border-[#E8E8EE]
        shadow-[0_10px_30px_rgba(19,18,66,0.06)]
        overflow-hidden hover:border-black hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]
  transition-all duration-300
      "
    >
      {/* Header */}

      {/* Illustration area: absolute-positioned layers relative to the card */}
      <Image
        src="/content-writing.svg"
        alt="Content Writing"
        width={356}
        height={420}
      />
    </article>
  );
}

function SeoWriting() {
  return (
    <article
      className="
        relative bg-white w-full max-w-[356px] h-[420px]
        rounded-[16px] border border-[#E8E8EE]
        shadow-[0_10px_30px_rgba(19,18,66,0.06)]
        overflow-hidden hover:border-black hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]
  transition-all duration-300
      "
    >
      {/* Header */}

      {/* Illustration area: absolute-positioned layers relative to the card */}
      <Image
        src="/seo-services.svg"
        alt="Content Writing"
        width={356}
        height={420}
      />
    </article>
  );
}

function TranslationServices() {
  return (
    <article
      className="
        relative bg-white w-full max-w-[356px] h-[420px]
        rounded-[16px] border border-[#E8E8EE]
        shadow-[0_10px_30px_rgba(19,18,66,0.06)]
        overflow-hidden hover:border-black hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]
  transition-all duration-300
      "
    >
      {/* Header */}

      {/* Illustration area: absolute-positioned layers relative to the card */}
      <Image
        src="/translation.svg"
        alt="Content Writing"
        width={356}
        height={420}
      />
    </article>
  );
}

/* ------------------------ TEMP simple card for 2 & 3 ------------------------ */
