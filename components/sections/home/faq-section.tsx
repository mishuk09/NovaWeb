import { homeFaq } from "@/config/home-content";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildFaqSchema } from "@/lib/seo";

export function FaqSection() {
  return (
    <Section id="faq" className="relative overflow-hidden bg-slate-50/50 py-24 dark:bg-transparent">
      
      {/* Subtle background glow/gradient to make the section pop slightly */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />

      <Container className="space-y-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you need to know before starting your project."
          description="Answers to common questions from business owners planning their digital presence."
        />
        
        <div className="mx-auto max-w-3xl">
          {/* Added space-y-4 to separate the items into individual floating cards */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {homeFaq.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                // Removes default bottom border and turns each item into a polished card with active states
                className="overflow-hidden rounded-2xl border border-border/50 bg-background px-6 py-2 shadow-sm transition-all hover:border-border hover:shadow-md data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.02] data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left text-base font-semibold transition-colors hover:no-underline [&[data-state=open]]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
      
      <JsonLd data={buildFaqSchema(homeFaq)} />
    </Section>
  );
}