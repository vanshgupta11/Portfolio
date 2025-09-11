import React from 'react'

function Loader() {
  return (
   <div className="h-screen w-full flex items-center justify-center bg-black">
  <video 
    autoPlay 
    muted 
    loop 
    src="/videos/pre.mp4" 
    className="h-[90%] w-[90%] object-contain"
  />
</div>

  )
}

export default Loader