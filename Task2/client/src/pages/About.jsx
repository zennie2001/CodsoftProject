import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <h2 className='text-2xl font-semibold'>About Us</h2>
         
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to FIndingJobs.com, the largest locally focused employment website in the nation! Our mission is to lead the Internet employment industry in Nepal by providing innovative information, superior resume management software and a comprehensive selection of services.</p>
        <p>Welcome to FindingJobs.com, the largest locally focused employment website in the nation! Our mission is to lead the Internet employment industry in Nepal by providing innovative information, superior resume management software and a comprehensive selection of services.</p>
        <p>We offer services to the recruiting and job-seeking community in Nepal. We are the only recruitment service provider with 100% free service to all the jobseekers.</p>        
        <b className='text-gray-800'>Our Mission</b>
        <p>It is our mission to bring the burgeoning Nepalese Internet and computing talent to bear on international Web development.</p>  
   </div>
      </div>

      <div className='text-xl py-4'>
       <h2 className='font-semibold'>Why Choose Us?</h2>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Direct Recuitment</b>
        <p>The purpose of this procedure is to identify the direct recruitment and selection process for employing staffs at your esteemed organization.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Vacancy Announcement</b>
        <p>There is no general format for vacancy announcements: each organization creates and manages announcements independently, so applicants should carefully review each section.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Banner Advertisement</b>
        <p>Online website banner ads provide an instant global reach at relatively low cost. You have the opportunity to capture the attention of potential customer at a lowest cost.</p>        
        </div>


        
      </div>
    </div>
  )
}

export default About