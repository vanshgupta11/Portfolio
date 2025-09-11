import React from 'react'

function Navbar() {
  return (
    <div className='border-amber-900 border-4 h-[10vh] text-white flex items-center'>
        <div className='flex gap-10'>
        {["home","about","project","resume"].map((item,index)=>
                   <a key={index} className={`'text-md font-light capitalize' ${index===3 && 'ml-32'}`}>{item}</a>)}
        </div>
                
    </div>
  )
}

export default Navbar