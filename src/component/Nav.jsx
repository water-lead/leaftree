import React, { useState } from 'react';
import '../App.css';
import Logo from '../assets/Logo.gif';
import { Link } from 'react-router-dom';
import MenuIcon from '../assets/icons8-menu-64.png'; // Import the menu icon image

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="menu">
      {/* Logo/Home button */}
      <Link to="/" className="logo-link">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      {/* Menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu" />
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/how we invest" className="menu-items-link">
              How
            </Link>
          </li>
          <li>
            <Link to="/what we believe" className="menu-items-link">
              What
            </Link>
          </li>
          <li>
            <Link to="/who we are" className="menu-items-link">
              Who
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="menu-items-link">
              Jobs
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
