import { site } from "@/data/site";
import { meta } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata = { ...meta("Terms of Service | Total Coverage Trucking", "Terms governing use of the Total Coverage Trucking, LLC website and quote requests.", "/terms/"), robots: { index: false } };

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" sub="Last updated September 2026" crumbs={[{ name: "Terms", path: "/terms/" }]} />
      <Container className="prose prose-lg max-w-3xl py-16 prose-headings:font-display prose-headings:uppercase prose-headings:text-navy prose-a:text-orange">
        <h2>Quotes</h2>
        <p>Quotes provided through this website or by phone are estimates based on the information you supply. Final rates are confirmed at booking and may change if weight, dimensions, accessorials or pickup and delivery conditions differ from what was quoted.</p>
        <h2>Bookings and cancellations</h2>
        <p>A shipment is booked when dispatch confirms it in writing. Same-day bookings cancelled after a truck has been dispatched may incur a truck-ordered-not-used charge.</p>
        <h2>Carrier liability</h2>
        <p>{site.legalName} operates as a motor carrier subject to applicable federal and state regulations. Cargo liability is governed by our bill of lading and tariff, and by the terms of our cargo insurance. Declared-value coverage is available on request at booking.</p>
        <h2>Website use</h2>
        <p>Content on this site is provided for information. We may update services, coverage and pricing at any time. You agree not to submit false or misleading information through our forms.</p>
        <h2>Contact</h2>
        <p>{site.legalName} · {site.phone} · {site.email}</p>
      </Container>
    </>
  );
}
