import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { homePortfolioPreview } from "@/config/home-content";
import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ProjectApiItem = {
  _id: string;
  title: string;
  githubLink?: string;
  liveLink?: string;
  imageUrls?: string[];
};

type PortfolioPreviewItem = {
  id: string;
  title: string;
  image: string;
  liveLink: string;
  githubLink?: string;
};

const PROJECTS_API_URL =
  "https://portfolio-backend-q5fr.onrender.com/api/projects";

async function getPortfolioProjects(): Promise<PortfolioPreviewItem[]> {
  try {
    const response = await fetch(PROJECTS_API_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to load projects: ${response.status}`);
    }

    const projects = (await response.json()) as ProjectApiItem[];

    if (!Array.isArray(projects) || projects.length === 0) {
      return [];
    }

    return projects
      .map((project) => ({
        id: project._id,
        title: project.title,
        image: project.imageUrls?.[0] ?? "/images/portfolio/restaurant.svg",
        liveLink: project.liveLink ?? project.githubLink ?? "/contact",
        githubLink: project.githubLink,
      }))
      .filter((project) => Boolean(project.id) && Boolean(project.title));
  } catch {
    return [];
  }
}

export async function PortfolioPreviewSection() {
  const projects = await getPortfolioProjects();
  const portfolioItems =
    projects.length > 0
      ? projects
      : homePortfolioPreview.map((project, index) => ({
          id: `${project.name}-${index}`,
          title: project.name,
          image: project.image,
          liveLink: project.demoHref,
        }));

  return (
    <Section id="portfolio-preview" className="bg-card/40">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Demo projects crafted for industry-specific conversion."
          description="Each demo is designed to reflect real customer journeys, trust factors, and lead generation goals."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.04}>
              <Card className="group flex h-full flex-col overflow-hidden rounded-2xl p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} portfolio preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-3 p-5">
                  <h3 className="font-heading text-lg font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Live portfolio preview from the project API.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-auto size-sm bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      View Live <ArrowUpRight className="h-4 w-4" />
                    </a>
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
