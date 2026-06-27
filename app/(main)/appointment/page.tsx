import type { Metadata } from "next";
import { CheckCircle2 }    from "lucide-react";
import PageHero            from "@/components/shared/PageHero";
import AppointmentForm     from "@/components/appointment/AppointmentForm";
import { CLINIC }          from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your appointment at Bright Smile Dental Clinic in Lahore. Free consultation available. Same-week appointments for new patients.",
};

const whyBook = [
  "Free initial consultation for all new patients",
  "Same-week appointments available",
  "Confirmation within 2 hours of request",
  "Flexible morning and afternoon slots",
  "0% payment plans on treatments over PKR 15,000",
  "No referral required",
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        label="Book Appointment"
        title="Reserve Your"
        titleGradient="Consultation"
        description="Complete the form below and we will confirm your appointment within 2 hours. Your first consultation is free."
        breadcrumbs={[
          { label: "Home",        href: "/"           },
          { label: "Appointment" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* ── Why book sidebar ── */}
            <aside className="lg:col-span-2 space-y-6">
              <div
                className="rounded-3xl border p-7"
                style={{
                  background:  "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3
                  className="font-display font-bold text-xl mb-6"
                  style={{ color: "var(--text)" }}
                >
                  Why Book With Us
                </h3>
                <ul className="space-y-4">
                  {whyBook.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-primary-500 shrink-0 mt-0.5"
                      />
                      <span
                        className="text-sm leading-snug"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency note */}
              <div
                className="rounded-3xl p-6 border-l-4"
                style={{
                  background:  "#FFF7ED",
                  borderColor: "#F97316",
                }}
              >
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: "#C2410C" }}
                >
                  Dental Emergency?
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#9A3412" }}>
                  Call us directly for same-day emergency care.
                  We keep slots available every day for urgent cases.
                </p>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center gap-2 mt-3 font-bold text-sm"
                  style={{ color: "#C2410C" }}
                >
                  {CLINIC.phone}
                </a>
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
                  Request an Appointment
                </h2>
                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--text-muted)" }}
                >
                  Fill in your details and we will call to confirm within 2 hours.
                </p>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}