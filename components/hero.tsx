import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-static" aria-label="Sri Opticals hero">
      {/* Full-bleed hero image — text sits on top of it */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Sri Opticals signature eyewear"
        fill
        priority
        sizes="100vw"
        className="hero-static-bg"
      />

      {/* Scrim for legibility */}
      <div className="hero-static-scrim" aria-hidden="true" />

      <div className="hero-static-inner">
        <p className="hero-eyebrow">SRI OPTICALS</p>
        <h1 className="hero-static-title">
          Distinctive frames.
          <br />
          Considered details.
        </h1>
        <p className="hero-static-sub">
          Eyeglasses, sunglasses, and everyday frames — built to help you see and
          look good.
        </p>

        <div className="hero-static-actions">
          <a href="#shop-categories" className="button button-hero">
            Shop frames <ArrowDown size={17} aria-hidden="true" />
          </a>
          <Link href="/account" className="hero-static-link">
            Business buying <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
