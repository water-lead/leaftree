import Nav from "../component/Nav.jsx";
import Widescreen from "../assets/WidescreenAU.png";
// Import MobileScreen if needed
import "../App.css";
import { useState } from "react";

function determineSrc(type) {
  switch (type) {
    case "w":
      return Widescreen;
    // Add case for MobileScreen if needed
    default:
      return "";
  }
}

export default function About() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const determineParams = () => {
    if (screenWidth <= 480) {
      return "m";
    } else {
      return "w";
    }
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

