"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import PharmacyModal from "@/components/ui/PharmacyModal";
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
import { trackPharmacyModalOpen } from "@/lib/analytics";

export default function HojenieContent() {
  const [modalProduct, setModalProduct] = useState<"aqvitox" | "mesitran" | "aqvidine" | null>(null);
  const [jumpTopic, setJumpTopic] = useState("");

  const handleOpenModal = (product: "aqvitox" | "mesitran" | "aqvidine", topicId: string) => {
    trackPharmacyModalOpen(product, `hojenie_${topicId}`);
    setModalProduct(product);
  };

  const handleJumpTopic = (val: string) => {
    setJumpTopic(val);
    if (!val) return;
    const el = document.querySelector(val);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getTopicIcon = (id: string) => {
    switch (id) {
      case "popaleniny":
        return <IconFlame size={20} className="text-[#D97706]" />;
      case "odreniny":
        return <IconBandage size={20} className="text-[#085E95]" />;
      case "pooperacne":
        return <IconShield size={20} className="text-[#1a4b75]" />;
      case "chronicke":
        return <IconActivity size={20} className="text-[#F26F01]" />;
      default:
        return <IconShield size={20} />;
    }
  };

  return (
    <div className="flex flex-col gap-14 sm:gap-20">
      {/* Pharmacy Modal s dynamickou témou podľa produktu */}
      <PharmacyModal
        isOpen={modalProduct !== null}
        onClose={() => setModalProduct(null)}
        productKey={modalProduct}
        sourceContext="hojenie_page"
      />

      {/* Header */}
      <header className="flex flex-col gap-3 text-left">
        <span className="w-16 h-1 bg-accent-mint" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-clinical-blue uppercase">
          Edukácia & postupy hojenia rán
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
          Prečo stará prax nechať ranu vyschnúť do tvrdej chrasty spomaľuje regeneráciu a prečo lieh poškodzuje
          zdravé bunky? Prečítajte si overené medicínske protokoly pre domáce aj odborné ošetrenie
          podložené klinickou praxou.
        </p>

        {/* Rýchla navigácia medzi klastrami (Mobile Dropdown + Desktop Pills) */}
        <div className="pt-2 w-full">
          {/* Mobilný Dropdown (sm:hidden) */}
          <div className="sm:hidden flex flex-col gap-1.5 w-full">
            <label
              htmlFor="hojenie-jump-select"
              className="text-xs font-bold uppercase tracking-wider text-slate-500"
            >
              Rýchly výber témy hojenia:
            </label>
            <div className="relative w-full">
              <select
                id="hojenie-jump-select"
                value={jumpTopic}
                onChange={(e) => handleJumpTopic(e.target.value)}
                className="w-full appearance-none bg-white border border-slate-300 text-slate-800 text-sm font-semibold rounded-xl px-4 py-3 pr-10 shadow-xs focus:outline-none focus:ring-2 focus:ring-clinical-blue focus:border-clinical-blue transition-all cursor-pointer"
              >
                <option value="">Vyberte tému hojenia...</option>
                <option value="#popaleniny">1. Popáleniny doma (Prvá pomoc a bez jaziev)</option>
                <option value="#odreniny">2. Cestné odreniny (Výplach a liečba bez chrasty)</option>
                <option value="#pooperacne">3. Pooperačné jazvy (Starostlivosť po stehoch)</option>
                <option value="#chronicke">4. Dekubity a vredy (Rozpustenie biofilmu)</option>
                <option value="#faq">Často kladené otázky (FAQ)</option>
              </select>
              {/* Šípka dropdownu */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Pills (hidden sm:flex) */}
          <nav aria-label="Rýchla navigácia v témach" className="hidden sm:flex flex-wrap gap-2.5">
            <a
              href="#popaleniny"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-bold bg-[#D97706]/10 text-[#D97706] hover:bg-[#D97706]/20 transition-colors duration-200 flex items-center gap-2"
            >
              <IconFlame size={16} />
              <span>1. Popáleniny doma</span>
            </a>
            <a
              href="#odreniny"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-bold bg-[#085E95]/10 text-[#085E95] hover:bg-[#085E95]/20 transition-colors duration-200 flex items-center gap-2"
            >
              <IconBandage size={16} />
              <span>2. Cestné odreniny</span>
            </a>
            <a
              href="#pooperacne"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-bold bg-[#1a4b75]/10 text-[#1a4b75] hover:bg-[#1a4b75]/20 transition-colors duration-200 flex items-center gap-2"
            >
              <IconShield size={16} />
              <span>3. Pooperačné jazvy</span>
            </a>
            <a
              href="#chronicke"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-bold bg-[#F26F01]/10 text-[#F26F01] hover:bg-[#F26F01]/20 transition-colors duration-200 flex items-center gap-2"
            >
              <IconActivity size={16} />
              <span>4. Dekubity a vredy</span>
            </a>
            <a
              href="#faq"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors duration-200 flex items-center gap-2"
            >
              <IconHelp size={16} />
              <span>Časté otázky (FAQ)</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Vizuálna edukačná sekcia: Princíp moderného vlhkého hojenia */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
        <div className="md:col-span-5 relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200">
          <Image
            src="/images/medical-honey-hydrogel.jpg"
            alt="Medicínsky med a hydroaktívny gél na rany L-Mesitran"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="md:col-span-7 flex flex-col gap-3 text-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-teal">
            Základný klinický princíp
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-clinical-blue tracking-tight">
            Vlhké prostredie regeneruje kožu až 2× rýchlejšie
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Stará prax nechať ranu vyschnúť do tvrdej chrasty vytvára pevnú mechanickú bariéru. Novovznikajúce bunky sa
            pod ňou musia namáhavo predierať a pri každom pohybe chrasta praská. Moderné prípravky udržiavajú spodinu rany
            hydratovanú, znižujú pH na kyslé (3,0 – 4,5) a zabezpečujú hladké uzatvorenie bez keloidného zjazvenia.
          </p>
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => handleOpenModal("mesitran", "education_banner")}
              className="px-4 py-2 rounded-full text-xs font-bold bg-[#D97706] text-white hover:bg-[#b45309] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <IconCart size={14} />
              <span>Dostupnosť L-Mesitran v lekárňach</span>
            </button>
            <button
              type="button"
              onClick={() => handleOpenModal("aqvitox", "education_banner")}
              className="px-4 py-2 rounded-full text-xs font-bold bg-[#085E95] text-white hover:bg-[#064a75] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <IconCart size={14} />
              <span>Dostupnosť Aqvitox-D v lekárňach</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Tematické edukačné klastre */}
      <main className="flex flex-col gap-16 sm:gap-24">
        {HEALING_TOPICS.map((topic, index) => (
          <section
            key={topic.id}
            id={topic.id}
            className="flex flex-col gap-6 pt-8 border-t border-slate-200 scroll-mt-24"
          >
            {/* Záhlavie klastra */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${topic.accentColor}15` }}
                >
                  {getTopicIcon(topic.id)}
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: topic.accentColor }}
                  >
                    Téma 0{index + 1} • {topic.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {topic.title}
                  </h2>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium">
              {topic.subtitle}
            </p>

            {/* Dvojstĺpcový grid: Edukačná fotografia + Úryvok */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Fotografia k téme */}
              <div className="lg:col-span-5 flex flex-col gap-2">
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src={topic.image}
                    alt={topic.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                    <span className="text-xs uppercase font-mono tracking-wider opacity-85 block">
                      Klinická fotografia
                    </span>
                    <p className="text-xs sm:text-sm font-semibold">{topic.imageAlt}</p>
                  </div>
                </div>
              </div>

              {/* Popis témy a Najčastejšie chyby */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <p className="text-base text-slate-700 leading-relaxed">
                  {topic.excerpt}
                </p>

                {/* Chyby z praxe */}
                <div className="rounded-xl bg-amber-50/80 border border-amber-300/60 p-4 sm:p-5 flex flex-col gap-2">
                  <h3 className="font-bold text-amber-900 text-sm flex items-center gap-2">
                    <IconAlertTriangle size={18} className="text-amber-600 shrink-0" />
                    <span>Najčastejšie chyby prvej pomoci (čomu sa vyhnúť):</span>
                  </h3>
                  <ul className="space-y-1.5 pl-5 list-disc text-xs sm:text-sm text-amber-950/90 leading-relaxed">
                    {topic.mistakes.map((mistake, idx) => (
                      <li key={idx}>{mistake}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Odporúčaný klinický protokol krok za krokom */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Odporúčaný klinický protokol krok za krokom:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topic.protocol.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-xl p-4 bg-white border border-slate-200 flex flex-col justify-between gap-3 shadow-2xs"
                  >
                    <div>
                      <span
                        className="text-xs font-extrabold uppercase tracking-wider block mb-1"
                        style={{ color: topic.accentColor }}
                      >
                        Krok {step.step}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {step.productRecommendation && (
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                        {step.productKey ? (
                          <Link
                            href={`/produkty#${step.productKey}`}
                            className="text-clinical-blue hover:underline inline-flex items-center gap-1"
                          >
                            <span>{step.productRecommendation}</span>
                            <span className="text-slate-400">→</span>
                          </Link>
                        ) : (
                          <span className="text-slate-700">{step.productRecommendation}</span>
                        )}
                        <IconCheck size={14} className="text-emerald-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Akčné tlačidlá pre nákup a preklik na produkty */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-1">Rýchly nákup v lekárni:</span>
                <button
                  type="button"
                  onClick={() => handleOpenModal("aqvitox", topic.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#085E95]/10 text-[#085E95] hover:bg-[#085E95]/20 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <IconCart size={13} />
                  <span>Aqvitox-D</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenModal("mesitran", topic.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D97706]/10 text-[#D97706] hover:bg-[#D97706]/20 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <IconCart size={13} />
                  <span>L-Mesitran Soft</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenModal("aqvidine", topic.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F26F01]/10 text-[#F26F01] hover:bg-[#F26F01]/20 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <IconCart size={13} />
                  <span>Aqvidine tyl</span>
                </button>
              </div>

              <Link
                href="/produkty"
                className="text-xs font-bold text-clinical-blue hover:underline inline-flex items-center gap-1"
              >
                <span>Podrobné informácie a registrácie produktov</span>
                <IconArrowRight size={13} />
              </Link>
            </div>
          </section>
        ))}
      </main>

      {/* Long-tail FAQ Sekcia */}
      <section id="faq" className="flex flex-col gap-6 pt-8 border-t border-slate-200 scroll-mt-24">
        <div className="flex flex-col gap-1">
          <span className="w-12 h-1 bg-accent-mint" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-clinical-blue">
            Často kladené otázky k hojeniu rán (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Odpovede podložené medicínskymi faktami na najčastejšie otázky z klinickej praxe.
          </p>
        </div>

        <FaqAccordion items={LONG_TAIL_FAQS} />
      </section>

      {/* Spodný Call to Action Box na interaktívny rozhodovací strom */}
      <section className="bg-clinical-blue text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Potrebujete okamžité odporúčanie?
          </h3>
          <p className="text-sm text-white/85 leading-relaxed max-w-xl">
            Prejdite naším jednoduchým rozhodovacím stromom a do 60 sekúnd zistite, aký prípravok a postup je presne
            vhodný pre vaše poranenie.
          </p>
        </div>
        <Link
          href="/"
          className="shrink-0 px-8 py-3.5 bg-accent-mint text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-accent-mint/90 transition-colors shadow-sm"
        >
          Spustiť sprievodcu →
        </Link>
      </section>
    </div>
  );
}
