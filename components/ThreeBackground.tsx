import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const ClayShape = ({ position, color, geometry: Geometry, args, speed = 1 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.5;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Geometry args={args} position={position} ref={meshRef}>
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.4} 
          metalness={0.1} 
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </Geometry>
    </Float>
  );
};

export const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#E89F29" />
        
        {/* Forest Green Ring */}
        <ClayShape position={[-4, 2, -5]} color="#1E4D2B" geometry={Torus} args={[1.5, 0.5, 16, 32]} speed={0.8} />
        {/* Lion Gold Sphere */}
        <ClayShape position={[5, -1, -8]} color="#E89F29" geometry={Sphere} args={[1.5, 32, 32]} speed={1.2} />
        {/* Earthy Brown Sphere */}
        <ClayShape position={[0, -3, -4]} color="#5D4037" geometry={Sphere} args={[0.8, 32, 32]} speed={0.5} />
        
        <Environment preset="park" />
      </Canvas>
    </div>
  );
};