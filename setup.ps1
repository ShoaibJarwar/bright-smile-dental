# Create directories
$dirs = @(
    "app/(main)/about",
    "app/(main)/services/[slug]",
    "app/(main)/doctors",
    "app/(main)/appointment",
    "app/(main)/testimonials",
    "app/(main)/gallery",
    "app/(main)/blog/[slug]",
    "app/(main)/faq",
    "app/(main)/contact",

    "components/ui",
    "components/layout",
    "components/shared",
    "components/home",
    "components/services",
    "components/doctors",
    "components/testimonials",
    "components/gallery",
    "components/blog",
    "components/faq",
    "components/appointment",
    "components/contact",

    "data",
    "lib",
    "types",
    "hooks",
    "public/images"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# Create files
$files = @(
    "app/(main)/layout.tsx",
    "app/(main)/page.tsx",
    "app/(main)/about/page.tsx",
    "app/(main)/services/page.tsx",
    "app/(main)/services/[slug]/page.tsx",
    "app/(main)/doctors/page.tsx",
    "app/(main)/appointment/page.tsx",
    "app/(main)/testimonials/page.tsx",
    "app/(main)/gallery/page.tsx",
    "app/(main)/blog/page.tsx",
    "app/(main)/blog/[slug]/page.tsx",
    "app/(main)/faq/page.tsx",
    "app/(main)/contact/page.tsx",

    "app/layout.tsx",
    "app/not-found.tsx",
    "app/globals.css",
    "app/metadata.ts",

    "components/layout/Navbar.tsx",
    "components/layout/Footer.tsx",
    "components/layout/MobileMenu.tsx",
    "components/layout/PageWrapper.tsx",

    "components/shared/SectionHeading.tsx",
    "components/shared/AnimatedSection.tsx",
    "components/shared/Button.tsx",
    "components/shared/Badge.tsx",
    "components/shared/WhatsAppButton.tsx",
    "components/shared/BackToTop.tsx",
    "components/shared/DarkModeToggle.tsx",
    "components/shared/Logo.tsx",

    "components/home/Hero.tsx",
    "components/home/ServicesPreview.tsx",
    "components/home/StatsSection.tsx",
    "components/home/DoctorsPreview.tsx",
    "components/home/TestimonialsSection.tsx",
    "components/home/CTASection.tsx",
    "components/home/NewsletterSection.tsx",

    "components/services/ServiceCard.tsx",
    "components/services/ServiceDetail.tsx",

    "components/doctors/DoctorCard.tsx",

    "components/testimonials/TestimonialCard.tsx",

    "components/gallery/GalleryGrid.tsx",

    "components/blog/BlogCard.tsx",
    "components/blog/BlogDetail.tsx",

    "components/faq/FAQAccordion.tsx",

    "components/appointment/AppointmentForm.tsx",

    "components/contact/ContactForm.tsx",

    "data/services.ts",
    "data/doctors.ts",
    "data/blog.ts",
    "data/gallery.ts",
    "data/faq.ts",
    "data/testimonials.ts",
    "data/navigation.ts",

    "lib/utils.ts",
    "lib/animations.ts",
    "lib/constants.ts",

    "types/index.ts",

    "hooks/useScrollDirection.ts",
    "hooks/useMediaQuery.ts"
)

foreach ($file in $files) {
    if (!(Test-Path $file)) {
        New-Item -ItemType File -Path $file | Out-Null
    }
}

Write-Host "Project structure created successfully!"