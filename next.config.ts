import type { NextConfig } from "next";

// Old WordPress URLs → sections on the new one-page home
const legacy = { "om-oss": "om-oss", tjanster: "tjanster", miljo: "miljo", kontakt: "kontakt" };

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true, // so /om-oss/ etc. 301 in one hop instead of 308 → 301
  outputFileTracingRoot: __dirname, // a stray lockfile exists in a parent dir on the dev machine
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return Object.entries(legacy).flatMap(([path, anchor]) =>
      [`/${path}`, `/${path}/`].map((source) => ({ source, destination: `/#${anchor}`, statusCode: 301 as const })),
    );
  },
};

export default nextConfig;
