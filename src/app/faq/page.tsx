import Link from "next/link";
import { faqs, driverFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { meta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Icons";

export const metadata = meta(
  "Freight FAQ | Total Coverage Trucking Florida",
  "Answers about same-day freight in Florida, equipment, cutoffs, liftgate delivery, insurance, tracking, payment and driver jobs at Total Coverage Trucking.",
  "/faq/"
);

export default function FaqPage() {
  const svcFaqs = services.flatMap((s) => s.faqs.map((f) => ({ ...f, svc: s.name })));
  return (
    <>
      <JsonLd data={[faqSchema([...faqs, ...svcFaqs, ...driverFaqs]), breadcrumbSchema([{ name: "FAQ", path: "/faq/" }])]} />
      <PageHero eyebrow="FAQ" title="Straight answers before you book" sub="If your question is not here, call dispatch. A real person answers during business hours." crumbs={[{ name: "FAQ", path: "/faq/" }]} />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="FAQ sections">
            <p className="eyebrow text-orange">Jump to</p>
            <ul className="mt-3 grid gap-1">{[["#shipping", "Shipping & booking"], ["#services", "By service"], ["#drivers", "Drivers & careers"]].map(([h, l]) => <li key={h}><a href={h} className="flex items-center justify-between rounded-lg px-3 py-2 text-[14px] font-semibold text-navy hover:bg-mist">{l}<Arrow className="h-4 w-4 text-muted" /></a></li>)}</ul>
          </nav>
          <div className="space-y-16">
            <div id="shipping"><h2 className="display text-3xl text-navy">Shipping &amp; booking</h2><div className="mt-6"><Faq items={faqs} /></div></div>
            <div id="services"><h2 className="display text-3xl text-navy">By service</h2>
              {services.map((s) => <div key={s.slug} className="mt-8"><h3 className="display-md mb-3 flex items-center justify-between text-lg text-navy">{s.name}<Link href={`/${s.slug}/`} className="text-[13px] font-semibold text-orange hover:underline">Service page →</Link></h3><Faq items={s.faqs} /></div>)}
            </div>
            <div id="drivers"><h2 className="display text-3xl text-navy">Drivers &amp; careers</h2><div className="mt-6"><Faq items={driverFaqs} /></div><Link href="/careers/" className="btn-outline mt-6 px-6 py-3">See open positions <Arrow className="h-4 w-4" /></Link></div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
