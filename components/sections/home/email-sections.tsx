"use client";

import { homeFaq } from "@/config/home-content";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/sections/contact/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildFaqSchema } from "@/lib/seo";

export function EmailSection() {
  return (
    <Section
      id="faq"
      className="relative overflow-hidden bg-background  dark:bg-background"
    >
      {/* Subtle background glow/gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-40" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* FAQ Section - Left Side */}
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs md:text-sm font-semibold tracking-wide text-primary">
                FAQs
              </p>
              <h2 className="text-xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Question
              </h2>
            </div>

            <div className="space-y-3">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {homeFaq.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`item-${index}`}
                    className="overflow-hidden rounded-lg border border-border bg-card px-4 py-2 shadow-sm transition-all hover:border-border hover:shadow-md dark:bg-card dark:border-border data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5 data-[state=open]:shadow-md dark:data-[state=open]:bg-primary/10"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground transition-colors hover:no-underline dark:text-foreground [&[data-state=open]]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>

      <JsonLd data={buildFaqSchema(homeFaq)} />
    </Section>
  );
}
