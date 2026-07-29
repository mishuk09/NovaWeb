import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo";

export function BreadcrumbSchema({
  items,
}: {
  items: {
    name: string;
    path: string;
  }[];
}) {
  return <JsonLd data={buildBreadcrumbSchema(items)} />;
}

