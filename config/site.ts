import type { SiteConfig } from "@/types/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://novanest.my";

export const siteConfig: SiteConfig = {
  name: "novanest",
  legalName: "novanest Digital Solutions Agency",
  description:
    "Modern digital solutions agency helping Malaysian SMEs grow with high-converting websites, SEO, automation, and lead generation systems.",
  url: siteUrl,
  locale: "en_MY",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "hello@novanest.my",
    phone: "+60 1123654378",
    whatsapp: "601123654378",
    address: "Melaka, Malaysia",
    businessHours: "Mon - Sat, 9:00 AM - 6:00 PM",
  },
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  serviceAreas: ["Melaka", "Kuala Lumpur", "Johor Bahru", "Penang", "Malaysia"],
};
