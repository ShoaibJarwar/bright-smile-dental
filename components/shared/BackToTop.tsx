"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0  }}
          exit={{    opacity: 0, y: 16 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{  scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-xl
                     flex items-center justify-center cursor-pointer
                     border border-slate-200 shadow-card
                     transition-colors duration-200
                     bg-white text-primary-500 hover:bg-primary-500 hover:text-white
                     hover:border-primary-500"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}