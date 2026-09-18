# Total Coverage Trucking, LLC — Website

Conversion-focused, SEO-structured marketing site for **Total Coverage Trucking, LLC**, an asset-based Florida freight carrier (same-day freight, cargo van, box truck, flatbed, dedicated trucking, product distribution).

Built with **Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript**. Fully static except the lead API, quote page and thank-you page.

## Pages (38 routes)

| Route | Purpose |
|---|---|
| `/` | Home funnel: hero + instant quote card, services, how it works, interactive fleet, Florida coverage map, carrier-vs-broker, reviews, FAQ, blog, CTA |
| `/services/` | Service hub with comparison table |
| `/same-day-freight-delivery-florida/` `/cargo-van-delivery/` `/box-truck-freight/` `/flatbed-trucking/` `/dedicated-contract-trucking/` `/product-distribution/` | Six SEO service pages, each with specs, FAQs, schema and a sticky quote form |
| `/trucking-jacksonville/` `/trucking-orlando/` `/trucking-tampa/` `/trucking-miami/` `/trucking-fort-lauderdale/` `/trucking-west-palm-beach/` `/trucking-fort-myers/` `/trucking-tallahassee/` | Eight city landing pages for local SEO (unique copy, lanes, industries, FAQs, City-scoped Service schema) |
| `/about-us/` | Trust, credentials, roadmap |
| `/service-area/` | Florida map, metro hubs, corridors, regional states |
| `/get-a-quote/` | Two-step quote form with live same-day lane check |
| `/careers/` | Hiring page: roles, perks, online driver application, driver FAQ, JobPosting schema |
| `/reviews/` `/faq/` `/contact/` `/blog/` + 5 articles | Authority and support pages |
| `/thank-you/` `/privacy-policy/` `/terms/` | Utility |
| `/sitemap.xml` `/robots.txt` | Generated |

## Structure

```
src/
  app/            routes (one folder per page), layout, sitemap, robots, api/lead
  components/     Header, Footer, QuoteForm, ContactForm, DriverForm, FleetTabs, FloridaMap, ...
  data/           site.ts (all business facts), services.ts, cities.ts, blog.ts, reviews.ts, faqs.ts
  lib/            seo.ts (metadata), schema.ts (JSON-LD), florida.ts (ZIP lane check), analytics.ts
public/images/    fleet photography + logo
docs/             client proposal
```

Every phone number, email, hour and credential is read from `src/data/site.ts`. Change it there once.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Lead delivery (env vars)

All three forms POST to `/api/lead`. Set on Vercel:

```
RESEND_API_KEY=...
LEAD_TO_EMAIL=dispatch@totalcoveragetrucking.com   # comma-separated allowed
LEAD_FROM_EMAIL=Total Coverage Trucking <leads@totalcoveragetrucking.com>
CRM_WEBHOOK_URL=...            # optional JSON POST per lead
NEXT_PUBLIC_GTM_ID=GTM-XXXX    # optional
```

Without a provider configured, leads are logged to the server console (nothing is lost silently).

## Before launch

- [x] Phone number (407-907-8401) set 2026-09-19
- [ ] Confirm mailbox (`site.email`) and add USDOT / MC in `src/data/site.ts`
- [ ] Replace sample reviews in `src/data/reviews.ts` with real ones
- [ ] Swap `public/images/*` for the client's own fleet photography (same filenames). Current photos are Unsplash-licensed placeholders chosen to emphasise 26 ft box trucks + flatbeds (2026-09-19); no third-party logos or watermarks.
- [ ] Social URLs in `site.social`
- [ ] Set env vars above and deploy to Vercel
