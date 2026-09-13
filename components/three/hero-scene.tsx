"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

function Model({ onReady }: { onReady: () => void }) {
  const gltf = useGLTF("/models/glasses-3d-model.glb");
  const fired = useRef(false);

  useEffect(() => {
    if (!fired.current) {
      fired.current = true;
      onReady();
    }
  }, [onReady]);

  return <primitive object={gltf.scene} />;
}

/**
 * Static studio render of the signature eyewear model. No scroll choreography —
 * a single, carefully lit pose centered in the hero.
 */
export default function HeroScene({ onReady }: { onReady: () => void }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.15, 4.8], fov: 34 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      {/* Broad key + rim lights so the dark frame reads against the blue field */}
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 7, 6]} intensity={2.4} />
      <directionalLight position={[-6, 3, -3]} intensity={1.1} color="#cfe0ff" />
      <directionalLight position={[0, -3, 5]} intensity={0.5} />
      <pointLight position={[0, 4, -4]} intensity={0.6} color="#eaf1ff" />

      <group position={[0, -0.1, 0]} rotation={[0.02, 0.42, -0.02]} scale={13}>
        <Suspense fallback={null}>
          <Model onReady={onReady} />
        </Suspense>
      </group>

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.42}
        scale={15}
        blur={2.8}
        far={4}
        color="#0a1f5c"
      />
    </Canvas>
  );
}
