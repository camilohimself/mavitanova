# Session 30 Décembre 2024 - Ma Vita Nova

## Objectif du projet
**4 demandes de consultation en ligne par semaine** pour Charlotte Lagona, psychologue FSP à Martigny.

---

## Résumé des changements (Session complète)

### 1. Stratégie SEO Content - Analyse Gemini

Audit complet du contenu avec recommandations :
- **Forces** : 5 articles piliers bien positionnés
- **Faiblesses** : Trop généraliste, manque de longue traîne, localisation faible
- **Stratégie** : Clusters SEO + articles satellites

### 2. Nouveaux Articles SEO (4)

| URL | Titre | Angle SEO |
|-----|-------|-----------|
| `/ressources/psychologue-en-ligne-suisse` | 7 critères pour choisir un thérapeute FSP | Transactionnel |
| `/ressources/burnout-ou-fatigue` | Les 5 signes qui ne trompent pas | Auto-diagnostic |
| `/ressources/infidelite-couple` | 5 étapes pour reconstruire la confiance | Crise couple |
| `/ressources/communication-couple` | 3 exercices pour renouer le dialogue | Pratique |

### 3. Optimisation Articles Existants (5)

| Article | Améliorations |
|---------|---------------|
| `anxiete-stress` | + Section crise d'angoisse, anxiété sociale, liens internes |
| `burn-out` | + Phases de reconstruction, liens vers burnout-ou-fatigue |
| `therapie-couple` | + Liens vers satellites, tarifs, durée thérapie |
| `consultation-en-ligne` | + Lien vers psychologue-suisse, premiere-seance |
| `premiere-seance` | + Liens thématiques vers autres articles |

### 4. Maillage Interne (Clusters SEO)

```
Cluster "Couple":
therapie-couple (pilier)
  ├── infidelite-couple (satellite)
  └── communication-couple (satellite)

Cluster "Burn-out":
burn-out (pilier)
  └── burnout-ou-fatigue (satellite)

Transactionnel:
psychologue-en-ligne-suisse ← consultation-en-ligne
```

### 5. UX Fix - Tags Cliquables

**Problème** : Les tags problématiques sur /prestations étaient statiques (non-intuitif).

**Solution** : Tags avec article = cliquables avec flèche + hover coral.

| Tag | Lien |
|-----|------|
| Gestion du stress & Anxiété | → `/ressources/anxiete-stress` |
| Épuisement professionnel | → `/ressources/burn-out` |
| Difficultés relationnelles | → `/ressources/communication-couple` |
| Thérapie de couple | → `/ressources/therapie-couple` |

### 6. Configuration Netlify

Fichier `netlify.toml` créé avec :
- Build command: `npm run build`
- Publish directory: `dist`
- Headers sécurité (X-Frame-Options, etc.)
- Cache assets statiques

---

## État technique actuel

| Métrique | Valeur |
|----------|--------|
| Pages | 16 |
| Build time | ~1.5s |
| Repo GitHub | github.com/camilohimself/mavitanova |

### Structure des pages

```
/                                    # Homepage
/prestations                         # Services + FAQ (tags cliquables)
/a-propos                            # À revoir
/contact                             # Formulaire Netlify
/ressources                          # Hub (9 guides)
/ressources/psychologue-en-ligne-suisse  # NEW
/ressources/anxiete-stress               # OPTIMIZED
/ressources/burn-out                     # OPTIMIZED
/ressources/burnout-ou-fatigue           # NEW
/ressources/therapie-couple              # OPTIMIZED (pilier)
/ressources/infidelite-couple            # NEW
/ressources/communication-couple         # NEW
/ressources/consultation-en-ligne        # OPTIMIZED
/ressources/premiere-seance              # OPTIMIZED
/mentions-legales
/politique-confidentialite
```

---

## Git commits de la session

```
a498f23 feat(ux): Make problem tags clickable with links to articles
6c49cf6 chore: Add Netlify configuration
22aaa8f feat(seo): Add 4 new articles + optimize 5 existing for long-tail keywords
```

---

## Prochaines étapes

### Priorité haute
- [ ] Déploiement Netlify (connecter repo)
- [ ] Page À propos - refonte
- [ ] Créer articles manquants (Confiance en soi, Deuil, Dépression)

### Priorité moyenne
- [ ] Google Search Console
- [ ] Schema.org enrichi (FAQ, Article)
- [ ] Tests mobile complets

### Priorité basse
- [ ] Analytics (Plausible ou Fathom)
- [ ] Optimisation images (compression)

---

## Mots-clés longue traîne intégrés

- "crise d'angoisse que faire tout de suite"
- "psychologue FSP en ligne Suisse"
- "reconstruction après un burn-out"
- "thérapie de couple après infidélité"
- "problème de communication couple solution"
- "burn-out ou fatigue différence"

---

*Dernière mise à jour : 30 décembre 2024*
