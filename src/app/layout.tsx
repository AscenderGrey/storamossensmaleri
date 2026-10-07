import type { Metadata } from "next";
import Link from "next/link";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PhoneIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, business, hero } from "@/lib/data";
import { localBusinessSchema } from "@/lib/schema";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Målare i Bromma & Stockholm sedan 1975 | Stora Mossens Måleri",
    template: "%s | Stora Mossens Måleri",
  },
  description:
    "Familjeägd målerifirma i Bromma i tredje generationen sedan 1975. Invändig målning, tapetsering, fasad och totalrenovering i Stockholm. Ring 0723-33 20 74.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: business.name,
    images: [{ url: hero.src, width: hero.w, height: hero.h, alt: hero.alt }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-stone-200 bg-white/95 p-3 backdrop-blur md:hidden">
          <a href={business.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-stone-300 py-3 font-semibold text-stone-900">
            <PhoneIcon className="h-4 w-4 text-brand" /> Ring
          </a>
          <Link href="/offert" className="btn-primary py-3">Få offert</Link>
        </div>
      </body>
    </html>
  );
}
