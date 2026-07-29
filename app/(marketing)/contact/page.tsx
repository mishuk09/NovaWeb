import Link from "next/link";
import { Mail, MapPin, MessageCircleMore, Clock3, CheckCircle2, PhoneCall } from "lucide-react";
import { contactChannels } from "@/config/core-pages-content";
import { siteConfig } from "@/config/site";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

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
    <>
      <PageHero
        eyebrow="Contact"
        title="Request your quote in minutes."
        description="Share your goals, timeline, and budget range. We’ll reply with a clear recommendation and quotation scope."
      />

      <Section className="pt-2">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="space-y-5 rounded-2xl">
            <h2 className="font-heading text-2xl font-semibold">Fastest way to get a quote</h2>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="font-medium text-foreground">What to include in your message:</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  Business type and services
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  Website goals (leads, bookings, sales)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  Preferred launch timeline and budget range
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              {contactChannels.map((item) => {
                const Icon = iconMap[item.label as keyof typeof iconMap];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3"
                  >
                    {Icon ? <Icon className="mt-0.5 h-4 w-4 text-primary" /> : null}
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
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
              <p className="mt-1 text-sm text-muted-foreground">{siteConfig.contact.address}</p>
            </div>
            <Button asChild size="lg" className="w-full">
              <Link href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank">
                WhatsApp Us for a Quick Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link
                href={`mailto:${siteConfig.contact.email}?subject=Quote Request - My Business Website`}
              >
                Send Quote Request by Email
              </Link>
            </Button>
          </Card>

          <Card className="space-y-4 overflow-hidden rounded-2xl p-0">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-heading text-lg font-semibold">Our location and service area</h2>
              <p className="text-sm text-muted-foreground">
                Based in Melaka, supporting clients across Malaysia via online collaboration.
              </p>
            </div>
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
        items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]}
      />
    </>
  );
}
