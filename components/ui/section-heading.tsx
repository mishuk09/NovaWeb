import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode; // Changed to ReactNode to allow inline styles like <span>
  description?: React.ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl space-y-4 text-center", className)}>
      {eyebrow ? (
        <div className="flex items-center justify-center gap-3">
          <span className="h-[4px] w-16 bg-primary" />
          <span
            className={cn("font-bold uppercase tracking-wider text-primary", eyebrowClassName)}
          >
            {eyebrow}
          </span>
          <span className="h-[4px] w-16 bg-primary" />
        </div>
      ) : null}
      
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      
      {description ? (
        <p
          className={cn(
            "text-base text-muted-foreground md:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}