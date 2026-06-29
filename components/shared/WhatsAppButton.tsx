"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function WhatsAppButton() {
  const [visible,  setVisible]  = useState(false);
  const [tooltip,  setTooltip]  = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setTooltip(true), 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const url = `https://wa.me/${CLINIC.whatsapp.number}?text=${encodeURIComponent(
    CLINIC.whatsapp.message
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 16, scale: 0.9 }}
                animate={{ opacity: 1, x: 0,  scale: 1   }}
                exit={{    opacity: 0, x: 16, scale: 0.9 }}
                className="relative flex items-center gap-2 rounded-2xl
                           shadow-card-hover px-4 py-3 border max-w-[220px]"
                style={{
                  background:  "var(--bg)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Dismiss button */}
                <button
                  onClick={() => setTooltip(false)}
                  aria-label="Dismiss"
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full
                             flex items-center justify-center transition-colors cursor-pointer"
                  style={{
                    background: "var(--bg-surface-2)",
                    color:      "var(--text-muted)",
                  }}
                >
                  <X size={10} />
                </button>

                <div className="w-2 h-2 rounded-full bg-green-400 shrink-0 animate-pulse" />

                <p
                  className="text-xs font-medium leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  Chat with us on WhatsApp!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{    scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1  }}
            whileTap={{  scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center
                       shadow-cta text-white cursor-pointer"
            style={{ background: "#25D366" }}
          >
            <span
              className="absolute inset-0 rounded-2xl animate-ping opacity-30"
              style={{ background: "#25D366" }}
            />
            <MessageCircle size={26} fill="white" strokeWidth={0} />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}