import Image from "next/image";
import Link from "next/link";
import { areas, business, services } from "@/lib/data";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-stone-950 pb-24 pt-16 text-stone-300 md:pb-12">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image src="/img/brand/logo_vit.png" alt={business.shortName} width={518} height={220} className="h-12 w-auto" />
          <p className="mt-4 text-sm">{business.tagline}</p>
        </div>
        <address className="not-italic text-sm leading-7">
          <p className="font-semibold text-white">{business.name}</p>
          <p>{business.street}</p>
          <p>{business.postalCode} {business.city}</p>
          <p><a href={business.phoneHref} className="hover:text-white">{business.phoneDisplay}</a></p>
          <p><a href={`mailto:${business.email}`} className="hover:text-white">{business.email}</a></p>
          <a href={business.instagram} className="mt-2 inline-flex items-center gap-2 hover:text-white" rel="noopener" target="_blank">
            <InstagramIcon className="h-4 w-4" /> Instagram
          </a>
        </address>
        <div className="text-sm leading-7">
          <p className="font-semibold text-white">Tjänster</p>
          {services.map((s) => (
            <p key={s.slug}><Link href={`/tjanster/${s.slug}`} className="hover:text-white">{s.name}</Link></p>
          ))}
        </div>
        <div className="text-sm leading-7">
          <p className="font-semibold text-white">Här arbetar vi</p>
          <p>{areas.join(" · ")} och övriga Stockholm.</p>
          <p className="mt-4"><Link href="/integritetspolicy" className="hover:text-white">Integritetspolicy</Link></p>
        </div>
      </div>
      <p className="container-x mt-12 border-t border-stone-800 pt-6 text-xs text-stone-400">
        © {new Date().getFullYear()} {business.name}
      </p>
    </footer>
  );
}
