import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { homeHero } from "@/config/home-content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/motion/fade-up";
import { HeroInfoStrip } from "@/components/sections/home/hero-info-strip";
import { HeroNavbar } from "@/components/sections/home/hero-navbar";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pb-20 pt-16 md:pt-34">
      <HeroInfoStrip />
      <HeroNavbar />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-primary/15 to-transparent" />
      <div className="absolute inset-0 -z-10 hidden bg-[url('/home.svg')] bg-cover bg-center bg-no-repeat  md:block" />
      <Container className="grid pt-20 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <FadeUp className="space-y-6">
          <p className="inline-flex      px-1  font-bold text-[var(--primary)]  ">
            {homeHero.badge} 
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {homeHero.title} <span className="text-[var(--primary)]"> Growing</span>  Businesses
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{homeHero.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={homeHero.secondaryCta.href}>{homeHero.secondaryCta.label}</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Free consultation
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              No-obligation quote
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Clear timeline before you commit
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Card className="grid gap-4 rounded-3xl bg-white/75 p-8 bg-transparent dark:bg-slate-300/70">
            {homeHero.stats.map((item) => (
              <div key={item.label} className="rounded-xl bg-background/70   p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 font-heading text-2xl font-semibold text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </Card>
        </FadeUp>
      </Container>
    </Section>
  );
}
