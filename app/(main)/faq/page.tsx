import type { Metadata } from "next";
import PageHero      from "@/components/shared/PageHero";
import FAQAccordion  from "@/components/faq/FAQAccordion";
import CTASection    from "@/components/home/CTASection";
import SectionHeading from "@/components/shared/SectionHeading";
import { faqs }      from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about our dental treatments, pricing, and what to expect at Bright Smile Dental Clinic.",
};

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQs"
        title="Questions We Hear"
        titleGradient="Every Day"
        description="Honest answers to the things patients most commonly ask — before they even have to ask."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Your Questions Answered"
              title="Everything You Need to"
              titleGradient="Know Before You Visit"
              align="center"
              className="mb-12"
            />
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}