import type { Metadata } from "next";
import { motion } from "framer-motion";
import PageHero     from "@/components/shared/PageHero";
import ServiceCard  from "@/components/services/ServiceCard";
import CTASection   from "@/components/home/CTASection";
import { services } from "@/data/services";
import { staggerContainer } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the full range of dental treatments at Bright Smile — from professional cleaning to full-arch dental implants.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Treatments"
        title="Every Service Your"
        titleGradient="Smile Could Need"
        description="Six specialist treatment areas under one roof. Each one delivered by a board-certified specialist using the latest clinical technology."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}