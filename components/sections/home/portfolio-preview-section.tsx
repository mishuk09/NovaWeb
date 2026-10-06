import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPortfolioProjects } from "@/lib/portfolio";
import { ProjectShowcase } from "@/components/shared/project-showcase";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export async function PortfolioPreviewSection() {
  const projects = await getPortfolioProjects();
  return (
    <Section
      id="portfolio-preview"
      className="border-y border-border/50 bg-card/40"
    >
      <SectionHeading
        eyebrow="Portfolio"
        title="Demo projects crafted for industry-specific conversion."
        description="Each demo is designed to reflect real customer journeys, trust factors, and lead generation goals."
      />
      <Container className="space-y-8 mt-10 md:space-y-10">
        <ProjectShowcase projects={projects.slice(0, 6)} />
      </Container>
    </Section>
  );
}
