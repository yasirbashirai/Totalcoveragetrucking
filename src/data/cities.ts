/**
 * City landing pages for local SEO ("trucking company orlando", "same day freight tampa").
 * Each entry has unique geographic copy so pages are not thin duplicates.
 */
export type City = {
  slug: string;          // /trucking-{slug}/
  name: string;
  county: string;
  region: string;
  zipPrefixes: string[]; // 3-digit prefixes for the metro
  image: string;
  imageAlt: string;
  intro: string;
  local: string;         // what makes freight in this metro specific
  industries: string[];
  areas: string[];       // suburbs / districts served
  lanes: { to: string; time: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const cities: City[] = [
  {
    slug: "jacksonville", name: "Jacksonville", county: "Duval County", region: "Northeast Florida", zipPrefixes: ["320", "322"],
    image: "/images/box-truck-flatbed-highway.webp", imageAlt: "Box truck and flatbed moving freight on I-95 near Jacksonville",
    intro: "Jacksonville is Florida's largest city by land area and its busiest logistics gateway: JAXPORT, three interstates and rail service to the whole Southeast. We run cargo van, box truck and flatbed freight across Duval County and out along I-95, I-10 and I-295 every business day.",
    local: "Port drayage overflow, distribution-center replenishment on the Westside and Northside industrial corridors, and time-critical parts to the Southside business parks make up most of our Jacksonville work. With I-10 and I-95 meeting here, Jacksonville is also our staging point for next-day lanes into Georgia and the Carolinas.",
    industries: ["Port and warehouse distribution", "Manufacturing and aerospace parts", "Building materials and construction", "Medical and healthcare supply", "Retail replenishment"],
    areas: ["Downtown", "Westside", "Northside", "Southside", "Orange Park", "Jacksonville Beach", "St. Augustine", "Fernandina Beach"],
    lanes: [{ to: "Orlando", time: "2.5 hrs" }, { to: "Tampa", time: "3 hrs" }, { to: "Tallahassee", time: "2.5 hrs" }, { to: "Savannah, GA", time: "2 hrs" }],
    faqs: [
      { q: "Do you pick up from JAXPORT terminals?", a: "We handle loose and palletized freight from port-adjacent warehouses and transload facilities. Container drayage itself is not a service we offer today." },
      { q: "Can you deliver same day from Jacksonville to South Florida?", a: "Yes. Jacksonville to Miami is about 5.5 hours. Book before noon ET and the load delivers the same business day." },
    ],
    keywords: ["trucking company jacksonville fl", "same day freight jacksonville", "box truck delivery jacksonville", "flatbed hauling jacksonville"],
  },
  {
    slug: "orlando", name: "Orlando", county: "Orange County", region: "Central Florida", zipPrefixes: ["327", "328", "347"],
    image: "/images/box-truck-city.webp", imageAlt: "Box truck delivering freight in Orlando",
    intro: "Orlando sits at the crossroads of I-4 and the Florida Turnpike, which makes it the most central dispatch point in the state. From here our trucks reach Tampa in 90 minutes, Jacksonville in two and a half hours and Miami before the end of the shift.",
    local: "Convention and trade-show freight to the Orange County Convention Center, hospitality and food-service replenishment around the tourism corridor, and manufacturing deliveries into the Lake Nona, Sanford and Apopka industrial areas keep our Orlando units busy. Liftgate box trucks handle most of it.",
    industries: ["Trade show and event freight", "Hospitality and food service", "Aerospace and simulation manufacturing", "Construction and roofing", "E-commerce fulfillment"],
    areas: ["Downtown Orlando", "Kissimmee", "Sanford", "Apopka", "Winter Park", "Lake Nona", "Ocoee", "Altamonte Springs"],
    lanes: [{ to: "Tampa", time: "1.5 hrs" }, { to: "Jacksonville", time: "2.5 hrs" }, { to: "Miami", time: "3.5 hrs" }, { to: "Fort Myers", time: "2.5 hrs" }],
    faqs: [
      { q: "Do you deliver to the Orange County Convention Center?", a: "Yes. We move booth freight, displays and equipment to and from the OCCC and area hotels, with drivers who know the marshalling procedures." },
      { q: "How fast can you get a truck to an Orlando pickup?", a: "During dispatch hours a cargo van or box truck is typically on site within 60 to 90 minutes of confirmation." },
    ],
    keywords: ["trucking company orlando", "same day delivery orlando freight", "box truck freight orlando", "trade show freight orlando"],
  },
  {
    slug: "tampa", name: "Tampa", county: "Hillsborough County", region: "Tampa Bay", zipPrefixes: ["335", "336", "337", "346"],
    image: "/images/box-trucks-dock.webp", imageAlt: "Box trucks loading at a Tampa distribution dock",
    intro: "Tampa Bay is Florida's Gulf-coast freight hub: Port Tampa Bay, the I-4 corridor to Orlando and I-75 running north to Ocala and south to Fort Myers. We serve Tampa, St. Petersburg, Clearwater and the Lakeland distribution cluster with same-day cargo van, box truck and flatbed capacity.",
    local: "The I-4 corridor between Tampa and Lakeland holds one of the densest concentrations of distribution centers in the Southeast. A large share of our Tampa work is multi-stop box-truck routes out of those DCs, plus flatbed loads of block, roofing and steel to job sites across Hillsborough, Pinellas and Pasco.",
    industries: ["Distribution and 3PL overflow", "Building materials", "Healthcare and life sciences", "Food and beverage", "Marine and industrial equipment"],
    areas: ["Downtown Tampa", "St. Petersburg", "Clearwater", "Brandon", "Plant City", "Lakeland", "Wesley Chapel", "Largo"],
    lanes: [{ to: "Orlando", time: "1.5 hrs" }, { to: "Fort Myers", time: "2 hrs" }, { to: "Jacksonville", time: "3 hrs" }, { to: "Miami", time: "4 hrs" }],
    faqs: [
      { q: "Do you run recurring routes out of the Lakeland distribution centers?", a: "Yes. Dedicated box-truck routes from Lakeland and Plant City DCs to stores across the Bay area are one of our core lanes. See Dedicated & Contract Trucking." },
      { q: "Can a flatbed deliver to a job site in Pinellas with no forklift?", a: "Tell us at booking. We coordinate a forklift or Moffett at the site, or bring freight that can be hand-offloaded." },
    ],
    keywords: ["trucking company tampa", "same day freight tampa", "ltl delivery tampa bay", "flatbed trucking tampa"],
  },
  {
    slug: "miami", name: "Miami", county: "Miami-Dade County", region: "South Florida", zipPrefixes: ["330", "331", "332"],
    image: "/images/box-trucks-dock.webp", imageAlt: "Box trucks at a Miami-Dade distribution warehouse",
    intro: "Miami-Dade is the densest freight market in Florida: PortMiami, MIA air cargo, the Doral and Medley warehouse districts and thousands of receivers with tight delivery windows. Our cargo vans and liftgate box trucks are built for exactly that.",
    local: "Traffic and dock congestion define Miami freight. We schedule early-window pickups in Doral, Medley and Hialeah, run direct to the receiver, and rely on cargo vans for the downtown, Brickell and Miami Beach deliveries where a 26 ft truck cannot park.",
    industries: ["Import and export distribution", "Air cargo recovery and delivery", "Fashion, retail and consumer goods", "Medical and pharmaceutical", "Hospitality and food service"],
    areas: ["Doral", "Medley", "Hialeah", "Downtown / Brickell", "Miami Beach", "Kendall", "Homestead", "Aventura"],
    lanes: [{ to: "Fort Lauderdale", time: "45 min" }, { to: "West Palm Beach", time: "1.5 hrs" }, { to: "Fort Myers", time: "2.5 hrs" }, { to: "Orlando", time: "3.5 hrs" }],
    faqs: [
      { q: "Can you recover freight from MIA air cargo warehouses?", a: "Yes. Send the airway bill details and the warehouse. We collect from the cargo facilities and deliver direct to your receiver the same day." },
      { q: "Do you deliver into Miami Beach and downtown high-rises?", a: "Yes, usually with a cargo van. Tell us about loading-dock rules or elevator bookings when you request the quote." },
    ],
    keywords: ["trucking company miami", "same day delivery miami freight", "cargo van delivery miami", "box truck delivery miami"],
  },
  {
    slug: "fort-lauderdale", name: "Fort Lauderdale", county: "Broward County", region: "South Florida", zipPrefixes: ["333"],
    image: "/images/hero-dry-van.webp", imageAlt: "Semi truck on I-95 in Broward County",
    intro: "Broward County sits between Miami-Dade and Palm Beach on I-95, the Turnpike and I-595 to Port Everglades. Fort Lauderdale, Pompano Beach, Hollywood and Davie are all within an hour of each other, which makes Broward a natural multi-stop distribution market.",
    local: "Marine and yacht-industry parts, Port Everglades warehouse distribution and retail replenishment along US-1 and I-95 make up much of our Broward work. Liftgate box trucks are the workhorse here, with cargo vans covering urgent runs to Hollywood and Pompano.",
    industries: ["Marine and yacht industry", "Port Everglades distribution", "Retail and consumer goods", "Aviation parts", "Construction materials"],
    areas: ["Downtown Fort Lauderdale", "Pompano Beach", "Hollywood", "Davie", "Plantation", "Coral Springs", "Deerfield Beach", "Sunrise"],
    lanes: [{ to: "Miami", time: "45 min" }, { to: "West Palm Beach", time: "1 hr" }, { to: "Fort Myers", time: "2 hrs" }, { to: "Orlando", time: "3 hrs" }],
    faqs: [
      { q: "Can you deliver to a marina or shipyard?", a: "Yes. We deliver marine parts and equipment to boatyards along the New River, Dania Beach and Port Everglades, with driver-assisted offload." },
      { q: "Do you cover the whole Tri-County area on one route?", a: "Yes. A single box truck can run Palm Beach, Broward and Miami-Dade stops in one day; we plan the sequence with you." },
    ],
    keywords: ["trucking company fort lauderdale", "same day freight broward county", "box truck delivery fort lauderdale", "liftgate delivery broward"],
  },
  {
    slug: "west-palm-beach", name: "West Palm Beach", county: "Palm Beach County", region: "South Florida", zipPrefixes: ["334"],
    image: "/images/flatbed-lumber.webp", imageAlt: "Flatbed hauling building materials near West Palm Beach",
    intro: "Palm Beach County stretches from Boca Raton to Jupiter and west to Belle Glade. West Palm Beach is the northern anchor of the South Florida market and our jump-off point for lanes up the Treasure Coast to Fort Pierce and Vero Beach.",
    local: "Construction and landscaping materials to the county's constant building activity, distribution to Boca and Delray retail, and agricultural and packaging freight from the Glades keep our West Palm units moving. Flatbeds are in high demand here.",
    industries: ["Construction and landscaping supply", "Retail and luxury goods", "Agriculture and packaging", "Aviation and aerospace (Jupiter)", "Healthcare"],
    areas: ["Downtown West Palm Beach", "Boca Raton", "Delray Beach", "Boynton Beach", "Jupiter", "Wellington", "Riviera Beach", "Belle Glade"],
    lanes: [{ to: "Fort Lauderdale", time: "1 hr" }, { to: "Miami", time: "1.5 hrs" }, { to: "Fort Pierce", time: "1 hr" }, { to: "Orlando", time: "2.5 hrs" }],
    faqs: [
      { q: "Do you serve the Treasure Coast?", a: "Yes. Stuart, Port St. Lucie, Fort Pierce and Vero Beach are covered same day from our Palm Beach units." },
      { q: "Can you tarp a flatbed load for a Wellington job site?", a: "Yes. Ask for tarping at booking and the driver arrives with tarps and securement gear." },
    ],
    keywords: ["trucking company west palm beach", "flatbed hauling palm beach county", "same day freight west palm beach", "box truck delivery boca raton"],
  },
  {
    slug: "fort-myers", name: "Fort Myers", county: "Lee County", region: "Southwest Florida", zipPrefixes: ["339", "341"],
    image: "/images/flatbed.webp", imageAlt: "Flatbed truck ready for a Southwest Florida job site",
    intro: "Southwest Florida is one of the fastest-growing regions in the country, and its freight follows the building boom: block, trusses, roofing and equipment to Cape Coral, Lehigh Acres, Naples and Punta Gorda. We run flatbed and box-truck capacity along I-75 and US-41 every day.",
    local: "Job-site deliveries with no dock, storm-recovery materials and multi-stop retail runs between Fort Myers and Naples are the bulk of our Lee and Collier County work. Alligator Alley (I-75) also gives us a direct three-hour lane across to Fort Lauderdale and Miami.",
    industries: ["Residential and commercial construction", "Roofing and storm recovery", "Retail and grocery", "Marine and boat manufacturing", "Healthcare"],
    areas: ["Fort Myers", "Cape Coral", "Lehigh Acres", "Bonita Springs", "Naples", "Estero", "Punta Gorda", "Port Charlotte"],
    lanes: [{ to: "Tampa", time: "2 hrs" }, { to: "Naples", time: "45 min" }, { to: "Miami", time: "2.5 hrs" }, { to: "Orlando", time: "2.5 hrs" }],
    faqs: [
      { q: "Can you deliver building materials to a residential lot with no address marker?", a: "Yes. Send GPS coordinates or the lot and block, and the driver will call the site contact on approach." },
      { q: "Do you cover Naples and Marco Island?", a: "Yes. Collier County is served same day from Fort Myers, including Marco Island with a cargo van or box truck." },
    ],
    keywords: ["trucking company fort myers", "flatbed delivery cape coral", "building materials delivery naples fl", "same day freight fort myers"],
  },
  {
    slug: "tallahassee", name: "Tallahassee", county: "Leon County", region: "North Florida / Panhandle", zipPrefixes: ["323"],
    image: "/images/box-truck-facility.webp", imageAlt: "Box truck delivering near Tallahassee",
    intro: "Tallahassee anchors the Panhandle on I-10, halfway between Jacksonville and Pensacola and a short run from Thomasville and Valdosta in Georgia. State government, two universities and a growing medical sector generate steady freight that national carriers often serve slowly.",
    local: "Office and IT equipment for state agencies, university and hospital supply, and building materials out to Crawfordville, Quincy and Monticello are typical Tallahassee loads. I-10 gives us same-day reach to Panama City and Pensacola and next-day lanes into South Georgia and Alabama.",
    industries: ["Government and institutional", "Higher education", "Healthcare", "Construction", "Agriculture and forestry products"],
    areas: ["Downtown Tallahassee", "Crawfordville", "Quincy", "Monticello", "Havana", "Panama City", "Thomasville, GA", "Valdosta, GA"],
    lanes: [{ to: "Jacksonville", time: "2.5 hrs" }, { to: "Panama City", time: "2 hrs" }, { to: "Pensacola", time: "3 hrs" }, { to: "Valdosta, GA", time: "1.5 hrs" }],
    faqs: [
      { q: "Do you deliver into state office buildings?", a: "Yes. We handle inside delivery with appointment scheduling and driver ID as required by the building." },
      { q: "Is the Panhandle covered same day?", a: "Yes. Panama City, Destin and Pensacola are same-day lanes from Tallahassee when booked by noon ET." },
    ],
    keywords: ["trucking company tallahassee", "same day freight tallahassee", "panhandle freight delivery", "box truck delivery tallahassee"],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
