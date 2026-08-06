import {
  Mail,
  MapPin,
  MessageCircleMore,
  Clock3,
  PhoneCall,
} from "lucide-react";
import { contactChannels } from "@/config/core-pages-content";
import { siteConfig } from "@/config/site";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact novanest for website development, SEO, and digital growth services in Melaka and across Malaysia.",
  pathname: "/contact",
});

const iconMap = {
  Phone: PhoneCall,
  Email: Mail,
  WhatsApp: MessageCircleMore,
  "Business Hours": Clock3,
};

export default function ContactPage() {
  return (
    <div className="mt-15 md:mt-28 flex min-h-screen flex-col bg-background text-foreground">
      <PageHero
        eyebrow="Contact"
        title="Request your quote in minutes."
        description="Share your goals, timeline, and budget range. We’ll reply with a clear recommendation and quotation scope."
      />

      <Section className="pt-2">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="space-y-5 rounded-lg">
            <p className="mb-2 text-xs md:text-sm font-semibold tracking-wide text-primary">
              Get Info
            </p>
            <h2 className="text-xl font-bold tracking-tight text-foreground md:text-4xl">
              Make An Free IT Consultant
            </h2>
            <div className="space-y-3">
              {contactChannels.map((item) => {
                const Icon = iconMap[item.label as keyof typeof iconMap];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3"
                  >
                    {Icon ? (
                      <Icon className="mt-0.5 h-4 w-4 text-primary" />
                    ) : null}
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="rounded-xl border border-border bg-background px-4 py-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium">Office Location</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {siteConfig.contact.address}
              </p>
            </div>
          </Card>
          <Card>
            <ContactForm />
          </Card>
        </Container>
        <Container className="mt-16">
          <Card className="space-y-4 overflow-hidden rounded-lg p-0">
            <iframe
              title="novanest location map"
              src="https://www.google.com/maps?q=Melaka,+Malaysia&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
            />
          </Card>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    </div>
  );
}
