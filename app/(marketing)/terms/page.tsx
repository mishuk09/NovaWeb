import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "Read the terms and conditions for novanest services.",
  pathname: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        description="These terms govern the use of our services and project engagements."
      />
      <Section className="pt-2">
        <Container className="prose prose-slate dark:prose-invert max-w-4xl">
          <p>
            Project scope, timeline, and deliverables are confirmed before work begins. Any change
            requests outside agreed scope may affect timeline and pricing.
          </p>
          <p>
            For contract-specific terms, please refer to your signed proposal or contact{" "}
            <a href="mailto:hello@novanest.my">hello@novanest.my</a>.
          </p>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }]}
      />
    </>
  );
}

