import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { meta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHead } from "@/components/Container";
import { FloridaMap } from "@/components/FloridaMap";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { Arrow, Pin } from "@/components/Icons";

export const metadata = meta(
  "Service Area | Same-Day Trucking Across Florida & the Southeast",
  "Total Coverage Trucking serves all 67 Florida counties with same-day freight delivery, plus next-day regional lanes into Georgia, Alabama, South Carolina, North Carolina and Tennessee.",
  "/service-area/", "/images/reefer.webp"
);

const CORRIDORS = [
  { t: "I-4 corridor", s: "Tampa · Lakeland · Orlando · Daytona Beach. The busiest same-day lane in the state." },
  { t: "I-95 Atlantic coast", s: "Jacksonville · Daytona · Space Coast · West Palm · Fort Lauderdale · Miami." },
  { t: "I-75 Gulf coast", s: "Gainesville · Ocala · Tampa · Sarasota · Fort Myers · Naples." },
  { t: "I-10 panhandle", s: "Pensacola · Panama City · Tallahassee · Lake City · Jacksonville." },
];

export default function ServiceAreaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Service Area", path: "/service-area/" }])} />
      <PageHero eyebrow="Service area" title="Every Florida county, same day" sub="Dispatched from the truck nearest your dock. Regional lanes into the Southeast run next business day, and longer hauls are quoted case by case." image="/images/reefer.webp" imageAlt="Total Coverage Trucking semi truck on a Florida highway" crumbs={[{ name: "Service Area", path: "/service-area/" }]}>
        <Link href="#quote" className="btn-orange display-md px-7 py-4 text-lg">Check my lane <Arrow className="h-5 w-5" /></Link>
      </PageHero>

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left mx-auto w-full max-w-lg rounded-3xl navy-section p-6 shadow-[var(--shadow-lift)]"><FloridaMap className="w-full" /></div>
          <div className="reveal-right">
            <p className="eyebrow text-orange">Florida, statewide</p>
            <h2 className="display mt-3 text-4xl text-navy sm:text-5xl">14 metro hubs, 67 counties</h2>
            <p className="mt-4 text-[16px] text-slate">Same-day service applies to any Florida-to-Florida lane booked by 12:00 PM ET. Later bookings are covered whenever a truck is positioned nearby.</p>
            <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {site.floridaMarkets.map((m) => { const c = cities.find((x) => x.name === m); const inner = <><Pin className="h-4 w-4 text-orange" />{m}{c && <Arrow className="ml-auto h-3.5 w-3.5 text-muted" />}</>; return c ? <li key={m}><Link href={`/trucking-${c.slug}/`} className="flex items-center gap-2 rounded-lg border border-line bg-cloud px-3 py-2 text-[14px] font-semibold text-navy transition hover:border-orange hover:text-orange">{inner}</Link></li> : <li key={m} className="flex items-center gap-2 rounded-lg border border-line bg-cloud px-3 py-2 text-[14px] font-semibold text-navy">{inner}</li>; })}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-20">
        <Container>
          <SectionHead eyebrow="Main lanes" title="The corridors we run daily" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORRIDORS.map((c, i) => <div key={c.t} className="card card-hover reveal-up p-6" style={{ ["--d" as string]: `${i * 90}ms` }}><span className="stripe-thin block h-1 w-16 rounded" /><h3 className="display-md mt-4 text-xl text-navy">{c.t}</h3><p className="mt-2 text-[14px] text-slate">{c.s}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal-left">
            <p className="eyebrow text-orange">Regional</p>
            <h2 className="display mt-3 text-4xl text-navy sm:text-5xl">Next-day into the Southeast</h2>
            <p className="mt-4 text-[16px] text-slate">Box truck and flatbed lanes from Florida into five neighbouring states, typically delivered the next business day. Ideal for distributors serving the whole Southeast from a Florida warehouse.</p>
            <ul className="mt-6 flex flex-wrap gap-2">{site.regionalStates.map((s) => <li key={s} className="rounded-full bg-navy px-4 py-1.5 text-[14px] font-semibold text-white">{s}</li>)}</ul>
            <div className="mt-8 rounded-2xl border border-line bg-mist p-5">
              <p className="display-md text-lg text-navy">Beyond the Southeast?</p>
              <p className="mt-1 text-[14px] text-slate">Send the lane anyway. If it fits our equipment and schedule we will quote it, and if it does not we will say so within the hour.</p>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">{services.slice(0, 4).map((s) => <Link key={s.slug} href={`/${s.slug}/`} className="flex items-center justify-between rounded-lg border border-line px-4 py-3 text-[14px] font-semibold text-navy hover:border-orange hover:text-orange">{s.name}<Arrow className="h-4 w-4" /></Link>)}</div>
          </div>
          <div className="reveal-right" id="quote"><QuoteForm compact title="Check your lane" /></div>
        </Container>
      </section>

      <section className="relative h-[42vh] min-h-[280px] overflow-hidden">
        <Image src="/images/truck-front.webp" alt="Total Coverage Trucking truck ready for dispatch" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy-900/60" />
        <div className="absolute inset-0 grid place-items-center text-center text-white"><p className="display max-w-3xl px-5 text-3xl sm:text-5xl">Wherever the dock is, we know the road there.</p></div>
      </section>
      <CtaBand />
    </>
  );
}
