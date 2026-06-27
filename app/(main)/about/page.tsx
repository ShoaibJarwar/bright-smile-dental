import type { Metadata } from "next";
import PageHero    from "@/components/shared/PageHero";
import AboutStory  from "@/components/about/AboutStory";
import CTASection  from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bright Smile Dental Clinic — founded by Dr. Ayesha Khan in 2012. Lahore's most trusted specialist dental practice.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="More Than a Dental Clinic."
        titleGradient="A Trusted Partner."
        description="Since 2012, we have been helping Lahore families smile with confidence. Here is the story, the team, and the values behind every treatment we deliver."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutStory />
      <CTASection />
    </>
  );
}