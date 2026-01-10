# Contexte IA - Ma Vita Nova

Ce fichier fournit le contexte nécessaire pour les sessions de développement assistées par IA.

## Résumé du Projet

**Ma Vita Nova** est un site web minimaliste pour Charlotte Lagona, psychologue FSP à Martigny (Suisse).

**Objectif principal** : Générer **4 consultations EN LIGNE par semaine** (pas d'appels téléphoniques).

**Status** : V1 complète - En production

## Évolution du Projet

### Session 10 Janvier 2025 - Mises à jour client + Formulaire enrichi

#### 1. Informations mises à jour
- **Nouvelle adresse** : Rue du Simplon 4, 1920 Martigny
- **Nouveaux tarifs** :
  - Thérapie individuelle : 140 CHF / 60 min (était 120 CHF)
  - Thérapie de couple : 180 CHF / 90 min (était 160 CHF)
- **Horaires** : "Consultations le samedi" au lieu de "Horaires flexibles" (pas de soirée)

#### 2. Nouveau formulaire de contact enrichi (v2)
Basé sur les besoins de Charlotte + inspiration Aepsy :
- **Type de consultation** : Personne seule / Couple (radio cards visuelles)
- **Modalité** : En ligne / En cabinet
- **Préoccupations** : 14 thématiques en checkboxes (anxiété, burn-out, couple, etc.)
- **Fréquence souhaitée** : 1x/sem, 2x/sem, 1x/mois, À définir
- **Prise en charge** : Paiement direct ou assurance complémentaire
- **Sélecteur d'assurance** : Liste des principales caisses suisses (conditionnel)

#### 3. Fichiers modifiés
- `src/config/site.ts` - Adresse + tarifs + durées
- `src/components/sections/WhyOnline.astro` - Samedi au lieu de soirée
- `src/pages/prestations.astro` - Durées dynamiques depuis config
- `src/pages/contact.astro` - Formulaire enrichi complet

### Session Janvier 2025 - Optimisation SEO/LLM + Online-First

#### 1. Optimisation Performance (Build 43MB → 3.4MB)
- Conversion de toutes les images PNG → WebP (~96% réduction)
- Photo Charlotte optimisée : 2.5MB → 42KB
- Ajout robots.txt et og-image.jpg

#### 2. Schema.org Structured Data (Score SEO 8.1/10)
- **BaseLayout.astro** : ProfessionalService + Person (avec credentials FSP)
- **prestations.astro** : FAQPage + Service schemas
- **ressources/index.astro** : FAQPage + ItemList schemas
- **ArticleLayout.astro** : Article + BreadcrumbList schemas

#### 3. Stratégie "Online-First" (Audit Gemini)
- Hero H1 : "Retrouvez l'harmonie, **où que vous soyez**"
- CTAs : "**Réserver ma séance vidéo**" (spécifique, orienté action)
- Keywords SEO : "psychologue en ligne suisse" en priorité
- Section "Comment ça marche" ajoutée à la homepage
- Téléphone masqué pour favoriser le formulaire en ligne

## Décisions de Design Importantes

### Approche Minimaliste

Le site a été conçu avec une philosophie "moins c'est plus" :

- **PAS de boutons agressifs** - Les CTA sont des liens soulignés ou des boutons outline subtils
- **PAS d'animations excessives** - Uniquement des transitions légères (opacity, border-color)
- **PAS de cards flottantes** - Contenu en lecture linéaire
- **PAS d'emojis** - Ton professionnel et sobre
- **BEAUCOUP d'espace blanc** - Le contenu respire

### Citation du Client

> "il m'a l'air un petit peu trop chargé le site.. et il faut être très très subtil avec les CTA.. on est pas à la fnac ici"

Cette remarque a guidé le refactoring complet du site vers une approche minimaliste.

## Fichiers Clés à Connaître

| Fichier | Rôle |
|---------|------|
| `src/config/site.ts` | **Configuration centralisée** - Contacts, tarifs, navigation, SEO keywords |
| `src/styles/global.css` | **Styles Tailwind** avec @theme CSS variables |
| `src/layouts/BaseLayout.astro` | **Layout principal** - SEO, Schema.org (ProfessionalService + Person) |
| `src/layouts/ArticleLayout.astro` | **Layout articles** - Schema.org Article + BreadcrumbList |
| `src/components/sections/Hero.astro` | **Hero Online-First** - "Réserver ma séance vidéo" |
| `src/components/sections/HowItWorks.astro` | **4 étapes** pour réserver en ligne |

## Structure des Pages

### Accueil (`/`)
5 sections :
1. **Hero** - "Retrouvez l'harmonie, où que vous soyez" + CTA vidéo
2. **Journey** - Scroll storytelling (illustrations fil rouge)
3. **WhyOnline** - 4 avantages de la consultation en ligne
4. **HowItWorks** - 4 étapes pour réserver (GSAP animations)
5. **CTA** - "Réserver ma séance vidéo"

### Ressources (`/ressources`)
- 14 articles SEO (anxiété, burn-out, couple, etc.)
- Chaque article avec Schema Article + BreadcrumbList
- Tags cliquables avec carousel horizontal

### Prestations (`/prestations`)
- Services avec tarifs (120 CHF individuel, 160 CHF couple)
- FAQ intégrée avec FAQPage Schema
- Service Schema pour chaque prestation

## Palette "Soft Sunrise"

```css
--color-primary: #2C3E50;     /* Texte principal */
--color-secondary: #E49C95;   /* Coral - accent */
--color-accent: #92ABD3;      /* Bleu doux */
--color-highlight: #EAC098;   /* Pêche */
--color-bg: #FDFBF7;          /* Fond crème */
--color-bg-alt: #F7F4EE;      /* Fond sections alt */
```

## Concept Visuel "Fil Rouge"

Les illustrations forment une cohérence narrative autour du thème "démêler ses pensées" :

1. `hero-noeud.webp` - Mains qui démêlent un fil (entrée)
2. `mind-tangled.webp` - Tête avec pensées emmêlées (problème)
3. `hands-brain.webp` - Mains + cerveau avec fleurs (solution)
4. `hand-flower.webp` - Main avec fleur épanouie (résultat)

**Prompt Nano Banana utilisé** :
```
Style: Ligne délicate, traits fins corail/pêche, fond transparent
Thème: Mains humaines + fil/corde symbolisant le démêlage des pensées
Palette: Coral (#E49C95), pêche (#EAC098), bleu doux (#92ABD3)
```

## À Éviter

1. **Boutons remplis colorés** (trop commerciaux)
2. **Animations translateY / scale** (trop "startup")
3. **Cards avec ombres fortes** (trop chargé)
4. **Emojis dans le contenu** (pas professionnel)
5. **Multiples CTA par section** (confusion)
6. **Téléphone visible** (favoriser le formulaire en ligne)

## Stack Technique

- **Astro 5.x** - Framework SSG
- **Tailwind CSS 4.x** - Utilise `@theme` et CSS variables
- **Alpine.js** - Menu mobile, accordéons
- **GSAP + ScrollTrigger** - Animations scroll (HowItWorks, Journey)
- **Netlify Forms** - Formulaire contact (`data-netlify="true"`)

## Commandes Utiles

```bash
npm run dev      # Développement local (localhost:4321)
npm run build    # Build production
npm run preview  # Prévisualiser le build
```

## Prochaines Étapes (Phase 2)

### Court terme
- [ ] Configurer domaine mavitanova.ch sur Netlify
- [ ] Ajouter Google Analytics / Plausible
- [ ] Tester formulaire Netlify en production

### Moyen terme
- [ ] Intégrer système de booking (Cal.com / Calendly)
- [ ] Ajouter témoignages anonymisés (si autorisé)
- [ ] Créer nouveaux articles SEO ciblés

### Long terme (Phase 2 - CRM)
- [ ] Dashboard patient inspiré Aepsy
- [ ] Gestion RDV et paiements
- [ ] Voir `../_docs/references/aepsy-benchmark/`

## Scores Audit Gemini (Janvier 2025)

| Critère | Score |
|---------|-------|
| Conversion RDV en ligne | 7/10 → amélioré |
| Schemas Structured Data | 8/10 |
| SEO Technique | 8.5/10 |
| Optimisation LLM | 9/10 |
| Contenu & Copywriting | 8/10 |
| **Score Global** | **8.1/10** |

---

*Dernière mise à jour : 9 Janvier 2025*
