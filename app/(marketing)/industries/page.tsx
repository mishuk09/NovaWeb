import Link from "next/link";
import { homeIndustries } from "@/config/home-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
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
      <Section className="mt-0">
        <Container className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Industries
            </p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Industries We Serve
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              We build for industries that depend on trust, clarity, and
              lead-ready digital experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {homeIndustries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Card
                  key={industry.name}
                  className="rounded-lg border border-border/70 bg-card p-5 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">
                        {industry.name}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Custom growth-focused solution
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Get Industry-Specific Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
    </>
  );
}
