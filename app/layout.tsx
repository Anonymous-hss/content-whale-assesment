import "./globals.css";
import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import LayoutClient from "./LayoutClient"; // ✅ client-side wrapper

export const metadata: Metadata = {
  title: "Content Whale",
  description: "Textual content solutions",
};

// Fonts
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-white">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
