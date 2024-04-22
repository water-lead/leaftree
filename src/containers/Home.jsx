import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Nav from "../component/Nav.jsx";
import widescreenSrc from "../assets/WidescreenLT.mp4";
import NextScreen from '../assets/icons8-move-right-100.png';
import "../App.css";

function determineSrc(type) {
  return (
    type === "w" ? widescreenSrc :
    type === "t" ? TabletscreenSrc :
    type === "l" ? LaptopscreenSrc : 
    type === "m" ? MobilescreenSrc :
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
    } else if (GetScreenWidth <= 1200) {
      return "w";
    } else if (GetScreenWidth <= 900) {
      return "l";
    } else {
      return "w";
    }
  };

  return (
    <>
      {GetScreenWidth <= 480 && (
        <div id="blur">
          <p>The site can only be viewed in portrait mode. Please tilt your phone</p>
        </div>
      )}
      <video autoPlay muted id="background-video" playsInline>
        <source src={determineSrc(determineParams())} type="video/mp4" />
      </video>

      {/* Toggle menu icon */}
      <button onClick={toggleMenu} className="navigation-arrow">
        <img src={NextScreen} alt="Next" />
      </button>
    </>
  );
}
