import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
  return (
    <div className='h-svh w-full bg-cover bg-center'  style={{ backgroundImage: `url(${assets.home_img})` }}>
        <div className='flex items-center flex-col'>
        <h2 className='sm:text-5xl md:text-6xl text-purple-900 font-semibold text-center pt-52'>Find your dream job with us</h2>
        <button onClick={()=>navigate('/joblist')} className='bg-purple-600 text-white border rounded-full py-5 px-10 sm:mt-32 md:mt-28'>Search Here</button>
        </div>
    </div>
  )
}

export default Home