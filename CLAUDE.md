# Instructions pour le projet meilleur-classement

## Articles et page d'accueil

- **A chaque fois qu'un nouvel article est publié (ajouté dans `src/content/blog/`)**, il doit automatiquement apparaître sur la page d'accueil. La page d'accueil (`src/pages/index.astro`) affiche les 6 articles les plus récents triés par date. Il suffit donc de s'assurer que le champ `date` dans le frontmatter du nouvel article est bien renseigné avec la date du jour pour qu'il remonte en haut de la page d'accueil.
- Si un article est dans le dossier `output/` au format HTML, il faut le convertir en fichier Markdown avec frontmatter YAML et le placer dans `src/content/blog/` pour qu'il soit publié sur le site et visible sur la page d'accueil.
- Toujours respecter le format de frontmatter existant (title, description, date, author, category, tags, faq).
- **Chaque nouvel article DOIT OBLIGATOIREMENT inclure une image** via les champs `image` et `imageAlt` dans le frontmatter. Cette règle est NON NÉGOCIABLE : un article sans image ne doit jamais être publié. L'image doit apparaître :
  1. **Sur la card de l'article** dans tous les listings du site (page d'accueil, `/blog/`, pages catégorie `/categorie/...`, et leurs équivalents `/en/...`).
  2. **En haut de la page de l'article** (image hero/cover affichée par le layout avant le contenu).
  Utiliser de préférence une image locale dans `public/images/blog/`, ou à défaut une URL externe libre de droit (Pexels, Unsplash). L'`imageAlt` doit être descriptif et contenir si possible le mot-clé principal.
- Le title ne doit pas dépasser 60 caractères et la description 160 caractères (contrainte du schéma de contenu).
