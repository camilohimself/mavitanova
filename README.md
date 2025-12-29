# Ma Vita Nova - Site Web

Site web minimaliste pour le cabinet de psychologie **Ma Vita Nova** de Charlotte Lagona, psychologue FSP à Martigny (Suisse).

## Objectif Principal

**4 consultations en ligne par semaine** - Le site est optimisé pour la conversion digitale avec une expérience UX calme et rassurante, adaptée à une clientèle en recherche d'accompagnement psychologique.

## Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Astro | 5.x | Framework SSG |
| Tailwind CSS | 4.x | Styles avec @theme CSS variables |
| Alpine.js | 3.x | Interactivité légère (menu mobile) |
| TypeScript | - | Configuration et types |
| Netlify | - | Hébergement + Formulaires |

## Structure du Projet

```
ma-vita-nova-site/
├── public/
│   └── images/
│       ├── illustrations/     # Illustrations "fil rouge"
│       │   ├── hero-untangle.png
│       │   ├── mind-tangled.png
│       │   ├── hands-brain.png
│       │   └── hand-bloom.png
│       └── photos/           # Photo de Charlotte
│           └── charlotte-lagona.jpg
├── src/
│   ├── components/
│   │   ├── common/           # Header, Footer, Logo
│   │   ├── sections/         # Composants de page (Hero, CTA, etc.)
│   │   └── ui/               # Boutons, Cards (non utilisés actuellement)
│   ├── config/
│   │   └── site.ts           # Configuration centralisée
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout principal avec SEO
│   ├── pages/
│   │   ├── index.astro       # Accueil
│   │   ├── prestations.astro # Services et tarifs
│   │   ├── a-propos.astro    # Présentation Charlotte
│   │   ├── contact.astro     # Formulaire Netlify
│   │   ├── ressources/       # FAQ
│   │   ├── mentions-legales.astro
│   │   └── politique-confidentialite.astro
│   └── styles/
│       └── global.css        # Styles Tailwind + @theme
└── package.json
```

## Palette de Couleurs "Soft Sunrise"

```css
--color-primary: #2C3E50      /* Texte principal */
--color-secondary: #E49C95    /* Coral - Accent principal */
--color-accent: #92ABD3       /* Bleu doux */
--color-highlight: #EAC098    /* Pêche */
--color-bg: #FDFBF7           /* Fond crème */
--color-bg-alt: #F7F4EE       /* Fond alternatif */
```

## Pages du Site

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero minimaliste + pourquoi en ligne + présentation |
| Prestations | `/prestations` | Tarifs + FAQ inline |
| À propos | `/a-propos` | Parcours + approche thérapeutique |
| Contact | `/contact` | Formulaire Netlify + coordonnées |
| Ressources | `/ressources` | FAQ questions fréquentes |
| Mentions légales | `/mentions-legales` | Obligations légales |
| Confidentialité | `/politique-confidentialite` | RGPD |

## Concept Visuel "Fil Rouge"

Les illustrations utilisent le concept de **mains qui démêlent un fil** - métaphore visuelle du travail thérapeutique. 4 illustrations cohérentes avec fond transparent :

1. **hero-untangle.png** - Mains démêlant un fil (Hero)
2. **mind-tangled.png** - Tête avec pensées emmêlées (WhyOnline)
3. **hands-brain.png** - Mains + cerveau avec fleurs (About)
4. **hand-bloom.png** - Main avec fleur épanouie (CTA)

## Commandes

```bash
npm install           # Installer les dépendances
npm run dev           # Serveur de développement (localhost:4321)
npm run build         # Build de production
npm run preview       # Prévisualiser le build
```

## Configuration Centralisée

Toutes les données du site sont dans `src/config/site.ts` :
- Coordonnées
- Tarifs
- Horaires
- Navigation
- SEO

## Principes UX Appliqués

1. **Minimalisme** - Pas de surcharge visuelle, beaucoup d'espace blanc
2. **CTA subtils** - Liens soulignés au lieu de boutons agressifs
3. **Pas de menu CTA** - Le header reste sobre
4. **Pas d'animations excessives** - Transitions légères uniquement
5. **Mobile-first** - Menu hamburger avec Alpine.js

## Références Design

- [Aepsy](https://aepsy.com/fr) - Benchmark UX santé mentale
- [Looka Astro](https://looka-astro.netlify.app) - Template minimaliste

## Déploiement

Le site est prévu pour Netlify avec :
- Build automatique sur push
- Netlify Forms pour le formulaire de contact
- Optimisation d'images automatique

---

**Client** : Charlotte Lagona - Ma Vita Nova
**URL** : mavitanova.ch
**Dernière mise à jour** : Décembre 2024
