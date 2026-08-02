"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  "Business Website",
  "Landing Page",
  "E-commerce Website",
  "SEO",
  "Google Business Profile",
  "AI Chatbot + WhatsApp Integration",
];

export function ContactForm() {
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
      console.log("Form data:", formData);
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

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs md:text-sm font-semibold tracking-wide text-primary">
          Get In Touch
        </p>
        <h2 className="text-xl font-bold tracking-tight text-foreground md:text-4xl">
          Make An Free IT Consultant
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name*"
              required
              className="h-12 md:h-16 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
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
              className="h-12 md:h-16 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="h-12 md:h-16 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
            />
          </div>
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="h-12 md:h-16 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
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

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message*"
            required
            rows={4}
            className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-card dark:text-foreground dark:placeholder-muted-foreground"
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 md:h-16 w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 dark:text-primary-foreground"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
