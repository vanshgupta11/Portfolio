import React, { useEffect, useState } from 'react'
import Loader from './Components/Loader'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Spline from './Components/Spline';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Chart from './Components/Chart';
import { Swiper } from 'swiper/react';
import Swiping from './Components/swiping';



function App() {
  
const [isloading , setLoading] = useState(true)
useEffect(()=>{
    const fake =()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000)
    }
    fake();
},[])
  return (
    
    <div>{isloading?<Loader/>:(<div>
      <Navbar/>
      <Hero/>
      <About />
      <Chart />
      <Skills />
      <Swiping />
      <Contact />
     
      </div>)}</div>
  )
}

export default App