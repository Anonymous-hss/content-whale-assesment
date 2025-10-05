// app/components/FeaturedMentions.tsx
import Image from "next/image";

/* --- wave divider --- */
function Wave({
  position = "bottom",
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

/* --- logo card with fixed tile sizing --- */
function LogoCard({
  src,
  alt,
  w = 140,
  h = 48,
}: {
  src: string;
  alt: string;
  w?: number;
  h?: number;
}) {
  return (
    <div className="flex items-center justify-center transition-transform duration-300 hover:scale-[1.03]">
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="object-contain"
      />
    </div>
  );
}

export default function FeaturedMentions() {
  return (
    <section className="relative bg-gradient-to-b from-[#F5F9FF] to-white">
      <Wave position="top" className="text-white" />

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-[26px] md:text-[34px] leading-tight font-semibold text-[#353535]">
            Featured Mentions & Publications
          </h3>
          <p className="mt-3 text-[15px] md:text-base text-ink-600">
            From AMA to Forbes, we have been mentioned in many reputed journals
            and publications.
          </p>
        </div>

        {/* Grid: 2 cols on mobile, 4 on desktop (with a 3-col mid step for tablets) */}
        <div
          className="
            grid gap-4 md:gap-5
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            items-stretch
          "
        >
          <LogoCard
            src="/featured-mentions/Get Prospect Logo.svg"
            alt="GetProspect"
          />
          <LogoCard
            src="/featured-mentions/AZ Big Media Logo.svg"
            alt="AZ Big Media"
          />
          <LogoCard src="/featured-mentions/Bulkly Logo.svg" alt="Bulkly" />
          <LogoCard src="/featured-mentions/Featured Logo.svg" alt="Featured" />

          <LogoCard
            src="/featured-mentions/College Recruiter Logo.svg"
            alt="College Recruiter"
          />
          <LogoCard
            src="/featured-mentions/All Business Logo.svg"
            alt="AllBusiness"
          />
          <LogoCard src="/featured-mentions/Forbes Logo.svg" alt="Forbes" />
          <LogoCard src="/featured-mentions/Lensa Logo.svg" alt="Lensa" />

          <LogoCard
            src="/featured-mentions/Arizona Edu Logo.svg"
            alt="America's SBDC"
          />
          <LogoCard
            src="/featured-mentions/Light Key Logo.svg"
            alt="Lightkey"
          />
          <LogoCard
            src="/featured-mentions/Lead Grow Develop.svg"
            alt="LeadGrow"
          />
          <LogoCard
            src="/featured-mentions/Grit Daily Logo.svg"
            alt="GritDaily"
          />
        </div>
      </div>

      <Wave position="bottom" className="text-white" />
    </section>
  );
}
