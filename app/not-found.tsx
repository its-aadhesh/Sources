import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="page-container empty-state">
      <p className="eyebrow">A SMALL DETOUR</p>
      <h1>Out of view.</h1>
      <p className="muted">We could not find that page or frame.</p>
      <Link href="/shop" className="button button-primary">
        Back to the collection <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </div>
  );
}
