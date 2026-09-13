# SRI OPTICALS — Ticket / Checklist

Status legend: ✅ done · 🔵 in progress · ⬜ todo · ⚠️ needs visual/human review

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
| 19 | **Visually verify every product card image matches its name** | ⚠️ |
| 20 | **Verify 3D hero lighting/scale in a real browser** | ⚠️ |

---

## Backlog (next milestones, in order)

### M0 — Visual QA (do first)
- [ ] ⚠️ Review hero + all 31 card images against product names (no vision was available this pass).
- [ ] ⚠️ Review 3D hero: model lighting, scale, rotation range in a real browser.
- [ ] Review mobile layout (≤ 390 px) and 320 px reflow.
- [ ] Confirm Manrope/Inter render (self-hosted fonts).
- [ ] Check contrast of oxblood on rose/pearl surfaces.

### M1 — About Us content
- [ ] User will supply the direction; rewrite `app/about/page.tsx` accordingly.
- [ ] Keep the "no invented history/certifications" rule.

### M2 — 3D hero (Milestone B)
- [x] Add `@react-three/fiber`, `@react-three/drei`, `three`, `framer-motion`.
- [x] Load `public/models/glasses-3d-model.glb` in the hero stage.
- [x] Studio lighting (soft key, rim), contact shadow, capped DPR ≤1.5.
- [x] Scroll-driven rotation (front three-quarter → temple profile) via one progress value.
- [x] Poster fallback for loading / error / reduced-motion / <900 px.
- [ ] ⚠️ Verify model lighting/scale/pose in a real browser; tune keyframes.
- [ ] Pause rendering offscreen / on tab hidden; dispose on unmount.
- [ ] Optional: subtle pointer parallax (desktop, non-reduced-motion).

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

## Pricing / data rules to preserve

- Money = **integer paise**. Never float rupees.
- Business price = `round(retail × 0.40)`; MOQ 20 (any qty ≥ 20, not multiples).
- Guest + customer share the retail cart; business has its own cart.
- Shipping: ₹99 below ₹3,000, free from ₹3,000, none on empty cart.
