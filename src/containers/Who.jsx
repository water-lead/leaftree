// import React from "react"
import Nav from "../component/Nav.jsx"
import Widescreen from "../assets/WidescreenAU.png"
//import MobileScreen from "../assets/WhatsApp Video 2024-04-11 at 20.45.02.mp4"
import "../App.css"

function determineSrc(type) {
 return (
 type === "w" ? Widescreen :
 type === "m" ? MobileScreen :
 ""
 )
}

export default function About() {
  const GetScreenWidth = window.innerWidth;

  const determineParams = ()=> {
    if (GetScreenWidth <= 480) {
       return "m"
    } else {
       return "w"
    }
  }

  return (
    <>
      <Nav />
      {GetScreenWidth <= 480 && <div id="blur">
        <p>The site can only be viewed in portrait mode. Please tilt your phone</p>
      </div>
      }
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
