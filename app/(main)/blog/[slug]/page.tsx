import type { Metadata } from "next";
import { notFound }   from "next/navigation";
import Image          from "next/image";
import Link           from "next/link";
import { Clock, User, ArrowLeft, Tag } from "lucide-react";
import { blogPosts }  from "@/data/blog";
import { formatDate } from "@/lib/utils";
import PageHero       from "@/components/shared/PageHero";
import BlogCard       from "@/components/blog/BlogCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Convert simple markdown-style content to paragraphs
  const paragraphs = post.content
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <>
      <PageHero
        label={post.category}
        title={post.title}
        size="sm"
        breadcrumbs={[
          { label: "Home", href: "/"     },
          { label: "Blog", href: "/blog" },
          { label: post.title           },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── Article ── */}
            <article className="lg:col-span-2">
              {/* Meta */}
              <div
                className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <User size={14} />
                  {post.author}
                </div>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Clock size={14} />
                  {post.readTime}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {formatDate(post.publishedAt)}
                </div>
              </div>

              {/* Hero image */}
              <div className="relative h-72 rounded-3xl overflow-hidden mb-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="space-y-5">
                {paragraphs.map((block, i) => {
                  if (block.startsWith("**") && block.endsWith("**")) {
                    return (
                      <h3
                        key={i}
                        className="font-display font-bold text-xl mt-8 first:mt-0"
                        style={{ color: "var(--text)" }}
                      >
                        {block.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {block.replace(/\*\*/g, "")}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div
                className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <Tag size={14} style={{ color: "var(--text-muted)" }} />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-medium"
                    style={{
                      background: "var(--bg-surface)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Back */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold
                             text-primary-500 hover:text-primary-700 transition-colors"
                >
                  <ArrowLeft size={15} />
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-6">
              {/* Author card */}
              <div
                className="rounded-3xl border p-6"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3
                  className="font-semibold text-sm mb-4"
                  style={{ color: "var(--text)" }}
                >
                  Written By
                </h3>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center
                               text-white font-bold text-lg shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0EA5E9, #2563EB)",
                    }}
                  >
                    {post.author.split(" ")[1]?.[0] ?? "D"}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--text)" }}
                    >
                      {post.author}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Specialist, Bright Smile
                    </p>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div
                className="rounded-3xl p-6 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0C4A6E 0%, #1E40AF 100%)",
                }}
              >
                <p className="font-display font-bold text-white text-lg mb-2">
                  Have Questions?
                </p>
                <p className="text-primary-200 text-sm mb-5 leading-relaxed">
                  Book a free consultation and speak directly with one of our specialists.
                </p>
                <Link
                  href="/appointment"
                  className="block w-full py-3 rounded-xl bg-white
                             text-secondary-700 font-semibold text-sm
                             hover:bg-primary-50 transition-colors"
                >
                  Book Free Consultation
                </Link>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2
                className="font-display font-bold text-2xl mb-8"
                style={{ color: "var(--text)" }}
              >
                More Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}