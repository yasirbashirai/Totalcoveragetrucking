import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { meta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHead } from "@/components/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { Arrow, Check } from "@/components/Icons";

export const metadata = meta(
  "Trucking & Freight Services in Florida | Total Coverage Trucking",
  "Same-day freight, cargo van, box truck, flatbed, dedicated trucking and product distribution across Florida. Asset-based carrier with CDL drivers. Get a quote in one business hour.",
  "/services/"
);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services/" }])} />
      <PageHero eyebrow="Services" title="Trucking services built around the load" sub="Seven services, four unit types, one dispatcher. Every option below runs on our own trucks with our own vetted drivers." crumbs={[{ name: "Services", path: "/services/" }]}>
        <Link href="/get-a-quote/" className="btn-orange display-md px-7 py-4 text-lg">Get a Quote <Arrow className="h-5 w-5" /></Link>
        <Link href="#compare" className="btn-ghost display-md px-7 py-4 text-lg">Compare services</Link>
      </PageHero>

      <section className="bg-cloud py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</div>
        </Container>
      </section>

      <section className="py-20" id="compare">
        <Container>
          <SectionHead eyebrow="Compare" title="Which service fits?" sub="A quick reference. When in doubt, send the weight and dimensions with your quote and dispatch will match the unit." />
          <div className="reveal mt-12 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[720px] text-left text-[14px]">
              <thead className="bg-navy text-white"><tr>{["Service", "Equipment", "Capacity", "Turnaround", "Pallet count"].map((h) => <th key={h} className="px-4 py-3 text-[12px] font-semibold uppercase tracking-wider">{h}</th>)}</tr></thead>
              <tbody>
                {services.map((s, i) => (
                  <tr key={s.slug} className={i % 2 ? "bg-cloud" : "bg-white"}>
                    <td className="px-4 py-3 font-bold text-navy"><Link href={`/${s.slug}/`} className="hover:text-orange">{s.name}</Link></td>
                    <td className="px-4 py-3 text-slate">{(s.specs.find((x) => /equip|deck|box|cargo|trailer/i.test(x.label))?.value ?? s.specs[0].value).replace(/,? ?·? ?\d+–\d+ pallets/, "")}</td>
                    <td className="px-4 py-3 text-slate">{s.specs.find((x) => /payload|coverage|routes|term/i.test(x.label))?.value ?? "—"}</td>
                    <td className="px-4 py-3 text-slate">{/same-day/.test(s.slug) ? "Same day" : "Same-day FL · next-day regional"}</td>
                    <td className="px-4 py-3 font-semibold text-navy">{s.pallets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal-left">
            <p className="eyebrow text-orange">Included on every load</p>
            <h2 className="display mt-3 text-4xl text-navy sm:text-5xl">Standard, not extra</h2>
            <ul className="mt-8 grid gap-3">
              {["Direct run on one truck, no terminals or transfers", "Vetted driver, company equipment, cargo and liability insured", "Pickup confirmation, in-transit updates, signed POD", "Liftgate and pallet jack on all box trucks", "One dispatcher from quote to delivery", `Quotes answered within 1 business hour, ${site.hoursShort}`].map((b) => <li key={b} className="flex items-start gap-3 text-[16px] text-ink"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-100 text-orange"><Check className="h-3.5 w-3.5" /></span>{b}</li>)}
            </ul>
          </div>
          <div className="reveal-right"><QuoteForm compact title="Quote any service" /></div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
