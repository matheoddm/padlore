# PADLORE — Thème Shopify

> Your Pad. Your Story.

Thème Shopify Online Store 2.0 de la marque PADLORE, basé sur le thème
officiel **Dawn 16.1.1** de Shopify (licence MIT, voir `LICENSE.md`).

## Origine du nom

- **PAD** : référence directe aux mouse pads et desk mats, donc aux produits.
- **LORE** : mot anglais évoquant les histoires, les légendes et les univers.
- D'où le slogan *Your Pad. Your Story.* : chaque tapis porte un univers.
  À réutiliser (avec accord) dans « Pourquoi PADLORE », la page About et le
  pied de page.

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
  - ⚠️ Conflit de synchronisation constaté le 23/11/2026 : en enregistrant
    dans l'éditeur juste après un push, Shopify a renvoyé sur GitHub son
    ancienne copie de `sections/padlore-collections.liquid` (annulant une
    modification). Règles : attendre 2 minutes après un push avant
    d'enregistrer dans l'éditeur ; Claude compare chaque commit « shopify[bot] »
    avec son dernier commit et restaure ce qui aurait été écrasé.
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

## 📍 Point de reprise (mis à jour le 23/11/2026, fin de session)

**Ordre actuel de la page d'accueil** (`templates/index.json`) :
hero (noir) → index éditorial en feuille blanc cassé → collections (noir) →
« The edit. » en feuille blanc cassé → « Make it yours. » (noir) → pied de page Dawn.

**Vérifications de fin de session** : `shopify theme check` 0 erreur (9
avertissements d'origine Dawn) ; JSON, JavaScript et CSS valides ; tous les
fichiers référencés présents ; simulation pleine page à 360, 390, 820, 1280 et
1920 px, avec et sans animations : pas de débordement horizontal, un seul H1,
aucun élément resté invisible, aucune erreur JavaScript. Les deux
enregistrements automatiques de Shopify de la journée ont été contrôlés (le
seul fichier écrasé a été restauré).

**En attente de réponse du fondateur**
1. ~~Validation de la phase 3~~ : validée le 25/11/2026.
2. ~~Marge de 24 px sur les boutons du hero~~ : faite (25/11/2026).

**À faire par le fondateur dans Shopify**
- Créer la page « Size Guide » et la relier à la ligne « 30 Sizes » de l'index.
- Créer les 6 collections (images verticales ≥ 1200 px, point focal sur le
  tapis) et relier les 4 cartes de l'accueil.
- Ajouter une image à « Make it yours. » (tapis personnalisé sur un bureau, 4:3).
- Ajouter d'autres produits (3 de plus pour remplir « The edit. »).
- Toujours attendre 2 minutes après un push de Claude avant d'enregistrer dans
  l'éditeur.

**Prochaines étapes de Claude**
1. Phase 4 : proposer deux directions pour « Pourquoi PADLORE », l'aperçu du
   guide des tailles et la FAQ (3 questions, sans délais inventés).
2. Phase 5 : pied de page (retirer la newsletter Dawn, liens, réseaux et
   paiements réels), accessibilité, performance, SEO.
3. Plus tard : produit modèle avec les 30 tailles (CSV), devise principale en
   EUR, logo et favicon, pages produit et collection, configurateur.

## Feuille de route

Référence : `CAHIER_DES_CHARGES.md` (cahier des charges officiel V1).

| Étape | Contenu                                                        | État        |
|-------|----------------------------------------------------------------|-------------|
| 1     | Préparation technique (Dawn → PADLORE)                          | ✅ Terminé  |
| 2     | Boutique de développement + liaison GitHub                      | ✅ Terminé  |
| 3     | Style général (polices, couleurs, boutons)                      | ✅ Validé   |
| Accueil phase 1 | Bandeau d'annonce, header, hero                       | ✅ Validé (23/11/2026) |
| Accueil phase 2 | Réassurance (index éditorial), 4 collections, raccords | ✅ Validé (23/11/2026) |
| Accueil phase 3 | 4 produits, section personnalisation                  | ✅ Validé (25/11/2026) |
| Accueil phase 4 | Guide des tailles, FAQ (« Pourquoi PADLORE » reportée) | ⏭️ Prochaine |
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
- **Accueil phase 2 — réassurance (v2, « Kinetic Index »)** : première version
  (3 colonnes avec icônes) refusée car trop « thème Shopify ». Nouvelle
  direction choisie par Claude (liberté créative donnée par le fondateur) :
  index typographique en Syne géant. Contenu : « 30 Sizes — Find your fit »,
  « 6 Collections — Explore your style » (lien /collections), « Your Style —
  Make it personal » (lien page Customize). Mot en violet réglable par ligne.
  Mouvement : lignes révélées une fois au défilement, la ligne au centre de
  l'écran se remplit (contour → plein), remplissage au survol sur ordinateur.
  Sans JS, avec animations réduites ou dans l'éditeur : titres pleins, statiques.
  Fichiers : `sections/padlore-reassurance.liquid`,
  `assets/section-padlore-reassurance.css`, `assets/padlore-kinetic-index.js`.
  Chiffres des titres Syne en style classique (`lining-nums`).
- **Kinetic Index validé** par le fondateur et le chef de projet (style
  éditorial, grandes typographies Syne, survol, accents violets).
- **Accueil phase 2 — collections** (« Find your aesthetic. ») : section
  `padlore-collections`, fond noir (validé, au lieu du blanc cassé du cahier,
  pour l'alternance sombre/clair). 4 cartes égales (choix « A' » d'après la
  maquette initiale), format 4:5, image du bloc ou de la collection, sinon carte
  sombre neutre (aucune fausse image). Survol : zoom lent, liseré violet, flèche
  ronde violette. Téléphone : rangée défilante avec trait de progression.
  Apparition des cartes une fois au défilement. Fichiers :
  `sections/padlore-collections.liquid`, `assets/section-padlore-collections.css`,
  `assets/padlore-collections.js`. Note : Dawn masque les `div` vides
  (`div:empty`), d'où une règle dédiée pour la carte sans image.
- **Rééquilibrage « premium editorial lifestyle »** (demande du fondateur et du
  chef de projet : moins futuriste/gaming, cible aussi télétravailleurs,
  créatifs, étudiants). Hero inchangé. Index : section « PADLORE Editorial
  Index » (titres Syne 600 en casse normale ~30 px, plus de contours ni de
  remplissage, hauteur réduite, violet limité au petit trait et à la flèche,
  survol discret, apparition douce). Collections : fond blanc cassé, titre plus
  petit sans mot violet, dégradé réduit pour laisser l'art visible, ombre
  légère, survol sans liseré (flèche qui devient blanche), carte sans image en
  lavande. Règle pour la suite : une seule section « forte » par écran, le
  violet reste un accent.
- **Accueil phase 2 validée** le 23/11/2026, avec une seule demande : garder
  l'alternance sombre/clair. Collections remises sur fond noir (scheme-3),
  tout le reste inchangé. Ordre actuel : hero (noir) → index (blanc cassé) →
  collections (noir). Reste à faire par le fondateur : créer les collections
  et la page « Size Guide », relier les cartes et la ligne « 30 Sizes ».
- **Raccords entre sections — solution « Le tapis sur le bureau »** (validée par
  le fondateur) : le hero et les collections forment une seule surface noire
  continue ; la bande blanc cassé de l'index devient une feuille arrondie posée
  dessus (cadre `padlore-index-frame--sheet`, fond scheme-3 autour), qui
  chevauche légèrement le bas du hero (-1,2 rem téléphone, -2 rem tablette,
  -5,6 rem ordinateur) et se pose en glissant à l'apparition. Bas de la photo du
  hero en fondu sur ordinateur. Réglages dans l'éditeur : « Layout » (feuille ou
  bande pleine largeur) et « Background around the sheet ».
- Ajustement : sur ordinateur, la feuille ne chevauche plus la photo du hero
  (espace noir de 4 rem au-dessus) ; le chevauchement léger est conservé sur
  téléphone et tablette, où il ne touche que la zone de texte.
- **Accueil phase 3 (direction A)** : section `padlore-products` (« The edit. »,
  feuille blanc cassé posée sur le noir, 4 cartes carrées égales, nom + vrai
  prix Shopify avec « From » si les tailles ont des prix différents, 2e image au
  survol, emplacements vides visibles seulement dans l'éditeur, section masquée
  sur la boutique tant qu'aucun produit n'est choisi) et section
  `padlore-customize` (« Make it yours. », fond noir, image à gauche, 3 étapes
  Upload / Preview / Create en blocs, bouton violet vers la page Customize ;
  sans image : texte seul centré). Présentation seulement : le configurateur
  reste un chantier distinct. Script commun d'apparition : `assets/padlore-reveal.js`.
  La section « Featured products » de Dawn a été retirée de l'accueil.
- **À faire plus tard (idée validée)** : préparer un produit « modèle » avec les
  30 tailles (fichier CSV d'import Shopify, statut Brouillon), puis le dupliquer
  pour chaque design (bouton « Dupliquer » de Shopify, sans copier les images).
  Questions à trancher : grille de prix (ou prix provisoire unique) et nom du
  produit modèle.
- Téléphone : marge latérale unifiée à 2,4 rem (24 px) pour l'index, les
  collections, les produits et la personnalisation (tout le texte aligné).
- Section produits renommée (25/11/2026, choix du fondateur et du chef de
  projet) : « FEATURED DESIGNS. » / « Discover artistic desk mats made to match
  your style. » (remplace « The edit. », jugé peu compréhensible).
- « Featured designs. » : en-tête centré avec bouton violet « Shop All Mats »
  (version proposée par le chef de projet, choisie par le fondateur ; réglage
  « Header style » pour revenir à la version titre à gauche / lien à droite).
- Hero : marge latérale de 24 px sur téléphone, comme les autres sections.
- « Featured designs. » retravaillée (25/11/2026, demande du fondateur : plus
  de personnalité et d'effets, en gardant les 4 produits côte à côte) :
  lueur lavande en haut de la feuille, cartes 4:5 avec ombre longue,
  numéros 01–04 et fine ligne au-dessus du nom ; survol : la carte se soulève,
  zoom lent, 2e image, rond blanc avec flèche, ligne qui devient violette,
  numéro violet ; apparition décalée avec dévoilement par masque ; téléphone :
  rangée défilante avec compteur « 01 — 04 » et barre violette, flèche toujours
  visible et retour au toucher. Script : `assets/padlore-products.js`.
  Directions « Gallery Wall » et « Spotlight » proposées puis écartées.
- « Featured designs. » : moins de blanc en haut et en bas (marges 88 → 56 px,
  écart titre/produits 5,6 → 4 rem). Le centrage automatique pour moins de
  4 produits a été annulé à la demande du fondateur.
- « Featured designs. » : effet de survol n° 3 choisi par le fondateur — barre
  givrée « View design → » qui monte en bas de l'image et pastille « 30 Sizes »
  en haut (ordinateur uniquement ; remplace le rond fléché sur ordinateur, le
  rond reste sur téléphone). Textes réglables dans l'éditeur (« Hover bar
  label », « Hover badge » ; vide = masqué). La pastille ne doit afficher
  qu'une information vraie pour tous les produits.
- Téléphone : la carte arrêtée dans la rangée défilante devient « active » et
  affiche la même barre « View design → », la pastille « 30 Sizes », la ligne
  et le numéro violets (équivalent tactile du survol).
- **Accueil phase 3 validée** le 25/11/2026 (« Featured designs. » + « Make it
  yours. »). Contrôle complet : theme check 0 erreur, JSON/JS/CSS valides,
  simulation à 360–1920 px avec et sans animations sans problème.
- ⚠️ **Cause trouvée (25/11/2026)** des écarts entre GitHub et la boutique :
  Shopify refusait `sections/padlore-collections.liquid` (« Invalid schema:
  setting heading_accent default can't be blank ») et gardait l'ancienne
  version. Règle : **jamais de `"default": ""`** dans un schéma de section
  (omettre la clé). Pour vérifier une synchronisation : Boutique en ligne →
  Thèmes → bouton « padlore/main ⌄ » → journaux de l'intégration GitHub.
- Décision (25/11/2026) : la section « Pourquoi PADLORE » est **reportée**
  (en attente de la confirmation fournisseur sur les bords cousus et la base
  caoutchouc 2 mm ; idée : y raconter l'origine du nom). Prochaine étape :
  aperçu du guide des tailles + FAQ (proposer deux directions avant de coder).
