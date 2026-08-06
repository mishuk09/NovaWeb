"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useState } from "react";
import { homeTestimonials } from "@/config/home-content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PriceShortInfo } from "./price-short-info";

const testimonialCount = homeTestimonials.length;

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getAccentClasses(index: number) {
  if (index === 0) {
    return "from-cyan-400 via-sky-500 to-blue-600";
  }

  return "from-amber-300 via-orange-400 to-rose-500";
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleTestimonials = [
    homeTestimonials[activeIndex],
    homeTestimonials[(activeIndex + 1) % testimonialCount],
  ];

  return (
    <Section
      id="testimonials"
      className="relative overflow-visible mt-[230px] isolate bg-[#06162a] py-20 text-white md:py-28"
    >
      <PriceShortInfo />

      <div className="absolute inset-0 -z-20 bg-[#06162a]" />
      <div className="absolute inset-0 -z-10 opacity-18">
        <Image
          src="/home.svg"
          alt=""
          fill
          className="object-cover object-center mix-blend-soft-light"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.22),_transparent_28%),linear-gradient(180deg,_rgba(6,22,42,0.08),_rgba(6,22,42,0.92))]" />

      <Container className="relative mt-20 space-y-12">
        <SectionHeading
          titleClassName="text-white"
          eyebrow="Testimonials"
          title="What clients say about working with novanest."
          description="  Real feedback from business owners who wanted a website that feels
            credible, loads fast, and turns visits into enquiries."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {visibleTestimonials.map((item, index) => (
            <article
              key={`${activeIndex}-${item.name}`}
              className="relative overflow-hidden rounded-lg bg-white px-6 py-7 text-slate-900 shadow-[0_30px_80px_rgba(1,7,18,0.32)] md:px-7 md:py-8"
            >
              <div className="pointer-events-none absolute inset-x-8 -bottom-4 h-4 rounded-full bg-slate-950/25 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-full bg-gradient-to-br p-[3px] ${getAccentClasses(index)}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-inner shadow-white/10">
                      {getInitials(item.name)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.15rem] font-semibold leading-tight text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600">
                      {item.role}
                    </p>
                  </div>
                </div>

                <Quote
                  className="h-10 w-10 flex-none text-indigo-200"
                  aria-hidden
                />
              </div>

              <p className="mt-6 max-w-md text-[0.98rem] leading-7 text-slate-600 md:text-base">
                {item.quote}
              </p>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          {homeTestimonials.map((item, index) => (
            <Button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 border border-sky-400/90 bg-transparent"
                  : "w-2.5 bg-slate-500/80 hover:bg-slate-300/80"
              }`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
