import { homeIndustries } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export function IndustriesSection() {
  return (
    <Section id="industries">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Industries"
          title="Built for real businesses across diverse local industries."
          description="We tailor messaging, page structure, and conversion strategy for your market and customer behavior."
        />
        <div className="grid gap-4 sm:grid-cols-2  lg:grid-cols-2">
          {homeIndustries.map((industry, index) => {
            const Icon = industry.icon;
            const itemIndex = String(index + 1).padStart(2, "0");

            return (
              <FadeUp key={industry.name} delay={index * 0.03}>
                <Card className="group relative min-h-[250px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="pointer-events-none absolute inset-0 z-0">
                    {industry.image ? (
                      <Image
                        src={industry.image}
                        alt={`${industry.name} industry`}
                        fill
                        className="z-0 object-cover object-center opacity-90"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <Icon className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 text-emerald-500/18 dark:text-emerald-300/12" />
                    )}
                    <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/80 via-black/50 to-black/10 dark:from-black/85 dark:via-black/60 dark:to-black/20" />
                  </div>

                  <span className="pointer-events-none absolute right-6 top-4 z-20 text-6xl font-semibold text-transparent opacity-80 [-webkit-text-stroke:1.5px_rgba(148,163,184,0.55)] dark:[-webkit-text-stroke:1.5px_rgba(148,163,184,0.35)]">
                    {itemIndex}
                  </span>

                  <div className="relative z-20 flex h-full flex-col justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-white shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="mt-10 space-y-2">
                      <h3 className="font-heading text-3xl font-bold leading-tight text-white">
                        {industry.name}
                      </h3>
                      <p className="text-base leading-relaxed text-white/75">
                        Tailored digital presence
                      </p>
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

