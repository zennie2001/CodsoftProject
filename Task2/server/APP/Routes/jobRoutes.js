import express from 'express'
import { listJob, postJob } from '../Controllers/jobController.js'
import upload from '../Middleware/multer.js';
import 'dotenv/config';
import adminAuth from '../Middleware/adminAuth.js';

const jobRouter = express.Router();

jobRouter.post('/post', postJob)
jobRouter.get('/list', listJob)

export default jobRouter;