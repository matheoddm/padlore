# PADLORE — Thème Shopify

> Your Pad. Your Story.

Thème Shopify Online Store 2.0 de la marque PADLORE, basé sur le thème
officiel **Dawn 16.1.1** de Shopify (licence MIT, voir `LICENSE.md`).

## Identité visuelle (à appliquer à partir de l'étape design)

| Rôle          | Couleur   |
|---------------|-----------|
| Noir profond  | `#12121A` |
| Violet        | `#8B5CF6` |
| Lavande       | `#D8D4E5` |
| Blanc         | `#FFFFFF` |
| Blanc cassé   | `#F7F7FA` |

- Titres : **Sora**
- Textes : **Inter**
- Textes visibles du site : en anglais.

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
