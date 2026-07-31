import { BadgeCheck, Clock3, ShieldCheck } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { homeHero } from "@/config/home-content";


const statIcons = [BadgeCheck, Clock3, ShieldCheck];
const iconStyles = [
  "bg-green-500/10 text-green-600 ring-green-500/15",
  "bg-accent/10 text-accent ring-accent/15",
  "bg-emerald-500/10 text-emerald-600 ring-emerald-500/15",
];

export function ShortInfo() {
  return (
    <div className="relative z-20 -mt-20 mb-8 md:-mt-40 md:mb-10">
      <Container>
        <FadeUp delay={0.1}>
          <Card className="overflow-hidden rounded-lg border border-border/40 bg-white p-0 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:bg-slate-950/80">
            {/* <div className="h-1 bg-gradient-to-r from-primary/70 via-primary to-accent" /> */}
            <div className="grid divide-y   md:grid-cols-3 md:divide-x md:divide-y-0">
              {homeHero.stats.map((item, index) => {
                const Icon = statIcons[index % statIcons.length];

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 px-6 py-6 md:px-8 md:py-10"
                  >
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ring-1 ${iconStyles[index % iconStyles.length]}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-heading text-xl font-semibold tracking-tight text-foreground">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </FadeUp>
      </Container>
    </div>
  );
}