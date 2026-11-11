"use client";

import Image from "next/image";
import { useState } from "react";
import { IconCheck } from "@/components/ui/Icons";
import PharmacyModal from "@/components/ui/PharmacyModal";
import { trackPharmacyModalOpen, trackRegulatoryDocClick } from "@/lib/analytics";

const ADC_SPC_URL = "https://www.adc.sk/databazy/produkty/detail/l-mesitran-soft-205898.html";
const ADC_PIL_URL = "https://www.adc.sk/databazy/produkty/detail/l-mesitran-soft-205898.html";

export default function Mesitran() {
  const [isPharmacyModalOpen, setIsPharmacyModalOpen] = useState(false);

  const handleOpenPharmacies = () => {
    trackPharmacyModalOpen("mesitran", "L-Mesitran Soft");
    setIsPharmacyModalOpen(true);
  };

  const handleRegulatoryClick = (docType: "spc" | "pil", url: string) => {
    trackRegulatoryDocClick("mesitran", docType, url);
  };

  return (
    <>
      <div id="mesitran" className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 py-8 scroll-mt-24">
        {/* Ľavá strana: Čistý obrázok bez pozadia + registrácia */}
        <div className="w-full lg:w-5/12 flex flex-col items-center justify-center">
          <Image
            src="/images/l-mesitran.png"
            alt="L-Mesitran Soft antibakteriálny hydroaktívny gél na hojenie rán s medicínskym medom"
            width={600}
            height={600}
            priority
            className="w-full max-w-sm h-auto object-contain"
          />
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#FCB900]/20 text-[#92400E] font-semibold">
              ŠÚKL: P 86241
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FCB900]/20 text-[#92400E] font-semibold">
              ADC: 8717545280017
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">
              MDR trieda IIb
            </span>
          </div>
        </div>

        {/* Pravá strana: Obsah, parametre, indikácie a SEO */}
        <div className="w-full lg:w-7/12 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
              Krok 2: Vlhké hojenie, autolytický debridement a obnova tkaniva
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#D97706] font-extrabold tracking-tight">
              L-Mesitran Soft gél
            </h2>
            <p className="text-base sm:text-lg font-semibold text-slate-800">
              Hydroaktívny antibakteriálny gél s 40% medicínskym medom na popáleniny a jazvy
            </p>
          </div>

          <p className="text-base text-slate-700 leading-relaxed">
            L-Mesitran Soft je klinicky overený primárny gél vyvinutý špeciálne pre moderné vlhké hojenie rán.
            Obsahuje 40% sterilizovaný medicínsky med, hypoalergénny lanolín (Medilate) a vitamíny C a E. Vytvára
            v rane kyslé pH (3,0 – 4,5), ktoré radikálne urýchľuje migráciu kožných buniek, stimuluje tvorbu ciev
            a <strong>zabraňuje vzniku nežiaducej suchej chrasty</strong>. Vysoká osmolarita odčerpáva opuch
            a zaručuje bezbolestné preväzy bez strhávania novotvorenej kože.
          </p>

          {/* Long-tail SEO zoznam indikácií */}
          <div className="flex flex-col gap-2.5 pt-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
              Kedy siahnuť po L-Mesitrane (Hlavné indikácie):
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                <span><strong>Popáleniny I. a II. stupňa:</strong> Obareniny parou, vriacou vodou a dotykom – úľava od bolesti.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                <span><strong>Cestné odreniny:</strong> Rýchle uzatvorenie plošných rán bez prilepenia krytia do spodiny rany.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                <span><strong>Pooperačné rany a jazvy:</strong> Prevencia hypertrofických jaziev po vybratí stehov.</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                <span><strong>Chronické defekty a dekubity:</strong> Autolytické odbúravanie fibrínu a eliminácia zápachu.</span>
              </li>
            </ul>
          </div>

          {/* Dátové špecifikácie (Quick specs) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600 border-t border-slate-200">
            <div>
              <span className="font-bold text-slate-800 block">Účinné zloženie:</span>
              <span>40% medicínsky med, lanolín, vit. C a E</span>
            </div>
            <div>
              <span className="font-bold text-slate-800 block">Dostupné balenia:</span>
              <span>15 g tuba, 50 g tuba, vrecúška 10 × 0,9 g</span>
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
                className="px-4 py-2 border border-[#D97706] text-[#B45309] text-xs font-bold rounded-full hover:bg-[#FCB900]/20 transition-colors duration-200 inline-flex items-center gap-1"
                title="Otvoriť klinické SPC na ADC.sk"
              >
                Klinické SPC (ADC) ↗
              </a>
              <a
                href={ADC_PIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleRegulatoryClick("pil", ADC_PIL_URL)}
                className="px-4 py-2 border border-[#D97706] text-[#B45309] text-xs font-bold rounded-full hover:bg-[#FCB900]/20 transition-colors duration-200 inline-flex items-center gap-1"
                title="Otvoriť príbalový leták PIL na ADC.sk"
              >
                Príbalový leták PIL (ADC) ↗
              </a>
            </div>

            <button
              type="button"
              onClick={handleOpenPharmacies}
              className="px-6 py-2.5 bg-[#D97706] text-white text-sm font-bold rounded-full hover:bg-[#B45309] transition-colors duration-200 shadow-sm cursor-pointer"
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
        productKey="mesitran"
        sourceContext="product_component_mesitran"
      />
    </>
  );
}
