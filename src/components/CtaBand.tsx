import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "./Container";
import { Arrow, Phone } from "./Icons";
import { PhoneLink } from "./PhoneLink";

/** Closing conversion band used at the bottom of every major page. */
export function CtaBand({ title = "Need it moved today?", sub = "Send the lane and we will answer with a truck, a time and a price within one business hour." }: { title?: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden grad-orange text-white">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-navy/20 blur-3xl" aria-hidden="true" />
      <Container className="relative flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
        <div className="reveal-left max-w-2xl">
          <h2 className="display text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-3 text-lg text-white/90">{sub}</p>
        </div>
        <div className="reveal-right flex flex-wrap gap-3">
          <Link href="/get-a-quote/" className="btn-navy display-md px-7 py-4 text-lg shadow-lg">Get a Quote <Arrow className="h-5 w-5" /></Link>
          <PhoneLink location="cta_band" className="btn-ghost display-md px-7 py-4 text-lg"><Phone className="h-5 w-5" /> {site.phone}</PhoneLink>
        </div>
      </Container>
    </section>
  );
}
