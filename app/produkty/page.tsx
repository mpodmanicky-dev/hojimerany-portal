import type { Metadata } from "next";
import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import JsonLd from "@/components/seo/JsonLd";
import { DETAILED_PRODUCTS } from "@/constants/products";
import { generateMedicalWebPageSchema, generateMedicalDeviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Produkty na moderné hojenie rán a dezinfekciu | Hojímerany.sk",
  description:
    "Prehľad certifikovaných zdravotníckych pomôcok: Aqvitox-D roztok (bezbolestný výplach bez pálenia), L-Mesitran Soft (medicínsky med na popáleniny a rany) a L-Mesitran Ointment.",
  keywords: [
    "Aqvitox-D roztok",
    "L-Mesitran Soft gél",
    "L-Mesitran Ointment masť",
    "medicínsky med na rany",
    "superoxidovaný roztok",
    "hojenie popálenín gél",
    "kde kúpiť Mesitran",
  ],
  alternates: {
    canonical: "https://hojimerany.sk/produkty",
  },
};

export default function ProduktyPage() {
  const webPageSchema = generateMedicalWebPageSchema({
    title: "Katalóg zdravotníckych pomôcok na vlhké hojenie a dezinfekciu rán",
    description:
      "Podrobné informácie, indikácie, zloženie a priame lekárenské odkazy pre produkty Aqvitox-D a L-Mesitran.",
    url: "https://hojimerany.sk/produkty",
  });

  const productSchemas = DETAILED_PRODUCTS.map((prod) =>
    generateMedicalDeviceSchema({
      name: prod.name,
      description: prod.shortDescription,
      brand: prod.id.includes("aqvitox") ? "Aqvitox" : "L-Mesitran",
      category: prod.category,
      url: `https://hojimerany.sk/produkty#${prod.id}`,
    })
  );

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 md:px-12">
      <JsonLd data={webPageSchema} />
      {productSchemas.map((schema, idx) => (
        <JsonLd key={idx} data={schema} />
      ))}

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <header className="flex flex-col gap-3 text-left">
          <span className="w-16 h-1 bg-accent-mint"></span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-clinical-blue uppercase">
            Odporúčané produkty
          </h1>
          <p className="text-base sm:text-lg text-clinical-blue/80 max-w-2xl leading-relaxed">
            Kombinácia superoxidovaného roztoku a medicínskeho medu tvorí moderný
            zlatý štandard hojenia rán v domácom aj klinickom prostredí. Bez
            pálenia, bez chrastavenia a s minimálnym rizikom vzniku jazvy.
          </p>
        </header>

        {/* Vizuálny banner */}
        <div className="relative w-full h-44 sm:h-60 rounded-3xl overflow-hidden shadow-xl border border-accent-mint/30">
          <Image
            src="/images/clinical-care.jpg"
            alt="Klinická starostlivosť a prípravky na hojenie rán"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-clinical-blue/35" />
          <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end text-white">
            <span className="text-xs uppercase font-bold tracking-wider text-accent-mint">
              Klinicky overená účinnosť
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              CE certifikované zdravotnícke pomôcky triedy IIb
            </h2>
          </div>
        </div>

        {/* 2-krokový princíp */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-accent-mint/30 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-teal">
              Krok 1: Výplach & Biofilm
            </span>
            <h2 className="text-xl font-bold text-clinical-blue">
              Aqvitox-D: Čistenie bez kompromisov
            </h2>
            <p className="text-sm text-clinical-blue/80 leading-relaxed">
              Zásadne sa vyhýbame alkoholu a jódu, ktoré pália a zabíjajú zdravé
              bunky. Aqvitox-D likviduje baktérie a mikrobiálny biofilm fyzikálno-chemickým
              rozrušením bez poškodenia epitelu.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-teal">
              Krok 2: Vlhké mikroprostredie
            </span>
            <h2 className="text-xl font-bold text-clinical-blue">
              L-Mesitran: Medicínsky med a obnova
            </h2>
            <p className="text-sm text-clinical-blue/80 leading-relaxed">
              Vlhké prostredie umožňuje novým kožným bunkám migrovať bez odporu
              tvrdej chrasty. Vysoká osmolarita a kyslé pH medicínskeho medu bránia
              infekcii a urýchľujú uzatvorenie rany.
            </p>
          </div>
        </div>

        {/* Zoznam produktov */}
        <main className="flex flex-col gap-8">
          {DETAILED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>
    </div>
  );
}

