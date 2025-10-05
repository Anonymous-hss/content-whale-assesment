// app/blog/_components/BlogIndexClient.tsx  (Client Component)
"use client";

import { useState } from "react";
import BlogHero from "./BlogHero";
import BlogGrid from "./BlogGrid";
import type { BlogPost } from "@/app/api/blogs/route";

export default function BlogIndexClient({
  posts,
  tags,
}: {
  posts: BlogPost[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string>("All");

  return (
    <>
      <BlogHero
        posts={posts}
        tags={tags}
        activeTag={activeTag}
        onChangeTag={setActiveTag}
      />

      {/* your CTA band goes here */}
      {/* <CtaBand /> */}

      <BlogGrid allPosts={posts} activeTag={activeTag} />
    </>
  );
}
