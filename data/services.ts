import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription:
      "Achieve a brilliantly white smile in a single visit with our professional-grade whitening system.",
    fullDescription:
      "Our in-clinic whitening treatment uses a medical-grade hydrogen peroxide gel activated by a precision LED lamp. Results are immediate — most patients leave 6 to 8 shades brighter. Unlike over-the-counter products, our system is calibrated to your enamel thickness, minimising sensitivity while maximising effect.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    benefits: [
      "Up to 8 shades whiter in one session",
      "Zero damage to enamel",
      "Long-lasting results with a take-home kit",
      "Safe for sensitive teeth",
    ],
    price: "Starting from PKR 8,000",
    duration: "60–90 minutes",
    featured: true,
  },
  {
    id: "2",
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "Permanent, natural-looking tooth replacements that feel and function exactly like your own.",
    fullDescription:
      "A titanium post is placed into the jawbone, where it fuses over 3–6 months before a custom ceramic crown is attached. The result is indistinguishable from a natural tooth in both appearance and biting force. We use Nobel Biocare implants — the global gold standard — with a lifetime structural guarantee.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1609207829702-16fc0f0de4cd?w=800&q=80",
    benefits: [
      "Permanent solution — lasts a lifetime",
      "Preserves jawbone density",
      "No removal, no adhesives",
      "Matches adjacent teeth exactly",
    ],
    price: "Starting from PKR 45,000",
    duration: "Two appointments over 3–6 months",
    featured: true,
  },
  {
    id: "3",
    slug: "orthodontics",
    title: "Orthodontics & Braces",
    shortDescription:
      "Straighten your teeth discreetly with clear aligners or precision metal and ceramic braces.",
    fullDescription:
      "We offer three pathways: traditional metal braces for complex cases, tooth-coloured ceramic braces for aesthetics, and clear aligner therapy for mild-to-moderate crowding. Every plan begins with a 3D digital scan — no impressions, no discomfort — and concludes with a custom retainer.",
    icon: "Smile",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80",
    benefits: [
      "Digital 3D treatment planning",
      "Clear aligner option available",
      "Free retainer included",
      "Monthly progress reviews",
    ],
    price: "Starting from PKR 35,000",
    duration: "12–24 months",
    featured: true,
  },
  {
    id: "4",
    slug: "root-canal",
    title: "Root Canal Therapy",
    shortDescription:
      "Save an infected tooth painlessly with our single-visit rotary root canal technique.",
    fullDescription:
      "Modern root canal treatment is nothing like its reputation. Using rotary nickel-titanium files and electronic apex locators, we clean and seal the infected canal in a single appointment under profound local anaesthesia. Most patients report less discomfort than a routine filling.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    benefits: [
      "Typically completed in one visit",
      "Saves your natural tooth",
      "Virtually painless procedure",
      "Followed by a protective crown",
    ],
    price: "Starting from PKR 6,500",
    duration: "60–90 minutes",
    featured: false,
  },
  {
    id: "5",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription:
      "Veneers, bonding, and smile design that transform your appearance with precision artistry.",
    fullDescription:
      "From a single chipped tooth to a complete smile makeover, our cosmetic services combine digital smile design software with hand-crafted porcelain veneers. We preview your result digitally before touching a single tooth — you approve the design first.",
    icon: "Star",
    image: "https://images.unsplash.com/photo-1609207807107-e8b78c4e342e?w=800&q=80",
    benefits: [
      "Digital smile preview before treatment",
      "Ultra-thin porcelain veneers",
      "Minimal tooth preparation required",
      "Natural translucency and texture",
    ],
    price: "Starting from PKR 12,000 per tooth",
    duration: "Two appointments",
    featured: true,
  },
  {
    id: "6",
    slug: "preventive-care",
    title: "Preventive Care",
    shortDescription:
      "Professional cleaning, fluoride, and sealants that protect your smile before problems start.",
    fullDescription:
      "Our hygienists use ultrasonic scalers and air-polishing to remove calculus and staining without discomfort. Every cleaning visit includes a full oral cancer screening, periodontal charting, and a personalised home-care plan. Prevention is always cheaper than cure.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80",
    benefits: [
      "Ultrasonic and air-polish cleaning",
      "Oral cancer screening included",
      "Personalised home-care advice",
      "Fluoride and fissure sealants",
    ],
    price: "Starting from PKR 2,500",
    duration: "45–60 minutes",
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);