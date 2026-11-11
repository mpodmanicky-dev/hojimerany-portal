"use client";

import { useState, useEffect } from "react";
import {
  INITIAL_STEP_ID,
  TRIAGE_RESULTS,
  TRIAGE_STEPS,
} from "@/constants/triageData";
import { TRIAGE_PRODUCTS } from "@/constants/triageProducts";
import PharmacyModal from "@/components/ui/PharmacyModal";
import { TriageOption, TriageResult, TriageStep } from "@/types/triage";
import {
  trackStepView,
  trackOptionSelect,
  trackTriageComplete,
  trackRedFlag,
  trackPharmacyModalOpen,
  trackTriageReset,
  trackEvent,
} from "@/lib/analytics";

interface HistoryEntry {
  stepId: string;
  stepTitle: string;
  selectedLabel: string;
}

export default function Triage() {
  const [currentStepId, setCurrentStepId] = useState<string>(INITIAL_STEP_ID);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [activeRedFlagReason, setActiveRedFlagReason] = useState<string | null>(null);
  const [activeResultId, setActiveResultId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [modalProduct, setModalProduct] = useState<"aqvitox" | "mesitran" | "aqvidine" | null>(null);

  const currentStep: TriageStep | undefined = TRIAGE_STEPS[currentStepId];
  const activeResult: TriageResult | undefined = activeResultId
    ? TRIAGE_RESULTS[activeResultId]
    : undefined;

  const mesitranProductId = activeResult?.productIds.find((id) => id.startsWith("mesitran")) || "mesitran-soft";
  const mesitranProduct = TRIAGE_PRODUCTS[mesitranProductId];
  const aqvitoxProduct = TRIAGE_PRODUCTS["aqvitox"];

  // Sledovanie zobrazenia kroku (Funnel Step View)
  useEffect(() => {
    if (!activeResult && !activeRedFlagReason && currentStep) {
      trackStepView(
        currentStep.stepNumber,
        currentStep.totalSteps,
        currentStep.id,
        currentStep.title,
        currentStep.category
      );
    }
  }, [currentStepId, activeResult, activeRedFlagReason]);

  const triggerStepTransition = (action: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      action();
      setIsTransitioning(false);
    }, 150);
  };

  const handleSelectOption = (option: TriageOption) => {
    if (currentStep) {
      trackOptionSelect(
        currentStep.stepNumber,
        currentStep.id,
        option.id,
        option.label,
        currentStep.category
      );
    }

    triggerStepTransition(() => {
      // 1. Red Flag branch (critical condition / doctor)
      if (option.isRedFlag && option.redFlagReason) {
        trackRedFlag(currentStep?.id || currentStepId, option.redFlagReason, currentStep?.category);
        setActiveRedFlagReason(option.redFlagReason);
        return;
      }

      // Record step in history
      if (currentStep) {
        setHistory((prev) => [
          ...prev,
          {
            stepId: currentStepId,
            stepTitle: currentStep.title,
            selectedLabel: option.label,
          },
        ]);
      }

      // 2. Result protocol reached
      if (option.resultId) {
        const result = TRIAGE_RESULTS[option.resultId];
        if (result) {
          trackTriageComplete(
            result.id,
            result.title,
            result.category,
            history.length + 1
          );
        }
        setActiveResultId(option.resultId);
        return;
      }

      // 3. Next step in decision tree
      if (option.nextStepId && TRIAGE_STEPS[option.nextStepId]) {
        setCurrentStepId(option.nextStepId);
      }
    });
  };

  const handleBack = () => {
    trackEvent("triage_step_back", {
      from_step_id: currentStepId,
      has_result: Boolean(activeResultId),
      has_red_flag: Boolean(activeRedFlagReason),
    });

    triggerStepTransition(() => {
      if (activeRedFlagReason) {
        setActiveRedFlagReason(null);
        return;
      }

      if (activeResultId) {
        setActiveResultId(null);
        return;
      }

      if (history.length === 0) return;

      const newHistory = [...history];
      const previous = newHistory.pop();
      setHistory(newHistory);

      if (previous) {
        setCurrentStepId(previous.stepId);
      }
    });
  };

  const handleReset = () => {
    trackTriageReset(currentStep?.stepNumber || 1, history.length);

    triggerStepTransition(() => {
      setCurrentStepId(INITIAL_STEP_ID);
      setHistory([]);
      setActiveRedFlagReason(null);
      setActiveResultId(null);
      setModalProduct(null);
    });
  };

  const handleOpenPharmacyModal = (product: "aqvitox" | "mesitran" | "aqvidine") => {
    const prodName =
      product === "aqvitox"
        ? "Aqvitox-D roztok"
        : product === "aqvidine"
        ? "Aqvidine jódové krytie"
        : (mesitranProduct?.name || "L-Mesitran");
    trackPharmacyModalOpen(product, prodName);
    setModalProduct(product);
  };

  const progressPercent = activeResult
    ? 100
    : activeRedFlagReason
    ? 100
    : Math.min(
        100,
        Math.round(((currentStep?.stepNumber || 1) / (currentStep?.totalSteps || 3)) * 100)
      );

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 pb-20 md:pb-0">
      {/* Kontajner s plynulým prechodom (opacity transition) a veľkorysým bielym priestorom */}
      <div
        className={`w-full transition-opacity duration-200 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* ================= STAV 1: RED FLAG URGENTNÉ VAROVANIE ================= */}
        {activeRedFlagReason && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-red-600"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">
                Bezpečnostné upozornenie
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-red-700 tracking-tight">
              Vyžaduje sa okamžité lekárske ošetrenie
            </h3>

            <div className="p-5 bg-red-50 border border-red-200 rounded-2xl text-sm text-red-950 leading-relaxed space-y-2">
              <strong className="block text-red-900 font-bold text-xs uppercase tracking-wider">
                Dôvod odporúčania lekára:
              </strong>
              <p>{activeRedFlagReason}</p>
            </div>

            <div className="p-6 bg-clinical-blue/5 border border-clinical-blue/15 rounded-2xl text-xs sm:text-sm text-clinical-blue space-y-3 leading-relaxed">
              <span className="font-bold block uppercase tracking-wider text-xs">
                Čo urobiť do príchodu lekára (Zásady prvej pomoci):
              </span>
              <ul className="list-disc list-inside space-y-1.5 text-foreground/80">
                <li>
                  <strong>Tiesňová linka:</strong> Volať 155 alebo 112 pri masívnom krvácaní, popáleninách u detí alebo rozvoji šoku.
                </li>
                <li>
                  <strong>Pri popáleninách:</strong> Len chlaďte čistou vlažnou vodou. Na ranu neaplikujte žiadne masti, krémy, vajíčka ani maslo.
                </li>
                <li>
                  <strong>Pri krvácaní:</strong> Tlačte sterilnú tkaninu priamo na ranu a končatinu zdvihnite vyššie.
                </li>
                <li>
                  <strong>Prekrytie:</strong> Priložte voľnú sterilnú gázu na ochranu pred znečistením počas prevozu.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-red-100">
              <a
                href="tel:155"
                className="py-3 px-8 bg-red-600 text-white font-bold uppercase rounded-full shadow-xl hover:bg-red-700 transition-colors duration-200 text-center text-xs tracking-wider"
              >
                Volať záchrannú službu (155)
              </a>
              <button
                type="button"
                onClick={handleBack}
                className="py-3 px-8 border border-clinical-blue/30 text-clinical-blue font-semibold rounded-full shadow-xl hover:bg-clinical-blue/10 transition-colors duration-200 text-xs tracking-wider"
              >
                ← Späť na predchádzajúci krok
              </button>
            </div>
          </div>
        )}

        {/* ================= STAV 2: VÝSLEDOK / PROTOKOL A PRODUKTY ================= */}
        {!activeRedFlagReason && activeResult && (
          <div className="flex flex-col gap-10">
            {/* Desktop progress bar integrovaný priamo v sprievodcovi */}
            <div className="hidden md:flex flex-col gap-2 pb-6 border-b border-clinical-blue/10">
              <div className="flex items-center justify-between text-xs text-clinical-blue/70 font-semibold">
                <span className="uppercase tracking-wider font-mono">
                  Vyhodnotenie sprievodcu: Klinický protokol ošetrenia
                </span>
                <span className="text-accent-teal font-bold font-mono">100% dokončené</span>
              </div>
              <div className="w-full bg-clinical-blue/10 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-accent-mint rounded-full w-full" />
              </div>
            </div>

            {/* Hlavička protokolu */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-mint"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-clinical-blue/70 font-semibold">
                  {activeResult.categoryTitle}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-clinical-blue tracking-tight leading-tight">
                {activeResult.title}
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed max-w-3xl pt-1">
                {activeResult.summary}
              </p>
            </div>

            {/* Edukatívny postup krok za krokom */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-1 bg-accent-mint rounded-full"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider text-clinical-blue">
                  Odporúčaný terapeutický postup krok za krokom:
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {activeResult.actions.map((act, idx) => {
                  const linkedProduct = act.productKey
                    ? TRIAGE_PRODUCTS[act.productKey]
                    : null;

                  return (
                    <div
                      key={idx}
                      className="p-6 bg-white shadow-xl rounded-2xl border border-clinical-blue/10 flex flex-col gap-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">
                          {act.phase}
                        </span>
                      </div>

                      <h5 className="text-lg font-bold text-clinical-blue">
                        {act.title}
                      </h5>

                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {act.instruction}
                      </p>

                      <div className="p-3 bg-clinical-blue/5 border-l-2 border-accent-mint rounded-r text-xs text-clinical-blue leading-relaxed mt-1">
                        <span className="font-semibold block mb-0.5">Prečo je to dôležité:</span>
                        {act.educationalNote}
                      </div>
                      {/* Priame tlačidlo na nákup / lekárne v príslušnom kroku */}
                      {act.productKey === "aqvitox" && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => handleOpenPharmacyModal("aqvitox")}
                            className="w-full sm:w-auto self-start py-2.5 px-6 bg-[#085E95] text-white font-semibold rounded-full shadow-md hover:bg-[#064a75] transition-colors duration-200 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Kde kúpiť Aqvitox-D (Lekárne)</span>
                            <span>→</span>
                          </button>
                        </div>
                      )}

                      {(act.productKey === "mesitran-soft" || act.productKey === "mesitran-ointment") && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => handleOpenPharmacyModal("mesitran")}
                            className="w-full sm:w-auto self-start py-2.5 px-6 bg-[#D97706] text-white font-semibold rounded-full shadow-md hover:bg-[#B45309] transition-colors duration-200 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Kde kúpiť L-Mesitran (Lekárne)</span>
                            <span>→</span>
                          </button>
                        </div>
                      )}

                      {act.productKey === "aqvidine" && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => handleOpenPharmacyModal("aqvidine")}
                            className="w-full sm:w-auto self-start py-2.5 px-6 bg-[#F26F01] text-white font-semibold rounded-full shadow-md hover:bg-[#c95b00] transition-colors duration-200 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Kde kúpiť Aqvidine (Lekárne)</span>
                            <span>→</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Čo nerobiť */}
            <div className="p-6 bg-amber-50/60 border border-amber-200/80 rounded-2xl shadow-xl flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Časté chyby a čo určite nerobiť:
              </span>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-amber-950 leading-relaxed">
                {activeResult.mistakesToAvoid.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>

            {/* Tlačidlá na reštart a úpravu */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-clinical-blue/10 items-center justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto py-3 px-8 bg-accent-mint text-background font-bold uppercase rounded-full shadow-xl hover:bg-clinical-blue transition-colors duration-200 text-xs tracking-wider"
              >
                Začať nového sprievodcu
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto py-3 px-8 border border-clinical-blue/30 text-clinical-blue font-semibold rounded-full shadow-xl hover:bg-clinical-blue/10 transition-colors duration-200 text-xs tracking-wider"
              >
                ← Zmeniť predchádzajúci výber
              </button>
            </div>
          </div>
        )}

        {/* ================= STAV 3: AKTÍVNA OTÁZKA SPRIEVODCU ================= */}
        {!activeRedFlagReason && !activeResult && currentStep && (
          <div className="flex flex-col gap-8">
            {/* Desktop progress bar integrovaný priamo v sprievodcovi */}
            <div className="hidden md:flex flex-col gap-2 pb-6 border-b border-clinical-blue/10">
              <div className="flex items-center justify-between text-xs text-clinical-blue/70 font-semibold">
                <span className="uppercase tracking-wider font-mono">
                  Postup v sprievodcovi: Krok {currentStep.stepNumber} z {currentStep.totalSteps}
                </span>
                <span className="font-mono text-accent-teal">{progressPercent}%</span>
              </div>
              <div className="w-full bg-clinical-blue/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-mint transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Hlavička otázky a edukatívny kontext */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-teal bg-accent-teal/10 px-4 py-1.5 rounded-full">
                  Krok {currentStep.stepNumber} z {currentStep.totalSteps}
                </span>
                {history.length > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-xs font-semibold text-clinical-blue/70 hover:text-clinical-blue px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    ← Späť
                  </button>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-clinical-blue tracking-tight leading-tight">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Zoznam možností - tlačidlá s rounded-full a shadow-xl, hover na farbu */}
            <div className="flex flex-col gap-4 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-clinical-blue/60">
                Zvoľte jednu z nasledujúcich možností:
              </span>

              {currentStep.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectOption(option)}
                  className="w-full px-10 py-5 sm:p-6 bg-background rounded-lg sm:rounded-full shadow-xl hover:bg-clinical-blue hover:text-background text-clinical-blue text-left transition-colors duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 group"
                >
                  <div className="flex flex-col gap-1 pl-2 sm:pl-4">
                    <span className="font-bold sm:text-base tracking-tight group-hover:text-background">
                      {option.label}
                    </span>
                    {option.sublabel && (
                      <span className="text-xs text-foreground/60 group-hover:text-background/80 font-normal leading-relaxed">
                        {option.sublabel}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 font-mono font-semibold uppercase text-accent-teal group-hover:text-background px-4 py-1.5 rounded-full bg-accent-teal/10 group-hover:bg-white/20 transition-colors duration-200 self-end sm:self-auto">
                    Vybrať →
                  </span>
                </button>
              ))}
            </div>

            {history.length > 0 && (
              <div className="pt-4 border-t border-clinical-blue/10">
                <button
                  type="button"
                  onClick={handleBack}
                  className="py-2.5 px-6 border border-clinical-blue/30 text-clinical-blue font-semibold rounded-full shadow-xl hover:bg-clinical-blue/10 transition-colors duration-200 text-xs"
                >
                  ← Návrat na predchádzajúci krok
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal s partnerskými lekárňami a priamymi odkazmi s UTM */}
      <PharmacyModal
        isOpen={modalProduct !== null}
        onClose={() => setModalProduct(null)}
        productKey={modalProduct}
        sourceContext="triage"
      />

      {/* Mobilný progress bar prilepený na spodku obrazovky */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-clinical-blue/15 px-4 py-3 shadow-xl flex items-center justify-between gap-4">
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-clinical-blue">
            <span>
              {activeResult
                ? "Vyhodnotenie liečby"
                : activeRedFlagReason
                ? "Bezpečnostné varovanie"
                : `Krok ${currentStep?.stepNumber || 1} z ${currentStep?.totalSteps || 3}`}
            </span>
            <span className="font-mono text-accent-teal">{progressPercent}%</span>
          </div>
          <div className="w-full bg-clinical-blue/10 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-mint transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {history.length > 0 && !activeResult && !activeRedFlagReason && (
          <button
            type="button"
            onClick={handleBack}
            className="px-4 py-1.5 border border-clinical-blue/30 text-clinical-blue text-xs font-semibold rounded-full hover:bg-clinical-blue/10 shrink-0 transition-colors duration-200"
          >
            ← Späť
          </button>
        )}
        {(activeResult || activeRedFlagReason) && (
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-1.5 bg-clinical-blue text-background text-xs font-semibold rounded-full hover:bg-accent-mint shrink-0 transition-colors duration-200"
          >
            Nový
          </button>
        )}
      </div>
    </div>
  );
}
