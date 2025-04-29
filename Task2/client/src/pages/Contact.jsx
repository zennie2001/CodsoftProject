import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
      <h2 className='text-xl font-semibold'>Contact Us</h2>

    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} />
      <div className='flex flex-col justify-center items-start gap-6'>
        
        <p className='text-gray-500'>If you have any questions or comments, we would very much like to hear from you. We value your comments, complaints, and suggestions.</p>
        <p className='text-gray-500'>For Further information on our services and the JobsNepal.com system, please use the form below or email : support@findingjobs.com</p>
        <p className='text-gray-500'>You can also call us during business hours in Nepal at: (977-1) 5444444/ 5444445 (Sunday-Friday)</p>
        <p className='font-semibold text-xl text-gray-600' >Careers at Finding Jobs</p>
        <p className='text-gray-500'>Learn more about our teams and job openings</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >Explore Jobs</button>
      </div>

    </div>

  </div>
  )
}

export default Contact
