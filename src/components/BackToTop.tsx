"use client";
import { useEffect, useState } from "react";
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className={`fixed bottom-24 right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-navy text-white shadow-lg transition-all lg:bottom-6 lg:right-6 ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5"><path d="m6 15 6-6 6 6" /></svg>
    </button>
  );
}
