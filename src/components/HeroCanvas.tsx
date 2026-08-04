"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Environment, Float, Sparkles, Image } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef, Suspense } from "react";
import * as THREE from "three";

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#00E5FF" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

function WorkspaceImage() {
  const { viewport } = useThree();
  const scale = Math.min(viewport.width * 0.5, 4);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Image 
        url="/api/assets/workspace.png" 
        transparent 
        scale={[scale * 1.5, scale, 1]} 
        position={[viewport.width > 5 ? 2 : 0, 0, -1]}
      />
      {/* Floating Holographic Ring around the workspace */}
      <mesh position={[viewport.width > 5 ? 2 : 0, -0.5, -1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[scale * 0.7, scale * 0.72, 64]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00E5FF" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#00FFC8" />
        
        <WorkspaceImage />
        <Stars />
        <Sparkles count={200} scale={10} size={3} speed={0.4} opacity={0.6} color="#007BFF" />
        
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
