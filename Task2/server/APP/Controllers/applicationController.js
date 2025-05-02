//import { json } from "body-parser";
import applicationModel from "../Models/applicationModel.js";
import {v2 as cloudinary} from 'cloudinary'
import path from 'path'

//function for application posting
const registerApplication = async(req , res)=>{
    try {
        const {jobId, firstName, lastName,email, phone, address, education, experience, skill  } = req.body;
        
        
        
        const applicationData = {
            jobId,
            firstName,
            lastName,
            email,
            phone,
            address, 
            education, 
            experience, 
            skill,
            
        }

        const application = new applicationModel(applicationData)
        await application.save()

        res.json({success: true, message:"Application Sent"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//function for geeting application in employer page
const getApplication = async(req , res)=>{
    try {
        const applications = await applicationModel.find({})
        res.json({success:true, applications}) 
     } catch (error) {
         console.log(error)
         res.json({success:false, message:error.message})
     }
}

export {registerApplication, getApplication}