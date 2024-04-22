import React from "react";
import Nav from "../component/Nav.jsx";
// Import other image sources if needed
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function What() {
  return (
    <div>
    <Nav />
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#ffffff" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2225%", paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
          <iframe title="Canva Embed" loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }} src="https://www.canva.com/design/DAGDDCN0PJE/4a8nwJ3HBjQNbM65hXXOEQ/view?embed" allowFullScreen={true}></iframe>
        </div>
      </div>
      <p>
        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIlikyuo&#x2F;OEI5K6nERPRJWRuAocipOw&#x2F;view?utm_content=DAGDIlikyuo&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
      </p>
    </div>
      </div>
  );
}

export default What;
