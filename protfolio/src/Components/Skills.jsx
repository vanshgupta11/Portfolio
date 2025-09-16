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
    <div className=' w-full flex items-center justify-center border-2 border-amber-500 h-[100vh]'>

        <div className="skill_list w-[50%] h-[60vh] border-2 border-amber-500">

        </div>
   
    <div className='h-[60vh] w-[49%] animate-bounce   flex items-center justify-cente' >
        <Canvas camera={{ fov: 25}} >
      <ambientLight intensity={0.5} />
     
      <directionalLight position={[5, 5, 5]} intensity={10} />
      <Cylinder />
      <OrbitControls enableZoom={false} />
    </Canvas>
     </div>
      </div>
  )
   
    
}

export default Skills
