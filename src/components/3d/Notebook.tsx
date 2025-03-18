"use client";

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface NotebookProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  [key: string]: any;
}

export function Notebook(props: NotebookProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={viewport.width < 10 ? [0.6, 0.6, 0.6] : [0.8, 0.8, 0.8]}
    >
      <boxGeometry args={[1.5, 0.2, 2]} />
      <meshStandardMaterial color="#6366f1" />
      
      {/* Pages */}
      <mesh position={[0, 0.11, 0]}>
        <boxGeometry args={[1.4, 0.02, 1.9]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
      
      {/* Cover details */}
      <mesh position={[0, 0.12, 0.8]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 0.3]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      
      {/* Spiral binding */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[0, 0.15, -0.8 + i * 0.2]}>
          <torusGeometry args={[0.05, 0.02, 16, 16, Math.PI]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.8} />
        </mesh>
      ))}
    </mesh>
  );
}
