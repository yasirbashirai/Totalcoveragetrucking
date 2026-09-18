import type { ServiceIcon } from "@/data/services";

type P = { className?: string };
const S = ({ className = "", children, ...rest }: P & { children: React.ReactNode } & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>{children}</svg>
);

export const Arrow = (p: P) => <S {...p}><path d="M5 12h14M13 6l6 6-6 6" /></S>;
export const Chevron = (p: P) => <S {...p}><path d="m6 9 6 6 6-6" /></S>;
export const Phone = (p: P) => <S {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></S>;
export const Mail = (p: P) => <S {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></S>;
export const Clock = (p: P) => <S {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></S>;
export const Pin = (p: P) => <S {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></S>;
export const Shield = (p: P) => <S {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></S>;
export const Check = (p: P) => <S {...p}><path d="M20 6 9 17l-5-5" /></S>;
export const Menu = (p: P) => <S {...p}><path d="M4 6h16M4 12h16M4 18h16" /></S>;
export const X = (p: P) => <S {...p}><path d="M18 6 6 18M6 6l12 12" /></S>;
export const Star = (p: P) => <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.5 6 20.8l1.3-6.7-5-4.6 6.8-.8z" /></svg>;
export const Truck = (p: P) => <S {...p}><path d="M1 7h12v10H1zM13 10h5l4 4v3h-9z" /><circle cx="5" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></S>;
export const Route = (p: P) => <S {...p}><circle cx="6" cy="19" r="3" /><circle cx="18" cy="5" r="3" /><path d="M8.5 17.5 15.5 6.5" /></S>;
export const Users = (p: P) => <S {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></S>;
export const FileText = (p: P) => <S {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></S>;
export const Bolt = (p: P) => <S {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></S>;
export const Dollar = (p: P) => <S {...p}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></S>;
export const Facebook = (p: P) => <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.3H7.4V14h2.8v8z" /></svg>;
export const Instagram = (p: P) => <S {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></S>;
export const LinkedIn = (p: P) => <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden="true"><path d="M6.9 21H3.3V9h3.6zM5.1 7.4A2.1 2.1 0 1 1 5.1 3a2.1 2.1 0 0 1 0 4.4zM21 21h-3.6v-5.8c0-1.4 0-3.2-1.9-3.2s-2.2 1.5-2.2 3.1V21H9.7V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.3 2.4 4.3 5.5z" /></svg>;

/** Service pictograms: flat, currentColor, 64x40 viewBox. */
const V: Record<ServiceIcon, React.ReactNode> = {
  bolt: <path d="M36 2 14 24h14l-4 14 22-22H32z" fill="currentColor" />,
  van: (<><path d="M4 10c0-2 1-3 3-3h24l10 8 12 2c2 .4 3 2 3 4v8H4z" fill="currentColor" /><path d="M32 10v7h12l-8-7z" fill="#fff" opacity=".9" /><circle cx="15" cy="30" r="5" fill="currentColor" /><circle cx="47" cy="30" r="5" fill="currentColor" /><circle cx="15" cy="30" r="2" fill="#fff" /><circle cx="47" cy="30" r="2" fill="#fff" /></>),
  box: (<><path d="M2 6h36v22H2z" fill="currentColor" /><path d="M38 12h12l10 8v8H38z" fill="currentColor" /><path d="M42 15v5h12l-6-5z" fill="#fff" opacity=".9" /><circle cx="12" cy="30" r="5" fill="currentColor" /><circle cx="50" cy="30" r="5" fill="currentColor" /><circle cx="12" cy="30" r="2" fill="#fff" /><circle cx="50" cy="30" r="2" fill="#fff" /></>),
  flatbed: (<><path d="M2 22h40v5H2z" fill="currentColor" /><path d="M42 8h10l10 8v11H42z" fill="currentColor" /><path d="M45 11v5h12l-5-5z" fill="#fff" opacity=".9" /><path d="M8 12h12v10H8zM22 16h14v6H22z" fill="currentColor" opacity=".55" /><circle cx="10" cy="31" r="5" fill="currentColor" /><circle cx="24" cy="31" r="5" fill="currentColor" /><circle cx="52" cy="31" r="5" fill="currentColor" /><circle cx="10" cy="31" r="2" fill="#fff" /><circle cx="24" cy="31" r="2" fill="#fff" /><circle cx="52" cy="31" r="2" fill="#fff" /></>),
  dryvan: (<><path d="M2 4h40v24H2z" fill="currentColor" /><path d="M42 12h10l10 8v8H42z" fill="currentColor" /><path d="M45 15v5h12l-5-5z" fill="#fff" opacity=".9" /><path d="M6 8h32M6 12h32M6 16h32M6 20h32M6 24h32" stroke="#fff" strokeWidth="1" opacity=".35" /><circle cx="12" cy="30" r="5" fill="currentColor" /><circle cx="24" cy="30" r="5" fill="currentColor" /><circle cx="52" cy="30" r="5" fill="currentColor" /><circle cx="12" cy="30" r="2" fill="#fff" /><circle cx="24" cy="30" r="2" fill="#fff" /><circle cx="52" cy="30" r="2" fill="#fff" /></>),
  contract: (<><rect x="8" y="4" width="34" height="32" rx="3" fill="currentColor" /><path d="M14 12h22M14 18h22M14 24h14" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><circle cx="50" cy="28" r="10" fill="currentColor" /><path d="m45 28 3.5 3.5L55 25" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>),
  distribution: (<><path d="M4 30h16v8H4zM24 30h16v8H24zM44 30h16v8H44z" fill="currentColor" /><path d="M24 4h16v14H24z" fill="currentColor" /><path d="M32 18v6M12 30v-6h40v6" stroke="currentColor" strokeWidth="3" fill="none" /></>),
};
export const ServicePictogram = ({ name, className = "" }: { name: ServiceIcon; className?: string }) => (
  <svg viewBox="0 0 64 40" className={className} aria-hidden="true">{V[name]}</svg>
);
