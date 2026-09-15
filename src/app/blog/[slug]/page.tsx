import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, postBySlug } from "@/data/blog";
import { services } from "@/data/services";
import { meta } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/Container";
import { QuoteForm } from "@/components/QuoteForm";
import { CtaBand } from "@/components/CtaBand";
import { Arrow, Chevron } from "@/components/Icons";

type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Params) {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return { ...meta(`${p.title} | Total Coverage Trucking`, p.description, `/blog/${p.slug}/`, p.image), keywords: p.keywords, openGraph: { type: "article", publishedTime: p.date } };
}
const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function PostPage({ params }: Params) {
  const p = postBySlug((await params).slug);
  if (!p) notFound();
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <JsonLd data={[articleSchema(p), breadcrumbSchema([{ name: "Blog", path: "/blog/" }, { name: p.title, path: `/blog/${p.slug}/` }])]} />
      <article>
        <header className="hero-bg relative overflow-hidden text-white">
          <div className="road-grid absolute inset-0" aria-hidden="true" />
          <Container className="relative py-14 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-[13px] text-white/60"><Link href="/" className="hover:text-white">Home</Link><Chevron className="h-3.5 w-3.5 -rotate-90 opacity-60" /><Link href="/blog/" className="hover:text-white">Blog</Link><Chevron className="h-3.5 w-3.5 -rotate-90 opacity-60" /><span className="text-white/90">{p.category}</span></nav>
            <p className="eyebrow reveal text-orange-300">{p.category} · {p.readMins} min read</p>
            <h1 className="display reveal mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl" style={{ ["--d" as string]: "80ms" }}>{p.title}</h1>
            <p className="reveal mt-5 max-w-2xl text-lg text-white/80" style={{ ["--d" as string]: "160ms" }}>{p.description}</p>
            <p className="reveal mt-6 text-[13px] text-white/60" style={{ ["--d" as string]: "240ms" }}>By Total Coverage Trucking dispatch · {fmt(p.date)}</p>
          </Container>
        </header>
        <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="reveal relative -mt-24 aspect-[16/9] overflow-hidden rounded-2xl shadow-[var(--shadow-lift)] sm:-mt-28"><Image src={p.image} alt={p.imageAlt} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" /></div>
            <div className="prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-navy prose-p:text-slate prose-li:text-slate prose-strong:text-navy prose-a:text-orange">
              {p.body.map((b, i) => "h2" in b ? <h2 key={i}>{b.h2}</h2> : "p" in b ? <p key={i}>{b.p}</p> : <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>)}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">{p.keywords.map((k) => <span key={k} className="rounded-full bg-mist px-3 py-1 text-[12px] font-semibold text-slate">{k}</span>)}</div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <QuoteForm compact title="Need this moved?" />
            <div className="card p-5">
              <p className="eyebrow text-orange">Services</p>
              <ul className="mt-3 divide-y divide-line">{services.slice(0, 4).map((s) => <li key={s.slug}><Link href={`/${s.slug}/`} className="flex items-center justify-between py-2.5 text-[14px] font-semibold text-navy hover:text-orange">{s.name}<Arrow className="h-4 w-4 text-muted" /></Link></li>)}</ul>
            </div>
          </aside>
        </Container>
      </article>
      <section className="bg-cloud py-16">
        <Container>
          <h2 className="display text-3xl text-navy">Keep reading</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {more.map((m) => <Link key={m.slug} href={`/blog/${m.slug}/`} className="card card-hover group flex gap-4 p-4"><span className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg"><Image src={m.image} alt={m.imageAlt} fill sizes="112px" className="object-cover" /></span><span><span className="text-[11px] font-semibold uppercase tracking-wider text-orange">{m.category}</span><span className="mt-1 block text-[14px] font-bold leading-snug text-navy group-hover:text-orange">{m.title}</span></span></Link>)}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
