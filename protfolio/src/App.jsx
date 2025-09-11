import React, { useEffect, useState } from 'react'
import Loader from './Components/Loader'
import Hero from './Components/Hero'


function App() {
// const [isloading , setLoading] = useState(true)
// useEffect(()=>{
//     const fake =()=>{
//         setTimeout(()=>{
//             setLoading(false);
//         },4000)
//     }
//     fake();
// },[])
  return (
    
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
    </main>
  )
}

export default App