import type { Metadata } from "next";
import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import { PhoneIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { ContactTiles, FaqList, PhotoGrid, SectionHead, ServiceCards } from "@/components/Sections";
import { beforeAfters, business, clients, faqs, filippaPhoto, galleryGroups, hero, services } from "@/lib/data";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const steps = [
  { t: "Kontakt", d: "Ring, maila eller skicka en offertförfrågan. Vi återkommer snabbt." },
  { t: "Besiktning & offert", d: "Vi kommer ut, tittar på jobbet och ger en kostnadsfri offert." },
  { t: "Målning", d: "Samma team från start till slut, med noggrant förarbete och skydd." },
  { t: "Slutbesiktning", d: "Vi går igenom resultatet tillsammans – du ska vara helt nöjd." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="container-x grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-wider text-brand uppercase">{business.tagline}</p>
          <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-stone-900 md:text-5xl xl:text-6xl">
            Målare i Bromma & Stockholm – hantverk i tredje generationen sedan 1975
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-600">
            Invändig målning, tapetsering, fasad och totalrenoveringar för hem, bostadsrättsföreningar och företag. Familjeföretag från Abrahamsberg med miljömärkta färger.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#offert" className="btn-primary px-7 py-4 text-base">Få gratis offert</a>
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-7 py-4 font-semibold text-stone-900 hover:border-stone-900">
              <PhoneIcon className="h-4 w-4 text-brand" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-stone-100">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Logo strip – text wordmarks until logo files + permission exist */}
      <section aria-label="Kunder" className="border-y border-stone-200 bg-stone-50">
        <div className="container-x flex flex-col items-center gap-4 py-8 md:flex-row md:justify-center md:gap-12">
          <p className="text-sm font-medium text-stone-500">Förtroende från</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clients.map((c) => (
              <li key={c.name} title={c.note} className="text-xl font-bold tracking-tight text-stone-500">
                {c.logo ? <Image src={c.logo} alt={c.name} width={140} height={40} className="h-8 w-auto opacity-60 grayscale" /> : c.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before / after */}
      <section id="projekt" className="section container-x">
        <SectionHead eyebrow="Före & efter" title="Totalrenovering av villa i Bromma" intro="Dra i reglaget och se skillnaden. Samma hus, rum för rum – före och efter spackling, målning och golvslipning." />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {beforeAfters.map((b) => <BeforeAfter key={b.id} item={b} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />)}
        </div>
      </section>

      {/* Previous work */}
      <section className="section bg-stone-50">
        <div className="container-x">
          <SectionHead eyebrow="Tidigare uppdrag" title="Hem, fasader och lokaler" />
          <div className="mt-12 space-y-16">
            {galleryGroups.map((grp) => (
              <div key={grp.title}>
                <h3 className="mb-6 text-xl font-semibold text-stone-900">{grp.title}</h3>
                <PhotoGrid items={grp.items} cols="grid-cols-2 lg:grid-cols-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjanster" className="section container-x">
        <SectionHead eyebrow="Tjänster" title="Allt inom måleri – stort som smått" intro="Som privatperson kan du få ROT-avdrag på arbetskostnaden." />
        <div className="mt-12"><ServiceCards items={services} /></div>
      </section>

      {/* Möt Filippa */}
      <section id="om-oss" className="section bg-stone-50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-stone-200">
            <Image src={filippaPhoto.src} alt={filippaPhoto.alt} fill sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHead eyebrow="Möt Filippa" title="Tredje generationen målare – sedan 1975" />
            <div className="mt-6 space-y-4 text-lg text-stone-600">
              <p>Stora Mossens Måleri är ett familjeföretag som har målat hem och lokaler sedan 1975. I dag drivs företaget av {business.founder} – tredje generationen i yrket.</p>
              <p>Det betyder personligt ansvar för varje jobb, samma team från första penseldrag till slutbesiktning och ärliga priser utan överraskningar.</p>
            </div>
            {/* TODO: confirm with Filippa – quote is from the current website; OK to attribute to her? */}
            <blockquote className="mt-8 border-l-4 border-brand pl-6">
              <p className="text-xl font-medium text-stone-900 italic">”Slutresultatet och att du är helt nöjd är det vi älskar.”</p>
              <footer className="mt-2 font-semibold text-stone-700">– {business.founder}</footer>
            </blockquote>
            <div id="miljo" className="mt-10 grid grid-cols-3 gap-4 border-t border-stone-200 pt-8">
              {business.values.map((v) => <p key={v} className="font-semibold text-stone-900">{v}</p>)}
              <p className="col-span-3 text-sm text-stone-600">Vi använder miljömärkta färger och produkter som är skonsamma för både människor och miljö, och arbetar aktivt för att minska avfall.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section container-x">
        <SectionHead eyebrow="Så går det till" title="Fyra steg till färdigt resultat" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-stone-200 p-6">
              <span className="text-sm font-bold text-brand">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">{s.t}</h3>
              <p className="mt-2 text-sm text-stone-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact + form */}
      <section id="kontakt" className="section bg-stone-50">
        <div className="container-x">
          <SectionHead eyebrow="Kontakt" title="Hur vill du höra av dig?" />
          <div className="mt-10"><ContactTiles /></div>
          <div id="offert" className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-stone-900">Begär en kostnadsfri offert</h2>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container-x max-w-4xl">
        <SectionHead eyebrow="Vanliga frågor" title="Bra att veta" />
        <div className="mt-10"><FaqList faqs={faqs} /></div>
      </section>
    </>
  );
}
