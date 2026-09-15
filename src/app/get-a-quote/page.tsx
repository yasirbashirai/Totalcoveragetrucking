import { site } from "@/data/site";
import { meta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/Container";
import { QuoteForm } from "@/components/QuoteForm";
import { PhoneLink } from "@/components/PhoneLink";
import { Check, Phone, Clock, Shield, Dollar } from "@/components/Icons";

export const metadata = meta(
  "Get a Freight Quote | Total Coverage Trucking Florida",
  "Request a same-day or scheduled freight quote from an asset-based Florida carrier. Cargo van, box truck and flatbed. Flat rates answered within one business hour.",
  "/get-a-quote/"
);

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ equipment?: string; service?: string }> }) {
  const sp = await searchParams;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Get a Quote", path: "/get-a-quote/" }])} />
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="road-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="eyebrow reveal text-orange-300">Get a quote</p>
            <h1 className="display reveal mt-3 text-5xl sm:text-6xl" style={{ ["--d" as string]: "80ms" }}>A truck, a time and a price. Within the hour.</h1>
            <p className="reveal mt-5 text-lg text-white/80" style={{ ["--d" as string]: "160ms" }}>Two short steps. Dispatch reads every request personally and replies with a flat, all-in rate. No broker margin, no accessorial surprises.</p>
            <ul className="reveal mt-8 grid gap-4" style={{ ["--d" as string]: "240ms" }}>
              {[[Clock, "Answered within 1 business hour", site.hours], [Dollar, "Flat, all-in rates", "Fuel, liftgate and driver assist included in the number we send"], [Shield, "Asset-based carrier", "Our trucks, our CDL drivers, cargo and liability insured"], [Check, "Same-day eligible", "Florida to Florida booked by 12:00 PM ET"]].map(([I, t, s]) => {
                const Icon = I as typeof Clock;
                return <li key={t as string} className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-orange-300"><Icon className="h-5 w-5" /></span><span><strong className="block text-white">{t as string}</strong><span className="text-[14px] text-white/65">{s as string}</span></span></li>;
              })}
            </ul>
            <div className="reveal mt-10 rounded-2xl border border-white/10 bg-white/5 p-5" style={{ ["--d" as string]: "320ms" }}>
              <p className="text-[13px] text-white/60">Prefer to talk it through?</p>
              <PhoneLink location="quote_page" className="mt-1 inline-flex items-center gap-2 font-display text-3xl font-semibold text-white hover:text-orange-300"><Phone className="h-6 w-6 text-orange" />{site.phone}</PhoneLink>
            </div>
          </div>
          <div className="drive-in text-ink"><QuoteForm equipment={sp.equipment ?? ""} service={sp.service ?? ""} /></div>
        </Container>
      </section>
      <section className="bg-cloud py-14">
        <Container>
          <h2 className="display text-center text-3xl text-navy">What helps us quote faster</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["Pickup & delivery ZIPs", "The lane sets the truck and the rate."], ["Weight & pallet count", "Even a close estimate lets us pick the unit."], ["Dock or no dock", "Tells us whether a liftgate is needed."], ["Ready time & window", "Same-day needs the freight staged at pickup."]].map(([t, s], i) => <div key={t} className="card reveal-up p-5" style={{ ["--d" as string]: `${i * 80}ms` }}><p className="display-md text-lg text-navy">{t}</p><p className="mt-1 text-[14px] text-slate">{s}</p></div>)}
          </div>
        </Container>
      </section>
    </>
  );
}
