"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackLead } from "@/lib/analytics";

/** Shared submit handler: POST /api/lead, track, redirect to thank-you. */
export function useLead(form: "quote" | "contact" | "driver") {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const submit = async (payload: Record<string, string>) => {
    setBusy(true); setError("");
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, form, page: window.location.pathname }) });
      if (!r.ok) throw new Error("bad");
      trackLead(form, { equipment: payload.equipment });
      router.push(`/thank-you/?form=${form}`);
    } catch { setError("Something went wrong. Please call us or try again."); setBusy(false); }
  };
  return { busy, error, submit };
}
