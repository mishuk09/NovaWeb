import { aboutHighlights, aboutValues } from "@/config/core-pages-content";
import { homeProcess } from "@/config/home-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/common/page-hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About novanest",
  description:
    "Learn about novanest, our mission, values, and process for helping Malaysian businesses grow with premium digital solutions.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A conversion-focused digital partner for Malaysian businesses."
        description="novanest combines strategy, design, and engineering to help you build trust online and win more customer inquiries."
      />

      <Section className="pt-2">
        <Container className="grid gap-4 md:grid-cols-3">
          {aboutHighlights.map((item) => (
            <Card key={item.title} className="space-y-3 rounded-2xl">
              <h2 className="font-heading text-xl font-semibold">{item.title}</h2>
              <p className="text-muted-foreground">{item.text}</p>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Values"
            title="How we work"
            description="These principles guide every project from discovery to post-launch support."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((value) => (
              <Card key={value} className="rounded-xl py-5 text-center">
                <p className="font-medium">{value}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/40">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Delivery Model"
            title="Our proven execution framework"
            description="A practical workflow optimized for timeline certainty and quality."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homeProcess.map((item) => (
              <Card key={item.step} className="space-y-2 rounded-2xl">
                <p className="text-xs font-semibold tracking-wide text-primary">{item.step}</p>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
    </>
  );
}
