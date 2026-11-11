export interface PharmacyOffer {
  id: string;
  name: string;
  note: string;
  badge?: string;
  directUrl: string;
}

// Pomocná funkcia na pridanie UTM parametrov pre tracking vo funneli
export function appendUtm(
  url: string,
  params: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
  } = {}
): string {
  const source = params.source || "hojimerany";
  const medium = params.medium || "triage";
  const campaign = params.campaign || "funnel";
  const content = params.content || "product_click";

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}&utm_content=${content}`;
}

// =========================================================================
// 1. REÁLNE OVERENÉ LEKÁRNE PRE L-MESITRAN (Soft / Ointment)
// (Dr. Max Mesitran v SR nevedie, BENU, Pilulka, Kocka, NajLekáreň, eTabletka áno)
// =========================================================================
export const PHARMACY_MESITRAN_OFFERS: PharmacyOffer[] = [
  {
    id: "benu-mesitran",
    name: "BENU Lekáreň",
    note: "L-Mesitran Soft gél na rany 15 g na sklade, vyzdvihnutie v sieti lekární",
    badge: "Osobný odber",
    directUrl: "https://www.benulekaren.sk/l-mesitran-soft-gel-na-rany-15-g",
  },
  {
    id: "pilulka-mesitran",
    name: "Pilulka.sk",
    note: "L-Mesitran Soft gél 15 g na sklade, doručenie do Pilulka Boxov",
    badge: "Rýchle doručenie",
    directUrl: "https://www.pilulka.sk/l-mesitran-soft-gel-15-g",
  },
  {
    id: "lekarenvkocke-mesitran",
    name: "Lekáreň v Kocke",
    note: "L-Mesitran Soft gél 15 g / vrecká na sklade, rýchla expedícia",
    badge: "Skladom",
    directUrl: "https://www.lekarenvkocke.sk/l-mesitran-soft-gel-na-rany-15-g/",
  },
  {
    id: "etabletka-mesitran",
    name: "eTabletka.sk",
    note: "L-Mesitran Soft gél na hojenie rán 50 g výhodné balenie",
    badge: "Overený e-shop",
    directUrl: "https://etabletka.sk/obchod/l-mesitran-soft-gel-na-hojenie-ran-50g/",
  },
  {
    id: "najlekaren-mesitran",
    name: "Najlekáreň.eu",
    note: "L-Mesitran SOFT gél na rany 1×50 g na akútne a chronické defekty",
    badge: "Výhodné balenie",
    directUrl: "https://www.najlekaren.eu/l-mesitran-soft-gel-na-rany-1x50-g",
  },
  {
    id: "mojalekaren-mesitran",
    name: "MojaLekáreň.sk",
    note: "L-Mesitran hydroaktívne prípravky s medicínskym medom",
    badge: "Široký výber",
    directUrl: "https://www.mojalekaren.sk/l-mesitran-soft-gel-na-rany-15g/",
  },
];

// =========================================================================
// 2. REÁLNE OVERENÉ LEKÁRNE PRE AQVITOX-D
// (Dr. Max, Pilulka, Lekáreň v Kocke, NajLekáreň, eTabletka)
// =========================================================================
export const PHARMACY_AQVITOX_OFFERS: PharmacyOffer[] = [
  {
    id: "drmax-aqvitox",
    name: "Dr. Max",
    note: "AQVITOX-D s rozprašovačom 500 ml na sklade, najväčšia sieť odberných miest",
    badge: "Najväčšia sieť",
    directUrl: "https://www.drmax.sk/aqvitox-d-s-rozprasovacom-x500-ml",
  },
  {
    id: "pilulka-aqvitox",
    name: "Pilulka.sk",
    note: "Aqvitox-D roztok 500 ml na šetrnú dezinfekciu a výplach",
    badge: "Rýchle doručenie",
    directUrl: "https://www.pilulka.sk/aqvitox-d-roztok-500ml",
  },
  {
    id: "lekarenvkocke-aqvitox",
    name: "Lekáreň v Kocke",
    note: "Aqvitox-D roztok 500 ml na ošetrenie rán a likvidáciu biofilmu",
    badge: "Skladom",
    directUrl: "https://www.lekarenvkocke.sk/aqvitox-d-roztok-500-ml/",
  },
  {
    id: "najlekaren-aqvitox",
    name: "Najlekáreň.eu",
    note: "Aqvitox-D roztok 1×500 ml na bezbolestné čistenie a výplachy",
    badge: "Skladom",
    directUrl: "https://www.najlekaren.eu/aqvitox-d-roztok-1x500-ml",
  },
  {
    id: "etabletka-aqvitox",
    name: "eTabletka.sk",
    note: "Aqvitox-D roztok s rozprašovačom 500 ml na ošetrenie rán",
    badge: "Overený e-shop",
    directUrl: "https://etabletka.sk/obchod/aqvitox-d-roztok-s-rozprasovacom-500ml/",
  },
];

// =========================================================================
// 3. REÁLNE OVERENÉ LEKÁRNE PRE AQVIDINE (Tylové krytie s jódom)
// (BENU, NajLekáreň, eTabletka, Bexamed, SOS Lekáreň)
// =========================================================================
export const PHARMACY_AQVIDINE_OFFERS: PharmacyOffer[] = [
  {
    id: "benu-aqvidine",
    name: "BENU Lekáreň",
    note: "AQVIDINE 9,5 × 9,5 cm 25 ks neadherentné antiseptické krytie s jódom na sklade",
    badge: "Skladom v e-shope",
    directUrl: "https://www.benulekaren.sk/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-9-5x9-5cm-25ks",
  },
  {
    id: "najlekaren-aqvidine",
    name: "Najlekáreň.eu",
    note: "AQVIDINE neadherentné krytie s jódpovidónom 9,5 × 9,5 cm 25 ks",
    badge: "Výhodná cena",
    directUrl: "https://www.najlekaren.eu/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-9-5-x-9-5-cm-25-ks",
  },
  {
    id: "etabletka-aqvidine",
    name: "eTabletka.sk",
    note: "AQVIDINE neadherentné krytie na rany s jódpovidónom 9,5 × 9,5 cm",
    badge: "Overený e-shop",
    directUrl: "https://etabletka.sk/obchod/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-95-x-95cm-25ks/",
  },
  {
    id: "bexamed-aqvidine",
    name: "Bexamed.sk",
    note: "Aqvidine krytie s jódom 9,5 × 9,5 cm 25 ks, špecialista na zdravotnícke pomôcky",
    badge: "Zdravotnícky sklad",
    directUrl: "https://www.bexamed.sk/p/aqvidine-krytie-s-jodom-9-5x9-5cm-25ks",
  },
  {
    id: "soslekaren-aqvidine",
    name: "SOS-Lekáreň.sk",
    note: "AQVIDINE neadherentné jódové krytie na infikované a povrchové rany",
    badge: "Skladom",
    directUrl: "https://www.sos-lekaren.sk/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-5x5cm-25ks",
  },
];
