"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CalendarCheck, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { staggerContainer, slideUp, slideInRight } from "@/lib/animations";
import { CLINIC, STATS } from "@/lib/constants";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const heroBg = isDark
    ? "linear-gradient(150deg, #0C1A2E 0%, #0F1F3D 55%, #0C1E2E 100%)"
    : "linear-gradient(150deg, #F0F9FF 0%, #EFF6FF 55%, #F0FDFA 100%)";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: heroBg }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full
                   opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full
                   opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #14B8A6 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-screen lg:py-32">

          {/* ── Left: Copy ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={slideUp}>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                           border text-sm font-medium mb-8 w-fit"
                style={{
                  background:  "var(--bg)",
                  borderColor: "var(--border)",
                  color:       "var(--text-secondary)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                Now Accepting New Patients in Lahore
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={slideUp}
              className="font-display font-bold leading-[1.08] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
                color:    "var(--text)",
              }}
            >
              Your Smile
              <br />
              <span className="text-gradient-primary">Deserves</span>
              <br />
              a Specialist.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={slideUp}
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Lahore&apos;s most trusted dental practice. From a routine clean
              to a complete smile transformation — expert care delivered with
              warmth, precision, and zero judgment.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={slideUp} className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl
                           text-base font-semibold text-white transition-all duration-200
                           hover:opacity-90 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
                  boxShadow:  "0 8px 32px 0 rgba(14,165,233,0.35)",
                }}
              >
                <CalendarCheck size={20} />
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl
                           text-base font-semibold border-2 transition-all duration-200
                           hover:bg-primary-500/10"
                style={{
                  borderColor: "var(--border)",
                  color:       "var(--text)",
                  background:  "var(--bg)",
                }}
              >
                <Phone size={18} className="text-primary-500" />
                {CLINIC.phone}
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div variants={slideUp} className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-1 text-sm font-semibold" style={{ color: "var(--text)" }}>
                    5.0
                  </span>
                </div>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  From 500+ verified reviews
                </span>
              </div>

              <div className="w-px h-10 hidden sm:block" style={{ background: "var(--border)" }} />

              {STATS.slice(0, 2).map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-xl font-bold font-display" style={{ color: "var(--text)" }}>
                    {stat.value}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2.5rem]
                         overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=960&q=85"
                alt="Patient receiving premium dental care at Bright Smile Dental Clinic"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(14,165,233,0.15) 100%)",
                }}
              />
            </motion.div>

            {/* Floating card — doctor */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -left-8 top-1/4 rounded-2xl p-4 shadow-card-hover
                         border flex items-center gap-3 min-w-[200px]"
              style={{
                background:  "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80"
                  alt="Dr. Ayesha Khan"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  Dr. Ayesha Khan
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Lead Orthodontist
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-green-500 font-medium">Available today</span>
                </div>
              </div>
            </motion.div>

            {/* Floating card — rating */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -right-6 bottom-1/4 rounded-2xl p-4
                         shadow-card-hover border min-w-[160px]"
              style={{
                background:  "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0EA5E9, #2563EB)" }}
                >
                  <Star size={14} className="text-white fill-white" />
                </div>
                <span className="text-xl font-bold font-display" style={{ color: "var(--text)" }}>
                  4.97
                </span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Average patient rating
              </p>
              <div className="flex -space-x-1.5 mt-2">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1517841905240-472988babdf9",
                  "photo-1535713875002-d1d0cf377fde",
                ].map((id) => (
                  <div
                    key={id}
                    className="w-6 h-6 rounded-full border-2 overflow-hidden"
                    style={{ borderColor: "var(--bg)" }}
                  >
                    <Image
                      src={`https://images.unsplash.com/${id}?w=48&q=70`}
                      alt="Patient"
                      width={24}
                      height={24}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div
                  className="w-6 h-6 rounded-full border-2 flex items-center
                             justify-center text-[8px] font-bold text-white"
                  style={{ background: "#0EA5E9", borderColor: "var(--bg)" }}
                >
                  +5
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${isDark ? "#0C1222" : "#ffffff"})`,
        }}
      />
    </section>
  );
}