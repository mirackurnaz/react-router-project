import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Navbar from "./Navbar"
function App() {
  

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
