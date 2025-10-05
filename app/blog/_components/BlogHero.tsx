"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/app/api/blogs/route";

const TAGS = [
  "Industry",
  "CA Firms",
  "Automation",
  "GST",
  "Accounting",
] as const;

export default function BlogHero({ allPosts }: { allPosts: BlogPost[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return allPosts;
    return allPosts.filter((p) => p.tags.includes(active));
  }, [active, allPosts]);

  const hero = filtered[0];
  const nextThree = filtered.slice(1, 4);

  return (
    <section className="bg-gradient-to-b from-[#DFF0FF] to-[#EAF3FF]">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 md:pt-16 md:pb-14">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-[42px] font-semibold text-[#0E1825]">
            Stay Updated with Suvit’s Expert Insights
          </h1>
          <p className="mt-3 text-[15px] md:text-base text-[#1F2A37]/80">
            Learn about the latest trends in GST, accounting automation, and CA
            best practices.
          </p>

          {/* Email */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-[46px] w-full max-w-[520px] items-center rounded-xl border border-black/10 bg-white px-3">
              <input
                placeholder="Email Address"
                className="w-full bg-transparent outline-none text-[15px]"
              />
            </div>
            <button className="h-[46px] rounded-xl bg-[#1976F3] px-5 text-white font-semibold shadow-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <p className="text-sm text-[#1F2A37]/70 text-center md:text-left">
            Filters based on tags
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <TagChip
              label="All"
              active={active === "All"}
              onClick={() => setActive("All")}
            />
            <span className="hidden md:inline-block h-[18px] w-px bg-black/10 mx-1" />
            {TAGS.map((t) => (
              <TagChip
                key={t}
                label={t}
                active={active === t}
                onClick={() => setActive(t)}
              />
            ))}
          </div>
        </div>

        {/* Featured + three cards */}
        <div className="mt-8">
          {hero && <FeaturedCard post={hero} />}

          {nextThree.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextThree.map((p) => (
                <SmallCard key={p.id} post={p} />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <CTA />
      </div>
    </section>
  );
}

/* --- bits --- */
function TagChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition ${
        active
          ? "border-[#1976F3] bg-[#E8F1FF] text-[#0B5BD3]"
          : "border-black/10 bg-white hover:bg-black/5"
      }`}
    >
      {label}
    </button>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <article className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.06)] md:grid-cols-[1.1fr,0.9fr]">
      <div className="p-6 md:p-8">
        <h2 className="text-[26px] md:text-[32px] font-semibold text-[#0E1825]">
          {post.title}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-lg bg-black/5 px-3 py-1 text-sm text-[#0E1825]/80"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 text-[#111827]/80 leading-7 text-[15px]">
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-sm text-[#0E1825]/90 font-medium">
              {post.author.name}
            </span>
          </div>
          <time className="text-sm text-[#6B7280]">{fmt(post.date)}</time>
        </div>
      </div>
      <img src={post.image} alt="" className="h-full w-full object-cover" />
    </article>
  );
}

function SmallCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_rgba(2,6,23,0.06)]">
      <img src={post.image} alt="" className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#0E1825]">{post.title}</h3>
        <p className="mt-2 text-[15px] text-[#111827]/80 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm text-[#0E1825]/90">
              {post.author.name}
            </span>
          </div>
          <time className="text-sm text-[#6B7280]">{fmt(post.date)}</time>
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-r from-[#00B3FF] to-[#4D8EF9]" />
    </article>
  );
}

function CTA() {
  return (
    <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#5AB3FF] to-[#9AB7FF] p-6 md:p-10">
      <div className="grid items-center gap-6 md:grid-cols-[1fr,420px]">
        <div>
          <h3 className="text-white text-2xl md:text-[32px] font-semibold">
            Stay Up-to-date!
          </h3>
          <p className="mt-2 text-white/90">
            The industry insights you need delivered to your inbox monthly.
          </p>
        </div>
        <div className="flex h-[46px] items-stretch rounded-xl bg-white/95 p-1">
          <input
            placeholder="Email Address"
            className="w-full rounded-l-xl px-3 text-[15px] outline-none"
          />
          <button className="rounded-xl bg-[#1976F3] px-5 text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

function fmt(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
