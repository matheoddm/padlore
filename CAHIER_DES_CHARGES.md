# PADLORE — Cahier des charges officiel V1

> Document de référence fourni par le fondateur (rédigé avec ChatGPT, chef de
> projet). Toute modification importante demande l'accord du fondateur.
> Décisions prises après ce document : voir `PADLORE.md`.

## 1. Présentation

- Marque : **PADLORE** — slogan : *Your Pad. Your Story.*
- Tapis de souris et desk mats artistiques, personnalisables.
- Marché international : pays anglophones d'abord, puis Europe. Projet basé en France.
- Positionnement : premium et contemporain, artistique, minimaliste, légère
  influence gaming ; pour gamers, créatifs, télétravailleurs et amateurs de beaux
  espaces de travail. Ne doit pas ressembler à une boutique générique de dropshipping.
- Site en anglais ; échanges techniques en français.
- Produits : épaisseur annoncée 2 mm (à confirmer fournisseur), jusqu'à 30 tailles
  (25 × 20 à 120 × 57 cm), prix selon la taille, plusieurs collections,
  personnalisation par import JPG/PNG, fabrication par un fournisseur partenaire,
  expédition directe. Délais à communiquer une fois confirmés.
- Prix définitifs ultérieurement : aucune décision commerciale sur les prix ou marges.

## 2. Identité visuelle (définitive pour la V1)

- Couleurs : `#12121A` noir profond, `#8B5CF6` violet, `#D8D4E5` lavande,
  `#FFFFFF` blanc, `#F7F7FA` blanc cassé. Violet avec modération (boutons,
  interactions, accents).
- **Syne** : grands titres et titres de section, généralement en majuscules.
- **Manrope** : paragraphes, navigation, boutons, descriptions, infos produit.
- Noms de produits en casse naturelle.
- Direction : premium et immersif, épuré, espaces généreux, hiérarchie claire,
  alternance sombre/clair, photos qui valorisent le produit, animations discrètes,
  boutons modernes, excellente expérience mobile. Pas d'effets excessifs ni de
  couleurs inutiles. Une maquette PADLORE fournie devient la référence visuelle.

## 3. Environnement technique

- Boutique Shopify de développement créée ; dépôt GitHub `matheoddm/padlore`.
- Obligatoire : Online Store 2.0, base Dawn, Liquid/JSON/CSS/JS compatibles
  Shopify, sections personnalisables dans l'éditeur, produits/variantes/collections/
  panier/checkout natifs, aucune application payante, code propre et documenté,
  responsive, accessible, performant.
- Interdit : site HTML indépendant, projet React autonome, fausse boutique.
- GitHub = dépôt principal. Vérifier l'état des fichiers avant modification, ne rien
  supprimer sans prévenir, jamais de push forcé sans accord.

## 4. Skills

Identifier les skills disponibles, présenter leur rôle, choisir ceux de la phase,
les consulter et appliquer leurs bonnes pratiques, indiquer en fin de phase ceux
utilisés. Ne jamais prétendre utiliser un skill absent. Les skills ne remplacent
jamais les décisions de ce cahier.

## 5. Structure de la page d'accueil

1. Bandeau d'annonce et header
2. Hero
3. Réassurance rapide
4. Quatre collections mises en avant
5. Quatre produits mis en avant
6. Personnalisation
7. Pourquoi PADLORE
8. Guide des tailles
9. FAQ
10. Footer

Pas de newsletter au lancement (possibilité de l'ajouter plus tard).

## 6. Détail des sections

**1 — Bandeau d'annonce** : fond `#12121A`, texte blanc centré discret
« DESIGNED FOR YOUR DESK. MADE FOR YOUR STYLE. », modifiable dans l'éditeur.
Aucune promesse de livraison gratuite pour l'instant.

**1 — Header** : fond `#F7F7FA`, logo typographique provisoire PADLORE.
Menu : Shop (`/collections/all`), Collections (page des six collections),
Customize (page de personnalisation), About (page de la marque). Icônes :
recherche, panier, compte seulement si utile. Menu administrable, responsive,
hamburger mobile, interactions accessibles, sans menus complexes.

**2 — Hero** : fond `#12121A`. Titre « YOUR PAD. YOUR STORY. ».
Sous-titre « Turn your workspace into something personal. Explore artistic desk
mats designed to complement your setup. ». Bouton principal « Shop Collections »
→ page des collections ; secondaire « Customize Your Mat » → personnalisation.
Visuel : bureau premium sombre, tapis PADLORE au centre, éclairage élégant,
touches de violet, texte parfaitement lisible. Deux images configurables
(desktop, mobile). Très soigné sur smartphone. Pas de visuels de produits fictifs
présentés comme de vraies références.

**3 — Réassurance** : fond `#F7F7FA`. « 30 Sizes », « Artistic Designs »,
« Worldwide Shipping » (ce dernier seulement après confirmation des pays
desservis ; contenu modifiable). Icônes minimalistes, 3 colonnes desktop,
compact mobile, pas de bouton.

**4 — Collections** : fond `#F7F7FA`. « FIND YOUR AESTHETIC. » /
« Different moods. One space that's yours. ». Exactement 4 collections :
Zen Japan, Monochrome Flow, Futuristic Gaming, Celestial Dream (Topographic Lines
et Personalized Mats restent accessibles par la navigation). Cartes entièrement
cliquables, survol discret, noms visibles, sélection dans l'éditeur. Bouton
« View All Collections » → page des collections.

**5 — Produits** : fond `#FFFFFF`. « THE EDIT. » / « A selection of designs to
make your desk your own. ». Exactement 4 produits (photo, nom, prix Shopify,
lien). Jamais de prix codés en dur ; prix de test identifiés comme provisoires.
Bouton « Shop All Mats » → `/collections/all`. Produits choisis dans Shopify.

**6 — Personnalisation** : fond `#12121A`, accents `#8B5CF6`. « MAKE IT YOURS. » /
« Your image. Your dimensions. Your desk mat. ». Étapes Upload, Preview, Create.
Bouton « Customize Your Mat ». Image d'un tapis personnalisé dans un bureau
premium. Pas de configurateur dans cette section. Le futur configurateur :
import JPG/PNG, aperçu 2D immédiat, ratio de la taille choisie, variantes de
dimensions, prix de la variante, ajout au panier, conservation fiable du fichier
original associé à la commande. Un aperçu JavaScript seul ne suffit pas : solution
de stockage/transmission à valider avant la production. Aucune app payante sans accord.

**7 — Pourquoi PADLORE** : fond `#D8D4E5`. « DETAILS THAT MATTER. » /
« Thoughtful details for everyday desk use. ». Stitched Edges, 2 mm Rubber Base,
30 Sizes, Designed for Your Setup. Photos macro et icônes élégantes.
Caractéristiques à confirmer auprès du fournisseur. Ne rien inventer
(certifications, labels, propriétés, durabilité, performances).

**8 — Guide des tailles** : fond `#F7F7FA`. « FIND YOUR FIT. » /
« From compact mouse pads to full desk mats. Find the size that works for your
space. ». Bouton « Explore the Size Guide ». Visuel pédagogique aux proportions
exactes (clavier et souris comme références).

**9 — FAQ** : fond `#FFFFFF`. « GOOD TO KNOW. » / « Everything you need before
choosing your mat. ». Questions : « How long does shipping take? »,
« Can I upload my own design? », « How do I choose the right size? ».
Accordéon accessible, réponses modifiables, aucun délai inventé. Bouton
« View All FAQs » → page FAQ.

**10 — Footer** : fond `#12121A`. PADLORE + « Your Pad. Your Story. ». Liens :
Shop, Collections, Customize, About, Contact, Size Guide, Shipping Policy,
Return Policy, Privacy Policy, Terms of Service (menus administrables).
Réseaux sociaux et moyens de paiement seulement s'ils sont réellement configurés.

## 7. Livraison et politique commerciale

Prix définitifs plus tard. Frais de livraison selon le pays, identiques quelle que
soit la taille (sous réserve fournisseur). Prix produit identique entre pays (hors
devise, taxes, obligations locales). Seuil de livraison gratuite envisagé, non
fixé. Tout doit être réglable dans Shopify : aucun tarif ni seuil codé en dur,
aucune annonce de livraison gratuite avant validation.

## 8. Conversion et expérience

Parcours : Attirer → Faire découvrir → Donner envie → Différencier → Rassurer → Acheter.
Comprendre vite l'offre, boutons visibles, collections et produits accessibles,
mobile fluide, personnalisation valorisée, performances avant animations.
Interdits : faux avis, faux chiffres de ventes, faux compteurs, fausse urgence,
faux stocks, promotions fictives, promesses non vérifiées.

## 9. SEO, accessibilité, performance, responsive

- SEO : titres cohérents, **un seul H1** sur l'accueil, sections en H2, HTML
  sémantique, textes alternatifs, URLs propres, métadonnées éditables, pas de
  contenu dupliqué.
- Accessibilité : clavier, contrastes lisibles, focus visible, boutons identifiés,
  accordéons accessibles, images décoratives traitées, réduction des animations.
- Performance : images optimisées et dimensionnées, chargement différé hors
  écran, hero prioritaire, pas de bibliothèques lourdes, JS limité, performances
  natives de Dawn préservées.
- Responsive : smartphone étroit, smartphone standard, tablette, portable, grand écran.

## 10. Modifiable dans l'éditeur Shopify

Textes, images, boutons, liens, collections affichées, produits mis en avant,
réponses de la FAQ, paramètres visuels pertinents. Sections et blocs configurables ;
pas de code à toucher pour un simple changement de contenu.

## 11. Phases (ne jamais commencer une phase sans accord)

1. Identité visuelle, header et hero
2. Réassurance et collections
3. Produits et personnalisation (le configurateur complet est un chantier distinct)
4. Qualité (Pourquoi PADLORE), guide des tailles, FAQ
5. Footer et finalisation (menus, accessibilité, performance, SEO, responsive,
   corrections, vérification des sections)

## 12. Méthode à chaque phase

Expliquer, utiliser les skills pertinents, ne développer que ce qui est autorisé,
vérifier la compatibilité Shopify, contrôler desktop et mobile, présenter les
fichiers, expliquer simplement, signaler les problèmes, sauvegarder sur GitHub,
attendre l'autorisation. Proposer des solutions gratuites. Aucune initiative
modifiant l'identité visuelle ou la stratégie commerciale sans accord.
