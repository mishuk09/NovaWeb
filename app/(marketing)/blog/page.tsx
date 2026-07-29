import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on website strategy, SEO, digital growth, and conversion optimization for small businesses.",
  pathname: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Actionable insights for digital growth."
        description="Our full blog system with categories, search, and related posts will be launched in the next phase."
      />
      <Section className="pt-2">
        <Container className="space-y-4">
          <Card className="rounded-2xl">
            <h2 className="font-heading text-2xl font-semibold">Coming next</h2>
            <p className="mt-2 text-muted-foreground">
              We are preparing structured educational content for business owners in Malaysia.
            </p>
            <Button asChild className="mt-5">
              <Link href="/contact">Request content topics</Link>
            </Button>
          </Card>
        </Container>
      </Section>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
    </>
  );
}

