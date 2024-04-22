import React from "react";
//import Nav from "../component/Nav.jsx";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function What() {
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#ffffff" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2225%", paddingBottom: 0, overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
            <iframe seamless="seamless" scrolling="no" frameborder="0" title="Canva Embed" loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0, controls: "none" }} src="https://www.canva.com/design/DAGDIlikyuo/OEI5K6nERPRJWRuAocipOw/view?embed" allowFullScreen={false}></iframe>
          </div>
        </div>
        <p>
        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIlikyuo&#x2F;OEI5K6nERPRJWRuAocipOw&#x2F;view?utm_content=DAGDIlikyuo&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
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

export default What;
