import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {

  const { scene } = useGLTF("/models/robot_playground.glb"); 
  return <primitive object={scene} scale={2} />;
}

function About() {
  return (
    <div className='h-[100vh] w-full -mt-12 bg-grey-100 flex '>
            <div className="div w-[50%] bg-grey-1000 flex items-center justify-center mt-50">
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
            <div className="div  w-[45%] flex items-center justify-center center ">
              
              <p className='text-white font-kode text-[2vw] hover:text-shadow-[2px_2px_25px_rgba(0,0,0,1)]'>Hi, I’m <h1 className='text-blue-500 text-5xl  text-shadow-none '>Vansh Gupta </h1>—a passionate Front-End Developer and an aspiring Full Stack Developer. I enjoy building sleek, user-friendly web experiences using modern technologies while constantly expanding my skills in data science and analytics. My goal is to combine design, code, and data-driven insights to create solutions that are both functional and impactful.</p>
            </div>
    </div>
  )
}

export default About