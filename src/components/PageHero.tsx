import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Chevron } from "./Icons";

type Crumb = { name: string; path: string };

/** Dark inner-page hero with optional photo, breadcrumbs and actions. */
export function PageHero({ eyebrow, title, sub, image, imageAlt, crumbs, children }: { eyebrow?: string; title: string; sub?: string; image?: string; imageAlt?: string; crumbs?: Crumb[]; children?: React.ReactNode }) {
  return (
    <section className="hero-bg relative overflow-hidden text-white">
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={image} alt={imageAlt ?? ""} fill priority sizes="100vw" className="kenburns object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/30" />
        </div>
      )}
      <div className="road-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative py-16 sm:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-[13px] text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-1">
                <Chevron className="h-3.5 w-3.5 -rotate-90 opacity-60" />
                {i === crumbs.length - 1 ? <span className="text-white/90">{c.name}</span> : <Link href={c.path} className="hover:text-white">{c.name}</Link>}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow reveal mb-3 text-orange-300">{eyebrow}</p>}
          <h1 className="display reveal text-5xl sm:text-6xl lg:text-7xl" style={{ ["--d" as string]: "80ms" }}>{title}</h1>
          {sub && <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl" style={{ ["--d" as string]: "160ms" }}>{sub}</p>}
          {children && <div className="reveal mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "240ms" }}>{children}</div>}
        </div>
      </Container>
      <div className="stripe h-2 opacity-90" aria-hidden="true" />
    </section>
  );
}
