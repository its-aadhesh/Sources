"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBag, UserRound } from "lucide-react";
import { useStore } from "@/components/store-provider";

export function Header() {
  const pathname = usePathname();
  const { ready, session, wishlist, cartCount } = useStore();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <Link href="/" className="brand" aria-label="Sri Opticals home">
          <Image
            src="/images/monogram-so.png"
            alt=""
            width={54}
            height={54}
            className="monogram"
          />
          <span className="wordmark">
            SRI<span>OPTICALS</span>
          </span>
        </Link>

        <nav className="header-actions" aria-label="Account and shopping">
          <Link
            href="/account"
            className="icon-button profile-button"
            aria-label={session ? "Manage your account" : "Sign in or create an account"}
          >
            <UserRound size={20} aria-hidden="true" />
            {session && <span className="signed-dot" aria-hidden="true" />}
          </Link>

          <Link
            href="/wishlist"
            className="icon-button"
            aria-label={`Wishlist, ${ready ? wishlist.length : 0} saved frames`}
          >
            <Heart size={20} aria-hidden="true" />
            {ready && wishlist.length > 0 && (
              <span className="count-badge">{wishlist.length}</span>
            )}
          </Link>

          <Link
            href="/cart"
            className="icon-button"
            aria-label={`Cart, ${ready ? cartCount : 0} items`}
          >
            <ShoppingBag size={20} aria-hidden="true" />
            {ready && cartCount > 0 && (
              <span className="count-badge">{cartCount}</span>
            )}
          </Link>
        </nav>
      </header>
    </>
  );
}

const footerColumns = [
  {
    heading: "Shop now",
    links: [
      { label: "Men", href: "/shop?audience=Men" },
      { label: "Women", href: "/shop?audience=Women" },
      { label: "Children", href: "/shop?audience=Children" },
      { label: "Shades", href: "/shop?audience=Shades" },
      { label: "Sportswear", href: "/shop?audience=Sportswear" }
    ]
  },
  {
    heading: "Account",
    links: [{ label: "Manage your account", href: "/account" }]
  },
  {
    heading: "About Sri Opticals",
    links: [
      { label: "About Sri Opticals", href: "/about" },
      { label: "Milestones", href: "/milestones" },
      { label: "Contact us", href: "/contact" }
    ]
  },
  {
    heading: "Find us",
    links: [
      { label: "Facebook", href: "/social/facebook" },
      { label: "Instagram", href: "/social/instagram" },
      { label: "Twitter", href: "/social/twitter" },
      { label: "WhatsApp", href: "/social/whatsapp" }
    ]
  },
  {
    heading: "Help",
    links: [{ label: "FAQs", href: "/faqs" }]
  }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark" aria-label="Sri Opticals home">
            <Image
              src="/images/monogram-so-light.png"
              alt=""
              width={40}
              height={40}
              className="monogram"
            />
            <span>
              SRI<span>OPTICALS</span>
            </span>
          </Link>
          <p>A new perspective. An everyday signature.</p>
        </div>

        <div className="footer-columns">
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2>{col.heading}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <p className="footer-fine">
        Frontend prototype · Mock products and prices · No orders fulfilled · Demo
        accounts only
      </p>
    </footer>
  );
}

export function Feedback() {
  const { notice, storageWarning } = useStore();

  return (
    <>
      {storageWarning && (
        <div className="storage-warning" role="status">
          {storageWarning}
        </div>
      )}
      <div className="toast-region" role="status" aria-live="polite" aria-atomic="true">
        {notice && <div className="toast">{notice}</div>}
      </div>
    </>
  );
}
