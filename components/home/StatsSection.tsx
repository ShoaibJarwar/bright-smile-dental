"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
      }}
    >
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="flex flex-col items-center text-center px-4"
            >
              <span
                className="font-display font-bold text-white mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-sm font-medium text-primary-100 leading-snug">
                {stat.label}
              </span>
              {i < STATS.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2
                             w-px h-12 bg-white/20"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}