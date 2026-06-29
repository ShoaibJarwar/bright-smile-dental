"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/animations";

export default function NewsletterSection() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  return (
    <section className="section-py-sm" style={{ background: "var(--bg-surface)" }}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            variants={slideUp}
            className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #2563EB)" }}
          >
            <Mail size={24} className="text-white" />
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="font-display font-bold text-2xl lg:text-3xl mb-3"
            style={{ color: "var(--text)" }}
          >
            Dental Tips Delivered Monthly
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-base mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Join 2,000+ Lahore residents who receive our monthly guide on oral
            health, treatment spotlights, and exclusive clinic offers.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1   }}
              className="flex items-center justify-center gap-3 py-4"
            >
              <CheckCircle2 size={24} className="text-accent-500" />
              <p className="font-semibold text-lg" style={{ color: "var(--text)" }}>
                You&apos;re on the list — welcome aboard!
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={slideUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-2xl border text-sm
                           focus:outline-none focus:ring-2 focus:ring-primary-500
                           focus:border-transparent transition-all"
                style={{
                  background:  "var(--bg)",
                  borderColor: "var(--border)",
                  color:       "var(--text)",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5
                           rounded-2xl text-sm font-semibold text-white transition-all
                           hover:opacity-90 disabled:opacity-60 cursor-pointer
                           disabled:cursor-not-allowed shrink-0"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
                }}
              >
                {loading ? "Subscribing…" : "Subscribe"}
                {!loading && <ArrowRight size={15} />}
              </button>
            </motion.form>
          )}

          <motion.p
            variants={slideUp}
            className="mt-4 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            No spam, ever. Unsubscribe in one click at any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}