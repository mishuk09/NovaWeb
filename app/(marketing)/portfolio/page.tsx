import Link from "next/link";
import { homePortfolioPreview } from "@/config/home-content";
import { PageHero } from "@/components/sections/common/page-hero";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PortfolioGrid } from "@/components/shared/portfolio-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Browse industry-focused demo projects for restaurant, salon, workshop, clinic, law firm, and hotel businesses.",
  pathname: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Professional demo projects built for conversion and credibility."
        description="These examples show how we adapt UI, messaging, and lead funnels for different industries."
      />
      <Section className="pt-2">
        <Container className="space-y-8">
          <PortfolioGrid items={homePortfolioPreview} />
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Quote for a Similar Project</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]}
      />
    </>
  );
}
