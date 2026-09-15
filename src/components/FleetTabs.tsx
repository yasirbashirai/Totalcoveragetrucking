"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { Arrow, Check, ServicePictogram } from "./Icons";

const DETAIL: Record<string, { slug: string; specs: [string, string][]; loads: string[]; note: string }> = {
  van: { slug: "cargo-van-delivery", specs: [["Payload", "3,000 lbs"], ["Pallets", "2–3"], ["Cargo", "12–14 ft"], ["Access", "Any street / garage"]], loads: ["Line-down parts", "Medical & lab supplies", "Documents & samples", "E-commerce overflow"], note: "Fastest unit in the fleet. Usually the cheapest option for 1–3 pallets." },
  box: { slug: "box-truck-freight", specs: [["Payload", "10,000 lbs"], ["Pallets", "10–12"], ["Box", "26 ft"], ["Liftgate", "Standard"]], loads: ["Retail replenishment", "Furniture & fixtures", "Multi-stop routes", "Final-mile delivery"], note: "Liftgate and pallet jack on every truck, so no-dock deliveries are standard." },
  flatbed: { slug: "flatbed-trucking", specs: [["Payload", "48,000 lbs"], ["Deck", "48–53 ft"], ["Securement", "Straps, chains, tarps"], ["Permits", "On request"]], loads: ["Lumber & trusses", "Steel & rebar", "Machinery", "Block, pavers & stone"], note: "CDL drivers handle securement and tarping. Job-site and lay-down yard delivery." },
};

/** Interactive fleet selector: pick a unit, see specs and best-fit loads. */
export function FleetTabs() {
  const [key, setKey] = useState("box");
  const unit = site.equipment.find((e) => e.key === key)!;
  const d = DETAIL[key];
  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="Fleet equipment">
        {site.equipment.map((e) => (
          <button key={e.key} role="tab" aria-selected={key === e.key} onClick={() => setKey(e.key)} className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition ${key === e.key ? "border-orange bg-white shadow-[var(--shadow-lift)]" : "border-line bg-white/70 hover:border-orange/40"}`}>
            <ServicePictogram name={e.key as "van" | "box" | "flatbed"} className={`h-9 w-14 shrink-0 ${key === e.key ? "text-orange" : "text-navy"}`} />
            <span><span className="block font-bold text-navy">{e.name}</span><span className="block text-[12px] text-muted">{e.capacity}</span></span>
          </button>
        ))}
      </div>
      <div key={key} className="card reveal-scale in overflow-hidden" style={{ animation: "driveIn .5s cubic-bezier(.22,.61,.36,1) both" }}>
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
          <div>
            <p className="eyebrow text-orange">{unit.name}</p>
            <h3 className="display mt-2 text-3xl text-navy">{unit.best}</h3>
            <p className="mt-3 text-[15px] text-slate">{d.note}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {d.specs.map(([k, v]) => <div key={k} className="rounded-lg bg-mist p-3"><dt className="text-[11px] font-semibold uppercase tracking-wider text-muted">{k}</dt><dd className="stat mt-0.5 text-xl text-navy">{v}</dd></div>)}
            </dl>
          </div>
          <div className="flex flex-col">
            <p className="label">Typical loads</p>
            <ul className="grid gap-2">{d.loads.map((l) => <li key={l} className="flex items-center gap-2 text-[15px] text-ink"><Check className="h-4 w-4 text-success" />{l}</li>)}</ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              <Link href={`/get-a-quote/?equipment=${encodeURIComponent(unit.name)}`} className="btn-orange px-5 py-3">Quote this unit <Arrow className="h-4 w-4" /></Link>
              <Link href={`/${d.slug}/`} className="btn-outline px-5 py-3">Service details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
