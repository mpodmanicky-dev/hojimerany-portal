"use client";

import { useState } from "react";
import { DetailedProduct } from "@/constants/products";
import { appendUtm } from "@/constants/pharmacy-mesitran";
import { trackPharmacyClick, trackEvent } from "@/lib/analytics";
import { SweepButton } from "@/components/ui/SweepButton";

interface ProductCardProps {
  product: DetailedProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showPharmacies, setShowPharmacies] = useState(false);

  const handlePharmacyClick = (pharmacyName: string, directUrl: string) => {
    trackPharmacyClick(pharmacyName, product.id, directUrl);
  };

  return (
    <article
      id={product.id}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-accent-mint/30 flex flex-col gap-6"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-accent-mint/20 pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-teal">
            {product.role}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-clinical-blue tracking-tight">
            {product.name}
          </h2>
        </div>
        <div className="text-xs font-mono text-clinical-blue/60 self-start sm:self-auto">
          {product.ceCertification}
        </div>
      </div>

      {/* Tagline & Short Description */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-clinical-blue text-base sm:text-lg">
          {product.tagline}
        </p>
        <p className="text-sm sm:text-base text-clinical-blue/80 leading-relaxed">
          {product.fullDescription}
        </p>
      </div>

      {/* Key Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-accent-mint/10 rounded-2xl p-5 text-sm text-clinical-blue/90">
        <div>
          <h3 className="font-bold text-clinical-blue mb-1">Účinné zloženie:</h3>
          <p className="text-clinical-blue/80 leading-relaxed">
            {product.activeIngredients}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-clinical-blue mb-1">Mechanizmus účinku:</h3>
          <p className="text-clinical-blue/80 leading-relaxed">
            {product.mechanismOfAction}
          </p>
        </div>
      </div>

      {/* Indikácie */}
      <div>
        <h3 className="font-bold text-clinical-blue text-sm uppercase tracking-wider mb-2">
          Kedy produkt použiť (Indikácie):
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-clinical-blue/80">
          {product.indications.map((ind, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-accent-teal font-bold select-none">•</span>
              <span>{ind}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Klinické výhody */}
      <div>
        <h3 className="font-bold text-clinical-blue text-sm uppercase tracking-wider mb-2">
          Klinické výhody a prednosti:
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-clinical-blue/80">
          {product.clinicalHighlights.map((hl, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-accent-mint font-bold select-none">✓</span>
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ako používať */}
      <div className="border-t border-accent-mint/20 pt-4">
        <h3 className="font-bold text-clinical-blue text-sm uppercase tracking-wider mb-2">
          Spôsob aplikácie:
        </h3>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-clinical-blue/80">
          {product.howToUse.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Balenia & CTA Kúpiť v lekárni */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-accent-mint/20">
        <div className="text-xs text-clinical-blue/70">
          <span className="font-semibold text-clinical-blue">Dostupné balenia:</span>{" "}
          {product.packageSizes.join(", ")}
        </div>

        <SweepButton
          variant="solid-clinical"
          onClick={() => {
            setShowPharmacies(!showPharmacies);
            trackEvent("triage_pharmacy_modal_open", {
              product_id: product.id,
              product_name: product.name,
            });
          }}
          className="text-xs sm:text-sm py-3 px-6"
        >
          {showPharmacies ? "Skryť lekárne" : "Kde kúpiť v lekárňach"}
        </SweepButton>
      </div>

      {/* Rozbaľovací zoznam lekární s UTM parametrami */}
      {showPharmacies && (
        <div className="mt-2 p-5 bg-background rounded-2xl border border-accent-mint/40 flex flex-col gap-3">
          <h4 className="font-bold text-clinical-blue text-sm">
            Vyberte si overenú online lekáreň so skladovou zásobou:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.pharmacies.map((pharmacy) => {
              const urlWithUtm = appendUtm(pharmacy.directUrl, {
                source: "hojimerany",
                medium: "products_page",
                campaign: "pharmacy_outbound",
                content: `${product.id}_${pharmacy.id}`,
              });

              return (
                <a
                  key={pharmacy.id}
                  href={urlWithUtm}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handlePharmacyClick(pharmacy.name, urlWithUtm)}
                  className="rounded-2xl p-3 border border-accent-mint/40 bg-white hover:border-accent-teal hover:bg-accent-mint/10 transition-colors duration-200 flex flex-col justify-between gap-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-clinical-blue text-sm">
                      {pharmacy.name}
                    </span>
                    {pharmacy.badge && (
                      <span className="text-[10px] uppercase font-bold text-accent-teal">
                        {pharmacy.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-clinical-blue/70 line-clamp-2">
                    {pharmacy.note}
                  </p>
                  <span className="text-xs font-semibold text-accent-teal">
                    Prejsť na produkt
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}

