# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: car buyers in Punta del Este, Uruguay** and the wider Departamento de Maldonado region. They arrive mostly on mobile, often from social media, looking for a specific kind of car within a budget. Their job: see what Gonzalo Villasuso currently has, judge whether a vehicle is worth a visit, and reach the dealership to ask questions or arrange to see it in person.

**Secondary: Gonzalo Villasuso sales staff** who receive the enquiries the site generates and respond to them (typically over WhatsApp/phone).

Interface language is Uruguayan Spanish.

## Product Purpose

A lead-generation website for Gonzalo Villasuso, an automotora offering selected BMW, Land Rover, Jaguar and MINI vehicles, plus a reusable Instagram feed-post graphic template that matches it. The website presents current inventory and turns interested visitors into direct contact — WhatsApp message, phone call, or enquiry form — tied to a specific vehicle where possible. The Instagram template is a standing blueprint the dealership reuses to post individual vehicles to social, where most traffic originates. Success is measured in qualified enquiries reaching the sales team, not on-site transactions.

## Deliverable Surfaces

1. **Website** — hero + fast inventory grid, per-vehicle detail, a "Nosotros" section, and a contact/location footer. "Newspaper classified" simplicity: no brand manifesto, minimal fluff, quick to scan on a phone.
2. **Instagram feed-post template** — a reusable layout specification (and reference implementation) for posting one vehicle per graphic. On-graphic copy is strictly Make / Model / Year / Status only; price, kilometres, and details belong in the caption, never the image.

## Positioning

Automotora in Punta del Este offering selected vehicles from four marques — BMW, Land Rover, Jaguar and MINI — rather than an all-makes inventory. Whether this is a manufacturer-authorized dealership or an independent seller specializing in these brands is **undecided** and must be confirmed before the copy claims either. Any sharper positioning claim (guarantees, years in business, reputation markers) is likewise **undecided** and must not be invented.

## Operating Context

- Buyers browse predominantly on phones, frequently arriving from Instagram / Facebook Marketplace links.
- First contact almost always happens over WhatsApp; phone and in-person walk-ins at the physical lot also occur.
- Buying a car involves an in-person viewing and test drive at the dealership.
- Trade-in ("permuta") and financing are common expectations in this market; whether Gonzalo Villasuso offers them and on what terms is **undecided**.
- Used-car prices in Uruguay are commonly quoted in USD, sometimes UYU — the currency convention for this site is **undecided**.

## Capabilities and Constraints

Confirmed scope:
- Browsable inventory of vehicles for sale, with per-vehicle detail (make, model, year, mileage in km, price, photos).
- Fast client-side filtering of the inventory grid by category / model.
- Per-vehicle status tags in Spanish — confirmed values so far: **"Disponible"**, **"Recién Ingresado"**.
- Lead capture on every relevant surface: WhatsApp click-to-chat (primary), phone link, contact form, dealership location/map.
- A "Nosotros" section (short, factual — content pending from owner).
- Spanish-language UI throughout.
- Instagram feed-post template as a standalone deliverable surface (see Deliverable Surfaces).

Explicitly undecided (do not fabricate):
- Whether this is a manufacturer-authorized dealership for BMW / Land Rover / Jaguar / MINI, or an independent seller of those makes.
- Where inventory data comes from (CMS, manual entry, external feed) and how often it updates.
- Whether financing, trade-in valuation, or online reservation/deposit flows exist.
- Pricing currency (USD vs UYU) and whether prices are shown at all vs "consultar".
- Exact opening hours (address is confirmed — see Brand Commitments).
- Any second language.

## Brand Commitments

- Name: **Gonzalo Villasuso** (legal name: Automotora Gonzalo Villasuso).
- Location: Av. Roosevelt Parada 8, Punta del Este.
- Contact: WhatsApp/phone `+598 94 438 600` (local display `094 438 600`), email `automotoragvillasuso@gmail.com`.
- Brands carried: BMW, Land Rover, Jaguar, MINI.
- **Colour direction (binding, carried over from the previous brand):** a high-contrast dark foundation (deep charcoal / near-black) paired with a bold automotive red accent — crimson, around `#DC2626` — reserved for CTAs, badges, and active states. Revisit if the owner wants a distinct palette for the new brand.
- **Positioning of the look:** **undecided following the rebrand.** The previous direction assumed an all-makes, everyday-stock inventory ("exclusive-showroom look, honest commuter stock, not luxury cosplay"); that assumption no longer holds now that inventory is curated to BMW/Land Rover/Jaguar/MINI. Whether the look should lean more upscale is a call for the owner, not to be invented here.
- **Logo:** not yet supplied by the owner. The site currently uses a plain "GV" text/monogram placeholder (`components/brand-mark.tsx`) — replace it with a real logo file once received; don't treat the placeholder as final branding.
- Brand voice: direct and plain-spoken, Uruguayan Spanish. No superlatives, no invented awards. "Precio sin vueltas" over "no-bullshit".

## Evidence on Hand

None in the repository yet. No real vehicle photos, inventory data, pricing, testimonials, customer names, sales figures, awards, or marketing copy are available. A real logo and any palette change are pending from the owner. Future work must not invent inventory, customer quotes, review scores, "trusted by" claims, or years-in-business figures.

## Product Principles

1. **Every screen serves the enquiry.** From any vehicle or page, contacting Gonzalo Villasuso about that car is one tap away — WhatsApp first.
2. **Mobile-first, social-referral-first.** The typical visitor is on a phone, arriving from a social post, deciding in seconds whether this dealer is worth their time.
3. **Spanish-first and Punta del Este-local.** Language, currency, geography, and contact norms reflect the Uruguayan market, never a generic dealership template.
4. **Trust is built from specifics.** Honest vehicle details (year, km, condition), real photography, and clear next steps persuade — not superlatives or invented social proof.
5. **The brand leads the look, once it exists.** Until a real Gonzalo Villasuso logo and palette are supplied, the site keeps the previous dark/red system as a placeholder foundation rather than inventing a new one.
