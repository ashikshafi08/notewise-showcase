"use client";

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

export function Notebook(props: any) {
  // This is a simplified notebook model for demonstration
  // In a real implementation, you would load a proper GLTF model
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.5} // Rotation intensity
      floatIntensity={0.5} // Float intensity
    >
      <group {...props}>
        {/* Notebook base */}
        <mesh ref={meshRef} castShadow receiveShadow>
          <boxGeometry args={[3, 0.2, 4]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
        
        {/* Notebook screen */}
        <mesh position={[0, 0.2, 0]} castShadow>
          <boxGeometry args={[2.8, 0.1, 3.8]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
        
        {/* Notebook keyboard area */}
        <mesh position={[0, 0.2, 1.8]} castShadow>
          <boxGeometry args={[2.8, 0.05, 0.8]} />
          <meshStandardMaterial color="#d1d5db" />
        </mesh>
      </group>
    </Float>
  );
}
