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
| 14 | **Visually verify every product card image matches its name** | ⚠️ |

---

## Backlog (next milestones, in order)

### M0 — Visual QA (do first)
- [ ] ⚠️ Review hero + all 26 card images against product names (no vision was available this pass).
- [ ] Review mobile layout (≤ 390 px) and 320 px reflow.
- [ ] Confirm Manrope/Inter render (self-hosted fonts).
- [ ] Check contrast of oxblood on rose/pearl surfaces.

### M1 — About Us content
- [ ] User will supply the direction; rewrite `app/about/page.tsx` accordingly.
- [ ] Keep the "no invented history/certifications" rule.

### M2 — 3D hero (Milestone B)
- [ ] Add `@react-three/fiber`, `@react-three/drei`, `three`.
- [ ] Load `public/models/glasses-3d-model.glb` in the hero stage.
- [ ] Studio lighting (soft key, neutral rim), contact shadow, capped DPR ≤1.5.
- [ ] Scroll-driven camera/rotation (Motion `useScroll` → one shared progress value).
- [ ] Poster fallback (current image) for loading, error, reduced-motion, <1024 px.
- [ ] Pause rendering offscreen / on tab hidden; dispose on unmount.

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
- [ ] Seed `rating`/`reviews` for all 26 products + review list UI on detail page.
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
