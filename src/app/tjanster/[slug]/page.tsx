import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfter from "@/components/BeforeAfter";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { FaqList, PhotoGrid, RotBadge, SectionHead, ServiceCards } from "@/components/Sections";
import { business, services } from "@/lib/data";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} i Bromma & Stockholm`,
    description: s.metaDescription,
    alternates: { canonical: `/tjanster/${s.slug}` },
    openGraph: { title: `${s.name} i Bromma & Stockholm | ${business.shortName}`, description: s.metaDescription },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={breadcrumbSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />

      <section className="container-x py-10 md:py-16">
        <nav aria-label="Brödsmulor" className="text-sm text-stone-500">
          <Link href="/" className="hover:text-brand">Start</Link> / <Link href="/#tjanster" className="hover:text-brand">Tjänster</Link> / <span className="text-stone-700">{s.name}</span>
        </nav>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            {s.rot && <RotBadge />}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">{s.name} i Bromma & Stockholm</h1>
            <div className="mt-6 space-y-4 text-lg text-stone-600">{s.intro.map((p) => <p key={p}>{p}</p>)}</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#offert" className="btn-primary px-7 py-4">Få gratis offert</a>
              <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-7 py-4 font-semibold text-stone-900 hover:border-stone-900">
                <PhoneIcon className="h-4 w-4 text-brand" /> {business.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-stone-50 p-8">
            <h2 className="text-xl font-semibold text-stone-900">Det här ingår</h2>
            <ul className="mt-5 space-y-3">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-3 text-stone-700"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{i}</li>
              ))}
            </ul>
            <h2 className="mt-8 text-xl font-semibold text-stone-900">För vem?</h2>
            <p className="mt-3 text-stone-700">{s.forWhom}</p>
          </div>
        </div>
      </section>

      <section className="section bg-stone-50">
        <div className="container-x">
          <SectionHead eyebrow="Utfört arbete" title={`${s.name} – exempel från våra uppdrag`} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.beforeAfter && <BeforeAfter item={s.beforeAfter} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />}
            <div className={s.beforeAfter ? "sm:col-span-1 lg:col-span-3" : "sm:col-span-2 lg:col-span-4"}>
              <PhotoGrid items={s.photos} cols={s.beforeAfter ? "sm:grid-cols-1 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"} />
            </div>
          </div>
        </div>
      </section>

      <section className="section container-x max-w-4xl">
        <SectionHead eyebrow="Vanliga frågor" title={`Frågor om ${s.name.toLowerCase()}`} />
        <div className="mt-10"><FaqList faqs={s.faqs} /></div>
      </section>

      <section id="offert" className="section bg-stone-50">
        <div className="container-x max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-stone-900">Begär en kostnadsfri offert</h2>
          <QuoteForm preselect={s.name} />
        </div>
      </section>

      <section className="section container-x">
        <SectionHead eyebrow="Fler tjänster" title="Vi hjälper även till med" />
        <div className="mt-10"><ServiceCards items={others} /></div>
      </section>
    </>
  );
}
