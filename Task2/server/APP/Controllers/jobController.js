import jobModel from "../Models/jobModel.js";




//function to add job
const postJob = async (req , res)=>{
    try {
       // let imageUrl = ''
        const {company, jobCategory, jobLevel, vacancyNum, location,  salary, deadline, education, experience,  skill, description } = req.body;
        
        

        const jobData = {
            company,
            jobCategory,
            jobLevel,
             vacancyNum: Number(vacancyNum), 
             location,  
             salary: Number(salary), 
             deadline , 
             education, 
             experience,  
             skill, 
             description,
            
        }

        const job = new jobModel(jobData)
        await job.save()

        res.json({success: true, message:"Job Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})  
    }
}

//function for list jobs
const listJob = async(req, res)=>{
    try {
       const jobs = await jobModel.find({})
       res.json({success:true, jobs}) 
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {postJob, listJob}