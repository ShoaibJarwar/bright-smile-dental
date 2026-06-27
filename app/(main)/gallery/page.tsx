import type { Metadata } from "next";
import PageHero    from "@/components/shared/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Bright Smile Dental Clinic — our treatment rooms, specialist team, and patient results in Lahore, Pakistan.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="A Glimpse Inside"
        titleGradient="Bright Smile"
        description="Our clinic, our team, and our work — in pictures. Filter by category to see what matters most to you."
        breadcrumbs={[
          { label: "Home",    href: "/"        },
          { label: "Gallery" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}