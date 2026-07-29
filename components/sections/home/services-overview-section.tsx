import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeServicesOverview } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesOverviewSection() {
  return (
    <Section id="services-overview">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Everything your business needs to launch, rank, and convert."
          description="From websites and SEO to automation and lead capture, we provide complete digital execution."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeServicesOverview.map((service, index) => (
            <FadeUp key={service} delay={index * 0.04}>
              <Card className="h-full rounded-2xl bg-white/80">
                <Badge className="mb-3">{String(index + 1).padStart(2, "0")}</Badge>
                <h3 className="font-heading text-xl font-semibold">{service}</h3>
              </Card>
            </FadeUp>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
