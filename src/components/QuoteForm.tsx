"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { business, quoteOptions, services } from "@/lib/data";

type Data = {
  services: string[]; area: string; property_type: string; size: string; timing: string;
  name: string; phone: string; email: string; message: string; rot: string; website: string;
};

const stepTitles = ["Vad behöver du hjälp med?", "Var och hur stort?", "Hur når vi dig?"];

function Choice({ label, checked, onChange, type = "radio", name }: { label: string; checked: boolean; onChange: () => void; type?: "radio" | "checkbox"; name: string }) {
  return (
    <label className={`flex cursor-pointer items-center rounded-xl border px-4 py-3 text-sm font-medium transition ${checked ? "border-brand bg-brand/5 text-brand" : "border-stone-300 text-stone-700 hover:border-stone-400"}`}>
      <input type={type} name={name} checked={checked} onChange={onChange} className="sr-only" />
      {label}
    </label>
  );
}

function Group({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="mt-6 first:mt-0">
      <legend className="mb-3 text-sm font-semibold text-stone-900">{legend}</legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{children}</div>
    </fieldset>
  );
}

const input = "mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export default function QuoteForm({ preselect }: { preselect?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [d, setD] = useState<Data>({
    services: preselect ? [preselect] : [], area: "", property_type: "", size: "", timing: "",
    name: "", phone: "", email: "", message: "", rot: "", website: "",
  });
  const set = (k: keyof Data, v: string) => setD((p) => ({ ...p, [k]: v }));
  const toggle = (s: string) => setD((p) => ({ ...p, services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s] }));

  function next() {
    if (step === 0 && d.services.length === 0) return setError("Välj minst en tjänst.");
    setError("");
    setStep(step + 1);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (step < 2) return next();
    if (d.name.trim().length < 2) return setError("Fyll i ditt namn.");
    if (d.phone.replace(/\D/g, "").length < 8) return setError("Fyll i ett giltigt telefonnummer.");
    setError("");
    setSending(true);
    const params = new URLSearchParams(window.location.search);
    const utm = Object.fromEntries([...params].filter(([k]) => k.startsWith("utm_")));
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...d, page: window.location.pathname, utm }),
      });
      if (!res.ok) throw new Error();
      router.push("/tack");
    } catch {
      setSending(false);
      setError(`Något gick fel. Ring oss gärna på ${business.phoneDisplay} så hjälper vi dig direkt.`);
    }
  }

  return (
    <form onSubmit={submit} noValidate className="relative rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-lg font-semibold text-stone-900">{stepTitles[step]}</p>
        <p className="shrink-0 text-sm text-stone-500" aria-live="polite">Steg {step + 1} av 3</p>
      </div>
      <div className="mb-8 h-1 rounded-full bg-stone-100">
        <div className="h-1 rounded-full bg-brand transition-all" style={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>

      {step === 0 && (
        <Group legend="Välj en eller flera tjänster">
          {services.map((s) => (
            <Choice key={s.slug} type="checkbox" name="services" label={s.name} checked={d.services.includes(s.name)} onChange={() => toggle(s.name)} />
          ))}
          <Choice type="checkbox" name="services" label="Annat" checked={d.services.includes("Annat")} onChange={() => toggle("Annat")} />
        </Group>
      )}

      {step === 1 && (
        <>
          <Group legend="Område">
            {quoteOptions.areas.map((o) => <Choice key={o} name="area" label={o} checked={d.area === o} onChange={() => set("area", o)} />)}
          </Group>
          <Group legend="Typ av fastighet">
            {quoteOptions.propertyTypes.map((o) => <Choice key={o} name="property_type" label={o} checked={d.property_type === o} onChange={() => set("property_type", o)} />)}
          </Group>
          <Group legend="Ungefärlig omfattning">
            {quoteOptions.sizes.map((o) => <Choice key={o} name="size" label={o} checked={d.size === o} onChange={() => set("size", o)} />)}
          </Group>
          <Group legend="När vill du att vi börjar?">
            {quoteOptions.timings.map((o) => <Choice key={o} name="timing" label={o} checked={d.timing === o} onChange={() => set("timing", o)} />)}
          </Group>
        </>
      )}

      {step === 2 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-stone-700">Namn *
            <input className={input} autoComplete="name" value={d.name} onChange={(e) => set("name", e.target.value)} required />
          </label>
          <label className="text-sm font-medium text-stone-700">Telefon *
            <input className={input} type="tel" autoComplete="tel" inputMode="tel" value={d.phone} onChange={(e) => set("phone", e.target.value)} required />
          </label>
          <label className="text-sm font-medium text-stone-700 sm:col-span-2">E-post
            <input className={input} type="email" autoComplete="email" value={d.email} onChange={(e) => set("email", e.target.value)} />
          </label>
          <label className="text-sm font-medium text-stone-700 sm:col-span-2">Beskriv gärna jobbet
            <textarea className={input} rows={4} value={d.message} onChange={(e) => set("message", e.target.value)} />
          </label>
          <fieldset className="sm:col-span-2">
            <legend className="mb-2 text-sm font-medium text-stone-700">Vill du använda ROT-avdrag?</legend>
            <div className="grid grid-cols-3 gap-2">
              {["Ja", "Nej", "Vet ej"].map((o) => <Choice key={o} name="rot" label={o} checked={d.rot === o} onChange={() => set("rot", o)} />)}
            </div>
          </fieldset>
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label>Lämna tomt<input tabIndex={-1} autoComplete="off" value={d.website} onChange={(e) => set("website", e.target.value)} /></label>
          </div>
        </div>
      )}

      {error && <p role="alert" className="mt-6 text-sm font-medium text-red-700">{error}</p>}

      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={() => { setError(""); setStep(step - 1); }} className="text-sm font-semibold text-stone-600 hover:text-stone-900">← Tillbaka</button>
        ) : <span />}
        <button type="submit" disabled={sending} className="btn-primary px-6 py-3 disabled:opacity-60">
          {step < 2 ? "Nästa" : sending ? "Skickar…" : "Skicka förfrågan"}
        </button>
      </div>
      {step === 2 && (
        <p className="mt-4 text-xs text-stone-500">
          Vi använder dina uppgifter för att kontakta dig om offerten. Läs vår <Link href="/integritetspolicy" className="underline">integritetspolicy</Link>.
        </p>
      )}
    </form>
  );
}
