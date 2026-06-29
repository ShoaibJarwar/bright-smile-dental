import type { Metadata } from "next";
import PageHero       from "@/components/shared/PageHero";
import DoctorsList    from "@/components/doctors/DoctorsList";
import CTASection     from "@/components/home/CTASection";
import SectionHeading from "@/components/shared/SectionHeading";
import { doctors }    from "@/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the specialist team at Bright Smile Dental Clinic — board-certified dentists with international training across orthodontics, implants, and cosmetic dentistry.",
};

const credentials = [
  { value: "15+",  label: "Specialist Dentists"      },
  { value: "FCPS", label: "Board Certification"       },
  { value: "3",    label: "International Fellowships" },
  { value: "100%", label: "Continuing Education"      },
];

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        label="The Team"
        title="Specialists You Can"
        titleGradient="Actually Trust"
        description="Every clinician at Bright Smile holds a recognised specialist qualification and undertakes international continuing education every year."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Doctors" },
        ]}
      />

      {/* Credential bar */}
      <section
        className="py-10 border-b"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((c) => (
              <div key={c.label} className="text-center">
                <p
                  className="font-display font-bold text-3xl mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {c.value}
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors list */}
      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <SectionHeading
            label="Meet the Team"
            title="Your Specialists at"
            titleGradient="Bright Smile"
            description="Each doctor leads their department and is supported by a dedicated clinical assistant. You will see the same face at every appointment."
            align="center"
            className="mb-14"
          />
          <DoctorsList doctors={doctors} />
        </div>
      </section>

      <CTASection />
    </>
  );
}