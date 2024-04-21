// import React from "react"
import '../App.css'
import Logo from '../assets/Logo.gif'
import { Link } from "react-router-dom"
import Menu from '../assets/icons8-menu-64.png'; // Import the menu icon from react-icons/fa
import { MdKeyboardArrowRight } from 'react-icons/md'; // Import the right arrow icon from react-icons/md

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
          <img src="{Menu}" alt="Menu" className="{menu}" /> {/* Use your custom menu icon */}
  </div>
  <div className="menu-items">
        <Link to="/how we invest" className='menu-items-link'>How</Link>
        <Link to="/what we believe" className='menu-items-link'>What</Link>
        <Link to="/who we are" className='menu-items-link'>Who</Link>
        <Link to="/jobs" className='menu-items-link'>Jobs</Link>
  </div>
</div> 
      </div>
    </nav>
  </>
 )
}
