import React from 'react'
import { assets } from '../assets/assets'
import { MdOutlinePlace } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { HiOutlineClock, HiOutlineMagnifyingGlass } from "react-icons/hi2";

function JobList() {
  return (
    <div className=''>

        <div className='border-t border-b bg-gray-50 text-center'>
                <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
                    <input   className='flex-1 outline-none bg-inherit text-sm ' type='text' placeholder='Enter Job Title'/>
                    <HiOutlineMagnifyingGlass />

                </div>
                

        </div>



        <h2 className='text-2xl font-semibold ml-1 mt-2 mb-5 '>Top Vacancies</h2>

        <div className='flex flex-col gap-8'>
            <div className=' border  pb-4 md:mr-80 '>
                    <div className=' py-4 pb-4 mt-4 flex  items-center sm:gap-6 md:gap-12 pl-5'>
                        <img className='w-16 sm:w-20 hover:shadow-xl' src={assets.logodemo_img}  />
                        <div className='flex flex-col text-gray-600'>
                            <p className='text-xl font-bold ' >Job Title</p>
                            <p className='font-semibold'>Company Name</p>
                            <div className='flex items-center gap-2'><MdOutlinePlace />
                            <p> Location</p>
                            </div>
                            <div className='flex items-center gap-2'><IoBulbOutline />
                            <p> Skill1, skill2</p>
                            </div>
                            
                        </div>
                    

                    </div>
                    <hr/>

                    <div className='flex px-4 pt-3 items-center justify-between'>
                        <div className='flex items-center gap-2'>
                        <HiOutlineClock />
                        <p>Apply Before: Date </p>
                        </div>

                        <button className='border px-5 py-2 rounded-lg bg-blue-600 text-white'>Apply now</button>
                    </div>

            </div>

            < div className=' border  pb-4 md:mr-80 '>
                        <div className=' py-4 pb-4 mt-4 flex  items-center sm:gap-6 md:gap-12 pl-5'>
                            <img className='w-16 sm:w-20 hover:shadow-xl' src={assets.logodemo_img}  />
                            <div className='flex flex-col text-gray-600'>
                                <p className='text-xl font-bold ' >Job Title</p>
                                <p className='font-semibold'>Company Name</p>
                                <div className='flex items-center gap-2'><MdOutlinePlace />
                                <p> Location</p>
                                </div>
                                <div className='flex items-center gap-2'><IoBulbOutline />
                                <p> Skill1, skill2</p>
                                </div>
                                
                            </div>
                        

                        </div>
                        <hr/>

                        <div className='flex px-4 pt-3 items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <HiOutlineClock />
                            <p>Apply Before: Date </p>
                            </div>

                            <button className='border px-5 py-2 rounded-lg bg-blue-600 text-white'>Apply now</button>
                        </div>

            </div>
        
        </div>

    </div>
  )
}

export default JobList