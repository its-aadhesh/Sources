import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail, ProductGrid } from "@/components/commerce";
import { getProductBySlug, products } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product?.name ?? "Frame not found",
    description: product?.description
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.collection === product.collection || p.type === product.type)
    )
    .slice(0, 4);

  return (
    <div className="page-container">
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="related-section">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">ANOTHER PERSPECTIVE</p>
              <h2>A few more to consider.</h2>
            </div>
          </div>
          <ProductGrid items={related} />
        </section>
      )}
    </div>
  );
}
