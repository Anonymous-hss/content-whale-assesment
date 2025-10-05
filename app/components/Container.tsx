import { ReactNode } from "react";

// Centers content to your design's max width with consistent side gutters
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
