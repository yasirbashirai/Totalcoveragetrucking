import Link from "next/link";
import { site } from "@/data/site";
import { meta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { PhoneLink } from "@/components/PhoneLink";
import { Arrow, Phone, Mail, Clock, Pin } from "@/components/Icons";

export const metadata = meta(
  "Contact Dispatch | Total Coverage Trucking Florida",
  `Call or message Total Coverage Trucking dispatch. ${site.hours}. Quotes answered within one business hour. Florida statewide, regional Southeast lanes.`,
  "/contact/"
);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact/" }])} />
      <PageHero eyebrow="Contact" title="Talk to dispatch" sub="One desk sees every load. Call for anything urgent; use the form for quotes, dedicated routes, billing or driver questions." crumbs={[{ name: "Contact", path: "/contact/" }]}>
        <PhoneLink location="contact_hero" className="btn-orange display-md px-7 py-4 text-lg"><Phone className="h-5 w-5" /> {site.phone}</PhoneLink>
        <Link href="/get-a-quote/" className="btn-ghost display-md px-7 py-4 text-lg">Get a Quote <Arrow className="h-5 w-5" /></Link>
      </PageHero>
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {[[Phone, "Dispatch line", site.phone, site.phoneHref], [Mail, "Email", site.email, `mailto:${site.email}`], [Clock, "Hours", site.hours, ""], [Pin, "Based in", site.address.display, ""]].map(([I, l, v, h], i) => {
              const Icon = I as typeof Phone;
              const inner = <><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-100 text-orange"><Icon className="h-5 w-5" /></span><span><span className="block text-[12px] font-semibold uppercase tracking-wider text-muted">{l as string}</span><span className="display-md block text-lg text-navy">{v as string}</span></span></>;
              return h ? <a key={i} href={h as string} className="card card-hover flex items-center gap-4 p-5">{inner}</a> : <div key={i} className="card flex items-center gap-4 p-5">{inner}</div>;
            })}
            <div className="rounded-2xl navy-section p-6 text-white">
              <p className="display-md text-lg">Need it today?</p>
              <p className="mt-1 text-[14px] text-white/70">Same-day Florida lanes must be booked by 12:00 PM ET. Call rather than email for anything urgent.</p>
            </div>
          </div>
          <div className="reveal-right"><ContactForm /></div>
        </Container>
      </section>
    </>
  );
}
