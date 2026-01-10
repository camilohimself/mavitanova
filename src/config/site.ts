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
      street: 'Rue du Simplon 4',
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
    individual: 140,
    individualDuration: '60 min',
    couple: 180,
    coupleDuration: '90 min',
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
    titleTemplate: '%s | Ma Vita Nova - Psychologue en ligne Suisse',
    defaultTitle: 'Psychologue en ligne Suisse | Ma Vita Nova - Charlotte Lagona FSP',
    defaultDescription: 'Consultation psychologue en ligne en Suisse. Charlotte Lagona, psychologue FSP. Séances vidéo sécurisées depuis chez vous. Thérapie individuelle et de couple.',
    keywords: [
      'psychologue en ligne suisse',
      'consultation psy en ligne',
      'thérapie en ligne Suisse',
      'psychologue vidéo',
      'psychologue FSP en ligne',
      'consultation psychologique en ligne',
      'psychologue Martigny',
      'Charlotte Lagona',
      'thérapie de couple en ligne',
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
      text: 'Réserver ma séance vidéo',
      href: '/contact',
    },
    secondary: {
      text: 'Découvrir les prestations',
      href: '/prestations',
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
