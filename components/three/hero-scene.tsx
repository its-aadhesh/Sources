"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import type { Group } from "three";

/**
 * The signature eyewear model (glasses_3d_model.glb) in a scroll-driven stage.
 * Rotation is driven imperatively from a MotionValue so we never trigger React
 * re-renders per frame.
 */
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

function Scene({
  progress,
  reducedMotion,
  onReady
}: {
  progress: MotionValue<number>;
  reducedMotion: boolean;
  onReady: () => void;
}) {
  const group = useRef<Group>(null);

  useFrame(() => {
    const g = group.current;
    if (!g) return;

    const p = reducedMotion ? 0 : progress.get();

    // Front three-quarter at the start → rotate toward the temple as the user
    // scrolls, revealing the hinge and temple detail.
    g.rotation.y = 0.45 + p * 1.05;
    g.rotation.x = -0.08 + p * 0.1;
    g.position.x = 0.05 * p;
    g.position.z = -0.2 * p;
    g.scale.setScalar(11 - 1.3 * p);
  });

  return (
    <>
      {/* Studio lighting: broad key, soft fill, restrained rim */}
      <ambientLight intensity={1.0} />
      <directionalLight position={[6, 7, 7]} intensity={2.2} />
      <directionalLight position={[-6, 3, -3]} intensity={0.7} />
      <directionalLight position={[0, -4, 4]} intensity={0.4} />
      <pointLight position={[0, 3, -2]} intensity={0.5} />

      <group ref={group} position={[0, -0.15, 0]} rotation={[0, 0.45, 0]} scale={11}>
        <Suspense fallback={null}>
          <Model onReady={onReady} />
        </Suspense>
      </group>

      <ContactShadows
        position={[0, -1.9, 0]}
        opacity={0.35}
        scale={13}
        blur={2.6}
        far={4}
        color="#3a2430"
      />
    </>
  );
}

export default function HeroScene({
  progress,
  reducedMotion,
  onReady
}: {
  progress: MotionValue<number>;
  reducedMotion: boolean;
  onReady: () => void;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.3, 4.6], fov: 36 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Scene progress={progress} reducedMotion={reducedMotion} onReady={onReady} />
    </Canvas>
  );
}
