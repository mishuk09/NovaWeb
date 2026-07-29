import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CtaSection() {
  return (
    <Section id="cta" className="pb-20">
      <Container>
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-r from-primary to-accent px-6 py-12 text-center text-white shadow-lg md:px-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to get more qualified inquiries every month?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Tell us your goals and budget. We&apos;ll recommend the most suitable approach and send
            a clear quote with timeline.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" className="border-white/30 bg-white/15 text-white">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank">
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
