# Romeo + Sohn GmbH - Website

Single-page website for **Romeo + Sohn GmbH**, built to match the brand book mockup exactly.

Brand identity: red `#B8342E`, navy `#14213D`, Poppins + Inter, PS monogram.

## Preview

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then visit http://localhost:8000.

## Structure

```
.
├── index.html          # Full single-page site (HTML + CSS + JS inline)
├── assets/
│   ├── monogram.svg    # PS monogram (red rounded square)
│   ├── wordmark.svg    # ROMEO + SOHN horizontal wordmark
│   └── favicon.svg     # Browser favicon
├── README.md
├── LICENSE
├── .gitignore
└── .nojekyll
```

## Sections

1. **Hero** - "Qualität. Vertrauen. Wertbeständig." with architectural photo right
2. **Services band** - Dark navy band, 4 services: Hochbau, Umbau und Sanierung, Schlüsselfertig, Baumanagement
3. **Projekte** - Featured project showcase (1 large + 2 stacked)
4. **Stats** - 4 numbers: 150+, 12+, 50+, 100%
5. **Über uns** - Dark section with branded wall right ("Familie. Handwerk. Verantwortung.")
6. **Footer** - 4-column with CTA and social

## Photos

The site uses one self-hosted team photo + 11 Unsplash architectural/trade photos.

### Self-hosted (bundled in repo)

| Slot | Path |
|---|---|
| Team hero | `assets/img/team-hero.jpg` (your branded photo of two workers + Zurich skyline) |

### Unsplash hotlinked (via `images.unsplash.com`)

| Slot | Unsplash photo ID |
|---|---|
| Service: Neu- und Umbauten | photo-1635006459494-c9b9665a666e |
| Service: Verputz | photo-1577200080776-fe8b6c5559dc |
| Service: Renovationen | photo-1660029763088-d8c1dff1a5e3 |
| Service: Fassaden | photo-1582268611958-ebfd161ef9cf |
| Service: Leichtbau | photo-1543525324-26e03b510586 |
| Service: Brandschutz VKF | photo-1673263404448-a48d0d70a4ae |
| Service: Malerei | photo-1604181594030-24593e04d049 |
| Projekt: PhysioWelt | photo-1523217582562-09d0def993a6 |
| Projekt: Fassadensanierung | photo-1691425700585-c108acad6467 |
| Projekt: Lehmputz | photo-1577200080776-fe8b6c5559dc |
| Projekt: Brandschutzwand | photo-1513584684374-8bab748fbf90 |

All Unsplash photos are free for commercial use under the [Unsplash License](https://unsplash.com/license).

### Replace with real Romeo + Sohn photography

When real project photos are ready:

1. Add JPGs to `assets/img/` (create folder)
2. In `index.html`, search for `images.unsplash.com` and replace each `src` with your local path
3. Update the `alt` text to describe the actual project

### Self-host the Unsplash photos

To remove the Unsplash CDN dependency:

```bash
mkdir -p assets/img
curl -L "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format&fit=crop" -o assets/img/hero.jpg
curl -L "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&auto=format&fit=crop" -o assets/img/proj-1.jpg
curl -L "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80&auto=format&fit=crop" -o assets/img/proj-2.jpg
curl -L "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80&auto=format&fit=crop" -o assets/img/proj-3.jpg
```

Then update the `src` paths in `index.html` to point at `assets/img/hero.jpg` etc.

## Customization

### Colors

Tokens in `:root` near the top of `index.html`:

| Token | Value | Usage |
|---|---|---|
| `--rs-red` | `#B8342E` | Primary accent, CTAs, the "+" |
| `--rs-navy` | `#14213D` | Dark surfaces |
| `--rs-dark` | `#0E1424` | Service band + footer |
| `--rs-slate` | `#69707A` | Muted text |
| `--rs-ink` | `#0F172A` | Headings |
| `--rs-gray-100` | `#F8F9FA` | Section alt background |

### Typography

Google Fonts: Poppins (700, 800 for headings; 500, 600 for nav and labels) + Inter (400, 500 for body).

### Content

Hard-coded in `index.html`. Key constants:

- Phone: `+41 76 383 85 00`
- Email: `info@romeosohn.ch`
- Address: `Schulstrasse 34, 8952 Schlieren`

Project copy uses Hochbau placeholder titles (Neubau Villa Zug, Umbau Wohnhaus Zürich, Bürogebäude Luzern). Replace with real Romeo + Sohn project references.

## Deploy

### GitHub Pages

1. Push to GitHub
2. Settings > Pages > Source: `main` branch, root
3. Live at `https://<user>.github.io/<repo>/`

`.nojekyll` is included so GitHub serves the files as-is.

### Netlify / Vercel / Cloudflare Pages

Drag the folder into any static host. No build step.

### Custom domain

For `www.romeosohn.ch`:

1. Add a `CNAME` file at root containing: `www.romeosohn.ch`
2. DNS:
   - `CNAME www -> <user>.github.io`
   - `A @ -> 185.199.108.153` (and the other 3 GitHub Pages IPs)

## Open decisions before going live

### Positioning

The brand mockup positions Romeo + Sohn as a **general contractor** (Hochbau, Schlüsselfertig, Baumanagement). The real business is currently a **Gipsergeschäft** (plastering and painting trade). Decide before launching whether to:

- Stay with Gipsergeschäft positioning, in which case the 4 service tiles need to become Verputz, Renovationen, Fassaden, Brandschutz VKF, Malerei
- Reposition to general contractor, in which case the GmbH purpose statement and operational scope need to follow

The site currently mirrors the mockup. Service tile content swaps in 5 lines of HTML.

### Brand legal

The red "+" in the wordmark may draw attention from the Swiss Red Cross (SRK), who actively police imagery resembling the protected Red Cross emblem under the Wappenschutzgesetz. The "+" is technically distinct from a cross but visual similarity could trigger a cease and desist. Recommend a brief lawyer check or a defensive design tweak (heavier "+" weight, navy instead of red, or replace with "&") before going on signage and vehicle wraps.

## Accessibility

- Semantic HTML
- All interactive elements meet 44x44px tap target on mobile
- Focus-visible on form inputs and links
- ARIA labels on icon-only buttons
- WCAG AA color contrast on text
- `prefers-reduced-motion` respected

## Browser support

Modern Chrome, Firefox, Safari, Edge. Uses CSS Grid, Flexbox, custom properties, `backdrop-filter` (graceful degradation), `IntersectionObserver`.
