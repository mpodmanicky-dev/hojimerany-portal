import { Pharmacy, TriageProduct } from "@/types/triage";

export const TRIAGE_PRODUCTS: Record<string, TriageProduct> = {
  aqvitox: {
    id: "aqvitox",
    name: "Aqvitox-D roztok",
    brand: "Aqvitox",
    role: "Dezinfekcia a výplach",
    description:
      "Superoxidovaný elektrochemicky aktivovaný roztok na bezbolestnú dezinfekciu, oplach a čistenie akútnych aj chronických rán.",
    whyThisProduct:
      "Nepáli, nefarbí a neničí zdravé granulačné bunky (na rozdiel od alkoholu či peroxidu). Účinne likviduje baktérie, vírusy, kvasinky aj odolný bakteriálny biofilm.",
    usage:
      "Aplikujte postrekom alebo výdatným oplachom priamo na spodinu rany pred nanesením liečivého gélu.",
    searchQuery: "Aqvitox",
  },
  "mesitran-soft": {
    id: "mesitran-soft",
    name: "L-Mesitran Soft",
    brand: "L-Mesitran",
    role: "Hojenie a regenerácia",
    description:
      "Hydroaktívny antibakteriálny gél s 40% medicínskym medom, vitamínmi C a E na moderné vlhké hojenie rán a popálenín.",
    whyThisProduct:
      "Udržiava optimálne vlhké mikroprostredie, v ktorom epitelové bunky migrujú až 2× rýchlejšie. Zabraňuje vzniku suchej praskajúcej chrasty a minimalizuje tvorbu jaziev.",
    usage:
      "Po opláchnutí Aqvitoxom naneste tenkú vrstvu (1–2 mm) priamo na ranu alebo sterilnú gázu 1× denne.",
    searchQuery: "L-Mesitran Soft",
  },
  "mesitran-ointment": {
    id: "mesitran-ointment",
    name: "L-Mesitran Ointment",
    brand: "L-Mesitran",
    role: "Hojenie a regenerácia",
    description:
      "Hustá hojivá masť s vysokým podielom medicínskeho medu (48%) určená na hlbšie, macerované, povlakové a chronické rany.",
    whyThisProduct:
      "Vysoká osmolarita medu prirodzene odčerpáva edém a tekutinu z okolia, čím napomáha samovoľnému bezbolestnému odlučovaniu žltých povlakov a odumretého tkaniva.",
    usage:
      "Aplikujte priamo do spodiny rany pod sterilné sekundárne krytie. Preväzujte raz za 24 až 48 hodín.",
    searchQuery: "L-Mesitran Ointment",
  },
};

export const PARTNER_PHARMACIES: Pharmacy[] = [
  {
    id: "drmax",
    name: "Dr. Max",
    note: "Dostupnosť na e-shope aj v kamenných lekárňach po celom Slovensku",
    searchUrl: (query: string) =>
      `https://www.drmax.sk/vyhladavanie?q=${encodeURIComponent(query)}`,
  },
  {
    id: "pilulka",
    name: "Pilulka.sk",
    note: "Rýchle doručenie kuriérom alebo vyzdvihnutie v Pilulka Boxoch",
    searchUrl: (query: string) =>
      `https://www.pilulka.sk/hladat?q=${encodeURIComponent(query)}`,
  },
  {
    id: "mojalekaren",
    name: "MojaLekáreň.sk",
    note: "Široký sortiment zdravotníckych pomôcok a hojivých krytí",
    searchUrl: (query: string) =>
      `https://www.mojalekaren.sk/hladanie/?q=${encodeURIComponent(query)}`,
  },
  {
    id: "benu",
    name: "BENU Lekáreň",
    note: "Osobný odber v sieti lekární zdarma",
    searchUrl: (query: string) =>
      `https://www.benulekaren.sk/vyhladavanie?q=${encodeURIComponent(query)}`,
  },
  {
    id: "etabletka",
    name: "eTabletka",
    note: "Overená online lekáreň so skladovou zásobou",
    searchUrl: (query: string) =>
      `https://www.etabletka.sk/vyhladavanie/?q=${encodeURIComponent(query)}`,
  },
];

