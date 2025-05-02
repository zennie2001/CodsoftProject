import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    company: {type:String , required:true},
    jobCategory: {type:String , required:true},
    jobLevel: {type:String , required:true},
    vacancyNum: {type:Number , required:true},
    location : {type:String , required:true},
    salary: {type:Number , required:true},
    deadline: {type:Date , required:true},
    education: {type:String , required:true},
    experience:{type:String , required:true},
    skill: {type:String , required:true},
    description: {type:String , required:true},
    
    
})

const jobModel = mongoose.models.job || mongoose.model("job", jobSchema)

export default jobModel;