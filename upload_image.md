# How to add / replace a product image

This is a step-by-step guide for adding your own product photos to the
SRI OPTICALS website. You don't need to touch any code logic — you only drop an
image into one folder and update **one line** in one file.

---

## 0. Before you start — image requirements

For the cleanest, most uniform look, prepare each photo like this:

| Thing | Recommended |
| --- | --- |
| **Shape** | **Square (1:1)**, e.g. 700×700 px or larger (1000×1000 is ideal) |
| **Format** | `.jpg` (preferred) or `.png` |
| **File size** | **Under ~250 KB** each (smaller loads faster) |
| **Background** | Plain / consistent background so cards look uniform |
| **Subject** | The frame centered, filling most of the square |

> The product cards are already styled to display images **square** (`aspect-ratio: 1 / 1`).
> If you upload a non-square image it will still show, but it will be cropped to
> fit — so a square source photo is best.

**Tip to resize/compress:** any free tool works (e.g. Squoosh.app, TinyPNG.com,
or the Preview/Photos app on your computer). Just export as JPEG at ~1000×1000 px.

---

## 1. Put the image in the right folder

Save your photo inside the project's images folder:

```
public/images/
```

Give it a clear, lowercase, no-spaces name. For example:

```
public/images/product-women-1.jpg
public/images/product-unisex-2.jpg
```

**Rules for the filename:**
- lowercase letters only
- use `-` instead of spaces (never `My Photo.jpg` → use `my-photo.jpg`)
- end with `.jpg` or `.png`

---

## 2. Tell the catalog to use it

Open `lib/catalog.ts` and find the product you want to change. Each product has
an `image:` line, like this:

```ts
{
  id: "SO-006",
  slug: "matte-black-bold",
  name: "Matte Black Bold",
  ...
  image: "/images/product-women-1.jpg",   // <-- change this
  ...
},
```

Change the value inside the quotes to point at your new file. It must start
with `/images/`:

```ts
  image: "/images/my-new-photo.jpg",
```

That's it. Save the file.

---

## 3. Check it in the browser

1. If the site isn't running, start it:
   ```bash
   npm run dev
   ```
2. Open the page where that product appears:
   - Shop page → `http://localhost:3000/shop`
   - A single product → `http://localhost:3000/product/<slug>`
     (the `slug` is the same product's `slug:` value in `lib/catalog.ts`)
3. Confirm the new photo shows on the card **and** on the product detail page.

> The image is used automatically on the **product card**, the **product detail
> page**, and the **cart** — updating the single `image:` line updates all three.

---

## 4. Quick reference

| To change… | Do this |
| --- | --- |
| A **product photo** | Drop file in `public/images/` → edit its `image:` line in `lib/catalog.ts` |
| The **hero** background | Replace `public/images/hero-bg.jpg` (keep the same filename) |
| A **category card** | Replace `public/images/cat-men.jpg` (or `cat-women`, `cat-children`, `cat-shades`, `cat-sportswear`) |
| The **B2B poster** | Replace `public/images/poster.jpg` |

---

## 5. Troubleshooting

- **Image doesn't appear / broken icon** — check the path matches the filename
  exactly (case matters), and that the file is really inside `public/images/`.
- **Image looks stretched or cropped** — use a square source image; the site
  displays product photos square and will crop other shapes.
- **Page loads slowly** — your image is too big; re-export it under ~250 KB.
- **Changed the file but browser still shows the old one** — do a hard refresh
  (Ctrl/Cmd + Shift + R).

---

## 6. The current placeholder situation

As of the latest pass, every product uses one of **10 uniform square images**
(`product-women-1..5.jpg` and `product-unisex-1..5.jpg`) as **placeholders**.
They are real product photos but were reused across multiple products because a
full 1-per-product set isn't available yet.

Use the steps above to replace each placeholder with the correct, unique photo
for that product. Start with the ones most visible on the homepage
(**Bestsellers**) and the shop page.
