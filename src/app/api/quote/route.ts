import { NextResponse } from "next/server";

type Body = Record<string, unknown>;
const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Swedish numbers → E.164 (+46…). Returns null if fewer than 8 digits.
function toE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 8) return null;
  if (raw.trim().startsWith("+")) return `+${digits}`;
  if (digits.startsWith("00")) return `+${digits.slice(2)}`;
  if (digits.startsWith("46")) return `+${digits}`;
  if (digits.startsWith("0")) return `+46${digits.slice(1)}`;
  return `+46${digits}`;
}

export async function POST(req: Request) {
  let b: Body;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry
  if (str(b.website)) return NextResponse.json({ ok: true });

  const name = str(b.name, 120);
  const phone = toE164(str(b.phone, 40));
  if (name.length < 2 || !phone) return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });

  const [first_name, ...rest] = name.split(/\s+/);
  const services = Array.isArray(b.services) ? b.services.map((s) => str(s, 60)).filter(Boolean).slice(0, 10) : [];
  const utm = b.utm && typeof b.utm === "object" ? Object.fromEntries(Object.entries(b.utm).map(([k, v]) => [k.slice(0, 40), str(v, 200)])) : {};
  const rot = str(b.rot, 10);

  const payload = {
    first_name,
    last_name: rest.join(" "),
    phone,
    email: str(b.email, 200),
    services,
    area: str(b.area, 60),
    property_type: str(b.property_type, 60),
    size: str(b.size, 60),
    timing: str(b.timing, 60),
    message: str(b.message, 3000),
    rot,
    source: "storamossensmaleri.se",
    page: str(b.page, 200),
    utm,
    tags: ["webbformular", ...services.map((s) => `tjanst:${s.toLowerCase()}`), ...(rot === "Ja" ? ["rot"] : [])],
  };

  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) {
    if (process.env.VERCEL_ENV === "production") {
      console.error("GHL_WEBHOOK_URL missing in production");
      return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
    }
    console.log("[quote] GHL_WEBHOOK_URL not set – payload:", JSON.stringify(payload));
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`GHL responded ${res.status}`);
  } catch (e) {
    console.error("[quote] webhook failed", e);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
