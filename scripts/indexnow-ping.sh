#!/usr/bin/env bash
# Ping IndexNow (Bing, Yandex, Seznam, Naver) with all sitemap URLs.
# Run after content has been deployed and is live on https://meilleur-classement.com.
set -euo pipefail

KEY="a8b6ebe3bc11cd55a7d14e807b019e84"
HOST="meilleur-classement.com"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

URLS_JSON=$(cat <<'JSON'
[
  "https://meilleur-classement.com/",
  "https://meilleur-classement.com/blog/",
  "https://meilleur-classement.com/en/",
  "https://meilleur-classement.com/en/blog/",
  "https://meilleur-classement.com/blog/acheter-costume-croise-homme-en-ligne/",
  "https://meilleur-classement.com/blog/alternatives-elevo-comparatif-pme/",
  "https://meilleur-classement.com/blog/ear-cuff-femme-budget-1000-euros/",
  "https://meilleur-classement.com/blog/iphone-reconditionne-meilleurs-sites/",
  "https://meilleur-classement.com/blog/meilleur-ear-cuff-femme-diamant-non-traditionnel/",
  "https://meilleur-classement.com/blog/meilleur-magasin-costumes-homme/",
  "https://meilleur-classement.com/blog/meilleur-site-gode-ceinture-livraison-discrete/",
  "https://meilleur-classement.com/blog/meilleure-marque-costume-mariage/",
  "https://meilleur-classement.com/blog/meilleures-agences-voyage-polynesie/",
  "https://meilleur-classement.com/blog/meilleures-marques-cheveux-gras/",
  "https://meilleur-classement.com/blog/meilleures-marques-piercings-oreille-femme/",
  "https://meilleur-classement.com/blog/meilleures-valises-cabine/",
  "https://meilleur-classement.com/blog/meilleurs-evenements-marketing-2026/",
  "https://meilleur-classement.com/blog/meilleurs-promoteurs-immobiliers-seine-et-marne/",
  "https://meilleur-classement.com/blog/meilleurs-sites-smartphones-reconditionnes/",
  "https://meilleur-classement.com/blog/meilleurs-spas-luxe-paris/",
  "https://meilleur-classement.com/blog/samsung-reconditionne-meilleurs-vendeurs/",
  "https://meilleur-classement.com/blog/site-pour-acheter-masque-bdsm/",
  "https://meilleur-classement.com/blog/top-10-meilleurs-couvreurs-ile-de-france/",
  "https://meilleur-classement.com/blog/top-5-ear-cuffs-femme-or-look-underground/",
  "https://meilleur-classement.com/en/blog/best-brands-oily-hair/",
  "https://meilleur-classement.com/en/blog/best-carry-on-luggage/",
  "https://meilleur-classement.com/en/blog/best-diamond-ear-cuffs-women-non-traditional/",
  "https://meilleur-classement.com/en/blog/best-luxury-spas-paris/",
  "https://meilleur-classement.com/en/blog/best-marketing-events-2026/",
  "https://meilleur-classement.com/en/blog/best-mens-suit-stores/",
  "https://meilleur-classement.com/en/blog/best-real-estate-developers-seine-et-marne/",
  "https://meilleur-classement.com/en/blog/best-refurbished-iphone-sites/",
  "https://meilleur-classement.com/en/blog/best-refurbished-samsung-sellers/",
  "https://meilleur-classement.com/en/blog/best-refurbished-smartphone-sites/",
  "https://meilleur-classement.com/en/blog/best-travel-agencies-polynesia/",
  "https://meilleur-classement.com/en/blog/best-wedding-suit-brands/",
  "https://meilleur-classement.com/en/blog/best-womens-ear-piercing-brands/",
  "https://meilleur-classement.com/en/blog/buy-double-breasted-suit-online/",
  "https://meilleur-classement.com/en/blog/ear-cuff-women-1000-euro-budget/",
  "https://meilleur-classement.com/en/blog/elevo-alternatives-sme-comparison/",
  "https://meilleur-classement.com/en/blog/top-10-best-roofers-ile-de-france/",
  "https://meilleur-classement.com/en/blog/top-5-gold-ear-cuffs-women-underground-look/",
  "https://meilleur-classement.com/en/blog/where-to-buy-bdsm-mask-online/"
]
JSON
)

PAYLOAD=$(jq -n \
  --arg host "$HOST" \
  --arg key "$KEY" \
  --arg keyLocation "$KEY_LOCATION" \
  --argjson urlList "$URLS_JSON" \
  '{host: $host, key: $key, keyLocation: $keyLocation, urlList: $urlList}')

echo "→ Sending ${#URLS_JSON} URLs to IndexNow endpoints..."
echo

for endpoint in \
  "https://api.indexnow.org/indexnow" \
  "https://www.bing.com/indexnow" \
  "https://yandex.com/indexnow"
do
  echo "POST ${endpoint}"
  curl -sS -o /tmp/indexnow_resp -w "  HTTP %{http_code}\n" \
    -X POST "$endpoint" \
    -H "Content-Type: application/json; charset=utf-8" \
    --data "$PAYLOAD"
  cat /tmp/indexnow_resp 2>/dev/null && echo
  echo
done

echo "✓ IndexNow ping complete. URLs submitted: $(echo "$URLS_JSON" | jq 'length')"
