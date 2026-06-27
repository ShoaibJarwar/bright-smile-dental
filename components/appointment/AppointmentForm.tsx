"use client";

import { useState } from "react";
import { motion }   from "framer-motion";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/animations";
import { doctors }  from "@/data/doctors";
import { services } from "@/data/services";

interface FormState {
  name:      string;
  email:     string;
  phone:     string;
  doctor:    string;
  service:   string;
  date:      string;
  time:      string;
  notes:     string;
  firstVisit: string;
}

const INITIAL: FormState = {
  name: "", email: "", phone: "", doctor: "",
  service: "", date: "", time: "", notes: "", firstVisit: "yes",
};

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

export default function AppointmentForm() {
  const [form,      setForm]      = useState<FormState>(INITIAL);
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [step,      setStep]      = useState(1);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-2xl border text-sm transition-all duration-200 " +
    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent";

  const inputStyle = {
    background:  "var(--bg-surface)",
    borderColor: "var(--border)",
    color:       "var(--text)",
  };

  // Get today's date as min for the date picker
  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1   }}
        className="flex flex-col items-center gap-5 py-16 text-center"
      >
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0EA5E9, #2563EB)",
          }}
        >
          <CheckCircle2 size={40} className="text-white" />
        </div>
        <h3
          className="font-display font-bold text-3xl"
          style={{ color: "var(--text)" }}
        >
          Appointment Requested!
        </h3>
        <p
          className="text-base max-w-md leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Thank you, <strong>{form.name.split(" ")[0]}</strong>. We have
          received your request and will confirm your appointment within 2
          hours via phone or email.
        </p>
        <div
          className="mt-2 p-5 rounded-2xl border text-left w-full max-w-sm space-y-3"
          style={{
            background:  "var(--bg-surface)",
            borderColor: "var(--border)",
          }}
        >
          {[
            { label: "Service",  value: form.service || "To be discussed"  },
            { label: "Doctor",   value: form.doctor  || "First available"  },
            { label: "Date",     value: form.date    || "To be confirmed"  },
            { label: "Time",     value: form.time    || "To be confirmed"  },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between text-sm">
              <span style={{ color: "var(--text-muted)" }}>{label}</span>
              <span className="font-medium" style={{ color: "var(--text)" }}>
                {value}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={() => { setForm(INITIAL); setSubmitted(false); setStep(1); }}
          className="px-6 py-3 rounded-xl text-sm font-semibold
                     border-2 border-primary-200 text-primary-500
                     hover:bg-primary-50 transition-colors cursor-pointer"
        >
          Book Another Appointment
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
      className="space-y-6"
    >
      {/* Step indicators */}
      <motion.div variants={slideUp} className="flex items-center gap-3 mb-8">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => s < step && setStep(s)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center
                           text-sm font-bold transition-all duration-200"
                style={{
                  background:
                    step >= s
                      ? "linear-gradient(135deg, #0EA5E9, #2563EB)"
                      : "var(--bg-surface)",
                  color: step >= s ? "white" : "var(--text-muted)",
                  border: `1px solid ${step >= s ? "transparent" : "var(--border)"}`,
                }}
              >
                {s}
              </div>
              <span
                className="text-sm font-medium hidden sm:block"
                style={{
                  color: step >= s ? "var(--text)" : "var(--text-muted)",
                }}
              >
                {s === 1 ? "Your Details" : "Appointment Preferences"}
              </span>
            </button>
            {s < 2 && (
              <div
                className="flex-1 h-px w-12"
                style={{
                  background: step > s ? "#0EA5E9" : "var(--border)",
                }}
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* Step 1 — Personal details */}
      {step === 1 && (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0  }}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
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
                placeholder="Bilal Ahmed"
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
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+92 300 0000000"
                required
                className={inputClass}
                style={inputStyle}
              />
            </div>
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

          <div>
            <p
              className="block text-sm font-medium mb-3"
              style={{ color: "var(--text)" }}
            >
              Is this your first visit?
            </p>
            <div className="flex gap-4">
              {["yes", "no"].map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="firstVisit"
                    value={val}
                    checked={form.firstVisit === val}
                    onChange={set("firstVisit")}
                    className="w-4 h-4 accent-primary-500"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {val === "yes" ? "Yes, first time" : "No, returning patient"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!form.name || !form.phone || !form.email}
            className="w-full py-4 rounded-2xl text-sm font-semibold text-white
                       transition-all duration-200 hover:opacity-90
                       disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
            }}
          >
            Next — Choose Appointment
          </button>
        </motion.div>
      )}

      {/* Step 2 — Appointment preferences */}
      {step === 2 && (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0  }}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text)" }}
              >
                Preferred Doctor
              </label>
              <select
                value={form.doctor}
                onChange={set("doctor")}
                className={inputClass}
                style={inputStyle}
              >
                <option value="">No preference</option>
                {doctors.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name} — {d.specialization}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text)" }}
              >
                Treatment / Concern
              </label>
              <select
                value={form.service}
                onChange={set("service")}
                className={inputClass}
                style={inputStyle}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Check-up">General Check-up</option>
                <option value="Emergency">Emergency / Toothache</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--text)" }}
              >
                Preferred Date <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                value={form.date}
                onChange={set("date")}
                min={today}
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
                Preferred Time
              </label>
              <select
                value={form.time}
                onChange={set("time")}
                className={inputClass}
                style={inputStyle}
              >
                <option value="">Any time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--text)" }}
            >
              Additional Notes
            </label>
            <textarea
              value={form.notes}
              onChange={set("notes")}
              placeholder="Any concerns, allergies, or information we should know…"
              rows={4}
              className={inputClass + " resize-none"}
              style={inputStyle}
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-4 rounded-2xl text-sm font-semibold border-2
                         transition-colors hover:bg-slate-50 cursor-pointer"
              style={{
                borderColor: "var(--border)",
                color:       "var(--text)",
              }}
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading || !form.date}
              className="flex-1 inline-flex items-center justify-center gap-2.5
                         py-4 rounded-2xl text-sm font-semibold text-white
                         transition-all hover:opacity-90
                         disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
                boxShadow:  "0 8px 32px 0 rgba(14,165,233,0.3)",
              }}
            >
              <CalendarCheck size={17} />
              {loading ? "Submitting…" : "Confirm Appointment Request"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
}