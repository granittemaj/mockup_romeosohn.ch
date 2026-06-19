# Romeo + Sohn GmbH — Design Directions

Four distinct design directions for the **Romeo + Sohn GmbH** website redesign, presented as a single interactive demo for client review.

**Live demo:** _(GitHub Pages link appears here once Pages is enabled, see below)_

---

## What's in here

A single HTML file with **4 home-page mockups**, switchable via a pill at the bottom of the screen (or press keys **1 / 2 / 3 / 4**).

| # | Name | Personality |
|---|---|---|
| **01** | **Editorial** | Magazine-clean, hairline rules, big italic serif accent. Restrained and design-led. |
| **02** | **Bold Trade** | Navy hero, amber accent, big bold sans, confident statements. Modern Handwerker energy. |
| **03** | **Boutique** | Warm cream, sage accent, rounded everything, soft shadows. Premium and approachable. |
| **04** | **Studio** | Bento grid, gradient text, tight modern type, asymmetric. Contemporary tech feel. |

All four use identical German content so only the design differs. Each is **100% mobile-friendly**, verified at 320 / 375 / 390 / 768 px with zero horizontal overflow and no tap targets under 36 px.

---

## How the client should use it

1. Open it on desktop and on a phone.
2. Switch through all four with the bottom pill.
3. Ask yourself: "Which one feels closest to how I want my clients to feel when they land here?"
4. Then: "What's one thing I'd take from a different direction?"

The goal is to narrow down a direction, not to pick a final design. The chosen direction will be expanded into the full 5-page site (Home, Über Uns, Dienstleistungen, Galerie, Kontakt).

---

## View it locally

No installation needed.

- **Double-click `index.html`** to open it in your browser, **or**
- Serve it (recommended):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Publish for free (GitHub Pages)

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
5. After ~1 minute the site is live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## Structure

```
.
├── index.html         # All four mockups, switcher, scoped styles per direction
├── .nojekyll          # Tells GitHub Pages to serve files as-is
├── LICENSE
├── README.md
└── .gitignore
```

Single file by design. Each mockup's styles are scoped under a parent class (`.m1`, `.m2`, `.m3`, `.m4`) so they cannot interfere with each other.

---

## Next steps

Once the client picks a direction, the winning mockup will be expanded into the full responsive 5-page site with working contact form and content management.

---

© 2026 Romeo + Sohn GmbH. Prototype prepared by PAPINGU.
