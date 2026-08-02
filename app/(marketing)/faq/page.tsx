import Link from "next/link";
import { homeFaq } from "@/config/home-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/common/page-hero";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildFaqSchema, createPageMetadata } from "@/lib/seo";
import { EmailSection } from "@/components/sections/home/email-sections";

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers about timeline, pricing, support, SEO, and project workflow for novanest digital solutions.",
  pathname: "/faq",
});

export default function FaqPage() {
  return (
    <div className="mt-15 md:mt-28 flex min-h-screen flex-col bg-background text-foreground">
      <PageHero
        eyebrow="FAQ"
        title="Answers to common pre-project questions."
        description="If you need more details, we’re happy to discuss your goals in a free consultation."
      />
      <EmailSection />
      <JsonLd data={buildFaqSchema(homeFaq)} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
    </div>
  );
}
