import Nav from "../component/Nav.jsx";
import wideScreenSrc from "../assets/WidescreenWHAT.png";
// Import other image sources if needed
import "../App.css";
import { useState } from "react";
import NextScreen from '../assets/icons8-move-right-100.png';

function determineSrc(type) {
  return (
    type === "w" ? wideScreenSrc :
    type === "t" ? TabletscreenSrc :
    type === "l" ? LaptopscreenSrc : 
    type === "m" ? MobilescreenSrc :
    ""
  );
}

export default function What() {
  const GetScreenWidth = window.innerWidth;

  const determineParams = () => {
    if (GetScreenWidth <= 480) {
      return "m";
    } else if (GetScreenWidth <= 768) {
      return "t";
    } else if (GetScreenWidth <= 900) {
      return "l";
    } else if (GetScreenWidth <= 1200) {
      return "w";  
    } else {
      return "w";
    }
  };

  const toggleMenu = () => {
    // Implement toggleMenu function
  };

  return (
    <>
      <Nav />
      {GetScreenWidth <= 480 && (
        <div id="blur">
          <p>The site can only be viewed in portrait mode. Please tilt your phone</p>
        </div>
      )}
      <div id="WhatscreenBackgroundContainer">
        <picture>
          <img
            id="WhatscreenBackground"
            src={determineSrc(determineParams())}
            alt="Background"
          />
        </picture>
        <button onClick={toggleMenu} className="navigation-arrow">
          <Link to="/who we are" className="navigation-arrow">
          <img src={NextScreen} alt="Next" />
        </button>
      </div> 
    </>
  );
}
