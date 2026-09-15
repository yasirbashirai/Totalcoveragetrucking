export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
export function SectionHead({ eyebrow, title, sub, light = false, center = true, className = "" }: { eyebrow?: string; title: string; sub?: string; light?: boolean; center?: boolean; className?: string }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? "text-orange-300" : "text-orange"}`}>{eyebrow}</p>}
      <h2 className={`display text-4xl sm:text-5xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-slate"}`}>{sub}</p>}
    </div>
  );
}
