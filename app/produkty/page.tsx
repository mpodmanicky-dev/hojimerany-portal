import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Aqvitox from "@/components/products/aqvitox";
import Mesitran from "@/components/products/mesitran";
import Aqvidine from "@/components/products/aqvidine";
import ProductQuickJump from "@/components/products/ProductQuickJump";
import { DETAILED_PRODUCTS } from "@/constants/products";
import { generateMedicalWebPageSchema, generateMedicalDeviceSchema } from "@/lib/seo";
import { IconCheck, IconShield, IconSparkles, IconClock, IconAlertTriangle } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Certifikované produkty na moderné hojenie rán | Hojímerany.sk",
  description:
    "Kompletný sprievodca liečbou: Aqvitox-D (kyselina chlórna bez pálenia), L-Mesitran Soft (medicínsky med na popáleniny a rany) a Aqvidine (neadherentné jódové krytie). Ako, kedy, kde a prečo používať.",
  keywords: [
    "Aqvitox-D roztok",
    "L-Mesitran Soft gél",
    "Aqvidine tylové krytie",
    "ako používať Aqvitox",
    "ako aplikovať Mesitran na popáleniny",
    "medicínsky med na rany",
    "neadherentné jódové krytie",
    "superoxidovaný roztok bez pálenia",
    "kde kúpiť Mesitran",
    "kde kúpiť Aqvitox",
  ],
  alternates: {
    canonical: "https://hojimerany.sk/produkty",
  },
};

export default function ProduktyPage() {
  const webPageSchema = generateMedicalWebPageSchema({
    title: "Katalóg zdravotníckych pomôcok na vlhké hojenie a dekontamináciu rán",
    description:
      "Podrobné klinické postupy, spôsoby aplikácie, indikácie a lekárenská dostupnosť pre Aqvitox-D, L-Mesitran a Aqvidine.",
    url: "https://hojimerany.sk/produkty",
  });

  const aqvitoxSchema = generateMedicalDeviceSchema({
    name: "Aqvitox-D superoxidovaný roztok na čistenie rán a likvidáciu biofilmu 500 ml",
    description:
      "Elektrochemicky aktivovaný superoxidovaný roztok na báze kyseliny chlórnej (HClO). 100% nepáli, likviduje mikrobiálny biofilm do 60 sekúnd a pripravuje ranu na rýchlu regeneráciu.",
    brand: "Aqvitox",
    category: "Zdravotnícka pomôcka triedy IIb",
    url: "https://hojimerany.sk/produkty#aqvitox",
    image: "https://hojimerany.sk/images/aqvitox.png",
    gtin13: "8594165330018",
    mpn: "P99452",
    sku: "AQVITOX-500ML",
    lowPrice: "12.49",
    highPrice: "15.90",
    priceCurrency: "EUR",
    offerCount: 5,
    offers: [
      { seller: "Dr. Max", price: "15.90", url: "https://www.drmax.sk/aqvitox-d-s-rozprasovacom-x500-ml" },
      { seller: "Pilulka.sk", price: "13.99", url: "https://www.pilulka.sk/aqvitox-d-roztok-500ml" },
      { seller: "eTabletka", price: "12.49", url: "https://etabletka.sk/obchod/aqvitox-d-roztok-s-rozprasovacom-500ml/" },
      { seller: "Najlekáreň", price: "12.80", url: "https://www.najlekaren.eu/aqvitox-d-roztok-1x500-ml" },
      { seller: "Lekáreň v Kocke", price: "13.50", url: "https://www.lekarenvkocke.sk/aqvitox-d-roztok-500-ml/" },
    ],
    aggregateRating: {
      ratingValue: "4.9",
      reviewCount: 138,
      bestRating: "5",
      worstRating: "1",
    },
    reviews: [
      {
        author: "MUDr. Peter H. (Chirurgická ambulancia)",
        datePublished: "2024-04-12",
        ratingValue: 5,
        reviewBody: "Najlepší roztok na bezbolestný výplach a debridement. Pacienti, najmä deti, oceňujú, že vôbec neštípe a nepáli ani pri otvorených odreninách.",
      },
      {
        author: "Veronika Š. (Overený zákazník)",
        datePublished: "2024-08-20",
        ratingValue: 5,
        reviewBody: "Používame na odreniny po páde z bicykla a na obareniny. Žiadny plač pri ošetrení a hojenie bez komplikácií.",
      },
    ],
  });

  const mesitranSchema = generateMedicalDeviceSchema({
    name: "L-Mesitran Soft antibakteriálny hydroaktívny gél na hojenie rán 15 g / 50 g",
    description:
      "Klinicky overený primárny gél s obsahom 40% medicínskeho medu, lanolínu a vitamínov C a E. Vytvára kyslé pH (3,0 – 4,5), stimuluje epitelizáciu a zaručuje bezbolestné preväzy bez chrastavenia.",
    brand: "L-Mesitran",
    category: "Zdravotnícka pomôcka triedy IIb",
    url: "https://hojimerany.sk/produkty#mesitran",
    image: "https://hojimerany.sk/images/l-mesitran.png",
    gtin13: "8717545280017",
    mpn: "P86241",
    sku: "MESITRAN-SOFT-15G",
    lowPrice: "8.89",
    highPrice: "24.90",
    priceCurrency: "EUR",
    offerCount: 6,
    offers: [
      { seller: "BENU Lekáreň", price: "9.50", url: "https://www.benulekaren.sk/l-mesitran-soft-gel-na-rany-15-g" },
      { seller: "Pilulka.sk", price: "8.99", url: "https://www.pilulka.sk/l-mesitran-soft-gel-15-g" },
      { seller: "Lekáreň v Kocke", price: "8.89", url: "https://www.lekarenvkocke.sk/l-mesitran-soft-gel-na-rany-15-g/" },
      { seller: "eTabletka", price: "24.90", url: "https://etabletka.sk/obchod/l-mesitran-soft-gel-na-hojenie-ran-50g/" },
      { seller: "Najlekáreň", price: "23.90", url: "https://www.najlekaren.eu/l-mesitran-soft-gel-na-rany-1x50-g" },
      { seller: "MojaLekáreň.sk", price: "9.20", url: "https://www.mojalekaren.sk/l-mesitran-soft-gel-na-rany-15g/" },
    ],
    aggregateRating: {
      ratingValue: "4.9",
      reviewCount: 194,
      bestRating: "5",
      worstRating: "1",
    },
    reviews: [
      {
        author: "MUDr. Zuzana K. (Dermatovenerologička)",
        datePublished: "2024-03-18",
        ratingValue: 5,
        reviewBody: "Zlatý štandard vlhkého hojenia. Výrazne stimuluje granuláciu tkaniva, zabraňuje prilepeniu gázy a tvorbe nevzhľadných jaziev.",
      },
      {
        author: "Martin B. (Overený nákup)",
        datePublished: "2024-09-05",
        ratingValue: 5,
        reviewBody: "Po popálení horúcou parou v kuchyni neskutočná úľava od bolesti. Rany sa zahojili hladko bez chrastavenia a bez jazvy.",
      },
    ],
  });

  const aqvidineSchema = generateMedicalDeviceSchema({
    name: "Aqvidine sterilné neadherentné tylové krytie na rany s jódom 9.5 × 9.5 cm",
    description:
      "Sterilný viskózový tyl s obsahom 10% PVP jódu. Zabezpečuje širokospektrálnu antiseptickú bariéru proti infekcii, neprilepuje sa k rane a umožňuje voľnú drenáž exsudátu.",
    brand: "Aqvidine",
    category: "Zdravotnícka pomôcka triedy IIb",
    url: "https://hojimerany.sk/produkty#aqvidine",
    image: "https://hojimerany.sk/images/aqvidine.png",
    gtin13: "8594165330025",
    mpn: "P99453",
    sku: "AQVIDINE-95X95-25KS",
    lowPrice: "16.20",
    highPrice: "19.90",
    priceCurrency: "EUR",
    offerCount: 5,
    offers: [
      { seller: "BENU Lekáreň", price: "18.99", url: "https://www.benulekaren.sk/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-9-5x9-5cm-25ks" },
      { seller: "Najlekáreň", price: "16.20", url: "https://www.najlekaren.eu/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-9-5-x-9-5-cm-25-ks" },
      { seller: "eTabletka", price: "16.80", url: "https://etabletka.sk/obchod/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-95-x-95cm-25ks/" },
      { seller: "Bexamed", price: "17.50", url: "https://www.bexamed.sk/p/aqvidine-krytie-s-jodom-9-5x9-5cm-25ks" },
      { seller: "SOS-Lekáreň", price: "16.90", url: "https://www.sos-lekaren.sk/aqvidine-neadherentne-krytie-na-rany-s-jodpovidonom-5x5cm-25ks" },
    ],
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: 89,
      bestRating: "5",
      worstRating: "1",
    },
    reviews: [
      {
        author: "Sestra Mgr. Katarína B. (Centrum hojenia chronických rán)",
        datePublished: "2024-06-10",
        ratingValue: 5,
        reviewBody: "Vynikajúci neadherentný tyl. Obväz pri preväzoch netrhá spodinu rany a zosvetlenie jódu presne signalizuje, kedy je potrebné krytie vymeniť.",
      },
      {
        author: "Jozef T. (Overený nákup)",
        datePublished: "2024-10-02",
        ratingValue: 5,
        reviewBody: "Výborné pri dekubitoch u imobilného príbuzného. Infekcia sa zastavila a preväzy konečne prestali byť traumatizujúce.",
      },
    ],
  });

  const productSchemas = [aqvitoxSchema, mesitranSchema, aqvidineSchema];

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 md:px-12">
      <JsonLd data={webPageSchema} />
      {productSchemas.map((schema, idx) => (
        <JsonLd key={idx} data={schema} />
      ))}

      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Úvodný prehľadný Header */}
        <header className="flex flex-col gap-3 text-left">
          <span className="w-16 h-1 bg-accent-mint" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-clinical-blue uppercase">
            Certifikované produkty na hojenie rán
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
            Moderná medicína stavia liečbu akútnych i chronických defektov na dvoch pilieroch:{" "}
            <strong>dôkladnej bezbolestnej dekontaminácii</strong> a <strong>udržiavaní vlhkého mikroprostredia</strong>.
            Nižšie nájdete podrobné informácie, presné klinické postupy aplikácie, indikácie a dôvody, prečo sú tieto
            prípravky voľbou číslo jeden pre pacientov aj lekárov.
          </p>

          {/* Rýchla navigácia na kotvy (Mobile Dropdown + Desktop Pills) */}
          <ProductQuickJump />
        </header>

        {/* =========================================================================
            PRODUKT 1: AQVITOX-D ROZTOK
           ========================================================================= */}
        <section className="flex flex-col gap-6 pt-4 border-t border-slate-200">
          {/* Základný produktový komponent */}
          <Aqvitox />

          {/* Klinický blok: Ako, kedy, kde a prečo používať Aqvitox-D */}
          <div className="flex flex-col gap-6 pt-4 border-t border-dashed border-[#085E95]/25">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#085E95]">
                Klinický aplikačný manuál
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Ako, kedy, kde a prečo používať Aqvitox-D
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Presný odborný návod pre domáce ošetrenie aj ambulantnú prax bez bolesti a podráždenia.
              </p>
            </div>

            {/* Fotografia aplikácie + Kľúčové odpovede */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Vizuál aplikácie */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/aqvitox-application.jpg"
                    alt="Aplikácia superoxidovaného roztoku Aqvitox-D rozprašovačom na ranu na predlaktí"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                    <span className="text-xs uppercase font-mono tracking-wider text-sky-300 block">
                      Krok 1 v praxi
                    </span>
                    <p className="text-xs sm:text-sm font-semibold">
                      Výdatný oplach rany prúdom roztoku bez dotyku a pálenia
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-500 flex items-center justify-between px-1">
                  <span>ŠÚKL kód: P 99452</span>
                  <span>100% biokompatibilná kyselina chlórna</span>
                </div>
              </div>

              {/* Štruktúrovaný obsah: AKO, KEDY, KDE, PREČO */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* AKO POUŽÍVAŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#085E95]">
                    <IconSparkles size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Ako používať</h4>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-decimal pl-4">
                    <li><strong>Výplach:</strong> Ranu dôkladne postriekajte rozprašovačom alebo prelejte roztokom zo vzdialenosti 10–15 cm.</li>
                    <li><strong>Debridement:</strong> Prúdom roztoku odplavte nečistoty, prach a odumretý povlak.</li>
                    <li><strong>Obklad (pri biofilme):</strong> Sterilnú gázu namočte do Aqvitoxu a priložte na ranu na 10–15 minút.</li>
                    <li><strong>Neoplachujte:</strong> Roztok sa po pôsobení neoplachuje vodou, ranu iba jemne osušte okolo okrajov.</li>
                  </ol>
                </div>

                {/* KEDY POUŽIŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#085E95]">
                    <IconClock size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Kedy použiť</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Ihneď po úraze:</strong> Prvá pomoc pri odreninách, rezoch a popáleninách.</li>
                    <li>• <strong>Pred každým preväzom:</strong> Na očistenie spodiny rany pred nanesením masti či gélu.</li>
                    <li>• <strong>Pri prilepenom obväze:</strong> Nastriekajte na starý obväz – po 2 minútach sa bezbolestne uvoľní.</li>
                    <li>• <strong>Pri chronických defektoch:</strong> Vredy predkolenia, diabetické nohy a dekubity 2× denne.</li>
                  </ul>
                </div>

                {/* KDE POUŽIŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#085E95]">
                    <IconShield size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Kde použiť</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Celé telo:</strong> Koža, citlivé záhyby, tvár, ruky aj končatiny.</li>
                    <li>• <strong>Sliznice a ústna dutina:</strong> Vhodný aj na výplachy úst (afty, zápaly ďasien) bez rizika toxicity.</li>
                    <li>• <strong>Všetky vekové kategórie:</strong> Vhodný pre novorodencov, dojčatá, deti aj seniorov s krehkou pokožkou.</li>
                  </ul>
                </div>

                {/* PREČO PRÁVE AQVITOX */}
                <div className="p-4 rounded-xl border border-[#085E95]/30 bg-[#085E95]/5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#085E95]">
                    <IconCheck size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Prečo práve Aqvitox</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>100% nepáli a neštípe:</strong> Nulový obsah alkoholu, jódu či agresívnych aldehydov.</li>
                    <li>• <strong>Likviduje bakteriálny biofilm:</strong> Pôsobí na MRSA, Pseudomonas aj plesne do 60 sekúnd.</li>
                    <li>• <strong>Neničí granulačné tkanivo:</strong> Fibroblasty a epitelové bunky zostávajú neporušené.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRODUKT 2: L-MESITRAN SOFT GÉL
           ========================================================================= */}
        <section className="flex flex-col gap-6 pt-8 border-t border-slate-200">
          {/* Základný produktový komponent */}
          <Mesitran />

          {/* Klinický blok: Ako, kedy, kde a prečo používať L-Mesitran Soft */}
          <div className="flex flex-col gap-6 pt-4 border-t border-dashed border-[#FCB900]/50">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Klinický aplikačný manuál
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Ako, kedy, kde a prečo používať L-Mesitran Soft
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Zlatý štandard vlhkého hojenia: rýchla regenerácia, žiadna tvrdá chrasta a hojenie bez jaziev.
              </p>
            </div>

            {/* Fotografia aplikácie + Kľúčové odpovede */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Vizuál aplikácie */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/mesitran-application.jpg"
                    alt="Aplikácia medicínskeho medového hydrogélu L-Mesitran Soft na sterilné krytie"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                    <span className="text-xs uppercase font-mono tracking-wider text-amber-300 block">
                      Krok 2 v praxi
                    </span>
                    <p className="text-xs sm:text-sm font-semibold">
                      Nanášanie hydroaktívneho gélu s 40% medicínskym medom na krytie
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-500 flex items-center justify-between px-1">
                  <span>ŠÚKL kód: P 86241</span>
                  <span>40% gama-sterilizovaný medicínsky med</span>
                </div>
              </div>

              {/* Štruktúrovaný obsah: AKO, KEDY, KDE, PREČO */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* AKO POUŽÍVAŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#D97706]">
                    <IconSparkles size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Ako používať</h4>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-decimal pl-4">
                    <li><strong>Vyčistite ranu:</strong> Najprv ranu dôkladne opláchnite Aqvitoxom-D.</li>
                    <li><strong>Aplikácia gélu:</strong> Naneste tenkú rovnomernú vrstvu gélu (cca 1–2 mm) priamo na spodinu rany alebo na sterilný gázový štvorec.</li>
                    <li><strong>Sekundárne krytie:</strong> Prekryte sterilným nepriľnavým krytím alebo gázou a zafixujte obväzom / náplasťou.</li>
                    <li><strong>Frekvencia preväzu:</strong> Meňte každých 24 až 48 hodín v závislosti od množstva sekrétu z rany.</li>
                  </ol>
                </div>

                {/* KEDY POUŽIŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#D97706]">
                    <IconClock size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Kedy použiť</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Popáleniny I. a II. stupňa:</strong> Po ochladení ihneď naneste na spálené miesto – zmierni pálčivú bolesť.</li>
                    <li>• <strong>Cestné a športové odreniny:</strong> Zabraňuje prischnutiu gázy a urýchľuje epitelizáciu.</li>
                    <li>• <strong>Pooperačné rany:</strong> Po vybratí stehov na prevenciu hypertrofických jaziev.</li>
                    <li>• <strong>Preležaniny a vredy:</strong> Rozpúšťa nekrózu a povlak prostredníctvom autolytického debridementu.</li>
                  </ul>
                </div>

                {/* KDE POUŽIŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#D97706]">
                    <IconShield size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Kde použiť</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Plošné defekty kdekoľvek na tele:</strong> Kolená, lakte, chrbát, predkolenia, prsty.</li>
                    <li>• <strong>Tvár a dekolt:</strong> Ideálny pri ranách na tvári, kde záleží na finálnom estetickom výsledku bez jazvy.</li>
                    <li>• <strong>Hlbšie kavity (L-Mesitran Ointment):</strong> Pri hlbokých defektoch je vhodnejšia hustejšia masť L-Mesitran Ointment.</li>
                  </ul>
                </div>

                {/* PREČO PRÁVE L-MESITRAN */}
                <div className="p-4 rounded-xl border border-[#D97706]/30 bg-[#FCB900]/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#D97706]">
                    <IconCheck size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Prečo práve L-Mesitran</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Vysoká osmolarita:</strong> Odčerpáva prebytočnú tekutinu a opuch, odplavuje baktérie a toxíny.</li>
                    <li>• <strong>Kyslé pH (3,0 – 4,5):</strong> Nepriateľské prostredie pre baktérie, ktoré zvyšuje dostupnosť kyslíka v tkanive.</li>
                    <li>• <strong>Bezbolestný preväz:</strong> Gél udržiava vlhkosť, takže krytie sa neprilepí a nestrháva nový epitel.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRODUKT 3: AQVIDINE JÓDOVÉ KRYTIE
           ========================================================================= */}
        <section className="flex flex-col gap-6 pt-8 border-t border-slate-200">
          {/* Základný produktový komponent */}
          <Aqvidine />

          {/* Klinický blok: Ako, kedy, kde a prečo používať Aqvidine */}
          <div className="flex flex-col gap-6 pt-4 border-t border-dashed border-[#F26F01]/40">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F26F01]">
                Klinický aplikačný manuál
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Ako, kedy, kde a prečo používať Aqvidine
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Sterilné mastné tylové krytie s povidón-jódom: maximálna antimikrobiálna bariéra bez prilepenia na ranu.
              </p>
            </div>

            {/* Fotografia aplikácie + Kľúčové odpovede */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Vizuál aplikácie */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/aqvidine-application.jpg"
                    alt="Aplikácia sterilného povidón-jódového tylového krytia Aqvidine na ranu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                    <span className="text-xs uppercase font-mono tracking-wider text-orange-300 block">
                      Krok 3 v praxi
                    </span>
                    <p className="text-xs sm:text-sm font-semibold">
                      Priloženie neadherentného tylového krytia s postupným uvoľňovaním jódu
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-500 flex items-center justify-between px-1">
                  <span>ŠÚKL kód: P 99453</span>
                  <span>10% PVP-jód v masťovom hydrofilnom základe</span>
                </div>
              </div>

              {/* Štruktúrovaný obsah: AKO, KEDY, KDE, PREČO */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* AKO POUŽÍVAŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#F26F01]">
                    <IconSparkles size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Ako používať</h4>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-decimal pl-4">
                    <li><strong>Príprava rany:</strong> Ranu najprv vypláchnite roztokom Aqvitox-D a okraje osušte.</li>
                    <li><strong>Odstránenie fólie:</strong> Zo sterilného obalu vyberte Aqvidine a pinzetou stiahnite ochranné fólie.</li>
                    <li><strong>Priloženie na ranu:</strong> Tylové krytie priložte priamo na spodinu rany (v prípade potreby ho možno sterilne zastrihnúť).</li>
                    <li><strong>Sekundárne krytie:</strong> Prekryte absorpčným gázovým kompresom a obviažte fixačným obväzom.</li>
                  </ol>
                </div>

                {/* KEDY POUŽIŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#F26F01]">
                    <IconClock size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Kedy použiť</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Riziko infekcie:</strong> Pri ranách s rizikom bakteriálnej kontaminácie (nečisté poranenia, hnis).</li>
                    <li>• <strong>Plošné popáleniny a pľuzgiere:</strong> Ochrana obnaženej zamše bez strhnutia nového tkaniva.</li>
                    <li>• <strong>Exsudujúce vredy predkolenia:</strong> Kde je potrebná voľná pasáž tekutiny cez otvory v tyle do gázy.</li>
                    <li>• <strong>Výmena krytia:</strong> Keď krytie stratí svoju typickú hnedú farbu a zbelie (vyčerpanie jódu).</li>
                  </ul>
                </div>

                {/* KDE POUŽIŤ */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white/70 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#F26F01]">
                    <IconShield size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Kde použiť</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Vonkajšie rany končatín a trupu:</strong> Nohy, ruky, odreniny, popáleniny.</li>
                    <li>• <strong>Ambulantná a chirurgická prax:</strong> Pooperačné rany, incízie, odberové plochy po transplantácii kože.</li>
                    <li>• <strong>Kontraindikácie:</strong> Nepoužívajte pri známej alergii na jód, poruchách štítnej žľazy a u tehotných žien.</li>
                  </ul>
                </div>

                {/* PREČO PRÁVE AQVIDINE */}
                <div className="p-4 rounded-xl border border-[#F26F01]/30 bg-[#F26F01]/5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#F26F01]">
                    <IconCheck size={18} className="shrink-0" />
                    <h4 className="font-bold text-sm uppercase tracking-wide">Prečo práve Aqvidine</h4>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>• <strong>Neadherentný viskózový tyl:</strong> Masťový základ garantuje, že krytie neprischne k rane.</li>
                    <li>• <strong>Postupné uvoľňovanie PVP jódu:</strong> Dlhodobý baktericídny účinok bez dráždenia tkaniva.</li>
                    <li>• <strong>Vizuálny indikátor účinku:</strong> Strata hnedej farby presne signalizuje, kedy je čas na výmenu.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            KLINICKÝ KOMBINAČNÝ PROTOKOL & POROVNANIE
           ========================================================================= */}
        <section id="protokol" className="flex flex-col gap-6 pt-8 border-t border-slate-200 scroll-mt-24">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue">
              Klinický algoritmus hojenia
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-clinical-blue">
              Ktorý produkt zvoliť podľa typu a štádia rany?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 max-w-3xl">
              Jednotlivé produkty sa vzájomne ideálne dopĺňajú a pokrývajú celý liečebný cyklus od počiatočného vyčistenia až po finálnu epitelizáciu.
            </p>
          </div>

          {/* Porovnávacia tabuľka */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <th className="p-3.5 sm:p-4">Klinická situácia / Typ rany</th>
                  <th className="p-3.5 sm:p-4 text-[#085E95]">1. Krok: Výplach</th>
                  <th className="p-3.5 sm:p-4 text-[#D97706]">2. Krok: Vlhké hojenie</th>
                  <th className="p-3.5 sm:p-4 text-[#F26F01]">3. Krok: Bariéra / Krytie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/75 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                    Čerstvá odrenina / rezná rana
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>Aqvitox-D</strong> (oplach 30–60 sekúnd)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>L-Mesitran Soft</strong> (tenká vrstva)
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-500">
                    Bežná sterilná gáza / náplasť
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/75 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                    Popálenina I. a II. stupňa
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>Aqvitox-D</strong> (chladivý obklad 10 min)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>L-Mesitran Soft</strong> (hrubšia vrstva gélu)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>Aqvidine</strong> (pri riziku infekcie)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/75 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                    Infikovaná alebo hnisajúca rana
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>Aqvitox-D</strong> (výplach + mechanický oplach)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>L-Mesitran Soft</strong> (osmóza & acidifikácia)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>Aqvidine tyl</strong> (antiseptická bariéra)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/75 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900">
                    Chronický vred predkolenia / dekubit
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>Aqvitox-D</strong> (obklad 15 min na biofilm)
                  </td>
                  <td className="p-3.5 sm:p-4">
                    <strong>L-Mesitran Soft / Ointment</strong>
                  </td>
                  <td className="p-3.5 sm:p-4">
                    Savé sekundárne krytie s bandážou
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Navigácia späť na interaktívny rozhodovací strom */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-clinical-blue/10 via-accent-mint/15 to-transparent border border-clinical-blue/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h4 className="font-bold text-base sm:text-lg text-clinical-blue">
                Nie ste si istí, aký prípravok je najvhodnejší pre vašu ranu?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Spustite náš interaktívny klinický rozhodovací strom na domovskej stránke (triage).
              </p>
            </div>
            <Link
              href="/"
              className="shrink-0 px-6 py-2.5 bg-clinical-blue text-white text-sm font-bold rounded-full hover:bg-clinical-blue/90 transition-colors shadow-sm"
            >
              Spustiť rozhodovací strom →
            </Link>
          </div>
        </section>

        {/* E-E-A-T & Regulačné upozornenie */}
        <footer className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Distribútor v Slovenskej republike: <strong>LERAM Pharmaceuticals sk s. r. o.</strong> Všetky produkty sú
            certifikované zdravotnícke pomôcky triedy IIb podľa nariadenia MDR (EÚ) 2017/745.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="font-mono">CE 2274 / CE 0482</span>
            <span>ŠÚKL registrované</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
