import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        title="Blogs"
        subtitle="Practical guidance on car care, transparency, and choosing the right workshop."
      />
      <section className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}/`}
              className="group overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(45,0,0,0.08)]"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={700}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">
                  {post.date}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-ink group-hover:text-accent-dark">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
