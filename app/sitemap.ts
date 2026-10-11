import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceDetails } from "@/config/service-content";

const routes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/industries",
  "/pricing",
  "/faq",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const serviceRoutes = serviceDetails.map(
    (service) => `/services/${service.slug}`,
  );

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services/") ? 0.9 : 0.8,
  }));
}
