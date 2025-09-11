import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {

  const { scene } = useGLTF("/models/robot_playground.glb"); 
  return <primitive object={scene} scale={2} />;
}

function About() {
  return (
    <div className='h-[100vh] w-full  bg-grey-100 flex'>
            <div className="div w-[50%] bg-grey-1000 flex items-center justify-center mt-20">
                <Canvas className="w-full h-[50vh] object-contain cursor-grab" camera={{fov : 100}}>
                        {/* Lights */}
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                
                        {/* Model */}
                        <Model />
                
                        {/* Orbit controls (mouse hover + drag) */}
                        <OrbitControls enablePan={true} enableZoom={false} autoRotate autoRotateSpeed={4} />
                
                      </Canvas>
            </div>
            <div className="div"></div>
    </div>
  )
}

export default About