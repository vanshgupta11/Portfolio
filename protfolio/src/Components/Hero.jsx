import React from 'react'

function Hero() {
  return (
    <div className='h-dvh w-full font-zentry bg-black flex '>
      <div className=' h-[95%] w-[45%]'>
        <h1 className='text-[8vw] text-white '>VANSH</h1>
      </div>
      <div className="video-container h-[95%] w-[55%]">
          <video src="/videos/landing.mp4" autoPlay muted loop></video>
      </div>
    </div>
  )
}

export default Hero