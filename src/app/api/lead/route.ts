import { NextResponse } from "next/server";
import { site } from "@/data/site";

/**
 * Single lead intake for all site forms (quote, contact, driver application).
 * Delivers by email (Resend) and optionally to a CRM webhook. Fails soft: if no
 * provider is configured the lead is logged so nothing is silently lost.
 *
 *   RESEND_API_KEY, LEAD_TO_EMAIL (comma separated), LEAD_FROM_EMAIL
 *   CRM_WEBHOOK_URL (optional JSON POST of the full lead)
 */
const MAX = 800;
const REQUIRED: Record<string, string[]> = {
  quote: ["name", "phone", "email", "pickup_zip", "delivery_zip"],
  contact: ["name", "email", "message"],
  driver: ["name", "phone", "email", "license_class"],
};

export async function POST(req: Request) {
  let data: Record<string, string>;
  try { data = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  if (data.company_website) return NextResponse.json({ ok: true }); // honeypot
  const form = (data.form ?? "contact") as keyof typeof REQUIRED;
  const required = REQUIRED[form] ?? REQUIRED.contact;
  if (required.some((k) => !data[k])) return NextResponse.json({ ok: false, error: "missing" }, { status: 422 });

  const lead = Object.fromEntries(Object.entries(data).filter(([k]) => k !== "company_website").map(([k, v]) => [k, String(v ?? "").slice(0, MAX)]));
  const when = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const lines = Object.entries(lead).filter(([k, v]) => v && k !== "form").map(([k, v]) => `${k.replace(/_/g, " ").toUpperCase()}: ${v}`);
  const subject =
    form === "quote" ? `New quote: ${lead.equipment || "freight"} ${lead.pickup_zip} → ${lead.delivery_zip} (${lead.name})`
    : form === "driver" ? `Driver application: ${lead.name} (${lead.license_class})`
    : `Website contact: ${lead.name}`;
  const text = `${subject}\n${when} ET\n\n${lines.join("\n")}`;

  const jobs: Promise<unknown>[] = [];
  if (process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL) {
    jobs.push(fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.LEAD_FROM_EMAIL ?? `${site.name} Website <leads@${new URL(site.url).hostname}>`, to: process.env.LEAD_TO_EMAIL.split(","), reply_to: lead.email, subject, text }),
    }));
  }
  if (process.env.CRM_WEBHOOK_URL) {
    jobs.push(fetch(process.env.CRM_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...lead, received_at: when }) }));
  }
  if (jobs.length === 0) console.log("[lead] no delivery provider configured\n" + text);
  const results = await Promise.allSettled(jobs);
  results.forEach((r) => { if (r.status === "rejected") console.error("[lead] delivery failed", r.reason); });
  return NextResponse.json({ ok: true });
}
