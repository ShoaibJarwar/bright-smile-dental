import type { Metadata } from "next";
import { notFound }  from "next/navigation";
import Image         from "next/image";
import Link          from "next/link";
import {
  Clock, CheckCircle2, ArrowRight, CalendarCheck,
} from "lucide-react";
import { services }  from "@/data/services";
import PageHero      from "@/components/shared/PageHero";
import CTASection    from "@/components/home/CTASection";
import ServiceCard   from "@/components/services/ServiceCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        label="Our Services"
        title={service.title}
        description={service.shortDescription}
        size="sm"
        breadcrumbs={[
          { label: "Home",     href: "/"         },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── Main content ── */}
            <div className="lg:col-span-2 space-y-10">
              {/* Hero image */}
              <div className="relative h-80 rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description */}
              <div>
                <h2
                  className="font-display font-bold text-2xl mb-4"
                  style={{ color: "var(--text)" }}
                >
                  About This Treatment
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2
                  className="font-display font-bold text-2xl mb-6"
                  style={{ color: "var(--text)" }}
                >
                  What You Can Expect
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-3 p-4 rounded-2xl border"
                      style={{
                        background: "var(--bg-surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        className="text-primary-500 shrink-0 mt-0.5"
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text)" }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Quick info card */}
              <div
                className="rounded-3xl border p-6 space-y-5"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3
                  className="font-semibold text-base"
                  style={{ color: "var(--text)" }}
                >
                  Treatment Details
                </h3>

                {service.duration && (
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "#EFF6FF" }}
                    >
                      <Clock size={16} className="text-primary-500" />
                    </div>
                    <div>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Duration
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {service.duration}
                      </p>
                    </div>
                  </div>
                )}

                {service.price && (
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "#F0FDFA" }}
                    >
                      <span className="text-accent-600 font-bold text-sm">₨</span>
                    </div>
                    <div>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Pricing
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {service.price}
                      </p>
                    </div>
                  </div>
                )}

                <Link
                  href="/appointment"
                  className="flex items-center justify-center gap-2 w-full py-3.5
                             rounded-2xl text-sm font-semibold text-white
                             transition-opacity hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
                  }}
                >
                  <CalendarCheck size={16} />
                  Book This Treatment
                </Link>

                <p
                  className="text-xs text-center"
                  style={{ color: "var(--text-muted)" }}
                >
                  Free consultation included with every booking
                </p>
              </div>

              {/* All services */}
              <div
                className="rounded-3xl border p-6"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3
                  className="font-semibold text-base mb-4"
                  style={{ color: "var(--text)" }}
                >
                  All Services
                </h3>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between py-2 px-3 rounded-xl
                                   text-sm transition-colors hover:bg-primary-50
                                   hover:text-primary-600"
                        style={{
                          color:
                            s.slug === slug
                              ? "#0EA5E9"
                              : "var(--text-secondary)",
                          background:
                            s.slug === slug ? "#EFF6FF" : "transparent",
                          fontWeight: s.slug === slug ? 600 : 400,
                        }}
                      >
                        {s.title}
                        <ArrowRight size={13} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Related services ── */}
          <div className="mt-20">
            <h2
              className="font-display font-bold text-2xl mb-8"
              style={{ color: "var(--text)" }}
            >
              You May Also Be Interested In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}