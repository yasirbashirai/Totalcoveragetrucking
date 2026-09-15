import Link from "next/link";
import { Container } from "@/components/Container";
import { Arrow } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="hero-bg relative overflow-hidden py-28 text-white">
      <div className="road-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative max-w-2xl text-center">
        <p className="stat text-8xl text-orange-300">404</p>
        <h1 className="display mt-2 text-4xl sm:text-5xl">Wrong exit</h1>
        <p className="mt-4 text-white/75">That page is not on our route map. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-orange px-6 py-3">Home</Link>
          <Link href="/services/" className="btn-ghost px-6 py-3">Services</Link>
          <Link href="/get-a-quote/" className="btn-ghost px-6 py-3">Get a Quote <Arrow className="h-4 w-4" /></Link>
        </div>
      </Container>
    </section>
  );
}
