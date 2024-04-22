import Nav from "../component/Nav.jsx";
import wideScreenSrc from "../assets/WidescreenWHAT.png";
// Import other image sources if needed
import "../App.css";
import { useState } from "react";

function determineSrc(type) {
  return (
    type === "w" ? widescreenSrc :
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
      </div> 
    </>
  );
}
