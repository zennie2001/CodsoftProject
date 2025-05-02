import express from 'express'
import { getApplication, registerApplication } from '../Controllers/applicationController.js';
import upload from '../Middleware/multer.js';

const applicationRouter = express.Router();

applicationRouter.post('/register', registerApplication)
applicationRouter.get('/all', getApplication)

export default applicationRouter