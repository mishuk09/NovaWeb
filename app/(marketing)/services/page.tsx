import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  MessageCircle,
  Server,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { serviceGroups } from "@/config/core-pages-content";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ServiceVisual } from "@/components/sections/services/service-visual";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeShapes } from "@/components/ui/decorative-shapes";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore website development, SEO, hosting, automation, and lead generation services by novanest.",
  pathname: "/services",
});

const serviceDetails = [
  {
    id: "website-development",
    label: "Design & build",
    icon: Globe2,
    description:
      "Turn your first impression into your next opportunity. We create thoughtful, easy-to-use websites that tell your story, earn trust, and help visitors take the next step.",
    outcome: "A digital home built around your business.",
    action: "Let’s build your website",
    visual: "website" as const,
  },
  {
    id: "business-infrastructure",
    label: "Connect & maintain",
    icon: Server,
    description:
      "Give your business a dependable foundation online. From your domain and professional email to hosting and ongoing care, we bring the essentials together so you can focus on your customers.",
    outcome: "Your everyday essentials, working together.",
    action: "Set up your foundation",
    visual: "infrastructure" as const,
  },
  {
    id: "growth-automation",
    label: "Reach & grow",
    icon: TrendingUp,
    description:
      "Make it easier for the right people to find you, connect with you, and become customers. Pair search visibility with practical automations that keep conversations moving and reduce repetitive work.",
    outcome: "More ways to connect. Less work on repeat.",
    action: "Explore your growth opportunities",
    visual: "growth" as const,
  },
];

const faqs = [
  {
    question: "Which service is right for my business?",
    answer:
      "Start with your current goal: launching online, improving an existing website, or attracting more enquiries. Tell us where you are today and what you want to achieve, and we’ll help you choose a practical starting point.",
  },
  {
    question: "Can I combine services into one project?",
    answer:
      "Yes. Website development, hosting, business email, SEO, and automation can be planned together. We’ll agree on the scope and priorities with you so each part supports the same business goal.",
  },
  {
    question: "Do you work with existing websites?",
    answer:
      "Yes. We can review your current website and discuss improvements to its design, content, performance, or integrations. The best approach depends on the platform and the condition of your existing setup.",
  },
  {
    question: "How much will my project cost?",
    answer:
      "Pricing depends on the pages, features, integrations, and support you need. Explore our packages for a starting point, or contact us with your requirements for a tailored quote.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the scope and how ready your content is. After discussing your requirements, we’ll outline the key milestones and agree on a delivery schedule before work begins.",
  },
  {
    question: "Can you help after my website launches?",
    answer:
      "Yes. We offer hosting and website maintenance, and can discuss ongoing SEO or automation as your needs develop. We’ll clarify what is included in your chosen services before you commit.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mt-20 md:mt-38 flex min-h-screen flex-col bg-background text-foreground">
      <Section className="relative overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14">
        <DecorativeShapes />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-8 size-[650px] rounded-lg bg-primary/5 blur-3xl"
        />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" /> Built for your next
              chapter
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Digital services.
              <br />
              Real business.
              <br />
              <span className="text-primary">Room to grow.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              From your first website to a smarter, more connected business. We
              help Malaysian SMEs build, run, and grow their presence online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-lg px-5 sm:px-8"
              >
                <Link href="/contact">
                  Let’s talk about your project{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-lg px-5 sm:px-8"
              >
                <a href="#services">
                  Explore services{" "}
                  <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-7 text-xs font-medium tracking-wide text-muted-foreground">
              Based in Melaka. Building for businesses across Malaysia.
            </p>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-border pb-5">
              <span className="text-sm font-semibold">
                Your next chapter, connected.
              </span>
              <Sparkles className="size-5 text-accent" aria-hidden="true" />
            </div>
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="relative flex gap-5 pb-7 last:pb-0"
                >
                  {index < 2 && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-6 top-12 border-l border-dashed border-primary/25"
                    />
                  )}
                  <span className="relative flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="pt-1">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      0{index + 1} / {service.label}
                    </p>
                    <p className="font-heading text-lg font-semibold">
                      {serviceGroups[index].category}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="mt-8 flex items-center gap-3 rounded-lg bg-accent/10 px-4 py-3 text-sm font-medium text-accent dark:text-foreground">
              <Check className="size-4 shrink-0" aria-hidden="true" /> One
              partner. A connected approach.
            </div>
          </div>
        </Container>
      </Section>

      <Container className="relative -mt-9">
        <nav
          aria-label="Service categories"
          className="grid overflow-hidden rounded-lg border border-border bg-card shadow-sm md:grid-cols-3"
        >
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group flex items-center gap-4 border-b border-border p-5 transition-colors last:border-0 hover:bg-primary/5 md:border-b-0 md:border-r md:p-6"
              >
                <Icon
                  className="size-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    0{index + 1} / {service.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {serviceGroups[index].category}
                  </p>
                </div>
                <ArrowDown
                  className="size-4 text-muted-foreground transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>
      </Container>

      <Section
        id="services"
        aria-label="Our services"
        className="scroll-mt-24 py-20 sm:py-28"
      >
        <Container className="space-y-20 lg:space-y-28">
          {serviceGroups.map((group, index) => {
            const detail = serviceDetails[index];
            return (
              <article
                id={detail.id}
                key={group.category}
                aria-labelledby={`${detail.id}-title`}
                className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-20"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <ServiceVisual variant={detail.visual} />
                </div>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    0{index + 1} / {detail.label}
                  </p>
                  <h2
                    id={`${detail.id}-title`}
                    className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                  >
                    {group.category}
                  </h2>
                  <p className="mt-5 leading-7 text-muted-foreground">
                    {detail.description}
                  </p>
                  <ul className="mt-6 divide-y divide-border/70 border-y border-border/70">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 py-3 text-sm font-medium"
                      >
                        <Check
                          className="size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-medium text-muted-foreground">
                    {detail.outcome}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {detail.action}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </Container>
      </Section>

      <Section className="bg-primary/5 py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-lg bg-primary px-6 py-12 text-primary-foreground sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-lg border-[50px] border-primary-foreground/5"
            />
            <div className="relative max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
                Let’s make your next move
              </p>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                A new website? A fresh start?
                <br />
                Let’s build what comes next.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-primary-foreground/85">
                Bring your ideas, your challenges, or just a question. We’ll
                help you find a clear way forward.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="relative mt-8 h-12 shrink-0 rounded-lg bg-primary-foreground text-primary lg:mt-0"
            >
              <Link href="/contact">
                Start a conversation{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="py-20 sm:py-28" aria-labelledby="services-faq-title">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              A little more clarity
            </p>
            <h2
              id="services-faq-title"
              className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Good questions.
              <br />
              Clear answers.
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
              Choosing a digital partner is a big step. Here are a few things
              you might be wondering.
            </p>
            <div className="mt-8 max-w-sm rounded-lg border border-border bg-card p-6">
              <MessageCircle
                className="mb-4 size-6 text-primary"
                aria-hidden="true"
              />
              <h3 className="font-semibold">Prefer to talk it through?</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Tell us a little about your business. We’ll help you work out
                where to start.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Talk to our team{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="min-w-0">
            <FaqAccordion items={faqs} />
            <p className="mt-5 px-6 text-sm text-muted-foreground">
              Looking for a starting point?{" "}
              <Link
                href="/pricing"
                className="font-medium text-primary underline underline-offset-4"
              >
                Explore our packages
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
    </div>
  );
}
