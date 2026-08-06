import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUsSection() {
  return (
    <Section id="why-choose-us" className="bg-card/40 overflow-hidden  ">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Image Collage */}
          <FadeUp className="relative mx-auto aspect-square w-full max-w-[500px] lg:mx-0">
            {/* Main Left Image */}
            <div className="absolute left-0 top-1/2 h-[75%] w-[55%] -translate-y-1/2 overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                alt="Professional team"
                fill
                sizes="(min-width: 1024px) 275px, 55vw"
                className="object-cover"
              />
            </div>
            {/* Top Right Image */}
            <div className="absolute right-0 top-[5%] h-[40%] w-[40%] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                sizes="(min-width: 1024px) 200px, 40vw"
                className="object-cover"
              />
            </div>
            {/* Bottom Right Image */}
            <div className="absolute bottom-[5%] right-0 h-[40%] w-[40%] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
                alt="Working on laptop"
                fill
                sizes="(min-width: 1024px) 200px, 40vw"
                className="object-cover"
              />
            </div>

            {/* Floating Experience Badge overlay */}
            <Card className="absolute left-[45%] top-1/2 z-10 flex w-[260px] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-xl bg-white p-4 shadow-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium leading-snug text-slate-900">
                Helping Malaysian SMEs scale with high-converting digital
                solutions.
              </p>
            </Card>
          </FadeUp>

          {/* Right Column - Content */}
          <div className="space-y-10">
            {/* SectionHeading left completely as-is regarding content, just aligned to the left */}
            <FadeUp delay={0.1}>
              <SectionHeading
                className="mx-0 max-w-none text-left"
                eyebrow="Why Choose Us"
                title="A strategic partner, not just a website vendor."
                description="We combine business strategy, premium UI/UX, and technical execution to build assets that generate real outcomes."
              />
            </FadeUp>

            {/* Updated Stats for Professional Team and AI Integration */}
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
                {/* Stat 1: Professional Team */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-primary text-lg font-bold text-primary">
                    3+
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">
                      Professional Team
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Years of combined IT experience
                    </p>
                  </div>
                </div>
                {/* Stat 2: AI Integration */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-primary text-lg font-bold text-primary">
                    AI
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">
                      AI Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Smart automated workflows
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="rounded-r-xl border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-sm italic leading-relaxed text-muted-foreground md:text-base">
                  &ldquo;A website shouldn&apos;t just look good-it needs to
                  work for you. At novanest, we build digital assets that scale
                  your business and generate real inquiries.&rdquo;
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Button size="lg" className="rounded-lg flex mx-auto">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeUp>
          </div>
        </div>
      </Container>
    </Section>
  );
}
