import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/page-schemas";
import { PageHero } from "@/components/sections/common/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "Read the terms and conditions for novanest services.",
  pathname: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <div className="pt-20 md:pt-38">
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
            <nav aria-label="Terms sections" className="mt-4">
              <ol className="grid gap-2 border-l border-border pl-4 text-sm text-muted-foreground">
                <li>
                  <a className="hover:text-primary" href="#services">
                    Our services
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#scope">
                    Project scope
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#responsibilities">
                    Client responsibilities
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#fees">
                    Fees and payment
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#delivery">
                    Delivery and acceptance
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary"
                    href="#intellectual-property"
                  >
                    Intellectual property
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary"
                    href="#third-party-services"
                  >
                    Third-party services
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#support">
                    Support and maintenance
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#confidentiality">
                    Confidentiality
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#acceptable-use">
                    Acceptable use
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#warranties">
                    Warranties and limits
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#termination">
                    Termination
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#governing-law">
                    Governing law
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
              These Terms and Conditions ("Terms") govern your use of the
              novanest.my website and your engagement of novanest Digital
              Solutions Agency ("novanest", "we", "us", or "our") for digital
              services. By using this website or accepting a proposal, you agree
              to these Terms.
            </p>

            <h2 id="services">1. Our services</h2>
            <p>
              novanest provides digital services that may include website design
              and development, landing pages, e-commerce websites, search engine
              optimisation, Google Business Profile support, automation, AI
              chatbot and WhatsApp integrations, analytics, and related
              consulting. The exact services, deliverables, assumptions, fees,
              and timeline will be set out in the applicable proposal,
              quotation, statement of work, or service agreement.
            </p>

            <h2 id="scope">2. Proposals and project scope</h2>
            <p>
              A project begins when you accept our written proposal and satisfy
              any required deposit or onboarding condition. The accepted
              proposal is the main record of the agreed scope. Requests outside
              that scope, including additional pages, features, revisions,
              content, integrations, or support, may require a change order,
              additional fees, and an adjusted timeline. Work is subject to our
              availability and receipt of the information and access we
              reasonably need from you.
            </p>

            <h2 id="responsibilities">3. Client responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>
                provide accurate information, content, approvals, and access
                without unreasonable delay;
              </li>
              <li>
                review work and provide consolidated feedback within the agreed
                review period;
              </li>
              <li>
                ensure you have the rights and permissions to use all content,
                images, trademarks, data, and materials supplied to us; and
              </li>
              <li>
                use any delivered website, software, integrations, and content
                lawfully and responsibly.
              </li>
            </ul>
            <p>
              Delays caused by missing content, late feedback, unavailable
              access, or third-party systems may move the delivery date and may
              result in additional charges.
            </p>

            <h2 id="fees">4. Fees and payment</h2>
            <p>
              Fees, deposits, payment milestones, taxes, recurring charges, and
              payment due dates are stated in the applicable proposal or
              invoice. Unless a written agreement says otherwise, work may be
              paused if an invoice is overdue. Deposits and payments for work
              already completed are non-refundable except where required by law
              or expressly agreed in writing.
            </p>

            <h2 id="delivery">5. Delivery, review, and acceptance</h2>
            <p>
              We will make reasonable efforts to meet agreed timelines, but
              delivery dates depend on timely client cooperation and third-party
              services. You are responsible for reviewing deliverables and
              reporting material issues within the agreed review period. A
              deliverable may be treated as accepted when you approve it, put it
              into use, or do not report a material issue within that period.
            </p>

            <h2 id="intellectual-property">
              6. Content and intellectual property
            </h2>
            <p>
              You retain ownership of materials you provide to us. You grant
              novanest a limited licence to use those materials only to perform
              the project. Subject to full payment, you receive the rights to
              the final, custom deliverables identified in the proposal. Our
              pre-existing tools, templates, code libraries, processes,
              know-how, and reusable components remain ours, and we grant you
              the licence needed to use them as part of the final deliverable.
            </p>
            <p>
              Third-party software, fonts, stock assets, plugins, hosting,
              domains, APIs, and other services remain subject to their own
              licences and terms. We may display completed work in our portfolio
              unless the proposal or a written confidentiality agreement says
              otherwise.
            </p>

            <h2 id="third-party-services">
              7. Third-party services and results
            </h2>
            <p>
              Websites and integrations may depend on hosting providers, domain
              registrars, payment gateways, search engines, social platforms,
              messaging services, APIs, or other third parties. We do not
              control their availability, pricing, policies, algorithm changes,
              or security. SEO, advertising, lead generation, rankings, traffic,
              sales, and business outcomes cannot be guaranteed.
            </p>

            <h2 id="support">8. Support and maintenance</h2>
            <p>
              Post-launch support, maintenance, hosting, security updates,
              content changes, and ongoing SEO are included only where stated in
              the applicable agreement. Unauthorised changes by you or another
              provider may fall outside support and may require a separate
              assessment or fee.
            </p>

            <h2 id="confidentiality">9. Confidentiality and personal data</h2>
            <p>
              Each party will take reasonable steps to protect confidential
              information received from the other party and use it only for the
              relevant business purpose. We will handle personal data in
              accordance with our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>
              and applicable Malaysian law. You are responsible for ensuring
              that any personal data supplied to us may lawfully be used for the
              project.
            </p>

            <h2 id="acceptable-use">10. Acceptable use and suspension</h2>
            <p>
              You must not use our website or deliverables to violate the law,
              infringe another person&apos;s rights, distribute malicious code,
              deceive users, or facilitate abuse. We may suspend work or access
              where reasonably necessary to protect our systems, comply with
              law, address non-payment, or prevent misuse.
            </p>

            <h2 id="warranties">11. Warranties and limitations</h2>
            <p>
              We will perform agreed services with reasonable care and skill.
              Except for warranties that cannot be excluded under law, the
              website and services are provided without a guarantee that they
              will be uninterrupted, error-free, compatible with every system,
              or achieve a particular commercial result. To the extent permitted
              by law, novanest is not liable for indirect, incidental, special,
              or consequential loss, or loss caused by third-party services,
              inaccurate client materials, or unauthorised changes.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot
              lawfully be excluded or limited. Any project-specific liability
              cap or remedy will be stated in the signed proposal or service
              agreement.
            </p>

            <h2 id="termination">12. Termination</h2>
            <p>
              Either party may end a project in accordance with the applicable
              proposal or service agreement. If a project ends, you must pay for
              work completed, approved expenses, and any non-cancellable
              third-party commitments incurred up to the termination date. We
              may retain or withhold deliverables until outstanding amounts are
              paid, subject to applicable law.
            </p>

            <h2 id="governing-law">13. Governing law</h2>
            <p>
              These Terms are governed by the laws of Malaysia. The parties will
              first try to resolve disputes in good faith. Subject to any
              different written agreement, the courts of Malaysia will have
              jurisdiction.
            </p>

            <h2 id="changes">14. Changes to these Terms</h2>
            <p>
              We may update these website Terms from time to time. The updated
              version will be posted on this page with a revised date. A signed
              proposal or service agreement continues to govern the project it
              covers unless the parties agree otherwise in writing.
            </p>

            <h2 id="contact">15. Contact us</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href="mailto:support@novanest.my">support@novanest.my</a>.
            </p>
          </article>
        </Container>
      </Section>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
    </>
  );
}
