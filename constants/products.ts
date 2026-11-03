import {
  PHARMACY_AQVITOX_OFFERS,
  PHARMACY_MESITRAN_OFFERS,
  PharmacyOffer,
} from "./pharmacy-mesitran";

export interface RegulatoryDocs {
  pilTitle: string;
  pilSummary: string;
  pilPoints: string[];
  spcTitle: string;
  spcSummary: string;
  spcPoints: string[];
}

export interface DetailedProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  role: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  activeIngredients: string;
  mechanismOfAction: string;
  indications: string[];
  contraindications?: string;
  howToUse: string[];
  clinicalHighlights: string[];
  ceCertification: string;
  suklCode: string;
  adcCode: string;
  packageSizes: string[];
  pharmacies: PharmacyOffer[];
  distributor: string;
  regulatory: RegulatoryDocs;
  badgeColor?: string;
}

export const DETAILED_PRODUCTS: DetailedProduct[] = [
  {
    id: "aqvitox-d",
    slug: "aqvitox-d-roztok",
    name: "Aqvitox-D roztok",
    category: "Zdravotnícka pomôcka triedy IIb",
    role: "Krok 1: Šetrný výplach a dezinfekcia",
    tagline: "Superoxidovaný roztok na bezbolestné čistenie rán a likvidáciu biofilmu",
    shortDescription:
      "Elektrochemicky aktivovaný superoxidovaný roztok na bezbolestnú dezinfekciu, oplach a čistenie akútnych aj chronických rán bez poškodenia zdravého tkaniva.",
    fullDescription:
      "Aqvitox-D je vysoko účinný roztok s neutrálnym pH, ktorého účinnou látkou je kyselina chlórna (HClO) – rovnaká látka, akú si ľudské biele krvinky (neutrofily) prirodzene vytvárajú pri boji s patogénmi. Pôsobí baktericídne, virucídne a fungicídne v priebehu niekoľkých sekúnd. Navyše účinne rozrušuje mikrobiálny biofilm, ktorý blokuje hojenie chronických rán.",
    activeIngredients: "Kyselina chlórna (HClO), chlórnan sodný, oxid chloričitý, ozón, chlorid sodný, voda",
    mechanismOfAction:
      "Osmotická a oxidačná lýza bunkových stien mikroorganizmov bez vplyvu na ľudské bunky (vysoká selektívna biokompatibilita).",
    indications: [
      "Bezbolestné čistenie a dezinfekcia čerstvých odrenín, rezných a tržných rán",
      "Prvotný výplach popálenín I. a II. stupňa",
      "Rozrušenie povlakov a biofilmu pri bércových vredoch a dekubitoch",
      "Uvoľnenie prischutých obväzov bez poškodenia nového epitelu",
      "Oplach pooperačných rán pred aplikáciou sekundárneho krytia",
    ],
    contraindications: "Známa precitlivenosť na zlúčeniny chlóru (mimoriadne zriedkavá).",
    howToUse: [
      "Nastriekajte alebo vylejte dostatočné množstvo roztoku priamo do rany.",
      "Pri znečistenej alebo chronickej rane priložte sterilnú gázu navlhčenú Aqvitoxom na 10–15 minút (obklad na rozpustenie biofilmu).",
      "Neoplachujte vodou – nechajte voľne pôsobiť a následne naneste hojivý gél alebo krytie.",
    ],
    clinicalHighlights: [
      "100% nepáli a neštípe – ideálne pre deti aj citlivých pacientov",
      "Nefarbí pokožku ani odev",
      "Nevyvoláva bakteriálnu rezistenciu (na rozdiel od lokálnych antibiotík)",
      "Vhodný na opakované a dlhodobé používanie",
    ],
    ceCertification: "CE 2265 (MDR trieda IIb)",
    suklCode: "P 99452",
    adcCode: "8594165330018",
    distributor: "LERAM Pharmaceuticals sk s. r. o.",
    packageSizes: ["500 ml s mechanickým rozprašovačom", "500 ml fľaša", "1000 ml nemocničné balenie"],
    pharmacies: PHARMACY_AQVITOX_OFFERS,
    regulatory: {
      pilTitle: "PIL – Písomná informácia pre používateľa (Návod na použitie)",
      pilSummary:
        "Aqvitox-D je sterilný, biokompatibilný superoxidovaný roztok určený na debridement, výplach, zvlhčovanie a dekontamináciu akútnych aj chronických rán, vredov, rezov a popálenín.",
      pilPoints: [
        "Spôsob použitia: Aplikujte priamo na ranu postrekom alebo sterilným obkladom.",
        "Nežiaduce účinky: Nie sú známe žiadne závažné nežiaduce účinky ani alergické reakcie.",
        "Skladovanie: Uchovávajte pri teplote 5–25 °C, chráňte pred priamym slnečným žiarením.",
        "Čas použiteľnosti po otvorení: Spotrebujte do 3 mesiacov od prvého otvorenia.",
      ],
      spcTitle: "SPC – Súhrn klinických údajov a vlastností zdravotníckej pomôcky",
      spcSummary:
        "Elektrochemicky aktivovaný roztok s neutrálnym pH (6,8 – 7,4) a oxidačno-redukčným potenciálom > 850 mV. Rýchly baktericídny účinok (EN 13727), fungicídny (EN 13624) a virucídny (EN 14476).",
      spcPoints: [
        "In vitro testy potvrdzujú 99,99% redukciu MRSA, Pseudomonas aeruginosa a Candida albicans do 60 sekúnd.",
        "Selektívna biokompatibilita: index cytotoxicity podľa ISO 10993-5 preukazuje nulovú toxicitu pre ľudské fibroblasty.",
        "Účinné narušenie biofilmu uľahčuje následný autolytický debridement.",
      ],
    },
  },
  {
    id: "l-mesitran-soft",
    slug: "l-mesitran-soft-hydrogel",
    name: "L-Mesitran Soft gél",
    category: "Zdravotnícka pomôcka triedy IIb",
    role: "Krok 2: Vlhké hojenie a regenerácia",
    tagline: "Hydroaktívny gél s 40% medicínskym medom na popáleniny, odreniny a jazvy",
    shortDescription:
      "Antibakteriálny hydroaktívny gél vyvinutý špeciálne pre moderné vlhké hojenie akútnych rán, popálenín I. a II. stupňa, odrenín a pooperačných jaziev.",
    fullDescription:
      "L-Mesitran Soft využíva silu medicínskeho medu vysokej čistoty (sterilizovaný gama žiarením). Vytvára v rane optimálne vlhké mikroprostredie s mierne kyslým pH (3,0 – 4,5), čo výrazne urýchľuje migráciu kožných buniek, stimuluje angiogenézu (tvorbu nových ciev) a potláča zápal. Pridané vitamíny C a E pôsobia ako silné antioxidanty chrániace novotvorené tkanivo.",
    activeIngredients: "40% medicínsky med, medilát (hypoalergénny lanolín), PEG 4000, vitamín C a vitamín E",
    mechanismOfAction:
      "Kombinácia vysokej osmolarity (odčerpávanie exsudátu a odumretých buniek), nízkeho pH (antibakteriálna bariéra) a pomalého uvoľňovania mikrodávok peroxidu vodíka enzýmom glukózooxidáza.",
    indications: [
      "Popáleniny I. a II. stupňa (obareniny horúcou vodou, parou, dotykom)",
      "Plošné cestné odreniny a tržné rany",
      "Pooperačné rany po vybratí stehov na prevenciu hypertrofických jaziev",
      "Drobné domáce a detské poranenia, rezné rany",
      "Trhliny pokožky, ragády a povrchové defekty",
    ],
    contraindications: "Alergia na med alebo včelie produkty (veľmi zriedkavá pri medicínskom mede, ale kontraindikovaná).",
    howToUse: [
      "Ranú najskôr dôkladne vypláchnite roztokom Aqvitox-D a jemne osušte okolitú kožu.",
      "Aplikujte tenkú vrstvu (cca 1–2 mm) gélu L-Mesitran Soft priamo na spodinu rany alebo na sterilné nepriľnavé krytie.",
      "Prekryte vhodným sekundárnym obväzom (napr. sterilnou gázou alebo filmom).",
      "Preväzujte raz za 24 až 48 hodín v závislosti od množstva sekrétu z rany.",
    ],
    clinicalHighlights: [
      "Zabraňuje prilepeniu krytia na ranu – bezbolestné preväzy bez strhávania novej kože",
      "Zrýchľuje epitelizáciu až o 50% oproti suchému hojeniu",
      "Účinný aj proti rezistentným kmeňom (MRSA, VRE, Pseudomonas aeruginosa)",
      "Pôsobí protizápalovo a tlmí bolesť",
    ],
    ceCertification: "CE 0344 (DEKRA, MDR trieda IIb)",
    suklCode: "P 86241",
    adcCode: "8717545280017",
    distributor: "LERAM Pharmaceuticals sk s. r. o.",
    packageSizes: ["15 g tuba", "50 g tuba", "balenie vrecúšok 10 × 0,9 g"],
    pharmacies: PHARMACY_MESITRAN_OFFERS,
    regulatory: {
      pilTitle: "PIL – Písomná informácia pre používateľa (Návod na použitie)",
      pilSummary:
        "L-Mesitran Soft je primárny hydrogél na rany obsahujúci 40% medicínsky med. Vytvára vlhké prostredie podporujúce samovoľné hojenie a chrániace ranu pred infekciou.",
      pilPoints: [
        "Použitie: Naneste tenkú vrstvu priamo na defekt alebo gázu, prekryte sekundárnym krytím.",
        "Kontraindikácie: Nepoužívajte u osôb so známou precitlivenosťou na med alebo včelie produkty.",
        "Preväzy: Gél uľahčuje bezbolestné odstránenie krytia bez traumy granulačného tkaniva.",
        "Skladovanie: Uchovávajte pri teplote 5–25 °C.",
      ],
      spcTitle: "SPC – Súhrn klinických údajov a vlastností zdravotníckej pomôcky",
      spcSummary:
        "Klinicky overená zdravotnícka pomôcka na báze sterilizovaného medicínskeho medu. Osmotický efekt stimuluje odtok lymfy a odplavenie toxínov, nízke pH bráni kolonizácii patogénmi.",
      spcPoints: [
        "Klinické štúdie preukazujú významné zrýchlenie neovaskularizácie a stimuláciu fibroblastov.",
        "Vitamíny C a E stabilizujú bunkové membrány a neutralizujú reaktívne formy kyslíka (ROS).",
        "Znižuje lokálnu bolesť a neutralizuje zápach v spodine rany.",
      ],
    },
  },
  {
    id: "l-mesitran-ointment",
    slug: "l-mesitran-ointment-mast",
    name: "L-Mesitran Ointment masť",
    category: "Zdravotnícka pomôcka triedy IIb",
    role: "Krok 2: Odstránenie povlakov a hlboké hojenie",
    tagline: "Vysoko koncentrovaná masť s 48% medicínskym medom na chronické a hlbšie rany",
    shortDescription:
      "Hustá liečivá masť s najvyšším podielom medicínskeho medu (48%) určená na čistenie nehojacich sa defektov, vredov predkolenia, dekubitov a infikovaných rán.",
    fullDescription:
      "L-Mesitran Ointment je silnejší variant s vyššou viskozitou určený na primárne vyčistenie spodiny ťažko sa hojacich rán. Vďaka 48% podielu medicínskeho medu vyvíja silný osmotický tlak, ktorý nasáva tekutinu z hĺbky tkaniva. Tým podporuje autolytický debridement – šetrné rozpadnutie a vyplavenie fibrínového povlaku, hnisu a mikrobiálnej záťaže bez traumatizujúceho chirurgického zoškrabovania.",
    activeIngredients: "48% medicínsky med, medilát (hypoalergénny lekársky lanolín), slnečnicový olej, oxid zinočnatý, vitamíny C a E",
    mechanismOfAction:
      "Intenzívny osmotický gradient rozrušujúci nekrotické povlaky a biofilm, znižujúci mikrobiálnu záťaž a odstraňujúci zápach z rany.",
    indications: [
      "Vredy predkolenia (ulcus cruris – venózne, arteriálne aj zmiešané)",
      "Dekubity (tlakové preležaniny) všetkých štádií",
      "Syndróm diabetickej nohy a hlboké diabetické defekty",
      "Infikované, zapáchajúce a hnisajúce rany",
      "Hlbšie tržné a lacerované rany vyžadujúce autolytické čistenie",
    ],
    contraindications: "Známa precitlivenosť na med alebo včelie produkty.",
    howToUse: [
      "Ranú výdatne očistite roztokom Aqvitox-D a odstráňte voľné nečistoty.",
      "Aplikujte masť priamo do kavity alebo na dno rany v hrúbke 2–3 mm.",
      "Prekryte absorpčným sekundárnym krytím (sterilný savý kompres).",
      "Vymieňajte každých 24 až 48 hodín. Pri čistení povlakov môže byť sekrécia v prvých dňoch zvýšená (prirodzený proces čistenia).",
    ],
    clinicalHighlights: [
      "Rýchlo neutralizuje nepríjemný zápach spôsobený anaeróbnymi baktériami",
      "Podporuje prirodzený autolytický debridement (rozpúšťanie žltých povlakov)",
      "Hustá konzistencia zostáva na mieste aplikácie aj pri vyššej telesnej teplote",
      "Klinicky testovaná účinnosť na oddeleniach chronických rán",
    ],
    ceCertification: "CE 0344 (DEKRA, MDR trieda IIb)",
    suklCode: "P 86242",
    adcCode: "8717545280055",
    distributor: "LERAM Pharmaceuticals sk s. r. o.",
    packageSizes: ["20 g tuba", "50 g tuba"],
    pharmacies: PHARMACY_MESITRAN_OFFERS,
    regulatory: {
      pilTitle: "PIL – Písomná informácia pre používateľa (Návod na použitie)",
      pilSummary:
        "L-Mesitran Ointment je antibakteriálna masť na báze 48% medicínskeho medu určená na manažment ťažko sa hojacich a kontaminovaných rán a dekubitov.",
      pilPoints: [
        "Použitie: Aplikujte priamo do spodiny rany v dostatočnom množstve, prekryte savým sekundárnym krytím.",
        "Kontraindikácie: Alergia na včelie produkty.",
        "Upozornenie: V úvode liečby dochádza k prirodzenému čisteniu a zvýšenej exsudácii.",
        "Skladovanie: Uchovávajte pri teplote 5–25 °C mimo dosahu detí.",
      ],
      spcTitle: "SPC – Súhrn klinických údajov a vlastností zdravotníckej pomôcky",
      spcSummary:
        "Silný osmotický gradient (vysoká koncentrácia sacharidov v mede) vyvoláva prítok telových tekutín do spodiny rany, čím aktivuje autolytické enzymatické procesy odbúravania nekróz.",
      spcPoints: [
        "Efektívna eradikácia biofilmu a prevencia kolonizácie multirezistentnými kmeňmi (MRSA, Pseudomonas).",
        "Znižuje lokálny edém a podporuje prekrvenie okrajov defektu.",
        "Hypoalergénny lekársky lanolín (Medilate) a oxid zinočnatý chránia macerované okolie rany.",
      ],
    },
  },
];
