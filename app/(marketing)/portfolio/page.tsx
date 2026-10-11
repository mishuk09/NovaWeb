import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPortfolioProjects } from "@/lib/portfolio";
import { PageHero } from "@/components/sections/common/page-hero";
import { ProjectShowcase } from "@/components/shared/project-showcase";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section";

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  return (
    <>
      <div className="pt-20 md:pt-28">
        <PageHero
          eyebrow="Portfolio"
          title="Thoughtful design. Real possibilities."
          description="A collection of website projects and industry concepts. Explore the details, discover a direction you love, and imagine what’s next for your business."
        />
      </div>
      <Section id="portfolio-projects">
        <Container className="space-y-8">
          <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-5">
            <h2 className="text-sm font-semibold">Explore the collection</h2>
            <span className="text-xs text-muted-foreground">
              {projects.length} {projects.length === 1 ? "project" : "projects"}
            </span>
          </div>
          <ProjectShowcase projects={projects} />
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/70 bg-card p-6 sm:p-9 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                Your business could be next.
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Tell us what you have in mind. We’ll help you find the right
                direction.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Let’s talk about your project{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>
      <WhyChooseUsSection />
    </>
  );
}
