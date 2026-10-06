import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type DecorativeShapesProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "section" | "frame";
};

export function DecorativeShapes({
  variant = "section",
  className,
  ...props
}: DecorativeShapesProps) {
  if (variant === "frame") {
    return (
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0", className)}
        {...props}
      >
        <div className="absolute left-6 top-8 h-44 w-44 rounded-lg border border-primary/15" />
        <div className="absolute left-14 top-16 h-32 w-32 rounded-lg border border-primary/10" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      {...props}
    >
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.2)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="absolute left-[7%] top-[12%] h-64 w-64 rounded-full border border-primary/15" />
      <div className="absolute left-[12%] top-[18%] h-48 w-48 rounded-full border border-primary/10" />
      <div className="absolute right-[-4rem] top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}
