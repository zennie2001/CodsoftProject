import React from 'react'
import { assets } from '../assets/assets'

function Navbar({setToken}) {
  return (
    <div className='flex items-center justify-between  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-medium bg-blue-100'>
        <img className='w-40' src={assets.logo_img} />
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>LOGOUT</button>
    </div>
  )
}

export default Navbar