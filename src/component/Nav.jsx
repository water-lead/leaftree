import '../App.css';
import Logo from '../assets/Logo.gif';
import { Link } from "react-router-dom";
import MenuIcon from '../assets/icons8-menu-64.png'; // Import the menu icon image
import NextScreen from '../assets/icons8-move-right-100.png'; // Import the right arrow icon image

export default function Nav() {
 return (
   <>
    <nav className="menu">
      <ul className="menu-items">
        <li>
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </li>
        <li>
          <img src={MenuIcon} alt="Menu" className="menu-icon" /> {/* Use your custom menu icon */}
        </li>
        <li>
          <Link to="/how-we-invest" className='menu-items-link'>How</Link>
          <Link to="/what-we-believe" className='menu-items-link'>What</Link>
          <Link to="/who-we-are" className='menu-items-link'>Who</Link>
          <Link to="/jobs" className='menu-items-link'>Jobs</Link>
        </li>
      </ul>
    </nav>
  <>
 );
}
