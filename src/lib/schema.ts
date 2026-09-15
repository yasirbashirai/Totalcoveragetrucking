import { site } from "@/data/site";
import type { Service } from "@/data/services";

/** Organization + LocalBusiness (MovingCompany subtype is closest to a carrier in schema.org). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#org`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.webp`,
    image: `${site.url}/images/og-default.png`,
    telephone: site.phone,
    email: site.email,
    description: "Asset-based trucking company providing same-day freight delivery, cargo van, box truck and flatbed service across Florida and the Southeast.",
    areaServed: [{ "@type": "State", name: "Florida" }, ...site.regionalStates.map((s) => ({ "@type": "State", name: s }))],
    address: { "@type": "PostalAddress", addressRegion: site.address.stateCode, addressCountry: "US" },
    openingHoursSpecification: site.hoursSchema.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${site.url}/${s.slug}/`,
    provider: { "@id": `${site.url}/#org` },
    areaServed: { "@type": "State", name: "Florida" },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  };
}

export function articleSchema(p: { title: string; description: string; date: string; slug: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    image: `${site.url}${p.image}`,
    mainEntityOfPage: `${site.url}/blog/${p.slug}/`,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@id": `${site.url}/#org` },
  };
}

export function jobPostingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "CDL Truck Driver (Florida, Home Daily)",
    description: "Total Coverage Trucking is hiring CDL Class A and Class B drivers for same-day and regional freight across Florida. Company equipment, home daily on most routes.",
    datePosted: "2026-09-01",
    employmentType: ["FULL_TIME", "PART_TIME"],
    hiringOrganization: { "@id": `${site.url}/#org` },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressRegion: "FL", addressCountry: "US" } },
    directApply: true,
  };
}
