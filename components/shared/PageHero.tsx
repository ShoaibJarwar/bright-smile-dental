"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PageHero({
  label,
  title,
  titleGradient,
  description,
  breadcrumbs,
  className,
  size = "md",
}: PageHeroProps) {
  const paddingMap = {
    sm: "pt-36 pb-16",
    md: "pt-40 pb-20",
    lg: "pt-44 pb-28",
  };

  return (
    <section
      className={cn("relative overflow-hidden", paddingMap[size], className)}
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #0EA5E9 0%, #2563EB 50%, #14B8A6 100%)",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Decorative blobs — use fixed brand colors so they show on both themes */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #14B8A6 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              variants={slideUp}
              className="flex items-center gap-2 mb-5 text-sm"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span style={{ color: "var(--text-muted)" }}>/</span>
                  )}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-primary-500 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span
                      className="font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {/* Label */}
          {label && (
            <motion.span variants={slideUp} className="section-label">
              {label}
            </motion.span>
          )}

          {/* Title */}
          <motion.h1
            variants={slideUp}
            className="font-display font-bold leading-tight tracking-tight mt-1"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              color:    "var(--text)",
            }}
          >
            {title}{" "}
            {titleGradient && (
              <span className="text-gradient-primary">{titleGradient}</span>
            )}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={slideUp}
              className="mt-5 text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--text-muted)" }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}