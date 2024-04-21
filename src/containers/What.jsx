import Nav from "../component/Nav.jsx";
import WideSrc from "../assets/WidescreenOP.png";
import "../App.css";
import { useState } from "react";

function determineSrc(type) {
  return (
    type === "w" ? WideSrc :
    type === "l" ? MinSrc : 
    type === "m" ? MobileSrc :
    ""
  );
}

export default function Principle() {
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
