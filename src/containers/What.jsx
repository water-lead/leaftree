import Nav from "../component/Nav.jsx";
//import MobileSrc from "../assets/WhatsApp Video 2024-04-11 at 20.45.02 (1).mp4";
import WideSrc from "../assets/WidescreenOP.png";
//import MinSrc from "../assets/WhatsApp Video 2024-04-11 at 20.45.02 (2).mp4";
import "../App.css";
import { useState } from "react";
import validator from "validator";

function determineSrc(type) {
  return (
    type === "w" ? WideSrc :
    type === "l" ? MinSrc : 
    type === "m" ? MobileSrc :
    ""
  );
}

      {GetScreenWidth <= 480 && <div id="blur">
        <p>The site can only be viewed in portrait mode. Please tilt your phone</p>
      </div>}
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
  )
}
