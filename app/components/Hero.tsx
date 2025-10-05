import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF1E0] to-[#F7F4FF]">
      <Container className="py-14 md:py-20 text-center">
        {/* Eyebrow */}
        <p className="text-sm md:text-base font-medium text-[#FF9A44] mb-3 md:mb-4">
          We bring you,
        </p>

        {/* MOBILE HEADING — 56px size, 100% line-height, exact width */}
        <div className="md:hidden mx-auto mb-5" style={{ maxWidth: 392 }}>
          <h1 className="font-serif font-semibold text-[56px] leading-[56px] text-ink-900 tracking-[0]">
            30+ Content
            <br />
            Services to
          </h1>
          <h2 className="mt-2 font-serif font-semibold text-[56px] leading-[56px] tracking-[0] bg-gradient-to-r from-purple-800 via-pink-600 to-orange-400 bg-clip-text text-transparent">
            Whale Up Your
            <br />
            Business 10x!
          </h2>
        </div>

        {/* DESKTOP HEADING (unchanged visual, now using serif font) */}
        <h1 className="hidden md:block font-serif text-5xl font-bold leading-tight max-w-4xl mx-auto mb-6">
          <span className="text-ink-900">Textual Content Solutions For </span>
          <span className="bg-gradient-to-r from-purple-800 via-pink-600 to-orange-400 bg-clip-text text-transparent">
            All Business Communications!
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-[14px] md:text-lg leading-[22px] md:leading-7 text-ink-500 max-w-[620px] md:max-w-2xl mx-auto mb-6 md:mb-8 px-2 md:px-0">
          We provide affordable and quality content writing services categorized
          across content writing, SEO services, and professional translation
          services.
        </p>

        {/* CTA Button (42px high, 8px radius, gradient) */}
        <div className="mb-10 md:mb-14">
          <a
            href="#contact"
            className="inline-flex h-[42px] items-center justify-center px-6 rounded-[8px] font-medium text-white 
                       bg-gradient-to-r from-[#42175B] to-[#42175B] hover:opacity-90 shadow-card"
          >
            Connect With Us
          </a>
        </div>

        {/* Trusted by */}
        <p className="text-[13px] md:text-base font-medium text-ink-700 mb-5 md:mb-6">
          Trusted by <span className="text-[#FF9A44]">2,000+ Brands</span>
        </p>

        <div
          className="grid grid-cols-4 gap-x-6 gap-y-6 justify-items-center max-w-[405px] mx-auto
    md:max-w-none md:grid-cols-8 md:gap-x-12 md:gap-y-0"
        >
          <Image
            src="/upgrad.svg"
            alt="upGrad"
            width={106.67}
            height={35.55555725097656}
          />
          <Image
            src="/bcg.svg"
            alt="BCG"
            width={106.67}
            height={35.55555725097656}
          />
          <Image
            src="/icici.svg"
            alt="ICICI"
            width={106.67}
            height={35.55555725097656}
          />
          <Image
            src="/tata.svg"
            alt="TATA"
            width={106.67}
            height={35.55555725097656}
          />

          <Image
            src="/redbus.svg"
            alt="Redbus"
            width={106.67}
            height={35.55555725097656}
          />
          <Image
            src="/hsbc.svg"
            alt="HSBC"
            width={106.67}
            height={35.55555725097656}
          />
          <Image
            src="/thomas-cook.svg"
            alt="Thomas Cook"
            width={92}
            height={24}
          />
          <Image
            src="/wazirx.svg"
            alt="WazirX"
            width={106.67}
            height={35.55555725097656}
          />
        </div>
      </Container>
    </section>
  );
}
