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

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers about timeline, pricing, support, SEO, and project workflow for novanest digital solutions.",
  pathname: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to common pre-project questions."
        description="If you need more details, we’re happy to discuss your goals in a free consultation."
      />
      <Section className="pt-2">
        <Container className="space-y-8">
          <FaqAccordion items={homeFaq} />
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <JsonLd data={buildFaqSchema(homeFaq)} />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
    </>
  );
}
