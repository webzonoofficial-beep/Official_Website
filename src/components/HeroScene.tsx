import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { Mesh, Group } from 'three';

function AnimatedShapes() {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.1;
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      // Smooth subtle mouse tracking
      group.current.position.x += (state.mouse.x * 0.5 - group.current.position.x) * 0.05;
      group.current.position.y += (state.mouse.y * 0.3 - group.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5} position={[-2, 0, -2]}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#22D3EE" wireframe={true} emissive="#22D3EE" emissiveIntensity={0.5} transparent opacity={0.6} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1} position={[2, 0.5, -1]}>
        <mesh>
          <torusGeometry args={[1, 0.4, 32, 64]} />
          <meshStandardMaterial color="#3B82F6" wireframe={true} emissive="#3B82F6" emissiveIntensity={0.4} transparent opacity={0.5} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.8} position={[0, -1, 1]}>
        <mesh scale={0.5}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#8B5CF6" wireframe={true} emissive="#8B5CF6" emissiveIntensity={0.6} transparent opacity={0.7} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 7], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#22D3EE" intensity={3} />
      <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={2} />
      
      <Stars radius={100} depth={50} count={4000} factor={6} fade speed={1.5} />
      
      <AnimatedShapes />
      
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={2} />
        <ChromaticAberration offset={[0.0015, 0.0015]} />
      </EffectComposer>
    </Canvas>
  );
}
