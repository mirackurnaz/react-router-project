import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Burger from "./img/burger.png"
import './App.css'
function Navbar() {
  return (
    
    <div className="navbar">
      <div className="main">
        <Link to="/">
        <img src={Burger} alt="" />
        </Link>
        <div className="mainLink">
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">Hakkımızda</NavLink>
          <NavLink to="/contact">İletişim</NavLink>
        </div>
      </div>
    </div>
  
  )
}

export default Navbar