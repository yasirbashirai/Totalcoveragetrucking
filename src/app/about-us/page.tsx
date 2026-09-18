import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { meta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHead } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Arrow, Shield, Clock, Route, Users, Truck, Check } from "@/components/Icons";

export const metadata = meta(
  "About Total Coverage Trucking | Asset-Based Florida Carrier",
  "Total Coverage Trucking, LLC is a Florida trucking company that moves product with its own trucks and drivers. Learn how we operate, what we promise and where we are headed.",
  "/about-us/", "/images/office.webp"
);

const VALUES = [
  { icon: Shield, t: "Asset-based, accountable", s: "We own the equipment and employ the drivers. When something needs fixing, there is no one to hand it off to but us." },
  { icon: Clock, t: "Same-day is the standard", s: "Florida lanes booked by noon deliver before close of business. It is the promise the company was built on." },
  { icon: Route, t: "Direct runs only", s: "Freight rides one truck from your dock to the receiver. No cross-docks, no transfers, no surprises." },
  { icon: Users, t: "One point of contact", s: "The dispatcher who quotes your load is the one tracking it. You always know who to call." },
];

const ROADMAP = [
  { when: "Today", t: "Florida same-day, Southeast regional", s: "Cargo van, box truck, flatbed and dry van capacity dispatched statewide, next-day lanes into GA, AL, SC, NC and TN." },
  { when: "Next 12 months", t: "Dedicated routes and more units", s: "Adding trucks against committed distribution routes so shippers get the same driver on the same lane every week." },
  { when: "24 months", t: "10-truck fleet, nationwide lanes", s: "Growing the fleet on the back of dedicated agreements and opening longer-haul lanes for existing customers." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About Us", path: "/about-us/" }])} />
      <PageHero eyebrow="About us" title="A trucking company that moves product" sub="Total Coverage Trucking, LLC is a Florida-based, asset-based carrier. We keep the promise simple: our trucks, our drivers, delivered when we said." image="/images/office.webp" imageAlt="Total Coverage Trucking dispatch office" crumbs={[{ name: "About Us", path: "/about-us/" }]}>
        <Link href="/get-a-quote/" className="btn-orange display-md px-7 py-4 text-lg">Work with us <Arrow className="h-5 w-5" /></Link>
        <Link href="/careers/" className="btn-ghost display-md px-7 py-4 text-lg">Drive with us</Link>
      </PageHero>

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left">
            <p className="eyebrow text-orange">Who we are</p>
            <h2 className="display mt-3 text-4xl text-navy sm:text-5xl">Built for the shipper who needs it moved today</h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-slate">
              <p>We started {site.name} with a focused idea: Florida businesses need a carrier that answers the phone, quotes in an hour and shows up with its own truck. Not a broker reselling the load, not a national fleet that treats a same-day pallet as an afterthought.</p>
              <p>We run cargo vans, 26 ft box trucks, flatbeds and 53 ft dry vans with vetted company drivers (CDL on the flatbed and dry van), dispatched from a single desk that sees every load. Manufacturers, distributors, contractors and retailers use us for the shipments that cannot wait, and for the weekly routes they would rather not re-quote.</p>
              <p>We are a growing carrier, and we would rather be straight with you than oversell. What you get is a team that is hungry, organized and honest about what it can cover, and a dispatcher who will tell you up front if a lane is not ours.</p>
            </div>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            {[["3", "Unit types", "van · box · flatbed"], ["67", "FL counties", "same-day coverage"], ["5", "Regional states", "next-day lanes"], ["1 hr", "Quote turnaround", "during dispatch hours"]].map(([n, l, s], i) => (
              <div key={l} className={`rounded-2xl p-6 ${i === 0 ? "grad-orange text-white" : "card"}`}>
                <p className={`stat text-5xl ${i === 0 ? "text-white" : "text-navy"}`}>{n}</p>
                <p className={`display-md mt-2 text-base ${i === 0 ? "text-white" : "text-navy"}`}>{l}</p>
                <p className={`text-[13px] ${i === 0 ? "text-white/80" : "text-muted"}`}>{s}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cloud py-20">
        <Container>
          <SectionHead eyebrow="How we operate" title="Four commitments on every load" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.t} className="card card-hover reveal-up p-6" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-orange-300"><v.icon className="h-6 w-6" /></span>
                <h3 className="display-md mt-4 text-xl text-navy">{v.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate">{v.s}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="navy-section relative overflow-hidden py-20 text-white">
        <div className="road-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <SectionHead eyebrow="Credentials" title="Verifiable, not inflated" sub="What we can back up today. Documents are available to any customer on request." light />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["FMCSA-registered motor carrier", "CDL Class A & B licensed drivers", "Cargo & liability insurance, COI on request", "Company-owned, maintained equipment", "Signed, time-stamped proof of delivery", "Dispatch Mon–Fri 9 AM–6 PM ET", "Florida statewide operating footprint", "Regional authority into the Southeast"].map((c, i) => (
              <li key={c} className="reveal-up flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-[14px]" style={{ ["--d" as string]: `${i * 60}ms` }}><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />{c}</li>
            ))}
          </ul>
          {(site.usdot || site.mc) && <p className="mt-6 text-center text-white/60">USDOT {site.usdot} · MC {site.mc}</p>}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHead eyebrow="Where we're headed" title="Regional today, nationwide next" />
          <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
            {ROADMAP.map((r, i) => (
              <li key={r.t} className="card reveal-up relative p-6 pt-8" style={{ ["--d" as string]: `${i * 120}ms` }}>
                <span className="absolute -top-3 left-6 rounded-full grad-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">{r.when}</span>
                <Truck className="h-7 w-7 text-navy" />
                <h3 className="display-md mt-3 text-xl text-navy">{r.t}</h3>
                <p className="mt-2 text-[14px] text-slate">{r.s}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-mist py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal-left relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]"><Image src="/images/mark.webp" alt="Total Coverage Trucking brand mark" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div>
          <div className="reveal-right">
            <p className="eyebrow text-orange">Two ways to work with us</p>
            <h2 className="display mt-3 text-4xl text-navy">Ship with us, or drive with us</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link href="/get-a-quote/" className="card card-hover p-5"><p className="display-md text-lg text-navy">Shippers</p><p className="mt-1 text-[14px] text-slate">Get a flat, all-in quote within one business hour.</p><span className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-orange">Get a quote <Arrow className="h-4 w-4" /></span></Link>
              <Link href="/careers/" className="card card-hover p-5"><p className="display-md text-lg text-navy">Drivers</p><p className="mt-1 text-[14px] text-slate">CDL and non-CDL roles, company equipment, home daily.</p><span className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-orange">See openings <Arrow className="h-4 w-4" /></span></Link>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
