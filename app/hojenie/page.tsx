import type { Metadata } from "next";
import HojenieContent from "@/components/hojenie/HojenieContent";
import JsonLd from "@/components/seo/JsonLd";
import { HEALING_TOPICS, LONG_TAIL_FAQS } from "@/constants/healingGuide";
import { generateMedicalWebPageSchema, generateFaqSchema, generateHowToSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Edukácia a postupy moderného hojenia rán | Hojímerany.sk",
  description:
    "Odborné návody krok za krokom: ošetrenie popálenín doma, prvá pomoc pri odreninách bez pálenia, starostlivosť o pooperačné jazvy a manažment dekubitov s Aqvitox-D, L-Mesitran a Aqvidine.",
  keywords: [
    "ako ošetriť popáleninu doma",
    "popáleniny liečba",
    "odreniny prvá pomoc",
    "jazvy po operácii",
    "liečba dekubitov doma",
    "bércové vredy hojenie",
    "vlhké hojenie princíp",
    "kyselina chlórna na rany",
    "medicínsky med L-Mesitran",
    "jódové krytie Aqvidine",
  ],
  alternates: {
    canonical: "https://hojimerany.sk/hojenie",
  },
};

export default function HojeniePage() {
  const webPageSchema = generateMedicalWebPageSchema({
    title: "Centrum modernej starostlivosti o rany, popáleniny a jazvy",
    description:
      "Edukačné klastre a presné postupy liečby popálenín, plošných odrenín, pooperačných jaziev a chronických defektov podľa medicínskych štandardov.",
    url: "https://hojimerany.sk/hojenie",
  });

  const faqSchema = generateFaqSchema(LONG_TAIL_FAQS);

  const howToSchemas = HEALING_TOPICS.map((topic) =>
    generateHowToSchema({
      name: topic.title,
      description: topic.excerpt,
      steps: topic.protocol.map((step) => ({
        name: step.title,
        text: step.description,
      })),
    })
  );

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 px-4 sm:px-6 md:px-12">
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      {howToSchemas.map((schema, idx) => (
        <JsonLd key={idx} data={schema} />
      ))}

      <div className="max-w-6xl mx-auto">
        <HojenieContent />
      </div>
    </div>
  );
}
