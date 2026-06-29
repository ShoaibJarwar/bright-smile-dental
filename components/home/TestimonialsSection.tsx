"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { formatDate } from "@/lib/utils";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const current = testimonials[active];

  return (
    <section className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container-custom">
        <AnimatedSection className="mb-14">
          <SectionHeading
            label="Patient Stories"
            title="Real People,"
            titleGradient="Real Results"
            description="Over 8,500 patients have trusted us with their smiles. Here's what a handful of them say."
            align="center"
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div
            className="relative rounded-3xl p-8 lg:p-12 border overflow-hidden"
            style={{
              background:  "var(--bg-surface)",
              borderColor: "var(--border)",
            }}
          >
            {/* Decorative quote */}
            <div className="absolute top-6 right-8 opacity-10 text-primary-500">
              <Quote size={80} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16  }}
                animate={{ opacity: 1, y: 0   }}
                exit={{    opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review */}
                <p
                  className="text-lg lg:text-xl leading-relaxed mb-8 italic relative z-10"
                  style={{ color: "var(--text)" }}
                >
                  &ldquo;{current.review}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-base" style={{ color: "var(--text)" }}>
                      {current.name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {current.location}
                    </p>
                  </div>
                  <span
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                    style={{ background: "#1E3A8A22", color: "#60A5FA" }}
                  >
                    {current.service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="transition-all duration-200 rounded-full cursor-pointer"
                  style={{
                    width:      i === active ? "24px" : "8px",
                    height:     "8px",
                    background: i === active ? "#0EA5E9" : "var(--border)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              {[
                { fn: prev, label: "Previous", Icon: ChevronLeft  },
                { fn: next, label: "Next",     Icon: ChevronRight },
              ].map(({ fn, label, Icon }) => (
                <button
                  key={label}
                  onClick={fn}
                  aria-label={`${label} testimonial`}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center
                             transition-colors hover:bg-primary-500/10
                             hover:border-primary-500/30 cursor-pointer"
                  style={{
                    borderColor: "var(--border)",
                    color:       "var(--text-muted)",
                  }}
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}