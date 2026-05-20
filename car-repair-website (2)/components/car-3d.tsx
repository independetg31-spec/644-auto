"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

function Car() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Car Body - Main */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[2.4, 0.5, 1.1]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Car Body - Hood */}
      <mesh position={[0.9, 0.35, 0]}>
        <boxGeometry args={[0.8, 0.35, 1.05]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Car Body - Trunk */}
      <mesh position={[-0.85, 0.35, 0]}>
        <boxGeometry args={[0.5, 0.35, 1.05]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Cabin/Roof */}
      <mesh position={[-0.1, 0.85, 0]}>
        <boxGeometry args={[1.3, 0.5, 1]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Windshield Front */}
      <mesh position={[0.55, 0.75, 0]} rotation={[0, 0, Math.PI * 0.12]}>
        <boxGeometry args={[0.4, 0.55, 0.95]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
      </mesh>
      
      {/* Windshield Rear */}
      <mesh position={[-0.65, 0.75, 0]} rotation={[0, 0, -Math.PI * 0.1]}>
        <boxGeometry args={[0.35, 0.5, 0.95]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
      </mesh>
      
      {/* Side Windows Left */}
      <mesh position={[-0.1, 0.85, 0.51]}>
        <boxGeometry args={[1.1, 0.35, 0.02]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      
      {/* Side Windows Right */}
      <mesh position={[-0.1, 0.85, -0.51]}>
        <boxGeometry args={[1.1, 0.35, 0.02]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[1.21, 0.4, 0.35]}>
        <boxGeometry args={[0.05, 0.15, 0.25]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[1.21, 0.4, -0.35]}>
        <boxGeometry args={[0.05, 0.15, 0.25]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Taillights */}
      <mesh position={[-1.11, 0.4, 0.4]}>
        <boxGeometry args={[0.05, 0.12, 0.2]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-1.11, 0.4, -0.4]}>
        <boxGeometry args={[0.05, 0.12, 0.2]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Grille */}
      <mesh position={[1.21, 0.35, 0]}>
        <boxGeometry args={[0.05, 0.2, 0.5]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Wheels */}
      {[
        [0.7, 0.15, 0.6],
        [0.7, 0.15, -0.6],
        [-0.7, 0.15, 0.6],
        [-0.7, 0.15, -0.6],
      ].map((pos, index) => (
        <group key={index} position={pos as [number, number, number]}>
          {/* Tire */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.18, 24]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
          </mesh>
          {/* Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.19, 16]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}
      
      {/* Undercarriage */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[2.2, 0.08, 0.9]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
}

export function Car3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [4, 2, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} />
        
        <Car />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
