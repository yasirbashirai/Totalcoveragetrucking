import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/data/services";
import { cities, cityBySlug } from "@/data/cities";
import { CityPage } from "./CityPage";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { meta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { QuoteForm } from "@/components/QuoteForm";
import { Faq } from "@/components/Faq";
import { ReviewCard } from "@/components/ReviewCard";
import { CtaBand } from "@/components/CtaBand";
import { PhoneLink } from "@/components/PhoneLink";
import { Arrow, Check, Phone, ServicePictogram } from "@/components/Icons";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
/** One flat route serves both service pages (/box-truck-freight/) and city pages (/trucking-orlando/). */
const CITY = "trucking-";
export function generateStaticParams() { return [...services.map((s) => ({ slug: s.slug })), ...cities.map((c) => ({ slug: `${CITY}${c.slug}` }))]; }
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  if (slug.startsWith(CITY)) {
    const c = cityBySlug(slug.slice(CITY.length));
    if (!c) return {};
    return { ...meta(`Trucking Company in ${c.name}, FL | Same-Day Freight | Total Coverage Trucking`, `Asset-based trucking in ${c.name} and ${c.county}. Same-day cargo van, box truck and flatbed freight across ${c.region}. Our trucks, our CDL drivers. Quote in 1 business hour.`, `/${slug}/`, c.image), keywords: c.keywords };
  }
  const s = serviceBySlug(slug);
  if (!s) return {};
  return { ...meta(s.title, s.description, `/${s.slug}/`, s.image), keywords: s.keywords };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  if (slug.startsWith(CITY)) {
    const c = cityBySlug(slug.slice(CITY.length));
    if (!c) notFound();
    return <CityPage c={c} />;
  }
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);
  const svcReviews = reviews.filter((r) => r.service === s.slug);
  const equipment = s.icon === "van" ? "Cargo / Sprinter Van" : s.icon === "box" ? "26 ft Box Truck" : s.icon === "flatbed" ? "Flatbed" : "";

  return (
    <>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faqs), breadcrumbSchema([{ name: "Services", path: "/services/" }, { name: s.name, path: `/${s.slug}/` }])]} />
      <PageHero eyebrow={s.name} title={s.h1} sub={s.intro} image={s.image} imageAlt={s.imageAlt} crumbs={[{ name: "Services", path: "/services/" }, { name: s.name, path: `/${s.slug}/` }]}>
        <Link href="#quote" className="btn-orange display-md px-7 py-4 text-lg">Quote this service <Arrow className="h-5 w-5" /></Link>
        <PhoneLink location="service_hero" className="btn-ghost display-md px-7 py-4 text-lg"><Phone className="h-5 w-5" /> {site.phone}</PhoneLink>
      </PageHero>

      {/* spec strip */}
      <section className="border-b border-line bg-white">
        <Container>
          <dl className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {s.specs.map((sp, i) => <div key={sp.label} className="reveal-up py-5 sm:px-5" style={{ ["--d" as string]: `${i * 80}ms` }}><dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">{sp.label}</dt><dd className="display-md mt-1 text-lg text-navy">{sp.value}</dd></div>)}
          </dl>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="reveal grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="display text-3xl text-navy">What&apos;s included</h2>
                <ul className="mt-5 grid gap-3">{s.bullets.map((b) => <li key={b} className="flex items-start gap-3 text-[15px] text-ink"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-100 text-orange"><Check className="h-3.5 w-3.5" /></span>{b}</li>)}</ul>
              </div>
              <div>
                <h2 className="display text-3xl text-navy">Best for</h2>
                <ul className="mt-5 grid gap-2">{s.fit.map((b) => <li key={b} className="rounded-lg border border-line bg-cloud px-4 py-2.5 text-[15px] font-semibold text-navy">{b}</li>)}</ul>
              </div>
            </div>

            <div className="reveal mt-14 rounded-2xl navy-section p-8 text-white">
              <ServicePictogram name={s.icon} className="h-12 w-20 text-orange-300" />
              <h2 className="display mt-4 text-3xl">How a {s.name.toLowerCase()} booking works</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-3">
                {["Send the lane and freight details. Dispatch confirms the unit and a flat rate within one business hour.", "Our driver arrives in the booking window, loads with you and confirms departure by text.", "Delivery is signed and time-stamped. The POD reaches your inbox the same day."].map((t, i) => <li key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-[14px] text-white/85"><span className="stat block text-3xl text-orange-300">0{i + 1}</span><span className="mt-2 block">{t}</span></li>)}
              </ol>
            </div>

            <div className="mt-14">
              <h2 className="display text-3xl text-navy">{s.name} FAQs</h2>
              <div className="mt-6"><Faq items={s.faqs} /></div>
            </div>

            {svcReviews.length > 0 && (
              <div className="mt-14">
                <h2 className="display text-3xl text-navy">From shippers</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">{svcReviews.map((r, i) => <ReviewCard key={r.text} r={r} i={i} />)}</div>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div id="quote"><QuoteForm compact service={s.name} equipment={equipment} title={`Quote: ${s.name}`} /></div>
            <div className="card mt-6 p-5">
              <p className="eyebrow text-orange">Other services</p>
              <ul className="mt-3 divide-y divide-line">
                {others.map((o) => <li key={o.slug}><Link href={`/${o.slug}/`} className="group flex items-center gap-3 py-3"><ServicePictogram name={o.icon} className="h-6 w-10 shrink-0 text-navy group-hover:text-orange" /><span className="flex-1 text-[14px] font-semibold text-navy group-hover:text-orange">{o.name}</span><Arrow className="h-4 w-4 text-muted" /></Link></li>)}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-cloud py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <div className="reveal-left relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]"><Image src={others[0].image} alt={others[0].imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
          <div className="reveal-right">
            <p className="eyebrow text-orange">Asset-based</p>
            <h2 className="display mt-3 text-4xl text-navy">Our truck. Our driver. Your freight.</h2>
            <p className="mt-4 text-[16px] text-slate">We never re-broker a {s.name.toLowerCase()} load. The rate we quote is the rate you pay, and the dispatcher who quotes it is the one tracking the truck. Cargo and liability insured, certificate of insurance on request.</p>
            <Link href="/about-us/" className="mt-6 inline-flex items-center gap-2 font-semibold text-orange hover:underline">About Total Coverage Trucking <Arrow className="h-4 w-4" /></Link>
          </div>
        </Container>
      </section>
      <CtaBand title={`Book ${s.name.toLowerCase()} today`} />
    </>
  );
}
