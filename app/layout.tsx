import "./globals.css";
import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import LayoutClient from "./LayoutClient"; // ✅ client-side wrapper

export const metadata: Metadata = {
  title: "Content Whale",
  description:
    "Short description of your site or page, with keywords and a call to action.",
  openGraph: {
    title: "Content Whale - assessment",
    description: "Same or more detailed description for social preview",
    url: "https://content-whale-assesment.vercel.app/",
    siteName: "Content Whale",
    images: [
      {
        url: "https://content-whale-assesment.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your site social preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Site Name — Tagline",
    description: "Same description",
    images: ["https://your-site.com/og-image.jpg"],
  },
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
