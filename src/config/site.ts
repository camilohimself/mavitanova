// Configuration centralisée du site Ma Vita Nova

export const siteConfig = {
  name: 'Ma Vita Nova',
  description: 'Cabinet de psychologie à Martigny. Consultations en ligne avec Charlotte Lagona, psychologue FSP. Thérapie individuelle, de couple et chromothérapie.',
  url: 'https://mavitanova.ch',

  // Contact
  contact: {
    name: 'Charlotte Lagona',
    title: 'Psychologue FSP',
    email: 'charlottelagona@gmail.com',
    phone: '+41 76 690 66 73',
    phoneDisplay: '076 690 66 73',
    address: {
      street: 'Rue de la Poste 7',
      city: 'Martigny',
      postalCode: '1920',
      country: 'Suisse',
    },
  },

  // Horaires
  hours: {
    weekdays: '09h00 - 17h30',
    saturday: '09h00 - 12h00',
    sunday: 'Fermé',
  },

  // Tarifs
  pricing: {
    individual: 120,
    couple: 160,
    chromotherapy: 80,
    currency: 'CHF',
  },

  // Social (à compléter si nécessaire)
  social: {
    linkedin: '',
    instagram: '',
  },

  // SEO
  seo: {
    titleTemplate: '%s | Ma Vita Nova - Psychologue Martigny',
    defaultTitle: 'Ma Vita Nova - Psychologue à Martigny | Consultations en ligne',
    defaultDescription: 'Charlotte Lagona, psychologue FSP à Martigny. Consultations en ligne et en cabinet. Thérapie individuelle, de couple, chromothérapie. Prenez rendez-vous.',
    keywords: [
      'psychologue Martigny',
      'psychologue en ligne',
      'consultation psychologique',
      'thérapie en ligne Suisse',
      'psychologue FSP',
      'Charlotte Lagona',
      'thérapie de couple',
      'chromothérapie',
    ],
  },

  // Navigation
  navigation: [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations', href: '/prestations' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'Contact', href: '/contact' },
  ],

  // CTA
  cta: {
    primary: {
      text: 'Réserver ma consultation',
      href: '/contact#reservation',
    },
    secondary: {
      text: 'Découvrir les prestations',
      href: '/prestations',
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
