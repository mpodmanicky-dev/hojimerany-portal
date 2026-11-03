import type { Metadata } from "next";
import Triage from "@/components/Triage";
import JsonLd from "@/components/seo/JsonLd";
import { generateMedicalWebPageSchema, generateHowToSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sprievodca ošetrením rán a popálenín | Hojímerany.sk",
  description:
    "Interaktívny rozhodovací strom: vyberte typ rany, bolesť a hĺbku. Získajte klinický postup ošetrenia, výber správnej dezinfekcie (Aqvitox-D) a hojivého gélu (L-Mesitran).",
  keywords: [
    "sprievodca ošetrením rán",
    "rozhodovací strom rany",
    "ako ošetriť ranu",
    "ošetrenie popáleniny postup",
    "odreniny prvá pomoc",
    "vlhké hojenie sprievodca",
  ],
  alternates: {
    canonical: "https://hojimerany.sk/sprievodca",
  },
};

export default function SprievodcaPage() {
  const webPageSchema = generateMedicalWebPageSchema({
    title: "Interaktívny sprievodca ošetrením rán a popálenín",
    description:
      "Klinický rozhodovací strom a protokol prvej pomoci pri popáleninách, odreninách a pooperačných ranách.",
    url: "https://hojimerany.sk/sprievodca",
  });

  const howToSchema = generateHowToSchema({
    name: "Ako správne ošetriť akútnu ranu podľa klinického protokolu",
    description:
      "Overený medicínsky 3-krokový protokol pre rýchle hojenie bez vzniku zjazvenia a infekcie.",
    steps: [
      {
        name: "Identifikácia a zhodnotenie varovných signálov",
        text: "Overte, či rana nevyžaduje urgentný zásah chirurga (hlboké rezné rany, silné arteriálne krvácanie, popáleniny III. stupňa).",
      },
      {
        name: "Šetrný výplach superoxidovaným roztokom",
        text: "Vypláchnite ranu roztokom Aqvitox-D na odstránenie nečistôt a biofilmu bez pálenia.",
      },
      {
        name: "Aplikácia hydroaktívneho medicínskeho medu",
        text: "Naneste L-Mesitran Soft alebo Ointment a prekryte sterilným sekundárnym obväzom.",
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 md:px-12">
      <JsonLd data={webPageSchema} />
      <JsonLd data={howToSchema} />

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Header Sekcia */}
        <header className="flex flex-col gap-3 text-left">
          <span className="w-16 h-1 bg-accent-mint"></span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-clinical-blue uppercase">
            Sprievodca ošetrením
          </h1>
          <p className="text-base sm:text-lg text-clinical-blue/80 max-w-2xl leading-relaxed">
            Vyberte si kategóriu rany a prejdite klinickým rozhodovacím stromom.
            Získate presný postup krok za krokom, zoznam chýb, ktorým sa vyhnúť,
            a odporúčaný produkt s priamym nákupom v partnerských lekárňach.
          </p>
        </header>

        {/* Triage Komponent */}
        <main className="w-full">
          <Triage />
        </main>

        {/* Doplňujúci lekársky text */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-accent-mint/30 mt-6 text-sm text-clinical-blue/80 leading-relaxed">
          <h2 className="text-lg font-bold text-clinical-blue mb-3">
            Kedy je nevyhnutné okamžite navštíviť lekára?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Rana silno alebo pulzujúco krváca a krvácanie sa nedarí zastaviť tlakovým obväzom do 10 minút.
            </li>
            <li>
              Rana je spôsobená uhryznutím zvieraťom alebo človekom (vysoké riziko anaeróbnej infekcie a tetanu).
            </li>
            <li>
              Okraje rany sú od seba vzdialené viac než 5 mm a vyžadujú chirurgické šitie.
            </li>
            <li>
              V rane sa nachádza hlboko vniknuté cudzie teleso (sklo, kov, trieska), ktoré nejde voľne vypláchnuť.
            </li>
            <li>
              Objavujú sa známky celkovej infekcie: horúčka, triaška, červený pruh smerujúci k uzlinám (lymfangitída) alebo hnisavý výtok.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

