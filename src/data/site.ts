/**
 * Single source of truth for business facts.
 * Every phone number, email, credential and link on the site reads from here.
 * Items marked TODO are placeholders from the intake form; replace before launch.
 */
export const site = {
  name: "Total Coverage Trucking",
  legalName: "Total Coverage Trucking, LLC",
  tagline: "Total Coverage. Every Mile.",
  url: "https://totalcoveragetrucking.com",
  category: "Asset-based trucking and freight carrier",
  phone: "(123) 456-7890",           // TODO: real business line (intake form: 1234567890)
  phoneHref: "tel:+11234567890",
  email: "info@totalcoveragetrucking.com", // TODO: confirm mailbox
  hours: "Mon–Fri, 9:00 AM–6:00 PM ET",
  hoursShort: "Mon–Fri 9am–6pm",
  hoursSchema: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }],
  /** Business runs remote / dispatch-first. Only the state is shown publicly. */
  address: { city: "", state: "Florida", stateCode: "FL", display: "Florida, USA (statewide dispatch)" },
  usdot: "",   // TODO: add USDOT number to display in header + footer
  mc: "",      // TODO: add MC number
  social: {
    facebook: "",   // TODO
    instagram: "",  // TODO
    linkedin: "",   // TODO
  },
  /** Honest, verifiable trust points. No inflated claims for an early-stage carrier. */
  trust: [
    { label: "Asset-Based Carrier", sub: "Our trucks, our drivers" },
    { label: "CDL-Licensed Drivers", sub: "Vetted and compliant" },
    { label: "Same-Day Florida Delivery", sub: "Dispatch Mon–Fri 9–6" },
    { label: "One Point of Contact", sub: "Quote to delivery" },
  ],
  /** Equipment shown in the logo: cargo van, box truck, flatbed. */
  equipment: [
    { key: "van", name: "Cargo / Sprinter Van", capacity: "Up to 3,000 lbs · 2–3 pallets", best: "Small, urgent, time-critical freight" },
    { key: "box", name: "Box Truck (26 ft)", capacity: "Up to 10,000 lbs · 10–12 pallets", best: "LTL, retail, final-mile distribution" },
    { key: "flatbed", name: "Flatbed", capacity: "Up to 48,000 lbs · 48–53 ft", best: "Building materials, equipment, oversized" },
  ],
  floridaMarkets: ["Jacksonville", "Orlando", "Tampa", "Miami", "Fort Lauderdale", "West Palm Beach", "Fort Myers", "Sarasota", "Daytona Beach", "Gainesville", "Tallahassee", "Pensacola", "Lakeland", "Ocala"],
  regionalStates: ["Georgia", "Alabama", "South Carolina", "North Carolina", "Tennessee"],
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
};
export type Site = typeof site;
