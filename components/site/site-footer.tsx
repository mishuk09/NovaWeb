import Link from "next/link";
import Image from "next/image";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
  PhoneCall,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/60">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            Based in Melaka • Serving businesses across Malaysia
          </p>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.contact.address}
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.contact.businessHours}
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.contact.phone}
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-8">
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
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Payment Options
            </h3>
            <ul className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
              <li className="flex h-14 items-center justify-center rounded-md border border-border/60 bg-background p-2 sm:h-16">
                <Image
                  src="/banktransfer.png"
                  alt="Bank transfer"
                  width={1200}
                  height={600}
                  className="max-h-full w-full object-contain"
                />
              </li>
              <li className="flex h-14 items-center justify-center rounded-md border border-border/60 bg-background p-2 sm:h-16">
                <Image
                  src="/duitnow.png"
                  alt="DuitNow QR"
                  width={1200}
                  height={1200}
                  className="max-h-full w-full object-contain"
                />
              </li>
              <li className="flex h-14 items-center justify-center rounded-md border border-border/60 bg-background p-2 sm:h-16">
                <Image
                  src="/touchandgo.webp"
                  alt="Touch 'n Go eWallet"
                  width={750}
                  height={280}
                  className="max-h-full w-full object-contain"
                />
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="border-t border-border/60 py-4 text-sm text-center  text-muted-foreground">
        © {year} {siteConfig.legalName}. All rights reserved.
      </Container>
    </footer>
  );
}
