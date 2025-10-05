"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/app/api/blogs/route";

export default function BlogGrid({ allPosts }: { allPosts: BlogPost[] }) {
  // skip the first 4 already shown in the hero section
  const remaining = useMemo(() => allPosts.slice(4), [allPosts]);

  // show 6 initially; reveal in steps of 6 with "Load more"
  const STEP = 6;
  const [visible, setVisible] = useState(STEP);

  const shown = remaining.slice(0, visible);
  const hasMore = visible < remaining.length;

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <Card key={p.id} post={p} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + STEP)}
            className="rounded-xl bg-[#1976F3] px-5 py-3 text-white font-semibold shadow-sm hover:opacity-95"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}

function Card({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_rgba(2,6,23,0.06)]">
      <img src={post.image} alt="" className="h-44 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-[20px] font-semibold text-[#0E1825]">
          {post.title}
        </h3>

        {/* tags row */}
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

        <p className="mt-3 text-[15px] text-[#111827]/80 line-clamp-2">
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

      {/* bottom gradient bar like the reference */}
      <div className="h-2 w-full bg-gradient-to-r from-[#00B3FF] to-[#4D8EF9]" />
    </article>
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
