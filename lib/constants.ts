export const CLINIC = {
  name:        "Bright Smile Dental Clinic",
  tagline:     "Your Smile, Our Masterpiece",
  description: "Premium dental care in the heart of Lahore, Pakistan.",
  doctor:      "Dr. Ayesha Khan",
  phone:       "+92 303 7224163",
  email:       "info@brightsmile.pk",
  website:     "https://bright-smile-dental-six.vercel.app/",
  address: {
    street:  "12-A, Gulberg III",
    city:    "Lahore",
    country: "Pakistan",
    full:    "12-A, Gulberg III, Lahore, Pakistan",
  },
  hours: {
    weekdays: "Mon – Fri: 9:00 AM – 8:00 PM",
    saturday: "Sat: 10:00 AM – 6:00 PM",
    sunday:   "Sun: Closed",
  },
  social: {
    facebook:  "https://facebook.com/brightsmile.pk",
    instagram: "https://instagram.com/brightsmile.pk",
    twitter:   "https://twitter.com/brightsmile_pk",
    youtube:   "https://youtube.com/@brightsmile",
  },
  whatsapp: {
    number:  "923001234567",
    message: "Hello! I'd like to book a dental appointment.",
  },
} as const;

export const STATS = [
  { value: "12+",    label: "Years of Excellence"  },
  { value: "8,500+", label: "Happy Patients"       },
  { value: "15+",    label: "Expert Specialists"   },
  { value: "99%",    label: "Patient Satisfaction" },
] as const;

export const NAV_HEIGHT = 80; // px — used for scroll offset calculations