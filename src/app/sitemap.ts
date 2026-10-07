import type { MetadataRoute } from "next";
import { SITE_URL, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/offert", "/integritetspolicy", ...services.map((s) => `/tjanster/${s.slug}`)];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, priority: p === "" ? 1 : p.startsWith("/tjanster") ? 0.8 : 0.4 }));
}
