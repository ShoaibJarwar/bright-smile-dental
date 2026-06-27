import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home",         href: "/"             },
  { label: "About",        href: "/about"        },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Teeth Whitening",   href: "/services/teeth-whitening"   },
      { label: "Dental Implants",   href: "/services/dental-implants"   },
      { label: "Orthodontics",      href: "/services/orthodontics"      },
      { label: "Root Canal",        href: "/services/root-canal"        },
      { label: "Cosmetic Dentistry",href: "/services/cosmetic-dentistry"},
      { label: "Preventive Care",   href: "/services/preventive-care"   },
    ],
  },
  { label: "Doctors",      href: "/doctors"      },
  { label: "Gallery",      href: "/gallery"      },
  { label: "Blog",         href: "/blog"         },
  { label: "Contact",      href: "/contact"      },
];