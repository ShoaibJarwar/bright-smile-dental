"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import DoctorCard from "@/components/doctors/DoctorCard";
import type { Doctor } from "@/types";

interface DoctorsListProps {
  doctors: Doctor[];
}

export default function DoctorsList({ doctors }: DoctorsListProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="space-y-8"
    >
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} layout="list" />
      ))}
    </motion.div>
  );
}