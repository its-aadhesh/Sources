import type { Metadata } from "next";
import { CartView } from "@/components/commerce";

export const metadata: Metadata = { title: "Your cart" };

export default function CartPage() {
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">YOUR CART</p>
        <h1>A considered selection.</h1>
      </header>
      <CartView />
    </div>
  );
}
