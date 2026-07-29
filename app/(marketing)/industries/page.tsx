import Link from "next/link";
import { homeIndustries } from "@/config/home-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Industries",
  description:
    "See the industries novanest serves including F&B, hospitality, health, legal, education, and retail businesses.",
  pathname: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Solutions customized for your industry and customer journey."
        description="We align design, content, and technical features with what your customers need before they contact you."
      />
      <Section className="pt-2">
        <Container className="space-y-8">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {homeIndustries.map((industry) => (
              <Card key={industry} className="rounded-xl py-4 text-center">
                <h2 className="font-medium">{industry}</h2>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Industry-Specific Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]}
      />
    </>
  );
}
