"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import Logo from "@/components/shared/Logo";
import { CLINIC } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({
  open,
  onClose,
  pathname,
}: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0      }}
            exit={{    x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-50 h-full w-[300px]
                       flex flex-col shadow-2xl overflow-y-auto"
            style={{ background: "var(--bg)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-5 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <Logo size="sm" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-9 h-9 rounded-xl flex items-center justify-center
                           transition-colors hover:bg-slate-100 cursor-pointer"
              >
                <X size={18} style={{ color: "var(--text-muted)" }} />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpanded(
                            expanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-3
                                   rounded-xl font-medium text-sm transition-colors cursor-pointer
                                   hover:bg-primary-50 hover:text-primary-600"
                        style={{ color: "var(--text)" }}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200",
                            expanded === item.label && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {expanded === item.label && (
                          <motion.div
                            initial={{ height: 0,      opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{    height: 0,      opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-1 pb-2 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className={cn(
                                    "block px-3 py-2.5 rounded-lg text-sm transition-colors",
                                    pathname === child.href
                                      ? "bg-primary-50 text-primary-600 font-medium"
                                      : "hover:bg-slate-50 hover:text-primary-600"
                                  )}
                                  style={{
                                    color:
                                      pathname === child.href
                                        ? undefined
                                        : "var(--text-muted)",
                                  }}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block px-3 py-3 rounded-xl text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-primary-50 text-primary-600"
                          : "hover:bg-slate-50 hover:text-primary-600"
                      )}
                      style={{
                        color:
                          pathname === item.href ? undefined : "var(--text)",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer CTA */}
            <div className="p-4 border-t" style={{ borderColor: "var(--border)" }}>
              <Link
                href="/appointment"
                onClick={onClose}
                className="block w-full text-center py-3.5 rounded-xl
                           text-sm font-semibold text-white
                           transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
                }}
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${CLINIC.phone}`}
                className="mt-3 flex items-center justify-center gap-2 py-3
                           text-sm font-medium rounded-xl transition-colors
                           hover:bg-slate-50 cursor-pointer"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone size={15} />
                {CLINIC.phone}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}