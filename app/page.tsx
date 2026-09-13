import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/hero";
import { ProductGrid } from "@/components/commerce";
import { collections, products } from "@/lib/catalog";

const audiences = [
  { title: "Men", caption: "Bold, precise, everyday.", image: "/images/navy-hero.png" },
  { title: "Women", caption: "A little expression.", image: "/images/teal-cateye.png" },
  { title: "Children", caption: "Flexible, forgiving frames.", image: "/images/teal-lime-square.png" },
  { title: "Sportswear", caption: "Built for active days.", image: "/images/blue-sport-wrap.png" }
];

const classIcons: Record<string, string> = {
  Ultem: "◆",
  Unbreakable: "●",
  Fiber: "▲",
  Metal: "■",
  Coolers: "◐"
};

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Hero />

      {/* ————— Shop for Men / Women / Children / Sportswear ————— */}
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

        <div className="category-grid category-grid-4">
          {audiences.map((c) => (
            <Link
              key={c.title}
              href={`/shop?audience=${c.title}`}
              className="category-card"
            >
              <div className="category-card-img">
                <Image src={c.image} alt="" fill sizes="25vw" />
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

      {/* ————— Shop by class ————— */}
      <section className="class-section" aria-labelledby="class-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE BY CLASS</p>
            <h2 id="class-title">Pick your material.</h2>
          </div>
        </div>

        <div className="class-grid">
          {collections.map((col) => (
            <Link
              key={col.key}
              href={`/shop?collection=${col.key}`}
              className="class-card"
            >
              <span className="class-mark" aria-hidden="true">
                {classIcons[col.key]}
              </span>
              <div>
                <h3>{col.title}</h3>
                <p>{col.blurb}</p>
              </div>
              <ArrowUpRight size={20} aria-hidden="true" />
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

      {/* ————— Closing ————— */}
      <section className="closing">
        <div>
          <h2>Buying for a store?</h2>
          <p className="muted">
            Browse the same range with wholesale pricing and a 20-unit minimum per
            frame.
          </p>
        </div>
        <Link href="/account" className="button button-light">
          Business account <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
