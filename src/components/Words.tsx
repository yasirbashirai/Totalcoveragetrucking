/** Splits a headline into staggered words for the hero entrance. className lands on the inner span so gradient text-clip works. */
export function Words({ text, start = 0, step = 70, className = "" }: { text: string; start?: number; step?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="word"><span className={className} style={{ ["--d" as string]: `${start + i * step}ms` }}>{w}</span></span>
      ))}
    </>
  );
}
