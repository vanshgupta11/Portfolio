import React, { useEffect, useState } from 'react'
import Loader from './Components/Loader'

function App() {
const [isloading , setLoading] = useState(true)
useEffect(()=>{
    const fake =()=>{
        setTimeout(()=>{
            setLoading(false);
        },4000)
    }
    fake();
},[])
  return (
    <div>{isloading?(<Loader />):(<div>hello</div>)}</div>
  )
}

export default App