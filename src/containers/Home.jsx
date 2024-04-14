// import { useEffect, useState } from "react"
import Nav from "../component/Nav.jsx"
import widescreenSrc from "../assets/WidescreenLT.mp4"
import TabletscreenSrc from "../assets/TabletLT.mp4"
import LaptopscreenSrc from "../assets/LaptopLT.mp4"
import MobilescreenSrc from "../assets/MobileLT.mp4"
import "../App.css"
 
function determineSrc(type) {
 return (
 type === "w" ? widescreenSrc :
 type === "t" ? TabletscreenSrc :
 type === "l" ? LaptopscreenSrc : 
 type = "m" ? MobilescreenSrc :
 ""
 )
}

export default function Home() {
  const GetScreenWidth = window.innerWidth;

  const determineParams = ()=> {
    if (GetScreenWidth <= 480) {
       return "m"
    } else if (GetScreenWidth <= 768) {
       return "t"
    } else if (GetScreenWidth <= 1200) {
       return "w"
    } else if (GetScreenWidth <= 900) {
       return "l"
    } else {
       return "w"
    }
  }
  
  return (
    <>
      <Nav />
      {GetScreenWidth <= 480 && <div id="blur">
        <p>The site can only be viewed in portrait mode. Please tilt your phone</p>
      </div>}
      <video autoPlay muted loop id="background-video" playsInline>
        <source src={determineSrc(determineParams())} type="video/mp4" />
      </video>
    </>
  )
}