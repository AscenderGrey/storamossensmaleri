import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/data";
import { PhoneIcon } from "./Icons";

const nav = [
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/#projekt", label: "Projekt" },
  { href: "/#om-oss", label: "Om oss" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label={`${business.shortName} – startsida`} className="shrink-0">
          <Image src="/img/brand/logo_svart.png" alt={business.shortName} width={518} height={220} priority className="h-10 w-auto md:h-12" />
        </Link>
        <nav aria-label="Huvudmeny" className="hidden items-center gap-8 text-[15px] font-medium text-stone-700 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-5">
          <a href={business.phoneHref} className="hidden items-center gap-2 font-semibold text-stone-900 hover:text-brand sm:flex">
            <PhoneIcon className="h-4 w-4 text-brand" /> {business.phoneDisplay}
          </a>
          <Link href="/offert" className="btn-primary px-4 py-2.5 text-sm md:px-5">Få offert</Link>
        </div>
      </div>
    </header>
  );
}
