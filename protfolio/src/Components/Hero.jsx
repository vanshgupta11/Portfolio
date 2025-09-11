import React from 'react'

function Hero() {
  return (
    <div className='h-[100vh] w-full font-zentry bg-black flex '>
      <div className=' h-[95%] w-[45%] mt-[15vh]   px-10 flex  flex-col'>
        <h1 className='text-[10vw]  text-black z-10 uppercase hover:text-white text-shadow-[2px_2px_25px_rgba(250,0,0,0.8)]'> hey </h1>
        <h1 className='text-[10vw] text-black z-20 uppercase hover:text-white text-shadow-[2px_2px_22px_rgba(0,0,250,0.8)]'> there <span className=' text-shadow-[2px_2px_22px_rgba(0,250,0,0.8)]'>!</span> </h1>
        {/* <div className='h-[20vh] '><img src="/img/hi.gif" alt=""  className='h-full object-top mt-20 ml-20 scale-200 -z-1 '/></div> */}
        
      </div>
      <div className="video-container h-[95%] w-[55%] mt-[10vh]">
          <video src="/videos/landing.mp4" autoPlay muted loop></video>
      </div>
    </div>
  )
}

export default Hero