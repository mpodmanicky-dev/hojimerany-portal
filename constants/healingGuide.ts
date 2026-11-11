export interface HealingTopic {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  accentColor: string;
  image: string;
  imageAlt: string;
  searchKeywords: string[];
  excerpt: string;
  mistakes: string[];
  protocol: {
    step: number;
    title: string;
    description: string;
    productKey?: "aqvitox" | "mesitran" | "aqvidine";
    productRecommendation?: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HEALING_TOPICS: HealingTopic[] = [
  {
    id: "popaleniny",
    slug: "popaleniny-domaca-liecba",
    title: "Popáleniny v domácnosti: Prvá pomoc a hojenie bez jaziev",
    subtitle: "Overené medicínske postupy pri obarení parou, vriacou vodou a dotyku horúcich predmetov",
    badge: "1. Stupeň & 2. Stupeň",
    accentColor: "#D97706",
    image: "/images/hojenie-popaleniny.jpg",
    imageAlt: "Prvá pomoc a vlhké ošetrenie popáleniny medicínskym medom L-Mesitran",
    searchKeywords: [
      "popáleniny doma",
      "popáleniny liečba",
      "popáleniny prvá pomoc",
      "ako ošetriť popáleninu doma",
      "ako sa vyhnúť jazvám po popálení",
    ],
    excerpt:
      "Správne ochladenie čistou vodou a následná aplikácia medicínskeho medového gélu L-Mesitran zastavujú prestup tepla do hĺbky tkaniva, uľavujú od pálčivej bolesti a skracujú čas regenerácie na polovicu bez vzniku stiahnutej jazvy.",
    mistakes: [
      "Nikdy neaplikujte maslo, olej, bravčovú masť ani múku – mastný tuk 'uzatvára' teplo v pokožke a vedie k sekundárnej infekcii.",
      "Nikdy nepoužívajte ľad ani ľadovú vodu – spôsobuje okamžitý cievny spazmus a omrznutie už aj tak traumatizovaných buniek.",
      "Nikdy neprepichujte pľuzgiere – sterilná tekutina vo vnútri prirodzene chráni obnažené nervové zakončenia a zamšu.",
    ],
    protocol: [
      {
        step: 1,
        title: "Chladenie čistou vlažnou vodou (10–15 minút)",
        description:
          "Okamžite ochladzujte postihnuté miesto miernym prúdom vlažnej vody (15–20 °C). Chladenie zmierňuje bolesť a bráni prehĺbeniu tepelnej nekrózy.",
      },
      {
        step: 2,
        title: "Šetrný antiseptický oplach roztokom Aqvitox-D",
        description:
          "Popálené miesto jemne postriekajte roztokom Aqvitox-D. Nepáli, neštípe a okamžite zlikviduje mikróby bez poškodenia novotvoreného epitelu.",
        productKey: "aqvitox",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 3,
        title: "Vlhké hojenie s L-Mesitran Soft",
        description:
          "Naneste rovnomernú vrstvu gélu s 40% medicínskym medom. Okamžite upokojuje pálivú bolesť, hydratuje a zabraňuje prilepeniu sekundárneho krytia.",
        productKey: "mesitran",
        productRecommendation: "L-Mesitran Soft gél",
      },
      {
        step: 4,
        title: "Neadherentné krytie Aqvidine (pri pľuzgieroch)",
        description:
          "Ak je koža strhnutá alebo hrozí infekcia, priložte sterilný tylový štvorec Aqvidine s jódom, ktorý sa neprilepí a umožní bezbolestný preväz.",
        productKey: "aqvidine",
        productRecommendation: "Aqvidine tylové krytie",
      },
    ],
  },
  {
    id: "odreniny",
    slug: "odreniny-cestne-popaleniny",
    title: "Akútne odreniny a cestné popáleniny: Liečba bez chrasty",
    subtitle: "Výplach štrku a prachu, ochrana pred infekciou a moderné vlhké hojenie po pádoch",
    badge: "Plošné zranenia",
    accentColor: "#085E95",
    image: "/images/hojenie-odreniny.jpg",
    imageAlt: "Bezbolestný výplach cestnej odreniny roztokom Aqvitox-D a vlhké hojenie",
    searchKeywords: [
      "odreniny liečba",
      "cestné popáleniny",
      "odreniny prvá pomoc",
      "ako vyčistiť odreninu bez pálenia",
      "ako sa vyhnúť infekcii z odreniny",
    ],
    excerpt:
      "Suchá tvrdá chrasta je najväčšou brzdou hojenia – pri každom pohybe v kĺbe praská a krváca. Vlhké prostredie umožňuje novým kožným bunkám migrovať po spodine rany hladko a bez odporu.",
    mistakes: [
      "Nenanášajte lieh, alkoholovú dezinfekciu ani peroxid vodíka – pália a usmrcujú zdravé bunky potrebné na regeneráciu.",
      "Nešúchajte ranu drsnou hubkou ani suchou vatou (vlákna vaty zostanú v rane a spôsobia hnisavý zápal).",
      "Nenechávajte odreninu 'vysušiť na vzduchu' – vznikne hrubá chrasta, ktorá zanechá trvalú pigmentovú jazvu.",
    ],
    protocol: [
      {
        step: 1,
        title: "Výdatný bezbolestný výplach roztokom Aqvitox-D",
        description:
          "Prepláchnite odreninu roztokom Aqvitox-D. Prúd roztoku bezbolestne odplaví zrnká prachu a štrku bez podráždenia obnažených nervov.",
        productKey: "aqvitox",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 2,
        title: "Antibakteriálna vrstva L-Mesitran Soft",
        description:
          "Medicínsky med vytvára nepriepustnú antibakteriálnu bariéru, redukuje edém a stimuluje rýchle delenie buniek bez tvorby chrasty.",
        productKey: "mesitran",
        productRecommendation: "L-Mesitran Soft hydrogél",
      },
      {
        step: 3,
        title: "Fixácia nepriľnavým sterilným obväzom",
        description:
          "Prekryte nepriľnavým krytím. Vďaka medovému gélu obväz neprischne a výmena prebehne po 24–48 hodinách úplne hladko.",
      },
    ],
  },
  {
    id: "pooperacne",
    slug: "pooperacne-rany-jazvy",
    title: "Pooperačné rany a jazvy: Starostlivosť po vybratí stehov",
    subtitle: "Prevencia hypertrofických a keloidných jaziev v kľúčovom časovom okne",
    badge: "Chirurgia & Estetika",
    accentColor: "#1a4b75",
    image: "/images/hojenie-jazvy.jpg",
    imageAlt: "Dermatologická starostlivosť o pooperačnú jazvu po vybratí stehov",
    searchKeywords: [
      "pooperačné rany liečba",
      "jazvy po operácii",
      "ťažko sa hojace rany",
      "najlepší krém na jazvy po operácii",
      "masáž jazvy po vybratí stehov",
    ],
    excerpt:
      "V prvých týždňoch po vybratí stehov sa rozhoduje o tom, či bude výsledná jazva jemná, elastická a takmer neviditeľná, alebo zhrubnutá, červená a keloidná. Kľúčom je hydratácia a správna stimulácia kolagénu.",
    mistakes: [
      "Nevystavujte novú jazvu slnku bez SPF 50+ – UV lúče aktivujú melanocyty a jazva nezvratne stmavne.",
      "Nenanášajte mastné nesterilné krémy, kým sú v rane stehy alebo ak incízia ešte presakuje.",
      "Nezačínajte s agresívnou masážou príliš skoro, aby ste neotvorili čerstvé zrastajúce sa tkanivo.",
    ],
    protocol: [
      {
        step: 1,
        title: "Očistenie línie rany roztokom Aqvitox-D",
        description:
          "Očistite línia incízie a vpichy po stehoch roztokom Aqvitox-D. Predchádza vzniku zápalu bez podráždenia nového epitelu.",
        productKey: "aqvitox",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 2,
        title: "Hĺbková regenerácia gélom L-Mesitran Soft",
        description:
          "Medicínsky med dodáva stopové prvky a vitamíny C a E, udržiava jazvu vláčnu a bráni dehydratácii, ktorá spúšťa keloidné bujnenie.",
        productKey: "mesitran",
        productRecommendation: "L-Mesitran Soft gél",
      },
      {
        step: 3,
        title: "Tlaková masáž a ochrana pred UV žiarením",
        description:
          "Od 2. až 3. týždňa vykonávajte jemnú tlakovú masáž bruškom prsta (stlačenie na 10 sekúnd do zblednutia) a chráňte pred slnkom.",
      },
    ],
  },
  {
    id: "chronicke",
    slug: "chronicke-rany-dekubity",
    title: "Chronické rany a dekubity: Rozpustenie povlaku a biofilmu",
    subtitle: "Riešenie pre bércové vredy (ulcus cruris), preležaniny a diabetické defekty",
    badge: "Chronické defekty",
    accentColor: "#F26F01",
    image: "/images/hojenie-chronicke.jpg",
    imageAlt: "Manažment chronických rán, dekubitov a aplikácia antiseptického krytia Aqvidine",
    searchKeywords: [
      "liečba dekubitov doma",
      "bércové vredy liečba",
      "hojenie preležanín",
      "odstránenie zápachu z rany",
      "jódové krytie na hnisavé rany",
    ],
    excerpt:
      "Väčšina nehojacich sa rán je zablokovaná odolným mikrobiálnym biofilmom a žltým fibrínovým povlakom. Kyselina chlórna v Aqvitoxe biofilm rozrušuje, medicínsky med autolyticky čistí spodinu a Aqvidine tvorí ochrannú antiseptickú bariéru.",
    mistakes: [
      "Neodstraňujte povlaky mechanicky nasucho gázou alebo pinzetou – spôsobíte krvácanie a traumatizáciu granulačného lôžka.",
      "Nezabúdajte na kauzálnu liečbu: kompresívna terapia pri žilových vredoch a pravidelné polohovanie (každé 2 hodiny) pri dekubitoch.",
      "Neaplikujte bežné náplasti, ktoré sa prilepia na dno rany a pri strhávaní zničia týždne hojenia.",
    ],
    protocol: [
      {
        step: 1,
        title: "15-minútový obklad roztokom Aqvitox-D na biofilm",
        description:
          "Priložte sterilnú gázu výdatne namočenú v Aqvitoxe na 10–15 minút. Kyselina chlórna prenikne biofilmom a rozloží ho.",
        productKey: "aqvitox",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 2,
        title: "Autolytický debridement s L-Mesitran",
        description:
          "Vysoká osmolarita medicínskeho medu vyťahuje prebytočný exsudát, odplavuje zápach a pomáha šetrne rozpúšťať odumretý fibrín.",
        productKey: "mesitran",
        productRecommendation: "L-Mesitran Soft / Ointment",
      },
      {
        step: 3,
        title: "Bariérové krytie Aqvidine (pri infekcii a sekrécii)",
        description:
          "Priložte masťový tyl s PVP jódom Aqvidine. Nelepí sa na ranu, prepúšťa sekrét do savého sekundárneho krytia a chráni pred mikróbmi.",
        productKey: "aqvidine",
        productRecommendation: "Aqvidine tylové krytie",
      },
    ],
  },
];

export const LONG_TAIL_FAQS: FaqItem[] = [
  {
    question: "Prečo nepatrí na popáleninu maslo, olej ani bravčová masť?",
    answer:
      "Mastné produkty vytvoria na popálenej koži nepriedušný film, ktorý 'uväzní' teplo v hlbších vrstvách tkaniva namiesto jeho uvoľnenia. Tým sa popálenina ešte viac prehlbuje a navyše hrozí vážna bakteriálna infekcia. Jedinou správnou prvou pomocou je okamžité chladenie čistou vlažnou vodou po dobu 10-15 minút a následné nanesenie hydrogélu na vlhké hojenie.",
  },
  {
    question: "Prečo sa na otvorené rany a odreniny neodporúča lieh ani peroxid vodíka?",
    answer:
      "Lieh a peroxid vodíka sú síce účinné dezinfekcie, no majú silne cytotoxický účinok – popália a zničia nielen baktérie, ale aj novovznikajúce krehké granulačné a epitelové bunky. Výsledkom je predĺžené hojenie, silné pálenie a výraznejšia jazva. Na moderné ošetrenie sa používajú superoxidované roztoky (ako Aqvitox-D s kyselinou chlórnou), ktoré nepália a nepoškodzujú zdravé tkanivo.",
  },
  {
    question: "Čo je to princíp vlhkého hojenia rán a prečo je lepší ako suchá chrasta?",
    answer:
      "Pri tradičnom sušení rany vzniká tvrdá suchá chrasta, pod ktorou sa novotvorené kožné bunky musia namáhavo predierať, čo hojenie spomaľuje a pri pohybe vedie k praskaniu. Moderné vlhké hojenie (hydroaktívne gély a medicínsky med) udržiava dno rany hydratované, vďaka čomu bunky migrujú až 2× rýchlejšie, bolesť ustupuje a minimalizuje sa vznik jazvy.",
  },
  {
    question: "Ako pomáha medicínsky med v prípravkoch L-Mesitran?",
    answer:
      "Medicínsky med je gama-sterilizovaný med s vysokým štandardom čistoty. Pôsobí antibakteriálne vďaka prirodzenej produkcii nízkych koncentrácií peroxidu a kyslému pH (3,0 - 4,5). Vďaka vysokej osmolarite vyťahuje z rany tekutinu, čistiace enzýmy a odumretý fibrín, stimuluje novotvorbu ciev a zabraňuje prilepeniu obväzu k rane.",
  },
  {
    question: "Kedy zvoliť jódové tylové krytie Aqvidine?",
    answer:
      "Aqvidine je sterilný neadherentný viskózový tyl napustený masťou s 10% PVP jódom. Je ideálny vtedy, keď je rana infikovaná alebo hrozí kontaminácia (napr. pri dekubitoch, hnisajúcich ranách a plošných popáleninách), a kde je potrebné zabezpečiť, aby krytie neprischlo k rane. Masťový základ zaručuje bezbolestný preväz.",
  },
  {
    question: "Čím sa líši Aqvitox-D od bežných dezinfekčných sprejov?",
    answer:
      "Aqvitox-D je elektrochemicky aktivovaný superoxidovaný roztok s obsahom kyseliny chlórnej (HClO), ktorú prirodzene produkujú biele krvinky ľudského tela. Je 100% biokompatibilný, nepáli, nefarbí a účinne rozpúšťa odolný bakteriálny biofilm, na ktorý bežné antiseptiká nestačia.",
  },
];
