import type { Metadata } from "next";
import PageHero       from "@/components/shared/PageHero";
import BlogList       from "@/components/blog/BlogList";
import SectionHeading from "@/components/shared/SectionHeading";
import { blogPosts }  from "@/data/blog";

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
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom space-y-10">
          <SectionHeading
            label="Latest Article"
            title="From the"
            titleGradient="Team"
            align="left"
          />
          <BlogList featured={featured} rest={rest} />
        </div>
      </section>
    </>
  );
}