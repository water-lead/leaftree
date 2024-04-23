import React from "react";
// Import other image sources if needed
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Jobs() {
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
    <div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#ffffff"}}>
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2225%", paddingBottom: 0, overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
          <iframe seamless="seamless" scrolling="no" frameborder="0" title="Canva Embed" loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, controls: "none", border: "none", padding: 0, margin: 0 }} src="https://www.canva.com/design/DAGDDCN0PJE/4a8nwJ3HBjQNbM65hXXOEQ/view?embed" allowFullScreen={false}></iframe>
        </div>
      </div>
      <p>
        <a href="https://www.canva.com/design/DAGDDCN0PJE/4a8nwJ3HBjQNbM65hXXOEQ/view?utm_content=DAGDDCN0PJE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a>
     </p>
      </div>
      {GetScreenWidth <= 1200 && (
        <div id="blur">
          <p>The site can only be viewed in landscape mode. Please tilt your phone</p>
        </div>
      )}
    </div>
  );
}

export default Jobs;
