"use client";

import Image from "next/image";
import { useState } from "react";
import { IconCheck } from "@/components/ui/Icons";
import PharmacyModal from "@/components/ui/PharmacyModal";
import { trackPharmacyModalOpen, trackRegulatoryDocClick } from "@/lib/analytics";

const ADC_SPC_URL = "https://www.adc.sk/databazy/produkty/detail/aqvidine-933036.html";
const ADC_PIL_URL = "https://www.adc.sk/databazy/produkty/detail/aqvidine-933036.html";

export default function Aqvidine() {
  const [isPharmacyModalOpen, setIsPharmacyModalOpen] = useState(false);

  const handleOpenPharmacies = () => {
    trackPharmacyModalOpen("aqvidine", "Aqvidine tylové krytie");
    setIsPharmacyModalOpen(true);
  };

  const handleRegulatoryClick = (docType: "spc" | "pil", url: string) => {
    trackRegulatoryDocClick("aqvidine", docType, url);
  };

  return (
    <>
      <div id="aqvidine" className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 py-8 scroll-mt-24">
        {/* Ľavá strana: Čistý obrázok bez pozadia + registrácia */}
        <div className="w-full lg:w-5/12 flex flex-col items-center justify-center">
          <Image
            src="/images/aqvidine.png"
            alt="Aqvidine sterilné neadherentné antiseptické tylové krytie na rany s jódom"
            width={600}
            height={600}
            priority
            className="w-full max-w-sm h-auto object-contain"
          />
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#F26F01]/10 text-[#C25700] font-semibold">
              ŠÚKL: P 99453
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F26F01]/10 text-[#C25700] font-semibold">
              ADC: 8594165330025
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">
              MDR trieda IIb
            </span>
          </div>
        </div>

        {/* Pravá strana: Obsah, parametre, indikácie a SEO */}
        <div className="w-full lg:w-7/12 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F26F01]">
              Krok 3: Antiseptická bariéra, ochrana pred infekciou a neadherentný tyl
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#F26F01] font-extrabold tracking-tight">
              Aqvidine jódové krytie
            </h2>
            <p className="text-base sm:text-lg font-semibold text-slate-800">
              Sterilné neadherentné antiseptické tylové krytie s obsahom 10% PVP jódu
            </p>
          </div>

          <p className="text-base text-slate-700 leading-relaxed">
            Aqvidine je sterilné neadherentné antiseptické krytie na rany vyrobené z viskózového tylu
            napusteného masťou s obsahom povidón-jódu. Poskytuje spoľahlivú širokospektrálnu antimikrobiálnu
            ochranu pred baktériami, kvasinkami aj spórami. <strong>Neprilepuje sa na spodinu rany</strong>,
            umožňuje voľnú drenáž exsudátu do sekundárneho savého krytia a garantuje atraumatický, bezbolestný
            preväz bez poškodenia novovznikajúceho epitelu.
          </p>

          {/* Long-tail SEO zoznam indikácií */}
          <div className="flex flex-col gap-2.5 pt-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26F01]">
              Kedy siahnuť po Aqvidine (Hlavné indikácie):
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#F26F01] shrink-0 mt-0.5" />
                <span><strong>Infikované rany:</strong> Lokálna liečba a prevencia infekcie pri hnisajúcich ranách.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#F26F01] shrink-0 mt-0.5" />
                <span><strong>Povrchové popáleniny:</strong> Ochrana obnaženej kože a pľuzgierov pred kolonizáciou baktériami.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#F26F01] shrink-0 mt-0.5" />
                <span><strong>Neadherentný tyl:</strong> Žiadne zarastanie do rany – bezbolestné sňatie obväzu bez krvácania.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#F26F01] shrink-0 mt-0.5" />
                <span><strong>Farebný indikátor:</strong> Postupná strata sfarbenia signalizuje potrebu výmeny krytia.</span>
              </li>
            </ul>
          </div>

          {/* Dátové špecifikácie (Quick specs) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600 border-t border-slate-200">
            <div>
              <span className="font-bold text-slate-800 block">Účinná zložka:</span>
              <span>10% Povidón-jód (PVP jód, 1% voľný jód)</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 block">Dostupné balenia:</span>
              <span>5 × 5 cm, 9,5 × 9,5 cm (sterilné krytia)</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 block">Distribútor v SR:</span>
              <span>LERAM Pharmaceuticals sk s. r. o.</span>
            </div>
          </div>

          {/* Akčné tlačidlá: SPC a PIL priamo na ADC + Kde nájdem s modálom */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-200">
            <div className="flex flex-row gap-2.5 items-center">
              <a
                href={ADC_SPC_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleRegulatoryClick("spc", ADC_SPC_URL)}
                className="px-4 py-2 border border-[#F26F01] text-[#F26F01] text-xs font-bold rounded-full hover:bg-[#F26F01]/15 transition-colors duration-200 inline-flex items-center gap-1"
                title="Otvoriť klinické SPC na ADC.sk"
              >
                Klinické SPC (ADC) ↗
              </a>
              <a
                href={ADC_PIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleRegulatoryClick("pil", ADC_PIL_URL)}
                className="px-4 py-2 border border-[#F26F01] text-[#F26F01] text-xs font-bold rounded-full hover:bg-[#F26F01]/15 transition-colors duration-200 inline-flex items-center gap-1"
                title="Otvoriť príbalový leták PIL na ADC.sk"
              >
                Príbalový leták PIL (ADC) ↗
              </a>
            </div>

            <button
              type="button"
              onClick={handleOpenPharmacies}
              className="px-6 py-2.5 bg-[#F26F01] text-white text-sm font-bold rounded-full hover:bg-[#c95b00] transition-colors duration-200 shadow-sm cursor-pointer"
            >
              Kde nájdem v lekárňach →
            </button>
          </div>
        </div>
      </div>

      {/* Modal s partnerskými lekárňami s Google Analytics trackingom */}
      <PharmacyModal
        isOpen={isPharmacyModalOpen}
        onClose={() => setIsPharmacyModalOpen(false)}
        productKey="aqvidine"
        sourceContext="product_component_aqvidine"
      />
    </>
  );
}
