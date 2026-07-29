import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read the privacy policy for novanest digital solutions agency.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="We respect your privacy and handle your data responsibly."
      />
      <Section className="pt-2">
        <Container className="prose prose-slate dark:prose-invert max-w-4xl">
          <p>
            We collect only the information needed to communicate with you and deliver our
            services. We do not sell personal data to third parties.
          </p>
          <p>
            For inquiries regarding your data, contact us at{" "}
            <a href="mailto:hello@novanest.my">hello@novanest.my</a>.
          </p>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
    </>
  );
}

