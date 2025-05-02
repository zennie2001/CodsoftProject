import React from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { JobContext } from '../Context/JobContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'



function JobDetails() {
    const {jobId} = useParams();
    const{jobs} = useContext(JobContext)
    const [jobData, seJobData]= useState(false)

    

    const fetchJobData = async()=>{
        jobs.map((item)=>{
            if(item._id === jobId){
                seJobData(item)
                //return null;
            }
        })
    }

    useEffect(()=>{
        fetchJobData()
    },[jobId, jobs])

  return jobData ? (
    <div>
        {/* Employer logo */}
        <div className='relative'>
            <img className='w-full h-[350px] object-cover ' src={assets.jobdetail_img}/>
            <img className='absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24' src={assets.logodemo_img} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border  border-gray-100 rounded-full cursor-pointer ">
                <div className='bg-blue-500 text-white hover:bg-blue-700 text-center py-3 px-6 border-t rounded-t-2xl'>
                    <p className='text-xl font-semibold'>{jobData.company}</p>
                </div>
                <div className='bg-white px-4 py-2 border border-gray-400 rounded-b-2xl text-center'>
                <p>Apply before: {jobData.deadline}</p>
                </div>
            </div>
        </div>


        {/* job Description */}
        
        <div className='mt-10'>
            
            <div className='flex justify-between px-5 border-t border-b py-5'>
                <p className='text-xl font-semibold text-blue-900'>Job Title </p>
                <p className='text-yellow-700'>Views: 204</p>
            </div>

            {/* Basic Job Information */}

            <div className='mt-5 mb-3'>
                <p className='text-xl ml-4 font-bold mb-3'>Basic Job Information</p>
                <hr/>
            </div>

            <div className='md:w-[760px] border-x '>
                <div className='grid sm:grid-cols-[1fr_0.5fr_1fr] md:grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4 '>
                    <p className=''>Job Category</p>
                    <p>:</p>
                    <p>{jobData.jobCategory} </p>
                    
                </div>
                <hr/>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4 '>
                    <p className=''>Job Level</p>
                    <p>:</p>
                    <p>{jobData.jobLevel} </p>
                </div>
                <hr/>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4'>
                    <p className=''>No. of Vacancy/s</p>
                    <p>:</p>
                    <p>{jobData.vacancyNum} </p>
                </div>
                <hr/>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4'>
                    <p className=''>Job Location</p>
                    <p>:</p>
                    <p>{jobData.location} </p>
                </div>
                <hr/>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4'>
                    <p className=''>Offered Salary</p>
                    <p>:</p>
                    <p>{jobData.salary} </p>
                </div>
                <hr/>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4'>
                    <p className=''>Apply Before(Deadline)</p>
                    <p>:</p>
                    <p>{jobData.deadline} </p>
                </div>
                <hr/>
            </div>

            {/* Job Specification */}
            <div className='mt-5 mb-3'>
                <p className='text-xl ml-4 font-bold mb-3'>Job Specification</p>
                <hr/>
            </div>

            <div className='md:w-[760px] border-x border-b '>
                <div className='grid sm:grid-cols-[1fr_0.5fr_1fr] md:grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4 '>
                    <p className=''>Education Level</p>
                    <p>:</p>
                    <p>{jobData.education} </p>
                    
                </div>
                <hr/>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4 '>
                    <p className=''>Experience Requiredl</p>
                    <p>:</p>
                    <p>{jobData.experience} </p>
                </div>
                <hr/>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] items-center my-3 mx-4'>
                    <p className=''>Professional Skill Required</p>
                    <p>:</p>
                    <p>{jobData.skill} </p>
                </div>
              
            </div>

            {/* other specification */}
            <div className='mt-5 mb-3'>
                <p className='text-xl ml-4 font-bold mb-3'>Other Specification</p>
                <hr/>
                <p className='ml-4 font-semibold my-3'>Job Description :</p>
                <p className='ml-4 text-gray-700 mb-6'>{jobData.description}</p>
            </div>

            <div className='flex '>
            <Link to='/jobapplication' ><button className='border px-5 py-2 rounded-lg bg-blue-600 text-white ml-4  '>Apply now</button></Link>
            </div>
        </div>


    </div>
  ) : <div></div>
}

export default JobDetails