import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type PricingTier = {
  name: string;
  price: string;
  timeline: string;
  bestFor?: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export function PricingGrid({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={`flex h-full flex-col rounded-2xl p-6 ${
            tier.featured ? "border-primary shadow-md shadow-primary/10" : ""
          }`}
        >
          {tier.featured ? (
            <span className="mb-3 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Most Popular
            </span>
          ) : null}
          <h3 className="font-heading text-xl font-semibold">{tier.name}</h3>
          <p className="mt-3 font-heading text-2xl font-semibold text-primary">{tier.price}</p>
          <p className="mt-1 text-sm text-muted-foreground">Timeline: {tier.timeline}</p>
          {tier.bestFor ? (
            <p className="mt-2 text-sm font-medium text-foreground/90">{tier.bestFor}</p>
          ) : null}
          <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 w-full">
            <Link href="/contact">{tier.cta}</Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}
