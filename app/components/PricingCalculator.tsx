"use client";
import { useMemo, useState } from "react";
import CurveDivider from "@/app/components/CurveDivider";

type TabKey = "content" | "seo" | "translation";

const TABS: { key: TabKey; label: string }[] = [
  { key: "content", label: "Content Writing" },
  { key: "seo", label: "SEO Services" },
  { key: "translation", label: "Translation" },
];

// Rates for Content Calculator
const SERVICE_RATES = [
  { label: "Blog / Article", rate: 0.4 },
  { label: "Website Copy", rate: 0.75 },
  { label: "Product Description", rate: 0.5 },
];

export default function PricingSection() {
  const [tab, setTab] = useState<TabKey>("content");
  const [serviceIx, setServiceIx] = useState(0);
  const [words, setWords] = useState(500);

  const current = SERVICE_RATES[serviceIx];
  const price = useMemo(
    () => +(current.rate * words).toFixed(2),
    [current.rate, words]
  );

  return (
    <section className="relative bg-gradient-to-b from-[#EEF7FD]/40 to-[#FFF1E0]/40">
      <CurveDivider position="top" className="text-white" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-8">
          {tab === "content" && (
            <>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink-900">
                Industry-Leading Quality at Affordable Rates
              </h2>
              <p className="text-sm text-ink-500 mt-2">
                Starting at 0.4/word for content writing. No contracts, no
                commitments.
              </p>
            </>
          )}
          {tab === "seo" && (
            <>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink-900">
                Data-driven SEO Content Writing Services
              </h2>
              <p className="text-sm text-ink-500 mt-2">
                Flexible packages for SEO-driven content that ranks and
                converts.
              </p>
            </>
          )}
          {tab === "translation" && (
            <>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink-900">
                Professional Translation Services
              </h2>
              <p className="text-sm text-ink-500 mt-2">
                Global communication made seamless with expert translations.
              </p>
            </>
          )}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-[#E6E6F2] bg-white/70 backdrop-blur px-1 py-1">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-2 rounded-full text-sm transition
                  ${
                    tab === t.key
                      ? "bg-brand-600 text-white shadow-md"
                      : "text-ink-700 hover:bg-ink-100"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Writing Calculator */}
        {tab === "content" && (
          <div className="rounded-[14px] border border-[#E8E8EE] bg-white shadow-md px-6 md:px-8 py-8 transition-all">
            <div className="grid md:grid-cols-[1fr_1px_1fr] gap-6 md:gap-10 items-start">
              <div>
                <h3 className="text-xl font-semibold text-ink-900 mb-4">
                  Calculate your pricing for content
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-ink-500 mb-2">
                      Content Type
                    </label>
                    <select
                      value={serviceIx}
                      onChange={(e) => setServiceIx(+e.target.value)}
                      className="w-full rounded-md border border-[#E6E6F2] bg-white px-4 py-3 text-sm"
                    >
                      {SERVICE_RATES.map((s, i) => (
                        <option key={i} value={i}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-ink-500 mb-2">
                      Word Count
                    </label>
                    <input
                      type="number"
                      min={100}
                      step={50}
                      value={words}
                      onChange={(e) => setWords(+e.target.value || 0)}
                      className="w-full rounded-md border border-[#E6E6F2] bg-white px-4 py-3 text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs text-ink-500 mb-1">Your Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[20px]">₹</span>
                    <span className="font-serif text-[44px] bg-gradient-to-r from-[#8C31C1] to-[#FF9A44] bg-clip-text text-transparent">
                      {price.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                    <span className="text-sm text-ink-500">Rupees</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-full bg-[#EDEDF5]" />

              <div>
                <h4 className="text-lg font-semibold text-ink-900 mb-4">
                  What’s Included
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    "SEO-Optimization",
                    "0% Plagiarism [With Report]",
                    "100% AI-free content",
                    "Free revisions",
                    "48 hours delivery",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFCF5A] ring-8 ring-[#FFF7E2]">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 rounded-md bg-[#FFB347] text-white px-5 py-2 text-sm font-semibold hover:opacity-90">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SEO Services */}
        {tab === "seo" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Basic",
                price: "30k",
                features: [
                  "10 Articles",
                  "Plagiarism-free content",
                  "Unlimited revisions",
                  "48 Hour delivery",
                ],
              },
              {
                title: "Standard",
                price: "40k",
                features: [
                  "10 Articles",
                  "Everything in basic package+",
                  "Keyword Research",
                  "Content Strategy",
                  "Banner Images & Infographics",
                  "Up to 1.3x traffic Growth in 6 months",
                ],
              },
              {
                title: "Premium",
                price: "50k",
                features: [
                  "10 Articles",
                  "Everything in Standard package+",
                  "3 Backlinks of avg 30 DA",
                  "Content Repurposing for LinkedIn, Insta, Reddit, Medium",
                  "Up to 2x–3x traffic growth in 6 months",
                ],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-[14px] border border-[#E8E8EE] bg-white shadow-md p-6 hover:border-black transition"
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-[44px] font-serif bg-gradient-to-r from-[#8C31C1] to-[#FF9A44] bg-clip-text text-transparent">
                  ₹{p.price}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFCF5A] ring-8 ring-[#FFF7E2] text-xs">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Translation */}
        {tab === "translation" && (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Budget-friendly",
                price: "3",
                unit: "per word",
                features: [
                  "Marketing copies",
                  "Website translation",
                  "A+ content translation",
                  "Blog content translation",
                ],
              },
              {
                title: "Industry Standard",
                price: "5",
                unit: "per word",
                features: [
                  "Legal translation",
                  "Policy translation",
                  "User guide translation",
                  "Book translation",
                ],
              },
              {
                title: "Advanced Level",
                price: "Contact us",
                features: [
                  "Niche requirements",
                  "Specific requirements",
                  "Bulk translation services",
                  "48 Hour delivery",
                ],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-[14px] border border-[#E8E8EE] bg-white shadow-md p-6 hover:border-black transition"
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-[44px] font-serif bg-gradient-to-r from-[#8C31C1] to-[#FF9A44] bg-clip-text text-transparent">
                  {p.price === "Contact us" ? "Contact us" : `₹${p.price}`}
                  {p.unit && (
                    <span className="text-base text-ink-500">/{p.unit}</span>
                  )}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFCF5A] ring-8 ring-[#FFF7E2] text-xs">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Assistance Banner */}
        <div className="mt-8 rounded-[14px] bg-gradient-to-r from-[#42175B] to-[#8C31C1] p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <p className="text-white text-lg font-semibold text-center md:text-left">
            Are you looking for personalized assistance?
          </p>
          <button className="mt-3 md:mt-0 rounded-md bg-white text-ink-900 px-5 py-2 text-sm font-medium hover:bg-white/90">
            You should talk to our experts →
          </button>
        </div>
      </div>
      <CurveDivider position="bottom" className="text-white" />
    </section>
  );
}
