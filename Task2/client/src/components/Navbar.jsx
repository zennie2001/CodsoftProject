import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { HiUserPlus, HiMiniUserCircle  } from "react-icons/hi2";

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className=''>
    <div className='flex items-center justify-between  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-medium bg-blue-100'>
      <Link to={'/'}> <img className='w-32' src={assets.logo_img} /></Link>

      <ul className='hidden md:flex gap-5 text-sm text-gray-700 '>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/joblist' className='flex flex-col items-center gap-1 '>
            <p>JOBS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT US</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT US</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center  gap-4 '>
            <div onClick={()=>navigate('/login')} className=' flex  gap-4 items-center border border-gray-600 px-5 py-2 rounded-xl'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer'/>
            <div>
            <h2>JOB SEEKER</h2>
            <p className='text-md font-light'>Upload Resume</p>
            </div>
            </div>

            <div className='flex gap-4 items-center border border-gray-600 px-5 py-2 rounded-xl '>
            <HiUserPlus className='text-3xl' />
            <div>
            <h2>EMPLOYER ZONE </h2>
            <p className='text-md font-light'>Post a Job</p>
            </div>
            </div>
        </div>
        

        
    </div>
    </div>
  )
}

export default Navbar