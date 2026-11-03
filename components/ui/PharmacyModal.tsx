"use client";

import { useEffect } from "react";
import {
  PHARMACY_AQVITOX_OFFERS,
  PHARMACY_MESITRAN_OFFERS,
  appendUtm,
} from "@/constants/pharmacy-mesitran";
import { trackPharmacyClick, trackEvent } from "@/lib/analytics";
import { IconClose, IconCart, IconArrowRight } from "@/components/ui/Icons";

export interface PharmacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  productKey: "aqvitox" | "mesitran" | null;
  sourceContext?: string; // e.g. "hojenie_page", "triage", "products"
}

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

  const isAqvitox = productKey === "aqvitox";
  const title = isAqvitox
    ? "Kúpiť Aqvitox-D v online lekárňach"
    : "Kúpiť L-Mesitran v online lekárňach";
  const subtitle = isAqvitox
    ? "Vyberte si overenú slovenskú lekáreň so skladovou zásobou roztoku na bezbolestný výplach a čistenie biofilmu:"
    : "Vyberte si overenú slovenskú lekáreň so skladovou zásobou gélu alebo masti s medicínskym medom:";

  const pharmacies = isAqvitox
    ? PHARMACY_AQVITOX_OFFERS
    : PHARMACY_MESITRAN_OFFERS;

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-clinical-blue/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-accent-mint/40 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-accent-mint/20 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-mint/20 flex items-center justify-center text-accent-teal shrink-0">
              <IconCart size={20} />
            </div>
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-clinical-blue">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-clinical-blue/70">
                {subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-clinical-blue/5 hover:bg-clinical-blue/15 text-clinical-blue flex items-center justify-center transition-colors duration-200 shrink-0"
            aria-label="Zatvoriť okno"
          >
            <IconClose size={20} />
          </button>
        </div>

        {/* Pharmacy list */}
        <div className="flex flex-col gap-3">
          {pharmacies.map((pharmacy) => {
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
                className="group p-4 rounded-2xl border border-accent-mint/40 bg-white hover:border-accent-teal hover:bg-accent-mint/10 transition-colors duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xs"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-clinical-blue">
                      {pharmacy.name}
                    </span>
                    {pharmacy.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent-mint/30 text-clinical-blue">
                        {pharmacy.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-clinical-blue/75 mt-0.5">
                    {pharmacy.note}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-teal group-hover:text-clinical-blue transition-colors duration-200 shrink-0 self-end sm:self-auto">
                  <span>Prejsť do lekárne</span>
                  <IconArrowRight size={14} />
                </span>
              </a>
            );
          })}
        </div>

        {/* Modal footer note */}
        <div className="mt-5 pt-3 border-t border-accent-mint/20 text-[11px] text-clinical-blue/60 text-center">
          Odkaz vás presmeruje priamo na detail produktu v e-shope vybranej lekárne s garanciou dostupnosti.
        </div>
      </div>
    </div>
  );
}

