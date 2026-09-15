/**
 * Florida ZIP prefix check for the quote form's live "lane check".
 * Florida ZIPs run 32003–34997 (3-digit prefixes 320–349).
 */
export const isFloridaZip = (zip: string) => {
  const z = zip.trim().slice(0, 5);
  if (!/^\d{5}$/.test(z)) return null;
  const p = Number(z.slice(0, 3));
  return p >= 320 && p <= 349;
};

/** Southeast regional prefixes (GA 300–319/398–399, AL 350–369, SC 290–299, NC 270–289, TN 370–385). */
export const isSoutheastZip = (zip: string) => {
  const z = zip.trim().slice(0, 5);
  if (!/^\d{5}$/.test(z)) return null;
  const p = Number(z.slice(0, 3));
  return (p >= 270 && p <= 319) || (p >= 350 && p <= 385) || p === 398 || p === 399;
};

export type LaneKind = "same-day" | "regional" | "outside" | null;
export function laneKind(pickup: string, delivery: string): LaneKind {
  const a = isFloridaZip(pickup), b = isFloridaZip(delivery);
  if (a === null || b === null) return null;
  if (a && b) return "same-day";
  const ra = a || isSoutheastZip(pickup), rb = b || isSoutheastZip(delivery);
  if (ra && rb) return "regional";
  return "outside";
}
