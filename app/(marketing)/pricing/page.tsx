import Link from "next/link";
import { homePricing } from "@/config/home-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { PricingGrid } from "@/components/shared/pricing-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Explore Starter, Business, Premium, and Enterprise website packages with timeline, features, and clear call to action.",
  pathname: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing that helps you choose with confidence."
        description="No hidden fees, no vague scope. Get a clear package recommendation based on your goals and timeline."
      />
      <Section className="pt-2">
        <Container className="space-y-8">
          <PricingGrid tiers={homePricing} />
          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <p className="text-sm text-muted-foreground">
              Unsure which plan fits your business? We&apos;ll guide you in a free consultation and
              suggest the best option before you commit.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Need a Custom Package?</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="ghost">
              <Link href="/faq">See common pricing questions</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]}
      />
    </>
  );
}
