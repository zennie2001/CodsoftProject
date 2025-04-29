
import './App.css'

import Home from './pages/Home'
import Discoveries from './pages/Discoveries'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/discoveries' element={<Discoveries/>}/>
    </Routes>

   </div>
   
  )
}

export default App
