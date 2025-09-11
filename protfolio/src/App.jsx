import React, { useEffect, useState } from 'react'
import Loader from './Components/Loader'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'


function App() {
const [isloading , setLoading] = useState(true)
useEffect(()=>{
    const fake =()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000)
    }
    fake();
},[])
  return (
    
    <div>{isloading?<Loader/>:(<div>
      <Navbar/>
      <Hero/></div>)}</div>
  )
}

export default App