import React, { useEffect, useState } from 'react'
import { HiUser, HiMiniPhone, HiOutlineEnvelope,  HiMapPin  } from "react-icons/hi2";
import { backendUrl } from '../App';
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'

function Application() {
    const [application, setApplications] = useState([])
    const {jobId} = useParams();
    
       const getApplicationList = async ()=>{
              try {
                  const response = await axios.get(backendUrl +'/api/application/all')
                 
                  console.log(response.data.applications);
                  console.log(jobId);
                  if(response.data.success){
                
                      setApplications(response.data.applications)
                  }else{
                      toast.error(response.data.message)
                  }
              } catch (error) {
                  console.log(error);
              }
          }

          
    
          useEffect(()=>{
            getApplicationList()
            },[])
  return (
    
    
    <div>
        
        <h2 className='text-xl mb-6'>All Applications</h2>
        {/* mapping function */}
        {application.map((item , index)=>
        jobId === item.jobId ? (
           
        <div key={index} className='border border-gray-400 px-2 py-4 mb-8'>
        <div className='grid  grid-cols-[1fr_1fr_1fr]'>
          <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <HiUser /><p>{item.firstName} {item.lastName}</p>
            </div>
           <div className='flex items-center gap-2'>
           <HiOutlineEnvelope /><p>{item.email}</p>
            </div>
           <div className='flex items-center gap-2'>
           <HiMiniPhone /><p>{item.phone}</p>
            </div>
           <div className='flex items-center gap-2'>
           <HiMapPin /><p>{item.address}</p> 
            </div>
        </div> 

        <div className='flex flex-col gap-1'>
            <div className='flex sm:flex-col md:flex-row'>
                <p className='font-semibold'>Education level : </p>
                <p> {item.education}</p>
            </div>
            <div className='flex sm:flex-col md:flex-row'>
                <p className='font-semibold'>Experience : </p>
                <p> {item.experience}</p>
            </div>
            <div className='flex sm:flex-col md:flex-row'>
                <p className='font-semibold'>Skills : </p>
                <p> {item.skill}</p>
            </div>
           
        </div>

        <div>
            <p>CV:</p>
        </div> 
            
        </div>
        </div> 
        ) : (
        <div>
            <p className='text-gray-600 '></p>
        </div>)
        )}
    </div>
    
  )
}

export default Application