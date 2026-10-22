import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import useReducedMotion from '../../hooks/useReducedMotion';
import useMediaQuery from '../../hooks/useMediaQuery';

/* ---------- Primary particle cloud ---------- */
function ParticleCloud({ count, mouse, color }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, [count]);

  useEffect(() => {
    if (ref.current) {
      ref.current.userData.basePositions = positions.slice();
    }
  }, [positions]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.01;

    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.4;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

/* ---------- Secondary cloud (adds depth) ---------- */
function DepthCloud({ count, mouse, color }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.02;
    ref.current.rotation.z += delta * 0.005;
    ref.current.position.x += (mouse.current.x * 0.8 - ref.current.position.x) * 0.03;
    ref.current.position.y += (mouse.current.y * 0.8 - ref.current.position.y) * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

/* ---------- Reads pointer → ref, no re-renders ---------- */
function MouseTracker({ mouse }) {
  useFrame(({ pointer }) => {
    mouse.current.x = pointer.x;
    mouse.current.y = pointer.y;
  });
  return null;
}

/* ---------- Public component ---------- */
export default function FloatingParticles({
  count = 3500,
  className = '',
  primaryColor = '#7dd3fc',
  secondaryColor = '#a78bfa',
  opacity = 1,          // NEW: dim on inner pages
  fixed = true,         // NEW: global fixed layer (Approach A)
}) {
  const mouse = useRef({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Pause rendering when tab is hidden (saves battery)
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handler = () => setIsVisible(!document.hidden);
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, []);

  // Skip 3D entirely if user prefers reduced motion
  if (prefersReduced) return null;

  const finalCount = isMobile ? Math.min(count, 1200) : count;

  return (
    <div
      className={className}
      style={{
        position: fixed ? 'fixed' : 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity,
        transition: 'opacity 0.4s ease',
      }}
      aria-hidden="true"
    >
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <MouseTracker mouse={mouse} />
          <ParticleCloud
            count={finalCount}
            mouse={mouse}
            color={primaryColor}
          />
          <DepthCloud
            count={Math.floor(finalCount / 2)}
            mouse={mouse}
            color={secondaryColor}
          />
        </Canvas>
      )}
    </div>
  );
}