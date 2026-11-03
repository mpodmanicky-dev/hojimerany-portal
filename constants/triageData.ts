import { TriageResult, TriageStep } from "@/types/triage";

export const INITIAL_STEP_ID = "step-injury-category";

export const TRIAGE_STEPS: Record<string, TriageStep> = {
  "step-injury-category": {
    id: "step-injury-category",
    stepNumber: 1,
    totalSteps: 3,
    title: "Aký typ rany potrebujete ošetriť?",
    description:
      "Zvoľte charakter zranenia. Sprievodca vám v ďalších krokoch odporučí správny medicínsky postup dezinfekcie a hojenia.",
    educationalTip:
      "Včasná a správna prvá pomoc zabraňuje rozvoju infekcie, skracuje čas liečby o polovicu a predchádza vzniku trvalých jaziev.",
    options: [
      {
        id: "cat-burn",
        label: "Popálenina alebo obarenie",
        sublabel: "Horúca voda, para, dotyk horúceho predmetu, žehlička, slnko.",
        nextStepId: "step-burn-assessment",
      },
      {
        id: "cat-abrasion",
        label: "Odrenina, pád alebo rezná rana",
        sublabel: "Asfalt, pád z bicykla, škrabanec, porezanie nožom v kuchyni.",
        nextStepId: "step-abrasion-assessment",
      },
      {
        id: "cat-surgical",
        label: "Pooperačná rana a starostlivosť o jazvu",
        sublabel: "Zacelená rana po vybratí stehov, prevencia keloidnej a hrubej jazvy.",
        nextStepId: "step-surgical-assessment",
      },
      {
        id: "cat-chronic",
        label: "Chronická alebo ťažko sa hojaca rana",
        sublabel: "Bércový vred, dekubit (preležanina), rana nehojaca sa dlhšie ako 3-4 týždne.",
        nextStepId: "step-chronic-assessment",
      },
    ],
  },

  // ===================== POPÁLENINY =====================
  "step-burn-assessment": {
    id: "step-burn-assessment",
    stepNumber: 2,
    totalSteps: 3,
    category: "burn",
    title: "Popáleniny: Posúdenie rozsahu a závažnosti",
    description: "Vyskytuje sa u zraneného niektorý z týchto kritických príznakov?",
    educationalTip:
      "Popáleniny na citlivých partiách tela (tvár, krk, dlane) alebo rozsiahlejšie plochy si vyžadujú okamžitú lekársku starostlivosť na popáleninovom pracovisku.",
    options: [
      {
        id: "burn-danger",
        label: "ÁNO - popálenina je väčšia ako dlaň, zasahuje tvár, dlane alebo je koža biela/necitlivá",
        sublabel: "Alebo ide o poleptanie chemikáliou či úraz elektrickým prúdom.",
        isRedFlag: true,
        redFlagReason:
          "Tento rozsah a lokalizácia predstavujú vysoké riziko dehydratácie, šoku a hlbokej nekrózy. Okamžite vyhľadajte lekársku pohotovosť alebo volajte 155.",
      },
      {
        id: "burn-manageable",
        label: "NIE - ide o menšie ohraničené popálenie (do veľkosti dlane na ruke/nohe/trupe)",
        sublabel: "Začervenaná koža alebo menší pľuzgier vhodný na domáce ošetrenie.",
        nextStepId: "step-burn-blisters",
      },
    ],
  },

  "step-burn-blisters": {
    id: "step-burn-blisters",
    stepNumber: 3,
    totalSteps: 3,
    category: "burn",
    title: "Popáleniny: Sú na koži prítomné pľuzgiere?",
    description: "Vzhľad popáleného miesta určuje vhodný spôsob krytia a regenerácie.",
    educationalTip:
      "Pľuzgier je prirodzená sterilná biologická bariéra chrániaca spodné tkanivo. Nikdy ho neprepichujte, inak otvoríte cestu baktériám.",
    options: [
      {
        id: "burn-no-blisters",
        label: "Koža je len začervenaná, teplá a páli (1. stupeň)",
        sublabel: "Povrchové začervenanie bez porušenia celistvosti kože.",
        resultId: "res-burn-1",
      },
      {
        id: "burn-has-blisters",
        label: "Vytvorili sa pľuzgiere naplnené tekutinou (2. stupeň)",
        sublabel: "Miesto je veľmi bolestivé, pľuzgiere sú celistvé alebo čerstvo prasknuté.",
        resultId: "res-burn-2",
      },
    ],
  },

  // ===================== ODRENINY A REZNÉ RANY =====================
  "step-abrasion-assessment": {
    id: "step-abrasion-assessment",
    stepNumber: 2,
    totalSteps: 3,
    category: "abrasion",
    title: "Odreniny a rezné rany: Bezpečnostná kontrola",
    description: "Je prítomné silné krvácanie alebo riziko infekcie tetanom?",
    educationalTip:
      "Rany s masívnym krvácaním, ktoré neustáva po 5 minútach priameho tlaku, vyžadujú chirurgickú sutúru (šitie do 6 hodín od úrazu).",
    options: [
      {
        id: "abrasion-danger",
        label: "ÁNO - silné krvácanie neustáva, rana zíva, alebo ide o zvieracie uhryznutie",
        sublabel: "Alebo je v rane hlboko zapichnuté cudzie teleso (kov, sklo).",
        isRedFlag: true,
        redFlagReason:
          "Zívajúce rany vyžadujú chirurgické šitie a zvieracie uhryznutia nesú vysoké riziko anaeróbnej infekcie a vyžadujú antibiotiká a kontrolu tetanu.",
      },
      {
        id: "abrasion-manageable",
        label: "NIE - krvácanie je zastavené, ide o bežnú odreninu alebo plytké poranenie",
        sublabel: "Povrchové poškodenie pokožky vhodné na šetrné očistenie a vlhké hojenie.",
        nextStepId: "step-abrasion-cleanliness",
      },
    ],
  },

  "step-abrasion-cleanliness": {
    id: "step-abrasion-cleanliness",
    stepNumber: 3,
    totalSteps: 3,
    category: "abrasion",
    title: "Odreniny: Je v rane prítomná špina, prach alebo piesok?",
    description: "Čistota rany je kľúčová pre voľbu intenzity výplachu roztokom Aqvitox.",
    educationalTip:
      "Čiastočky prachu zarastené pod novým epitelom spôsobia trvalú traumatickú tetováž. Výplach roztokom Aqvitox ich bezbolestne uvoľní bez dráždenia tkaniva.",
    options: [
      {
        id: "abrasion-dirty",
        label: "ÁNO - rana je znečistená štrkom, zemou alebo prachom",
        sublabel: "Vyžaduje intenzívny oplach a dezinfekciu bez poškodenia epitelu.",
        resultId: "res-abrasion-dirty",
      },
      {
        id: "abrasion-clean",
        label: "NIE - rana je čistá, len mokvá alebo tvorí jemnú vrstvu",
        sublabel: "Cieľom je urýchliť hojenie a predísť praskajúcej chraste.",
        resultId: "res-abrasion-clean",
      },
    ],
  },

  // ===================== POOPERAČNÉ RANY A JAZVY =====================
  "step-surgical-assessment": {
    id: "step-surgical-assessment",
    stepNumber: 2,
    totalSteps: 3,
    category: "surgical",
    title: "Pooperačná starostlivosť: Stav rany",
    description: "Overte, či rana nevykazuje príznaky akútneho zápalu.",
    educationalTip:
      "Červená, pulzujúca a hnisajúca operačná rana si vyžaduje kontrolu operujúcim chirurgom kvôli riziku rozpadu operačného stehu.",
    options: [
      {
        id: "surgical-danger",
        label: "Rana je červená, opuchnutá, vyteká hnis alebo má pacient zvýšenú teplotu",
        sublabel: "Príznaky akútnej chirurgickej infekcie.",
        isRedFlag: true,
        redFlagReason:
          "Podozrenie na rozvoj chirurgickej infekcie alebo dehiscenciu rany. Okamžite kontaktujte operujúce pracovisko alebo chirurgickú pohotovosť.",
      },
      {
        id: "surgical-calm",
        label: "Rana je pokojná, bez hnisu a teplôt",
        sublabel: "Stehy sú už vybraté alebo je rana zacelená a chceme podporiť peknú jazvu.",
        nextStepId: "step-surgical-age",
      },
    ],
  },

  "step-surgical-age": {
    id: "step-surgical-age",
    stepNumber: 3,
    totalSteps: 3,
    category: "surgical",
    title: "V akom štádiu je vaša jazva?",
    description: "Doba od zákroku rozhoduje o type starostlivosti.",
    educationalTip:
      "Prvé týždne po vybratí stehov sú kľúčovým oknom: aplikácia medicínskeho medu L-Mesitran dodá hydratáciu, ktorá zabráni premene jazvy na červený keloid.",
    options: [
      {
        id: "surgical-fresh",
        label: "Čerstvo zacelená rana po vybratí stehov (1. až 4. týždeň)",
        sublabel: "Koža je spojená, jemná, náchylná na vysušenie a zhrubnutie.",
        resultId: "res-surgical-fresh",
      },
      {
        id: "surgical-mature",
        label: "Staršia jazva, ktorá tuhne, je vyvýšená alebo svrbí",
        sublabel: "Potreba hĺbkovej hydratácie, remodelácie kolagénu a masáží.",
        resultId: "res-surgical-mature",
      },
    ],
  },

  // ===================== CHRONICKÉ RANY =====================
  "step-chronic-assessment": {
    id: "step-chronic-assessment",
    stepNumber: 2,
    totalSteps: 3,
    category: "chronic",
    title: "Chronické rany: Posúdenie defektu",
    description: "Dekubity, vredy predkolenia alebo nehojace sa rany.",
    educationalTip:
      "Väčšina chronických rán je kolonizovaná odolným bakteriálnym biofilmom. Aqvitox biofilm rozpúšťa a L-Mesitran Ointment vytiahne zápach a odumretý fibrín.",
    options: [
      {
        id: "chronic-danger",
        label: "Prítomná čierna nekróza, silný zápach, horúčka alebo flegmóna nohy",
        sublabel: "Hlboké odumretie tkaniva vyžadujúce chirurgický zákrok.",
        isRedFlag: true,
        redFlagReason:
          "Hlboká tkanivová nekróza a šíriaci sa zápal ohrozujú celkový obeh a vyžadujú chirurgický debridement v nemocnici.",
      },
      {
        id: "chronic-manageable",
        label: "Rana má žlté/belavé povlaky, mokvá, alebo je červená a pomaly sa zatvára",
        sublabel: "Bércový vred alebo preležanina vhodná na moderné vlhké ošetrovanie doma.",
        nextStepId: "step-chronic-slough",
      },
    ],
  },

  "step-chronic-slough": {
    id: "step-chronic-slough",
    stepNumber: 3,
    totalSteps: 3,
    category: "chronic",
    title: "Aký je povrch chronickej rany?",
    description: "Prítomnosť povlaku určuje, či potrebujeme gél alebo hustejšiu masť.",
    educationalTip:
      "L-Mesitran Ointment s 48% medicínskym medom má silný osmotický ťah, ktorý 'vyťahuje' povlak z rany bez mechanického drhnutia.",
    options: [
      {
        id: "chronic-sloughy",
        label: "V rane sú žlté lepkavé povlaky (fibrín) a rana zapácha",
        sublabel: "Vyžaduje autolytické očistenie a redukciu biofilmu.",
        resultId: "res-chronic-slough",
      },
      {
        id: "chronic-granulating",
        label: "Spodina je čistá, červená (granuluje) a cieľom je uzavretie",
        sublabel: "Potreba chrániť novotvorené kapiláry a podporiť rast novej kože.",
        resultId: "res-chronic-granulating",
      },
    ],
  },
};

// ===================== PROTOKOLY A ODPORÚČANIA =====================
export const TRIAGE_RESULTS: Record<string, TriageResult> = {
  "res-burn-1": {
    id: "res-burn-1",
    category: "burn",
    categoryTitle: "Popálenina 1. stupňa (začervenanie)",
    title: "Postup ošetrenia: Povrchová popálenina 1. stupňa",
    summary:
      "Koža je začervenaná a bolestivá, no celistvá. Cieľom je okamžite zastaviť prestup tepla do hĺbky, upokojiť nervové zakončenia a hydratovať pokožku medicínskym medom.",
    actions: [
      {
        phase: "1. Okamžité ochladenie",
        title: "Chladenie čistou vlažnou vodou (10-15 minút)",
        instruction:
          "Postihnuté miesto okamžite chlaďte tečúcou vlažnou vodou (15-20 °C). Nikdy nepoužívajte ľad, ktorý by spôsobil omrzlinu buniek.",
        educationalNote: "Chladenie znižuje teplotu v tkanive a zabraňuje prehlbovaniu popáleniny.",
      },
      {
        phase: "2. Šetrná dezinfekcia a upokojenie",
        title: "Ošetrenie roztokom Aqvitox-D",
        instruction:
          "Jemne nastriekajte Aqvitox-D na popálené miesto. Roztok nepáli, chladí a eliminuje mikróby bez narušenia kožnej bariéry.",
        productKey: "aqvitox",
        educationalNote: "Alkohol na popálenú kožu nepatrí - spôsobil by bolesť a chemické poškodenie buniek.",
      },
      {
        phase: "3. Hojenie a regenerácia",
        title: "Aplikácia L-Mesitran Soft",
        instruction:
          "Naneste tenkú vrstvu hydroaktívneho gélu L-Mesitran Soft. Medicínsky med upokojuje pálivú bolesť a urýchľuje obnovu epitelu.",
        productKey: "mesitran-soft",
        educationalNote: "Gél udržiava vlhkosť, čím zabraňuje vysušeniu a nepeknému olupovaniu kože.",
      },
    ],
    mistakesToAvoid: [
      "Nikdy nenatierajte maslo, olej, masť ani múku - uzatvárajú teplo a vedú k infekcii.",
      "Nepoužívajte alkoholovú dezinfekciu ani lieh.",
      "Nevystavujte popálené miesto slnečnému žiareniu.",
    ],
    productIds: ["aqvitox", "mesitran-soft"],
  },

  "res-burn-2": {
    id: "res-burn-2",
    category: "burn",
    categoryTitle: "Popálenina 2. stupňa (pľuzgiere)",
    title: "Postup ošetrenia: Popálenina 2. stupňa s pľuzgiermi",
    summary:
      "Poškodenie zasiahlo aj časť škáry (dermis), čo vyvolalo tvorbu pľuzgierov. Pľuzgier je prirodzená sterilná ochrana. Kľúčom je sterilné vlhké krytie, ktoré zabráni sekundárnej infekcii.",
    actions: [
      {
        phase: "1. Chladenie a oplach",
        title: "Jemné chladenie vlažnou vodou (15 minút)",
        instruction:
          "Chlaďte miernym prúdom vlažnej vody bez silného tlaku, aby pľuzgiere nepraskli.",
        educationalNote: "Nikdy pľuzgiere neprepichujte - tekutina v nich chráni spodinu rany pred mikróbmi.",
      },
      {
        phase: "2. Bezbolestná dezinfekcia",
        title: "Postrek roztokom Aqvitox-D",
        instruction:
          "Výdatne nastriekajte Aqvitox-D priamo na pľuzgier a jeho okolie. Roztok nepáli a bezpečne dekontaminuje povrch.",
        productKey: "aqvitox",
        educationalNote: "Aqvitox spoľahlivo likviduje patogény bez cytotoxického poškodenia nového epitelu.",
      },
      {
        phase: "3. Vlhké krytie medicínskym medom",
        title: "Aplikácia L-Mesitran Soft a nepriľnavé krytie",
        instruction:
          "Naneste vrstvu gélu L-Mesitran Soft (1-2 mm) buď priamo na ranu, alebo na sterilné nepriľnavé krytie a zafixujte obväzom bez tlaku.",
        productKey: "mesitran-soft",
        educationalNote: "Medicínsky med zabráni prilepeniu obväzu k rane - preväz tak prebehne úplne bezbolestne.",
      },
    ],
    mistakesToAvoid: [
      "NIKDY neprepichujte ani nestrhávajte pľuzgiere!",
      "Neprikladajte suchú gázu bez liečivého gélu - prilepí sa na spodinu.",
      "Nenanášajte farebné tinktúry, ktoré sťažujú posúdenie rany lekárom.",
    ],
    productIds: ["aqvitox", "mesitran-soft"],
  },

  "res-abrasion-dirty": {
    id: "res-abrasion-dirty",
    category: "abrasion",
    categoryTitle: "Znečistená odrenina a cestné zranenie",
    title: "Protokol: Bezbolestné čistenie a hojenie odreniny",
    summary:
      "Znečistená odrenina (pád na bicykli, asfalt, piesok) vyžaduje dôkladný výplach, aby zrnká prachu nevrástli do novej kože. Aqvitox ranu vyčistí bez pálenia a L-Mesitran zabezpečí hojenie bez chrasty.",
    actions: [
      {
        phase: "1. Výdatný výplach nečistôt",
        title: "Oplach a dezinfekcia roztokom Aqvitox-D",
        instruction:
          "Ranu dôkladne preplachujte roztokom Aqvitox-D. Prúd roztoku bezbolestne vyplaví drobné zrnká štrku a prachu a zlikviduje baktérie.",
        productKey: "aqvitox",
        educationalNote: "Lieh do rany nepatrí - spôsobuje bolesť, popálenie granulačných buniek a horšie jazvenie.",
      },
      {
        phase: "2. Antibakteriálne vlhké ošetrenie",
        title: "Aplikácia gélu L-Mesitran Soft",
        instruction:
          "Na očistenú odreninu naneste rovnomernú vrstvu gélu L-Mesitran Soft. Medicínsky med osmoticky dočistí mikroskopické zvyšky a zničí mikróby.",
        productKey: "mesitran-soft",
        educationalNote: "Vo vlhkom prostredí nevzniká tvrdá suchá chrasta, ktorá pri každom pohybe praská a krváca.",
      },
      {
        phase: "3. Ochrana rany",
        title: "Sterilné nepriľnavé krytie",
        instruction:
          "Prekryte ranu sterilným nepriľnavým vankúšikom a zafixujte náplasťou. Preväzujte raz za 24 hodín.",
        educationalNote: "Vlhké hojenie skracuje dobu regenerácie odreniny z 14 dní na približne 6 až 8 dní.",
      },
    ],
    mistakesToAvoid: [
      "Nedrhnite ranu hrubou špongiou ani suchou vatou (vlákna vaty spôsobia hnisavý zápal).",
      "Nenechávajte ranu 'vysušiť na vzduchu' - suchá chrasta predlžuje hojenie až o 50%.",
    ],
    productIds: ["aqvitox", "mesitran-soft"],
  },

  "res-abrasion-clean": {
    id: "res-abrasion-clean",
    category: "abrasion",
    categoryTitle: "Čistá odrenina / plytké poranenie",
    title: "Protokol: Rýchle vlhké hojenie čistej odreniny",
    summary:
      "Rana je čistá a povrchová. Cieľom je zabrániť tvorbe praskajúcej chrasty a dosiahnuť hladkú novú kožu bez zanechania farebnej stopy.",
    actions: [
      {
        phase: "1. Šetrný oplach",
        title: "Dezinfekcia roztokom Aqvitox-D",
        instruction:
          "Postriekajte ranu Aqvitoxom na zabezpečenie mikrobiálnej čistoty pred aplikáciou gélu.",
        productKey: "aqvitox",
        educationalNote: "Aqvitox pôsobí rýchlo a nedráždi obnažené nervové zakončenia.",
      },
      {
        phase: "2. Regenerácia medicínskym medom",
        title: "Tenká vrstva L-Mesitran Soft",
        instruction:
          "Naneste tenkú vrstvu hydrogélu s medicínskym medom. Udrží kyslé pH (3,0 - 4,5), ktoré je prirodzeným štítom proti baktériám.",
        productKey: "mesitran-soft",
        educationalNote: "Vlhké prostredie umožňuje novým kožným bunkám hladký a rýchly presun po spodine rany.",
      },
      {
        phase: "3. Fixácia",
        title: "Priedušná náplasť",
        instruction: "Prekryte hypoalergénnou priedušnou náplasťou s jemným vankúšikom.",
        educationalNote: "Priedušný materiál umožňuje pokožke dýchať a chráni ju pred vniknutím prachu.",
      },
    ],
    mistakesToAvoid: [
      "Nestrhavajte tvoriaci sa jemný epitel.",
      "Nekúpte ranu v horúcej vani ani na verejných kúpaliskách.",
    ],
    productIds: ["aqvitox", "mesitran-soft"],
  },

  "res-surgical-fresh": {
    id: "res-surgical-fresh",
    category: "surgical",
    categoryTitle: "Jazva po vybratí stehov (1.-4. týždeň)",
    title: "Protokol: Starostlivosť o jazvu po vybratí stehov",
    summary:
      "V prvých týždňoch po vybratí stehov sa rozhoduje o tom, či bude jazva tenká a nenápadná, alebo zhrubnutá a červená. Kľúčom je hĺbková hydratácia a hygiena.",
    actions: [
      {
        phase: "1. Šetrná očista",
        title: "Očistenie línie jazvy roztokom Aqvitox-D",
        instruction:
          "Po jemnom umytí vlažnou vodou nastriekajte Aqvitox-D na očistenie kanálikov po stehoch bez rizika podráždenia.",
        productKey: "aqvitox",
        educationalNote: "Predchádza drobnému zápalu v mieste vpichov po chirurgických ihlách.",
      },
      {
        phase: "2. Hydratácia a prevencia keloidu",
        title: "Aplikácia gélu L-Mesitran Soft",
        instruction:
          "Aplikujte malé množstvo gélu pozdĺž jazvy 1 až 2x denne. Medicínsky med bráni dehydratácii jazvy, ktorá je primárnym spúšťačom hypertrofie.",
        productKey: "mesitran-soft",
        educationalNote: "Bioaktívne zložky medu stimulujú správne usporiadanie kolagénových vlákien.",
      },
      {
        phase: "3. Tlaková masáž (od 3. týždňa)",
        title: "Jemná tlaková masáž bruškom prsta",
        instruction:
          "Akonáhle je jazva celistvá, vykonávajte tlakovú masáž (zatlačte na jazvu do zblednutia na 10 sekúnd, uvoľnite a posuňte sa ďalej).",
        educationalNote: "Tlakom vyvolaná lokálna ischémia stimuluje prestavbu kolagénu do hladkého usporiadania.",
      },
    ],
    mistakesToAvoid: [
      "Nevystavujte čerstvú jazvu priamemu slnku (UV žiarenie spôsobí nevratné zhnednutie jazvy - používajte SPF 50+).",
      "Nenanášajte agresívne parfumované kozmetické krémy, kým nie je koža úplne zacelená.",
    ],
    productIds: ["aqvitox", "mesitran-soft"],
  },

  "res-surgical-mature": {
    id: "res-surgical-mature",
    category: "surgical",
    categoryTitle: "Vyzrievajúca alebo tuhnúca jazva",
    title: "Protokol: Zmäkčenie a remodelácia staršej jazvy",
    summary:
      "Ak je jazva tuhá, červená alebo mierne vyvýšená, potrebuje dlhodobé zmäkčovanie, hydratáciu a cielenú masáž.",
    actions: [
      {
        phase: "1. Zmäkčenie a výživa",
        title: "Lokálna aplikácia L-Mesitran Soft alebo Ointment",
        instruction:
          "Nanášajte masť alebo gél L-Mesitran 2x denne na oblasť jazvy. Podporuje elasticitu a hydratáciu kolagénu.",
        productKey: "mesitran-soft",
        educationalNote: "Medicínsky med dodáva stopové prvky a bioaktívne zložky potrebné pre zmäkčenie tuhého väziva.",
      },
      {
        phase: "2. Pravidelná tlaková masáž",
        title: "Masírovanie 3x denne po dobu 5 minút",
        instruction:
          "Cielený tlak napomáha prestavbe neusporiadaných kolagénových snopcov na elastické tkanivo.",
        educationalNote: "Mechanická stimulácia zabraňuje nadmernej tvorbe neorganizovaného kolagénu.",
      },
      {
        phase: "3. Dôsledná ochrana pred UV",
        title: "Krytie a fotoprotekcia SPF 50+",
        instruction:
          "Chráňte jazvu pred slnkom po dobu minimálne 6 až 12 mesiacov.",
        educationalNote: "Melanocyty v novom tkanive sú hyperaktívne; UV žiarenie spôsobuje trvalú pigmentáciu jazvy.",
      },
    ],
    mistakesToAvoid: [
      "Predčasné ukončenie starostlivosti - remodelácia tkaniva trvá 6 až 12 mesiacov.",
      "Používanie abrazívnych peelingov v snahe 'zbrúsiť' jazvu.",
    ],
    productIds: ["mesitran-soft"],
  },

  "res-chronic-slough": {
    id: "res-chronic-slough",
    category: "chronic",
    categoryTitle: "Chronická rana s povlakom (bércový vred / dekubit)",
    title: "Protokol: Rozpustenie biofilmu a autolytické čistenie",
    summary:
      "Žlté a sivé povlaky sú tvorené odumretým tkanivom, fibrínom a odolným bakteriálnym biofilmom. Aqvitox rozbíja biofilm a L-Mesitran Ointment s 48% medicínskym medom osmoticky vyťahuje povlaky bez bolesti.",
    actions: [
      {
        phase: "1. Likvidácia biofilmu",
        title: "Výplach a obklad s roztokom Aqvitox-D",
        instruction:
          "Ranu výdatne vypláchnite roztokom Aqvitox-D. Pri silnom povlaku priložte gázu navlhčenú Aqvitoxom na 10-15 minút.",
        productKey: "aqvitox",
        educationalNote: "Aqvitox účinne narúša ochranný biofilm baktérií, na ktorý bežné antiseptiká nestačia.",
      },
      {
        phase: "2. Osmotické čistenie rany",
        title: "Aplikácia masti L-Mesitran Ointment",
        instruction:
          "Naneste masť s vysokým obsahom medicínskeho medu (48%) priamo do defektu. Med odčerpá prebytočnú tekutinu a bezbolestne rozpustí žlté povlaky.",
        productKey: "mesitran-ointment",
        educationalNote: "Med eliminuje nepríjemný zápach chronickej rany a naštartuje novú tvorbu ciev.",
      },
      {
        phase: "3. Sekundárne krytie",
        title: "Sterilné savé a nepriľnavé krytie",
        instruction:
          "Prekryte sterilným nepriľnavým krytím a savým kompresom. Preväzujte každých 24 až 48 hodín podľa množstva sekrétu.",
        educationalNote: "Chráni okolitú kožu pred maceráciou a udržiava konštantnú teplotu rany pre enzymatickú aktivitu.",
      },
    ],
    mistakesToAvoid: [
      "Neodstraňujte povlaky násilne pinzetou na sucho - poškodíte krehké spodné cievy.",
      "Nezabúdajte na riešenie príčiny: bandážovanie nôh pri vredoch, polohovanie pri dekubitoch.",
    ],
    productIds: ["aqvitox", "mesitran-ointment"],
  },

  "res-chronic-granulating": {
    id: "res-chronic-granulating",
    category: "chronic",
    categoryTitle: "Čistá granulujúca chronická rana",
    title: "Protokol: Podpora epitelizácie a ochrana nového tkaniva",
    summary:
      "Rana je čistá, červená a granuluje. Cieľom je udržať stále vlhké prostredie a nepoškodiť krehké granulačné tkanivo pri preväzoch.",
    actions: [
      {
        phase: "1. Jemný oplach",
        title: "Jemný oplach roztokom Aqvitox-D",
        instruction: "Opláchnite spodinu rany bez mechanického trenia.",
        productKey: "aqvitox",
        educationalNote: "Bezdotykový oplach zabráni poškodeniu novovytvorených krehkých kapilár.",
      },
      {
        phase: "2. Podpora rastu nového epitelu",
        title: "Aplikácia L-Mesitran Soft",
        instruction:
          "Naneste hydroaktívny gél L-Mesitran Soft, ktorý stimuluje migráciu buniek z okrajov rany.",
        productKey: "mesitran-soft",
        educationalNote: "Vlhké mikroprostredie s medicínskym medom zrýchľuje proces epitelizácie a uzatvárania defektu.",
      },
      {
        phase: "3. Atraumatické krytie",
        title: "Nepriľnavé kontaktné krytie",
        instruction:
          "Použite krytie, ktoré sa neprilepí k rane. Preväzujte raz za 48 až 72 hodín.",
        educationalNote: "Dlhší interval preväzu nevychladzuje ranu a umožňuje neprerušenú tvorbu nového tkaniva.",
      },
    ],
    mistakesToAvoid: [
      "Príliš časté preväzy bez dôvodu ochladzujú ranu a zastavujú hojenie na niekoľko hodín.",
    ],
    productIds: ["aqvitox", "mesitran-soft"],
  },
};
