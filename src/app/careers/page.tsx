import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { driverFaqs } from "@/data/faqs";
import { meta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, jobPostingSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHead } from "@/components/Container";
import { DriverForm } from "@/components/DriverForm";
import { Faq } from "@/components/Faq";
import { PhoneLink } from "@/components/PhoneLink";
import { Arrow, Check, Phone, ServicePictogram } from "@/components/Icons";

export const metadata = meta(
  "Truck Driver Jobs in Florida (CDL & Non-CDL) | Careers at Total Coverage Trucking",
  "Hiring non-CDL box truck and cargo van drivers plus CDL flatbed and dry van drivers in Florida. Company equipment, same-day and regional lanes, home daily on most routes. Apply online in 3 minutes.",
  "/careers/", "/images/truck-highway.webp"
);

const ROLES = [
  { icon: "box", t: "Box Truck Driver (non-CDL)", s: "Same-day and multi-stop distribution routes on 26 ft liftgate trucks. Local Florida lanes, home every night.", tags: ["Full-time · Part-time", "Home daily", "Standard license"] },
  { icon: "van", t: "Cargo Van Driver (non-CDL)", s: "Urgent small-freight runs in a company Sprinter van. Clean record and a customer-first attitude.", tags: ["Full-time · Part-time", "Home daily", "Standard license"] },
  { icon: "flatbed", t: "Flatbed & Dry Van Driver (CDL required)", s: "Building materials on the flatbed, full truckloads in the 53 ft dry van. Florida and the Southeast. Securement experience preferred.", tags: ["Full-time", "Home daily / weekly regional", "CDL Class A"] },
] as const;

const PERKS = ["Company-owned, maintained equipment", "Home daily on most Florida routes", "Weekly pay, direct deposit", "Planned routes before you leave the yard", "Direct line to the owner and dispatch", "Growing fleet, growing opportunity"];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={[jobPostingSchema(), faqSchema(driverFaqs), breadcrumbSchema([{ name: "Careers", path: "/careers/" }])]} />
      <PageHero eyebrow="Careers" title="Drive for a company that knows your name" sub="We are hiring non-CDL box truck and cargo van drivers, and CDL drivers for flatbed and dry van, across Florida. Company equipment, planned routes, home daily on most lanes, and an owner who still answers the phone." image="/images/truck-highway.webp" imageAlt="Total Coverage Trucking truck ready for a driver" crumbs={[{ name: "Careers", path: "/careers/" }]}>
        <Link href="#apply" className="btn-orange display-md px-7 py-4 text-lg">Apply online <Arrow className="h-5 w-5" /></Link>
        <PhoneLink location="careers_hero" className="btn-ghost display-md px-7 py-4 text-lg"><Phone className="h-5 w-5" /> Talk to us first</PhoneLink>
      </PageHero>

      <section className="py-20">
        <Container>
          <SectionHead eyebrow="Open positions" title="Who we're hiring" sub="Three seats, one standard: safe, dependable, easy to work with." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ROLES.map((r, i) => (
              <div key={r.t} className="card card-hover reveal-up flex flex-col p-6" style={{ ["--d" as string]: `${i * 100}ms` }}>
                <ServicePictogram name={r.icon} className="h-10 w-16 text-orange" />
                <h3 className="display-md mt-4 text-2xl text-navy">{r.t}</h3>
                <p className="mt-2 flex-1 text-[14px] text-slate">{r.s}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">{r.tags.map((t) => <li key={t} className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold text-navy">{t}</li>)}</ul>
                <Link href="#apply" className="btn-outline mt-5 py-2.5 text-[14px]">Apply for this role</Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="navy-section relative overflow-hidden py-20 text-white">
        <div className="road-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left">
            <p className="eyebrow text-orange-300">Why drive with us</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">Small fleet. Real respect.</h2>
            <p className="mt-4 text-white/75">Big carriers have big websites. We have a dispatcher who knows your route, equipment that gets maintained, and a schedule that gets you home.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{PERKS.map((p) => <li key={p} className="flex items-start gap-2 text-[15px]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />{p}</li>)}</ul>
          </div>
          <div className="reveal-right relative aspect-[16/11] overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]"><Image src="/images/box-truck-flatbed-highway.webp" alt="Total Coverage Trucking box truck and flatbed on the road" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
        </Container>
      </section>

      <section className="bg-cloud py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div id="apply"><DriverForm /></div>
          <div>
            <p className="eyebrow text-orange">What happens next</p>
            <ol className="mt-4 grid gap-4">
              {["We review your application within 2 business days.", "A short phone call about your experience and the lanes you want.", "Orientation, a road test and paperwork at the yard.", "You are dispatched on your first route."].map((t, i) => <li key={t} className="flex gap-4 rounded-xl border border-line bg-white p-4"><span className="stat text-2xl text-orange">0{i + 1}</span><span className="text-[15px] text-ink">{t}</span></li>)}
            </ol>
            <p className="eyebrow mt-10 text-orange">Driver FAQ</p>
            <div className="mt-4"><Faq items={driverFaqs} /></div>
            <div className="mt-8 rounded-2xl bg-navy p-5 text-white">
              <p className="text-[13px] text-white/60">Questions before applying?</p>
              <PhoneLink location="careers_aside" className="mt-1 inline-flex items-center gap-2 font-display text-2xl font-semibold hover:text-orange-300"><Phone className="h-5 w-5 text-orange" />{site.phone}</PhoneLink>
              <p className="mt-1 text-[13px] text-white/60">{site.hours}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
