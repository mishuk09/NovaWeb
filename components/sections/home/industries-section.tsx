"use client";

import { useEffect, useState } from "react";
import { homeIndustries } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeIndustries.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const visibleIndustries = [
    homeIndustries[activeIndex],
    homeIndustries[(activeIndex + 1) % homeIndustries.length],
    homeIndustries[(activeIndex + 2) % homeIndustries.length],
    homeIndustries[(activeIndex + 3) % homeIndustries.length],
    homeIndustries[(activeIndex + 4) % homeIndustries.length],
  ];

  return (
    <Section id="industries">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Industries"
          title="Built for real businesses across diverse local industries."
          description="We tailor messaging, page structure, and conversion strategy for your market and customer behavior."
        />

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {visibleIndustries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <FadeUp
                  key={`${industry.name}-${activeIndex}`}
                  delay={index * 0.04}
                >
                  <Card className="group relative aspect-[0.86] min-h-[250px] overflow-hidden rounded-xl border-0 bg-slate-900 p-0 text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="absolute inset-0">
                      {industry.image ? (
                        <Image
                          src={industry.image}
                          alt={`${industry.name} industry`}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                        />
                      ) : (
                        <Icon className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 text-white/30" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/75" />
                    </div>

                    <div className="relative z-10 flex h-full items-start p-5 sm:p-6">
                      <h3 className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl">
                        {industry.name}
                      </h3>
                    </div>
                  </Card>
                </FadeUp>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Previous industries"
            onClick={() =>
              setActiveIndex(
                (current) =>
                  (current - 1 + homeIndustries.length) % homeIndustries.length,
              )
            }
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:left-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next industries"
            onClick={() =>
              setActiveIndex((current) => (current + 1) % homeIndustries.length)
            }
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:right-4"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-3">
          {homeIndustries.map((industry, index) => (
            <button
              key={industry.name}
              type="button"
              aria-label={`Show ${industry.name}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center pt-1">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-white hover:opacity-90"
          >
            <Link href="/contact">Let&apos;s Win Together</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
