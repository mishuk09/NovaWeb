import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const defaultOgImage = `${siteConfig.url}/opengraph-image`;

export const metadataConfig: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NovaNest | Web Design & Automation Agency in Malaysia",
    template: "%s | NovaNest Digital Agency",
  },
  description: siteConfig.description,
  keywords: [
    "digital agency malaysia",
    "web design melaka",
    "business website malaysia",
    "seo malaysia",
    "automation agency",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.svg",
    apple: "/lightlogo.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "NovaNest | Web Design & Automation Agency in Malaysia",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NovaNest Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaNest | Web Design & Automation Agency in Malaysia",
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  category: "technology",
};

export function createPageMetadata({
  title,
  description,
  pathname,
}: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  const canonical = pathname === "/" ? "/" : pathname;
  const pageUrl = `${siteConfig.url}${canonical}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      url: pageUrl,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/twitter-image"],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/lightlogo.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    areaServed: siteConfig.serviceAreas,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-MY",
  };
}

export function buildServiceSchema({
  name,
  description,
  pathname,
}: {
  name: string;
  description: string;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${pathname}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.serviceAreas,
    serviceType: name,
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    url: siteConfig.url,
    areaServed: siteConfig.serviceAreas,
    description: siteConfig.description,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melaka",
      addressCountry: "MY",
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
  };
}

export function buildFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: {
    name: string;
    path: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
