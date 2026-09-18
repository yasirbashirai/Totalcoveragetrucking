import Image from "next/image";
import Link from "next/link";
import { cities, type City } from "@/data/cities";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, cityServiceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHead } from "@/components/Container";
import { QuoteForm } from "@/components/QuoteForm";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { PhoneLink } from "@/components/PhoneLink";
import { Arrow, Check, Phone, Pin, Route, ServicePictogram } from "@/components/Icons";

export function CityPage({ c }: { c: City }) {
  const others = cities.filter((o) => o.slug !== c.slug);
  return (
    <>
      <JsonLd data={[cityServiceSchema(c.name, c.slug), faqSchema(c.faqs), breadcrumbSchema([{ name: "Service Area", path: "/service-area/" }, { name: c.name, path: `/trucking-${c.slug}/` }])]} />
      <PageHero eyebrow={`${c.county} · ${c.region}`} title={`Trucking company in ${c.name}, FL`} sub={c.intro} image={c.image} imageAlt={c.imageAlt} crumbs={[{ name: "Service Area", path: "/service-area/" }, { name: c.name, path: `/trucking-${c.slug}/` }]}>
        <Link href="#quote" className="btn-orange display-md px-7 py-4 text-lg">Quote a load in {c.name} <Arrow className="h-5 w-5" /></Link>
        <PhoneLink location="city_hero" className="btn-ghost display-md px-7 py-4 text-lg"><Phone className="h-5 w-5" /> {site.phone}</PhoneLink>
      </PageHero>

      <section className="border-b border-line bg-white">
        <Container>
          <dl className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {[["Same-day cutoff", "12:00 PM ET"], ["ZIP prefixes", c.zipPrefixes.map((z) => `${z}xx`).join(", ")], ["Equipment", "Van · box truck · flatbed"], ["Quote turnaround", "1 business hour"]].map(([k, v], i) => <div key={k} className="reveal-up py-5 sm:px-5" style={{ ["--d" as string]: `${i * 80}ms` }}><dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">{k}</dt><dd className="display-md mt-1 text-lg text-navy">{v}</dd></div>)}
          </dl>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow text-orange">Freight in {c.name}</p>
            <h2 className="display mt-3 text-3xl text-navy sm:text-4xl">How we work {c.county}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate">{c.local}</p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="display-md text-xl text-navy">Industries we serve</h3>
                <ul className="mt-4 grid gap-2">{c.industries.map((x) => <li key={x} className="flex items-start gap-2 text-[15px] text-ink"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />{x}</li>)}</ul>
              </div>
              <div>
                <h3 className="display-md text-xl text-navy">Areas covered</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{c.areas.map((a) => <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-cloud px-3 py-1 text-[13px] font-semibold text-navy"><Pin className="h-3.5 w-3.5 text-orange" />{a}</li>)}</ul>
              </div>
            </div>

            <div className="reveal mt-12 rounded-2xl navy-section p-6 text-white sm:p-8">
              <div className="flex items-center gap-3"><Route className="h-7 w-7 text-orange-300" /><h3 className="display text-2xl">Same-day lanes from {c.name}</h3></div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">{c.lanes.map((l) => <li key={l.to} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"><span className="font-semibold">{c.name} → {l.to}</span><span className="text-[13px] text-orange-300">≈ {l.time}</span></li>)}</ul>
              <p className="mt-4 text-[13px] text-white/60">Drive times are typical, outside peak traffic. Same-day service requires booking by 12:00 PM ET.</p>
            </div>

            <div className="mt-12">
              <h2 className="display text-3xl text-navy">Services in {c.name}</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((s) => <Link key={s.slug} href={`/${s.slug}/`} className="card card-hover group flex items-center gap-3 p-4"><ServicePictogram name={s.icon} className="h-7 w-11 shrink-0 text-navy group-hover:text-orange" /><span className="flex-1 text-[14px] font-bold text-navy group-hover:text-orange">{s.name}</span><Arrow className="h-4 w-4 text-muted" /></Link>)}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="display text-3xl text-navy">{c.name} shipping FAQs</h2>
              <div className="mt-6"><Faq items={c.faqs} /></div>
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div id="quote"><QuoteForm compact title={`Quote a load in ${c.name}`} /></div>
            <div className="card mt-6 overflow-hidden">
              <div className="relative aspect-[16/9]"><Image src={c.image} alt={c.imageAlt} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" /></div>
              <div className="p-5">
                <p className="eyebrow text-orange">Also serving</p>
                <ul className="mt-3 flex flex-wrap gap-2">{others.map((o) => <li key={o.slug}><Link href={`/trucking-${o.slug}/`} className="rounded-full border border-line px-3 py-1 text-[13px] font-semibold text-navy hover:border-orange hover:text-orange">{o.name}</Link></li>)}</ul>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-cloud py-16">
        <Container>
          <SectionHead eyebrow="Why local shippers choose us" title={`An asset-based carrier for ${c.name}`} sub="Our trucks, our vetted drivers and one dispatcher who quotes your load and tracks it to the signature. No brokering, no transfers." />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/about-us/" className="btn-outline px-6 py-3">About the company</Link>
            <Link href="/service-area/" className="btn-outline px-6 py-3">Full service area</Link>
          </div>
        </Container>
      </section>
      <CtaBand title={`Need a truck in ${c.name} today?`} />
    </>
  );
}
