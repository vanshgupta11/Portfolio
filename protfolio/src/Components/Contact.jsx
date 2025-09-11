import React from 'react'

function Contact() {
  return (
    <div className='h-screen w-full flex justify-center items-center '>
        <div className='h-full w-[60%]'></div>
        <div className="h-full w-[40%] flex justify-center items-center object-center"> <video src="/videos/rocket.mp4" muted autoPlay loop ></video></div>
    </div>
  )
}

export default Contact