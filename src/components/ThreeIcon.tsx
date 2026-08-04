"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

type IconType = "sphere" | "box" | "torus" | "octahedron" | "icosahedron" | "cylinder" | "cone" | "torusKnot" | "dodecahedron" | "capsule" | "tetrahedron" | "ring";

interface ThreeIconProps {
  type: IconType;
  color?: string;
}

function Geometry({ type, color = "#00E5FF" }: ThreeIconProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case "sphere": return <sphereGeometry args={[1, 32, 32]} />;
      case "box": return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case "torus": return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case "octahedron": return <octahedronGeometry args={[1.2, 0]} />;
      case "icosahedron": return <icosahedronGeometry args={[1.2, 0]} />;
      case "cylinder": return <cylinderGeometry args={[1, 1, 2, 32]} />;
      case "cone": return <coneGeometry args={[1, 2, 32]} />;
      case "torusKnot": return <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />;
      case "dodecahedron": return <dodecahedronGeometry args={[1.2, 0]} />;
      case "capsule": return <capsuleGeometry args={[0.8, 1, 4, 16]} />;
      case "tetrahedron": return <tetrahedronGeometry args={[1.5, 0]} />;
      case "ring": return <ringGeometry args={[0.5, 1.5, 32]} />;
      default: return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        {getGeometry()}
        <meshPhysicalMaterial
          color={color}
          transmission={0.9}
          opacity={1}
          metalness={0.7}
          roughness={0.1}
          ior={1.5}
          thickness={0.5}
          specularIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeIcon({ type, color }: ThreeIconProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full bg-white/5 rounded-full animate-pulse" />;

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} color={color || "#00E5FF"} />
          <directionalLight position={[-5, -5, -5]} intensity={1} color="#ffffff" />
          <Geometry type={type} color={color} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
