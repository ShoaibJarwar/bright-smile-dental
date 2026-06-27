"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";

const milestones = [
  { year: "2012", event: "Clinic founded by Dr. Ayesha Khan in Gulberg III" },
  { year: "2015", event: "Expanded to a full specialist team of five doctors" },
  { year: "2018", event: "Introduced digital smile design and 3D scanning" },
  { year: "2020", event: "Surpassed 5,000 successful implant procedures" },
  { year: "2023", event: "Launched clear aligner programme with in-house lab" },
  { year: "2025", event: "8,500+ happy patients and growing" },
];

const values = [
  {
    title: "Patient First",
    description:
      "Every clinical decision starts and ends with what is genuinely best for the patient — not what is most convenient or most profitable.",
  },
  {
    title: "Precision Over Speed",
    description:
      "We take the time to do things right. From diagnosis to delivery, we never compromise quality for throughput.",
  },
  {
    title: "Honest Advice",
    description:
      "We tell patients what they need to hear, not what they want to hear. If you do not need treatment, we will tell you that too.",
  },
  {
    title: "Continuous Learning",
    description:
      "Our team attends international conferences and training programmes every year to bring the latest techniques to Lahore.",
  },
];

export default function AboutStory() {
  return (
    <section className="section-py" style={{ background: "var(--bg)" }}>
      <div className="container-custom">

        {/* ── Story ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-24"
        >
          {/* Image */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=85"
                alt="Bright Smile Dental Clinic interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -right-6 -bottom-6 bg-white rounded-2xl p-5
                         shadow-card-hover border"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="font-display font-bold text-4xl"
                style={{ color: "var(--text)" }}
              >
                12+
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                Years serving
                <br />
                Lahore families
              </p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div variants={slideInRight}>
            <SectionHeading
              label="Our Story"
              title="Built on Trust,"
              titleGradient="Grown on Results"
              description="Bright Smile began in 2012 as a single-chair practice with one mission: to make premium dental care accessible to Lahore families without compromising on quality or compassion."
              align="left"
              className="mb-8"
            />
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              What started as Dr. Ayesha Khan's solo practice has grown into a
              12-strong team of specialists covering every field of modern
              dentistry. We invested in digital technology early — 3D scanning,
              digital smile design, rotary endodontics — because we believed
              our patients deserved the same standard of care available in
              London or Dubai, right here in Lahore.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Today, more than 8,500 patients trust us with their smiles. Many
              have been coming for over a decade. That loyalty is the measure
              we are most proud of.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="mb-24">
          <SectionHeading
            label="Our Journey"
            title="Milestones That"
            titleGradient="Define Us"
            align="center"
            className="mb-14"
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "var(--border)" }}
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-6 sm:pl-14 relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-3.5 top-1 w-5 h-5 rounded-full border-2
                               border-primary-500 bg-white hidden sm:flex
                               items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                  </div>

                  <div
                    className="rounded-2xl p-5 flex-1 border"
                    style={{
                      background: "var(--bg-surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-widest text-primary-500"
                    >
                      {m.year}
                    </span>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Values ── */}
        <div>
          <SectionHeading
            label="What We Stand For"
            title="Our Core"
            titleGradient="Values"
            align="center"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <CheckCircle2
                  size={28}
                  className="text-primary-500 mb-4"
                />
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--text)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}