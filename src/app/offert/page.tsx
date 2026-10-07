import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Få offert på målning",
  description: "Begär en kostnadsfri offert på målning, tapetsering, fasad eller totalrenovering i Bromma och Stockholm. Svar från Stora Mossens Måleri.",
  alternates: { canonical: "/offert" },
};

export default function OffertPage() {
  return (
    <section className="section container-x max-w-3xl">
      <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">Få en kostnadsfri offert</h1>
      <p className="mt-4 text-lg text-stone-600">
        Tre korta steg. Hellre prata direkt? Ring{" "}
        <a href={business.phoneHref} className="font-semibold text-brand">{business.phoneDisplay}</a>.
      </p>
      <div className="mt-10"><QuoteForm /></div>
    </section>
  );
}
