export type ServiceIcon = "bolt" | "van" | "box" | "flatbed" | "dryvan" | "contract" | "distribution";

export type Service = {
  slug: string;
  name: string;
  short: string;            // card blurb
  icon: ServiceIcon;
  image: string;            // /images/*.webp
  imageAlt: string;
  title: string;            // <title>
  description: string;      // meta description
  h1: string;
  intro: string;
  bullets: string[];        // "What's included"
  fit: string[];            // "Typical loads"
  pallets: string;          // standard pallet count shown in the compare table
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

/** Service catalogue. Slugs are flat (no /services/ prefix) for cleaner URLs and stronger SEO. */
export const services: Service[] = [
  {
    slug: "same-day-freight-delivery-florida",
    name: "Same-Day Freight Delivery",
    short: "Pickup and delivery anywhere in Florida in the same business day. Our core promise.",
    icon: "bolt",
    image: "/images/box-truck-flatbed-highway.webp",
    imageAlt: "26 ft box truck and flatbed moving freight on a Florida highway",
    title: "Same-Day Freight Delivery in Florida | Total Coverage Trucking",
    description: "Same-day freight pickup and delivery across Florida with our own trucks and drivers. Cargo van, 26 ft box truck, flatbed and 53 ft dry van. Get a quote in one business hour.",
    h1: "Same-Day Freight Delivery Across Florida",
    intro: "When a shipment cannot wait until tomorrow, we dispatch our own truck the same business day. Book before noon and most Florida lanes deliver before close of business, with one dispatcher watching the load from pickup to signature.",
    bullets: ["Dispatch within the hour on confirmed same-day bookings", "Direct, non-stop runs (no terminals, no transfers)", "Live driver updates by text or call", "Signed proof of delivery sent the moment the freight lands", "Cargo van, box truck, flatbed or 53 ft dry van matched to the load"],
    fit: ["Manufacturing line-down parts", "Retail replenishment and stock-outs", "Medical, lab and dental supplies", "Construction materials needed on site today", "Trade show and event freight"],
    pallets: "2–26 (unit matched to the load)",
    specs: [{ label: "Coverage", value: "All 67 Florida counties" }, { label: "Booking cutoff", value: "12:00 PM ET for same-day (later on request)" }, { label: "Equipment", value: "Cargo van · 26 ft box truck · flatbed · 53 ft dry van" }, { label: "Quote turnaround", value: "Within 1 business hour" }],
    faqs: [
      { q: "How late can I book a same-day delivery?", a: "Book by 12:00 PM ET for guaranteed same-day scheduling. Later requests are accepted when a truck is positioned nearby, so call dispatch and we will tell you straight away." },
      { q: "Do you transfer my freight between trucks?", a: "No. Same-day loads ride direct on one truck from your dock to the delivery address." },
      { q: "Can you deliver outside Florida?", a: "Yes. Georgia, Alabama and the Carolinas are served as next-day regional lanes. Same-day service is Florida only." },
    ],
    keywords: ["same day freight delivery florida", "same day trucking florida", "expedited freight florida", "hot shot delivery florida"],
  },
  {
    slug: "cargo-van-delivery",
    name: "Cargo Van & Sprinter Delivery",
    short: "Fast, agile delivery for small and urgent shipments: parts, documents, pallets up to 3,000 lbs.",
    icon: "van",
    image: "/images/box-truck-city.webp",
    imageAlt: "Delivery truck moving through a Florida city street",
    title: "Cargo Van & Sprinter Van Delivery in Florida | Total Coverage Trucking",
    description: "Cargo van and Sprinter van freight delivery across Florida. Ideal for 1–3 pallets, parts and time-critical shipments. Same-day available.",
    h1: "Cargo Van & Sprinter Van Delivery",
    intro: "Our cargo vans are the fastest unit in the fleet. They move small, high-value or urgent freight through city traffic and tight docks that a semi cannot reach, and they are usually the most economical option for 1 to 3 pallets.",
    bullets: ["Up to 3,000 lbs or 2–3 standard pallets", "Fits residential streets, parking garages and loading zones", "Ideal for expedited, exclusive-use runs", "Driver-assisted loading and unloading", "Same-day and scheduled service"],
    fit: ["Machine parts and repair components", "Print, packaging and marketing materials", "E-commerce fulfillment overflow", "Office and IT equipment", "Documents that need a signature today"],
    pallets: "2–3 standard pallets",
    specs: [{ label: "Payload", value: "Up to 3,000 lbs" }, { label: "Cargo space", value: "Approx. 12–14 ft, 2–3 pallets" }, { label: "Best distance", value: "Local to 350 miles" }, { label: "Service", value: "Exclusive use, direct run" }],
    faqs: [
      { q: "Is a cargo van cheaper than a box truck?", a: "For loads under 3,000 lbs and three pallets, yes. You pay for the smaller unit and the faster turnaround." },
      { q: "Can the driver help load?", a: "Yes. Drivers assist with hand-loaded freight and use a pallet jack for palletized shipments at dock height." },
    ],
    keywords: ["cargo van delivery florida", "sprinter van freight florida", "small freight delivery florida"],
  },
  {
    slug: "box-truck-freight",
    name: "Box Truck Freight",
    short: "26 ft box trucks with liftgate for LTL, retail and final-mile deliveries up to 10,000 lbs.",
    icon: "box",
    image: "/images/box-trucks-dock.webp",
    imageAlt: "Two white box trucks backed into a loading dock",
    title: "Box Truck Freight & LTL Delivery in Florida | Total Coverage Trucking",
    description: "26 ft box truck freight service across Florida. Liftgate delivery, LTL, retail distribution and final-mile. Up to 12 pallets. Same-day and scheduled runs.",
    h1: "Box Truck Freight & Final-Mile Delivery",
    intro: "The 26 ft box truck is the workhorse of Florida distribution. With a liftgate and pallet jack on board, our box trucks deliver where 53 ft trailers cannot: strip malls, storefronts, job sites and locations without a dock.",
    bullets: ["Up to 10,000 lbs or 10–12 standard pallets", "Liftgate and pallet jack on every truck", "Multi-stop and route delivery", "Inside delivery available on request", "Enclosed, weather-protected freight"],
    fit: ["Retail and grocery replenishment", "Furniture, fixtures and equipment", "Wholesale distribution to multiple stops", "Final-mile from warehouse to customer", "Events, trade shows and installations"],
    pallets: "10–12 standard pallets",
    specs: [{ label: "Payload", value: "Up to 10,000 lbs" }, { label: "Box", value: "26 ft · 10–12 pallets" }, { label: "Liftgate", value: "Standard on all units" }, { label: "Stops", value: "Single or multi-stop routes" }],
    faqs: [
      { q: "Do you offer liftgate delivery?", a: "Yes. Every box truck carries a liftgate, so deliveries to locations without a dock are standard, not an add-on surprise." },
      { q: "Can you run a recurring route?", a: "Yes. Many customers book a fixed weekly or daily route. See our Dedicated & Contract Trucking service." },
    ],
    keywords: ["box truck delivery florida", "ltl freight florida", "liftgate delivery florida", "final mile delivery florida"],
  },
  {
    slug: "flatbed-trucking",
    name: "Flatbed Trucking",
    short: "Open-deck hauling for building materials, machinery and oversized freight up to 48,000 lbs.",
    icon: "flatbed",
    image: "/images/flatbed.webp",
    imageAlt: "White flatbed truck with an empty 48 ft trailer",
    title: "Flatbed Trucking in Florida | Total Coverage Trucking",
    description: "Flatbed trucking across Florida and the Southeast. Building materials, steel, machinery and equipment up to 48,000 lbs. Tarping and securement included.",
    h1: "Flatbed Trucking for Materials & Equipment",
    intro: "Flatbed freight needs a driver who knows securement, not just a truck with a deck. Our flatbed service moves lumber, steel, roofing, pallets of block and machinery to job sites across Florida with straps, chains and tarps handled by the driver.",
    bullets: ["Up to 48,000 lbs on 48–53 ft decks", "Securement and tarping by CDL drivers", "Forklift or crane offload coordination at site", "Job-site and lay-down yard delivery", "Same-day within Florida, next-day regional"],
    fit: ["Lumber, trusses and roofing", "Steel, rebar and pipe", "Construction and landscaping equipment", "HVAC units and generators", "Pallets of block, pavers and stone"],
    pallets: "24–26 standard pallets",
    specs: [{ label: "Payload", value: "Up to 48,000 lbs" }, { label: "Deck", value: "48–53 ft flatbed" }, { label: "Securement", value: "Straps, chains, tarps included" }, { label: "Permits", value: "Oversize coordination on request" }],
    faqs: [
      { q: "Do you tarp loads?", a: "Yes. Tell us at booking if the freight needs protection from weather and the driver will arrive with tarps." },
      { q: "Can you haul oversized loads?", a: "We coordinate permits and escorts for over-dimension freight on a case-by-case basis. Send the dimensions with your quote request." },
    ],
    keywords: ["flatbed trucking florida", "flatbed hauling florida", "building materials delivery florida"],
  },
  {
    slug: "dry-van-trucking",
    name: "Dry Van Trucking (53 ft)",
    short: "Full-truckload capacity in a 53 ft enclosed trailer. Up to 26 pallets, sealed and weather-protected.",
    icon: "dryvan",
    image: "/images/hero-dry-van.webp",
    imageAlt: "Semi truck pulling a 53 ft dry van trailer on an open highway",
    title: "53 ft Dry Van Trucking in Florida | Total Coverage Trucking",
    description: "53 ft dry van truckload service across Florida and the Southeast. Up to 45,000 lbs or 26 pallets in a sealed, enclosed trailer. Same-day Florida, next-day regional.",
    h1: "53 ft Dry Van Truckload Service",
    intro: "When the load fills a trailer, our 53 ft dry vans move it in one enclosed, sealed run. Palletized goods, packaged product, retail freight and plant-to-warehouse transfers ride weather-protected from dock to dock with one driver and one point of contact.",
    bullets: ["Up to 45,000 lbs or 24–26 standard pallets", "Enclosed, sealed trailer for weather and security", "Dock-to-dock, drop or live load", "Full truckload only, no co-mingled freight", "Same-day within Florida, next-day regional"],
    fit: ["Palletized consumer goods and packaged product", "Retail and grocery distribution center loads", "Plant-to-warehouse transfers", "Furniture, fixtures and appliances", "Paper, packaging and non-perishable food"],
    pallets: "24–26 standard pallets",
    specs: [{ label: "Payload", value: "Up to 45,000 lbs" }, { label: "Trailer", value: "53 ft dry van · 24–26 pallets" }, { label: "Loading", value: "Dock-high, live or drop" }, { label: "Coverage", value: "Florida same-day · Southeast next-day" }],
    faqs: [
      { q: "How many pallets fit in a 53 ft dry van?", a: "26 standard 48x40 pallets single-stacked, or 24 when the load is turned. Weight is usually the limit before space, so send both with your quote." },
      { q: "Do you offer drop trailers?", a: "Yes, for dedicated and recurring lanes. Tell dispatch your loading schedule and we will plan a drop-and-hook." },
    ],
    keywords: ["dry van trucking florida", "53 ft dry van florida", "full truckload carrier florida"],
  },
  {
    slug: "dedicated-contract-trucking",
    name: "Dedicated & Contract Trucking",
    short: "A truck and driver committed to your lanes on a daily, weekly or monthly schedule.",
    icon: "contract",
    image: "/images/box-truck-facility.webp",
    imageAlt: "26 ft box truck backed up to a customer facility",
    title: "Dedicated & Contract Trucking in Florida | Total Coverage Trucking",
    description: "Dedicated truck and driver capacity for Florida shippers. Fixed routes, predictable pricing and a single point of contact. Daily, weekly and monthly contracts.",
    h1: "Dedicated & Contract Trucking",
    intro: "If you ship the same lanes every week, stop re-quoting them. A dedicated agreement gives you a committed truck and driver, a fixed schedule and a flat rate, so capacity is never a question on your busiest day.",
    bullets: ["Committed truck and driver on your schedule", "Flat weekly or monthly pricing", "Route optimization for multi-stop distribution", "Driver familiar with your docks and receivers", "Scale up as your volume grows"],
    fit: ["Distributors with recurring store deliveries", "Manufacturers with daily plant-to-warehouse moves", "3PLs needing reliable regional capacity", "Businesses replacing an in-house truck", "Seasonal surge coverage"],
    pallets: "2–26 (by unit)",
    specs: [{ label: "Term", value: "Daily, weekly or monthly" }, { label: "Pricing", value: "Flat rate per route or per day" }, { label: "Equipment", value: "Van, box truck, flatbed or dry van" }, { label: "Reporting", value: "Delivery confirmations per stop" }],
    faqs: [
      { q: "What is the minimum commitment?", a: "We start with a 30-day trial route so both sides can confirm the fit before a longer agreement." },
      { q: "Is dedicated trucking cheaper than spot quotes?", a: "Usually, yes. A committed schedule lets us plan the truck's day, and that saving is passed into a flat rate." },
    ],
    keywords: ["dedicated trucking florida", "contract carrier florida", "dedicated fleet services florida"],
  },
  {
    slug: "product-distribution",
    name: "Product Distribution & Final-Mile",
    short: "We move product from your warehouse to your customers, stores and job sites across Florida.",
    icon: "distribution",
    image: "/images/box-trucks-dock.webp",
    imageAlt: "Box trucks lined up at a distribution warehouse dock",
    title: "Product Distribution & Final-Mile Delivery in Florida | Total Coverage Trucking",
    description: "Florida product distribution and final-mile delivery. Warehouse-to-store, warehouse-to-customer and multi-stop routes with signed proof of delivery at every stop.",
    h1: "Product Distribution & Final-Mile Delivery",
    intro: "We are a trucking company that moves product. Wholesalers, manufacturers and e-commerce brands use us to get goods from the warehouse into the hands of stores and customers across Florida, with a signed POD at every stop.",
    bullets: ["Warehouse-to-store and warehouse-to-customer", "Multi-stop route planning", "Signed proof of delivery per stop", "Scheduled delivery windows", "Returns and reverse logistics on the same route"],
    fit: ["Consumer goods and beverage distributors", "Furniture and appliance retailers", "Building supply and hardware", "Regional e-commerce brands", "Food service and packaging suppliers"],
    pallets: "2–12 per route (van or box truck)",
    specs: [{ label: "Routes", value: "Single or multi-stop" }, { label: "Windows", value: "Scheduled AM / PM delivery" }, { label: "POD", value: "Signed and time-stamped" }, { label: "Coverage", value: "Statewide Florida" }],
    faqs: [
      { q: "How many stops can one route include?", a: "A box truck route typically covers 6 to 12 stops in a day depending on distance and unload time. We plan the route with you before the first run." },
      { q: "Do you provide proof of delivery?", a: "Yes. Every stop is signed and time-stamped, and the confirmations are sent to you the same day." },
    ],
    keywords: ["product distribution florida", "final mile delivery florida", "warehouse to store delivery florida"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
