export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sconti Cucine',
  url: 'https://www.sconticucine.it',
  logo: 'https://www.sconticucine.it/logo.png',
  description:
    'Cucine di qualità Made in Italy. Showroom in tutta Italia con extra sconto fino a 1.000€.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Italian'],
  },
  sameAs: [],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'Sconti Cucine',
  image: 'https://www.sconticucine.it/og-image.jpg',
  '@id': 'https://www.sconticucine.it',
  url: 'https://www.sconticucine.it',
  telephone: '+39 02 1234 5678',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.4642,
    longitude: 9.1900,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '09:00',
    closes: '20:00',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Italy',
  },
}

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cucine Made in Italy',
  description: 'Cucine di qualità Made in Italy a prezzi scontati. Design contemporaneo, materiali premium e lavorazione artigianale.',
  brand: {
    '@type': 'Brand',
    name: 'Sconti Cucine',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '2000',
    highPrice: '15000',
    offerCount: '100+',
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto costa una cucina da Sconti Cucine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Le nostre cucine Made in Italy partono da prezzi molto competitivi grazie ai nostri sconti fino al 45%. Offriamo anche un extra sconto fino a 1.000€ per tutti i nuovi clienti che richiedono il catalogo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Il trasporto e montaggio sono inclusi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, il trasporto e il montaggio della tua nuova cucina sono completamente inclusi nel prezzo. Inoltre, ci occupiamo anche del ritiro e smaltimento della tua vecchia cucina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanti showroom avete in Italia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Abbiamo showroom distribuiti in tutta Italia, aperti 7 giorni su 7 per offrirti la massima flessibilità. Prenota una consulenza gratuita nel punto vendita più vicino a te.',
      },
    },
    {
      '@type': 'Question',
      name: 'Che garanzia offrite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tutte le nostre cucine sono garantite 5 anni senza spese aggiuntive. Inoltre, siamo certificati ISO 9001, garanzia di processi e standard elevati.',
      },
    },
    {
      '@type': 'Question',
      name: 'Offrite la progettazione 3D?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, offriamo progettazione 3D completamente gratuita. Un nostro designer dedicato creerà un rendering realistico della tua cucina nel tuo ambiente, per aiutarti a visualizzare il risultato finale prima dell\'acquisto.',
      },
    },
  ],
}
