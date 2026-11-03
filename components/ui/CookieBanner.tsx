"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconShield, IconCheck, IconClose } from "@/components/ui/Icons";

type ConsentType = "all" | "necessary" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentType>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("hojimerany_cookie_consent");
      if (stored === "all" || stored === "necessary") {
        setConsent(stored);
        setIsOpen(false);
        updateGtagConsent(stored === "all");
      } else {
        // Show after a brief delay so it doesn't jarringly block the initial paint
        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage disabled or private browsing
      setIsOpen(true);
    }
  }, []);

  const updateGtagConsent = (granted: boolean) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
        ad_storage: granted ? "granted" : "denied",
      });
    }
  };

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("hojimerany_cookie_consent", "all");
    } catch {}
    setConsent("all");
    setIsOpen(false);
    updateGtagConsent(true);
  };

  const handleAcceptNecessary = () => {
    try {
      localStorage.setItem("hojimerany_cookie_consent", "necessary");
    } catch {}
    setConsent("necessary");
    setIsOpen(false);
    updateGtagConsent(false);
  };

  if (!isOpen) {
    return (
      /* Discreet button in corner to reopen settings anytime */
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-white/90 text-clinical-blue hover:text-accent-teal border border-accent-mint/40 shadow-md text-xs font-semibold backdrop-blur-xs transition-colors duration-200 flex items-center gap-1.5 opacity-70 hover:opacity-100"
        aria-label="Nastavenia cookies"
      >
        <IconShield size={14} />
        <span className="hidden sm:inline">Cookies</span>
      </button>
    );
  }

  return (
    <div
      role="region"
      aria-label="Informácie o súboroch cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-accent-mint/40 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-4 text-clinical-blue">
        {/* Main message */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 max-w-3xl">
            <div className="w-9 h-9 rounded-full bg-accent-mint/20 text-accent-teal flex items-center justify-center shrink-0 mt-0.5">
              <IconShield size={18} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm sm:text-base text-clinical-blue">
                Ochrana osobných údajov a súbory cookies
              </h3>
              <p className="text-xs sm:text-sm text-clinical-blue/80 leading-relaxed">
                Tento web používa nevyhnutné súbory cookies pre správne fungovanie
                a anonymné analytické cookies (Google Analytics) pre meranie
                návštevnosti a vylepšovanie sprievodcu ošetrením rán podľa Zákona
                č. 452/2021 Z. z. a GDPR.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs font-semibold text-clinical-blue/70 hover:text-clinical-blue underline px-2 py-2 transition-colors duration-200"
            >
              {showDetails ? "Menej informácií" : "Prispôsobiť"}
            </button>
            <button
              onClick={handleAcceptNecessary}
              className="rounded-full px-4 py-2 border border-clinical-blue/30 text-clinical-blue hover:bg-clinical-blue/5 text-xs font-bold transition-colors duration-200"
            >
              Iba nevyhnutné
            </button>
            <button
              onClick={handleAcceptAll}
              className="rounded-full px-5 py-2 bg-clinical-blue text-white hover:bg-clinical-blue/90 text-xs font-bold shadow-sm transition-colors duration-200"
            >
              Prijať všetky
            </button>
          </div>
        </div>

        {/* Detailed breakdown when 'Prispôsobiť' is clicked */}
        {showDetails && (
          <div className="pt-3 border-t border-accent-mint/20 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-background rounded-xl border border-accent-mint/30 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-clinical-blue">1. Nevyhnutné cookies</span>
                <span className="text-[10px] font-mono text-accent-teal uppercase font-bold">Vždy aktívne</span>
              </div>
              <p className="text-clinical-blue/75 leading-relaxed">
                Potrebné pre zabezpečenie základných funkcií, uloženie vášho výberu v sprievodcovi a súhlasu s cookies. Bez týchto cookies web nemôže správne fungovať.
              </p>
            </div>
            <div className="p-3 bg-background rounded-xl border border-accent-mint/30 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-clinical-blue">2. Analytické cookies (GA4)</span>
                <span className="text-[10px] font-mono text-clinical-blue/60 uppercase font-bold">Voliteľné</span>
              </div>
              <p className="text-clinical-blue/75 leading-relaxed">
                Pomáhajú nám pochopiť, ktoré návody a postupy ošetrenia ľudia najčastejšie hľadajú (anonymizovaná IP adresa cez Google Analytics 4).
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

