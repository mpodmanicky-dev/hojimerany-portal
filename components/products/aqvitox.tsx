"use client";

import Image from "next/image";
import { useState } from "react";
import { IconCheck } from "@/components/ui/Icons";
import PharmacyModal from "@/components/ui/PharmacyModal";
import { trackPharmacyModalOpen, trackRegulatoryDocClick } from "@/lib/analytics";

const ADC_SPC_URL = "https://www.adc.sk/databazy/produkty/detail/aqvitox-d-roztok-483600.html";
const ADC_PIL_URL = "https://www.adc.sk/databazy/produkty/detail/aqvitox-d-roztok-483600.html";

export default function Aqvitox() {
  const [isPharmacyModalOpen, setIsPharmacyModalOpen] = useState(false);

  const handleOpenPharmacies = () => {
    trackPharmacyModalOpen("aqvitox", "Aqvitox-D roztok");
    setIsPharmacyModalOpen(true);
  };

  const handleRegulatoryClick = (docType: "spc" | "pil", url: string) => {
    trackRegulatoryDocClick("aqvitox", docType, url);
  };

  return (
    <>
      <div id="aqvitox" className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 py-8 scroll-mt-24">
        {/* Ľavá strana: Čistý obrázok bez pozadia + registrácia */}
        <div className="w-full lg:w-5/12 flex flex-col items-center justify-center">
          <Image
            src="/images/aqvitox.png"
            alt="Aqvitox-D superoxidovaný elektrolyzovaný roztok na čistenie rán a likvidáciu biofilmu"
            width={600}
            height={600}
            priority
            className="w-full max-w-sm h-auto object-contain"
          />
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#085E95]/10 text-[#085E95] font-semibold">
              ŠÚKL: P 99452
            </span>
            <span className="px-3 py-1 rounded-full bg-[#085E95]/10 text-[#085E95] font-semibold">
              ADC: 8594165330018
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">
              MDR trieda IIb
            </span>
          </div>
        </div>

        {/* Pravá strana: Obsah, parametre, indikácie a SEO */}
        <div className="w-full lg:w-7/12 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#085E95]">
              Krok 1: Výplach, mechanický debridement a likvidácia biofilmu
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#085E95] font-extrabold tracking-tight">
              Aqvitox-D roztok
            </h2>
            <p className="text-base sm:text-lg font-semibold text-slate-800">
              Superoxidovaný roztok na bezbolestné čistenie rán bez pálenia (kyselina chlórna HClO)
            </p>
          </div>

          <p className="text-base text-slate-700 leading-relaxed">
            Aqvitox-D je elektrochemicky aktivovaný superoxidovaný roztok s neutrálnym pH určený na
            bezbolestné ošetrenie, oplach a dezinfekciu akútnych aj chronických poranení. Účinnou látkou
            je kyselina chlórna (HClO) – telu vlastná molekula, ktorú biele krvinky využívajú na likvidáciu
            patogénov. <strong>100% neštípe a nepáli</strong>, nepoškodzuje novovznikajúce bunky a likviduje
            odolný mikrobiálny biofilm, ktorý blokuje prirodzené uzatvorenie rany.
          </p>

          {/* Long-tail SEO zoznam indikácií */}
          <div className="flex flex-col gap-2.5 pt-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#085E95]">
              Kedy siahnuť po Aqvitoxe (Hlavné indikácie):
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#085E95] shrink-0 mt-0.5" />
                <span><strong>Deti a citliví pacienti:</strong> Bezbolestné čistenie odrenín a rezných rán bez sĺz.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#085E95] shrink-0 mt-0.5" />
                <span><strong>Popáleniny I. a II. stupňa:</strong> Chladivý prvotný výplach bez dráždenia tkaniva.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#085E95] shrink-0 mt-0.5" />
                <span><strong>Bércové vredy a dekubity:</strong> 15-minútový obklad na rozpustenie biofilmu a povlakov.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#085E95] shrink-0 mt-0.5" />
                <span><strong>Prischuté obväzy:</strong> Uvoľnenie gázy bez strhnutia nového epitelu a krvácania.</span>
              </li>
            </ul>
          </div>

          {/* Dátové špecifikácie (Quick specs) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600 border-t border-slate-200">
            <div>
              <span className="font-bold text-slate-800 block">Účinná zložka:</span>
              <span>Kyselina chlórna (HClO), ozón, voda</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 block">Dostupné balenia:</span>
              <span>500 ml sprej, 500 ml fľaša, 1000 ml</span>
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
                className="px-4 py-2 border border-[#085E95] text-[#085E95] text-xs font-bold rounded-full hover:bg-[#085E95]/15 transition-colors duration-200 inline-flex items-center gap-1"
                title="Otvoriť klinické SPC na ADC.sk"
              >
                Klinické SPC (ADC) ↗
              </a>
              <a
                href={ADC_PIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleRegulatoryClick("pil", ADC_PIL_URL)}
                className="px-4 py-2 border border-[#085E95] text-[#085E95] text-xs font-bold rounded-full hover:bg-[#085E95]/15 transition-colors duration-200 inline-flex items-center gap-1"
                title="Otvoriť príbalový leták PIL na ADC.sk"
              >
                Príbalový leták PIL (ADC) ↗
              </a>
            </div>

            <button
              type="button"
              onClick={handleOpenPharmacies}
              className="px-6 py-2.5 bg-[#085E95] text-white text-sm font-bold rounded-full hover:bg-[#064a75] transition-colors duration-200 shadow-sm cursor-pointer"
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
        productKey="aqvitox"
        sourceContext="product_component_aqvitox"
      />
    </>
  );
}
