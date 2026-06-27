import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Share2 } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { CLINIC } from "@/lib/constants";
import { navItems } from "@/data/navigation";

const socialLinks = [
  {
    label: "Facebook",
    href: CLINIC.social.facebook,
    letter: "f",
  },
  {
    label: "Instagram",
    href: CLINIC.social.instagram,
    letter: "in",
  },
  {
    label: "Twitter",
    href: CLINIC.social.twitter,
    letter: "𝕏",
  },
  {
    label: "YouTube",
    href: CLINIC.social.youtube,
    letter: "yt",
  },
];

const quickLinks = navItems.filter((n) => !n.children).slice(0, 5);

const services = [
  { label: "Teeth Whitening",    href: "/services/teeth-whitening"    },
  { label: "Dental Implants",    href: "/services/dental-implants"    },
  { label: "Orthodontics",       href: "/services/orthodontics"       },
  { label: "Root Canal Therapy", href: "/services/root-canal"         },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Preventive Care",    href: "/services/preventive-care"    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* ── Main grid ── */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Delivering world-class dental care in Lahore since{" "}
              {year - 12}. Your smile is our greatest achievement.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center
                             border text-xs font-bold transition-colors duration-200
                             hover:bg-primary-50 hover:border-primary-200
                             hover:text-primary-500"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                    background: "var(--bg)",
                  }}
                >
                  {social.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--text)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-150 hover:text-primary-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/appointment"
                  className="text-sm transition-colors duration-150 hover:text-primary-500"
                  style={{ color: "var(--text-muted)" }}
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--text)" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors duration-150 hover:text-primary-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--text)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-500 mt-0.5 shrink-0" />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {CLINIC.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-500 shrink-0" />
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="text-sm hover:text-primary-500 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-500 shrink-0" />
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="text-sm hover:text-primary-500 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary-500 mt-0.5 shrink-0" />
                <div
                  className="text-sm space-y-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  <p>{CLINIC.hours.weekdays}</p>
                  <p>{CLINIC.hours.saturday}</p>
                  <p>{CLINIC.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        <div
          className="container-custom py-5 flex flex-col sm:flex-row
                      items-center justify-between gap-3"
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} {CLINIC.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs hover:text-primary-500 transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}