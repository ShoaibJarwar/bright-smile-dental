"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { staggerContainer, scaleIn } from "@/lib/animations";
import type { GalleryItem } from "@/types";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold
                       transition-all duration-200 cursor-pointer"
            style={{
              background:
                activeCategory === cat
                  ? "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)"
                  : "var(--bg-surface)",
              color: activeCategory === cat ? "white" : "var(--text-muted)",
              border: `1px solid ${activeCategory === cat ? "transparent" : "var(--border)"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              layout
              className="relative group break-inside-avoid rounded-2xl
                         overflow-hidden cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full object-cover transition-transform
                           duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition-opacity
                           duration-300"
                style={{
                  background: "rgba(14,165,233,0.5)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/90 flex
                                items-center justify-center shadow-lg">
                  <ZoomIn size={20} className="text-primary-600" />
                </div>
              </div>
              {/* Category pill */}
              <div
                className="absolute bottom-3 left-3 px-3 py-1 rounded-lg
                           text-xs font-semibold text-white backdrop-blur-sm
                           opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(14,165,233,0.85)" }}
              >
                {item.category}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1,   opacity: 1 }}
              exit={{    scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={lightbox.width}
                height={lightbox.height}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-xl
                           bg-white flex items-center justify-center shadow-lg
                           hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X size={18} className="text-slate-700" />
              </button>
              <p className="text-white/70 text-sm text-center mt-4">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}