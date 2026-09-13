import type { Metadata } from "next";
import { WishlistView } from "@/components/commerce";

export const metadata: Metadata = { title: "Saved frames" };

export default function WishlistPage() {
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">YOUR WISHLIST</p>
        <h1>A second look.</h1>
      </header>
      <WishlistView />
    </div>
  );
}
