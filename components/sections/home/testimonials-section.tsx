import { Quote } from "lucide-react";
import { homeTestimonials } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by business owners who value quality and results."
          description="Client feedback from demo use-cases reflecting our approach to quality, speed, and communication."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {homeTestimonials.map((item, index) => (
            <FadeUp key={item.name} delay={index * 0.05}>
              <Card className="h-full rounded-2xl p-6">
                <Quote className="h-5 w-5 text-primary" aria-hidden />
                <p className="mt-4 text-muted-foreground">“{item.quote}”</p>
                <div className="mt-5">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}

