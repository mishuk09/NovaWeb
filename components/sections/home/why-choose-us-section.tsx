import { ShieldCheck, TrendingUp, Gem, Clock3 } from "lucide-react";
import { homeWhyChooseUs } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [ShieldCheck, TrendingUp, Gem, Clock3];

export function WhyChooseUsSection() {
  return (
    <Section id="why-choose-us" className="bg-card/40">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A strategic partner, not just a website vendor."
          description="We combine business strategy, premium UI/UX, and technical execution to build assets that generate real outcomes."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {homeWhyChooseUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <FadeUp key={item.title} delay={index * 0.05}>
                <Card className="h-full space-y-4 rounded-2xl bg-white/80 p-6">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

