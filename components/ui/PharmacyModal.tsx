"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  PHARMACY_AQVITOX_OFFERS,
  PHARMACY_MESITRAN_OFFERS,
  PHARMACY_AQVIDINE_OFFERS,
  appendUtm,
} from "@/constants/pharmacy-mesitran";
import { trackPharmacyClick, trackEvent } from "@/lib/analytics";
import { IconClose, IconCart, IconArrowRight } from "@/components/ui/Icons";

export interface PharmacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  productKey?: "aqvitox" | "mesitran" | "aqvidine" | null;
  sourceContext?: string; // e.g. "hojenie_page", "triage", "products"
}

const PRODUCT_THEMES = {
  aqvitox: {
    name: "Aqvitox-D",
    image: "/images/aqvitox.png",
    title: "Kúpiť Aqvitox-D v online lekárňach",
    subtitle: "Overené slovenské lekárne so skladovou zásobou roztoku na bezbolestný výplach rán a likvidáciu biofilmu:",
    pharmacies: PHARMACY_AQVITOX_OFFERS,
    titleClass: "text-[#085E95]",
    borderModalClass: "border-[#085E95]/30",
    badgeBgClass: "bg-[#085E95]/10 text-[#085E95]",
    iconCircleClass: "bg-[#085E95]/10 text-[#085E95]",
    cardBorderHover: "hover:border-[#085E95] hover:bg-[#085E95]/5",
    linkTextClass: "text-[#085E95] group-hover:text-[#064a75]",
    dividerClass: "border-[#085E95]/20",
  },
  mesitran: {
    name: "L-Mesitran",
    image: "/images/l-mesitran.png",
    title: "Kúpiť L-Mesitran v online lekárňach",
    subtitle: "Overené slovenské lekárne so skladovou zásobou gélu a masti s 40% medicínskym medom na popáleniny a rany:",
    pharmacies: PHARMACY_MESITRAN_OFFERS,
    titleClass: "text-[#D97706]",
    borderModalClass: "border-[#FCB900]/40",
    badgeBgClass: "bg-[#FCB900]/20 text-[#92400E]",
    iconCircleClass: "bg-[#FCB900]/20 text-[#D97706]",
    cardBorderHover: "hover:border-[#FCB900] hover:bg-[#FCB900]/10",
    linkTextClass: "text-[#D97706] group-hover:text-[#B45309]",
    dividerClass: "border-[#FCB900]/30",
  },
  aqvidine: {
    name: "Aqvidine",
    image: "/images/aqvidine.png",
    title: "Kúpiť Aqvidine v online lekárňach",
    subtitle: "Overené slovenské lekárne so skladovou zásobou sterilného neadherentného tylového krytia s PVP jódom:",
    pharmacies: PHARMACY_AQVIDINE_OFFERS,
    titleClass: "text-[#F26F01]",
    borderModalClass: "border-[#F26F01]/30",
    badgeBgClass: "bg-[#F26F01]/15 text-[#C25700]",
    iconCircleClass: "bg-[#F26F01]/10 text-[#F26F01]",
    cardBorderHover: "hover:border-[#F26F01] hover:bg-[#F26F01]/5",
    linkTextClass: "text-[#F26F01] group-hover:text-[#c95b00]",
    dividerClass: "border-[#F26F01]/20",
  },
};

export default function PharmacyModal({
  isOpen,
  onClose,
  productKey,
  sourceContext = "portal",
}: PharmacyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
        trackEvent("triage_pharmacy_modal_close", { context: sourceContext });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, sourceContext]);

  if (!isOpen || !productKey) return null;

  const currentTheme = PRODUCT_THEMES[productKey];
  if (!currentTheme) return null;

  const handleOutboundClick = (pharmacyName: string, directUrl: string) => {
    trackPharmacyClick(pharmacyName, productKey, directUrl);
  };

  const handleClose = () => {
    onClose();
    trackEvent("triage_pharmacy_modal_close", {
      product_key: productKey,
      context: sourceContext,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border ${currentTheme.borderModalClass} max-h-[90vh] overflow-y-auto`}
      >
        {/* Header so skutočným produktovým vizuálom a signatúrnou farbou */}
        <div className={`flex items-start justify-between gap-4 border-b ${currentTheme.dividerClass} pb-4 mb-5`}>
          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-2xl ${currentTheme.iconCircleClass} p-1.5 flex items-center justify-center shrink-0`}>
              <Image
                src={currentTheme.image}
                alt={currentTheme.name}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className={`font-extrabold text-xl sm:text-2xl ${currentTheme.titleClass} tracking-tight`}>
                {currentTheme.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                {currentTheme.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors duration-200 shrink-0 cursor-pointer"
            aria-label="Zatvoriť okno"
          >
            <IconClose size={20} />
          </button>
        </div>

        {/* Pharmacy list */}
        <div className="flex flex-col gap-3">
          {currentTheme.pharmacies.map((pharmacy) => {
            const urlWithUtm = appendUtm(pharmacy.directUrl, {
              source: "hojimerany",
              medium: sourceContext,
              campaign: "pharmacy_outbound",
              content: `${productKey}_${pharmacy.id}`,
            });

            return (
              <a
                key={pharmacy.id}
                href={urlWithUtm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOutboundClick(pharmacy.name, urlWithUtm)}
                className={`group p-4 rounded-2xl border border-slate-200 bg-white ${currentTheme.cardBorderHover} transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xs`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-slate-900 group-hover:text-slate-950">
                      {pharmacy.name}
                    </span>
                    {pharmacy.badge && (
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${currentTheme.badgeBgClass}`}>
                        {pharmacy.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {pharmacy.note}
                  </span>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${currentTheme.linkTextClass} transition-colors duration-200 shrink-0 self-end sm:self-auto`}>
                  <span>Prejsť do lekárne</span>
                  <IconArrowRight size={14} />
                </span>
              </a>
            );
          })}
        </div>

        {/* Modal footer note */}
        <div className={`mt-5 pt-3 border-t ${currentTheme.dividerClass} text-[11px] text-slate-500 text-center`}>
          Odkaz vás presmeruje priamo na detail produktu v e-shope vybranej lekárne s garanciou dostupnosti.
        </div>
      </div>
    </div>
  );
}
