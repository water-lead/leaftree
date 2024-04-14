// import React from "react"
import '../App.css'
import Logo from '../assets/Logo.gif'
import { Link } from "react-router-dom"

export default function Nav() {
 return (
   <>
    <nav className="menu">
     <li>
        <Link to="/">
           <img src={Logo} alt="Logo" className="logo" />
        </Link>
      </li>
      <div className="menu-items">
        <Link to="/about" className='menu-items-link'>About Us</Link>
        <Link to="/principle" className='menu-items-link'>Our Principles</Link>
      </div>
    </nav>
  </>
 )
}