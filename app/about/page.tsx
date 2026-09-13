import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <div className="page-container about-page">
      <header className="page-heading">
        <p className="eyebrow">ABOUT US</p>
        <h1>A clearer point of view.</h1>
        <p className="muted">
          Sri Opticals brings a considered approach to discovering eyewear: room to
          explore, details you can understand, and a collection that lets your own
          perspective lead.
        </p>
      </header>

      <div className="principle-grid">
        {[
          ["01", "Considered design.", "Shape, finish, and proportion deserve a closer look."],
          ["02", "Everyday choice.", "Different people and different days call for different frames."],
          ["03", "Clear information.", "Product details should help you explore, not make decisions harder."]
        ].map(([n, title, body]) => (
          <article key={n}>
            <p className="eyebrow">{n}</p>
            <h2>{title}</h2>
            <p className="muted">{body}</p>
          </article>
        ))}
      </div>

      <div className="about-bottom">
        <Link href="/shop" className="button button-primary">
          Explore the collection <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <p className="fine-print">
          This is a frontend design prototype. Product details, availability, prices,
          and account interactions are simulated. No physical-store history,
          certifications, or clinical services are claimed.
        </p>
      </div>
    </div>
  );
}
