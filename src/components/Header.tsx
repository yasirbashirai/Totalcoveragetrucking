"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Arrow, Chevron, Clock, Menu, Phone, Pin, Shield, X, ServicePictogram } from "./Icons";
import { PhoneLink } from "./PhoneLink";

const NAV = [
  { href: "/services/", label: "Services", mega: true },
  { href: "/about-us/", label: "About Us" },
  { href: "/service-area/", label: "Service Area" },
  { href: "/careers/", label: "Careers" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const path = usePathname();

  useEffect(() => { const t = window.setTimeout(() => { setOpen(false); setMega(false); }, 0); return () => window.clearTimeout(t); }, [path]);
  useEffect(() => {
    const f = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    window.addEventListener("scroll", f, { passive: true });
    const t = window.setTimeout(f, 0);
    return () => { window.removeEventListener("scroll", f); window.clearTimeout(t); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-navy-900 text-[13px] text-white/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><Pin className="h-4 w-4 text-orange" />{site.address.display}</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><Shield className="h-4 w-4 text-orange" />Asset-Based Carrier{site.usdot && <> <span className="text-white/30">|</span> USDOT {site.usdot}</>}{site.mc && <> <span className="text-white/30">|</span> MC {site.mc}</>}</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><Clock className="h-4 w-4 text-orange" />{site.hours}</span>
            <span className="eyebrow hidden text-orange-300 xl:inline">{site.tagline}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`relative bg-white transition-shadow duration-500 ${scrolled ? "shadow-[0_8px_30px_-12px_rgb(1_35_85/0.35)]" : "shadow-[0_1px_0_#d9e0ea]"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <Link href="/" className="relative flex shrink-0 items-center" aria-label={`${site.name} home`}>
            <span className={`relative block transition-all duration-500 ${scrolled ? "h-12 w-[92px]" : "h-14 w-[104px] lg:h-[68px] lg:w-[124px]"}`}>
              <Image src="/images/logo.webp" alt={`${site.name} logo`} fill sizes="124px" className="object-contain" priority />
            </span>
          </Link>

          {/* Mega menu is anchored to the nav's left edge (not centred on the link) so it never runs off-screen on 13–15" laptops. */}
          <nav className="relative hidden items-center gap-0.5 lg:flex" aria-label="Primary" onMouseLeave={() => setMega(false)}>
            {NAV.map((n) =>
              n.mega ? (
                <Link key={n.href} href={n.href} onMouseEnter={() => setMega(true)} onFocus={() => setMega(true)} className={`inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[15px] font-semibold hover:text-orange ${path?.startsWith("/services") || mega ? "text-orange" : "text-navy"}`} aria-expanded={mega} aria-haspopup="true">
                  {n.label} <Chevron className="h-4 w-4 opacity-70" />
                </Link>
              ) : (
                <Link key={n.href} href={n.href} onMouseEnter={() => setMega(false)} className={`whitespace-nowrap rounded-md px-2.5 py-2 text-[15px] font-semibold hover:text-orange ${path === n.href || (n.href !== "/" && path?.startsWith(n.href)) ? "text-orange" : "text-navy"}`}>{n.label}</Link>
              )
            )}
            {mega && <MegaMenu />}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <PhoneLink location="header" className="hidden items-center gap-2 whitespace-nowrap text-navy md:flex">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-orange-100 text-orange"><Phone className="h-5 w-5" /></span>
              <span className="leading-tight">
                <span className="block font-display text-[21px] font-semibold tracking-wide">{site.phone}</span>
                <span className="hidden text-[11px] text-muted xl:block">Dispatch {site.hoursShort}</span>
              </span>
            </PhoneLink>
            <Link href="/get-a-quote/" className="btn-orange display-md whitespace-nowrap px-4 py-2.5 text-[15px] sm:px-6 sm:py-3 sm:text-lg">Get a Quote <Arrow className="h-4 w-4" /></Link>
            <button className="grid h-11 w-11 place-items-center rounded-lg text-navy lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="h-6 w-6" /></button>
          </div>
        </div>
        {/* Reading progress */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-transparent"><div className="progress grad-orange h-full" style={{ ["--p" as string]: progress }} /></div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="display text-xl text-navy">Total <span className="text-orange">Coverage</span></span>
              <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-lg bg-mist text-navy" aria-label="Close menu"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <p className="eyebrow mb-2 text-muted">Services</p>
              <ul className="mb-5 grid gap-1.5">
                {services.map((s) => (
                  <li key={s.slug}><Link href={`/${s.slug}/`} className="flex items-center gap-3 rounded-xl border border-line bg-cloud px-3 py-2.5 text-[14px] font-semibold text-navy"><ServicePictogram name={s.icon} className="h-6 w-9 shrink-0 text-orange" />{s.name}</Link></li>
                ))}
              </ul>
              <ul className="grid gap-1 border-t border-line pt-3">
                {NAV.filter((n) => !n.mega).map((n) => (
                  <li key={n.href}><Link href={n.href} className="block rounded-lg px-3 py-3 text-[16px] font-semibold text-navy hover:bg-mist">{n.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="grid gap-2 border-t border-line p-4">
              <Link href="/get-a-quote/" className="btn-orange py-3">Get a Quote <Arrow className="h-4 w-4" /></Link>
              <PhoneLink location="drawer" className="btn-outline py-3"><Phone className="h-4 w-4" /> {site.phone}</PhoneLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu() {
  return (
    <div className="absolute left-0 top-full z-50 w-[780px] max-w-[calc(100vw-2rem)] pt-3 xl:w-[920px]">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-lift)]">
        <div className="grid grid-cols-3 gap-1 p-3 xl:grid-cols-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`} className="group flex gap-3 rounded-xl p-3 transition hover:bg-orange-100/60">
              <ServicePictogram name={s.icon} className="mt-0.5 h-7 w-11 shrink-0 text-navy transition group-hover:text-orange" />
              <span><span className="block text-[14px] font-bold text-navy">{s.name}</span><span className="mt-0.5 block text-[12px] leading-snug text-muted">{s.short.split(".")[0]}.</span></span>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-line bg-cloud px-5 py-3 text-[13px]">
          <span className="text-slate">Same-day across Florida · Regional to the Southeast</span>
          <Link href="/services/" className="font-semibold text-orange hover:underline">All services →</Link>
        </div>
      </div>
    </div>
  );
}
