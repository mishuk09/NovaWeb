import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homePortfolioPreview } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioPreviewSection() {
  return (
    <Section id="portfolio-preview" className="bg-card/40">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Demo projects crafted for industry-specific conversion."
          description="Each demo is designed to reflect real customer journeys, trust factors, and lead generation goals."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homePortfolioPreview.map((project, index) => (
            <FadeUp key={project.name} delay={index * 0.04}>
              <Card className="group h-full overflow-hidden rounded-2xl p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} ${project.industry} website preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold">{project.name}</h3>
                    <span className="text-xs font-medium text-muted-foreground">
                      {project.industry}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.demoHref}>
                      Request Similar <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
