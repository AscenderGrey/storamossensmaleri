// All business facts, services, projects and FAQs live here.
// Anything marked TODO must be confirmed with Filippa before launch.

export const SITE_URL = "https://storamossensmaleri.se";

export const business = {
  name: "Stora Mossens Måleri AB",
  shortName: "Stora Mossens Måleri",
  tagline: "Hantverk i tredje generationen – Anno 1975",
  founder: "Filippa Granat",
  foundingYear: 1975,
  phoneDisplay: "0723-33 20 74",
  phoneHref: "tel:+46723332074",
  phoneE164: "+46723332074",
  email: "kontakt@storamossensmaleri.se",
  emailFilippa: "filippa@storamossensmaleri.se",
  street: "Abrahamsbergsvägen 49",
  postalCode: "168 30",
  city: "Bromma",
  region: "Stockholms län",
  // TODO: confirm with Filippa – coordinates should match the Google Business Profile pin
  geo: { lat: 59.3366, lng: 17.9533 },
  instagram: "https://www.instagram.com/storamossensmaleriab/",
  values: ["Kompetens", "Engagemang", "Miljö"],
  paintBrands: ["Nordsjö", "Jotun", "Alcro"],
};

export const areas = ["Bromma", "Abrahamsberg", "Stora Mossen", "Nockeby", "Vasastan", "Stockholm city"];

// TODO: confirm with Filippa – permission to show client names (and logo files if we switch from wordmarks)
export const clients = [
  { name: "McDonald's", note: "Partner i totalrenoveringar av restauranger", logo: null as string | null },
  { name: "Convendum", note: "Byggnadsanpassningar och måleri", logo: null as string | null },
  { name: "Folksam", note: "Försäkringsjobb", logo: null as string | null },
];

export type Img = { src: string; alt: string; w: number; h: number };
const img = (file: string, alt: string, w: number, h: number): Img => ({ src: `/img/work/${file}.jpg`, alt, w, h });

export type BeforeAfter = {
  id: string;
  title: string;
  area: string;
  done: string;
  color?: string;
  before: Img;
  after: Img;
};

// Four rooms from the same villa: "Uppstart – villa i Bromma" (IG 2026-09-03) → "Totalrenovering klar i Bromma" (IG 2026-10-05).
// TODO: confirm with Filippa – that these pairs are the same house, and which before/afters to feature
export const beforeAfters: BeforeAfter[] = [
  {
    id: "valv",
    title: "Rummet bakom valvet",
    area: "Villa i Bromma",
    done: "Spackling och målning av tak och väggar, målade snickerier och slipat golv.",
    before: img("villa-valv-fore", "Före: rum bakom valvöppning i villa i Bromma, innan spackling och målning", 1350, 1800),
    after: img("villa-valv-efter", "Efter: nymålat rum bakom valvöppning med grå snickerier i villa i Bromma", 1350, 1800),
  },
  {
    id: "brasa",
    title: "Vardagsrum med öppen spis",
    area: "Villa i Bromma",
    done: "Väggar och tak spacklade och målade, snickerier målade i grått, golv slipat.",
    before: img("villa-brasa-fore", "Före: vardagsrum med öppen spis i villa i Bromma, innan renovering", 1350, 1800),
    after: img("villa-brasa-efter", "Efter: renoverat vardagsrum med öppen spis och målade snickerier i Bromma", 1350, 1800),
  },
  {
    id: "vind",
    title: "Vindsrum",
    area: "Villa i Bromma",
    done: "Väggar och tak spacklade och målade, golvet framtaget och slipat.",
    before: img("villa-vind-fore", "Före: vindsrum med heltäckningsmatta och gamla väggar i villa i Bromma", 1350, 1800),
    after: img("villa-vind-efter", "Efter: vindsrum med slipat trägolv och nymålade väggar i villa i Bromma", 1350, 1800),
  },
  {
    id: "hylla",
    title: "Vägg med inbyggd hylla",
    area: "Villa i Bromma",
    done: "Mönstrad tapet ersatt med spacklade och målade väggar, hylla och dörrar målade.",
    before: img("villa-hylla-fore", "Före: rum med mönstrad tapet och inbyggd hylla i villa i Bromma", 1350, 1800),
    after: img("villa-hylla-efter", "Efter: målad vägg och inbyggd hylla i grå kulör i villa i Bromma", 1350, 1800),
  },
];
const ba = (id: string) => beforeAfters.find((b) => b.id === id)!;

export type GalleryItem = Img & { caption: string };
const g = (file: string, alt: string, w: number, h: number, caption: string): GalleryItem => ({ ...img(file, alt, w, h), caption });

export const photos = {
  fasad: g("villa-fasad", "Putsad villafasad med målade fönster och snickerier", 480, 480, "Villafasad – puts, fönster och snickerier"), // TODO: confirm area + get original high-res file
  sockel: g("fasad-sockel", "Nymålad ljus fasad med mörk sockel", 1169, 1171, "Fasad med mörk sockel"), // TODO: confirm area
  pergola: g("pergola", "Vitmålad pergola och spaljé vid villa", 480, 480, "Pergola och spaljé målade vita"), // TODO: confirm area + get original high-res file
  balkong: g("vasastan-balkongdorr", "Balkongdörr i Vasastan som slipas, skrapas och målas om", 1800, 1351, "Balkongdörr i Vasastan – slipad, skrapad och målad"),
  tapetPanel: g("villa-tapet-panel", "Tapetserade väggfält och målade lister i villa i Bromma", 1080, 1440, "Tapetserade väggfält, villa i Bromma"),
  nockeby: g("nockeby-sovrum-tapet", "Nytapetserat sovrum i Nockeby", 1080, 1440, "Två sovrum tapetserade i Nockeby"),
  koksluckor: g("villa-koksluckor", "Lackerade köksluckor i villa i Bromma", 1080, 1440, "Köksluckor lackerade, villa i Bromma"),
  entre: g("entre-trapphus", "Målad entré med valv och dekormåleri", 1169, 1170, "Entré med valv"), // TODO: confirm with Filippa – what/where is this?
  trapphall: g("trapphall-tapet", "Tapetserad trapphall med målat trappräcke", 480, 640, "Tapetserad trapphall"), // TODO: get original high-res file
  lagenhet: g("bromma-lagenhet", "Lägenhet i Bromma med nymålade tak, väggar och snickerier", 1350, 1800, "Lägenhet i Bromma – tak, väggar och snickerier"),
  sovrum: g("bromma-sovrum", "Nymålat sovrum med ljusa väggar", 1080, 1440, "Sovrum och kök"),
  matsal: g("matsal", "Ljust nymålat matrum med spröjsat fönster", 1168, 1168, "Matrum – tak och väggar"), // TODO: confirm area
  sovrumOker: g("villa-sovrum-oker", "Sovrum med väggar i varm ockraton och slipat trägolv i villa i Bromma", 1350, 1800, "Sovrum i varm kulör, villa i Bromma"),
  trappa: g("villa-trappa", "Trapphall med målade snickerier i villa i Bromma", 720, 960, "Trapphall med målade snickerier, Bromma"),
  restaurang: g("restaurang", "Restaurangmiljö målad i samband med totalrenovering", 1169, 1169, "Restaurang – måleri vid totalrenovering"), // TODO: confirm which client/restaurant + permission
  kontorLounge: g("kontor-lounge", "Kontorsmiljö med nymålade väggar och tak", 1170, 1418, "Kontorsmiljö – väggar och tak"), // TODO: confirm client
  kontor6010: g("kontor-6010-g70y", "Kontorsvägg som målas i kulör 6010-G70Y", 1080, 1440, "Två kontorsväggar i kulör 6010-G70Y"),
  filippaWindow: g("filippa", "Målare från Stora Mossens Måleri arbetar vid ett fönsterparti", 1170, 1533, "Arbete vid fönsterparti"),
};

export const hero: Img = img("hero-vardagsrum", "Nymålat ljust vardagsrum med spröjsade fönster och kristallkrona", 1796, 1800); // TODO: confirm area for alt text

// TODO: confirm with Filippa – photo is a placeholder (taken from current site, unclear if it shows Filippa)
export const filippaPhoto: Img = img("filippa", "Filippa Granat, grundare av Stora Mossens Måleri, vid ett fönsterarbete", 1170, 1533);

export const galleryGroups: { title: string; items: GalleryItem[] }[] = [
  { title: "Fasad & utvändigt", items: [photos.fasad, photos.sockel, photos.pergola, photos.balkong] },
  { title: "Invändigt & renovering", items: [photos.tapetPanel, photos.nockeby, photos.koksluckor, photos.lagenhet] },
  { title: "Kommersiellt", items: [photos.restaurang, photos.kontorLounge, photos.kontor6010] },
];

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  rot: boolean;
  metaDescription: string;
  intro: string[];
  includes: string[];
  forWhom: string;
  beforeAfter?: BeforeAfter;
  photos: GalleryItem[];
  faqs: Faq[];
};

// TODO: confirm with Filippa – ROT wording (we only say it applies to labour cost for private homes, no percentage)
export const services: Service[] = [
  {
    slug: "invandig-malning",
    name: "Invändig målning",
    short: "Väggar, tak och snickerier – noggrant förarbete och jämn finish.",
    rot: true,
    metaDescription: "Invändig målning av väggar, tak och snickerier i Bromma och Stockholm. Familjeföretag sedan 1975. Kostnadsfri konsultation – ring 0723-33 20 74.",
    intro: [
      "Ett nymålat rum handlar mest om det du inte ser: spackel, slipning, grundning och raka linjer mot tak och lister. Det är där vi lägger tiden.",
      "Vi målar lägenheter, villor och kontor i Bromma och övriga Stockholm – från ett enskilt rum till hela bostaden – och använder miljömärkta färger.",
    ],
    includes: [
      "Skydd och täckning av golv, möbler och fönster",
      "Lagning, spackling och slipning av väggar och tak",
      "Grundning och målning av tak och väggar",
      "Målning av dörrar, foder, lister och andra snickerier",
      "Hjälp att välja kulör och glans",
      "Städning och genomgång när jobbet är klart",
    ],
    forWhom: "Privatpersoner i lägenhet eller villa, bostadsrättsföreningar och företag som vill fräscha upp kontor eller lokaler.",
    beforeAfter: ba("valv"),
    photos: [photos.lagenhet, photos.sovrum, photos.matsal],
    faqs: [
      { q: "Hjälper ni till att välja kulör?", a: "Ja. Vi går igenom ljus, golv och snickerier på plats och ger förslag på kulör och glans som passar rummet." },
      { q: "Måste vi flytta ut medan ni målar?", a: "Oftast inte. Vi planerar arbetet rum för rum och täcker noga, så att du kan bo kvar under tiden." },
      { q: "Vilken färg använder ni?", a: "Vi arbetar med miljömärkta färger och kvalitetsmärken som Nordsjö, Jotun och Alcro, beroende på yta och önskat resultat." },
    ],
  },
  {
    slug: "tapetsering",
    name: "Tapetsering",
    short: "Från klassiska mönster till designtapeter – raka våder och osynliga skarvar.",
    rot: true,
    metaDescription: "Tapetsering i Bromma och Stockholm – klassiska och moderna tapeter, rivning av gammal tapet och underarbete. Familjeföretag sedan 1975.",
    intro: [
      "En tapet förlåter inga genvägar. Ojämna väggar, sneda våder och synliga skarvar syns direkt – därför börjar vi alltid med underlaget.",
      "Vi river gammal tapet, spacklar och förbereder väggen och sätter upp allt från klassiska mönstertapeter till moderna designtapeter.",
    ],
    includes: [
      "Rivning av gammal tapet",
      "Spackling och slipning av underlaget",
      "Mönsterpassning och uppsättning av tapet",
      "Tapetsering av hela rum eller enskilda väggar och väggfält",
      "Målning av tak och snickerier i samma vända",
    ],
    forWhom: "Dig som vill ge sovrum, hall eller vardagsrum ny karaktär – och fastighetsägare eller företag som vill ha ett lika jämnt resultat i större lokaler.",
    photos: [photos.nockeby, photos.tapetPanel, photos.trapphall],
    faqs: [
      { q: "Behöver jag köpa tapeten själv?", a: "Du väljer tapet själv eller tillsammans med oss. Vi hjälper gärna till att räkna ut hur många rullar som behövs." },
      { q: "Kan ni tapetsera över gammal tapet?", a: "Vi rekommenderar nästan alltid att den gamla tapeten rivs. Det ger bättre fäste och ett jämnare resultat som håller längre." },
      { q: "Tar ni även små jobb, som en enda vägg?", a: "Ja, vi tar uppdrag i alla storlekar – från en fondvägg till en hel bostad." },
    ],
  },
  {
    slug: "lackering-snickerimalning",
    name: "Lackering & snickerimålning",
    short: "Köksluckor, dörrar, trappor och lister – sprutade eller penselmålade.",
    rot: true,
    metaDescription: "Lackering och snickerimålning i Bromma och Stockholm: köksluckor, dörrar, trappor, fönster och lister. Sprutmålning för slät finish.",
    intro: [
      "Snickerier är det man tar i varje dag, så finishen måste både se bra ut och tåla slitage. Rätt slipning och grundning är halva jobbet.",
      "Vi lackerar köksluckor, dörrar och trappor och målar foder, lister och inbyggda hyllor – med pensel eller färgspruta beroende på yta.",
    ],
    includes: [
      "Rengöring, slipning och lagning av ytor",
      "Grundning anpassad efter material",
      "Lackering av köksluckor och dörrar",
      "Målning av trappor, räcken, foder och lister",
      "Sprutmålning för en jämn och slät yta där det passar",
    ],
    forWhom: "Dig som vill ge köket, hallen eller trappan ett lyft utan att byta ut snickerierna – i villa, lägenhet eller lokal.",
    beforeAfter: ba("hylla"),
    photos: [photos.koksluckor, photos.trappa],
    faqs: [
      { q: "Kan ni lackera köksluckor på plats?", a: "Det beror på luckorna och finishen du vill ha. Vi tittar på köket och föreslår det sätt som ger bäst resultat." },
      { q: "Sprutar eller penselmålar ni?", a: "Båda. Vi använder färgspruta när en helt slät yta är målet och pensel där det ger bättre kontroll." },
      { q: "Hur länge måste färgen härda?", a: "Det beror på färgtyp och yta. Vi går igenom hur och när ytorna kan användas när jobbet är klart." },
    ],
  },
  {
    slug: "fasadmalning",
    name: "Fasadmålning",
    short: "Utvändig målning som skyddar huset och håller i många år.",
    rot: true,
    metaDescription: "Fasadmålning i Bromma och Stockholm för villor, flerbostadshus och kommersiella fastigheter. Noggrant förarbete och miljömärkta färger.",
    intro: [
      "En fasad målas för att skydda huset – utseendet kommer på köpet. Väder, fukt och sol sliter, och då är förarbetet det som avgör hur länge färgen sitter.",
      "Vi målar fasader, socklar, fönster och utvändiga snickerier på villor, flerbostadshus och kommersiella fastigheter.",
    ],
    includes: [
      "Besiktning av fasadens skick",
      "Tvättning, skrapning och lagning",
      "Grundning av utsatta partier",
      "Målning av fasad, sockel och utvändiga snickerier",
      "Målning av pergola, staket och andra detaljer",
    ],
    forWhom: "Villaägare, bostadsrättsföreningar och fastighetsägare som vill skydda och fräscha upp huset.",
    photos: [photos.sockel, photos.fasad, photos.pergola],
    faqs: [
      { q: "När på året målar ni fasader?", a: "Fasadmålning görs under den varma delen av året när temperatur och fukt tillåter. Hör av dig i god tid så planerar vi in jobbet." },
      { q: "Ingår ställning?", a: "Det beror på huset. Vi tar med det i offerten så att du ser hela kostnaden från början." },
      { q: "Hur vet jag om fasaden behöver målas?", a: "Flagnande färg, sprickor och blekta partier är tecken. Vi kommer gärna ut och tittar." },
    ],
  },
  {
    slug: "fonsterrenovering",
    name: "Fönsterrenovering",
    short: "Skrapning, kittning och målning som förlänger fönstrens liv.",
    rot: true,
    metaDescription: "Fönsterrenovering och fönstermålning i Bromma och Stockholm – skrapning, lagning och målning av fönster och balkongdörrar.",
    intro: [
      "Gamla fönster och balkongdörrar är ofta värda att rädda. Med rätt renovering håller de länge till och behåller husets karaktär.",
      "Vi skrapar, slipar, lagar och målar fönster och balkongdörrar – både för ett snyggare utseende och för att skydda träet.",
    ],
    includes: [
      "Skrapning och slipning av gammal färg",
      "Lagning av skadade partier",
      "Grundning och målning av bågar, karmar och foder",
      "Renovering av balkongdörrar",
    ],
    forWhom: "Villaägare och bostadsrättsföreningar med äldre fönster, och dig som vill ta hand om en sliten balkongdörr.",
    photos: [photos.balkong, photos.filippaWindow],
    faqs: [
      { q: "Lönar det sig att renovera i stället för att byta?", a: "Ofta ja, särskilt för äldre fönster i bra virke. Vi tittar på skicket och säger ärligt vad vi tror." },
      { q: "Renoverar ni balkongdörrar också?", a: "Ja, vi slipar, skrapar och målar balkongdörrar – till exempel nyligen i Vasastan." },
      { q: "Kan ni ta enstaka fönster?", a: "Ja, vi tar både enstaka fönster och hela hus." },
    ],
  },
  {
    slug: "totalrenovering",
    name: "Totalrenovering",
    short: "Hela bostaden eller lokalen – vi samordnar måleriet från start till slut.",
    rot: true,
    metaDescription: "Totalrenovering inom måleri i Bromma och Stockholm: spackling, gipsning, målning, tapetsering och golvslipning. Kostnadsfri konsultation.",
    intro: [
      "Vid en totalrenovering hänger allt ihop: tak, väggar, snickerier och golv ska bli klara i rätt ordning. Vi håller ihop måleriet och samordnar med andra yrkesgrupper.",
      "Ett exempel är villan i Bromma här nedan, där vi spacklade alla väggar, gipsade och målade tak, målade snickerier, tapetserade, lackerade köksluckor och slipade samtliga golv.",
    ],
    includes: [
      "Spackling av väggar och gipsning av tak",
      "Målning av tak, väggar och snickerier",
      "Tapetsering",
      "Lackering av köksluckor",
      "Slipning och renovering av golv",
      "Samordning med andra hantverkare",
    ],
    forWhom: "Dig som har köpt hus eller lägenhet och vill renovera innan inflytt – och företag som renoverar kontor, butiker eller restauranger.",
    beforeAfter: ba("vind"),
    photos: [photos.sovrumOker, photos.restaurang, photos.kontorLounge],
    faqs: [
      { q: "Kan ni samordna med el och snickare?", a: "Ja, vi arbetar ofta tillsammans med andra yrkesgrupper i större projekt." },
      { q: "Hur lång tid tar en totalrenovering?", a: "Det beror helt på storlek och omfattning. Du får en tidsplan tillsammans med offerten." },
      { q: "Gör ni totalrenoveringar för företag?", a: "Ja. Vi är bland annat samarbetspartner i totalrenoveringar av McDonald's-restauranger." },
    ],
  },
];

// TODO: confirm with Filippa – free quote vs. free consultation wording, ROT handling on the invoice
export const faqs: Faq[] = [
  { q: "Kan jag få ROT-avdrag?", a: "Ja, som privatperson kan du få ROT-avdrag på arbetskostnaden när vi målar i din bostad. Vi visar avdraget i offerten." },
  { q: "Vad kostar det och är offerten gratis?", a: "Priset beror på ytor, skick och förarbete. Vi kommer ut, tittar på jobbet och ger en offert – konsultationen är kostnadsfri." },
  { q: "Hur lång tid tar ett jobb?", a: "Ett enskilt rum går ofta snabbt, en totalrenovering tar längre. Du får en tidsplan tillsammans med offerten." },
  { q: "Arbetar ni med företag och bostadsrättsföreningar?", a: "Ja. Vi arbetar med privatpersoner, BRF:er, kontor och restauranger – bland annat McDonald's, Convendum och Folksam." },
  { q: "Använder ni miljövänlig färg?", a: "Ja, vi använder miljömärkta färger och produkter som är skonsamma för både människor och miljö." },
  { q: "Vilka områden arbetar ni i?", a: "Vi utgår från Abrahamsberg i Bromma och arbetar i hela Bromma och Stockholm, till exempel Nockeby, Stora Mossen och Vasastan." },
];

export const quoteOptions = {
  areas: ["Bromma", "Nockeby", "Abrahamsberg", "Vasastan", "Stockholm city", "Annat område"],
  propertyTypes: ["Lägenhet", "Villa", "BRF", "Kontor", "Restaurang"],
  sizes: ["Ett rum", "2–3 rum", "Hel lägenhet/våning", "Hel villa", "Fasad", "Vet ej"],
  timings: ["Så snart som möjligt", "Inom 1–3 månader", "Senare i år", "Flexibelt"],
};
