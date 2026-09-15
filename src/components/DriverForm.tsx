"use client";
import { useState } from "react";
import { useLead } from "./useLead";
import { Arrow } from "./Icons";

/** Online driver / owner-operator application. Phone-first layout. */
export function DriverForm() {
  const { busy, error, submit } = useLead("driver");
  const [f, setF] = useState<Record<string, string>>({ name: "", phone: "", email: "", city: "", position: "Company driver", license_class: "", endorsements: "", experience: "", equipment: "", availability: "", mvr: "", notes: "", consent: "" });
  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));
  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(f); }} className="card relative overflow-hidden p-6 sm:p-8" id="apply">
      <div className="stripe-thin absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" onChange={(e) => set("company_website", e.target.value)} />
      <h3 className="display text-2xl text-navy sm:text-3xl">Driver Application</h3>
      <p className="mt-1 mb-5 text-[13px] text-muted">Takes about 3 minutes. Reviewed within 2 business days.</p>

      <p className="eyebrow mb-2 text-orange">About you</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div><label className="label" htmlFor="d-nm">Full name</label><input id="d-nm" className="field" required value={f.name} onChange={(e) => set("name", e.target.value)} /></div>
        <div><label className="label" htmlFor="d-ph">Phone</label><input id="d-ph" type="tel" className="field" required value={f.phone} onChange={(e) => set("phone", e.target.value)} /></div>
        <div><label className="label" htmlFor="d-em">Email</label><input id="d-em" type="email" className="field" required value={f.email} onChange={(e) => set("email", e.target.value)} /></div>
        <div><label className="label" htmlFor="d-ci">City, State</label><input id="d-ci" className="field" placeholder="e.g. Orlando, FL" value={f.city} onChange={(e) => set("city", e.target.value)} /></div>
      </div>

      <p className="eyebrow mb-2 mt-6 text-orange">Position &amp; license</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div><label className="label" htmlFor="d-po">Applying as</label><select id="d-po" className="field" value={f.position} onChange={(e) => set("position", e.target.value)}><option>Company driver</option><option>Owner-operator</option><option>Cargo van driver (non-CDL)</option><option>Dispatch / office</option></select></div>
        <div><label className="label" htmlFor="d-lc">License class</label><select id="d-lc" className="field" required value={f.license_class} onChange={(e) => set("license_class", e.target.value)}><option value="">Select</option><option>CDL Class A</option><option>CDL Class B</option><option>Standard license (non-CDL)</option></select></div>
        <div><label className="label" htmlFor="d-en">Endorsements</label><input id="d-en" className="field" placeholder="e.g. Hazmat, Tanker, none" value={f.endorsements} onChange={(e) => set("endorsements", e.target.value)} /></div>
        <div><label className="label" htmlFor="d-ex">Years of driving experience</label><input id="d-ex" className="field" inputMode="numeric" value={f.experience} onChange={(e) => set("experience", e.target.value)} /></div>
        <div><label className="label" htmlFor="d-eq">Equipment experience</label><input id="d-eq" className="field" placeholder="e.g. box truck, flatbed, sprinter" value={f.equipment} onChange={(e) => set("equipment", e.target.value)} /></div>
        <div><label className="label" htmlFor="d-av">Availability</label><select id="d-av" className="field" value={f.availability} onChange={(e) => set("availability", e.target.value)}><option value="">Select</option><option>Full-time</option><option>Part-time</option><option>Weekends</option><option>Immediately</option></select></div>
        <div className="sm:col-span-2"><label className="label" htmlFor="d-mv">Clean MVR (last 3 years)?</label><select id="d-mv" className="field" value={f.mvr} onChange={(e) => set("mvr", e.target.value)}><option value="">Select</option><option>Yes</option><option>Minor violations</option><option>Prefer to discuss</option></select></div>
        <div className="sm:col-span-2"><label className="label" htmlFor="d-nt">Anything else</label><textarea id="d-nt" className="field min-h-[90px]" placeholder="Preferred routes, home-time needs, questions…" value={f.notes} onChange={(e) => set("notes", e.target.value)} /></div>
      </div>
      <label className="mt-4 flex items-start gap-2 text-[13px] text-slate"><input type="checkbox" required className="mt-1 accent-orange" onChange={(e) => set("consent", e.target.checked ? "yes" : "")} />I confirm the information above is accurate and I consent to being contacted about this application.</label>
      {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
      <button type="submit" disabled={busy} className="btn-orange display-md mt-5 w-full px-6 py-3.5 text-lg disabled:opacity-60">{busy ? "Sending…" : "Submit Application"} <Arrow className="h-5 w-5" /></button>
    </form>
  );
}
