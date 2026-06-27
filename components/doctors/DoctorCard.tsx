"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, CalendarCheck } from "lucide-react";
import { slideUp } from "@/lib/animations";
import type { Doctor } from "@/types";

interface DoctorCardProps {
  doctor: Doctor;
  layout?: "grid" | "list";
}

export default function DoctorCard({
  doctor,
  layout = "grid",
}: DoctorCardProps) {
  if (layout === "list") {
    return (
      <motion.div
        variants={slideUp}
        className="group rounded-3xl overflow-hidden border bg-white
                   flex flex-col sm:flex-row"
        style={{
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Photo */}
        <div className="relative w-full sm:w-56 h-64 sm:h-auto shrink-0 overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover object-top transition-transform duration-500
                       group-hover:scale-105"
          />
          {doctor.available && (
            <div
              className="absolute top-4 left-4 flex items-center gap-1.5
                         px-3 py-1.5 rounded-full text-xs font-semibold
                         text-white backdrop-blur-sm"
              style={{ background: "rgba(20,184,166,0.85)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Accepting patients
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-7">
          <div className="mb-4">
            <h3
              className="font-display font-bold text-2xl"
              style={{ color: "var(--text)" }}
            >
              {doctor.name}
            </h3>
            <p className="text-primary-500 text-sm font-medium mt-0.5">
              {doctor.title}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              {doctor.specialization} · {doctor.experience}
            </p>
          </div>

          <p
            className="text-sm leading-relaxed mb-5 flex-1"
            style={{ color: "var(--text-muted)" }}
          >
            {doctor.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {doctor.expertise.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-1 text-xs px-2.5 py-1
                           rounded-lg font-medium"
                style={{ background: "#EFF6FF", color: "#2563EB" }}
              >
                <CheckCircle2 size={10} />
                {skill}
              </span>
            ))}
          </div>

          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       text-sm font-semibold text-white transition-opacity
                       hover:opacity-90 w-fit"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
            }}
          >
            <CalendarCheck size={15} />
            Book Appointment
          </Link>
        </div>
      </motion.div>
    );
  }

  // Grid layout (same as DoctorsPreview card)
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
              "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.7) 100%)",
          }}
        />
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
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-display font-bold text-white text-xl leading-tight">
            {doctor.name}
          </p>
          <p className="text-primary-300 text-sm mt-0.5 font-medium">
            {doctor.title}
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div
          className="inline-flex items-center px-3 py-1 rounded-lg text-xs
                     font-medium mb-3 w-fit"
          style={{
            background: "var(--bg-surface)",
            color: "var(--text-muted)",
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

        <div className="flex flex-wrap gap-2 mb-5">
          {doctor.expertise.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-1 text-xs px-2.5 py-1
                         rounded-lg font-medium"
              style={{ background: "#EFF6FF", color: "#2563EB" }}
            >
              <CheckCircle2 size={10} />
              {skill}
            </span>
          ))}
        </div>

        <Link
          href="/appointment"
          className="block w-full text-center py-3 rounded-xl text-sm font-semibold
                     border-2 transition-all duration-200 hover:bg-primary-500
                     hover:text-white hover:border-primary-500 mt-auto"
          style={{ borderColor: "var(--border)", color: "var(--text)" }}
        >
          Book with {doctor.name.split(" ")[1]}
        </Link>
      </div>
    </motion.div>
  );
}