import Link from "next/link";
import { serviceGroups } from "@/config/core-pages-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/common/page-hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore website development, SEO, hosting, automation, and lead generation services by novanest.",
  pathname: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services built to help your business get more inquiries."
        description="Choose individual services or combine them into a complete lead-generation system."
      />
      <Section className="pt-2">
        <Container className="space-y-6">
          {serviceGroups.map((group) => (
            <Card key={group.category} className="rounded-2xl">
              <h2 className="font-heading text-2xl font-semibold">{group.category}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-background px-4 py-3">
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
          <div className="flex justify-center pt-2">
            <Button asChild size="lg">
              <Link href="/contact">Get Free Quote for Your Requirements</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
      />
    </>
  );
}
