import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { faqs } from "@/data/faqs";
import { posts } from "@/data/blog";
import { meta } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container, SectionHead } from "@/components/Container";
import { QuoteForm } from "@/components/QuoteForm";
import { Words } from "@/components/Words";
import { Counter } from "@/components/Counter";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewCard } from "@/components/ReviewCard";
import { Faq } from "@/components/Faq";
import { FleetTabs } from "@/components/FleetTabs";
import { FloridaMap } from "@/components/FloridaMap";
import { CtaBand } from "@/components/CtaBand";
import { PhoneLink } from "@/components/PhoneLink";
import { Arrow, Check, Phone, Shield, Clock, Route, FileText, Truck, X } from "@/components/Icons";

export const metadata = meta(
  "Total Coverage Trucking | Same-Day Freight & Asset-Based Trucking in Florida",
  "Asset-based trucking company moving product across Florida and the Southeast. Same-day freight delivery, cargo van, box truck and flatbed with our own trucks and CDL drivers. Quote in 1 business hour.",
  "/"
);

const TICKER = ["Asset-based carrier", "Our trucks, our CDL drivers", "Same-day across Florida", "Liftgate on every box truck", "Signed POD every stop", "Quote within 1 business hour", "Regional lanes to GA · AL · SC · NC · TN", "One dispatcher, quote to delivery"];

const STEPS = [
  { icon: FileText, t: "Send the lane", s: "ZIP to ZIP, what you are shipping and when. Takes 60 seconds on the quote form or one phone call." },
  { icon: Clock, t: "Get a truck, a time, a price", s: "A dispatcher answers within one business hour with the right unit and a flat, all-in rate. No hidden accessorials." },
  { icon: Truck, t: "We pick up and deliver", s: "Our driver, our truck, direct to the receiver. Live updates in transit and a signed proof of delivery when it lands." },
];

const COMPARE: [string, boolean, boolean][] = [
  ["Owns the trucks and employs the drivers", true, false],
  ["Same dispatcher quotes and tracks your load", true, false],
  ["Freight rides direct, never transferred", true, false],
  ["Rate is final, no re-brokering margin", true, false],
  ["Driver knows your docks on repeat lanes", true, false],
  ["Accountable for the truck that shows up", true, false],
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, 6))} />

      {/* 1 ── HERO: promise + two CTAs + instant quote card */}
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/images/hero-dry-van.webp" alt="" fill priority sizes="100vw" className="kenburns object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
        </div>
        <div className="road-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-semibold backdrop-blur">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-success" /></span>
              Dispatch open {site.hoursShort} · Same-day slots available
            </p>
            <h1 className="display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              <Words text="Your freight." /> <br />
              <Words text="Our trucks." start={300} className="text-grad-orange" /> <br />
              <Words text="Delivered today." start={560} />
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl" style={{ ["--d" as string]: "700ms" }}>
              {site.legalName} is an asset-based carrier moving product across Florida and the Southeast. Cargo van, box truck and flatbed, driven by our own CDL drivers, with one dispatcher on your load from quote to signature.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "820ms" }}>
              <Link href="/get-a-quote/" className="btn-orange display-md px-7 py-4 text-lg">Get a Freight Quote <Arrow className="h-5 w-5" /></Link>
              <PhoneLink location="hero" className="btn-ghost display-md px-7 py-4 text-lg"><Phone className="h-5 w-5" /> Call Dispatch</PhoneLink>
            </div>
            <ul className="reveal mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-white/85 sm:grid-cols-4" style={{ ["--d" as string]: "940ms" }}>
              {site.trust.map((t) => <li key={t.label} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" /><span><strong className="block text-white">{t.label}</strong><span className="text-white/60">{t.sub}</span></span></li>)}
            </ul>
          </div>
          <div className="drive-in lg:justify-self-end lg:w-full lg:max-w-md">
            <QuoteForm compact />
          </div>
        </Container>
        {/* ticker */}
        <div className="relative border-t border-white/10 bg-navy-900/70 py-3 backdrop-blur">
          <div className="flex overflow-hidden">
            <ul className="marquee flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {[...TICKER, ...TICKER].map((t, i) => <li key={i} className="flex items-center gap-10"><span>{t}</span><span className="h-1.5 w-1.5 rounded-full bg-orange" /></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 2 ── SERVICES */}
      <section className="bg-cloud py-20" id="services">
        <Container>
          <SectionHead eyebrow="What we move" title="Six ways we move product" sub="Pick the service that matches the load. Not sure? Send the dimensions and dispatch will choose the right truck for you." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
          </div>
        </Container>
      </section>

      {/* 3 ── HOW IT WORKS */}
      <section className="py-20">
        <Container>
          <SectionHead eyebrow="How it works" title="Quote to signature in three steps" sub="Built so a shipper can book a truck before a human is even involved, and still reach one when it matters." />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="stripe-thin absolute left-[16%] right-[16%] top-8 hidden h-0.5 md:block" aria-hidden="true" />
            {STEPS.map((st, i) => (
              <li key={st.t} className="reveal-up relative" style={{ ["--d" as string]: `${i * 140}ms` }}>
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-2xl grad-orange text-white shadow-[var(--shadow-orange)] md:mx-0"><st.icon className="h-7 w-7" /><span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-navy text-[12px] font-bold ring-4 ring-white">{i + 1}</span></div>
                <h3 className="display-md mt-5 text-center text-2xl text-navy md:text-left">{st.t}</h3>
                <p className="mt-2 text-center text-[15px] leading-relaxed text-slate md:text-left">{st.s}</p>
              </li>
            ))}
          </ol>
          <div className="reveal mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-cloud p-6 sm:flex-row">
            <p className="text-[15px] text-slate"><strong className="text-navy">Booking by noon ET?</strong> Most Florida lanes deliver before close of business the same day.</p>
            <Link href="/get-a-quote/" className="btn-orange px-6 py-3">Start a quote <Arrow className="h-4 w-4" /></Link>
          </div>
        </Container>
      </section>

      {/* 4 ── FLEET (interactive) */}
      <section className="bg-mist py-20" id="fleet">
        <Container>
          <SectionHead eyebrow="The fleet" title="The right truck for the load" sub="Three unit types cover everything from a single urgent pallet to 48,000 lbs of building materials." />
          <div className="reveal mt-12"><FleetTabs /></div>
        </Container>
      </section>

      {/* 5 ── COVERAGE + METRICS */}
      <section className="navy-section relative overflow-hidden py-20 text-white">
        <div className="road-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left">
            <p className="eyebrow text-orange-300">Coverage</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Same-day across Florida. <span className="text-grad-orange">Next-day across the Southeast.</span></h2>
            <p className="mt-5 text-lg text-white/75">Every Florida county, dispatched from the truck nearest your dock. Regional lanes run into Georgia, Alabama and the Carolinas, with nationwide capacity added as the fleet grows.</p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[[67, "", "Florida counties"], [14, "", "Metro hubs"], [5, "", "Regional states"], [1, "hr", "Quote turnaround"]].map(([n, suf, l], i) => (
                <div key={l} className="reveal-up rounded-xl border border-white/10 bg-white/5 p-4" style={{ ["--d" as string]: `${i * 100}ms` }}>
                  <dd className="stat text-4xl text-orange-300"><Counter to={n as number} suffix={suf as string} /></dd>
                  <dt className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-white/60">{l}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.floridaMarkets.map((m) => <Link key={m} href="/service-area/" className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[13px] text-white/80 transition hover:border-orange hover:text-white">{m}</Link>)}
            </div>
            <Link href="/service-area/" className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-white">Full service area <Arrow className="h-4 w-4" /></Link>
          </div>
          <div className="reveal-right mx-auto w-full max-w-lg"><FloridaMap className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]" /></div>
        </Container>
      </section>

      {/* 6 ── ASSET-BASED vs BROKER */}
      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal-left relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
              <Image src="/images/truck-road.webp" alt="Total Coverage Trucking semi truck on the road" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 max-w-[240px] rounded-2xl bg-white p-5 shadow-[var(--shadow-lift)] sm:right-6">
              <Shield className="h-8 w-8 text-orange" />
              <p className="display-md mt-2 text-lg text-navy">Asset-based carrier</p>
              <p className="mt-1 text-[13px] text-slate">FMCSA-registered. Cargo and liability insured. COI on request.</p>
            </div>
          </div>
          <div className="reveal-right">
            <p className="eyebrow text-orange">Why asset-based</p>
            <h2 className="display mt-3 text-4xl text-navy sm:text-5xl">A carrier, not a broker</h2>
            <p className="mt-5 text-lg text-slate">When you book with us, the truck that shows up is ours. That changes what we can promise about pricing, timing and accountability.</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <div className="grid grid-cols-[1fr_84px_84px] bg-navy text-white sm:grid-cols-[1fr_120px_120px]">
                <span className="px-4 py-3 text-[13px] font-semibold uppercase tracking-wider">What you get</span>
                <span className="grid place-items-center bg-orange py-3 text-[12px] font-bold uppercase tracking-wider">Us</span>
                <span className="grid place-items-center py-3 text-[12px] font-bold uppercase tracking-wider text-white/70">Broker</span>
              </div>
              {COMPARE.map(([row, a, b], i) => (
                <div key={row} className={`grid grid-cols-[1fr_84px_84px] items-center sm:grid-cols-[1fr_120px_120px] ${i % 2 ? "bg-cloud" : "bg-white"}`}>
                  <span className="px-4 py-3 text-[14px] text-ink">{row}</span>
                  <span className="grid place-items-center py-3">{a ? <Check className="h-5 w-5 text-success" /> : <X className="h-5 w-5 text-muted/60" />}</span>
                  <span className="grid place-items-center py-3">{b ? <Check className="h-5 w-5 text-success" /> : <X className="h-5 w-5 text-muted/60" />}</span>
                </div>
              ))}
            </div>
            <Link href="/about-us/" className="mt-8 inline-flex items-center gap-2 font-semibold text-orange hover:underline">More about the company <Arrow className="h-4 w-4" /></Link>
          </div>
        </Container>
      </section>

      {/* 7 ── REVIEWS */}
      <section className="bg-cloud py-20" id="reviews">
        <Container>
          <SectionHead eyebrow="Shipper feedback" title="What it's like to ship with us" sub="Straight from the docks, yards and warehouses we serve across Florida." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => <ReviewCard key={r.text} r={r} i={i} />)}
          </div>
          <div className="mt-8 text-center"><Link href="/reviews/" className="btn-outline px-6 py-3">Read all reviews <Arrow className="h-4 w-4" /></Link></div>
        </Container>
      </section>

      {/* 8 ── FAQ + BLOG */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow text-orange">Questions shippers ask</p>
            <h2 className="display mt-3 text-4xl text-navy sm:text-5xl">Before you book</h2>
            <div className="mt-8"><Faq items={faqs.slice(0, 6)} /></div>
            <Link href="/faq/" className="mt-6 inline-flex items-center gap-2 font-semibold text-orange hover:underline">All FAQs <Arrow className="h-4 w-4" /></Link>
          </div>
          <div>
            <p className="eyebrow text-orange">From the blog</p>
            <h2 className="display mt-3 text-4xl text-navy sm:text-5xl">Shipping guides</h2>
            <div className="mt-8 grid gap-4">
              {posts.slice(0, 3).map((p, i) => (
                <Link key={p.slug} href={`/blog/${p.slug}/`} className="card card-hover reveal-up group flex gap-4 p-4" style={{ ["--d" as string]: `${i * 90}ms` }}>
                  <span className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg"><Image src={p.image} alt={p.imageAlt} fill sizes="128px" className="object-cover transition group-hover:scale-105" /></span>
                  <span className="min-w-0">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-orange">{p.category} · {p.readMins} min</span>
                    <span className="mt-1 block font-bold leading-snug text-navy group-hover:text-orange">{p.title}</span>
                    <span className="mt-1 line-clamp-2 block text-[13px] text-muted">{p.description}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="reveal mt-6 rounded-2xl border border-line bg-cloud p-5">
              <div className="flex items-center gap-3"><Route className="h-7 w-7 text-orange" /><p className="display-md text-lg text-navy">Hiring CDL drivers</p></div>
              <p className="mt-2 text-[14px] text-slate">Florida lanes, company equipment, home daily on most routes.</p>
              <Link href="/careers/" className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-orange hover:underline">Apply online <Arrow className="h-4 w-4" /></Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
