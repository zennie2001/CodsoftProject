import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { MdOutlinePlace } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { HiOutlineClock, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { backendUrl } from '../App';
import axios from 'axios'
import {toast} from "react-toastify"
import { Link, NavLink } from 'react-router-dom'

function Jobs() {
  const [jobs, setJobs] = useState([])

   const getJobList = async ()=>{
          try {
              const response = await axios.get(backendUrl +'/api/job/list')
             
              
              if(response.data.success){
                  setJobs(response.data.jobs)
              }else{
                  toast.error(response.data.message)
              }
          } catch (error) {
              console.log(error);
          }
      }

      useEffect(()=>{
        getJobList()
        },[])

  return (
    <div>
         <h2 className='text-2xl font-semibold ml-1 mt-2 mb-5 '>All Vacancies</h2>

          {/* map jobs */}
          {jobs.map((item , index)=>(
           <div key={index} className='flex flex-col mb-8'>
            <div className=' border  pb-4 md:mr-80 '>
                    <div className=' py-4 pb-4 mt-4 flex  items-center sm:gap-6 md:gap-12 pl-5'>
                        <img className='border w-16 sm:w-20 hover:shadow-xl' src={assets.logo_img}  />
                        <div className='flex flex-col text-gray-600'>
                            <p className='text-xl font-bold ' >{item.jobCategory}</p>
                            <p className='font-semibold'>{item.company}</p>
                            <div className='flex items-center gap-2'><MdOutlinePlace />
                            <p> {item.location}</p>
                            </div>
                            <div className='flex items-center gap-2'><IoBulbOutline />
                            <p> {item.skill}</p>
                            </div>
                            
                        </div>
                    

                    </div>
                    <hr/>

                    <div className='flex px-4 pt-3 items-center justify-end'>
                        

                     <Link to={`/application/${item._id}`}> <button className='border px-5 py-2 rounded-lg bg-blue-600 text-white'>Check Applications on this post</button></Link>  
                    </div>

            </div>

           
        
        </div>
          ))}
    </div>
  )
}

export default Jobs