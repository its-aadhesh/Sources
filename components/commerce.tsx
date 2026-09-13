"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Heart,
  Minus,
  Plus,
  Search,
  Trash2
} from "lucide-react";
import { useStore } from "@/components/store-provider";
import {
  formatMoney,
  getMOQ,
  getProduct,
  getUnitPrice,
  products,
  type Product
} from "@/lib/catalog";

/* ————— Product card ————— */

export function ProductCard({ product }: { product: Product }) {
  const { ready, session, wishlist, toggleWishlist, addToCart } = useStore();
  const role = session?.role ?? null;
  const saved = wishlist.includes(product.id);
  const price = getUnitPrice(product, role);
  const moq = getMOQ(role);

  return (
    <article className="product-card">
      <div className="product-art">
        <Link
          href={`/product/${product.slug}`}
          className="product-art-link"
          aria-label={`Explore ${product.name}`}
        >
          <Image
            src={product.image}
            alt={`${product.name} in ${product.colorName}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="product-img"
          />
        </Link>

        {product.tag && <span className="product-tag">{product.tag}</span>}

        <button
          className={`icon-button save-button ${saved ? "is-saved" : ""}`}
          onClick={() => toggleWishlist(product.id)}
          disabled={!ready}
          aria-label={`${saved ? "Remove" : "Save"} ${product.name} ${
            saved ? "from" : "to"
          } wishlist`}
          aria-pressed={saved}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
        </button>
      </div>

      <div className="product-heading">
        <h3>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <span className="product-price">
          {role === "business" && (
            <s className="compare">{formatMoney(product.pricePaise)}</s>
          )}
          {formatMoney(price)}
        </span>
      </div>

      <p className="product-meta">
        {product.material} <span aria-hidden="true">·</span> {product.colorName}
        {role === "business" && <em className="moq-tag">MOQ {moq}</em>}
      </p>

      <div className="product-bottom">
        <span className={product.stock === 0 ? "stock unavailable" : "stock"}>
          {product.stock === 0
            ? "Currently unavailable"
            : product.stock <= 20
              ? `${product.stock} in stock`
              : product.type}
        </span>

        <button
          className="text-button add-link"
          disabled={!ready || product.stock === 0}
          onClick={() => addToCart(product.id)}
          aria-label={`Add ${product.name} to cart`}
        >
          Add <Plus size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

/* ————— Catalog (shop) ————— */

export function Catalog({
  audience,
  query,
  sort,
  collection
}: {
  audience: string;
  query: string;
  sort: string;
  collection?: string;
}) {
  const { session } = useStore();
  const role = session?.role ?? null;
  const normalized = query.toLowerCase().trim();

  const filtered = useMemo(() => {
    return products
      .filter((product) => {
        const audienceMatch =
          audience === "All" ||
          product.audience.some((item) => item === audience);
        const collectionMatch = !collection || product.collection === collection;
        const searchMatch = [
          product.name,
          product.material,
          product.type,
          product.colorName,
          product.collection
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
        return audienceMatch && collectionMatch && searchMatch;
      })
      .sort((a, b) => {
        if (sort === "price-asc") return a.pricePaise - b.pricePaise || a.id.localeCompare(b.id);
        if (sort === "price-desc") return b.pricePaise - a.pricePaise || a.id.localeCompare(b.id);
        if (sort === "rating")
          return (b.rating ?? 0) - (a.rating ?? 0) || a.id.localeCompare(b.id);
        return a.id.localeCompare(b.id);
      });
  }, [audience, normalized, sort]);

  function hrefFor(value: string) {
    const params = new URLSearchParams();
    if (value !== "All") params.set("audience", value);
    if (query) params.set("q", query);
    if (sort !== "featured") params.set("sort", sort);
    if (collection) params.set("collection", collection);
    return `/shop${params.size ? `?${params.toString()}` : ""}`;
  }

  return (
    <>
      <div className="mode-banner" role="status">
        {role === "business" ? (
          <span>
            <strong>Business workspace</strong> — wholesale pricing (60% off retail),
            minimum order 20 units per frame.
          </span>
        ) : (
          <span>
            <strong>Retail pricing</strong> — individual frames, tax-inclusive prices.
          </span>
        )}
      </div>

      <nav className="category-tabs" aria-label="Shop by audience">
        {["All", "Men", "Women", "Children"].map((item) => (
          <Link
            href={hrefFor(item)}
            key={item}
            className={audience === item ? "active" : ""}
            aria-current={audience === item ? "page" : undefined}
          >
            {item === "All" ? "All frames" : item}
          </Link>
        ))}
      </nav>

      <form action="/shop" method="get" className="catalog-controls">
        {audience !== "All" && <input type="hidden" name="audience" value={audience} />}
        {collection && <input type="hidden" name="collection" value={collection} />}
        <div className="search-field">
          <Search size={18} aria-hidden="true" className="search-icon" />
          <label className="sr-only" htmlFor="catalog-search">
            Search the collection
          </label>
          <input
            key={`search-${query}`}
            id="catalog-search"
            name="q"
            type="search"
            placeholder="Search frames, materials, colours…"
            defaultValue={query}
          />
        </div>
        <div>
          <label htmlFor="catalog-sort">Sort by</label>
          <select key={`sort-${sort}`} id="catalog-sort" name="sort" defaultValue={sort}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
        <button className="button button-primary" type="submit">
          Apply
        </button>
      </form>

      <div className="results-bar">
        <p>{filtered.length} frames in view</p>
        {(query || audience !== "All" || sort !== "featured" || collection) && (
          <Link href="/shop" className="underlined">
            Clear filters
          </Link>
        )}
      </div>

      {filtered.length ? (
        <ProductGrid items={filtered} />
      ) : (
        <EmptyState
          title="No frames match this."
          description="Try another search or clear your filters."
          href="/shop"
          action="Show all frames"
        />
      )}
    </>
  );
}

/* ————— Product detail ————— */

export function ProductDetail({ product }: { product: Product }) {
  const { ready, session, cart, wishlist, toggleWishlist, addToCart } = useStore();
  const role = session?.role ?? null;
  const [quantity, setQuantity] = useState(getMOQ(role));

  const price = getUnitPrice(product, role);
  const moq = getMOQ(role);
  const inCart = cart.find((l) => l.productId === product.id)?.quantity ?? 0;
  const max = Math.min(product.stock, product.limit * 100);
  const remaining = Math.max(0, max - inCart);
  const saved = wishlist.includes(product.id);

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/shop">Collection</Link>
        <span aria-hidden="true">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="detail-layout">
        <div className="detail-art">
          <Image
            src={product.image}
            alt={`${product.name}, ${product.colorName}`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            className="detail-img"
          />
        </div>

        <div className="detail-copy">
          <p className="eyebrow">
            {product.collection} · {product.type}
          </p>
          <h1>{product.name}</h1>

          <div className="detail-price">
            {role === "business" && (
              <s className="compare">{formatMoney(product.pricePaise)}</s>
            )}
            <span>{formatMoney(price)}</span>
            {role === "business" && <em className="moq-tag">MOQ {moq}</em>}
          </div>

          <p className="muted">{product.description}</p>

          <dl className="spec-list">
            <div><dt>Finish</dt><dd>{product.colorName}</dd></div>
            <div><dt>Material</dt><dd>{product.material}</dd></div>
            <div><dt>Lens · bridge · temple</dt><dd>{product.dimensions}</dd></div>
            <div><dt>Availability</dt><dd>{product.stock} in demo stock</dd></div>
          </dl>

          {remaining > 0 ? (
            <div className="detail-quantity">
              <label htmlFor="product-quantity">
                Quantity{role === "business" ? ` (min ${moq})` : ""}
              </label>
              <div className="quantity-control quantity-stepper">
                <button
                  className="icon-button"
                  type="button"
                  disabled={quantity <= moq}
                  onClick={() => setQuantity((q) => Math.max(moq, q - moq))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} aria-hidden="true" />
                </button>
                <input
                  id="product-quantity"
                  inputMode="numeric"
                  value={quantity}
                  min={moq}
                  step={moq}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    if (Number.isInteger(v) && v >= moq) setQuantity(v);
                  }}
                />
                <button
                  className="icon-button"
                  type="button"
                  disabled={quantity + moq > remaining}
                  onClick={() => setQuantity((q) => Math.min(remaining, q + moq))}
                  aria-label="Increase quantity"
                >
                  <Plus size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : (
            <p className="inline-notice">
              {product.stock === 0
                ? "This frame is currently unavailable."
                : "You have reached this frame's order limit."}
            </p>
          )}

          <div className="purchase-actions">
            <button
              className="button button-primary"
              disabled={!ready || remaining === 0}
              onClick={() => addToCart(product.id, quantity)}
            >
              Add to cart <ArrowUpRight size={18} aria-hidden="true" />
            </button>
            <button
              className="button button-secondary"
              disabled={!ready}
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={saved}
            >
              <Heart size={18} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
              {saved ? "Saved" : "Save"}
            </button>
          </div>

          <p className="fine-print">
            Mock product and tax-inclusive demo price. No prescription or clinical
            advice is provided.
            {role === "business" && " Wholesale pricing and minimums are simulated."}
          </p>
        </div>
      </div>
    </>
  );
}

/* ————— Wishlist ————— */

export function WishlistView() {
  const { ready, wishlist } = useStore();
  if (!ready) return <LoadingState />;
  const saved = products.filter((p) => wishlist.includes(p.id));
  return saved.length ? (
    <ProductGrid items={saved} />
  ) : (
    <EmptyState
      title="Saved for a second look."
      description="Your favourite frames will appear here."
      href="/shop"
      action="Explore frames"
    />
  );
}

/* ————— Cart ————— */

export function CartView() {
  const {
    ready,
    session,
    cart,
    subtotal,
    shipping,
    setQuantity,
    removeFromCart,
    clearCart
  } = useStore();
  const role = session?.role ?? null;

  if (!ready) return <LoadingState />;

  if (!cart.length) {
    return (
      <EmptyState
        title="Your selection starts here."
        description="Find a frame you love and make it part of your everyday."
        href="/shop"
        action="Browse the collection"
      />
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-lines">
        {cart.map((line) => {
          const product = getProduct(line.productId);
          if (!product) return null;
          const price = getUnitPrice(product, role);
          const moq = getMOQ(role);
          const max = Math.min(product.stock, product.limit * 100);

          return (
            <article className="cart-line" key={line.productId}>
              <Link
                href={`/product/${product.slug}`}
                className="cart-art"
                aria-label={`View ${product.name}`}
              >
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="150px"
                  className="cart-img"
                />
              </Link>

              <div className="cart-line-copy">
                <Link href={`/product/${product.slug}`}>
                  <h2>{product.name}</h2>
                </Link>
                <p className="muted">
                  {product.colorName}
                  {role === "business" && ` · wholesale · MOQ ${moq}`}
                </p>
                <p>{formatMoney(price)} each</p>

                <div className="quantity-control">
                  <button
                    className="icon-button"
                    disabled={line.quantity <= moq}
                    onClick={() => setQuantity(product.id, line.quantity - moq)}
                    aria-label={`Decrease ${product.name} quantity`}
                  >
                    <Minus size={15} aria-hidden="true" />
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    className="icon-button"
                    disabled={line.quantity + moq > max}
                    onClick={() => setQuantity(product.id, line.quantity + moq)}
                    aria-label={`Increase ${product.name} quantity`}
                  >
                    <Plus size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="cart-line-end">
                <strong>{formatMoney(price * line.quantity)}</strong>
                <button
                  className="icon-button"
                  onClick={() => removeFromCart(product.id)}
                  aria-label={`Remove ${product.name} from cart`}
                >
                  <Trash2 size={18} aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}

        <div className="cart-links">
          <Link href="/shop" className="underlined">
            Continue shopping
          </Link>
          <button className="text-button muted" onClick={clearCart}>
            Clear cart
          </button>
        </div>
      </div>

      <aside className="order-summary" aria-labelledby="summary-title">
        <p className="eyebrow">
          {role === "business" ? "WHOLESALE ORDER" : "YOUR SELECTION"}
        </p>
        <h2 id="summary-title">Order summary.</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>{formatMoney(subtotal)}</span>
        </div>
        <div className="summary-row">
          <span>Estimated shipping</span>
          <span>{shipping === 0 ? "Complimentary" : formatMoney(shipping)}</span>
        </div>
        <div className="summary-row summary-total">
          <span>Estimated total</span>
          <span>{formatMoney(subtotal + shipping)}</span>
        </div>

        <p className="fine-print">
          Demo prices include mock taxes. Shipping is ₹99 below ₹3,000 and free from
          ₹3,000.
        </p>

        <div className="inline-notice">
          Your cart works and is saved locally. Mock checkout arrives in a later
          iteration — no payment is collected in this build.
        </div>
      </aside>
    </div>
  );
}

/* ————— Shared ————— */

export function EmptyState({
  title,
  description,
  href,
  action
}: {
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <div className="empty-state">
      <span className="empty-mark" aria-hidden="true">○—○</span>
      <h2>{title}</h2>
      <p className="muted">{description}</p>
      <Link href={href} className="button button-primary">
        {action} <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="loading-state" role="status">
      Restoring your selection…
    </div>
  );
}
