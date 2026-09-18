export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;      // ISO
  readMins: number;
  image: string;
  imageAlt: string;
  category: string;
  keywords: string[];
  /** Simple block content: h2 / p / ul rendered by the article page. */
  body: ({ h2: string } | { p: string } | { ul: string[] })[];
};

export const posts: Post[] = [
  {
    slug: "same-day-freight-florida-what-shippers-should-know",
    title: "Same-Day Freight in Florida: What Shippers Should Know Before Booking",
    description: "Cutoff times, equipment choice, what to have ready at the dock and how pricing works for same-day freight delivery across Florida.",
    date: "2026-09-01", readMins: 5, image: "/images/truck-highway.webp", imageAlt: "Semi truck on a Florida highway", category: "Shipping Guides",
    keywords: ["same day freight florida", "same day delivery shipping tips"],
    body: [
      { p: "Same-day freight is the fastest service level a trucking company offers. It is also the one where small details at booking make the biggest difference. Here is what to know before you request a same-day pickup in Florida." },
      { h2: "1. Book before the cutoff" },
      { p: "Most carriers, including us, need same-day requests by noon Eastern to guarantee a truck. The earlier you book, the closer the assigned truck is likely to be. Later requests are still possible when a unit is nearby, so it is always worth a call." },
      { h2: "2. Pick the right unit for the load" },
      { ul: ["Cargo / Sprinter van: up to 3,000 lbs, 2–3 pallets, fastest through traffic and tight docks.", "26 ft box truck: up to 10,000 lbs, 10–12 pallets, liftgate for no-dock deliveries.", "Flatbed: building materials, machinery and anything that will not fit in a box."] },
      { h2: "3. Have the freight ready" },
      { p: "Same-day pricing assumes the freight is packaged, labeled and staged when the driver arrives. Long dwell at the dock is the most common reason a same-day load turns into a next-morning delivery." },
      { h2: "4. Know how pricing works" },
      { p: "Same-day rates are quoted per run, not per pound. The main inputs are distance, the equipment required, and how quickly the truck must be on site. Because the load rides direct on one truck, there are no terminal or handling fees." },
      { h2: "5. Ask who is actually moving the freight" },
      { p: "If you book through a broker, the truck that shows up belongs to someone else. With an asset-based carrier the dispatcher, the driver and the truck are all one company, which matters most on the days nothing can go wrong." },
    ],
  },
  {
    slug: "box-truck-vs-cargo-van-vs-flatbed",
    title: "Box Truck vs. Cargo Van vs. Flatbed: Choosing the Right Equipment",
    description: "A plain-language guide to matching your shipment to the right truck, with weight, pallet and access considerations for each unit.",
    date: "2026-08-20", readMins: 4, image: "/images/box-trucks-dock.webp", imageAlt: "Box trucks at a loading dock", category: "Equipment",
    keywords: ["box truck vs cargo van", "flatbed vs box truck", "which truck for my shipment"],
    body: [
      { p: "Choosing the wrong equipment is the fastest way to overpay for freight, or worse, to have a driver show up who cannot load it. Here is how we match shipments to trucks." },
      { h2: "Cargo van or Sprinter van" },
      { p: "Best for small, urgent loads: 1 to 3 pallets, under 3,000 lbs, or hand-loaded parts and boxes. A van moves through city traffic faster than any other unit and can deliver to residential streets and parking garages." },
      { h2: "26 ft box truck" },
      { p: "The default for LTL and distribution. Up to 12 pallets and 10,000 lbs, with a liftgate so the freight can be delivered where there is no dock. If your customer is a storefront, a job site or a home, this is usually the truck." },
      { h2: "Flatbed" },
      { p: "For anything that will not fit in a box or needs to be loaded by forklift or crane from the side: lumber, steel, roofing, machinery, pallets of block. The driver handles securement and tarping." },
      { h2: "Quick rule of thumb" },
      { ul: ["Under 3 pallets and urgent: van.", "3 to 12 pallets, or no dock at delivery: box truck.", "Oversized, heavy or side-loaded: flatbed.", "Not sure: send the dimensions and weight with your quote request and we will choose for you."] },
    ],
  },
  {
    slug: "asset-based-carrier-vs-freight-broker",
    title: "Asset-Based Carrier vs. Freight Broker: Why It Matters for Your Freight",
    description: "The practical differences between shipping with a company that owns its trucks and one that resells your load, and when each makes sense.",
    date: "2026-08-05", readMins: 4, image: "/images/box-truck-facility.webp", imageAlt: "Box truck backed up to a customer facility", category: "Industry",
    keywords: ["asset based carrier vs broker", "freight broker vs trucking company"],
    body: [
      { p: "Every freight quote you receive comes from one of two kinds of company: a carrier that owns trucks, or a broker that finds one. Both have a place in logistics. Knowing which you are dealing with changes what you should expect." },
      { h2: "What an asset-based carrier is" },
      { p: "A carrier owns or leases its trucks and employs its drivers. When you book, the person quoting you controls the equipment. Accountability is direct: one company is responsible from pickup to proof of delivery." },
      { h2: "What a freight broker is" },
      { p: "A broker matches your load with a third-party carrier and takes a margin. Brokers are useful for lanes and equipment a single carrier cannot cover, but the truck that arrives is not theirs and the driver does not work for them." },
      { h2: "Where the difference shows up" },
      { ul: ["Communication: with a carrier you speak to the dispatcher who talks to the driver.", "Reliability: a carrier cannot 'fall off' a load the way a brokered truck can.", "Pricing: no middle margin, and dedicated lanes can be priced flat.", "Claims: one insurance policy, one responsible party."] },
      { h2: "When a broker still makes sense" },
      { p: "Cross-country lanes, specialized equipment or volume beyond one fleet's capacity. For Florida same-day and regional freight, an asset-based carrier gives you the shorter, more accountable path." },
    ],
  },
  {
    slug: "how-to-prepare-a-pallet-shipment-for-pickup",
    title: "How to Prepare a Pallet Shipment for Pickup (Checklist)",
    description: "A dock-ready checklist for palletizing, labeling and staging freight so the driver can load fast and your shipment arrives undamaged.",
    date: "2026-07-22", readMins: 3, image: "/images/box-trucks-dock.webp", imageAlt: "Box trucks at a warehouse loading dock", category: "Shipping Guides",
    keywords: ["how to prepare pallet shipment", "pallet shipping checklist"],
    body: [
      { p: "A well-prepared pallet loads in minutes and arrives the way it left. A poorly prepared one costs time at both docks and is the number one cause of damage. Use this checklist before the driver arrives." },
      { h2: "Pallet and stacking" },
      { ul: ["Use a standard 48 x 40 in pallet in good condition, no broken boards.", "Keep the load inside the pallet footprint. Overhang is the most common damage cause.", "Heaviest cartons on the bottom, stacked in columns, no pyramids."] },
      { h2: "Wrapping and securing" },
      { ul: ["Stretch wrap from the pallet base up, at least three full wraps at the bottom.", "Corner boards for fragile or tall stacks.", "Band or strap anything over 1,200 lbs."] },
      { h2: "Labels and paperwork" },
      { ul: ["Label two adjacent sides with the consignee, address and PO number.", "Have a bill of lading ready; we can provide a template.", "Count pieces and weight on the BOL so the driver can confirm at pickup."] },
      { h2: "Staging" },
      { p: "Stage the freight at the dock or a clear ground-level spot before the pickup window. If there is no dock, tell us at booking and we will send a truck with a liftgate." },
    ],
  },
  {
    slug: "florida-freight-lanes-i4-i95-i75",
    title: "Florida's Same-Day Freight Corridors: I-4, I-95 and I-75",
    description: "How Florida's three main interstates shape same-day trucking, typical transit windows between major metros, and how to plan a pickup around them.",
    date: "2026-07-08", readMins: 4, image: "/images/hero-dry-van.webp", imageAlt: "Semi truck on an open interstate", category: "Florida Freight",
    keywords: ["florida freight lanes", "orlando to miami freight", "tampa to jacksonville trucking"],
    body: [
      { p: "Almost every same-day load in Florida moves along one of three interstates. Understanding them helps you set realistic delivery windows and choose a pickup time that avoids the worst traffic." },
      { h2: "I-4: Tampa to Orlando to Daytona" },
      { p: "The state's busiest freight corridor. Tampa to Orlando is roughly 85 miles and 1.5 to 2 hours outside of peak. Book morning pickups before 9 AM or midday after 10 AM to avoid the commuter crush through Orlando." },
      { h2: "I-95: Jacksonville to Miami" },
      { p: "About 345 miles end to end, 5 to 6 hours for a truck. Jacksonville to Orlando (via I-4) and West Palm to Miami are the highest-volume same-day segments. Afternoon congestion from Fort Lauderdale south adds 30 to 60 minutes." },
      { h2: "I-75: Tampa to Naples and north to Georgia" },
      { p: "Tampa to Fort Myers runs about 2 hours; Tampa to Gainesville and Ocala about 2 to 2.5 hours. I-75 also carries our regional lanes into Georgia and the Southeast." },
      { h2: "Planning a same-day run" },
      { ul: ["Book by noon so the truck can be positioned before afternoon traffic.", "Give a delivery window rather than a single time; we will hit it.", "For cross-state moves (Miami to Pensacola, 675 miles) ask about next-morning delivery instead."] },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
