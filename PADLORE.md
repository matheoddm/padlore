# PADLORE — Thème Shopify

> Your Pad. Your Story.

Thème Shopify Online Store 2.0 de la marque PADLORE, basé sur le thème
officiel **Dawn 16.1.1** de Shopify (licence MIT, voir `LICENSE.md`).

## Identité visuelle

| Rôle          | Couleur   |
|---------------|-----------|
| Noir profond  | `#12121A` |
| Violet        | `#8B5CF6` |
| Lavande       | `#D8D4E5` |
| Blanc         | `#FFFFFF` |
| Blanc cassé   | `#F7F7FA` |

- Titres : **Syne** (graisse 700). Textes : **Manrope** (400 / 700).
  Choisies à l'étape 3 (remplacent Sora + Inter). Licence SIL Open Font
  License 1.1 (gratuite, usage commercial autorisé). Fichiers hébergés dans
  le thème : `assets/padlore-syne-*.woff2`, `assets/padlore-manrope-*.woff2`,
  chargés par `snippets/padlore-fonts.liquid`. Les sélecteurs de police de
  l'éditeur Shopify n'ont donc plus d'effet.
- Titres de section en MAJUSCULES, noms de produits en casse normale.
- Boutons : violet `#8B5CF6` avec texte blanc sur les sections claires,
  boutons blancs avec texte noir sur les sections sombres et violettes.
  Forme arrondie (pilule), léger enfoncement au clic.
  Exception validée : dans le hero (fond noir), le bouton principal est violet
  `#8B5CF6` avec texte blanc (survol `#7C3AED`), le secondaire transparent à
  contour blanc.
- Hero : titre en majuscules Syne, « YOUR PAD. » en blanc et « YOUR STORY. »
  en violet (option « Last sentence of the heading in violet »), flèche → dans
  le bouton principal. Pas de surtitre.
- Menu ordinateur : trait violet sous le lien de la page active, qui
  apparaît aussi au survol.
  Note : le blanc sur `#8B5CF6` a un contraste de 4,2:1 (recommandation
  d'accessibilité : 4,5:1). Choix assumé par le propriétaire.
- Textes visibles du site : en anglais.

**Schémas de couleurs (éditeur Shopify)**

| Schéma   | Fond      | Texte     | Boutons                   | Usage                    |
|----------|-----------|-----------|---------------------------|--------------------------|
| scheme-1 | `#F7F7FA` | `#12121A` | violet, texte blanc       | sections claires (défaut)|
| scheme-2 | `#FFFFFF` | `#12121A` | violet, texte blanc       | cartes produit, fiches   |
| scheme-3 | `#12121A` | `#FFFFFF` | blanc, texte noir         | sections sombres         |
| scheme-4 | `#D8D4E5` | `#12121A` | violet, texte blanc       | mises en avant           |
| scheme-5 | `#8B5CF6` | `#FFFFFF` | blanc, texte noir         | bandeaux, appels à l'action |

Fichiers du style : `assets/padlore.css` (couche PADLORE au-dessus de
`base.css`) et `config/settings_data.json` (couleurs, arrondis).

## Boutique Shopify

- Boutique de **développement** (gratuite, programme Shopify Partners) :
  `padlore.myshopify.com`. Elle ne peut pas vendre ; elle sert à construire
  et tester le thème.
- Le thème est relié à GitHub (dépôt `matheoddm/padlore`, branche `main`)
  grâce à l'intégration GitHub de Shopify. Il apparaît sous le nom
  **padlore/main** et il est publié sur la boutique.
- La liaison fonctionne dans les deux sens :
  - chaque push sur `main` met à jour le thème sur Shopify ;
  - chaque modification faite dans l'éditeur de thème Shopify crée un
    commit automatique sur `main` (toujours récupérer ces commits avant de
    travailler).
  - Shopify ajoute un commentaire `/* ... */` en tête de
    `config/settings_data.json` et des fichiers `templates/*.json` : ces
    fichiers ne sont donc plus du JSON strict (retirer le commentaire avant
    de les lire avec un outil JSON, et le conserver en les réécrivant).
- Au lancement : création d'une vraie boutique (offre payante), reliée au
  même dépôt GitHub. Les produits seront transférés par export/import CSV.

## Décisions du projet

**Collections**

- Zen Japan
- Monochrome Flow
- Futuristic Gaming
- Celestial Dream
- Topographic Lines
- Personalized Mats

**Produits**

- Un produit Shopify par design.
- Une seule option : **Size** (30 tailles, prix différents par taille).
- Épaisseur unique : 2 mm pour l'instant (d'autres épaisseurs possibles plus
  tard, ajoutées comme seconde option).
- Tailles (cm), valables pour tous les tapis :
  25×20, 30×25, 35×25, 35×30, 45×30, 45×40, 45×45, 60×30, 60×35, 60×40,
  65×35, 70×30, 70×35, 70×40, 70×50, 80×30, 80×35, 80×40, 80×50, 80×55,
  90×30, 90×35, 90×40, 90×45, 90×50, 100×40, 100×50, 100×55, 120×50, 120×57.
- Prix : à définir à la fin du projet.

**Fabrication et personnalisation**

- Fournisseur via AliExpress, qui expédie directement au client depuis la
  Chine. Commandes passées manuellement par le propriétaire de la boutique.
- Tapis personnalisés : le client importe un JPG/PNG, le fichier est joint à
  la commande (propriété de ligne de commande, fonction native de Shopify).
  Aperçu 2D prévu dans une étape dédiée. Prix à définir.
- Les délais de livraison devront être clairement affichés.

**International**

- Entreprise basée en France.
- Lancement : pays anglophones, puis Europe.
- Site en anglais. Devises multiples via Shopify Markets. Langues
  européennes ajoutées plus tard avec l'application gratuite
  Translate & Adapt (Shopify).

## Feuille de route

Référence : `CAHIER_DES_CHARGES.md` (cahier des charges officiel V1).

| Étape | Contenu                                                        | État        |
|-------|----------------------------------------------------------------|-------------|
| 1     | Préparation technique (Dawn → PADLORE)                          | ✅ Terminé  |
| 2     | Boutique de développement + liaison GitHub                      | ✅ Terminé  |
| 3     | Style général (polices, couleurs, boutons)                      | ✅ Validé   |
| Accueil phase 1 | Bandeau d'annonce, header, hero                       | ✅ Validé (23/11/2026) |
| Accueil phase 2 | Réassurance, 4 collections                            | ⏳ Plan à valider |
| Accueil phase 3 | 4 produits, section personnalisation                  | À faire     |
| Accueil phase 4 | Pourquoi PADLORE, guide des tailles, FAQ              | À faire     |
| Accueil phase 5 | Footer et finalisation                                | À faire     |
| Ensuite | Logo, pages produit/collections, configurateur, livraison/devises (passer en EUR), pages légales | À faire |

## Skills Claude (dossier `.claude/skills/`)

Instructions supplémentaires pour Claude Code. Shopify ignore ce dossier
(il ne fait pas partie du thème).

| Skill           | Utilité pour PADLORE                                              |
|-----------------|-------------------------------------------------------------------|
| `ui-ux-pro-max` | Bonnes pratiques UI/UX : accessibilité, responsive, typographie, animations, structure des pages |
| `brand`         | Identité de marque : ton des textes, règles d'utilisation du logo, cohérence |
| `emil-design-eng` | Finitions premium : survol, clic, détails qui rendent un site « haut de gamme » |
| `animate`       | Créer une animation : utile ou non, durée, courbe, sortie            |
| `animation-performance` | Animations fluides, sans saccades                            |
| `review-animations` | Relecture critique des animations avant validation               |
| `mobile-native` | Confort sur téléphone : zoom des champs, encoche, tap, carrousels    |
| `animation-vocabulary` | Retrouver le nom exact d'un effet décrit avec des mots simples |
| `learn-taste`   | Transformer tes corrections de design en règles écrites (`DESIGN.md`) |
| `impeccable`    | Direction artistique : critique, audit (accessibilité, responsive), finitions, `PRODUCT.md` / `DESIGN.md` |

Sources (licence MIT, fichiers texte uniquement) :

- pack « UI UX Pro Max » (Next Level Builder) : `ui-ux-pro-max`, `brand`.
  Tests internes retirés. Non installées : `design`, `design-system`,
  `ui-styling`, `banner-design`, `slides` (autres outils comme Tailwind/React,
  présentations, ou services d'IA payants avec clé API).
- pack « Skills » d'Emil Kowalski : les 7 autres skills ci-dessus.
  Non installées : `animate-expo`, `ask-sonner`, `write-swift`, `gestures`,
  `apple-design`, `pick-ui-library`, `prototype`, `ask-emil`, `break-ui`,
  `choreograph`, `find-animation-opportunities`, `improve-animations`,
  `remove-animations` (applications mobiles, React, Swift, ou doublons).
- « Impeccable » (Paul Bakaus, licence Apache 2.0) : `impeccable`.
  Son moteur (programme téléchargé depuis GitHub au premier lancement) et
  ses « hooks » automatiques ne sont **pas activés** : la skill est utilisée
  en mode lecture (fichiers de référence + `PRODUCT.md` / `DESIGN.md`).
  Ne pas les activer sans l'accord du propriétaire du projet.

**Règles de priorité :**

1. Les décisions de ce guide (couleurs, polices, règles du projet) passent
   toujours avant les recommandations des skills.
2. Ne jamais laisser un script de skill écrire dans `assets/` : ce dossier
   est envoyé sur Shopify.
3. Les règles de travail passent avant l'ambition des skills : une étape à
   la fois, pas de design sans accord, rien de payant.

## Structure du thème

| Dossier      | Rôle                                                              |
|--------------|-------------------------------------------------------------------|
| `layout/`    | Gabarit général de toutes les pages (`theme.liquid`)              |
| `templates/` | Une page par type (accueil, produit, collection, panier…), en JSON |
| `sections/`  | Blocs de page modifiables depuis l'éditeur Shopify                |
| `snippets/`  | Petits morceaux de code réutilisables                             |
| `assets/`    | CSS, JavaScript, images, icônes                                   |
| `config/`    | Réglages du thème (`settings_schema.json`, `settings_data.json`)  |
| `locales/`   | Traductions des textes du thème                                   |

## Commandes utiles (Shopify CLI)

Vérifier le code du thème (fonctionne sans boutique) :

    shopify theme check

Aperçu en direct sur une boutique de développement (nécessite une boutique) :

    shopify theme dev --store nom-de-la-boutique.myshopify.com

Envoyer le thème vers la boutique (non publié) :

    shopify theme push --unpublished --store nom-de-la-boutique.myshopify.com

## Mises à jour de Dawn

Le dépôt officiel de Dawn est enregistré sous le nom `upstream`.
Les mises à jour de Dawn pourront être récupérées plus tard, avec précaution.

## Journal des étapes

- **Étape 1** — Préparation technique : copie de Dawn 16.1.1, renommage du
  thème en PADLORE, retrait des fichiers internes GitHub de Shopify.
  Aucun changement de design.
- **Étape 2** — Création de la boutique de développement
  `padlore.myshopify.com`, liaison du thème avec GitHub (branche `main`) et
  publication du thème padlore/main. Décisions du projet notées ci-dessus.
  Aucun changement de design.
- **Étape 3** — Style général : polices Syne + Manrope hébergées dans le
  thème, 5 schémas de couleurs PADLORE, boutons arrondis avec retour au clic,
  titres de section en majuscules, arrondis des cartes, champs et images.
  Pas de changement de mise en page (accueil, en-tête, pied de page).
- **Accueil phase 1** — Bandeau d'annonce (noir, texte modifiable), header
  (logo texte, icône compte désactivable et masquée, un seul H1 sur l'accueil),
  nouvelle section `padlore-hero` (images desktop/mobile optionnelles, H1,
  sous-titre, 2 boutons, voile sombre réglable, animation d'entrée discrète).
  Cahier des charges enregistré dans `CAHIER_DES_CHARGES.md`.
  Corrections après revue : logo texte centré sur mobile, hero en mise en
  page « texte à gauche, image à droite » sur ordinateur (image en fond sur
  mobile), slogan sur deux lignes, bouton principal violet. Visuels du hero
  à fournir par le fondateur.
  Visuels ajoutés (provisoires : design Zen Japan généré, à remplacer par un
  vrai design PADLORE) : `padlore-hero-desktop-zen-japan.png` (1672 × 941,
  point focal sur le tapis) et `padlore-hero-mobile-zen-japan.png`.
  Disposition responsive du hero : téléphone et tablette = image entière en
  haut puis texte dessous ; ordinateur = texte à gauche, image à droite.
  Réglage « Mobile: move text up over the image » (48 % par défaut).
- **Accueil phase 1 validée** le 23/11/2026 par le fondateur. Points reportés :
  image du hero provisoire (à remplacer par un vrai design, idéalement
  ≥ 2400 px), logo et favicon, section « Featured products » de Dawn
  (remplacée en phase 3), devise principale en EUR, titre et description SEO
  de la boutique (phase 5).
