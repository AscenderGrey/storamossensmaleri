import type { Metadata } from "next";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Så hanterar Stora Mossens Måleri AB dina personuppgifter när du kontaktar oss eller begär en offert.",
  alternates: { canonical: "/integritetspolicy" },
};

// TODO: confirm with Filippa – org.nr and retention period
export default function Integritetspolicy() {
  return (
    <article className="section container-x max-w-3xl space-y-5 text-stone-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-stone-900">
      <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">Integritetspolicy</h1>
      <p>{business.name}, {business.street}, {business.postalCode} {business.city}, är personuppgiftsansvarig för de uppgifter du lämnar till oss.</p>
      <h2>Vilka uppgifter vi samlar in</h2>
      <p>När du skickar en offertförfrågan sparar vi namn, telefonnummer, e-post, område, typ av fastighet och den beskrivning du lämnar. Vi sparar även vilken sida formuläret skickades från och eventuella kampanjparametrar (UTM).</p>
      <h2>Varför</h2>
      <p>Vi använder uppgifterna för att kontakta dig, ta fram en offert och utföra uppdraget. Den rättsliga grunden är att vidta åtgärder inför ett avtal på din begäran, samt vår bokföringsskyldighet om uppdraget blir av.</p>
      <h2>Vem som får tillgång</h2>
      <p>Uppgifterna lagras i vårt kundsystem (GoHighLevel), som även skickar bekräftelser via sms och e-post. Vi säljer aldrig dina uppgifter vidare.</p>
      <h2>Hur länge</h2>
      <p>Vi sparar uppgifterna så länge det behövs för offerten och uppdraget, och därefter så länge lagen kräver.</p>
      <h2>Dina rättigheter</h2>
      <p>Du har rätt att begära utdrag, rättelse eller radering av dina uppgifter. Kontakta oss på <a className="text-brand underline" href={`mailto:${business.email}`}>{business.email}</a>. Du kan även lämna klagomål till Integritetsskyddsmyndigheten (IMY).</p>
      <h2>Cookies</h2>
      <p>Webbplatsen använder inga spårningscookies.</p>
    </article>
  );
}
