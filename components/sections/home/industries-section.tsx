import { homeIndustries } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function IndustriesSection() {
  return (
    <Section id="industries">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Industries"
          title="Built for real businesses across diverse local industries."
          description="We tailor messaging, page structure, and conversion strategy for your market and customer behavior."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {homeIndustries.map((industry, index) => (
            <FadeUp key={industry} delay={index * 0.03}>
              <Card className="rounded-xl py-4 text-center">
                <h3 className="font-medium">{industry}</h3>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}

