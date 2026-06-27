import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero    from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { CLINIC }  from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bright Smile Dental Clinic in Lahore. Call, email, or send a message — we respond within one business day.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Location",
    value: CLINIC.address.full,
    href: "https://maps.google.com/?q=Gulberg+III+Lahore+Pakistan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: CLINIC.phone,
    href: `tel:${CLINIC.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CLINIC.email,
    href: `mailto:${CLINIC.email}`,
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: `${CLINIC.hours.weekdays} · ${CLINIC.hours.saturday} · ${CLINIC.hours.sunday}`,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="We Are Here"
        titleGradient="to Help"
        description="Whether you have a question, want to book an appointment, or need emergency advice — reach out and we will respond promptly."
        breadcrumbs={[
          { label: "Home",    href: "/"       },
          { label: "Contact" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── Contact details ── */}
            <aside className="lg:col-span-2 space-y-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-2xl border"
                  style={{
                    background:  "var(--bg-surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "#EFF6FF" }}
                  >
                    <Icon size={18} className="text-primary-500" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium hover:text-primary-500
                                   transition-colors break-words"
                        style={{ color: "var(--text)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium break-words"
                        style={{ color: "var(--text)" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map embed placeholder */}
              <div
                className="h-56 rounded-2xl overflow-hidden border relative"
                style={{ borderColor: "var(--border)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.3!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjAnMzcuMCJF!5e0!3m2!1sen!2spk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bright Smile Dental Clinic Location"
                />
              </div>
            </aside>

            {/* ── Form ── */}
            <div className="lg:col-span-3">
              <div
                className="rounded-3xl border p-8 lg:p-10"
                style={{
                  background:  "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h2
                  className="font-display font-bold text-2xl mb-2"
                  style={{ color: "var(--text)" }}
                >
                  Send Us a Message
                </h2>
                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--text-muted)" }}
                >
                  We reply to every message within one business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}