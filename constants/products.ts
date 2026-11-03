import {
  PHARMACY_AQVITOX_OFFERS,
  PHARMACY_MESITRAN_OFFERS,
  PharmacyOffer,
} from "./pharmacy-mesitran";

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
  packageSizes: string[];
  pharmacies: PharmacyOffer[];
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
      "Aqvitox-D je vysoko účinný roztok s neutrálnym pH, ktorého účinnou látkou je kyselina chlórna (HClO) - rovnaká látka, akú si ľudské biele krvinky (neutrofily) prirodzene vytvárajú pri boji s patogénmi. Pôsobí baktericídne, virucídne a fungicídne v priebehu niekoľkých sekúnd. Navyše účinne rozrušuje mikrobiálny biofilm, ktorý blokuje hojenie chronických rán.",
    activeIngredients: "Kyselina chlórna (HClO), chórnan sodný, oxid chloričitý, ozón, chlorid sodný, voda",
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
      "Pri znečistenej alebo chronickej rane priložte sterilnú gázu navlhčenú Aqvitoxom na 10-15 minút (obklad na rozpustenie biofilmu).",
      "Neoplachujte vodou - nechajte voľne pôsobiť a následne naneste hojivý gél alebo krytie.",
    ],
    clinicalHighlights: [
      "100% nepáli a neštípe - ideálne pre deti aj citlivých pacientov",
      "Nefarbí pokožku ani odev",
      "Nevyvoláva bakteriálnu rezistenciu (na rozdiel od lokálnych antibiotík)",
      "Vhodný na opakované a dlhodobé používanie",
    ],
    ceCertification: "CE 2265 (Zdravotnícka pomôcka)",
    packageSizes: ["500 ml s mechanickým rozprašovačom", "500 ml fľaša", "5000 ml nemocničné balenie"],
    pharmacies: PHARMACY_AQVITOX_OFFERS,
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
      "L-Mesitran Soft využíva silu medicínskeho medu vysokej čistoty (sterilizovaný gama žiarením). Vytvára v rane optimálne vlhké mikroprostredie s mierne kyslým pH (3,0 - 4,5), čo výrazne urýchľuje migráciu kožných buniek, stimuluje angiogenézu (tvorbu nových ciev) a potláča zápal. Pridané vitamíny C a E pôsobia ako silné antioxidanty chrániace novotvorené tkanivo.",
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
      "Aplikujte tenkú vrstvu (cca 1-2 mm) gélu L-Mesitran Soft priamo na spodinu rany alebo na sterilné nepriľnavé krytie.",
      "Prekryte vhodným sekundárnym obväzom (napr. sterilnou gázou alebo filmom).",
      "Preväzujte raz za 24 až 48 hodín v závislosti od množstva sekrétu z rany.",
    ],
    clinicalHighlights: [
      "Zabraňuje prilepeniu krytia na ranu - bezbolestné preväzy bez strhávania novej kože",
      "Zrýchľuje epitelizáciu až o 50% oproti suchému hojeniu",
      "Účinný aj proti rezistentným kmeňom (MRSA, VRE, Pseudomonas aeruginosa)",
      "Pôsobí protizápalovo a tlmí bolesť",
    ],
    ceCertification: "CE 0344 (Zdravotnícka pomôcka)",
    packageSizes: ["15 g tuba", "50 g tuba", "balenie vrecúšok 10 x 0,9 g"],
    pharmacies: PHARMACY_MESITRAN_OFFERS,
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
      "Vredy predkolenia (ulcus cruris - venózne, arteriálne aj zmiešané)",
      "Dekubity (tlakové preležaniny) všetkých štádií",
      "Syndróm diabetickej nohy a hlboké diabetické defekty",
      "Infikované, zapáchajúce a hnisajúce rany",
      "Hlbšie tržné a lacerované rany vyžadujúce autolytické čistenie",
    ],
    contraindications: "Známa precitlivenosť na med alebo včelie produkty.",
    howToUse: [
      "Ranú výdatne očistite roztokom Aqvitox-D a odstráňte voľné nečistoty.",
      "Aplikujte masť priamo do kavity alebo na dno rany v hrúbke 2-3 mm.",
      "Prekryte absorpčným sekundárnym krytím (sterilný savý kompres).",
      "Vymieňajte každých 24 až 48 hodín. Pri čistení povlakov môže byť sekrécia v prvých dňoch zvýšená (prirodzený proces čistenia).",
    ],
    clinicalHighlights: [
      "Rýchlo neutralizuje nepríjemný zápach spôsobený anaeróbnymi baktériami",
      "Podporuje prirodzený autolytický debridement (rozpúšťanie žltých povlakov)",
      "Hustá konzistencia zostáva na mieste aplikácie aj pri vyššej telesnej teplote",
      "Klinicky testovaná účinnosť na oddeleniach chronických rán",
    ],
    ceCertification: "CE 0344 (Zdravotnícka pomôcka)",
    packageSizes: ["20 g tuba", "50 g tuba"],
    pharmacies: PHARMACY_MESITRAN_OFFERS,
  },
];

