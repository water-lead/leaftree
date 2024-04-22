import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../component/Nav.jsx"; // Make sure to import Nav if needed
import widescreenSrc from "../assets/WidescreenLT.mp4";
import NextScreen from '../assets/nextPage.gif';
import "../App.css";

function determineSrc(type) {
  return (
    type === "w" ? widescreenSrc :
    type === "t" ? TabletscreenSrc : // Import TabletscreenSrc if needed
    type === "l" ? LaptopscreenSrc : // Import LaptopscreenSrc if needed
    type === "m" ? MobilescreenSrc : // Import MobilescreenSrc if needed
    ""
  );
}

export default function Home() {
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
      <div id="HomescreenBackgroundContainer">
        <picture>
          <img
            id="HomescreenBackground"
            src={determineSrc(determineParams())}
            alt="Background"
          />
        </picture>
        <button onClick={Link} className="navigation-arrow">
          <Link to="/how we invest" className="navigation-arrow">
            <img src={NextScreen} alt="Next" />
          </Link>
        </button>
      </div>
    </>
  );
}
