"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktop3D = useDesktop3D();
  const reducedMotion = useReducedMotion();

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const show3D = desktop3D && webgl;
  const showPoster = !show3D || !modelReady;

  // Text chapter opacity / movement
  const chapterOneOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const chapterOneY = useTransform(scrollYProgress, [0, 0.28], [0, -40]);
  const chapterTwoOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.72, 0.82],
    [0, 1, 1, 0]
  );
  const chapterThreeOpacity = useTransform(scrollYProgress, [0.82, 1], [0, 1]);
  const chapterThreeY = useTransform(scrollYProgress, [0.82, 1], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="hero-3d"
      aria-label="Sri Opticals signature eyewear"
    >
      <div className="hero-3d-stage">
        {/* ——— Poster / fallback ——— */}
        {showPoster && (
          <div className="hero-poster">
            <Image
              src="/images/navy-hero.png"
              alt="Deep navy acetate eyewear frame"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 60vw"
              className="hero-poster-img"
            />
          </div>
        )}

        {/* ——— 3D stage ——— */}
        {show3D && (
          <div className="hero-canvas" aria-hidden={!modelReady}>
            <HeroScene
              progress={scrollYProgress}
              reducedMotion={reducedMotion}
              onReady={() => setModelReady(true)}
            />
          </div>
        )}

        {/* ——— Copy (DOM, overlapping the product) ——— */}
        <div className="hero-copy-3d">
          <p className="eyebrow">SRI OPTICALS</p>

          <motion.h1
            style={{ opacity: chapterOneOpacity, y: chapterOneY }}
            className="hero-title"
          >
            Distinctive frames.
            <br />
            <span>Considered details.</span>
          </motion.h1>

          <motion.p style={{ opacity: chapterOneOpacity }} className="hero-sub">
            Eyeglasses, sunglasses, and everyday frames — built to help you see
            and look good.
          </motion.p>

          <motion.h2
            style={{ opacity: chapterTwoOpacity }}
            className="hero-chapter"
          >
            Details worth
            <br />a closer look.
          </motion.h2>

          <motion.div
            style={{ opacity: chapterThreeOpacity, y: chapterThreeY }}
            className="hero-chapter hero-chapter-final"
          >
            <h2>Find your frame.</h2>
            <a href="#shop-categories" className="button button-primary">
              Shop frames <ArrowDown size={17} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* ——— Static actions (always visible) ——— */}
        <div className="hero-actions-3d">
          <a href="#shop-categories" className="button button-primary">
            Shop frames <ArrowDown size={17} aria-hidden="true" />
          </a>
          <Link href="/account" className="text-link">
            Business buying <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <ArrowDown size={15} />
        </div>
      </div>
    </section>
  );
}
