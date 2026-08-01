import { homePricing } from "@/config/home-content";
import Link from "next/link";
import { ArrowRight, Building2, Check, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const cards = [
    {
      name: homePricing[0].name,
      price: homePricing[0].price,
      subtitle: homePricing[0].subtitle,
      features: homePricing[0].features,
      cta: homePricing[0].cta,
      icon: Sparkles,
      badgeClassName:
        "bg-primary/10 text-primary ring-1 ring-inset ring-primary/15",
      cardClassName: "bg-card/90 text-card-foreground border-border/70",
      buttonVariant: "outline" as const,
      featured: false,
    },
    {
      name: homePricing[1].name,
      price: homePricing[1].price,
      subtitle: homePricing[1].subtitle,
      features: homePricing[1].features,
      cta: homePricing[1].cta,
      icon: Rocket,
      badgeClassName:
        "bg-primary-foreground/15 text-primary-foreground ring-1 ring-inset ring-primary-foreground/20",
      cardClassName:
        "bg-primary text-primary-foreground border-primary/20 shadow-[0_28px_70px_-34px_rgba(15,23,42,0.35)]",
      buttonVariant: "default" as const,
      featured: true,
    },
    {
      name: homePricing[2].name,
      price: homePricing[2].price,
      subtitle: homePricing[2].subtitle,
      features: homePricing[2].features,
      cta: homePricing[2].cta,
      icon: Building2,
      badgeClassName:
        "bg-primary/10 text-primary ring-1 ring-inset ring-primary/15",
      cardClassName: "bg-card/90 text-card-foreground border-border/70",
      buttonVariant: "outline" as const,
      featured: false,
    },
  ];

  const customPackage = homePricing[3];

  return (
    <Section id="pricing" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-7rem] bottom-[-5rem] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container className="relative space-y-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple Pricing for Malaysian Businesses."
          description="Choose the package that fits your business. Need something custom? We'll create a package based on your requirements."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Card
                key={card.name}
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-lg border p-0 transition-all duration-300 hover:-translate-y-1",
                  card.cardClassName,
                  card.featured
                    ? "shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
                    : "shadow-[0_24px_60px_-38px_rgba(15,23,42,0.18)]",
                )}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between p-7 pb-6">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl",
                        card.badgeClassName,
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    {card.featured ? (
                      <span className="rounded-lg bg-primary-foreground/15 px-3 py-1 text-xs font-semibold text-primary-foreground ring-1 ring-inset ring-primary-foreground/20">
                        Most Popular
                      </span>
                    ) : null}
                  </div>

                  <div className="px-7 pb-7">
                    <h3 className="font-heading text-[1.35rem] font-semibold tracking-tight">
                      {card.name} Plan
                    </h3>
                    <div className="mt-4 flex items-end gap-2">
                      <p className="font-heading text-5xl font-semibold leading-none tracking-tight">
                        {card.price}
                      </p>
                    </div>
                    <p
                      className={cn(
                        "mt-4 text-base leading-relaxed",
                        card.featured
                          ? "text-primary-foreground/85"
                          : "text-muted-foreground",
                      )}
                    >
                      {card.subtitle}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "border-t px-7 py-6",
                      card.featured
                        ? "border-primary-foreground/15"
                        : "border-border/70",
                    )}
                  >
                    <Button
                      asChild
                      variant={card.featured ? "default" : "outline"}
                      className={cn(
                        "w-full rounded-lg",
                        card.featured &&
                          "bg-card  text-card-foreground hover:bg-card/90",
                      )}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2"
                      >
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={cn(
                      "flex-1 border-t px-7 py-6",
                      card.featured
                        ? "border-primary-foreground/15"
                        : "border-border/70",
                    )}
                  >
                    <ul
                      className={cn(
                        "space-y-3 text-sm",
                        card.featured
                          ? "text-primary-foreground/88"
                          : "text-muted-foreground",
                      )}
                    >
                      {card.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className={cn(
                              "mt-0.5 h-4 w-4 flex-none",
                              card.featured
                                ? "text-primary-foreground"
                                : "text-accent",
                            )}
                            aria-hidden
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>

      <Card className="relative overflow-hidden  mt-20  bg-gradient-to-br from-[#3b12a8] via-[#4d25ce] to-[#280c7a] px-6 py-12 shadow-2xl md:px-12 md:py-16">
        {/* Abstract Background Watermark (mimicking the hexagon from the image) */}
        <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
          <svg
            width="350"
            height="350"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M50 10L84.641 30V70L50 90L15.359 70V30L50 10Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-16 md:flex-row md:items-center md:justify-between lg:gap-8">
          {/* Left Content Column */}
          <div className="flex-1 space-y-6 md:max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Need Something Different?
            </p>

            <h3 className="font-heading text-4xl font-bold leading-[1.15] text-white md:text-4xl">
              {customPackage.subtitle}
            </h3>

            <p className="max-w-md text-base leading-relaxed text-white/80">
              Ready to take your business to the next level with cutting-edge IT
              solutions? Our team is here to help you transform.
            </p>

            {/* Email Input & CTA Bar */}
            <div className="mt-8 flex w-full  items-center rounded-lg bg-white p-1.5 shadow-xl">
            
              <Button
                asChild
                className="rounded-lg bg-[#6366f1] px-6 hover:bg-[#4f46e5]"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  {customPackage.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image & Floating Badges Column */}
          <div className="relative flex min-h-[350px] flex-1 items-center justify-center md:justify-end">
            {/* Floating Feature Badges */}
            <div className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4">
              {customPackage.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex w-max items-center gap-3 rounded-lg bg-white px-4 py-2.5 shadow-lg"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6366f1]">
                    <Check className="h-3 w-3 stroke-[3] text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Hero Image */}
            <img
              src="https://www.virtualpbx.com/wp-content/uploads/2021/10/Improve-Microsoft-Teams-Call-Performance.png"
              alt="IT Expert"
              className="relative z-10 h-[350px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </Card>
    </Section>
  );
}
