import { homeProcess } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <Section id="our-process">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear, structured workflow from idea to launch."
          description="This keeps delivery fast, communication transparent, and outcomes aligned with your business goals."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {homeProcess.map((item, index) => (
            <FadeUp key={item.step} delay={index * 0.05}>
              <Card className="h-full rounded-2xl p-6">
                <p className="text-xs font-semibold tracking-widest text-primary">{item.step}</p>
                <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}

