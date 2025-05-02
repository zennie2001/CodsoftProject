import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';

function Post() {

    const [formData, setFormData] = useState({
        company:"",
        jobCategory:"",
        jobLevel:"",
        vacancyNum:"",
        location:"",
        salary:"",
        deadline:"",
        education:"",
        experience:"",
        skill:"",
        description:""

    })
    

    const onSubmitHandler =  async (e) =>{
        e.preventDefault();

        try {
    
            const response = await axios.post(backendUrl + "/api/job/post", formData)
            console.log(response.data)
            if(response.data.success){
                toast.success(response.data.message)
               setFormData({
                company:"",
                jobCategory:"",
                jobLevel:"",
                vacancyNum:"",
                location:"",
                salary:"",
                deadline:"",
                education:"",
                experience:"",
                skill:"",
                description:""
               })
                
               
            }else{
                console.log(response.data)
                //toast.error(response.data.message)
        }

        } catch (error) {
           console.log(error.message) 
        }
    }

    let getValue=(e)=>{
        let inputName = e.target.name
        let inputValue = e.target.value
        
        let oldData={...formData}
        
        oldData[inputName] = inputValue
        setFormData(oldData)

      }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
        

        {/* Basic Job Information */}
        <div className='w-full'>
            <p className='mb-2'>Company's Name</p>
            <input onChange={getValue} value={formData.company} name='company' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
        </div>
        <div className='w-full'>
            <p className='mb-2'>Job Category</p>
            <input onChange={getValue} value={formData.jobCategory} name='jobCategory' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
        </div>
        <div className='w-full'>
            <p className='mb-2'>Job Level</p>
            <input onChange={getValue} value={formData.jobLevel} name='jobLevel' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
        </div>
        <div>
            <p className='mb-2'>No. of Vacancy/s</p>
            <input  onChange={getValue} value={formData.vacancyNum} name='vacancyNum' className='w-full px-3 py-2 sm:w-[120px] ' min={1} type='Number' placeholder='1' />
        </div>
        <div className='w-full'>
            <p className='mb-2'>Job Location</p>
            <input  onChange={getValue} value={formData.location} name='location' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
        </div>
        <div>
            <p className='mb-2'>Offered Salary</p>
            <input  onChange={getValue} value={formData.salary} name='salary' className='w-full px-3 py-2 sm:w-[120px] ' type='Number' placeholder='20000' />
        </div>
        <div>
            <p>Apply Before(Deadline)</p>
            <input type="date"    onChange={getValue} value={formData.deadline} name='deadline' className='w-full px-3 py-2 sm:w-[120px] '   placeholder='YYYY-MM-DD'       />
        </div>

        {/* Job Specification */}
        <div className='w-full'>
            <p className='mb-2'>Education Level</p>
            <input  onChange={getValue} value={formData.education} name='education' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
        </div>
        
        <div className='w-full'>
            <p className='mb-2'>Experience</p>
            <input  onChange={getValue} value={formData.experience} name='experience' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
        </div>
        <div className='w-full'>
            <p className='mb-2'>Professional Skills</p>
            <input  onChange={getValue} value={formData.skill} name='skill' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required/>
        </div>

        

        {/* job description */}
        <div className='w-full'>
            <p className='mb-2'>Job Description</p>
            <textarea  onChange={getValue} value={formData.description} name='description' className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' required/>
        </div>

        

       
       
        <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>POST</button>
    </form>
  )
}

export default Post