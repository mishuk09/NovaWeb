import { homePortfolioPreview } from "@/config/home-content";

export type PortfolioProject = {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
  href: string;
  action: string;
  external: boolean;
};

type ProjectApiItem = {
  _id: string;
  title: string;
  githubLink?: string;
  liveLink?: string;
  imageUrls?: string[];
};

function externalUrl(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    const response = await fetch(
      "https://portfolio-backend-q5fr.onrender.com/api/projects",
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(10000) },
    );
    if (!response.ok) throw new Error("Unable to load portfolio");
    const projects = (await response.json()) as ProjectApiItem[];
    if (Array.isArray(projects) && projects.length > 0) {
      const items = projects
        .filter((project) => project && typeof project._id === "string" && typeof project.title === "string" && project.title.trim())
        .map((project): PortfolioProject => {
          const live = externalUrl(project.liveLink);
          const source = externalUrl(project.githubLink);
          return {
            id: project._id,
            title: project.title,
            image: project.imageUrls?.[0] || "/images/portfolio/restaurant.svg",
            category: "Web project",
            href: live || source || "/contact",
            action: live ? "Explore live site" : source ? "View source code" : "Discuss a similar project",
            external: Boolean(live || source),
          };
        });
      if (items.length > 0) return items;
    }
  } catch {
    // Keep the showcase available when the project service is unavailable.
  }
  return homePortfolioPreview.map((project) => ({
    id: project.name,
    title: project.name,
    image: project.image,
    category: `${project.industry} concept`,
    description: project.description,
    href: project.demoHref,
    action: "Discuss a similar project",
    external: false,
  }));
}
