import Link from "next/link";
import { Home, ArrowRight, Phone } from "lucide-react";
import { CLINIC } from "@/lib/constants";

const quickLinks = [
  { label: "Book an Appointment", href: "/appointment" },
  { label: "Our Services",        href: "/services"    },
  { label: "Meet the Team",       href: "/doctors"     },
  { label: "Contact Us",          href: "/contact"     },
];

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(150deg, #F0F9FF 0%, #EFF6FF 55%, #F0FDFA 100%)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Big 404 */}
        <div
          className="font-display font-bold mb-4 leading-none select-none"
          style={{
            fontSize: "clamp(6rem, 18vw, 10rem)",
            background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* Tooth icon */}
        <div
          className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0EA5E9, #2563EB)",
            boxShadow: "0 8px 32px 0 rgba(14,165,233,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" width={32} height={32}>
            <path
              d="M12 2C9.5 2 7.5 3.5 6 5.5C4.5 3.5 2 4 2 7C2 10 4 13 5 16C6 19 6.5 22 8 22C9 22 9.5 20 10 18C10.5 16 11 15 12 15C13 15 13.5 16 14 18C14.5 20 15 22 16 22C17.5 22 18 19 19 16C20 13 22 10 22 7C22 4 19.5 3.5 18 5.5C16.5 3.5 14.5 2 12 2Z"
              fill="white"
              opacity="0.95"
            />
          </svg>
        </div>

        <h1
          className="font-display font-bold text-2xl lg:text-3xl mb-3"
          style={{ color: "var(--text)" }}
        >
          Page Not Found
        </h1>
        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          The page you are looking for does not exist or has been moved.
          Here are some helpful links instead.
        </p>

        {/* Quick links */}
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-5 py-4 rounded-2xl
                         border text-sm font-semibold transition-all duration-200
                         hover:bg-primary-50 hover:border-primary-200
                         hover:text-primary-600 group"
              style={{
                background:  "var(--bg)",
                borderColor: "var(--border)",
                color:       "var(--text)",
              }}
            >
              {link.label}
              <ArrowRight
                size={15}
                className="transition-transform duration-200
                           group-hover:translate-x-1 text-primary-400"
              />
            </Link>
          ))}
        </div>

        {/* Back home + phone */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl
                       text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
              boxShadow:  "0 8px 32px 0 rgba(14,165,233,0.3)",
            }}
          >
            <Home size={16} />
            Back to Home
          </Link>
          <a
            href={`tel:${CLINIC.phone}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl
                       border-2 text-sm font-semibold transition-all
                       hover:bg-primary-50 hover:border-primary-200"
            style={{
              borderColor: "var(--border)",
              color:       "var(--text)",
            }}
          >
            <Phone size={16} className="text-primary-500" />
            {CLINIC.phone}
          </a>
        </div>
      </div>
    </div>
  );
}