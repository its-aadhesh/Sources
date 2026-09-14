import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/hero";
import { ProductGrid } from "@/components/commerce";
import { products } from "@/lib/catalog";

const audiences = [
  { title: "Men", caption: "Bold, precise, everyday.", image: "/images/cat-men.jpg" },
  { title: "Women", caption: "A little expression.", image: "/images/cat-women.jpg" },
  { title: "Children", caption: "Flexible, forgiving frames.", image: "/images/cat-children.jpg" },
  { title: "Shades", caption: "Sun-ready, glare-free.", image: "/images/cat-shades.jpg" },
  { title: "Sportswear", caption: "Built for active days.", image: "/images/cat-sportswear.jpg" }
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const recent = products.filter((p) => p.recent).slice(0, 8);

  return (
    <>
      <Hero />

      {/* ————— Shop by category ————— */}
      <section
        className="category-section"
        id="shop-categories"
        aria-labelledby="cats-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE COLLECTION</p>
            <h2 id="cats-title" tabIndex={-1}>
              Shop by who it&rsquo;s for.
            </h2>
          </div>
          <p className="muted">Everyday frames for every head in the house.</p>
        </div>

        <div className="category-grid category-grid-5">
          {audiences.map((c) => (
            <Link
              key={c.title}
              href={`/shop?audience=${c.title}`}
              className="category-card"
            >
              <div className="category-card-img">
                <Image src={c.image} alt={`${c.title} eyewear collection`} fill sizes="20vw" />
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

      {/* ————— Recently launched ————— */}
      <section className="featured-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">NEW IN</p>
            <h2>Recently launched.</h2>
          </div>
          <Link href="/shop" className="text-link">
            All frames <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <ProductGrid items={recent} />
      </section>
    </>
  );
}
