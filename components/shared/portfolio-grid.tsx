import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export type PortfolioItem = {
  name: string;
  industry: string;
  description: string;
  image: string;
  stack: string[];
  demoHref: string;
};

export function PortfolioGrid({
  items,
  compact = false,
}: {
  items: PortfolioItem[];
  compact?: boolean;
}) {
  const visibleItems = compact ? items.slice(0, 3) : items;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {visibleItems.map((project) => (
        <Card key={project.name} className="group h-full overflow-hidden rounded-2xl p-0">
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
              <span className="text-xs font-medium text-muted-foreground">{project.industry}</span>
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
      ))}
    </div>
  );
}
