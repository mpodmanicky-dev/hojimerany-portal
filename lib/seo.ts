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

export interface ProductOfferItem {
  seller: string;
  price: number | string;
  priceCurrency?: string;
  url: string;
  availability?: string;
}

export interface ProductReviewItem {
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
}

/**
 * Generuje Schema.org Product / MedicalDevice pre Google Rich Snippets (hviezdičky, ceny, recenzie, sklad)
 */
export function generateMedicalDeviceSchema(options: {
  name: string;
  description: string;
  brand: string;
  category: string;
  url: string;
  image?: string;
  sku?: string;
  gtin13?: string;
  mpn?: string;
  lowPrice?: number | string;
  highPrice?: number | string;
  priceCurrency?: string;
  offerCount?: number;
  offers?: ProductOfferItem[];
  aggregateRating?: {
    ratingValue: number | string;
    reviewCount: number;
    bestRating?: number | string;
    worstRating?: number | string;
  };
  reviews?: ProductReviewItem[];
}) {
  const schema: Record<string, unknown> = {
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
  };

  if (options.image) {
    schema.image = options.image;
  }

  if (options.sku) {
    schema.sku = options.sku;
  }

  if (options.gtin13) {
    schema.gtin13 = options.gtin13;
  }

  if (options.mpn) {
    schema.mpn = options.mpn;
  }

  // AggregateOffer s konkrétnymi ponukami lekární
  if (options.lowPrice) {
    schema.offers = {
      "@type": "AggregateOffer",
      priceCurrency: options.priceCurrency || "EUR",
      lowPrice: options.lowPrice,
      highPrice: options.highPrice || options.lowPrice,
      offerCount: options.offerCount || (options.offers ? options.offers.length : 1),
      availability: "https://schema.org/InStock",
      offers: options.offers?.map((offer) => ({
        "@type": "Offer",
        price: offer.price,
        priceCurrency: offer.priceCurrency || "EUR",
        url: offer.url,
        availability: offer.availability || "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: offer.seller,
        },
      })),
    };
  } else {
    schema.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    };
  }

  // AggregateRating (hviezdičky vo vyhľadávaní)
  if (options.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: options.aggregateRating.ratingValue,
      reviewCount: options.aggregateRating.reviewCount,
      bestRating: options.aggregateRating.bestRating || "5",
      worstRating: options.aggregateRating.worstRating || "1",
    };
  }

  // Recenzie
  if (options.reviews && options.reviews.length > 0) {
    schema.review = options.reviews.map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author,
      },
      datePublished: rev.datePublished,
      reviewBody: rev.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    }));
  }

  return schema;
}

