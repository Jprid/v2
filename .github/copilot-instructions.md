# Personal Website — Copilot Instructions

SvelteKit v2 static portfolio site for John Pridmore, deployed to GitHub Pages at `www.jprid.com`.

## Build & Deploy

```bash
yarn           # install dependencies
yarn run dev   # local dev server
yarn run build # static build → ./build/
yarn run deploy # push build to gh-pages branch (sets CNAME www.jprid.com)
```

## Architecture

- **Single page** (`src/routes/+page.svelte`) composed of: `Links` (sidebar nav), About section, Work section (tabbed via `Switcher`), Contact section.
- **Static export** — `+layout.ts` sets `prerender = true`, adapter is `@sveltejs/adapter-static`.
- **Base path** — `paths.base` is `/v2` in production, empty in dev (set in `svelte.config.js`). Use `base` from `$app/paths` for any internal asset URLs.
- **Content data** — `src/content.json` is the single source of truth for experience entries. Models are in `src/lib/models.ts`. `contact_info` and `organizations` exist in the JSON but are not yet rendered.

## Styling Conventions

- **Global tokens** are in `<style>` in `src/app.html`: CSS custom properties (`--carolina-blue`, `--prussian-blue`, `--mint`, etc.), utility classes (`.lato`, `.fs-xl/l/md/sm`, `.flexed-row-center`), and base resets.
- **Standalone `.scss` files** (`About.scss`, `Links.scss`, `Switcher.scss`) are imported as side-effects into their corresponding components — styles are global, not scoped.
- **Scoped `<style lang="scss">`** blocks are used in `+page.svelte` and `LinedHeader.svelte`.
- Use `color-mix(in srgb, ...)` for transparency. Use `orientation: portrait/landscape` media queries for responsive layout.

## Component Conventions

- **Svelte 4 patterns** — use `export let` for props and `$:` for reactive statements. Do **not** convert to Svelte 5 runes.
- **SVG icons** are raw strings returned by functions in `Icons.ts` and rendered via `{@html}`. Add new icons there as string-returning functions.
- Transitions use Svelte's `fade` from `svelte/transition`, gated by `onMount` where needed to prevent SSR flash.
- WAI-ARIA roles (`tablist`, `tab`, `tabpanel`) are used in `Switcher.svelte` — maintain these on any tab-like UI.
- `About.svelte` uses plain JS (no `lang="ts"` on the script block) — keep it consistent when editing that file.

## Key Files

| File | Purpose |
|------|---------|
| `src/content.json` | All experience/contact data |
| `src/lib/models.ts` | TypeScript interfaces matching content.json |
| `src/lib/Icons.ts` | SVG string factories |
| `src/app.html` | Global CSS tokens, GA4 tag, Google Fonts |
| `svelte.config.js` | Adapter config, base path |
