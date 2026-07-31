import Link from "next/link";
import { ArrowRight, Server, Cloud, ShieldCheck, Headset, Monitor, Code, Layout, ShoppingBag, TrendingUp } from "lucide-react";
import { homeServicesOverview } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShortInfo } from "./short-info";
import { cn } from "@/lib/utils";

// Theme-friendly colors that stay readable in both light and dark mode
const cardIcons = [Code, Layout, ShoppingBag, TrendingUp, Monitor];
const cardColors = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
];

export function ServicesOverviewSection() {
  return (
    <Section id="services-overview" className="relative mt-16 overflow-visible bg-gradient-to-b from-primary/5 to-transparent py-0 dark:from-primary/10">
      <ShortInfo />
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything your business needs to <span className="text-primary">launch</span>, rank, and convert.
            </>
          }
          description="From websites and SEO to automation and lead capture, we provide complete digital execution."
        />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Render the standard service cards */}
          {homeServicesOverview.slice(0, 5).map((service, index) => {
            const Icon = cardIcons[index % cardIcons.length];
            const iconBg = cardColors[index % cardColors.length];
            
            return (
              <FadeUp key={index} delay={index * 0.04}>
                <Card className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-8 shadow-sm transition-colors hover:border-primary/20 dark:bg-slate-900/70">
                  <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-xl ring-1 ring-black/5 dark:ring-white/10", iconBg)}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">
                    {/* Handles both string arrays and object arrays */}
                    {typeof service === 'string' ? service : (service as any).title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {typeof service === 'string' 
                      ? "Proactive IT management that keeps your systems secure, optimized, and running without interruption." 
                      : (service as any).description}
                  </p>
                </Card>
              </FadeUp>
            );
          })}

          {/* 6th Highlighted Card */}
         <FadeUp delay={0.2}>
            <Card className="flex h-full flex-col justify-center rounded-lg bg-[#0d1e4c] p-8 text-white shadow-md border-transparent">
              <h3 className="font-heading text-2xl font-semibold mb-4">Explore All IT Services</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Discover our complete range of IT solutions designed to improve security, efficiency, and business growth.
              </p>
              <Button asChild className="w-fit bg-white text-[#0d1e4c] hover:bg-slate-100">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </FadeUp>
        </div>
        <div className="flex flex-wrap justify-center gap-3"> 
         <Button asChild className="mx-auto mt-8 bg-primary text-white hover:bg-primary/90">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          </div>
      </Container>
    </Section>
  );
}