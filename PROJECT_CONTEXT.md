# SRI OPTICALS — Project Context (for the next AI)

> **Read this first.** It is the single source of truth for where this project
> stands, what has been decided, and what to build next. Pair it with
> [`TICKET.md`](./TICKET.md) (the checklist) and [`Implementation Plan.md`](./Implementation%20Plan.md)
> (the full original brief + all revision history).

---

## 1. What this is

A **frontend prototype** for **SRI OPTICALS**, a premium optical business in the
Indian market. It has a deliberately split shopping model:

| Mode | Who | Price | Minimum |
| --- | --- | --- | --- |
| **Customer** | Individual buyers | Retail (tax-inclusive, INR) | 1 unit |
| **Business** | Store operators / wholesalers | **40% of retail** (i.e. 60% off) | **20 units per line** |

Everything is **simulated** — no real auth, payments, orders, or inventory.
This is explicitly a demo, and the UI must keep saying so.

---

## 2. How we got here (condensed history)

The project went through several revisions. Only the outcomes that are still in
force matter now:

1. An initial "editorial storytelling" direction (oversized headlines, five
   scroll chapters, sage/beige palette) was **rejected by the user**.
2. The user issued **7 corrections** that replaced it with a **product-first,
   practical** direction:
   1. Profile icon → dedicated `/account` page with **Customer vs Business** blocks
      (customer = normal shop; business = same shop, lower prices + MOQ 20).
   2. Scrap the secondary hero CTA.
   3. Remove "Shop collection" from the header.
   4. Replace the sage/beige theme with a bolder palette.
   5. Make the **frame the hero, not the text**; "Shop frames" opens a
      Men/Women/Children section (scroll or pages); remove all filler sections and
      replace with real product collections (ULTEM, Polarised, Fiber, Metal).
   6. Move About Us into the **footer**.
   7. Remove the Home/About sidebar; the **logo** is the home link.
3. The user supplied a **footer structure** (5 columns) and a set of **product
   photos + 3D models** via this GitHub repo.

The current build implements all of the above. See §5 for what is still pending.

---

## 3. Theme (approved: Bold Blue & White)

Defined in `app/globals.css` under `:root`:

| Token | Value | Role |
| --- | --- | --- |
| `--blue` | `#1456E8` | Primary accent — buttons, links, active states |
| `--blue-dark` | `#0E3FB0` | Hover / pressed |
| `--blue-deep` | `#0A2A6E` | Hero/closing gradient end, dark surfaces |
| `--blue-tint` | `#EAF0FF` | Light-blue surfaces, tags, notices |
| `--bg` | `#FFFFFF` | Page background |
| `--bg-soft` | `#F5F8FF` | Product stages, cards |
| `--ink` | `#0B1B3F` | Headings & body text |
| `--muted` | `#5B6B8C` | Secondary text |
| `--line` | `#DFE6F5` | Borders |

The hero and closing band use a **bold blue gradient** (`#1B52E6 → #0A2A6E`) with
white type. The **footer is dark navy**. This replaced the earlier Pearl /
Graphite / Oxblood theme — **do not reintroduce** the soft beige/oxblood palette.

**Fonts:** Manrope (display/headings, weight 800) + Inter (body), self-hosted via
`@fontsource-variable/*` (Google Fonts was blocked in this environment — do NOT
revert to `next/font/google`).

---

## 4. Asset decisions (from this repo: `its-aadhesh/Sources`)

### 3D models — `public/models/`

| File | Decision |
| --- | --- |
| `glasses_3d_model.glb` (1.9 MB, ~60k tris) | ✅ **CHOSEN + WIRED IN** as a **static** hero render (see §5). Clean optical model with separated parts (Frame, Lens, Nosepads, Temple, Temple_tips) and `KHR_materials_transmission` for realistic lenses. Within the ≤100k-triangle budget. |
| `cyberpunk_johnny_silverhand_glasses.glb` (16.8 MB, ~240k tris) | ❌ **REJECTED.** It is a Cyberpunk-2077 prop (violates the "no cyberpunk" rule), exceeds the triangle budget 4×, and is ~9× the file size. Do not use. |

The hero renders this model once in a **fixed, centered studio pose** (no scroll
choreography — the user reverted the scroll-driven animation). The static poster
(`public/images/navy-hero.png`) is the loading / <900px / WebGL-unavailable
fallback. **The user does NOT want scroll-driven 3D** — keep the hero static.

### Product images — `public/images/`

31 original product photos (sourced from `men power glasses/` and the newer
`men power glasses 2/` category folders on `main`) were **optimized** (resized
from 2816×1536 @ ~5 MB down to ≤1600 px wide @ ~19–50 KB JPEG). A full
source→target map lives in `lib/catalog.ts` (each product's `image` field).

The user reorganized the source images on `main` into **audience × type folders**
(`men power glasses 2/{men, women, children} {power glasses, sunglasses}/`),
which is the ground truth for each product's **audience (Men/Women/Children) and
type (eyeglasses/sunglasses)**. The catalog was rebuilt to match those folders,
and 5 new images were added as new products (Deep Navy Acetate, Polished Teal
Cat-Eye, Teal & Lime Two-Tone, Blue Sport Wrap, Matte Black Square).

> ⚠️ **Caveat for the next AI:** this environment has no vision, so image→product
> matching relies on the folder structure + descriptive filenames only. **Visually
> verify each card image matches its product name before shipping.** Raw sources
> remain untouched at `men power glasses/` and `men power glasses 2/`.

---

## 5. Current state — what's built vs. pending

### ✅ Built and working (this iteration)

- **Shell:** fixed header (logo = home link → profile / wishlist / cart icons),
  no sidebar, no "Shop collection" text. 5-column footer (Shop now / Account /
  Milestones / About us / Help).
- **Homepage:** **static 3D hero** (glasses_3d_model.glb, centered studio pose on
  a bold blue gradient, no scroll animation), **four** audience cards (Men /
  Women / Children / **Sportswear**), a **"Shop by class"** section (5 classes),
  **Bestsellers** row, and a business teaser. The Prism 01 link is gone; Deep
  Navy is the hero poster + signature frame.
- **`/account`:** Customer vs Business role cards + optional display-name form +
  signed-in panel (sign out).
- **`/shop`:** audience tabs, search, sort, `collection` filter, **pricing mode
  banner** (retail vs wholesale), URL-state filters.
- **Product detail:** image, price (retail vs wholesale + strikethrough
  compare-at), specs, quantity stepper (steps by MOQ), add-to-cart, wishlist.
- **Cart & wishlist:** local persistence (`localStorage` key
  `sri-opticals:commerce:v2`), separate customer/business carts, MOQ + stock
  enforcement, shipping rule (₹99 under ₹3,000, free from ₹3,000).
- **31-product catalog** across **4 audiences** (Men / Women / Children /
  Sportswear) and **5 classes** (Premium ULTEM / Unbreakable / Fiber / Metal /
  Coolers), aligned to the reorganized audience×type image folders.
- **Placeholder pages:** `/about` (basic), `/milestones`, `/contact`, `/faqs`
  (all "coming soon"), and a `not-found` page.

### 🔲 Pending (see `TICKET.md` for the full checklist)

- **A. About Us content** — the user explicitly said they'll review/revise it next.
- **B. Mock checkout + order confirmation** — cart currently says "coming in a
  later iteration".
- **C. Reviews** — `rating`/`reviews` fields exist on some products but no review
  list UI.
- **D. Full spec fidelity** — color variants/SKUs, lens options, blue-light
  configs, low-stock/out-of-stock states are **not** implemented.
- **E. Milestones / Contact / FAQs real content.**
- **F. 3D polish** — verify lighting/scale of the model in a real browser,
  optional pointer parallax, product-detail "Explore in 3D" viewer (out of scope
  for now).

---

## 6. Architecture & file map

```
app/
  layout.tsx            root layout + fonts + providers
  globals.css           ALL styling (CSS variables, no Tailwind)
  page.tsx              homepage (Hero + categories + bestsellers + collections)
  account/page.tsx      role selection
  shop/page.tsx         catalog (searchParams-driven)
  product/[slug]/page.tsx
  cart/page.tsx
  wishlist/page.tsx
  about | milestones | contact | faqs/page.tsx
  not-found.tsx
components/
  shell.tsx             Header + Footer + Feedback (toast/storage notice)
  store-provider.tsx    client state + persistence (React Context, not Zustand)
  commerce.tsx          ProductCard, Catalog, ProductDetail, CartView, WishlistView
  account.tsx           role cards + session panel
  placeholder.tsx       "coming soon" screen
  hero.tsx              static 3D hero (poster fallback + lazy 3D, no scroll)
  three/hero-scene.tsx  React Three Fiber scene (glasses_3d_model.glb)
lib/
  catalog.ts            products (31), pricing, MOQ, shipping, collections
public/
  images/*.png          optimized product photos
  models/glasses-3d-model.glb
```

### 3D hero stack

- `three` + `@react-three/fiber` (v9) + `@react-three/drei` (v10) render the
  model in a **fixed, static pose** (one centered studio shot, no scroll/animation).
  `framer-motion` is still installed but **no longer used** (the scroll version
  was reverted) — safe to remove later.
- The scene is **lazy-loaded** (`next/dynamic`, `ssr:false`) so the ~740 KB
  three.js payload only downloads on capable desktop viewports (≥900px, pointer:
  fine, WebGL present). Everything else gets the static poster.
- React is pinned to `~19.2.0` (fiber v9 requires `react <19.3`). Do NOT bump
  React past 19.2 without also updating the R3F stack.

### Key rules encoded in `lib/catalog.ts`

- Money is stored in **integer paise**; `formatMoney()` renders INR.
- `wholesalePricePaise(retail) = round(retail * 0.40)`.
- `getMOQ(role)` = 20 for business, 1 for customer/guest.
- `getUnitPrice(product, role)` picks retail vs wholesale.
- Guest browsing = retail pricing; guests share the customer cart.

---

## 7. Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (validates everything)
npm run typecheck  # tsc --noEmit
```

Requires **Node 20.9+**. The build currently passes cleanly (38 routes).

---

## 8. Conventions for the next AI

1. **Do not reintroduce** the rejected direction: no oversized "A new
   perspective." hero headline, no sage/beige or oxblood palette, no sidebar, no
   five-chapter slogans, no "Shop collection" text in the header, **and no
   scroll-driven 3D animation** (the hero is a static centered render).
2. **Keep prices in paise**, role-aware. Never hardcode retail prices into UI.
3. **Keep the demo honest** — every account/checkout surface must say no real
   account/payment/order exists.
4. **Assets must stay optimized** — do not drop the raw 5 MB PNGs into `public/`.
5. **Keep the 3D hero progressive** — poster always renders first; WebGL must
   never block navigation or shopping.
6. **Commit on branch `arena/01a09cbf-sources`** and push only to that branch.

> **Note:** `main` on GitHub contains the raw source images (large PNGs). This
> working branch intentionally keeps only the optimized copies under
> `public/images/`. Do not merge `main`'s raw assets into `public/`.
