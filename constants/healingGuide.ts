export interface HealingTopic {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  searchKeywords: string[];
  excerpt: string;
  mistakes: string[];
  protocol: {
    step: number;
    title: string;
    description: string;
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
    searchKeywords: [
      "popáleniny doma",
      "popáleniny liečba",
      "popáleniny prvá pomoc",
      "ako ošetriť popáleninu doma",
      "ako sa vyhnúť jazvám po popálení",
    ],
    excerpt:
      "Správne ochladenie a aplikácia medicínskeho medového gélu L-Mesitran zastavujú prestup tepla do hĺbky tkaniva a skracujú čas regenerácie na polovicu.",
    mistakes: [
      "Nikdy neaplikujte maslo, olej, masť ani múku - mýty o tuku 'uzatvárajú' teplo v pokožke a vedú k masívnej bakteriálnej infekcii.",
      "Nikdy nepoužívajte ľad ani ľadovú vodu - spôsobujú cievny spazmus a sekundárne omrznutie už aj tak traumatizovaných buniek.",
      "Nikdy neprepichujte pľuzgiere - sterilná tekutina vo vnútri chráni obnaženú dermis.",
    ],
    protocol: [
      {
        step: 1,
        title: "Chladenie čistou vlažnou vodou (10-15 minút)",
        description:
          "Okamžite ochladzujte postihnuté miesto tečúcou vlažnou vodou (15-20 °C). Chladenie znižuje bolesť a bráni odumieraniu hlbších vrstiev kože.",
      },
      {
        step: 2,
        title: "Bezbolestná dezinfekcia roztokom Aqvitox-D",
        description:
          "Popálené miesto jemne postriekajte roztokom Aqvitox-D. Nepáli, neštípe a zlikviduje mikróby bez poškodenia novotvoreného epitelu.",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 3,
        title: "Vlhké hojenie s L-Mesitran Soft",
        description:
          "Naneste tenkú vrstvu hydroaktívneho gélu s medicínskym medom. Upokojuje bolesť, hydratuje a zabraňuje prilepeniu gázového krytia.",
        productRecommendation: "L-Mesitran Soft hydrogél",
      },
    ],
  },
  {
    id: "odreniny",
    slug: "odreniny-cestne-popaleniny",
    title: "Akútne odreniny a cestné popáleniny: Liečba bez chrasty",
    subtitle: "Výplach štrku, ochrana pred infekciou a moderné vlhké hojenie po pádoch",
    searchKeywords: [
      "odreniny liečba",
      "cestné popáleniny",
      "odreniny prvá pomoc",
      "ako vyčistiť odreninu bez pálenia",
      "ako sa vyhnúť infekcii z odreniny",
    ],
    excerpt:
      "Suchá tvrdá chrasta je najväčšou brzdou hojenia - pri každom pohybe praská. Vlhké prostredie umožňuje novým bunkám hladký a rýchly rast.",
    mistakes: [
      "Nenanášajte lieh, alkoholovú dezinfekciu ani peroxid vodíka - spôsobujú bolesť a usmrcujú zdravé granulačné bunky.",
      "Nešúchajte ranu drsnou hubkou ani suchou vatou (vlákna vaty zostanú v rane a vytvoria hnisavý zápal).",
      "Nenechávajte odreninu 'vysušiť na vzduchu'.",
    ],
    protocol: [
      {
        step: 1,
        title: "Výdatný bezbolestný výplach roztokom Aqvitox-D",
        description:
          "Prepláchnite odreninu roztokom Aqvitox-D. Prúd roztoku bezbolestne vyplaví jemné zrnká prachu a štrku bez podráždenia nervových zakončení.",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 2,
        title: "Antibakteriálna vrstva L-Mesitran Soft",
        description:
          "Medicínsky med vytvára nepriepustnú bariéru proti baktériám, znižuje opuch a urýchľuje delenie kožných buniek.",
        productRecommendation: "L-Mesitran Soft hydrogél",
      },
      {
        step: 3,
        title: "Sterilné nepriľnavé krytie",
        description:
          "Zafixujte náplasťou alebo obväzom. Obväz vďaka medovému gélu neprischne a výmena prebehne bez bolesti.",
      },
    ],
  },
  {
    id: "jazvy",
    slug: "pooperacne-rany-jazvy",
    title: "Pooperačné rany a jazvy: Starostlivosť po vybratí stehov",
    subtitle: "Prevencia hypertrofických a keloidných jaziev v kľúčovom časovom okne",
    searchKeywords: [
      "pooperačné rany liečba",
      "jazvy po operácii",
      "ťažko sa hojace rany",
      "najlepší krém na jazvy po operácii",
      "masáž jazvy po vybratí stehov",
    ],
    excerpt:
      "V prvých týždňoch po vybratí stehov sa rozhoduje o tom, či bude jazva elastická a neviditeľná, alebo zhrubnutá a červená.",
    mistakes: [
      "Nevystavujte novú jazvu slnku (UV lúče aktivujú pigmentové bunky a jazva nezvratne stmavne - používajte SPF 50+).",
      "Nenanášajte mastné krémy, kým sú v rane stehy alebo ak rana presakuje.",
      "Nezačínajte s agresívnou masážou príliš skoro, aby ste neotvorili nezrelé tkanivo.",
    ],
    protocol: [
      {
        step: 1,
        title: "Očistenie línie jazvy roztokom Aqvitox-D",
        description: "Po jemnom umytí ošetrite miesta po stehoch šetrnou dezinfekciou bez alkoholu.",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 2,
        title: "Hĺbková hydratácia gélom L-Mesitran Soft",
        description:
          "Medicínsky med dodáva stopové prvky a bráni dehydratácii jazvy, ktorá je primárnym spúšťačom keloidného bujnenia.",
        productRecommendation: "L-Mesitran Soft",
      },
      {
        step: 3,
        title: "Tlaková masáž a fotoprotekcia",
        description:
          "Od 3. týždňa vykonávajte jemnú tlakovú masáž (zatlačenie bruškom prsta na 10 sekúnd do zblednutia) a chráňte pred UV žiarením.",
      },
    ],
  },
  {
    id: "chronicke",
    slug: "chronicke-rany-dekubity",
    title: "Chronické rany a dekubity: Rozpustenie povlaku a biofilmu",
    subtitle: "Riešenie pre bércové vredy (ulcus cruris), preležaniny a diabetické defekty",
    searchKeywords: [
      "liečba dekubitov doma",
      "bércové vredy liečba",
      "hojenie preležanín",
      "odstránenie zápachu z rany",
    ],
    excerpt:
      "Väčšina nehojacich sa rán je blokovaná odolným mikrobiálnym biofilmom. Aqvitox biofilm narúša a L-Mesitran Ointment osmoticky vyťahuje odumreté povlaky.",
    mistakes: [
      "Neodstraňujte povlaky mechanicky nasucho pinzetou - spôsobí to masívne krvácanie a bolesť.",
      "Nezabúdajte na príčinu: kompresívna terapia pri žilových vredoch a pravidelné polohovanie pri dekubitoch.",
    ],
    protocol: [
      {
        step: 1,
        title: "Výplach a obklad s roztokom Aqvitox-D",
        description:
          "Priložte gázu navlhčenú Aqvitoxom na 10-15 minút na rozrušenie bakteriálneho biofilmu.",
        productRecommendation: "Aqvitox-D roztok",
      },
      {
        step: 2,
        title: "Aplikácia L-Mesitran Ointment priamo do defektu",
        description:
          "Vysoký podiel medicínskeho medu (48%) osmoticky odčerpá opuch a bezbolestne rozpustí žlté fibrínové povlaky.",
        productRecommendation: "L-Mesitran Ointment masť",
      },
      {
        step: 3,
        title: "Savé sekundárne krytie",
        description: "Prekryte sterilným kompresom a preväzujte každých 24-48 hodín.",
      },
    ],
  },
];

export const LONG_TAIL_FAQS: FaqItem[] = [
  {
    question: "Prečo nepatrí na popáleninu maslo, olej ani bravčová masť?",
    answer:
      "Mastné produkty vytvoria na popálenej koži nepriedušný film, ktorý 'uväzní' teplo v hlbších vrstvách tkaniva namiesto jeho uvoľnenia. Tým sa popálenina ešte viac prehlbuje a navyše hrozí vážna bakteriálna infekcia. Jedinou správnou prvou pomocou je okamžité chladenie čistou vlažnou vodou po dobu 10-15 minút.",
  },
  {
    question: "Prečo sa na otvorené rany a odreniny neodporúča lieh ani peroxid vodíka?",
    answer:
      "Lieh a peroxid vodíka sú síce účinné dezinfekcie, no majú silne cytotoxický účinok - popália a zničia nielen baktérie, ale aj novovznikajúce krehké granulačné a epitelové bunky. Výsledkom je predĺžené hojenie a výraznejšia jazva. Na moderné ošetrenie sa používajú superoxidované roztoky (ako Aqvitox-D), ktoré nepália a nepoškodzujú zdravé tkanivo.",
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
    question: "Čím sa líši Aqvitox-D od bežných dezinfekčných sprejov?",
    answer:
      "Aqvitox-D je elektrochemicky aktivovaný superoxidovaný roztok s obsahom kyseliny chlórnej (HClO), ktorú prirodzene produkujú biele krvinky ľudského tela. Je 100% biokompatibilný, nepáli, nefarbí a účinne rozpúšťa odolný bakteriálny biofilm, na ktorý bežné antiseptiká nestačia.",
  },
];

