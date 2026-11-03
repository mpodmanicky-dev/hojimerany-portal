"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import PharmacyModal from "@/components/ui/PharmacyModal";
import { SweepButton, SweepLink } from "@/components/ui/SweepButton";
import { HEALING_TOPICS, LONG_TAIL_FAQS } from "@/constants/healingGuide";
import {
  IconFlame,
  IconBandage,
  IconShield,
  IconActivity,
  IconHelp,
  IconAlertTriangle,
  IconCart,
  IconArrowRight,
  IconCheck,
} from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

export default function HojenieContent() {
  const [modalProduct, setModalProduct] = useState<"aqvitox" | "mesitran" | null>(null);

  const handleOpenModal = (product: "aqvitox" | "mesitran", topicId: string) => {
    trackEvent("triage_pharmacy_modal_open", {
      product_key: product,
      context: `hojenie_${topicId}`,
    });
    setModalProduct(product);
  };

  const getTopicIcon = (id: string) => {
    switch (id) {
      case "popaleniny":
        return <IconFlame size={18} className="text-amber-500" />;
      case "odreniny":
        return <IconBandage size={18} className="text-accent-teal" />;
      case "pooperacne":
        return <IconShield size={18} className="text-clinical-blue" />;
      case "chronicke":
        return <IconActivity size={18} className="text-accent-mint" />;
      default:
        return <IconShield size={18} />;
    }
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Pharmacy Modal so všetkými lekárňami a UTM trackingom */}
      <PharmacyModal
        isOpen={modalProduct !== null}
        onClose={() => setModalProduct(null)}
        productKey={modalProduct}
        sourceContext="hojenie_page"
      />

      {/* Header */}
      <header className="flex flex-col gap-3 text-left">
        <span className="w-16 h-1 bg-accent-mint"></span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-clinical-blue uppercase">
          Moderné hojenie rán
        </h1>
        <p className="text-base sm:text-lg text-clinical-blue/80 max-w-2xl leading-relaxed">
          Prečo suchá chrasta spomaľuje regeneráciu a prečo lieh poškodzuje
          zdravé bunky? Prečítajte si overené medicínske postupy pre domáce aj
          odborné ošetrenie podložené klinickými štúdiami.
        </p>
      </header>

      {/* Rýchla navigácia medzi klastrami pomocou čistých ikon (bez emoji) */}
      <nav aria-label="Rýchla navigácia v témach" className="flex flex-wrap gap-3">
        <a
          href="#popaleniny"
          className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border border-accent-mint/60 bg-white text-clinical-blue hover:bg-accent-mint/20 transition-colors duration-200 shadow-xs flex items-center gap-2"
        >
          <IconFlame size={16} className="text-amber-500" />
          <span>Popáleniny doma</span>
        </a>
        <a
          href="#odreniny"
          className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border border-accent-mint/60 bg-white text-clinical-blue hover:bg-accent-mint/20 transition-colors duration-200 shadow-xs flex items-center gap-2"
        >
          <IconBandage size={16} className="text-accent-teal" />
          <span>Cestné odreniny</span>
        </a>
        <a
          href="#pooperacne"
          className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border border-accent-mint/60 bg-white text-clinical-blue hover:bg-accent-mint/20 transition-colors duration-200 shadow-xs flex items-center gap-2"
        >
          <IconShield size={16} className="text-clinical-blue" />
          <span>Jazvy po operácii</span>
        </a>
        <a
          href="#chronicke"
          className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border border-accent-mint/60 bg-white text-clinical-blue hover:bg-accent-mint/20 transition-colors duration-200 shadow-xs flex items-center gap-2"
        >
          <IconActivity size={16} className="text-accent-mint" />
          <span>Dekubity a vredy</span>
        </a>
        <a
          href="#faq"
          className="rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border border-accent-mint/60 bg-white text-clinical-blue hover:bg-accent-mint/20 transition-colors duration-200 shadow-xs flex items-center gap-2"
        >
          <IconHelp size={16} className="text-clinical-blue/70" />
          <span>Časté otázky (FAQ)</span>
        </a>
      </nav>

      {/* Vizuálna edukačná sekcia s reálnym obrázkom medicínskeho medu */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-accent-mint/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/medical-honey-hydrogel.jpg"
            alt="Medicínsky med a hydroaktívny gél na rany"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="md:col-span-7 flex flex-col gap-3 text-clinical-blue">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-teal">
            Princíp moderného vlhkého hojenia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Vlhké prostredie regeneruje kožu až 2× rýchlejšie
          </h2>
          <p className="text-sm text-clinical-blue/80 leading-relaxed">
            Stará prax nechať ranu vyschnúť do tvrdej chrasty vytvára mechanickú
            bariéru. Novovznikajúce bunky sa pod ňou musia namáhavo predierať.
            Medicínsky med L-Mesitran dodáva bunkám vlhkosť, znižuje pH na
            prirodzene antibakteriálnu úroveň a zabraňuje vzniku zjazvenia.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <SweepButton
              variant="mesitran"
              onClick={() => handleOpenModal("mesitran", "education_banner")}
              className="text-xs py-2.5 px-5"
            >
              <IconCart size={15} />
              <span>Kúpiť L-Mesitran v lekárni</span>
            </SweepButton>
            <SweepButton
              variant="teal"
              onClick={() => handleOpenModal("aqvitox", "education_banner")}
              className="text-xs py-2.5 px-5"
            >
              <IconCart size={15} />
              <span>Kúpiť Aqvitox-D na výplach</span>
            </SweepButton>
          </div>
        </div>
      </section>

      {/* 4 Tematické klastre */}
      <main className="flex flex-col gap-10">
        {HEALING_TOPICS.map((topic) => (
          <section
            key={topic.id}
            id={topic.id}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-accent-mint/30 flex flex-col gap-6 scroll-mt-24"
          >
            {/* Header témy */}
            <div className="flex items-start gap-4 border-b border-accent-mint/20 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-mint/20 flex items-center justify-center shrink-0">
                {getTopicIcon(topic.id)}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-clinical-blue tracking-tight">
                  {topic.title}
                </h2>
                <p className="text-sm sm:text-base text-accent-teal font-medium">
                  {topic.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-clinical-blue/80 leading-relaxed">
              {topic.excerpt}
            </p>

            {/* Čomu sa vyhnúť (Chyby z praxe s SVG ikonou namiesto emoji) */}
            <div className="rounded-2xl bg-amber-50/70 border border-amber-500/30 p-5 text-sm text-clinical-blue/90">
              <h3 className="font-bold text-clinical-blue mb-2 flex items-center gap-2">
                <IconAlertTriangle size={18} className="text-amber-600" />
                <span>Najčastejšie chyby prvej pomoci:</span>
              </h3>
              <ul className="space-y-1.5 pl-6 list-disc text-clinical-blue/80">
                {topic.mistakes.map((mistake, idx) => (
                  <li key={idx}>{mistake}</li>
                ))}
              </ul>
            </div>

            {/* Odporúčaný klinický protokol krok za krokom */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-clinical-blue text-sm uppercase tracking-wider">
                Odporúčaný klinický protokol:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topic.protocol.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl p-4 bg-background border border-accent-mint/30 flex flex-col justify-between gap-3 shadow-xs"
                  >
                    <div>
                      <span className="text-xs font-bold text-accent-teal uppercase tracking-wider block mb-1">
                        Krok {step.step}
                      </span>
                      <h4 className="font-bold text-clinical-blue text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-clinical-blue/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {step.productRecommendation && (
                      <div className="pt-2 border-t border-accent-mint/20 text-xs font-medium text-accent-teal flex items-center justify-between">
                        <span>{step.productRecommendation}</span>
                        <IconCheck size={14} className="text-accent-mint" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Priame nákupné tlačidlá s vyvolaním modalu pre tento klaster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-accent-mint/20">
              <div className="flex flex-wrap items-center gap-2.5">
                <SweepButton
                  variant="teal"
                  onClick={() => handleOpenModal("aqvitox", topic.id)}
                  className="text-xs py-2.5 px-4"
                >
                  <IconCart size={14} />
                  <span>Kúpiť Aqvitox-D</span>
                </SweepButton>
                <SweepButton
                  variant="mesitran"
                  onClick={() => handleOpenModal("mesitran", topic.id)}
                  className="text-xs py-2.5 px-4"
                >
                  <IconCart size={14} />
                  <span>Kúpiť L-Mesitran</span>
                </SweepButton>
              </div>

              <SweepLink
                href="/sprievodca"
                variant="clinical"
                className="text-xs py-2.5 px-5 self-start sm:self-auto"
              >
                <span>Spustiť interaktívny strom</span>
                <IconArrowRight size={14} />
              </SweepLink>
            </div>
          </section>
        ))}
      </main>

      {/* Long-tail FAQ Sekcia */}
      <section id="faq" className="flex flex-col gap-6 scroll-mt-24">
        <div className="flex flex-col gap-1">
          <span className="w-12 h-1 bg-accent-mint"></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-clinical-blue">
            Často kladené otázky k hojeniu rán
          </h2>
          <p className="text-sm text-clinical-blue/80">
            Odpovede podložené medicínskymi faktami na najčastejšie otázky z
            vyhľadávania.
          </p>
        </div>

        <FaqAccordion items={LONG_TAIL_FAQS} />
      </section>

      {/* Spodný Call to Action Box s druhou doplnkovou fotkou */}
      <section className="bg-clinical-blue text-white rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Potrebujete okamžité odporúčanie na mieru?
          </h3>
          <p className="text-sm text-white/85 leading-relaxed max-w-xl">
            Odpovedzte na 3 jednoduché otázky v našom sprievodcovi a získajte
            odporúčanie konkrétneho produktu s priamym nákupom v partnerských
            lekárňach.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <SweepLink
            href="/sprievodca"
            variant="mint"
            className="uppercase tracking-wider text-xs sm:text-sm py-4 px-8"
          >
            Spustiť sprievodcu →
          </SweepLink>
        </div>
      </section>
    </div>
  );
}

