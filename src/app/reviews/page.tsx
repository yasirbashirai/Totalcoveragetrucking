import Link from "next/link";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { meta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHead } from "@/components/Container";
import { ReviewCard } from "@/components/ReviewCard";
import { CtaBand } from "@/components/CtaBand";
import { Arrow, Star } from "@/components/Icons";

export const metadata = meta(
  "Customer Reviews | Total Coverage Trucking Florida",
  "What Florida shippers say about Total Coverage Trucking: same-day freight, box truck distribution, flatbed delivery and dedicated routes. Read customer reviews.",
  "/reviews/"
);

export default function ReviewsPage() {
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Reviews", path: "/reviews/" }])} />
      <PageHero eyebrow="Reviews" title="What shippers say after the freight lands" sub="Feedback from the docks, yards and warehouses we serve. We publish it as we receive it and ask every customer for it." crumbs={[{ name: "Reviews", path: "/reviews/" }]}>
        <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3"><span className="stat text-4xl text-orange-300">{avg}</span><span><span className="flex text-orange">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4" />)}</span><span className="text-[13px] text-white/70">{reviews.length} customer reviews</span></span></div>
      </PageHero>
      <section className="bg-cloud py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{reviews.map((r, i) => <ReviewCard key={r.text} r={r} i={i} />)}</div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHead eyebrow="Reviewed services" title="Every service, held to the same standard" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <Link key={s.slug} href={`/${s.slug}/`} className="card card-hover flex items-center justify-between p-4 text-[15px] font-semibold text-navy">{s.name}<Arrow className="h-4 w-4 text-orange" /></Link>)}
          </div>
        </Container>
      </section>
      <CtaBand title="Be the next review" sub="Book one load. If we do not earn the second, that is on us." />
    </>
  );
}
