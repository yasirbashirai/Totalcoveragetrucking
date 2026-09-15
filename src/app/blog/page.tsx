import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/blog";
import { meta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Icons";

export const metadata = meta(
  "Freight & Trucking Blog | Total Coverage Trucking",
  "Practical shipping guides from a Florida asset-based carrier: same-day freight, choosing equipment, preparing pallets, Florida lanes and carrier vs broker.",
  "/blog/"
);

const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog/" }])} />
      <PageHero eyebrow="Blog" title="Shipping guides from the dispatch desk" sub="Short, practical answers to the questions shippers ask us every week." crumbs={[{ name: "Blog", path: "/blog/" }]} />
      <section className="py-20">
        <Container>
          <Link href={`/blog/${lead.slug}/`} className="card card-hover reveal group grid overflow-hidden lg:grid-cols-2">
            <span className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]"><Image src={lead.image} alt={lead.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" priority /></span>
            <span className="flex flex-col justify-center p-8">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-orange">{lead.category} · {fmt(lead.date)} · {lead.readMins} min read</span>
              <span className="display mt-3 text-3xl text-navy group-hover:text-orange sm:text-4xl">{lead.title}</span>
              <span className="mt-4 text-[16px] text-slate">{lead.description}</span>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-orange">Read the guide <Arrow className="h-4 w-4" /></span>
            </span>
          </Link>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="card card-hover reveal-up group flex flex-col overflow-hidden" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <span className="relative aspect-[16/10]"><Image src={p.image} alt={p.imageAlt} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-orange">{p.category} · {p.readMins} min</span>
                  <span className="display-md mt-2 text-xl leading-snug text-navy group-hover:text-orange">{p.title}</span>
                  <span className="mt-2 flex-1 text-[14px] text-slate">{p.description}</span>
                  <span className="mt-4 text-[12px] text-muted">{fmt(p.date)}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
