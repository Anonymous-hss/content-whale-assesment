// app/components/FeaturesStats.tsx
import Image from "next/image";

/* WaveEdge unchanged */
function WaveEdge({
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

type Feature = { icon?: string; title: string; desc: string };
type Stat = { value: string; label: string };

export default function FeaturesStats({
  title = "Top Features of Content Whale’s",
  highlight = "Content Writing Services",
  features = DEFAULT_FEATURES,
  stats = DEFAULT_STATS,
  withCurves = true,
}: {
  title?: string;
  highlight?: string;
  features?: Feature[];
  stats?: Stat[];
  withCurves?: boolean;
}) {
  return (
    <section className="relative bg-white">
      {withCurves && <WaveEdge position="top" className="text-white" />}

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-24">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-14">
          <h3 className="text-[22px] leading-tight font-semibold text-ink-900 md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 text-lg font-semibold md:text-2xl">
            <span className="bg-gradient-to-r from-[#8C31C1] to-[#FF9A44] bg-clip-text text-transparent">
              {highlight}
            </span>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12 md:grid-cols-4 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-3 h-12 w-12 md:h-10 md:w-10">
                {f.icon ? (
                  <Image
                    src={f.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="mx-auto h-full w-full object-contain"
                  />
                ) : (
                  <div className="mx-auto h-full w-full rounded-full bg-[#FFE6A3]" />
                )}
              </div>
              <h4 className="text-[15px] font-semibold text-ink-900 md:text-[16px]">
                {f.title}
              </h4>
              <p className="mt-2 text-[13px] leading-6 text-ink-500 md:text-sm md:max-w-[290px] mx-auto">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        {/* Stats */}
        <div className="mt-16 md:mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-ink-900">
            The measurable impact we made
          </h3>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-4 md:gap-10">
            {[
              { value: "50M+", label: "Words Written" },
              { value: "15+", label: "Countries catered" },
              { value: "12k+", label: "Content delivered" },
              { value: "1000+", label: "Clients catered" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold leading-none bg-gradient-to-r from-[#8C31C1] to-[#FF9A44] bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm sm:text-base text-[#2a2a2a] font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {withCurves && <WaveEdge position="bottom" className="text-white" />}
    </section>
  );
}

/* defaults unchanged */
const DEFAULT_FEATURES: Feature[] = [
  {
    icon: "/fast-delivery.svg",
    title: "Blazing-Fast Content Delivery",
    desc: "Our process-driven content writing and editing practices enable us to deliver upto 20,000+ words in just 48 hours.",
  },
  {
    icon: "/content-boost.svg",
    title: "TG-focused Content To Boost Lead Generation",
    desc: "We use data-driven content writing practices to drive traffic through funneling and ascertain conversions.",
  },
  {
    icon: "/google-originial.svg",
    title: "Original & Authoritative Content That Always Rank",
    desc: "Our SMEs and content editors follow Google’s E-E-A-T guidelines to ensure every piece of delivered content ranks!",
  },
  {
    icon: "/google-translate.svg",
    title: "Translate Your Brand Across All Languages",
    desc: "With 50+ certified multilingual translators and 1000+ global-to-local SME translators, we help you connect globally.",
  },
];

const DEFAULT_STATS: Stat[] = [
  { value: "100M+", label: "Words" },
  { value: "15+", label: "Countries" },
  { value: "100K+", label: "Content Pieces" },
  { value: "3000+", label: "Businesses" },
];
