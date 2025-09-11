// App.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  // Example: free model from Google Poly / Sketchfab after export
  const { scene } = useGLTF("/models/robot_playground.glb"); // 👈 put your .glb in public/models
  return <primitive object={scene} scale={2} />;
}

export default function Spline() {
  return (
    <div className="h-screen bg-gray-1000 flex items-center justify-center">
      <Canvas className="w-full h-[100vh]" camera={{ position: [0, 0, 5] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Model */}
        <Model />

        {/* Orbit controls (mouse hover + drag) */}
        <OrbitControls enablePan={true}  autoRotate autoRotateSpeed={10} />

      </Canvas>
    </div>
  );
}
