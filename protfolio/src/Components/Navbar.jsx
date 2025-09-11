import React from 'react'

function Navbar() {
  return (
    <div className=' h-[10vh] w-full text-white flex items-center justify-between px-10 fixed z-999 backdrop-blur-sm'>
      <div className=' h-[8vh]  bg-red-50 rounded-2xl'><a href=""><img src="/img/vg.png" alt="" className=' h-full '/></a></div>
        <div className='flex gap-16'>
        
                   <a  className=" capitalize font-light font-zentry hover:text-green-300  transition-colors" href='#'>home</a>
                   <a  className=" capitalize font-light font-zentry  hover:text-yellow-300 transition-colors" href='#'>about</a>
                   <a  className=" capitalize font-light font-zentry hover:text-[#9f4bd3be]  transition-colors" href='#'>projects</a>
                   <a  className=" capitalize font-light font-zentry hover:text-yellow-300  transition-colors" href='#'>contact me</a>
        </div>
                
    </div>
  )
}

export default Navbar