"use client";
import { useMemo, useState } from "react";
import { site } from "@/data/site";
import { laneKind } from "@/lib/florida";
import { useLead } from "./useLead";
import { Arrow, Bolt, Check, ServicePictogram } from "./Icons";

const EQUIP = [
  { key: "Cargo / Sprinter Van", icon: "van", sub: "≤ 3,000 lbs · 2–3 pallets" },
  { key: "Box Truck (26 ft)", icon: "box", sub: "≤ 10,000 lbs · 10–12 pallets" },
  { key: "Flatbed", icon: "flatbed", sub: "≤ 48,000 lbs · 24–26 pallets" },
  { key: "Dry Van (53 ft)", icon: "dryvan", sub: "≤ 45,000 lbs · 24–26 pallets" },
  { key: "Not sure", icon: "bolt", sub: "We'll match the truck" },
] as const;

type Props = { compact?: boolean; service?: string; title?: string; equipment?: string };

/**
 * Quote form. Compact = hero card (one step). Full = two-step on /get-a-quote.
 * Live "lane check" tells the shipper whether the lane is same-day eligible before they submit.
 */
export function QuoteForm({ compact = false, service = "", title, equipment = "" }: Props) {
  const { busy, error, submit } = useLead("quote");
  const [step, setStep] = useState(1);
  const [f, setF] = useState<Record<string, string>>({ equipment, pickup_zip: "", delivery_zip: "", pickup_date: "", freight: "", weight: "", pallets: "", name: "", company: "", phone: "", email: "", notes: "", liftgate: "", service });
  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));
  const lane = useMemo(() => laneKind(f.pickup_zip, f.delivery_zip), [f.pickup_zip, f.delivery_zip]);

  const laneMsg = lane === "same-day" ? { t: "Same-day eligible", s: "Both ZIPs are in Florida. Book by noon ET for same-day delivery.", c: "text-success bg-green-50 border-green-200" }
    : lane === "regional" ? { t: "Regional lane", s: "Southeast lane. Typical delivery next business day.", c: "text-navy bg-navy-100 border-navy/20" }
    : lane === "outside" ? { t: "Outside our core lanes", s: "Send it anyway. We'll tell you honestly if we can cover it.", c: "text-slate bg-mist border-line" }
    : null;

  const canNext = f.pickup_zip.length === 5 && f.delivery_zip.length === 5;
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); if (!compact && step === 1) { setStep(2); return; } submit(f); };

  return (
    <form onSubmit={onSubmit} className={`card relative overflow-hidden ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`} id="quote">
      <div className="stripe-thin absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" onChange={(e) => set("company_website", e.target.value)} />

      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="display text-2xl text-navy sm:text-3xl">{title ?? "Get a Freight Quote"}</h3>
          <p className="mt-1 text-[13px] text-muted">Answered within 1 business hour · {site.hoursShort}</p>
        </div>
        {!compact && <span className="eyebrow rounded-full bg-orange-100 px-3 py-1 text-orange">Step {step} of 2</span>}
      </div>

      {(compact || step === 1) && (
        <div className="grid gap-3">
          <div>
            <span className="label">Equipment</span>
            <div className={`grid gap-2 ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"}`}>
              {EQUIP.map((e) => (
                <button type="button" key={e.key} onClick={() => set("equipment", e.key)} className={`flex flex-col items-start rounded-xl border-2 p-2.5 text-left transition ${compact && e.key === "Not sure" ? "col-span-2" : ""} ${f.equipment === e.key ? "border-orange bg-orange-100/60" : "border-line bg-white hover:border-orange/50"}`} aria-pressed={f.equipment === e.key}>
                  {e.icon === "bolt" ? <Bolt className="h-6 w-6 text-orange" /> : <ServicePictogram name={e.icon} className="h-6 w-10 text-navy" />}
                  <span className="mt-1.5 text-[13px] font-bold leading-tight text-navy">{e.key}</span>
                  <span className="text-[11px] text-muted">{e.sub}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="label" htmlFor="pz">Pickup ZIP</label><input id="pz" className="field" inputMode="numeric" maxLength={5} placeholder="e.g. 32801" required value={f.pickup_zip} onChange={(e) => set("pickup_zip", e.target.value.replace(/\D/g, ""))} /></div>
            <div><label className="label" htmlFor="dz">Delivery ZIP</label><input id="dz" className="field" inputMode="numeric" maxLength={5} placeholder="e.g. 33101" required value={f.delivery_zip} onChange={(e) => set("delivery_zip", e.target.value.replace(/\D/g, ""))} /></div>
          </div>
          {laneMsg && (
            <div className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-[13px] ${laneMsg.c}`} role="status">
              <Check className="mt-0.5 h-4 w-4 shrink-0" /><span><strong>{laneMsg.t}.</strong> {laneMsg.s}</span>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <div><label className="label" htmlFor="pd">Pickup date</label><input id="pd" type="date" className="field" value={f.pickup_date} onChange={(e) => set("pickup_date", e.target.value)} /></div>
            <div><label className="label" htmlFor="fr">What are you shipping?</label><input id="fr" className="field" placeholder="e.g. 4 pallets of tile" value={f.freight} onChange={(e) => set("freight", e.target.value)} /></div>
          </div>
          {compact && <ContactFields f={f} set={set} />}
        </div>
      )}

      {!compact && step === 2 && (
        <div className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-3">
            <div><label className="label" htmlFor="wt">Total weight (lbs)</label><input id="wt" className="field" inputMode="numeric" placeholder="e.g. 2,400" value={f.weight} onChange={(e) => set("weight", e.target.value)} /></div>
            <div><label className="label" htmlFor="pl">Pallets / pieces</label><input id="pl" className="field" placeholder="e.g. 4 pallets" value={f.pallets} onChange={(e) => set("pallets", e.target.value)} /></div>
            <div><label className="label" htmlFor="lg">Liftgate needed?</label><select id="lg" className="field" value={f.liftgate} onChange={(e) => set("liftgate", e.target.value)}><option value="">Select</option><option>Yes, no dock at pickup</option><option>Yes, no dock at delivery</option><option>Both</option><option>No, dock to dock</option></select></div>
          </div>
          <ContactFields f={f} set={set} full />
          <div><label className="label" htmlFor="nt">Notes</label><textarea id="nt" className="field min-h-[90px]" placeholder="Delivery window, appointment, special handling…" value={f.notes} onChange={(e) => set("notes", e.target.value)} /></div>
        </div>
      )}

      {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        {!compact && step === 2 && <button type="button" onClick={() => setStep(1)} className="btn-outline px-5 py-3">Back</button>}
        <button type="submit" disabled={busy || (!compact && step === 1 && !canNext)} className="btn-orange display-md flex-1 px-6 py-3.5 text-lg disabled:cursor-not-allowed disabled:opacity-60">
          {busy ? "Sending…" : compact ? "Request My Quote" : step === 1 ? "Continue" : "Send Quote Request"} <Arrow className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-center text-[11px] text-muted">No obligation. Your details go straight to dispatch, never to a broker list.</p>
    </form>
  );
}

function ContactFields({ f, set, full = false }: { f: Record<string, string>; set: (k: string, v: string) => void; full?: boolean }) {
  return (
    <div className={`grid gap-3 ${full ? "sm:grid-cols-2" : "grid-cols-2"}`}>
      <div><label className="label" htmlFor="nm">Name</label><input id="nm" className="field" required autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} /></div>
      {full && <div><label className="label" htmlFor="co">Company</label><input id="co" className="field" autoComplete="organization" value={f.company} onChange={(e) => set("company", e.target.value)} /></div>}
      <div><label className="label" htmlFor="ph">Phone</label><input id="ph" type="tel" className="field" required autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} /></div>
      <div className={full ? "" : "col-span-2"}><label className="label" htmlFor="em">Email</label><input id="em" type="email" className="field" required autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} /></div>
    </div>
  );
}
