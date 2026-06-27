import type { Metadata } from "next";
import { motion }       from "framer-motion";
import PageHero         from "@/components/shared/PageHero";
import BlogCard         from "@/components/blog/BlogCard";
import SectionHeading   from "@/components/shared/SectionHeading";
import { blogPosts }    from "@/data/blog";
import { staggerContainer } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Dental Health Blog",
  description:
    "Expert dental advice from the Bright Smile team — oral health guides, treatment explainers, and tips for patients in Lahore.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        label="The Blog"
        title="Dental Advice You Can"
        titleGradient="Actually Use"
        description="No filler, no scare tactics. Just clear, evidence-based guidance from our specialist team."
        breadcrumbs={[
          { label: "Home", href: "/"     },
          { label: "Blog" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom space-y-16">

          {/* Featured post */}
          <div>
            <SectionHeading
              label="Latest Article"
              title="Featured"
              titleGradient="Read"
              align="left"
              className="mb-8"
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <BlogCard post={featured} featured />
            </motion.div>
          </div>

          {/* All posts */}
          <div>
            <SectionHeading
              label="All Articles"
              title="More from the"
              titleGradient="Team"
              align="left"
              className="mb-8"
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {rest.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}