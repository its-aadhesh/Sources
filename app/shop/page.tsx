import type { Metadata } from "next";
import { Catalog } from "@/components/commerce";

export const metadata: Metadata = { title: "The collection" };

type SearchValues = Record<string, string | string[] | undefined>;

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<SearchValues>;
}) {
  const params = await searchParams;
  const first = (v: string | string[] | undefined) =>
    typeof v === "string" ? v : "";

  const rawAudience = first(params.audience);
  const audience = ["Men", "Women", "Children", "Shades", "Sportswear"].includes(
    rawAudience
  )
    ? rawAudience
    : "All";

  const rawSort = first(params.sort);
  const sort = ["price-asc", "price-desc", "rating"].includes(rawSort)
    ? rawSort
    : "featured";

  const collection = first(params.collection) || undefined;

  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Find your frame.</h1>
        <p className="muted">
          Distinctive shapes, considered finishes, and a perspective of your own.
        </p>
      </header>

      <Catalog
        audience={audience}
        query={first(params.q)}
        sort={sort}
        collection={collection}
      />
    </div>
  );
}
