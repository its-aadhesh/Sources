import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/hero";
import { ProductGrid } from "@/components/commerce";
import { collections, products, productsByCollection } from "@/lib/catalog";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Hero />

      {/* ————— Shop for Men / Women / Children ————— */}
      <section
        className="category-section"
        id="shop-categories"
        aria-labelledby="cats-title"
      >
        <div className="section-heading">
          <h2 id="cats-title" tabIndex={-1}>
            Shop by who it&rsquo;s for.
          </h2>
          <p className="muted">Everyday frames for every head in the house.</p>
        </div>

        <div className="category-grid">
          {[
            { title: "Men", caption: "Bold, precise, everyday.", image: "/images/navy-hero.png" },
            { title: "Women", caption: "A little expression.", image: "/images/teal-cateye.png" },
            { title: "Children", caption: "Flexible, forgiving frames.", image: "/images/teal-lime-square.png" }
          ].map((c) => (
            <Link
              key={c.title}
              href={`/shop?audience=${c.title}`}
              className="category-card"
            >
              <div className="category-card-img">
                <Image src={c.image} alt="" fill sizes="33vw" />
              </div>
              <div className="category-card-foot">
                <span>{c.title}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
              <p>{c.caption}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ————— Bestsellers ————— */}
      <section className="featured-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">MOST LOVED THIS SEASON</p>
            <h2>Bestsellers.</h2>
          </div>
          <Link href="/shop" className="text-link">
            All frames <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <ProductGrid items={featured} />
      </section>

      {/* ————— Collection bands ————— */}
      {collections.map((col, i) => {
        const items = productsByCollection(col.key);
        return (
          <section
            key={col.key}
            className={`collection-section ${i % 2 ? "band-alt" : ""}`}
            aria-labelledby={`col-${col.key}`}
          >
            <div className="collection-head">
              <div>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`col-${col.key}`}>{col.title}</h2>
              </div>
              <p className="muted">{col.blurb}</p>
              <Link
                href={`/shop?collection=${col.key}`}
                className="button button-secondary"
              >
                Shop {col.title.split(" ")[0].toLowerCase()}{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <ProductGrid items={items} />
          </section>
        );
      })}

      {/* ————— Closing ————— */}
      <section className="closing">
        <div>
          <h2>Buying for a store?</h2>
          <p className="muted">
            Browse the same range with wholesale pricing and a 20-unit minimum per
            frame.
          </p>
        </div>
        <Link href="/account" className="button button-primary">
          Business account <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
