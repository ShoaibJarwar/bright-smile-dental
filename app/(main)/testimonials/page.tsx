import type { Metadata } from "next";
import { Star }        from "lucide-react";
import PageHero        from "@/components/shared/PageHero";
import CTASection      from "@/components/home/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading  from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { formatDate }   from "@/lib/utils";
import { CLINIC }       from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read what real patients say about Bright Smile Dental Clinic in Lahore — honest reviews from our community.",
};

const overallStats = [
  { value: "4.97", label: "Average Rating"      },
  { value: "500+", label: "Verified Reviews"    },
  { value: "99%",  label: "Would Recommend Us"  },
  { value: "8.5K", label: "Patients Treated"    },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Patient Stories"
        title="What Our Patients"
        titleGradient="Say About Us"
        description="Every review below is from a real patient who visited our clinic. We do not edit, cherry-pick, or incentivise reviews."
        breadcrumbs={[
          { label: "Home",         href: "/"            },
          { label: "Testimonials" },
        ]}
      />

      {/* Stats bar */}
      <section
        className="py-10 border-b"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {overallStats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="font-display font-bold text-3xl mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {s.value}
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <AnimatedSection className="mb-14">
            <SectionHeading
              label="Verified Reviews"
              title="Straight from Our"
              titleGradient="Patients"
              align="center"
            />
          </AnimatedSection>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <AnimatedSection
                key={t.id}
                delay={i * 0.06}
                className="break-inside-avoid"
              >
                <div
                  className="rounded-3xl p-7 border"
                  style={{
                    background: "var(--bg-surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star
                        key={si}
                        size={15}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p
                    className="text-sm leading-relaxed mb-6 italic"
                    style={{ color: "var(--text)" }}
                  >
                    &ldquo;{t.review}&rdquo;
                  </p>

                  {/* Footer */}
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--text)" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {t.location}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className="inline-block px-2.5 py-1 rounded-lg
                                   text-xs font-semibold"
                        style={{ background: "#EFF6FF", color: "#2563EB" }}
                      >
                        {t.service}
                      </span>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {formatDate(t.date)}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}