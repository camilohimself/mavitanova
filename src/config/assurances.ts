/**
 * Base de données des assurances complémentaires suisses
 * Données extraites de la grille Aepsy + vérification manuelle
 *
 * Note: Les conditions peuvent changer. Recommander aux clients
 * de vérifier directement auprès de leur assurance.
 *
 * Dernière mise à jour: Janvier 2025
 */

export interface AssuranceFormule {
  nom: string;
  couverture: {
    pourcentage?: number;      // ex: 75 pour 75%
    montantFixe?: number;      // ex: 40 pour CHF 40/séance
    maxAnnuel: number;         // ex: 1000 pour max CHF 1000/an
    periodeAns?: number;       // ex: 3 pour "/ 3 années"
  };
  prescription: 'non' | 'oui' | 'variable';
  note?: string;
}

export interface Assurance {
  id: string;
  nom: string;
  formules: AssuranceFormule[];
  aucuneCouverture?: boolean;  // true si aucune formule ne couvre
}

export const assurancesData: Assurance[] = [
  // === BONNE COUVERTURE ===
  {
    id: 'assura',
    nom: 'Assura',
    formules: [
      {
        nom: 'Complementa Extra',
        couverture: { pourcentage: 100, maxAnnuel: 1500 },
        prescription: 'non',
      },
      {
        nom: 'Complementa PLUS',
        couverture: { pourcentage: 80, maxAnnuel: 1500 },
        prescription: 'non',
      },
      {
        nom: 'MEDNA',
        couverture: { pourcentage: 80, maxAnnuel: 1000 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'groupe-mutuel',
    nom: 'Groupe Mutuel / Avenir',
    formules: [
      {
        nom: 'Global GEM',
        couverture: { pourcentage: 90, maxAnnuel: 1200 },
        prescription: 'non',
      },
      {
        nom: 'Premium',
        couverture: { pourcentage: 90, maxAnnuel: 1000 },
        prescription: 'non',
      },
      {
        nom: 'Optimum',
        couverture: { pourcentage: 90, maxAnnuel: 500 },
        prescription: 'non',
      },
      {
        nom: 'Global 4',
        couverture: { pourcentage: 80, maxAnnuel: 800 },
        prescription: 'non',
      },
      {
        nom: 'Global 3',
        couverture: { pourcentage: 80, maxAnnuel: 700 },
        prescription: 'non',
      },
      {
        nom: 'Global 2',
        couverture: { pourcentage: 70, maxAnnuel: 600 },
        prescription: 'non',
      },
      {
        nom: 'Global 1',
        couverture: { pourcentage: 60, maxAnnuel: 600 },
        prescription: 'non',
      },
      {
        nom: 'Global Classic',
        couverture: { montantFixe: 40, maxAnnuel: 800 },
        prescription: 'non',
        note: 'CHF 40 par séance',
      },
      {
        nom: 'Global mi-privée / privée',
        couverture: { pourcentage: 80, maxAnnuel: 1000 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'css',
    nom: 'CSS',
    formules: [
      {
        nom: 'Livo Top Premium / Balance',
        couverture: { pourcentage: 75, maxAnnuel: 1000 },
        prescription: 'non',
      },
      {
        nom: 'myFlex Premium / Balance',
        couverture: { pourcentage: 75, maxAnnuel: 1000 },
        prescription: 'non',
      },
      {
        nom: 'Livo Smart',
        couverture: { pourcentage: 50, maxAnnuel: 500 },
        prescription: 'non',
      },
      {
        nom: 'myFlex Economy',
        couverture: { pourcentage: 50, maxAnnuel: 500 },
        prescription: 'non',
      },
      {
        nom: 'CSS-Standardversicherungen',
        couverture: { montantFixe: 40, maxAnnuel: 800 },
        prescription: 'non',
        note: 'CHF 40/séance, max 20 séances/an',
      },
    ],
  },
  {
    id: 'sanitas',
    nom: 'Sanitas',
    formules: [
      {
        nom: 'Classic',
        couverture: { pourcentage: 80, maxAnnuel: 1000 },
        prescription: 'oui',
        note: 'Sur prescription médicale',
      },
      {
        nom: 'Family',
        couverture: { pourcentage: 75, maxAnnuel: 3000 },
        prescription: 'non',
        note: 'Intégration exclusive Aepsy',
      },
    ],
  },
  {
    id: 'swica',
    nom: 'Swica',
    formules: [
      {
        nom: 'COMPLETA FORTE / TOP',
        couverture: { pourcentage: 75, maxAnnuel: 3000 },
        prescription: 'non',
      },
      {
        nom: 'COMPLETA PRAEVENTA',
        couverture: { pourcentage: 75, maxAnnuel: 2000 },
        prescription: 'non',
      },
      {
        nom: 'OPTIMA / SUPPLEMENTA',
        couverture: { pourcentage: 50, maxAnnuel: 1000 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'helsana',
    nom: 'Helsana',
    formules: [
      {
        nom: 'COMPLETA',
        couverture: { pourcentage: 75, maxAnnuel: 1500 },
        prescription: 'variable',
        note: 'Conditions selon contrat',
      },
      {
        nom: 'Sana',
        couverture: { pourcentage: 50, maxAnnuel: 500 },
        prescription: 'variable',
      },
    ],
  },
  {
    id: 'visana',
    nom: 'Visana',
    formules: [
      {
        nom: 'Ambulant III',
        couverture: { pourcentage: 80, maxAnnuel: 3000 },
        prescription: 'non',
      },
      {
        nom: 'Ambulant II',
        couverture: { pourcentage: 70, maxAnnuel: 2000 },
        prescription: 'non',
      },
      {
        nom: 'Ambulant I',
        couverture: { pourcentage: 50, maxAnnuel: 1000 },
        prescription: 'non',
      },
      {
        nom: 'Komplementär I-III',
        couverture: { pourcentage: 75, maxAnnuel: 1500 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'kpt',
    nom: 'KPT',
    formules: [
      {
        nom: 'Krankenpflege-Comfort / Plus',
        couverture: { pourcentage: 75, maxAnnuel: 1000 },
        prescription: 'non',
      },
      {
        nom: 'Pulse Eco / Top / Premium',
        couverture: { pourcentage: 75, maxAnnuel: 1000 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'atupri',
    nom: 'Atupri',
    formules: [
      {
        nom: 'Mivita Extensa / Reala',
        couverture: { pourcentage: 75, maxAnnuel: 2000 },
        prescription: 'non',
      },
      {
        nom: 'Diversa',
        couverture: { pourcentage: 50, maxAnnuel: 1000 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'sympany',
    nom: 'Sympany',
    formules: [
      {
        nom: 'Plus',
        couverture: { pourcentage: 75, maxAnnuel: 1500 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'axa',
    nom: 'Axa',
    formules: [
      {
        nom: 'COMPLET',
        couverture: { pourcentage: 75, maxAnnuel: 500, periodeAns: 3 },
        prescription: 'non',
        note: 'Max CHF 500 sur 3 ans',
      },
      {
        nom: 'Intense',
        couverture: { pourcentage: 75, maxAnnuel: 2000 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'oekk',
    nom: 'ÖKK',
    formules: [
      {
        nom: 'ÖKK-NATUR / Prävention',
        couverture: { pourcentage: 75, maxAnnuel: 1000 },
        prescription: 'non',
      },
      {
        nom: 'START',
        couverture: { pourcentage: 50, maxAnnuel: 500 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'egk',
    nom: 'EGK',
    formules: [
      {
        nom: 'SUN 3 / 5',
        couverture: { pourcentage: 80, maxAnnuel: 3000 },
        prescription: 'non',
      },
      {
        nom: 'SUN 1 / 2',
        couverture: { pourcentage: 75, maxAnnuel: 1500 },
        prescription: 'non',
      },
      {
        nom: 'SUN Basic A / Flex',
        couverture: { pourcentage: 50, maxAnnuel: 500 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'rhenusana',
    nom: 'Rhenusana',
    formules: [
      {
        nom: 'rhenuPLUS Platin',
        couverture: { pourcentage: 80, maxAnnuel: 2000 },
        prescription: 'non',
      },
      {
        nom: 'rhenuPLUS Gold',
        couverture: { pourcentage: 75, maxAnnuel: 1500 },
        prescription: 'non',
      },
      {
        nom: 'rhenuPLUS Silber',
        couverture: { pourcentage: 50, maxAnnuel: 1000 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'agrisano',
    nom: 'Agrisano',
    formules: [
      {
        nom: 'AGRI-spezial',
        couverture: { pourcentage: 75, maxAnnuel: 1500 },
        prescription: 'non',
      },
      {
        nom: 'AGRI-natürlich',
        couverture: { pourcentage: 50, maxAnnuel: 500 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'aquilana',
    nom: 'Aquilana',
    formules: [
      {
        nom: 'TOP',
        couverture: { pourcentage: 75, maxAnnuel: 1500 },
        prescription: 'non',
      },
    ],
  },
  {
    id: 'vita-surselva',
    nom: 'Vita Surselva',
    formules: [
      {
        nom: 'Cumpletta / Sanvita',
        couverture: { pourcentage: 75, maxAnnuel: 1000 },
        prescription: 'non',
      },
      {
        nom: 'Activa / Allgemeiner Zusatz',
        couverture: { pourcentage: 50, maxAnnuel: 500 },
        prescription: 'non',
      },
    ],
  },
  // === PAS DE COUVERTURE ===
  {
    id: 'concordia',
    nom: 'Concordia',
    formules: [],
    aucuneCouverture: true,
  },
];

// Helper: obtenir toutes les assurances triées par nom
export function getAssurancesSorted(): Assurance[] {
  return [...assurancesData].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
}

// Helper: trouver une assurance par ID
export function getAssuranceById(id: string): Assurance | undefined {
  return assurancesData.find(a => a.id === id);
}

// Helper: formater la couverture pour affichage
export function formatCouverture(formule: AssuranceFormule): string {
  const { couverture } = formule;
  let text = '';

  if (couverture.pourcentage) {
    text = `${couverture.pourcentage}% remboursé`;
  } else if (couverture.montantFixe) {
    text = `CHF ${couverture.montantFixe} par séance`;
  }

  if (couverture.maxAnnuel) {
    const periode = couverture.periodeAns ? `${couverture.periodeAns} ans` : 'an';
    text += ` • Max. CHF ${couverture.maxAnnuel}/${periode}`;
  }

  return text;
}

// Helper: obtenir le niveau de couverture (pour badge visuel)
export function getCouvertureLevel(formule: AssuranceFormule): 'excellent' | 'bon' | 'partiel' {
  const { pourcentage, maxAnnuel } = formule.couverture;

  if (pourcentage && pourcentage >= 80 && maxAnnuel >= 1500) return 'excellent';
  if (pourcentage && pourcentage >= 70 && maxAnnuel >= 1000) return 'bon';
  return 'partiel';
}
