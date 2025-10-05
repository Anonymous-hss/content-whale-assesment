import BlogHeader from "./_components/BlogHeader";
import BlogHero from "./_components/BlogHero";
import BlogGrid from "./_components/BlogGrid";
import type { BlogPost } from "../api/blogs/route";
import BlogFooter from "./_components/BlogFooter";

async function getPosts(): Promise<BlogPost[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const res = await fetch(`${base}/api/blogs`, { cache: "no-store" });
  const data = await res.json();
  return data.posts as BlogPost[];
}

export default async function BlogListingPage() {
  const posts = await getPosts();

  return (
    <>
      <BlogHeader />
      <BlogHero allPosts={posts} />

      {/* After hero + 3 cards + CTA → show up to 6 more, then "Load more" */}
      <BlogGrid allPosts={posts} />
      <BlogFooter />
    </>
  );
}
