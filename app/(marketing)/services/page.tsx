import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    <div className="mt-28 flex min-h-screen flex-col">
      <PageHero
        eyebrow="Services"
        title="Services built to help your business get more inquiries."
        description="Choose individual services or combine them into a complete lead-generation system."
      />

      <Section className="   mt-0 pt-0  ">
        <Container className=" ">
          {/* Services Grid */}
          <div className="grid gap-8 lg:gap-12">
            {serviceGroups.map((group) => (
              <Card
                key={group.category}
                className="group overflow-hidden rounded-[2rem] border border-border/50 bg-background/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-10"
              >
                <div className="mb-6 flex items-center justify-between sm:mb-8">
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {group.category}
                  </h2>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group/item flex items-start gap-3 rounded-2xl border border-border/40 bg-muted/30 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-muted/80 hover:shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary/60 transition-colors group-hover/item:text-primary" />
                      <span className="text-sm font-medium leading-snug text-foreground/80 transition-colors group-hover/item:text-foreground md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA Banner */}
          <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-primary/5 px-6 py-12 text-center border border-primary/10 sm:px-12 sm:py-16 lg:py-20">
            <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to scale your business?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
              Let's discuss how we can build a customized lead-generation engine
              tailored to your specific requirements.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 text-base transition-transform hover:scale-105 active:scale-95"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
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
