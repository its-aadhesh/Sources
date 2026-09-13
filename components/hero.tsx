"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false
});

function useDesktop3D() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return enabled;
}

export default function Hero() {
  const desktop3D = useDesktop3D();
  const [webgl, setWebgl] = useState(false);
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      setWebgl(
        Boolean(
          window.WebGLRenderingContext &&
            (canvas.getContext("webgl2") || canvas.getContext("webgl"))
        )
      );
    } catch {
      setWebgl(false);
    }
  }, []);

  const show3D = desktop3D && webgl;
  const showPoster = !show3D || !modelReady;

  return (
    <section className="hero-static" aria-label="Sri Opticals signature eyewear">
      {/* poster / fallback */}
      {showPoster && (
        <div className="hero-static-poster">
          <Image
            src="/images/navy-hero.png"
            alt="Deep navy eyewear frame"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
            className="hero-static-poster-img"
          />
        </div>
      )}

      {/* 3D stage (static pose) */}
      {show3D && (
        <div className="hero-static-canvas" aria-hidden={!modelReady}>
          <HeroScene onReady={() => setModelReady(true)} />
        </div>
      )}

      <div className="hero-static-content">
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
      </div>

      <div className="hero-static-actions">
        <a href="#shop-categories" className="button button-light">
          Shop frames <ArrowDown size={17} aria-hidden="true" />
        </a>
        <Link href="/account" className="hero-static-link">
          Business buying <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
