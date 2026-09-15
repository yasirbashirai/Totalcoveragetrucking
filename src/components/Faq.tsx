import { Chevron } from "./Icons";

/** Accessible accordion list built on <details>; no JS required. */
export function Faq({ items, light = false }: { items: { q: string; a: string }[]; light?: boolean }) {
  return (
    <div className="grid gap-3">
      {items.map((f, i) => (
        <details key={f.q} className={`reveal group rounded-xl border ${light ? "border-white/15 bg-white/5" : "border-line bg-white"} shadow-[var(--shadow-card)] open:border-orange/50`} style={{ ["--d" as string]: `${i * 60}ms` }}>
          <summary className={`flex items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-bold ${light ? "text-white" : "text-navy"}`}>
            {f.q}
            <span className="chev grid h-8 w-8 shrink-0 place-items-center rounded-full bg-orange-100 text-orange transition"><Chevron className="h-4 w-4" /></span>
          </summary>
          <p className={`px-5 pb-5 text-[15px] leading-relaxed ${light ? "text-white/75" : "text-slate"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
