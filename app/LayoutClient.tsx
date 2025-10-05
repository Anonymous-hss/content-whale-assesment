"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/blog");

  return (
    <>
      {!isBlogPage && <Header />}
      {children}
    </>
  );
}
