import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";

export function ProjectShowcase({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <article key={project.id} className="group flex min-w-0 flex-col">
          <Link
            href={project.href}
            target={project.external ? "_blank" : undefined}
            rel={project.external ? "noopener noreferrer" : undefined}
            aria-label={`${project.action}: ${project.title}${project.external ? " (opens in a new tab)" : ""}`}
            className="block shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-muted/40 p-3 transition-colors hover:border-primary/40 focus-visible:outline-offset-4"
          >
            <div className="overflow-hidden rounded-lg border border-border/60 bg-card shadow-lg shadow-slate-950/5 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-1">
              <div aria-hidden="true" className="flex h-9 items-center gap-1.5 border-b border-border/60 bg-card px-3">
                <span className="size-1.5 rounded-full bg-muted-foreground/35" />
                <span className="size-1.5 rounded-full bg-muted-foreground/25" />
                <span className="size-1.5 rounded-full bg-muted-foreground/15" />
                <span className="mx-auto truncate px-4 text-[10px] tracking-wide text-muted-foreground">{project.title}</span>
                <ArrowUpRight className="size-3 text-muted-foreground" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 365px"
                  className="object-cover object-top motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </Link>
          <div className="flex flex-1 flex-col px-1 pt-4">
            <div className="mb-2 flex items-center justify-between gap-3 text-xs">
              <span className="font-medium uppercase tracking-[0.16em] text-primary">{project.category}</span>
              <span aria-hidden="true" className="font-mono text-muted-foreground/65">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="break-words font-heading text-xl font-semibold leading-snug tracking-tight">{project.title}</h3>
            {project.description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p> : null}
            <div className="flex-1" />
            <Link
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="mt-2 inline-flex min-h-11 items-center self-start gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
              aria-label={`${project.action}: ${project.title}${project.external ? " (opens in a new tab)" : ""}`}
            >
              {project.action}
              {project.external ? <ArrowUpRight aria-hidden="true" className="size-4" /> : <ArrowRight aria-hidden="true" className="size-4" />}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
