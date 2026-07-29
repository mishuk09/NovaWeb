import { CtaSection } from "@/components/sections/home/cta-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { IndustriesSection } from "@/components/sections/home/industries-section";
import { PortfolioPreviewSection } from "@/components/sections/home/portfolio-preview-section";
import { PricingSection } from "@/components/sections/home/pricing-section";
import { ProcessSection } from "@/components/sections/home/process-section";
import { ServicesOverviewSection } from "@/components/sections/home/services-overview-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Digital Solutions Agency for Malaysian SMEs",
  description:
    "novanest creates premium websites, SEO-ready digital experiences, and conversion systems for small businesses in Melaka and across Malaysia.",
  pathname: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <PortfolioPreviewSection />
      <IndustriesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

