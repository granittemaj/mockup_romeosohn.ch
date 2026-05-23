# Romeo + Sohn GmbH — Website Prototype

First design prototype for **Romeo + Sohn GmbH**, Gipsergeschäft & Malerei in Schlieren (ZH).

**Live demo:** _(GitHub Pages link appears here once Pages is enabled — see below)_

---

## About this prototype

A refined, classic redesign of [romeosohn.ch](https://romeosohn.ch/) with a *"Swiss Craftsman"* direction — restrained, editorial, and intentionally photo-light per the client brief. The brand colour is pulled from the actual logo (blue) with a single quiet brass accent, replacing the previous blue/yellow clash.

It is a single-page application with five views — **Home · Über Uns · Dienstleistungen · Galerie · Kontakt** — and is **100% mobile-friendly**, verified at 320 / 375 / 390 / 768 px.

| | |
|---|---|
| **Stack** | Plain HTML, CSS, vanilla JS — no build step, no dependencies |
| **Fonts** | Fraunces (display) + Archivo (body), via Google Fonts |
| **Hosting** | Static — runs anywhere (GitHub Pages, Netlify, any web host) |
| **Status** | First prototype for client review |

---

## View it locally

No installation needed. Either:

- **Double-click `index.html`** to open it in your browser, **or**
- Serve it (recommended, avoids font/cache quirks):

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Publish it for free (GitHub Pages)

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
5. After ~1 minute the site is live at:
   `https://<your-username>.github.io/<repo-name>/`

> A custom domain (e.g. `prototype.romeosohn.ch`) can be added under the same Pages settings.

---

## Structure

```
.
├── index.html              # All five page-views (single-page app)
├── assets/
│   ├── css/styles.css       # All styling + responsive breakpoints
│   ├── js/main.js           # Routing, mobile menu, scroll reveals
│   └── img/
│       ├── logo.png          # Brand logo
│       └── favicon.png       # Browser tab icon
├── .nojekyll               # Tells GitHub Pages to serve files as-is
├── LICENSE
└── README.md
```

---

## Notes for review

- **Text** is kept essentially verbatim from the current site (all German copy, services, testimonials, address, opening hours).
- **Photo-light by design** — jobsite photos are replaced with textured material panels and per-service line icons. Strong, well-lit project photos can be re-introduced in the Galerie on request.
- **Open question for the client:** the current site says *Schlieren* in the logo/address but *"Maler und Gipser in Zürich"* in the footer. This prototype uses *"im Raum Zürich"* as a stopgap — please confirm the preferred wording for local SEO.

---

## Next steps (not in this prototype)

- Wire the contact form to a real endpoint (e.g. form service or webhook).
- Final photography selection for the gallery.
- Content review & sign-off.

---

© 2026 Romeo + Sohn GmbH. Prototype prepared by PAPINGU.
