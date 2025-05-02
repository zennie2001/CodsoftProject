import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    jobId: {type:String , required:true},
    firstName: {type:String , required:true},
    lastName: {type:String , required:true},
    email: {type:String , required:true},
    phone: {type:Number , required:true},
    address: {type:String , required:true},
    education: {type:String , required:true},
    experience: {type:String , required:true},
    skill: {type:String , required:true},
    
    
})

const applicationModel = mongoose.models.application || mongoose.model('application', applicationSchema)

export default applicationModel