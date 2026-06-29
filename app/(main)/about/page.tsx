import type { Metadata } from "next";
import PageHero   from "@/components/shared/PageHero";
import AboutStory from "@/components/about/AboutStory";
import CTASection from "@/components/home/CTASection";
import { CLINIC } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bright Smile Dental Clinic — founded by Dr. Ayesha Khan in 2012. Lahore's most trusted specialist dental practice.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name:        CLINIC.name,
  description: CLINIC.description,
  url:         CLINIC.website,
  telephone:   CLINIC.phone,
  email:       CLINIC.email,
  address: {
    "@type":           "PostalAddress",
    streetAddress:     CLINIC.address.street,
    addressLocality:   CLINIC.address.city,
    addressCountry:    "PK",
  },
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 10:00-18:00"],
  priceRange:   "PKR 2,500 – PKR 45,000",
  image:        `${CLINIC.website}/og-image.jpg`,
  sameAs: [
    CLINIC.social.facebook,
    CLINIC.social.instagram,
    CLINIC.social.twitter,
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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