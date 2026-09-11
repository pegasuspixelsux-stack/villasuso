# Design

<!-- impeccable:design-schema 1 -->

Soft premium surface system for the Gonzalo Villasuso marketplace. Black ground;
cards and panels float on diffused shadows rather than borders. Inter throughout,
tight tracking, generous air. Palette: black, white, and the three BMW M colors.

## Foundations

**Platform:** web · Next.js App Router (16), React 19, Tailwind CSS v4, TypeScript.
The homepage ships as one client component (`app/page.tsx`); shared primitives in
`components/`, data/config in `lib/`.

**Theme:** dark only.

## Color

Tokens live in `app/globals.css` under `@theme` (`--color-*`).

| Token | Value | Role |
|---|---|---|
| `ground` | `#000000` | page background — true black |
| `surface` | `#0c1420` | cards, panels, nav — black tinted toward Azure Palace for cohesion with the blue accent |
| `surface-2` | `#121c2b` | nested surface (inputs, inner cards) |
| `surface-hi` | `#1a2738` | hover / focus fill |
| `ink` | `#ffffff` | primary text — true white |
| `ink-dim` | `#a7b3c2` | secondary text |
| `ink-faint` | `#838fa0` | tertiary text, labels, disclaimers |
| `hairline` | `rgba(255,255,255,.08)` | the only borders — footer rules (nav uses the M-stripe instead, see below) |
| `red` | `#e7222e` | BMW M "Funky Red" — the action color |
| `red-hi` | `#ec4e58` | hover, and the large accent numerals / accent words |
| `red-deep` | `#8b141c` | darkest red, for tinted badges/overlays |
| `blue` | `#16588e` | BMW M "Azure Palace" — info/selection fills, never a CTA |
| `blue-hi` | `#81c4ff` | BMW M "Glossy Light Blue" — info/link text, focus rings, selection rings |
| `blue-deep` | `#0a3355` | darkest blue, for tinted panels |

Black, white, and the three official BMW M colors are the whole palette — no other
hues. Two accents, two jobs, kept strictly apart:

- **Red = action.** Primary buttons, the active tab/filter/page pill, the "recién
  ingresado" dot, the large payment figure, and the one red phrase in the hero
  headline. Never used for anything the visitor isn't meant to act on.
- **Blue = information, not action.** The location/address badges (hero and
  dealership photo), the gallery's selected-thumbnail ring, and the global
  `:focus-visible` outline all use `blue-hi`. `blue` (the deeper Azure Palace)
  is reserved for fills/surfaces, not small text on black — it fails contrast
  there.
- **The M-stripe** — a 3px hard-edged tri-band (`blue-hi` · `blue` · `red`, BMW's
  own stripe order) replaces the nav's bottom hairline. It is the one place all
  three brand colors appear together; don't repeat that combination elsewhere.

## Type

`Inter` (variable, self-hosted via `next/font`) for everything, with
`letter-spacing: -0.011em` on `body`.

- Display / H1: `clamp(2.75rem, 7.5vw, 5.5rem)`, weight 600, tracking `-0.04em`, line-height ~1.0
- Section H2: `clamp(2rem, 4vw, 3rem)`, weight 600, tracking `-0.03em`
- In-panel H3: `clamp(1.9rem, 2.6vw, 2.5rem)`, weight 600
- Body: 16–19px, line-height ~1.6, `ink-dim`
- Payment figure: 52 → 68px, weight **700**, `red-hi` — the primary visual anchor
- Labels / meta: 11–13px, weight 500, `ink-faint`
- Numeric data: add `.tnum` (tabular figures)

## Shape & depth

- Radius: cards `22px`, big panels `28–32px`, inputs / small controls `14–16px`, pills `999px`
- No structural borders. Elevation = shadow only:
  - `--shadow-pop` — subtle lift (metric cards)
  - `--shadow-soft` — standard float (vehicle cards, tool panels)
  - `--shadow-float` — prominent (contact panel, hover state of vehicle cards)
- Vehicle cards lift `-4px` + upgrade to `--shadow-float` on hover; photo scales `1.03`.

## Layout

- Content max-width `1320px`, side padding `20px` → `32px` (sm+)
- Section rhythm: `py-24` → `py-32` (sm+); a section with no heading drops its top padding
- 2-column sections (Nosotros, Contacto, tool panels) are `lg:grid-cols-2` with
  `lg:items-center` (or `lg:items-stretch` when the columns should match height),
  `gap` 14 → 20
- Inventory grid: `grid-cols-1 → 2 → 3 → 4` (xl), `gap-6`

## Motion

- `Odometer` — numeric readouts ease from previous to next value (`easeOutExpo`,
  ~0.5–1.1s); honours `prefers-reduced-motion` (snaps).
- Hero background: muted looping `<video>` (`/videos/hero.mp4`, ~900 KB) with a
  poster; `autoPlay` disabled under reduced motion. Two stacked gradient scrims
  (`from-ground/75 via-ground/45 to-ground/10` + a bottom fade to `ground`) keep
  text legible; hero H1/P also carry a `text-shadow`.
- Hover/press transitions ~150–300ms ease-out. `html { scroll-behavior: smooth }`
  (auto under reduced motion).

## Components

- `BrandMark` — placeholder "GV" monogram badge (text, not an image) pending a
  real logo file from the owner; `Wordmark` pairs it with tracked "VILLASUSO"
  (or the full "GONZALO VILLASUSO" in the nav).
- `VehicleCard` — photo (4:3, status pill overlay) + body: title (min 2 lines) ·
  spec line · **cuota `/mes`** (primary) · price (secondary) · finance disclaimer ·
  red "Consultar" pill → prefilled WhatsApp · faint ID/ingreso/ubicación line.
- `Odometer`, `WhatsappGlyph` (authored single-colour SVG).
- Segmented controls (filters, tabs, pagination): pill children, active = `red`,
  idle = `surface` → `surface-hi` on hover.
- Inputs: `surface-2` fill, `rounded-2xl`, no border, `focus:bg-surface-hi`.
  Range sliders: 6px rounded track, 22px white circular thumb (themed in globals).

## Content & data

- Language: Uruguayan Spanish only.
- `lib/inventory.ts` — 16 mock vehicles; `getInventory()` is the single swap point
  for a live backend (Supabase). Photos in `public/images/vehicles/` are
  illustrative stock (see `SOURCES.md`) — replace before launch.
- `lib/finance.ts` — cuota = 30% down · 60 months · TNA 6.97% (illustrative;
  every quote "sujeto a aprobación crediticia").
- `lib/site.ts` — contact config. Address is real (Av. Roosevelt Parada 8,
  Punta del Este); opening hours are still a placeholder pending the owner.
- Instagram feed-post template: `/plantilla-instagram` + `INSTAGRAM_TEMPLATE.md`
  (1080×1350; on-graphic copy limited to marca / modelo / año / estado).
