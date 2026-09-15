import { Star } from "./Icons";
import { services } from "@/data/services";

export type Review = { name: string; company: string; rating: number; service?: string; text: string };

export function ReviewCard({ r, i = 0, light = false }: { r: Review; i?: number; light?: boolean }) {
  const svc = services.find((s) => s.slug === r.service);
  return (
    <figure className={`reveal-up flex h-full flex-col rounded-2xl p-6 ${light ? "border border-white/10 bg-white/5 text-white" : "card"}`} style={{ ["--d" as string]: `${i * 80}ms` }}>
      <div className="flex items-center gap-0.5 text-orange" aria-label={`${r.rating} out of 5 stars`}>{Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="h-4 w-4" />)}</div>
      <blockquote className={`mt-3 flex-1 text-[15px] leading-relaxed ${light ? "text-white/85" : "text-ink"}`}>“{r.text}”</blockquote>
      <figcaption className="mt-5 border-t border-line/40 pt-4 text-[13px]">
        <span className={`block font-bold ${light ? "text-white" : "text-navy"}`}>{r.name}</span>
        <span className={light ? "text-white/60" : "text-muted"}>{r.company}</span>
        {svc && <span className="mt-2 inline-block rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-semibold text-orange">{svc.name}</span>}
      </figcaption>
    </figure>
  );
}
