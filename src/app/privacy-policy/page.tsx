import { site } from "@/data/site";
import { meta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata = { ...meta("Privacy Policy | Total Coverage Trucking", "How Total Coverage Trucking, LLC collects, uses and protects information submitted through this website.", "/privacy-policy/"), robots: { index: false } };

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" sub="Last updated September 2026" crumbs={[{ name: "Privacy Policy", path: "/privacy-policy/" }]} />
      <Container className="prose prose-lg max-w-3xl py-16 prose-headings:font-display prose-headings:uppercase prose-headings:text-navy prose-a:text-orange">
        <h2>What we collect</h2>
        <p>When you request a quote, send a message or apply for a position, we collect the details you enter: name, company, phone, email, shipment details and, for applicants, licence and experience information. We also collect standard analytics data (pages visited, device type) if analytics is enabled.</p>
        <h2>How we use it</h2>
        <p>To respond to your request, quote and dispatch your freight, evaluate applications, and improve the website. We do not sell your information and we do not share it with brokers or marketing lists.</p>
        <h2>Who sees it</h2>
        <p>Our dispatch and hiring staff, and the service providers that deliver our email and hosting. Each is bound to use your data only to provide that service.</p>
        <h2>Retention and your rights</h2>
        <p>Lead and application data is kept as long as needed to serve you and meet legal record-keeping requirements. You can ask us to correct or delete your information at any time by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <h2>Contact</h2>
        <p>{site.legalName}, {site.address.display}. {site.phone} · {site.email}</p>
      </Container>
    </>
  );
}
