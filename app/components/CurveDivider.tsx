"use client";
import clsx from "clsx";

type Props = {
  position?: "top" | "bottom";
  className?: string;
};

export default function CurveDivider({
  position = "bottom",
  className,
}: Props) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute left-0 w-full overflow-hidden leading-[0]",
        position === "top"
          ? "top-0 -translate-y-full"
          : "bottom-0 translate-y-full",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 78"
        preserveAspectRatio="none"
        className="block h-[78px] w-full"
      >
        <path
          d="
            M0,30 
            C480,70 960,0 1440,40 
            L1440,78 
            L0,78 
            Z
          "
          fill="currentColor"
          fillOpacity="0.95"
        />
      </svg>
    </div>
  );
}
