import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/Icons";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  robots: { index: false, follow: false },
};

export default function TackPage() {
  return (
    <section className="section container-x max-w-2xl text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
        <CheckIcon className="h-8 w-8" />
      </span>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900">Tack! Vi har fått din förfrågan.</h1>
      <p className="mt-4 text-lg text-stone-600">
        Vi hör av oss så snart vi kan. Brådskande? Ring{" "}
        <a href={business.phoneHref} className="font-semibold text-brand">{business.phoneDisplay}</a>.
      </p>
      <Link href="/" className="btn-primary mt-10 px-7 py-4">Tillbaka till startsidan</Link>
    </section>
  );
}
