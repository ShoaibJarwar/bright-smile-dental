import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bright Smile Dental Clinic | Lahore, Pakistan",
    template: "%s | Bright Smile Dental Clinic",
  },
  description:
    "Premium dental care in Lahore. Expert cosmetic dentistry, orthodontics, implants & more. Book your appointment with Dr. Ayesha Khan today.",
  keywords: [
    "dental clinic Lahore",
    "dentist Lahore",
    "teeth whitening Lahore",
    "dental implants Pakistan",
    "orthodontics Lahore",
    "Dr Ayesha Khan dentist",
    "best dentist Lahore",
    "cosmetic dentistry Pakistan",
  ],
  authors:  [{ name: "Dr. Ayesha Khan" }],
  creator:  "Bright Smile Dental Clinic",
  metadataBase: new URL("https://brightsmile.pk"),

  // ── Favicon & icons ──────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.svg",        type: "image/svg+xml"  },
      { url: "/favicon-32x32.png",  sizes: "32x32"         },
      { url: "/favicon-16x16.png",  sizes: "16x16"         },
    ],
    apple:    [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.svg" }],
  },
  manifest: "/site.webmanifest",
  // ─────────────────────────────────────────────────────────────

  openGraph: {
    type:      "website",
    locale:    "en_PK",
    url:       "https://brightsmile.pk",
    siteName:  "Bright Smile Dental Clinic",
    title:     "Bright Smile Dental Clinic | Premium Dental Care in Lahore",
    description:
      "Experience world-class dental care in the heart of Lahore. Cosmetic dentistry, orthodontics, implants & preventive care.",
    images: [
      {
        url:    "/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Bright Smile Dental Clinic Lahore",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Bright Smile Dental Clinic | Lahore",
    description: "Premium dental care in Lahore by Dr. Ayesha Khan.",
    images:      ["/og-image.jpg"],
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen font-sans antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}