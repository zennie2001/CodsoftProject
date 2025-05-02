import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const JobContext = createContext()

const JobContextProvider = (props) =>{
    const [token , setToken]= useState('')
    const [jobs, setJobs] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

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

        useEffect(()=>{
            
            if(!token && localStorage.getItem('token')){
                setToken(localStorage.getItem('token'))
                
            }
        },[])

    const value = {
        backendUrl, token, setToken,
        getJobList, jobs
    }


    return(
        <JobContext.Provider value={value}>
            {props.children}
        </JobContext.Provider>
    )

}

export default JobContextProvider;