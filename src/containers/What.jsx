import Nav from "../component/Nav.jsx";
import wideSrceen from "../assets/WidescreenOP.png";
// Import other image sources if needed
import "../App.css";
import { useState } from "react";

export default function What() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const determineParams = () => {
    if (screenWidth <= 480) {
      return "m";
    } else if (screenWidth <= 768) {
      return "l";
    } else {
      return "w";
    }
  };

  const determineSrc = (type) => {
    return type === "w" ? wideSrceen : "";
    // Add other sources if needed
  };

  return (
    <>
      <Nav />
      {screenWidth <= 480 && (
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
