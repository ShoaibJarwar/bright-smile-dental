"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { slideUp } from "@/lib/animations";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      variants={slideUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl overflow-hidden border bg-white flex flex-col"
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
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        {service.price && (
          <div
            className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl
                       text-white text-xs font-semibold backdrop-blur-sm"
            style={{ background: "rgba(14,165,233,0.85)" }}
          >
            {service.price}
          </div>
        )}
        {service.featured && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-lg
                       text-white text-xs font-bold backdrop-blur-sm"
            style={{ background: "rgba(20,184,166,0.85)" }}
          >
            Popular
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

        <ul className="space-y-1.5 mb-6">
          {service.benefits.slice(0, 2).map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
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
  );
}