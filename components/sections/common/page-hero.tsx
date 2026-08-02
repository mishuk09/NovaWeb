import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <Section className="relative overflow-hidden pb-8 pt-12 md:pb-12 md:pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.22)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute left-[18%] top-[14%] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_10px_rgba(59,130,246,0.08)]" />
      <div className="pointer-events-none absolute right-[16%] top-[22%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(251,191,36,0.08)]" />
      <div className="pointer-events-none absolute bottom-[18%] right-[8%] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_12px_rgba(16,185,129,0.08)]" />
      <div className="pointer-events-none absolute left-[20%] top-[36%] h-7 w-7 rotate-12 rounded-md border-4 border-sky-500/80 bg-white/60 shadow-[0_0_0_10px_rgba(56,189,248,0.05)]" />
      <div className="pointer-events-none absolute right-[18%] top-[34%] h-8 w-8 rounded-full border-[3px] border-violet-500/70 bg-white/40 shadow-[0_0_0_10px_rgba(168,85,247,0.05)]" />
      <Container className="relative flex flex-col items-center space-y-6 text-center">
        {eyebrow ? (
          <Badge className="rounded-full border border-primary/15 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur">
            {eyebrow}
          </Badge>
        ) : null}
        <div className="max-w-5xl space-y-5">
          <h1 className="font-heading text-4xl font-black tracking-tight text-foreground   md:text-6xl  ">
            {title}
          </h1>
          <p className="mx-auto max-w-3xl text-base  md:leading-8 text-muted-foreground  text-sm md:text-xl">
            {description}
          </p>
        </div>
      </Container>
    </Section>
  );
}
