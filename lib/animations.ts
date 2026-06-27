import type { Variants } from "framer-motion";

/** Fade in from transparent */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Slide up + fade in */
export const slideUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Slide down + fade in */
export const slideDown: Variants = {
  hidden:  { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/** Slide in from left + fade in */
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/** Slide in from right + fade in */
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/** Scale in + fade in */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Stagger container — wraps children that each animate individually */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren:  0.1,
      delayChildren:    0.05,
    },
  },
};

/** Faster stagger for dense grids */
export const staggerFast: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren:   0.02,
    },
  },
};

/** Card hover lift effect */
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.04), 0 4px 16px 0 rgba(14,165,233,0.06)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  hover: {
    y: -6,
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.06), 0 16px 40px 0 rgba(14,165,233,0.14)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

/** Page transition — used with AnimatePresence */
export const pageTransition: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

/** Number counter animation helper */
export const counterVariant: Variants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};