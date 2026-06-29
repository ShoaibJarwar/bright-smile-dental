"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems } from "@/data/navigation";
import Logo from "@/components/shared/Logo";
import DarkModeToggle from "@/components/shared/DarkModeToggle";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";
import { CLINIC } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown,   setDropdown]   = useState<string | null>(null);
  const [mounted,    setMounted]    = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isDark = mounted && resolvedTheme === "dark";

  const scrolledBg = isDark
    ? "rgba(12,18,34,0.92)"
    : "rgba(255,255,255,0.92)";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "py-3 backdrop-blur-md" : "py-5"
        )}
        style={{
          background: scrolled ? scrolledBg : "transparent",
          boxShadow: scrolled ? "var(--shadow-nav)" : "none",
        }}
      >
        <div className="container-custom flex items-center justify-between gap-4">

          <Logo size="md" />

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setDropdown(
                          dropdown === item.label ? null : item.label
                        )
                      }
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium",
                        "transition-colors duration-150 cursor-pointer",
                        pathname.startsWith(item.href) && item.href !== "/"
                          ? "text-primary-500 bg-primary-50/20"
                          : "hover:text-primary-500"
                      )}
                      style={{
                        color:
                          pathname.startsWith(item.href) && item.href !== "/"
                            ? undefined
                            : "var(--text-secondary)",
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          dropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1    }}
                          exit={{    opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-56
                                     rounded-2xl border shadow-card-hover overflow-hidden"
                          style={{
                            background:  "var(--bg)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setDropdown(null)}
                                className={cn(
                                  "block px-3 py-2.5 rounded-xl text-sm transition-colors",
                                  pathname === child.href
                                    ? "bg-primary-500/10 text-primary-500 font-medium"
                                    : "hover:bg-primary-500/10 hover:text-primary-500"
                                )}
                                style={{
                                  color:
                                    pathname === child.href
                                      ? undefined
                                      : "var(--text-secondary)",
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
                    className={cn(
                      "block px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-150",
                      pathname === item.href
                        ? "text-primary-500 bg-primary-500/10"
                        : "hover:text-primary-500 hover:bg-primary-500/10"
                    )}
                    style={{
                      color:
                        pathname === item.href
                          ? undefined
                          : "var(--text-secondary)",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${CLINIC.phone}`}
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-xl
                         text-sm font-medium transition-colors
                         hover:bg-primary-500/10 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
            >
              <Phone size={15} className="text-primary-500" />
              {CLINIC.phone}
            </a>

            <DarkModeToggle />

            <Link
              href="/appointment"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-xl
                         text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
                boxShadow:  "0 4px 14px 0 rgba(14,165,233,0.35)",
              }}
            >
              Book Appointment
            </Link>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center
                         border transition-colors cursor-pointer hover:bg-primary-500/10"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              <Menu size={18} />
            </motion.button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}