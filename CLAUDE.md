# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static landing page for a nail salon (manikűr/műköröm) sole proprietorship. No build step — open HTML files directly in a browser.

## Architecture

- **`bringo-tokens.js`** — single source of truth for all design tokens. Loaded via `<script>` before Tailwind. Extends `tailwind.config` with colors, typography, spacing, shadows, etc. Also injects global CSS (gradients, blend modes, font-face). **All styling decisions live here** — never use inline `style=""`.
- **`landing.html`** — main landing page. Self-contained, references `bringo-tokens.js` and Tailwind CDN.
- **`styleguide.html`** — visual reference for all tokens and components.
- **`assets/lineart/`** — decorative line art PNGs used as background elements.
- **`fonts/`** — local font files (`CalendaryHands.ttf`, `WhisperingSignature.ttf`).

## Key conventions

- Tailwind via CDN (`https://cdn.tailwindcss.com`) — no npm, no build.
- Custom tokens are added to `bringo-tokens.js` under `tailwind.config.theme.extend`, then used as Tailwind utility classes in HTML.
- Spacing tokens use `clamp()` for fluid responsive sizing (e.g. `hero-top`, `section-gap`).
- Global CSS rules (affecting multiple pages) go into the injected `<style>` block in `bringo-tokens.js`.
- Both `landing.html` and `styleguide.html` must include `bringo-tokens.js` to pick up tokens and global styles.
