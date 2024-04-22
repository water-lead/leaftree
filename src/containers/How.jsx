import React from "react";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function How() {
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
          <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2225%", paddingBottom: 0, overflow: "hidden", borderRadius: "8px", willChange: "transform"}}>
            <iframe title="Canva Embed" loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIkjEZ8A&#x2F;XpptsF2iV8gpK2GXLkYGfQ&#x2F;view?embed" allowfullscreen={false} ></iframe>
          </div>
        </div>
        <p>
         <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIkjEZ8A&#x2F;XpptsF2iV8gpK2GXLkYGfQ&#x2F;view?utm_content=DAGDIkjEZ8A&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
      </p>
      </div>
    </div>
  );
}

export default How;
