import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Facebook, Instagram, LinkedIn, Mail, Phone, Clock, Pin } from "./Icons";
import { PhoneLink } from "./PhoneLink";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="stripe h-2 opacity-90" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-block rounded-xl bg-white p-3"><span className="relative block h-16 w-[140px]"><Image src="/images/logo.webp" alt={`${site.name} logo`} fill sizes="140px" className="object-contain" /></span></Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed">{site.legalName} is an asset-based trucking company moving product across Florida and the Southeast. Same-day freight, cargo van, box truck and flatbed, with our own trucks and CDL drivers.</p>
            <div className="mt-4 flex gap-3">
              {site.social.facebook && <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-orange"><Facebook className="h-4 w-4" /></a>}
              {site.social.instagram && <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-orange"><Instagram className="h-4 w-4" /></a>}
              {site.social.linkedin && <a href={site.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-orange"><LinkedIn className="h-4 w-4" /></a>}
            </div>
          </div>
          <div>
            <h3 className="display-md mb-4 text-base text-white">Services</h3>
            <ul className="space-y-2 text-[14px]">
              {services.map((s) => <li key={s.slug}><Link href={`/${s.slug}/`} className="hover:text-orange-300">{s.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="display-md mb-4 text-base text-white">Company</h3>
            <ul className="space-y-2 text-[14px]">
              {[["/about-us/", "About Us"], ["/service-area/", "Service Area"], ["/careers/", "Careers & Driver Jobs"], ["/reviews/", "Reviews"], ["/blog/", "Blog"], ["/faq/", "FAQ"], ["/contact/", "Contact"], ["/get-a-quote/", "Get a Quote"]].map(([h, l]) => <li key={h}><Link href={h} className="hover:text-orange-300">{l}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="display-md mb-4 text-base text-white">Dispatch</h3>
            <ul className="space-y-3 text-[14px]">
              <li><PhoneLink location="footer" className="flex items-center gap-2 font-display text-xl font-semibold text-white hover:text-orange-300"><Phone className="h-4 w-4 text-orange" />{site.phone}</PhoneLink></li>
              <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-orange-300"><Mail className="h-4 w-4 text-orange" />{site.email}</a></li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange" />{site.hours}</li>
              <li className="flex items-center gap-2"><Pin className="h-4 w-4 text-orange" />{site.address.display}</li>
            </ul>
            <Link href="/get-a-quote/" className="btn-orange mt-5 w-full py-3">Request a Quote</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/50 sm:flex-row sm:items-center">
          <p>© {year} {site.legalName}. All rights reserved.{site.usdot && ` USDOT ${site.usdot}.`}{site.mc && ` MC ${site.mc}.`}</p>
          <p className="flex gap-4"><Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link><Link href="/terms/" className="hover:text-white">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
}
