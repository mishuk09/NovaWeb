import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { HeroInfoStrip } from "@/components/sections/home/hero-info-strip";
import { HeroNavbar } from "@/components/sections/home/hero-navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
       <HeroInfoStrip />
      <HeroNavbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
      <Analytics />
    </div>
  );
}
