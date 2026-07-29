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
    <Section id="faq" className="bg-card/40">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you need to know before starting your project."
          description="Answers to common questions from business owners planning their digital presence."
        />
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-6">
          <Accordion type="single" collapsible>
            {homeFaq.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
      <JsonLd data={buildFaqSchema(homeFaq)} />
    </Section>
  );
}

