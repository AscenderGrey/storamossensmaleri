import Image from "next/image";
import Link from "next/link";
import { business, type Faq, type GalleryItem, type Service } from "@/lib/data";
import { ArrowIcon, DocIcon, MailIcon, PhoneIcon } from "./Icons";

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-wider text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-stone-600">{intro}</p>}
    </div>
  );
}

export function RotBadge() {
  return <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">ROT-avdrag</span>;
}

export function ServiceCards({ items }: { items: Service[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <li key={s.slug}>
          <Link href={`/tjanster/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-brand hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-stone-900">{s.name}</h3>
              {s.rot && <RotBadge />}
            </div>
            <p className="mt-2 flex-1 text-sm text-stone-600">{s.short}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              Läs mer <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function PhotoGrid({ items, cols = "sm:grid-cols-2 lg:grid-cols-3" }: { items: GalleryItem[]; cols?: string }) {
  return (
    <ul className={`grid gap-6 ${cols}`}>
      {items.map((p) => (
        <li key={p.src}>
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-sm text-stone-600">{p.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export function ContactTiles() {
  const tile = "flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center transition";
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <a href={business.phoneHref} className={`${tile} order-2 border border-stone-200 bg-white hover:border-brand md:order-1`}>
        <PhoneIcon className="h-7 w-7 text-brand" />
        <span className="text-sm font-semibold tracking-wide text-stone-500 uppercase">Ring oss</span>
        <span className="text-2xl font-bold text-stone-900 md:text-3xl">{business.phoneDisplay}</span>
      </a>
      <a href="#offert" className={`${tile} order-1 bg-brand text-white shadow-lg hover:bg-brand-dark md:order-2`}>
        <DocIcon className="h-7 w-7" />
        <span className="text-sm font-semibold tracking-wide uppercase">Kostnadsfri</span>
        <span className="text-2xl font-bold md:text-3xl">Få offert</span>
      </a>
      <a href={`mailto:${business.email}`} className={`${tile} order-3 border border-stone-200 bg-white hover:border-brand`}>
        <MailIcon className="h-7 w-7 text-brand" />
        <span className="text-sm font-semibold tracking-wide text-stone-500 uppercase">Maila oss</span>
        <span className="text-base font-bold break-all text-stone-900 md:text-lg">{business.email}</span>
      </a>
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-stone-900">
            {f.q}
            <span className="text-2xl text-brand transition group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 text-stone-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
