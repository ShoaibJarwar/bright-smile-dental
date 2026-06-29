import type { MetadataRoute } from "next";
import { services }  from "@/data/services";
import { blogPosts } from "@/data/blog";

const BASE = "https://bright-smile-dental-six.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                  priority: 1.0,  changeFrequency: "weekly"  },
    { url: `${BASE}/about`,       priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/services`,    priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/doctors`,     priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/appointment`, priority: 0.9,  changeFrequency: "weekly"  },
    { url: `${BASE}/testimonials`,priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE}/gallery`,     priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE}/blog`,        priority: 0.7,  changeFrequency: "weekly"  },
    { url: `${BASE}/faq`,         priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE}/contact`,     priority: 0.8,  changeFrequency: "monthly" },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url:             `${BASE}/services/${s.slug}`,
    priority:        0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url:             `${BASE}/blog/${p.slug}`,
    priority:        0.6,
    changeFrequency: "monthly" as const,
    lastModified:    new Date(p.publishedAt),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}