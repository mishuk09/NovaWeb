import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { aboutHighlights, aboutValues } from "@/config/core-pages-content";
import { homeProcess } from "@/config/home-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About novanest",
  description:
    "Learn about novanest, our mission, values, and process for helping Malaysian businesses grow with premium digital solutions.",
  pathname: "/about",
});

export default function AboutPage() {
  const highlightStyles = [
    {
      icon: ShieldCheck,
      tone: "bg-emerald-500 text-white",
    },
    {
      icon: Sparkles,
      tone: "bg-blue-600 text-white",
    },
    {
      icon: BadgeCheck,
      tone: "bg-teal-500 text-white",
    },
  ] as const;

  const valueStyles = [
    {
      icon: Target,
      tone: "border-sky-200 bg-sky-50 text-sky-600",
    },
    {
      icon: CheckCircle2,
      tone: "border-emerald-200 bg-emerald-50 text-emerald-600",
    },
    {
      icon: MessageSquareText,
      tone: "border-blue-200 bg-blue-50 text-blue-600",
    },
    {
      icon: ShieldCheck,
      tone: "border-teal-200 bg-teal-50 text-teal-600",
    },
  ] as const;

  return (
    <div className="mt-20 md:mt-38 flex min-h-screen flex-col bg-background text-foreground">
      <Section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.2)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute left-[7%] top-[12%] h-64 w-64 rounded-full border border-primary/15" />
        <div className="pointer-events-none absolute left-[12%] top-[18%] h-48 w-48 rounded-full border border-primary/10" />
        <div className="pointer-events-none absolute right-[-4rem] top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <FadeUp className="space-y-7">
            <div className="space-y-4 flex flex-col gap-2 items-center md:items-start text-center md:text-left">
              <p className="text-sm font-semibold text-primary">
                About Our Company
              </p>
              <h1 className="font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <span className="text-foreground">Choose</span> The Best IT
                Service
                <br />
                <span className="text-foreground">Company</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                An IT firm or MSP that keeps your business running smoothly, so
                you can focus on growth instead of chasing technical issues.
              </p>
            </div>

            <div className="border-l-2 border-primary/40 pl-4 text-sm leading-7 text-muted-foreground">
              novanest combines strategy, design, and engineering to help you
              build trust online and win more customer inquiries.
            </div>

            <div className="grid gap-4 border-y border-border/70 py-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-primary/15 bg-primary/5 p-3 text-primary shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-foreground">
                    Reliable Support
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Clear communication, dependable delivery, and steady
                    support.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-2xl border border-primary/15 bg-primary/5 p-3 text-primary shadow-sm">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-foreground">
                    Technical Expertise
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Business-first design and execution for measurable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-lg px-7 shadow-lg shadow-primary/20"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeUp>

          <FadeUp
            delay={0.08}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="absolute left-6 top-8 h-44 w-44 rounded-lg border border-primary/15" />
            <div className="absolute left-14 top-16 h-32 w-32 rounded-lg border border-primary/10" />
            <div className="absolute right-0 bottom-0 h-[72%] w-[82%] rounded-lg bg-gradient-to-br from-[#1677ff] via-[#1b6ee8] to-[#0b4fd8] shadow-[0_30px_80px_rgba(2,99,235,0.28)]" />
            <div className="absolute right-0 bottom-0 h-[72%] w-[82%] rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_100%)]" />
            <div className="absolute -left-2 top-20 z-20 rounded-2xl border border-border/70 bg-card/95 px-4 py-4 text-card-foreground shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <div className="absolute left-[-0.5rem] top-1/2 z-20 w-fit -translate-y-1/2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)]">
              <span className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" /> Contact us: +60 11-1111 1111
              </span>
            </div>
            <div className="relative z-10 aspect-[0.92] overflow-hidden rounded-lg border border-border/70 bg-card/80 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-sm md:p-6">
              <Image
                src="/home-img.svg"
                alt="novanest about illustration"
                fill
                priority
                className="object-contain object-center"
              />
            </div>
          </FadeUp>
        </Container>
      </Section>

      <Section className="pt-2">
        <Container className="grid gap-6 md:grid-cols-3">
          {aboutHighlights.map((item, index) => {
            const Icon = highlightStyles[index]?.icon ?? ShieldCheck;
            const tone =
              highlightStyles[index]?.tone ?? "bg-slate-900 text-white";

            return (
              <Card
                key={item.title}
                className="group rounded-lg border-border/70 bg-card/80 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]"
              >
                <div
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-xl ${tone}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </Card>
            );
          })}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Values"
              title="How we work"
              description="These principles guide every project from discovery to post-launch support."
            />
            <Card className="rounded-lg border-border/70 bg-card/70 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <p className="text-sm leading-7 text-muted-foreground">
                We keep the process practical and transparent, focusing on the
                decisions that improve delivery quality, communication, and
                long-term business value.
              </p>
            </Card>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutValues.map((value, index) => {
              const Icon = valueStyles[index]?.icon ?? ShieldCheck;
              const tone =
                valueStyles[index]?.tone ??
                "border-slate-200 bg-slate-50 text-slate-600";

              return (
                <Card
                  key={value}
                  className="rounded-lg border-border/70 bg-card/80 p-5 shadow-[0_14px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${tone}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="font-heading text-lg font-semibold tracking-tight text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/40">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Delivery Model"
            title="Our proven execution framework"
            description="A practical workflow optimized for timeline certainty and quality."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homeProcess.map((item) => (
              <Card key={item.step} className="space-y-2 rounded-2xl">
                <p className="text-xs font-semibold tracking-wide text-primary">
                  {item.step}
                </p>
                <h3 className="font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
    </div>
  );
}
