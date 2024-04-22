import Nav from "../component/Nav.jsx";
import wideScreenSrc from "../assets/WidescreenWHAT.png";
// Import other image sources if needed
import "../App.css";
import { useState } from "react";
import NextScreen from '../assets/nextPage.png';
import { Link } from "react-router-dom";

function determineSrc(type) {
  return (
    type === "w" ? wideScreenSrc :
    type === "t" ? TabletscreenSrc : // Import TabletscreenSrc if needed
    type === "l" ? LaptopscreenSrc : // Import LaptopscreenSrc if needed
    type === "m" ? MobilescreenSrc : // Import MobilescreenSrc if needed
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
        <button onClick={Link} className="navigation-arrow">
          <Link to="/who we are" className="navigation-arrow">
            <img src={NextScreen} alt="Next" />
          </Link>
        </button>
      </div>
    </>
  );
}
