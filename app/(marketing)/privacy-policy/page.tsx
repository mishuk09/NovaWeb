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
     <div  className="pt-20 md:pt-38">
       <PageHero
        title="Privacy Policy"
        description="We respect your privacy and handle your data responsibly."
      />
     </div>
      <Section className="pt-4 pb-20 md:pt-8">
        <Container className="grid max-w-6xl gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              On this page
            </p>
            <nav aria-label="Privacy Policy sections" className="mt-4">
              <ol className="grid gap-2 border-l border-border pl-4 text-sm text-muted-foreground">
                <li>
                  <a className="hover:text-primary" href="#personal-data">
                    Personal data
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#collection">
                    How we collect information
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#use">
                    How we use personal data
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#disclosure">
                    Disclosure and providers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#external-platforms">
                    External platforms
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#retention-security">
                    Retention and security
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#rights">
                    Your rights
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#children">
                    Children
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#changes">
                    Changes
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#contact">
                    Contact
                  </a>
                </li>
              </ol>
            </nav>
          </aside>
          <article className="prose prose-slate dark:prose-invert max-w-3xl prose-headings:scroll-mt-28 prose-headings:font-heading prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <p className="lead">
              <strong>Last updated: 6 October 2026</strong>
            </p>
            <p>
              novanest Digital Solutions Agency ("novanest", "we", "us", or
              "our") respects your privacy. This Privacy Policy explains how we
              collect, use, disclose, and protect personal data when you visit
              novanest.my, contact us, or engage us for digital services.
            </p>
            <p>
              This policy is intended to be read together with any proposal,
              statement of work, or service agreement that applies to a specific
              project. By using this website, you acknowledge this policy. Where
              consent is required, we will request it separately.
            </p>

            <h2 id="personal-data">1. Personal data we collect</h2>
            <p>Depending on how you interact with us, we may collect:</p>
            <ul>
              <li>
                <strong>Contact details:</strong> your name, email address,
                telephone number, and business or location details you choose to
                provide.
              </li>
              <li>
                <strong>Enquiry details:</strong> the service you are interested
                in, your budget or timeline, and the contents of your message.
              </li>
              <li>
                <strong>Technical information:</strong> browser and device
                information, referring pages, pages visited, approximate
                location, and interaction or performance data collected through
                website analytics.
              </li>
              <li>
                <strong>Project information:</strong> information you provide to
                enable us to plan, build, maintain, or improve an agreed
                service.
              </li>
            </ul>

            <h2 id="collection">2. How we collect information</h2>
            <p>
              We collect information directly from you when you submit our
              contact form, email us, contact us through WhatsApp or social
              media, request a quotation, or provide project information. We may
              also receive technical usage information through Vercel Analytics
              and similar technologies used to understand website performance
              and improve the site.
            </p>

            <h2 id="use">3. How we use personal data</h2>
            <p>We use personal data to:</p>
            <ul>
              <li>
                respond to enquiries, provide quotations, and communicate about
                our services;
              </li>
              <li>deliver, manage, support, and improve client projects;</li>
              <li>
                understand website usage, diagnose technical issues, and improve
                content;
              </li>
              <li>
                maintain business records, prevent misuse, and protect our legal
                rights; and
              </li>
              <li>
                send service-related updates or marketing where permitted by law
                and your preferences.
              </li>
            </ul>

            <h2 id="disclosure">4. Disclosure and service providers</h2>
            <p>
              We do not sell your personal data. We may share information only
              where reasonably necessary with trusted service providers that
              help us operate the website or deliver services, including our
              email delivery provider, hosting and infrastructure providers,
              analytics providers, subcontractors, and professional advisers.
              These parties may use information only for the relevant service or
              as required by law.
            </p>
            <p>
              We may also disclose information where required by law, court
              order, regulatory authority, or where necessary to protect the
              rights, safety, or property of novanest, our clients, or others.
            </p>

            <h2 id="external-platforms">5. External websites and platforms</h2>
            <p>
              This website includes links to platforms such as WhatsApp and
              social networks. Those platforms operate under their own privacy
              policies and terms. We are not responsible for how an external
              platform collects or uses information after you leave our site.
            </p>

            <h2 id="retention-security">6. Retention and security</h2>
            <p>
              We retain personal data only for as long as reasonably necessary
              for the purposes described in this policy, to provide services,
              resolve disputes, maintain business records, or meet legal and
              accounting requirements. We use reasonable administrative,
              technical, and organisational safeguards, but no internet
              transmission or storage system can be guaranteed to be completely
              secure.
            </p>

            <h2 id="rights">7. Your rights</h2>
            <p>
              Subject to applicable law, you may ask us to access, correct, or
              update your personal data, ask about how it is used, withdraw
              consent where processing relies on consent, or request that we
              stop using your data for direct marketing. We may need to verify
              your identity before completing a request and may retain
              information where the law allows or requires us to do so.
            </p>

            <h2 id="children">8. Children</h2>
            <p>
              Our services and website are intended for businesses and adults.
              We do not knowingly collect personal data from children. Please
              contact us if you believe a child has provided personal data to
              us.
            </p>

            <h2 id="changes">9. Changes to this policy</h2>
            <p>
              We may update this policy when our services, technology, or legal
              obligations change. The updated version will be posted on this
              page with a revised date. Your continued use of the website after
              an update means the updated policy applies to future use.
            </p>

            <h2 id="contact">10. Contact us</h2>
            <p>
              For privacy questions or requests, contact novanest at{" "}
              <a href="mailto:support@novanest.my">support@novanest.my</a> or
              write to novanest Digital Solutions Agency, Melaka, Malaysia.
            </p>
          </article>
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
