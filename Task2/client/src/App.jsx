

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import Login from './pages/Login'
import JobList from './pages/JobList'
import JobDetails from './pages/JobDetails'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import JobApplication from './pages/JobApplication';

function App() {
 

  return (
    <div className="">
      <ToastContainer/>
      <Navbar/>
      <div className="px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw] bg-slate-50">
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/joblist' element={<JobList/>}/>
        <Route path='/job/:jobId' element={<JobDetails/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/jobapplication' element={<JobApplication/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
