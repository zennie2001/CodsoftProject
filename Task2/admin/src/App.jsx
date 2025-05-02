import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Post from './pages/Post'
import Application from './pages/Application'
import { ToastContainer } from 'react-toastify';
import Login from './components/Login'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

function App() {
  const [token , setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(()=>{
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
       <ToastContainer/>
       {token === "" ?
       <Login setToken={setToken}/> :
       <>
       <Navbar setToken={setToken}/>
      <hr/>
      <div className='flex w-full'>
      <Sidebar />
      <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600'>
          <Routes>
            <Route path='/post' element={<Post />} />
            <Route path='/application' element={<Application token={token}/>} />
            
          </Routes>
      </div>
      </div>
       </>
      }

      
      

    </div>
  )
}

export default App
