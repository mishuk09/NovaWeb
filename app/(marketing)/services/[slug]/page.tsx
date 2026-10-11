import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { serviceDetails } from "@/config/service-content";
import { buildServiceSchema, createPageMetadata } from "@/lib/seo";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  return service
    ? createPageMetadata({
        title: service.title,
        description: service.description,
        pathname: `/services/${service.slug}`,
      })
    : {};
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <>
      <Section className="pt-28 md:pt-40">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            NovaNest services
          </p>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {service.intro}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Discuss your project{" "}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Container>
      </Section>
      <Section className="pt-4">
        <Container className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="font-heading text-3xl font-semibold">
              What we can help with
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-heading text-2xl font-semibold">
              Built around your goals
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              {service.description}
            </p>
          </aside>
        </Container>
      </Section>
      <JsonLd
        data={buildServiceSchema({
          name: service.name,
          description: service.description,
          pathname: `/services/${service.slug}`,
        })}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />
    </>
  );
}
