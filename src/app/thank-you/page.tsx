import Link from "next/link";
import { site } from "@/data/site";
import { posts } from "@/data/blog";
import { Container } from "@/components/Container";
import { PhoneLink } from "@/components/PhoneLink";
import { Arrow, Check, Phone } from "@/components/Icons";

export const metadata = { title: "Thank You", robots: { index: false, follow: false } };

const COPY = {
  quote: { t: "Quote request received", s: "Dispatch is reviewing your lane. Expect a truck, a time and a flat rate within one business hour during dispatch hours." },
  driver: { t: "Application received", s: "Thanks for applying. We review every application within two business days and will call to set up a conversation." },
  contact: { t: "Message received", s: "We reply within one business hour during dispatch hours, and first thing the next morning otherwise." },
};

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ form?: string }> }) {
  const f = (await searchParams).form as keyof typeof COPY;
  const c = COPY[f] ?? COPY.contact;
  return (
    <section className="hero-bg relative overflow-hidden py-24 text-white">
      <div className="road-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative max-w-2xl text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full grad-orange shadow-[var(--shadow-orange)]"><Check className="h-10 w-10" /></span>
        <h1 className="display mt-6 text-5xl sm:text-6xl">{c.t}</h1>
        <p className="mt-4 text-lg text-white/80">{c.s}</p>
        <p className="mt-8 text-[14px] text-white/60">Urgent? Call dispatch directly.</p>
        <PhoneLink location="thank_you" className="mt-2 inline-flex items-center gap-2 font-display text-3xl font-semibold hover:text-orange-300"><Phone className="h-6 w-6 text-orange" />{site.phone}</PhoneLink>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-ghost px-6 py-3">Back to home</Link>
          <Link href={`/blog/${posts[0].slug}/`} className="btn-orange px-6 py-3">Read: {posts[0].category} <Arrow className="h-4 w-4" /></Link>
        </div>
      </Container>
    </section>
  );
}
