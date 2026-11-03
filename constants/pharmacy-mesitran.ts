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

// 5+ lekární pre L-Mesitran Soft / Ointment
export const PHARMACY_MESITRAN_OFFERS: PharmacyOffer[] = [
  {
    id: "pilulka-mesitran",
    name: "Pilulka.sk",
    note: "L-Mesitran Soft gél 15 g / 50 g na sklade, doručenie do Pilulka Boxov",
    badge: "Rýchle doručenie",
    directUrl: "https://www.pilulka.sk/l-mesitran-soft-gel-15-g",
  },
  {
    id: "benu-mesitran",
    name: "BENU Lekáreň",
    note: "L-Mesitran Soft gél na rany 15 g, vyzdvihnutie v sieti lekární zdarma",
    badge: "Osobný odber zdarma",
    directUrl: "https://www.benulekaren.sk/l-mesitran-soft-gel-na-rany-15-g",
  },
  {
    id: "etabletka-mesitran",
    name: "eTabletka.sk",
    note: "L-Mesitran Soft gél na rany 50 g a hojivé krytia na sklade",
    badge: "Overený e-shop",
    directUrl: "https://etabletka.sk/l-mesitran-soft-gel-na-hojenie-ran-50g",
  },
  {
    id: "lekarenvkocke-mesitran",
    name: "Lekáreň v Kocke",
    note: "L-Mesitran Soft gél na rany 15 g / vrecúška, okamžitá expedícia",
    badge: "Skladom",
    directUrl: "https://www.lekarenvkocke.sk/l-mesitran-soft-gel-na-rany-15-g/",
  },
  {
    id: "najlekaren-mesitran",
    name: "Najlekáreň.eu",
    note: "L-Mesitran SOFT gél na rany 50 g na akútne a chronické defekty",
    badge: "Výhodné balenie",
    directUrl: "https://www.najlekaren.eu/l-mesitran-soft-gel-na-rany-1x50-g",
  },
  {
    id: "mojalekaren-mesitran",
    name: "MojaLekáreň.sk",
    note: "L-Mesitran hydroaktívne prípravky a krytia s medicínskym medom",
    badge: "Široký výber",
    directUrl: "https://www.mojalekaren.sk/l-mesitran-soft-gel-na-rany-15g/",
  },
];

// Lekárne pre Aqvitox-D (bezbolestný výplach a dezinfekcia)
export const PHARMACY_AQVITOX_OFFERS: PharmacyOffer[] = [
  {
    id: "drmax-aqvitox",
    name: "Dr. Max",
    note: "Aqvitox-D roztok s rozprašovačom 500 ml na sklade",
    badge: "Najväčšia sieť",
    directUrl: "https://www.drmax.sk/aqvitox-d-roztok-na-osetrenie-ran-s-rozprasovacom",
  },
  {
    id: "pilulka-aqvitox",
    name: "Pilulka.sk",
    note: "Aqvitox-D roztok 500 ml na šetrnú dezinfekciu a výplach",
    badge: "Rýchle doručenie",
    directUrl: "https://www.pilulka.sk/aqvitox-d-roztok-500ml",
  },
  {
    id: "etabletka-aqvitox",
    name: "eTabletka.sk",
    note: "Aqvitox-D roztok s rozprašovačom 500 ml a gél 250 ml",
    badge: "Overený e-shop",
    directUrl: "https://etabletka.sk/aqvitox-d-roztok-s-rozprasovacom-500ml",
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
    note: "Aqvitox-D roztok a hydroaktívny gél na bezbolestné čistenie",
    badge: "Skladom",
    directUrl: "https://www.najlekaren.eu/kozmetika-problemy-pokozky-dezinfekcia-a-hojenie-ran/aqvitox-d-roztok-3/",
  },
];

