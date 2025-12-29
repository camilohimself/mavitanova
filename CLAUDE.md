# Contexte IA - Ma Vita Nova

Ce fichier fournit le contexte nécessaire pour les sessions de développement assistées par IA.

## Résumé du Projet

**Ma Vita Nova** est un site web minimaliste pour Charlotte Lagona, psychologue FSP à Martigny (Suisse). L'objectif principal est de générer **4 consultations en ligne par semaine**.

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
| `src/config/site.ts` | **Configuration centralisée** - Modifier ici pour changer contacts, tarifs, navigation |
| `src/styles/global.css` | **Styles Tailwind** avec @theme CSS variables |
| `src/layouts/BaseLayout.astro` | **Layout principal** avec SEO, fonts, Alpine.js |
| `src/components/sections/Hero.astro` | **Hero minimaliste** - centré, une seule illustration |
| `src/components/sections/CTA.astro` | **Section d'appel à l'action** - bouton outline subtil |

## Concept Visuel "Fil Rouge"

Les illustrations forment une cohérence narrative autour du thème "démêler ses pensées" :

1. `hero-untangle.png` - Mains qui démêlent un fil (entrée)
2. `mind-tangled.png` - Tête avec pensées emmêlées (problème)
3. `hands-brain.png` - Mains + cerveau avec fleurs (solution)
4. `hand-bloom.png` - Main avec fleur épanouie (résultat)

**Prompt Nano Banana utilisé** :
```
Style: Ligne délicate, traits fins corail/pêche, fond transparent
Thème: Mains humaines + fil/corde symbolisant le démêlage des pensées
Palette: Coral (#E49C95), pêche (#EAC098), bleu doux (#92ABD3)
```

## Structure des Pages

### Accueil (`/`)
4 sections uniquement :
1. Hero - Illustration + titre + CTA simple
2. WhyOnline - Texte + illustration (pas de cards)
3. About - Photo + texte (pas de cards)
4. CTA - Bouton outline subtil

### Prestations (`/prestations`)
- Liste simple des services avec tarifs
- FAQ inline sous chaque service
- CTA subtil en bas

### À propos (`/a-propos`)
- Photo + introduction
- Parcours en texte fluide
- Approche thérapeutique en liste simple
- CTA subtil

### Contact (`/contact`)
- Formulaire Netlify (2 colonnes desktop)
- Infos contact à droite
- Bouton submit outline

### Ressources (`/ressources`)
- FAQ questions fréquentes
- Format Q/R simple
- CTA subtil

## Palette "Soft Sunrise"

```css
--color-primary: #2C3E50;     /* Texte principal */
--color-secondary: #E49C95;   /* Coral - accent */
--color-accent: #92ABD3;      /* Bleu doux */
--color-highlight: #EAC098;   /* Pêche */
--color-bg: #FDFBF7;          /* Fond crème */
--color-bg-alt: #F7F4EE;      /* Fond sections alt */
```

## Styles de CTA Approuvés

### Lien souligné (préféré)
```html
<a href="/contact" class="inline-block text-text border-b-2 border-secondary/40 pb-1 hover:border-secondary transition-colors duration-300">
  Prendre rendez-vous
</a>
```

### Bouton outline (formulaires)
```html
<button class="px-8 py-3 border border-secondary/30 rounded-full text-text hover:border-secondary hover:bg-secondary/5 transition-all duration-300">
  Envoyer
</button>
```

## À Éviter

1. **Boutons remplis colorés** (trop commerciaux)
2. **Animations translateY / scale** (trop "startup")
3. **Cards avec ombres fortes** (trop chargé)
4. **Emojis dans le contenu** (pas professionnel)
5. **Multiples CTA par section** (confusion)

## Commandes Utiles

```bash
npm run dev      # Développement local
npm run build    # Build production
npm run preview  # Prévisualiser le build
```

## Dépendances Clés

- **Astro 5.x** - Framework SSG
- **Tailwind CSS 4.x** - Utilise `@theme` et CSS variables
- **Alpine.js** - Menu mobile uniquement
- **Netlify Forms** - Formulaire contact (attribut `data-netlify="true"`)

## Notes pour Prochaines Sessions

1. **Déploiement Netlify** à configurer
2. **Photo Charlotte** à optimiser (actuellement 2.6MB)
3. **Schema.org** pour SEO local (LocalBusiness)
4. **Google Fonts** - Cormorant Garamond + Inter déjà configurées
