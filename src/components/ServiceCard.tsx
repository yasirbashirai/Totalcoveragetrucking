import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { Arrow, ServicePictogram } from "./Icons";

export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  return (
    <Link href={`/${s.slug}/`} className="card card-hover reveal-up group flex flex-col overflow-hidden" style={{ ["--d" as string]: `${i * 80}ms` }}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
        <span className="absolute left-4 top-4 grid h-12 w-16 place-items-center rounded-lg bg-white/95 text-navy shadow"><ServicePictogram name={s.icon} className="h-8 w-12" /></span>
        <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-orange text-white opacity-0 transition group-hover:opacity-100"><Arrow className="h-5 w-5" /></span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="display-md text-xl text-navy group-hover:text-orange">{s.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate">{s.short}</p>
        <p className="mt-4 text-[13px] font-semibold text-orange">{s.specs[0].value}</p>
      </div>
    </Link>
  );
}
