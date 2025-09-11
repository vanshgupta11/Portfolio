import { useTexture, OrbitControls } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from "three"

function Cylinder() {
  const tex = useTexture("/img/Untitled.png")
  const cyl = useRef(null);

  useFrame((state, delta) => {
    if (cyl.current) cyl.current.rotation.y += delta * 0.5
  })

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 1, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function Skills() {
  return (
    <div className='h-[80vh] w-full flex items-center justify-center bg-gray-100'>

   
    <div className='h-full w-[80%] animate-bounce' >
        <Canvas camera={{ fov: 40}} >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={10} />
      <Cylinder />
      <OrbitControls enableZoom={false} />
    </Canvas>
     </div>
      </div>
  )
   
    
}

export default Skills
