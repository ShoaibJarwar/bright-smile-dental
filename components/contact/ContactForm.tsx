"use client";

import { useState } from "react";
import { motion }   from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/animations";

interface FormState {
  name:    string;
  email:   string;
  phone:   string;
  subject: string;
  message: string;
}

const INITIAL: FormState = {
  name: "", email: "", phone: "", subject: "", message: "",
};

export default function ContactForm() {
  const [form,      setForm]      = useState<FormState>(INITIAL);
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-2xl border text-sm transition-all duration-200 " +
    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent";

  const inputStyle = {
    background:  "var(--bg-surface)",
    borderColor: "var(--border)",
    color:       "var(--text)",
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1   }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: "#F0FDFA" }}
        >
          <CheckCircle2 size={32} className="text-accent-500" />
        </div>
        <h3
          className="font-display font-bold text-2xl"
          style={{ color: "var(--text)" }}
        >
          Message Received
        </h3>
        <p className="text-base max-w-sm" style={{ color: "var(--text-muted)" }}>
          Thank you for getting in touch. A member of our team will respond within one business day.
        </p>
        <button
          onClick={() => { setForm(INITIAL); setSubmitted(false); }}
          className="mt-4 px-6 py-3 rounded-xl text-sm font-semibold
                     text-primary-500 border-2 border-primary-200
                     hover:bg-primary-50 transition-colors cursor-pointer"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Name + Email */}
      <motion.div variants={slideUp} className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text)" }}
          >
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Ayesha Malik"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text)" }}
          >
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@email.com"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </motion.div>

      {/* Phone + Subject */}
      <motion.div variants={slideUp} className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text)" }}
          >
            Phone Number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+92 300 0000000"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text)" }}
          >
            Subject <span className="text-red-400">*</span>
          </label>
          <select
            value={form.subject}
            onChange={set("subject")}
            required
            className={inputClass}
            style={inputStyle}
          >
            <option value="" disabled>Select a topic</option>
            <option>Book an Appointment</option>
            <option>Treatment Enquiry</option>
            <option>Pricing & Payment Plans</option>
            <option>Emergency Dental Care</option>
            <option>General Question</option>
          </select>
        </div>
      </motion.div>

      {/* Message */}
      <motion.div variants={slideUp}>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--text)" }}
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us how we can help you…"
          required
          rows={5}
          className={inputClass + " resize-none"}
          style={inputStyle}
        />
      </motion.div>

      {/* Submit */}
      <motion.div variants={slideUp}>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl
                     text-sm font-semibold text-white transition-all duration-200
                     hover:opacity-90 disabled:opacity-60 cursor-pointer
                     disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
            boxShadow: "0 8px 32px 0 rgba(14,165,233,0.3)",
          }}
        >
          <Send size={16} />
          {loading ? "Sending…" : "Send Message"}
        </button>
      </motion.div>
    </motion.form>
  );
}