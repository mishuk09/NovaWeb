import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/60">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-semibold">{siteConfig.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{siteConfig.description}</p>
          <p className="mt-3 text-sm font-medium text-foreground">
            Based in Melaka • Serving businesses across Malaysia
          </p>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{siteConfig.contact.address}</li>
            <li>{siteConfig.contact.businessHours}</li>
            <li>{siteConfig.contact.phone}</li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Legal
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-border/60 py-4 text-sm text-muted-foreground">
        © {year} {siteConfig.legalName}. All rights reserved.
      </Container>
    </footer>
  );
}
