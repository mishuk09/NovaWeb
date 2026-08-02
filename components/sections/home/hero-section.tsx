import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { homeHero } from "@/config/home-content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/motion/fade-up"; 

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pb-20 pt-16 md:pt-34">
      {/* <HeroInfoStrip />
      <HeroNavbar /> */}
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-primary/15 to-transparent" />
      <div className="absolute inset-0 -z-10 hidden bg-[url('/home.svg')] bg-cover bg-center bg-no-repeat  md:block" />
      <Container className="grid pt-20 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeUp className="space-y-6">
          <p className="inline-flex      px-1  font-bold text-[var(--primary)]  ">
            {homeHero.badge} 
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {homeHero.title}{" "}
            <span className="relative inline-block text-[var(--primary)] align-baseline leading-none">
              Growing
              <Image
                src="/uparrow.svg"
                alt=""
                width={40}
                height={40}
                className="absolute left-1/2 top-6 mt-1 h-auto w-70 -translate-x-1/2"
              />
            </span>{" "}
            Businesses
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
          <Card className="overflow-hidden  border-0 bg-transparent p-0 shadow-none backdrop-blur-0">
           <img src="/home-img.svg" className="w-full h-full" alt="Hero Image"   />
          </Card>
        </FadeUp>
      </Container>
    </Section>
  );
}
