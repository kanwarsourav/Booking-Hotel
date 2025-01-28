import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import AllHotels from './Components/Hotel/AllHotels'
import Hotel from './Components/Hotel/Hotel'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/hotels' element={<AllHotels/>}/>
     <Route path='/hotels/:id' element={<Hotel/>}/>
     </Routes>
     </Router>
    </>
  )
}

export default App
