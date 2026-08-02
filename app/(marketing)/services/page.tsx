import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { serviceGroups } from "@/config/core-pages-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/common/page-hero";
import { createPageMetadata } from "@/lib/seo";
import IndustriesPage from "../industries/page";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore website development, SEO, hosting, automation, and lead generation services by novanest.",
  pathname: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mt-28 flex min-h-screen flex-col bg-background text-foreground">
      {/* 
        Updated PageHero to match the clean, bold aesthetic 
        of the "Organize Your Projects" header in the PDF.
      */}
      <PageHero
        eyebrow="Our Services"
        title="Software Development Your Business Needs From Start-Up To Success"
        description="Choose individual services or combine them into a complete lead-generation system with maximum efficiency."
      />

      <Section className="  ">
        <Container className="space-y-14">
          {/* Services Grid - Styled like the clean pricing/feature cards */}
          <div className="grid gap-8 lg:gap-12">
            {serviceGroups.map((group, index) => (
              <Card
                key={group.category}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 text-card-foreground shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(15,23,42,0.1)] sm:p-12"
              >
                <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
                  {/* Left Column: Category Info */}
                  <div className="lg:col-span-4 lg:pr-8">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-xs font-bold uppercase tracking-wide">
                        Module 0{index + 1}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {group.category}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {/* @ts-ignore */}
                      {group.description ||
                        `Comprehensive ${group.category.toLowerCase()} solutions tailored to accelerate your business growth, streamline operations, and drive measurable results.`}
                    </p>
                  </div>

                  {/* Right Column: Service Items with checkmarks styled like the PDF list items */}
                  <div className="border-border lg:col-span-8 lg:border-l lg:pl-8">
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="group/item flex items-start gap-4 rounded-xl border border-border/60 bg-muted/40 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-card hover:shadow-md"
                        >
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover/item:bg-primary/20">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-semibold leading-snug text-foreground transition-colors md:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* 
            Enhanced CTA Banner 
            Directly modeled after the "Let's Get To Work" section in the provided PDF.
          */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-card px-6 py-20 text-center shadow-lg sm:px-12 ">
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h3 className="mb-4 font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                Let's Get To Work
              </h3>
              <p className="mx-auto mb-8 max-w-2xl font-medium text-muted-foreground sm:text-lg">
                Check Ranking Reports Via Our Web App, Contact Us Today!
              </p>

              <div className="mb-10 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                +1 (888) 123-4567
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full rounded-full bg-primary px-10 text-base font-bold text-primary-foreground shadow-md transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg active:scale-95 sm:w-auto"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-0  ">
        <IndustriesPage />
      </Section>

      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
    </div>
  );
}
