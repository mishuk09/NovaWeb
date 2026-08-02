import Link from "next/link";
import { homeIndustries } from "@/config/home-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/common/page-hero";
import Image from "next/image";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata = createPageMetadata({
  title: "Industries",
  description:
    "See the industries novanest serves including F&B, hospitality, health, legal, education, and retail businesses.",
  pathname: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Section className="mt-20">
        <Container className="space-y-8">
          <PageHero
            eyebrow="Industries"
            title="              Industries We Serve."
            description="We build for industries that depend on trust, clarity, and
              lead-ready digital experiences."
          />

          <div className="grid gap-4 sm:grid-cols-2  lg:grid-cols-2">
            {homeIndustries.map((industry, index) => {
              const Icon = industry.icon;
              const itemIndex = String(index + 1).padStart(2, "0");
              const badgeClassName = [
                "bg-emerald-500 shadow-emerald-500/20",
                "bg-blue-500 shadow-blue-500/20",
                "bg-violet-500 shadow-violet-500/20",
                "bg-amber-500 shadow-amber-500/20",
                "bg-rose-500 shadow-rose-500/20",
                "bg-cyan-500 shadow-cyan-500/20",
              ][index % 6];

              return (
                <FadeUp key={industry.name} delay={index * 0.03}>
                  <Card className="group relative min-h-[250px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/70">
                    <div className="pointer-events-none absolute inset-0 z-0">
                      {industry.image ? (
                        <Image
                          src={industry.image}
                          alt={`${industry.name} industry`}
                          fill
                          className="z-0 object-cover object-center opacity-90"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <Icon className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 text-emerald-500/18 dark:text-emerald-300/12" />
                      )}
                      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/35 dark:from-black/95 dark:via-black/80 dark:to-black/45" />
                    </div>

                    <span className="pointer-events-none absolute right-6 top-4 z-20 text-6xl font-semibold text-transparent opacity-90 [-webkit-text-stroke:1.5px_rgba(226,232,240,0.9)] drop-shadow-[0_0_8px_rgba(255,255,255,0.18)] dark:[-webkit-text-stroke:1.5px_rgba(226,232,240,0.75)]">
                      {itemIndex}
                    </span>

                    <div className="relative z-20 flex h-full flex-col justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 ${badgeClassName}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="mt-10 space-y-2">
                        <h3 className="font-heading text-3xl font-bold leading-tight text-white">
                          {industry.name}
                        </h3>
                        <p className="text-base leading-relaxed text-white/75">
                          Custom digital experience built to attract and convert
                          customers.
                        </p>
                      </div>
                    </div>
                  </Card>
                </FadeUp>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Get Industry-Specific Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
    </>
  );
}
