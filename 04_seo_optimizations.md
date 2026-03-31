# 04 — SEO Optimizations (2026-03)

Previous SEO plan (`plans/001_seo.md`) is fully implemented. This plan addresses the next round of optimizations targeting local search for: **manikűr, pedikűr, géllakk, műköröm** in **Alsóörs, Veszprém megye, Balaton**.

---

## Priority 1 — High impact

### 1. Rewrite `<title>` with all target keywords
**File:** `landing.html`

Current:
```html
<title>Jónás Brigi — Műköröm, Kéz- és Lábápolás | Alsóörs</title>
```

Problem: missing **pedikűr**, **géllakk**, **Balaton**, **Veszprém**. Google truncates around 55–60 characters so we must prioritize.

Proposed:
```html
<title>Manikűr, Pedikűr, Géllakk, Műköröm Alsóörs | Jónás Brigi</title>
```

Rationale: services first (what people search for), location, then brand. 57 characters. Balaton/Veszprém go in meta description where there's more room.

---

### 2. Rewrite `<meta description>` with location context
**File:** `landing.html`

Current:
```html
<meta name="description" content="Manikűr, géllakk, műköröm és lábápolás Alsóörson. Bejelentkezés: +36-20/560-4807">
```

Problem: missing **pedikűr**, **Balaton**, **Veszprém megye**. No CTA beyond phone number.

Proposed:
```html
<meta name="description" content="Manikűr, pedikűr, géllakk és műköröm Alsóörson, a Balaton-felvidéken. Profi kéz- és lábápolás Veszprém megyében. Foglaljon időpontot: +36-20/560-4807.">
```

155 characters — within the ~160 char Google snippet limit.

---

### 3. Rewrite H1 to include target keywords
**File:** `landing.html`

Current:
```html
<h1>Kéz- és Lábápolás, műkörömépítés</h1>
```

Problem: Google weighs H1 heavily. Missing **manikűr**, **pedikűr**, **géllakk**, **Alsóörs**.

Proposed:
```html
<h1>Manikűr, Pedikűr, Géllakk és Műköröm — Alsóörs</h1>
```

---

### 4. Add intro paragraph with location keywords
**File:** `landing.html` — below H1, inside the hero section

Problem: the page has zero body text — only headings and price lists. Google needs natural prose to understand topical relevance.

Proposed — a short `<p>` after the H1:
```html
<p>Professzionális kéz- és lábápolás Alsóörson, a Balaton partján.
Manikűr, pedikűr, géllakk és műkörömépítés Veszprém megyében —
bejelentkezés alapján, barátságos árakon.</p>
```

Style: `text-olive-600 text-center max-w-xl mx-auto mt-4 text-base leading-relaxed`

---

### 5. Enrich JSON-LD structured data
**File:** `landing.html`

Current schema is a minimal `NailSalon`. Add the following fields:

```json
{
  "@context": "https://schema.org",
  "@type": "NailSalon",
  "name": "Jónás Brigi",
  "description": "Manikűr, pedikűr, géllakk és műköröm Alsóörson, a Balaton-felvidéken. Professzionális kéz- és lábápolás Veszprém megyében.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Endrődi Sándor u. 24.",
    "addressLocality": "Alsóörs",
    "addressRegion": "Veszprém megye",
    "postalCode": "8226",
    "addressCountry": "HU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.9988,
    "longitude": 17.8875
  },
  "telephone": "+36205604807",
  "url": "https://jonasbrigi.hu/",
  "priceRange": "4500–13000 Ft",
  "currenciesAccepted": "HUF",
  "paymentAccepted": "Cash",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Alsóörs" },
    { "@type": "AdministrativeArea", "name": "Veszprém megye" },
    { "@type": "Place", "name": "Balaton" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Szolgáltatások",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Manikűr" },
        "price": "4500", "priceCurrency": "HUF"
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Géllakk" },
        "price": "8500", "priceCurrency": "HUF"
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Műköröm építés" },
        "price": "11000", "priceCurrency": "HUF"
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Pedikűr" },
        "price": "6000", "priceCurrency": "HUF"
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Géllakk lábra" },
        "price": "6000", "priceCurrency": "HUF"
      }
    ]
  },
  "sameAs": ["https://www.facebook.com/brigitta.meszaros.1447"]
}
```

Notes:
- `openingHoursSpecification`: verify actual hours with the owner. Placeholder uses Mon–Sat 08–18. If truly "by appointment only", remove this field or use a comment in the schema.
- `geo`: verify coordinates — these are approximate for Alsóörs center.

---

## Priority 2 — Medium impact

### 6. Add `og:image` meta tag
**File:** `landing.html`

Currently missing. When the page is shared on Facebook/Messenger (likely the main referral channel for a local salon), there's no preview image.

Options:
- **(a)** Create a simple 1200x630 OG image (salon name + services + location on brand colors). Place in `assets/og-image.jpg`.
- **(b)** Use the favicon SVG as a fallback — but social platforms prefer JPG/PNG at 1200x630.

Proposed tag:
```html
<meta property="og:image" content="https://jonasbrigi.hu/assets/og-image.jpg">
<meta property="og:url" content="https://jonasbrigi.hu/">
```

Action: create an OG image. This is a design task, not a code task.

---

### 7. Add `<lastmod>` to sitemap
**File:** `sitemap.xml`

Current sitemap has no `<lastmod>`. Adding it helps Google know when to re-crawl.

Proposed:
```xml
<url>
  <loc>https://jonasbrigi.hu/</loc>
  <lastmod>2026-03-30</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>
```

Update the date whenever content changes. Could also be automated in the deploy workflow.

---

## Priority 3 — Low impact / nice to have

### 8. Update OG tags to match new title/description
**File:** `landing.html`

Keep `og:title` and `og:description` in sync with the new `<title>` and meta description from items 1–2.

---

## Already good
- `<html lang="hu">` ✓
- Canonical URL set ✓
- `robots.txt` + `sitemap.xml` present and deployed ✓
- JSON-LD `NailSalon` type ✓
- Decorative images use `alt=""` ✓
- `loading="lazy"` on map iframe ✓
- GA4 with consent mode ✓
- Pre-built Tailwind CSS (no render-blocking CDN) ✓

---

## Out of scope
- **Google Business Profile**: the single most impactful thing for local SEO. Cannot be done via code — must be set up manually at [business.google.com](https://business.google.com). Strongly recommended.
- **Backlinks**: local directories (szalonok.hu, kozmetika.info, etc.) — manual outreach.
- **Google Search Console**: submit sitemap, monitor indexing. Manual setup.
