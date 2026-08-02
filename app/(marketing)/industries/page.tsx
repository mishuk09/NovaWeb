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
     
      <Section className="mt-0 ">
        <Container className="space-y-8">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Industries We Serve
                  </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {homeIndustries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Card
                  key={industry.name}
                  className="rounded-lg border-border/60 bg-card/80   transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground">{industry.name}</h2>
                      <p className="text-sm text-muted-foreground">Custom growth-focused solution</p>
                    </div>
                  </div>
                </Card>
              );
            })}
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
