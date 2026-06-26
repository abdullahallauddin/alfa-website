# Design

## Theme
Deep-navy, engineering-grade. A dark identity carries the home page: industrial confidence, light type on near-black navy, one disciplined accent blue. Light page surfaces remain on inner/legal pages; the home page is the brand showcase.

## Color
Committed strategy — navy carries the surface; accent blue used sparingly.

- `--navy-900` `#0a1428` — deepest ground (gradient ends)
- `--navy-800` `#11234B` — gradient mid
- `--navy-700` `#20376D` — brand navy (hero, footer, panels)
- `--accent` `#2C95D2` — single accent (headings' emphasis word, numbers, hovers, rules)
- Text on navy: `#ffffff` (headings), `white/75` (body), `white/55` (muted) — all AA on the navy ground.

Section ground: `bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428]`. Imagery sits behind a navy gradient overlay for legibility.

## Typography
- **Roboto** (300/400/500) — home sections + navbar. Large light headings, accent emphasis word.
- **Poppins** — retained on inner pages (existing system).
- Headings: `clamp()` fluid, light weight, accent word in `#2C95D2`. Letter-spacing ≥ -0.02em.
- Body: ≤ ~70ch, `white/75`, `font-light`, line-height generous on dark.

## Components / Patterns
- **Section snap**: `html.home-snap { scroll-snap-type: y mandatory }`, each panel `.snap-section` (`scroll-snap-stop: always`). Do not change.
- **Navbar**: transparent → white-on-scroll; full-screen overlay menu (desktop grid + hover-reveal; mobile accordion).
- **Section shell**: `min-h-screen` full-viewport panel, navy gradient ground, centered or split content. Each home section owns a distinct composition (split, carousel, stat band, timeline, map, full-bleed, marquee) but shares palette + type.

## Layout
- Full-viewport sections; one idea per fold.
- Fluid spacing via `clamp()`; vary rhythm per section.
- Max content width ~`max-w-6xl`; split sections use a 2-column grid that stacks on mobile.

## Motion
- Subtle reveals (framer-motion `whileInView`), staggered within a list, not a uniform per-section fade.
- Ease-out; no bounce. `prefers-reduced-motion` → instant/opacity-only.

## Bans honored
No side-stripe borders, no gradient text, no identical card grids, no per-section uppercase eyebrows, no decorative glassmorphism.
