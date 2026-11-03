export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStepItem {
  name: string;
  text: string;
}

/**
 * Generuje Schema.org MedicalWebPage JSON-LD
 */
export function generateMedicalWebPageSchema(options: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: options.title,
    description: options.description,
    url: options.url,
    inLanguage: "sk",
    publisher: {
      "@type": "Organization",
      name: "Hojímerany.sk",
      url: "https://hojimerany.sk",
    },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Pacienti, rodinní opatrovatelia a laická verejnosť",
    },
    aspect: [
      "Prvá pomoc pri popáleninách a odreninách",
      "Princíp moderného vlhkého hojenia",
      "Správna dezinfekcia bez poškodenia epitelu",
      "Starostlivosť o pooperačné rany a jazvy",
    ],
  };
}

/**
 * Generuje Schema.org FAQPage pre long-tail vyhľadávania (Google Rich Snippets)
 */
export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generuje Schema.org HowTo pre postupy prvej pomoci krok za krokom
 */
export function generateHowToSchema(options: {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStepItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: options.name,
    description: options.description,
    totalTime: options.totalTime || "PT15M",
    step: options.steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/**
 * Generuje Schema.org Product / MedicalDevice
 */
export function generateMedicalDeviceSchema(options: {
  name: string;
  description: string;
  brand: string;
  category: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: options.name,
    description: options.description,
    brand: {
      "@type": "Brand",
      name: options.brand,
    },
    category: options.category,
    url: options.url,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
}

