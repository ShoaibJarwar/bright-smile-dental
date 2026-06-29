"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, slideUp } from "@/lib/animations";
import { doctors } from "@/data/doctors";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function DoctorsPreview() {
  return (
    <section className="section-py" style={{ background: "var(--bg-surface)" }}>
      <div className="container-custom">
        <AnimatedSection className="mb-14">
          <SectionHeading
            label="Meet the Team"
            title="Specialists Who Put"
            titleGradient="Your Comfort First"
            description="Board-certified specialists with international training and a shared commitment to pain-free, precision dentistry."
            align="center"
          />
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={slideUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-3xl overflow-hidden border flex flex-col"
              style={{
                background:  "var(--bg)",
                borderColor: "var(--border)",
                boxShadow:   "var(--shadow-card)",
              }}
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-500
                             group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.75) 100%)",
                  }}
                />

                {/* Available pill */}
                {doctor.available && (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1.5
                               px-3 py-1.5 rounded-full text-xs font-semibold
                               text-white backdrop-blur-sm"
                    style={{ background: "rgba(20,184,166,0.85)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Accepting patients
                  </div>
                )}

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display font-bold text-white text-xl leading-tight">
                    {doctor.name}
                  </p>
                  <p className="text-primary-300 text-sm mt-0.5 font-medium">
                    {doctor.title}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Specialization badge */}
                <div
                  className="inline-flex items-center px-3 py-1 rounded-lg
                             text-xs font-medium mb-3 w-fit"
                  style={{
                    background: "var(--bg-surface-2)",
                    color:      "var(--text-muted)",
                  }}
                >
                  {doctor.specialization} · {doctor.experience}
                </div>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1 line-clamp-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  {doctor.bio}
                </p>

                {/* Expertise tags — theme-safe */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {doctor.expertise.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1 text-xs px-2.5 py-1
                                 rounded-lg font-medium"
                      style={{
                        background: "rgba(37,99,235,0.12)",
                        color:      "#60A5FA",
                      }}
                    >
                      <CheckCircle2 size={10} />
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href="/appointment"
                  className="block w-full text-center py-3 rounded-xl text-sm
                             font-semibold border-2 transition-all duration-200
                             hover:bg-primary-500 hover:text-white
                             hover:border-primary-500 mt-auto"
                  style={{
                    borderColor: "var(--border)",
                    color:       "var(--text)",
                  }}
                >
                  Book with {doctor.name.split(" ")[1]}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold
                       text-primary-500 hover:text-primary-400 transition-colors group"
          >
            View full team profiles
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}