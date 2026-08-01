import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type PricingTier = {
  name: string;
  price: string;
  subtitle: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export function PricingGrid({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-lg border border-border/70 bg-card/90 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.32)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(15,23,42,0.4)]",
            tier.featured && "border-primary/40 shadow-[0_28px_70px_-32px_rgba(37,99,235,0.28)]"
          )}
        >
          <div
            className={cn(
              "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent",
              tier.featured && "from-primary/50 via-primary to-accent"
            )}
          />

          {tier.featured ? (
            <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/15">
              Most Popular
            </span>
          ) : null}

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Package
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">{tier.name}</h3>
            </div>
            {tier.featured ? (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Recommended
              </span>
            ) : null}
          </div>

          <p className="mt-6 font-heading text-3xl font-semibold tracking-tight text-primary">
            {tier.price}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tier.subtitle}</p>

          <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant={tier.featured ? "default" : "outline"} className="mt-7 w-full">
            <Link href="/contact">{tier.cta}</Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}
