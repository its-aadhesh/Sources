import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ComingSoon({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="page-container placeholder">
      <header className="page-heading">
        <p className="eyebrow">PAGE COMING SOON</p>
        <h1>{title}</h1>
        <p className="muted">{body}</p>
      </header>
      <div className="inline-notice">
        This page is a placeholder. It will be filled in a later iteration.
      </div>
      <div className="placeholder-actions">
        <Link href="/" className="button button-primary">
          Back to home <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <Link href="/shop" className="text-link">
          Browse frames
        </Link>
      </div>
    </div>
  );
}
