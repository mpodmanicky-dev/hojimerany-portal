import type { Metadata } from "next";
import Image from "next/image";
import Triage from "@/components/Triage";
import JsonLd from "@/components/seo/JsonLd";
import { SweepLink } from "@/components/ui/SweepButton";
import { generateMedicalWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hojímerany.sk - webový portál pre liečbu akútnych a chronických rán",
  description:
    "Interaktívny rozhodovací strom a sprievodca ošetrením rán, popálenín a odrenín. Moderné vlhké hojenie s Aqvitox-D a L-Mesitran.",
  alternates: {
    canonical: "https://hojimerany.sk",
  },
};

export default function Home() {
  const homeSchema = generateMedicalWebPageSchema({
    title: "Hojímerany.sk - portál pre liečbu akútnych a chronických rán",
    description:
      "Interaktívny sprievodca, odporúčané klinické postupy a výber certifikovaných zdravotníckych pomôcok na vlhké hojenie.",
    url: "https://hojimerany.sk",
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans min-h-screen">
      <JsonLd data={homeSchema} />

      {/* Panoramatický Edge-to-Edge Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[460px] md:h-[520px] overflow-hidden">
        <Image
          src="/images/hero-wound-care.jpg"
          alt="Moderná a šetrná starostlivosť o rany - Hojímerany.sk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft clinical overlay for pristine readability */}
        <div className="absolute inset-0 bg-clinical-blue/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex flex-col justify-center items-start text-left text-white gap-4">
          <span className="w-16 h-1 bg-accent-mint" />
          <h1 className="font-bold tracking-tight uppercase text-3xl sm:text-5xl md:text-6xl drop-shadow-md">
            Hojímerany.sk
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-xl leading-relaxed drop-shadow-sm">
            Odborný portál pre širokú verejnosť aj špecialistov hľadajúcich
            overené alternatívy pre bezbolestné a rýchle hojenie rán bez jaziev.
          </p>

          {/* Tlačidlá so Sweep Hover animáciou (prechod zľava doprava) */}
          <div className="flex flex-wrap gap-4 items-center mt-2">
            <SweepLink
              href="/sprievodca"
              variant="mint"
              className="uppercase tracking-wider text-xs sm:text-sm py-3.5 px-7"
            >
              Sprievodca liečbou
            </SweepLink>
            <SweepLink
              href="/produkty"
              variant="clinical"
              className="uppercase tracking-wider text-xs sm:text-sm py-3.5 px-7 bg-white/90"
            >
              Katalóg produktov
            </SweepLink>
          </div>
        </div>
      </section>

      {/* Rýchly poradca s Triage */}
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8 py-12 flex flex-col gap-8">
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <span className="w-24 sm:w-48 h-1 bg-accent-mint"></span>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl sm:text-4xl text-clinical-blue font-bold tracking-tight">
              Rýchly poradca
            </h2>
            <p className="text-clinical-blue/80 text-sm sm:text-base">
              Vyberte si kategóriu poranenia a náš klinický algoritmus vás
              nasmeruje k správnemu postupu a prípravku.
            </p>
          </div>

          {/* Triage a rozhodovací strom */}
          <div className="w-full mt-2">
            <Triage />
          </div>
        </div>
      </main>
    </div>
  );
}
