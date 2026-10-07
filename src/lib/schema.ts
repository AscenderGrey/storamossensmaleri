import { SITE_URL, areas, business, hero, type Faq, type Service } from "./data";

const BUSINESS_ID = `${SITE_URL}/#business`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": BUSINESS_ID,
  name: business.name,
  url: SITE_URL,
  logo: `${SITE_URL}/img/brand/logo_svart.png`,
  image: `${SITE_URL}${hero.src}`,
  slogan: business.tagline,
  telephone: business.phoneE164,
  email: business.email,
  foundingDate: String(business.foundingYear),
  founder: { "@type": "Person", name: business.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: "SE",
  },
  geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
  areaServed: [...areas.map((name) => ({ "@type": "Place", name })), { "@type": "City", name: "Stockholm" }],
  sameAs: [business.instagram],
};

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const serviceSchema = (s: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.metaDescription,
  url: `${SITE_URL}/tjanster/${s.slug}`,
  provider: { "@id": BUSINESS_ID },
  areaServed: areas.map((name) => ({ "@type": "Place", name })),
});

export const breadcrumbSchema = (s: Service) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: `${SITE_URL}/#tjanster` },
    { "@type": "ListItem", position: 3, name: s.name, item: `${SITE_URL}/tjanster/${s.slug}` },
  ],
});
