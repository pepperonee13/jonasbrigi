# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static landing page for a nail salon (manikűr/műköröm) sole proprietorship in Alsóörs. No build step — open HTML files directly in a browser.

## Architecture

- **`tailwind.config.js`** — single source of truth for all design tokens. Extends Tailwind with custom colors, typography, spacing, shadows, border-radius, etc. **All styling decisions live here** — never use inline `style=""`.
- **`input.css`** — Tailwind directives (`@tailwind base/components/utilities`) + global CSS rules (gradients, font-face, custom component classes like `.service-card`, `.divider`).
- **`bringo-styles.css`** — pre-built, minified CSS output. Generated from `tailwind.config.js` + `input.css` using the Tailwind standalone CLI. **Committed to the repo.** Both HTML files load this file.
- **`bringo-tokens.js`** — kept as a reference only. No longer loaded by any HTML file, not deployed.
- **`landing.html`** — main landing page. Self-contained, loads `bringo-styles.css`.
- **`styleguide.html`** — visual reference for all tokens and components. Not deployed to GitHub Pages.
- **`assets/lineart/`** — decorative line art PNGs used as background elements.
- **`fonts/`** — local font files (`CalendaryHands.ttf`, `WhisperingSignature.ttf`).

## Regenerating CSS

Run whenever `tailwind.config.js`, `input.css`, or Tailwind utility class usage in HTML files changes.

**Windows:**
```
generate.bat
```

**Linux / macOS:**
```
sh generate.sh
```

Both scripts require the Tailwind standalone CLI binary in the repo root (not committed):

| Platform | Binary name | Download |
|---|---|---|
| Windows | `tailwindcss.exe` | `tailwindcss-windows-x64.exe` from the [v3.4.17 release](https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.17) |
| Linux | `tailwindcss` | `tailwindcss-linux-x64` → rename + `chmod +x` |
| macOS | `tailwindcss` | `tailwindcss-macos-arm64` or `tailwindcss-macos-x64` → rename + `chmod +x` |

After running, commit the updated `bringo-styles.css`.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. On push to `main`, the workflow stages only public files into `_site/`:

- `landing.html` → `_site/index.html`
- `bringo-styles.css` → `_site/bringo-styles.css`
- `fonts/` → `_site/fonts/`
- `assets/` → `_site/assets/`

Everything else (docs, plans, styleguide, source CSS/config, CLAUDE.md) is **not published**.

## Key conventions

- No CDN, no npm, no build pipeline. Tailwind is pre-built locally and committed.
- Custom tokens are added to `tailwind.config.js` under `theme.extend`, then used as Tailwind utility classes in HTML.
- Global CSS rules (affecting multiple pages) go into `input.css`.
- Spacing tokens use `clamp()` for fluid responsive sizing (e.g. `hero-top`, `section-gap`).
- Both `landing.html` and `styleguide.html` must load `bringo-styles.css`.

## Repo docs (not deployed)

- **`01_landingpage.md`** — original project brief (services, pricing, style direction).
- **`02_content.md`** — content details (copy, contact info, location).
- **`03_finetuning.md`** — design fine-tuning notes.
- **`plans/*`** — plans
