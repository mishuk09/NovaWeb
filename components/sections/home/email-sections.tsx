"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { buildFaqSchema } from "@/lib/seo";

export function EmailSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your form submission logic here
      console.log("Form data:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Business Website",
    "Landing Page",
    "E-commerce Website",
    "SEO",
    "Google Business Profile",
    "AI Chatbot + WhatsApp Integration",
  ];

  return (
    <Section
      id="faq"
      className="relative overflow-hidden bg-background py-24 dark:bg-background"
    >
      {/* Subtle background glow/gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-40" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* FAQ Section - Left Side */}
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-wide text-primary">
                FAQs
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
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

          {/* Contact Form - Right Side */}
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-wide text-primary">
                Get In Touch
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Make An Free IT Consultant
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    required
                    className="w-full rounded-lg border border-border bg-card h-16 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Mail*"
                    required
                    className="w-full rounded-lg border border-border bg-card h-16 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
                  />
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full rounded-lg border border-border bg-card h-16 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-card h-16 px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message*"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-primary h-16 px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 dark:text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>

      <JsonLd data={buildFaqSchema(homeFaq)} />
    </Section>
  );
}
