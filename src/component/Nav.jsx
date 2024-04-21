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
        <Link to="/how we invest" className='menu-items-link'>How</Link>
        <Link to="/what we believe" className='menu-items-link'>What</Link>
        <Link to="/who we are" className='menu-items-link'>Who</Link>
        <Link to="/jobs" className='menu-items-link'>Jobs</Link>
      </div>
    </nav>
  </>
 )
}
