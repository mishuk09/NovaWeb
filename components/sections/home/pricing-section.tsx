import { homePricing } from "@/config/home-content";
import { PricingGrid } from "@/components/shared/pricing-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-card/40">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Packages designed to convert visitors into qualified leads."
          description="Simple, transparent tiers with clear scope, timeline, and outcomes for your business."
        />
        <PricingGrid tiers={homePricing} />
        <p className="text-center text-sm text-muted-foreground">
          Not sure which plan fits? We&apos;ll recommend the right package during a free strategy
          call.
        </p>
      </Container>
    </Section>
  );
}
