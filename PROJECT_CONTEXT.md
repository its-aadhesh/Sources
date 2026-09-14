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

## 3. Theme (approved: Ivory & Espresso & Brass)

Defined in `app/globals.css` under `:root`:

| Token | Value | Role |
| --- | --- | --- |
| `--canvas` | `#F6F1E8` | Warm ivory page background |
| `--surface` | `#FFFFFF` | Cards / inputs |
| `--stage` | `#EFE8DB` | Warm product stages |
| `--ink` | `#231A10` | Deep espresso headings & body |
| `--muted` | `#72654F` | Secondary text |
| `--accent` | `#A1763A` | Brass — buttons, links, active states |
| `--accent-hover` | `#855E2B` | Hover / pressed |
| `--accent-soft` | `#F1E7D4` | Brass-tinted surfaces |
| `--line` | `#E6DDCC` | Borders |
| `--dark` | `#1C140C` | Espresso footer / hero background |
| `--dark-2` | `#2A1F12` | Gradient mid-tone |

The hero uses a **full-bleed photograph** (`hero-bg.jpg`) with the headline text
overlaid directly on the photo (a subtle espresso scrim keeps it legible), in
white type with a brass eyebrow. The **footer is dark espresso** with brass
column headings.

**This is the third theme.** History: (1) sage/beige — rejected, (2) pearl/oxblood
— rejected, (3) bold blue — rejected. **Ivory & Espresso & Brass is current. Do
not reintroduce any previous palette.**

**Fonts:** Manrope (display/headings, weight 800) + Inter (body), self-hosted via
`@fontsource-variable/*` (Google Fonts was blocked in this environment — do NOT
revert to `next/font/google`).

---

## 4. Asset decisions (from this repo: `its-aadhesh/Sources`)

### 3D models — REMOVED

Both `.glb` models (`glasses_3d_model.glb`, `cyberpunk_johnny_silverhand_glasses.glb`)
were **deleted from `main` by the user and removed from this build**. The user
explicitly hates the 3D-rendered glasses. **Do NOT reintroduce three.js /
React Three Fiber / any `.glb` rendering.** `three`, `@react-three/fiber`,
`@react-three/drei`, `@types/three`, and `framer-motion` have all been removed
from `package.json`.

The hero is now a **full-bleed static image**: `public/images/hero-bg.jpg` (the
user-supplied `HeroPage on which main text sits .jpg`, 6000×4000 → 1920×1280),
with the hero text overlaid on the photo.

### Product images — `public/images/`

- **Hero:** `hero-bg.jpg` (from `HeroPage on which main text sits .jpg`).
- **Category cards:** `cat-men.jpg`, `cat-women.jpg`, `cat-children.jpg`,
  `cat-shades.jpg`, `cat-sportswear.jpg` — the HD **white-screened** images the
  user added to `main`, normalized to a uniform **4:5 portrait (900×1125)**.
- **Product listings:** 10 uniform **square (1:1)** images, used as placeholders
  across all 31 products:
  - `product-women-1..5.jpg` (from `men power glasses 2/women power glasses/` →
    `women 1, 2, 4, 6, 7`) — used for the **Women** category.
  - `product-unisex-1..5.jpg` (from `men power glasses 2/men sunglasses/` →
    `unisex 2, 3, 6, 7, 8`; identical copies in Children / Sports / Women
    sunglasses folders) — used for **Children**, **Sportswear**, and as
    placeholders for **Men** and **Shades**.
- **Monogram:** `monogram-so.png` (transparent, header) / `monogram-so-light.png`
  (footer) / `monogram-so.jpg` (ivory, for download) — an interlocking "SO" in
  serif with slightly touching letters. Shown in the header (top-left) and
  footer; clicking it goes home.

Product cards, detail art, and cart art are now **square** (`aspect-ratio: 1 / 1`)
to match the square sources.

> ⚠️ **Caveat for the next AI:** this environment has no vision, so image→product
> matching relies on folder structure + filenames. **The current product images
> are placeholders** — the 10 unique square photos were reused across the catalog
> because `men power glasses 2/` does not contain a unique photo for every product
> (there is no men's-eyeglasses set, and only 5 shared images for the 13
> sunglasses). See [`upload_image.md`](./upload_image.md) for how to swap in the
> final per-product photos. Raw sources remain untouched at `men power glasses 2/`
> on `main`.

---

## 5. Current state — what's built vs. pending

### ✅ Built and working (this iteration)

- **Shell:** fixed header (monogram + wordmark = home link → profile / wishlist
  / cart icons), no sidebar, no "Shop collection" text. 5-column footer
  (Shop now / Account / **About Sri Opticals** / **Find us** / Help). "Find us"
  lists Facebook, Instagram, Twitter, WhatsApp, each opening a placeholder
  (`/social/[platform]`). Milestones now lives under "About Sri Opticals".
- **Homepage:** **full-bleed photo hero** (`hero-bg.jpg` with the headline
  overlaid on the photo — no 3D, no scroll animation, no floating spectacle).
  The background is positioned to keep the models toward the right (`object-position:
  82% center`) with a stronger left scrim so the left-aligned headline doesn't
  cover their faces, and the type is a slightly dimmed warm white. On mobile the
  text drops to the bottom so faces stay visible. **Five** category cards (Men /
  Women / Children / **Shades** / **Sportswear**), a **Bestsellers** row, and a
  **"Recently launched"** row (products flagged `recent`). The old "Buying for a
  store?" band + B2B poster were removed.
- **`/account`:** Customer vs Business role cards + optional display-name form +
  signed-in panel (sign out). Choosing a role **auto-scrolls to the name form**
  and focuses its input (no manual scrolling).
- **`/shop`:** audience tabs, search, sort, `collection` filter, **pricing mode
  banner** (retail vs wholesale), URL-state filters.
- **Product detail:** **swipeable image gallery** (arrows + thumbnails on
  desktop, touch-swipe on mobile, driven by each product's `images[]` array),
  price (retail vs wholesale + strikethrough compare-at), a **colour selector**
  with **10 swatches per product** (`colors[]` — each swatch maps to an entry in
  `images[]`, so clicking a colour swaps the photo), full specs (**model number,
  gender, size · bridge · temple, shape, frame type, frame material**), quantity
  stepper (steps by MOQ), add-to-cart, wishlist.
- **Cart & wishlist:** local persistence (`localStorage` key
  `sri-opticals:commerce:v2`), separate customer/business carts, MOQ + stock
  enforcement, shipping rule (₹99 under ₹3,000, free from ₹3,000).
- **31-product catalog** across **5 categories** (Men / Women / Children / Shades
  / Sportswear). Classes are an **audience-aware sub-filter** inside `/shop`:
  - **Men / Women / Children** → Ultem Frames · HMA Frames · Shell Frames · Metal Frames
  - **Shades** → Metal Frames · Punk Glasses (the old "Coolers")
  - **Sportswear** → no class filter (just "All"; sportswear products have
    `collection: null`)
  - **All** → shows all five classes.
  Classes are not a standalone homepage section.
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

---

## 6. Architecture & file map

```
app/
  layout.tsx            root layout + fonts + providers
  globals.css           ALL styling (CSS variables, no Tailwind)
  page.tsx              homepage (Hero + categories + bestsellers + recently launched)
  account/page.tsx      role selection
  shop/page.tsx         catalog (searchParams-driven)
  product/[slug]/page.tsx
  cart/page.tsx
  wishlist/page.tsx
  about | milestones | contact | faqs/page.tsx
  social/[platform]/page.tsx   placeholder pages for Facebook/Instagram/Twitter/WhatsApp
  not-found.tsx
components/
  shell.tsx             Header + Footer + Feedback (toast/storage notice)
  store-provider.tsx    client state + persistence (React Context, not Zustand)
  commerce.tsx          ProductCard, Catalog, ProductDetail, CartView, WishlistView
  account.tsx           role cards + session panel (auto-scrolls to form)
  placeholder.tsx       "coming soon" screen
  hero.tsx              full-bleed photo hero (text overlaid, no 3D, no animation)
lib/
  catalog.ts            products (31), pricing, MOQ, shipping, collections
public/
  images/               hero-bg.jpg + monogram-so.* + cat-*.jpg + 10 square product photos
```

Also at repo root: `upload_image.md` — step-by-step guide for the user to add or
replace product images.

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

Requires **Node 20.9+**. The build currently passes cleanly (43 routes).

---

## 8. Conventions for the next AI

1. **Do not reintroduce** the rejected direction: no sage/beige, pearl/oxblood, or
   blue palette (use the current Ivory/Espresso/Brass); no sidebar; no
   five-chapter slogans; no "Shop collection" text in the header; **and no 3D
   rendering at all** (no `.glb`, no three.js — the hero is a full-bleed photo
   with overlaid text).
2. **Keep prices in paise**, role-aware. Never hardcode retail prices into UI.
3. **Keep the demo honest** — every account/checkout surface must say no real
   account/payment/order exists.
4. **Assets must stay optimized** — do not drop the raw multi-MB images into
   `public/`; normalize + compress them.
5. **Five top categories** (Men/Women/Children/Shades/Sportswear); classes are a
   **sub-filter inside** `/shop` (audience-aware: see §5), not a standalone
   homepage section. New class labels: Ultem Frames / HMA Frames / Shell Frames /
   Metal Frames / Punk Glasses.
6. **Commit on branch `arena/01a09cbf-sources`** and push only to that branch.

> **Note:** `main` on GitHub contains the raw source images (large PNGs). This
> working branch intentionally keeps only the optimized copies under
> `public/images/`. Do not merge `main`'s raw assets into `public/`.
