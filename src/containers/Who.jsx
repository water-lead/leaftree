import React from "react";
import Nav from "../component/Nav.jsx";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Who() {
  return (
    <div>
      <Nav />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#ffffff" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2225%", paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
            <iframe title="Canva Embed" loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIuk7o4o&#x2F;V6fmSz0MEnBW_Lb1S2sJmg&#x2F;view?embed" allowfullscreen={true}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;
