"use client";
import { useState } from "react";
import { useLead } from "./useLead";
import { Arrow } from "./Icons";

export function ContactForm() {
  const { busy, error, submit } = useLead("contact");
  const [f, setF] = useState<Record<string, string>>({ name: "", company: "", phone: "", email: "", topic: "Freight quote", message: "" });
  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));
  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(f); }} className="card relative overflow-hidden p-6 sm:p-8">
      <div className="stripe-thin absolute inset-x-0 top-0 h-1.5" aria-hidden="true" />
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" onChange={(e) => set("company_website", e.target.value)} />
      <h3 className="display text-2xl text-navy sm:text-3xl">Send a Message</h3>
      <p className="mt-1 mb-4 text-[13px] text-muted">We reply within one business hour during dispatch hours.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div><label className="label" htmlFor="c-nm">Name</label><input id="c-nm" className="field" required value={f.name} onChange={(e) => set("name", e.target.value)} /></div>
        <div><label className="label" htmlFor="c-co">Company</label><input id="c-co" className="field" value={f.company} onChange={(e) => set("company", e.target.value)} /></div>
        <div><label className="label" htmlFor="c-ph">Phone</label><input id="c-ph" type="tel" className="field" value={f.phone} onChange={(e) => set("phone", e.target.value)} /></div>
        <div><label className="label" htmlFor="c-em">Email</label><input id="c-em" type="email" className="field" required value={f.email} onChange={(e) => set("email", e.target.value)} /></div>
        <div className="sm:col-span-2"><label className="label" htmlFor="c-tp">Topic</label><select id="c-tp" className="field" value={f.topic} onChange={(e) => set("topic", e.target.value)}><option>Freight quote</option><option>Dedicated / contract trucking</option><option>Driver or carrier inquiry</option><option>Billing</option><option>Other</option></select></div>
        <div className="sm:col-span-2"><label className="label" htmlFor="c-ms">Message</label><textarea id="c-ms" className="field min-h-[120px]" required value={f.message} onChange={(e) => set("message", e.target.value)} /></div>
      </div>
      {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
      <button type="submit" disabled={busy} className="btn-orange display-md mt-4 w-full px-6 py-3.5 text-lg disabled:opacity-60">{busy ? "Sending…" : "Send Message"} <Arrow className="h-5 w-5" /></button>
    </form>
  );
}
