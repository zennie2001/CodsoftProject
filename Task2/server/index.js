import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import userRouter from './APP/Routes/userRoutes.js';
import adminRouter from './APP/Routes/adminRoues.js';
import jobRouter from './APP/Routes/jobRoutes.js';
import applicationRouter from './APP/Routes/applicationRoutes.js';
import connectCloudinary from './Config/cloudinary.js';


let app = express();
let port =  process.env.PORT || 4000
connectCloudinary

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//api endpoints
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/job', jobRouter)
app.use('/api/application', applicationRouter)


app.get('/', (req, res)=>{
    res.send('API is working')
})




mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to MongoDB")
    app.listen(port, ()=>(
        console.log('Server started on PORT :' + port)
    ))
})