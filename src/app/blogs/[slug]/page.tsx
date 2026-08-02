import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <section className="border-b border-line">
        <div className="container-page py-12 md:py-16">
          <Link href="/blogs/" className="text-sm font-medium text-accent-dark hover:underline">
            ← Back to blogs
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">
            {post.date}
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">{post.excerpt}</p>
        </div>
      </section>
      <div className="container-page py-10 md:py-14">
        <Image
          src={post.image}
          alt={post.title}
          width={1400}
          height={800}
          className="mb-10 aspect-[16/9] w-full rounded-3xl object-cover"
        />
        <div className="prose-page mx-auto max-w-3xl [&_p]:mb-4">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
