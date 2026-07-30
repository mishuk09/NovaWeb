import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { MobileNav } from "@/components/site/mobile-nav";

export function HeroNavbar() {
  return (
    <header className="absolute inset-x-0 top-14 z-20">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4 rounded-xl border border-border/60 bg-background px-4 backdrop-blur md:px-6">
          <Logo />
          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center hover:border-b-2 border-transparent px-1 py-1 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-[var(--primary)] hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}