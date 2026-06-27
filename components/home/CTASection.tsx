"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Phone, ArrowRight } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/animations";
import { CLINIC } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="section-py" style={{ background: "var(--bg-surface)" }}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden px-8 py-16 lg:px-20 lg:py-24 text-center"
          style={{
            background: "linear-gradient(135deg, #0C4A6E 0%, #1E40AF 50%, #0E7490 100%)",
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #14B8A6, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.p
              variants={slideUp}
              className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Ready to Transform Your Smile?
            </motion.p>

            <motion.h2
              variants={slideUp}
              className="font-display font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Your First Consultation
              <br />
              is Completely Free
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="text-primary-200 text-lg leading-relaxed mb-10"
            >
              Meet your specialist, discuss your goals, and receive a
              personalised treatment plan — with no obligation and no pressure.
            </motion.p>

            <motion.div
              variants={slideUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl
                           bg-white text-secondary-700 font-semibold text-base
                           transition-all duration-200 hover:shadow-xl hover:scale-105"
              >
                <CalendarCheck size={20} />
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl
                           border-2 border-white/30 text-white font-semibold text-base
                           transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
              >
                <Phone size={18} />
                {CLINIC.phone}
              </a>
            </motion.div>

            {/* Micro trust signals */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap justify-center gap-6 mt-10"
            >
              {[
                "No booking fee",
                "Same-week appointments",
                "Flexible payment plans",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-primary-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                  {point}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}