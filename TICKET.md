# SRI OPTICALS — Ticket / Checklist

Status legend: ✅ done · 🔵 in progress · ⬜ todo · ⚠️ needs visual/human review

---

## Latest iteration (hero photo + uniform square product images)

| # | Task | Status |
| --- | --- | --- |
| 29 | Remove the floating "plain glass" hero graphic | ✅ |
| 30 | Hero = full-bleed `HeroPage on which main text sits .jpg` with text overlaid on the photo | ✅ |
| 31 | Pull `men power glasses 2/` + poster + hero from `main`, dedupe unisex images (10 unique) | ✅ |
| 32 | Optimize + wire **square (1:1)** product images (placeholders across all 31 products) | ✅ |
| 33 | Add `poster.jpg` to the homepage "Buying for a store?" (B2B) section | ✅ |
| 34 | Write `upload_image.md` — step-by-step image-adding guide | ✅ |
| 35 | Update `PROJECT_CONTEXT.md` + `TICKET.md`; add Future Implementation List | ✅ |
| 36 | ⚠️ Visually verify hero overlay legibility + placeholder images in a real browser | ⚠️ |

---

## Current iteration (correction pass)

| # | Task | Status |
| --- | --- | --- |
| 1 | Remove sidebar; logo becomes the home link | ✅ |
| 2 | Header = logo → profile · wishlist · cart (no "Shop collection") | ✅ |
| 3 | Profile icon → `/account` with Customer vs Business blocks | ✅ |
| 4 | Customer = retail shop (Men/Women/Children + scrollable collections) | ✅ |
| 5 | Business = same shop, 40% of retail, MOQ 20 | ✅ |
| 6 | Scrap secondary hero CTA | ✅ |
| 7 | New theme (Pearl / Graphite / Oxblood) — replace sage/beige | ✅ |
| 8 | Hero: frame is the focus, small headline, "Shop frames" → categories | ✅ |
| 9 | Remove filler sections; add ULTEM / Polarised / Fiber / Metal collections | ✅ |
| 10 | Footer: 5 columns (Shop now / Account / Milestones / About us / Help) | ✅ |
| 11 | Placeholder pages: `/milestones`, `/contact`, `/faqs` | ✅ |
| 12 | Optimize + wire product images from `men power glasses/` | ✅ |
| 13 | Select hero 3D model (`glasses_3d_model.glb`) | ✅ |
| 14 | **Scroll-driven 3D hero** (rotate model on scroll, poster fallback) | ✅ |
| 15 | Rebuild catalog to match `men power glasses 2/` audience×type folders | ✅ |
| 16 | Add 5 new products (Deep Navy, Teal Cat-Eye, Two-Tone, Blue Sport Wrap, Matte Black Square) | ✅ |
| 17 | Remove "Prism 01" link from hero (→ Deep Navy Acetate as hero frame) | ✅ |
| 18 | Rename "Considered favourites" → **Bestsellers** | ✅ |
| 19 | **Undo scroll-driven 3D** → static centered hero | ✅ |
| 20 | **Drop blue theme** → Ivory / Espresso / Brass premium palette | ✅ |
| 21 | **Remove all 3D (.glb)** — hero is a static HD white-screened image | ✅ |
| 22 | Use new HD category images (Men/Women/Children/Shades/Sportswear + hero) | ✅ |
| 23 | **5 categories**: Men, Women, Children, **Shades**, **Sportswear** | ✅ |
| 24 | Classes (ULTEM/Unbreakable/Fiber/Metal/Coolers) as sub-filter only inside categories | ✅ |
| 25 | Remove standalone "Shop by material" section | ✅ |
| 26 | Account: auto-scroll to details form on "Continue as customer/business" | ✅ |
| 27 | **Visually verify every product card image matches its name** | ⚠️ |
| 28 | **Review new theme + category-image uniformity in a real browser** | ⚠️ |

---

## Backlog (next milestones, in order)

### M0 — Visual QA (do first)
- [ ] ⚠️ Review hero + all 31 card images against product names (no vision was available this pass).
- [ ] ⚠️ Review new Ivory/Espresso/Brass theme + 5 category-card image uniformity.
- [ ] Review mobile layout (≤ 390 px) and 320 px reflow.
- [ ] Confirm Manrope/Inter render (self-hosted fonts).
- [ ] Check contrast of brass on ivory/espresso surfaces.

### M1 — About Us content
- [ ] User will supply the direction; rewrite `app/about/page.tsx` accordingly.
- [ ] Keep the "no invented history/certifications" rule.

### M2 — 3D hero — REMOVED (closed)
- [x] Removed `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`.
- [x] Hero is now a static HD white-screened image (`hero.jpg`).
- Do NOT reintroduce 3D (user rejected it twice).

### M3 — Mock checkout + confirmation
- [ ] `/checkout` (delivery demo → review → place demo order).
- [ ] `/order-confirmation/[id]`.
- [ ] Idempotency (no duplicate orders on refresh), stock decrement, cart clear.
- [ ] Replace cart "coming soon" notice with checkout CTA.

### M4 — Commerce fidelity
- [ ] Color variants / SKUs (2–3 per product), lens options (clear / blue-light / sun / reading).
- [ ] Low-stock + out-of-stock states (≥2 OOS products, ≥4 low-stock variants).
- [ ] Purchase limits per SKU (default 5, premium 3).
- [ ] Modest discounts (≤4 products) with valid compare-at.
- [ ] Seed `rating`/`reviews` for all 31 products + review list UI on detail page.
- [ ] Business order-status flow if desired.

### M5 — Content pages
- [ ] `/milestones` real content (no invented history).
- [ ] `/contact` real channels (no fabricated details).
- [ ] `/faqs` real Q&A.

### M6 — Polish & verification
- [ ] Keyboard-only pass, focus trap in dialogs, visible focus.
- [ ] `prefers-reduced-motion` complete alternative.
- [ ] Empty / loading / error states for all async-looking paths.
- [ ] Tests (Vitest + RTL; money arithmetic, MOQ, cart merge, filters).
- [ ] README with run/demo/reset/limitations notes.

---

## Future Implementation List

What the user has asked to build *later* (in rough priority order):

1. **Final per-product photos** — replace the 10 placeholder square images with a
   unique, correct photo for each of the 31 products (user will do this using
   `upload_image.md`; needs proper aspect ratio + uniform backgrounds).
2. **Mock checkout + order confirmation** — `/checkout` (delivery demo → review →
   place demo order) and `/order-confirmation/[id]`, with idempotency, stock
   decrement, cart clear, and a checkout CTA replacing the current "coming soon"
   notice.
3. **About Us content** — the user will supply the direction; rewrite
   `app/about/page.tsx` (no invented history/certifications).
4. **Commerce fidelity** — color variants / SKUs, lens options, low-stock and
   out-of-stock states, purchase limits, a few valid discounts, seeded reviews
   with a review-list UI on the detail page.
5. **Content pages** — real `/milestones`, `/contact`, and `/faqs` content.
6. **Polish & verification** — keyboard/focus pass, `prefers-reduced-motion`
   alternative, empty/loading/error states, tests (Vitest + RTL), and a README.

---

## Pricing / data rules to preserve

- Money = **integer paise**. Never float rupees.
- Business price = `round(retail × 0.40)`; MOQ 20 (any qty ≥ 20, not multiples).
- Guest + customer share the retail cart; business has its own cart.
- Shipping: ₹99 below ₹3,000, free from ₹3,000, none on empty cart.
