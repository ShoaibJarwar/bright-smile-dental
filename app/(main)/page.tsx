import type { Metadata } from "next";
import Hero               from "@/components/home/Hero";
import StatsSection       from "@/components/home/StatsSection";
import ServicesPreview    from "@/components/home/ServicesPreview";
import DoctorsPreview     from "@/components/home/DoctorsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection         from "@/components/home/CTASection";
import NewsletterSection  from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Bright Smile Dental Clinic | Premium Dental Care in Lahore",
  description:
    "Lahore's most trusted dental practice. Teeth whitening, implants, orthodontics, cosmetic dentistry and more — by Dr. Ayesha Khan and her specialist team.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <DoctorsPreview />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
}