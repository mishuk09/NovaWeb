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
    <Section className="pb-1 pt-10 md:pb-0 md:pt-12">
      <Container className="space-y-5">
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{description}</p>
      </Container>
    </Section>
  );
}
