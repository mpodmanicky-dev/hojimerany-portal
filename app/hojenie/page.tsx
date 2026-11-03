import type { Metadata } from "next";
import HojenieContent from "@/components/hojenie/HojenieContent";
import JsonLd from "@/components/seo/JsonLd";
import { LONG_TAIL_FAQS } from "@/constants/healingGuide";
import { generateMedicalWebPageSchema, generateFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Edukácia a liečebné postupy hojenia rán | Hojímerany.sk",
  description:
    "Odborné návody krok za krokom: ako ošetriť popáleninu doma, liečba cestných odrenín, starostlivosť o pooperačné jazvy a manažment dekubitov. Vyhnite sa chybám a vysušovaniu rán.",
  keywords: [
    "ako ošetriť popáleninu doma",
    "popáleniny liečba",
    "odreniny prvá pomoc",
    "jazvy po operácii",
    "liečba dekubitov doma",
    "bércové vredy hojenie",
    "vlhké hojenie princíp",
  ],
  alternates: {
    canonical: "https://hojimerany.sk/hojenie",
  },
};

export default function HojeniePage() {
  const webPageSchema = generateMedicalWebPageSchema({
    title: "Centrum modernej starostlivosti o rany a popáleniny",
    description:
      "Edukačné klastre a postupy liečby popálenín, odrenín, pooperačných jaziev a chronických defektov podľa medicínskych štandardov.",
    url: "https://hojimerany.sk/hojenie",
  });

  const faqSchema = generateFaqSchema(LONG_TAIL_FAQS);

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 md:px-12">
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-5xl mx-auto">
        <HojenieContent />
      </div>
    </div>
  );
}
