/**
 * Stylised Florida coverage map. Hubs pulse, lanes draw in on load.
 * Coordinates are approximate on a 400x360 canvas; this is a diagram, not GIS.
 */
const HUBS: { n: string; x: number; y: number; big?: boolean }[] = [
  { n: "Pensacola", x: 28, y: 64 }, { n: "Tallahassee", x: 150, y: 60 }, { n: "Jacksonville", x: 300, y: 70, big: true },
  { n: "Gainesville", x: 262, y: 112 }, { n: "Ocala", x: 270, y: 142 }, { n: "Daytona Beach", x: 326, y: 126 },
  { n: "Orlando", x: 300, y: 178, big: true }, { n: "Tampa", x: 240, y: 198, big: true }, { n: "Lakeland", x: 270, y: 198 },
  { n: "Sarasota", x: 242, y: 234 }, { n: "Fort Myers", x: 262, y: 270 }, { n: "West Palm Beach", x: 352, y: 246 },
  { n: "Fort Lauderdale", x: 358, y: 280 }, { n: "Miami", x: 352, y: 312, big: true },
];
const OUTLINE = "M12 54 L214 50 L296 58 L312 72 L326 122 L346 182 L360 238 L366 288 L360 312 L336 336 L300 350 L296 332 L276 302 L256 262 L240 222 L236 190 L226 152 L192 122 L152 96 L112 86 L62 82 L12 70 Z";
const LANES = ["M300 70 L300 178 L352 312", "M28 64 L150 60 L300 70", "M240 198 L300 178 L326 126", "M240 198 L262 270 L352 312", "M300 178 L352 246"];

export function FloridaMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 360" className={className} role="img" aria-label="Map of Florida showing Total Coverage Trucking same-day service hubs">
      <defs>
        <linearGradient id="fl-fill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#143d80" /><stop offset="1" stopColor="#012355" /></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <path d={OUTLINE} fill="url(#fl-fill)" stroke="#ff6a2e" strokeWidth="1.5" strokeLinejoin="round" opacity="0.95" />
      <path d={OUTLINE} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinejoin="round" />
      {LANES.map((d, i) => <path key={i} d={d} className="route-line" fill="none" stroke="#ff4200" strokeWidth="2" strokeDasharray="1400" strokeLinecap="round" style={{ animationDelay: `${0.4 + i * 0.25}s` }} filter="url(#glow)" />)}
      {HUBS.map((h) => (
        <g key={h.n}>
          <circle cx={h.x} cy={h.y} r={h.big ? 9 : 6} fill="#ff4200" opacity="0.35" className="pulse-dot" />
          <circle cx={h.x} cy={h.y} r={h.big ? 4 : 2.8} fill="#fff" stroke="#ff4200" strokeWidth="1.5" />
          <text x={h.x + (h.x > 330 ? -8 : 8)} y={h.y + (h.big ? (h.n === "Miami" ? 16 : -9) : 4)} fontSize={h.big ? 11 : 9} fontWeight={h.big ? 700 : 500} fill="#fff" textAnchor={h.x > 330 ? "end" : "start"} style={{ fontFamily: "var(--font-sans)" }}>{h.n}</text>
        </g>
      ))}
    </svg>
  );
}
