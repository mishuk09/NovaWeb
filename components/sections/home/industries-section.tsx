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
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {homeIndustries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <FadeUp key={industry.name} delay={index * 0.03}>
                <Card className="group rounded-2xl border-border/60 bg-card/80 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_-22px_rgba(15,23,42,0.35)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{industry.name}</h3>
                      <p className="text-sm text-muted-foreground">Tailored digital presence</p>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

