"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BadgeIndianRupee } from "lucide-react";
import { staggerContainer, slideUp } from "@/lib/animations";
import { featuredServices } from "@/data/services";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ServicesPreview() {
  return (
    <section className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container-custom">
        {/* Heading */}
        <AnimatedSection className="mb-14">
          <SectionHeading
            label="What We Offer"
            title="Treatments Crafted for"
            titleGradient="Every Smile"
            description="From a first-time clean to a full-smile transformation — every treatment is planned with precision and delivered with care."
            align="center"
          />
        </AnimatedSection>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={slideUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-3xl overflow-hidden border
                         flex flex-col bg-white"
              style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500
                             group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)",
                  }}
                />
                {/* Price badge */}
                {service.price && (
                  <div
                    className="absolute bottom-3 left-3 flex items-center gap-1.5
                               px-3 py-1.5 rounded-xl backdrop-blur-sm
                               text-white text-xs font-semibold"
                    style={{ background: "rgba(14,165,233,0.85)" }}
                  >
                    <BadgeIndianRupee size={12} />
                    {service.price}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="font-display font-bold text-xl leading-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {service.title}
                  </h3>
                  {service.duration && (
                    <div
                      className="flex items-center gap-1 shrink-0 text-xs font-medium
                                 px-2.5 py-1 rounded-lg"
                      style={{
                        background: "var(--bg-surface)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <Clock size={11} />
                      {service.duration.split("–")[0]}
                    </div>
                  )}
                </div>

                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.shortDescription}
                </p>

                {/* Benefits */}
                <ul className="space-y-1.5 mb-6">
                  {service.benefits.slice(0, 2).map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs"
                        style={{ color: "var(--text-secondary)" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#0EA5E9" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold
                             text-primary-500 hover:text-primary-700 transition-colors
                             group/link mt-auto"
                >
                  Learn more
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <AnimatedSection className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl
                       border-2 text-sm font-semibold transition-all duration-200
                       hover:bg-primary-500 hover:text-white hover:border-primary-500"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}