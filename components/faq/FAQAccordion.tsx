"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/types";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = open === faq.id;
        return (
          <div
            key={faq.id}
            className="rounded-2xl border overflow-hidden transition-all duration-200"
            style={{
              borderColor: isOpen ? "#0EA5E9" : "var(--border)",
              background: "var(--bg)",
              boxShadow: isOpen ? "0 0 0 1px #0EA5E930" : "none",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between gap-4
                         px-6 py-5 text-left cursor-pointer"
            >
              <span
                className="font-semibold text-base leading-snug"
                style={{ color: "var(--text)" }}
              >
                {faq.question}
              </span>
              <span
                className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center
                           transition-colors duration-200"
                style={{
                  background: isOpen ? "#0EA5E9" : "var(--bg-surface)",
                  color: isOpen ? "white" : "var(--text-muted)",
                }}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0,      opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{    height: 0,      opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className="px-6 pb-6 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}