import React, { useContext, useEffect, useState } from 'react'
import { JobContext } from '../Context/JobContext'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { assets } from '../assets/assets'

function JobApplication() {
  
  const {jobId} = useParams();
  const navigate = useNavigate()
 
  const {backendUrl} = useContext(JobContext)

  let [formData, setFormData] = useState({
    jobId:jobId,
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address:'', 
    education:'', 
    experience:'', 
    skill:''
  })

  const onSubmitHandler =  async (e) =>{
    e.preventDefault();
    
    try {
        
        

        const response = await axios.post(backendUrl + "/api/application/register", formData)
        
        if(response.data.success){
            toast.success(response.data.message)
            setFormData({
              firstName:'',
              lastName:'',
              email:'',
              phone:'',
              address:'', 
              education:'', 
              experience:'', 
              skill:''
            })
            
            navigate('/')
            
           
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

    useEffect(()=>{
      console.log(jobId)
    },[])


  
  return (
    <div >
      <h2 className='text-xl font-semibold text-center'>Job Application Form</h2>

      <form onSubmit={onSubmitHandler} className='flex flex-col w-[500px] pt-10 pb-40'>
        <div className='flex flex-col '>
          <div className='flex items-center sm:gap-32 gap-80 mb-3'>
            <div className='flex flex-col gap-1'>
              <label>First Name :</label>
              <input onChange={getValue} value={formData.firstName}  name='firstName' className='border border-gray-400 rounded-sm' type='text' placeholder='Enter Your Name' required />
            </div>
            <div className='flex flex-col gap-1 '>
              <label>Last Name :</label>
              <input onChange={getValue} value={formData.lastName} name='lastName' className='border border-gray-400 rounded-sm' type='text' placeholder='Enter Your Last Name' required />
            </div>
          </div>

          <div >
          <div className='flex flex-col gap-1 mb-3'>
              <label>Email :</label>
              <input onChange={getValue} value={formData.email} name='email' className='border border-gray-400 rounded-sm ' type='text' required />
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label>Phone :</label>
              <input onChange={getValue} value={formData.phone} name='phone' className='border border-gray-400 rounded-sm ' type='text' required />
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label>Address :</label>
              <input onChange={getValue} value={formData.address} name='address' className='border border-gray-400 rounded-sm ' type='text' required />
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label>Education Level :</label>
              <input onChange={getValue} value={formData.education} name='education' className='border border-gray-400 rounded-sm ' type='text'  required/>
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label>Experience :</label>
              <input onChange={getValue} value={formData.experience} name='experience' className='border border-gray-400 rounded-sm ' type='text'  required/>
            </div>
            <div className='flex flex-col gap-1 mb-3 '>
              <label>Your Skills :</label>
              <input onChange={getValue} value={formData.skill} name='skill' className='border border-gray-400 rounded-sm ' type='text' required  />
            </div>
            
           
            

            <div className='flex justify-end'>
            <button type='submit' className=' border px-5 py-2 rounded-lg bg-blue-600 text-white ' >Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default JobApplication