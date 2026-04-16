# Instructions pour le projet meilleur-classement

## Articles et page d'accueil

- **A chaque fois qu'un nouvel article est publié (ajouté dans `src/content/blog/`)**, il doit automatiquement apparaître sur la page d'accueil. La page d'accueil (`src/pages/index.astro`) affiche les 6 articles les plus récents triés par date. Il suffit donc de s'assurer que le champ `date` dans le frontmatter du nouvel article est bien renseigné avec la date du jour pour qu'il remonte en haut de la page d'accueil.
- Si un article est dans le dossier `output/` au format HTML, il faut le convertir en fichier Markdown avec frontmatter YAML et le placer dans `src/content/blog/` pour qu'il soit publié sur le site et visible sur la page d'accueil.
- Toujours respecter le format de frontmatter existant (title, description, date, author, category, tags, faq).
- **Chaque nouvel article doit obligatoirement inclure une image** via les champs `image` et `imageAlt` dans le frontmatter. L'image apparaît à la fois sur la card (page d'accueil, listing blog, pages catégorie) et dans le post lui-même. Utiliser de préférence une image locale dans `public/images/blog/`, ou à défaut une URL externe libre de droit (Pexels, Unsplash). Le title ne doit pas dépasser 60 caractères et la description 160 caractères (contrainte du schéma de contenu).
