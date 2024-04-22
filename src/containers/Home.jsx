import React, { useState } from "react";
//import Nav from "../component/Nav.jsx";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
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

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');
  const [onForm, setOnForm] = useState(false);
  const [formOn, setFormOn] = useState(1);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (event, nextForm) => {
    event.preventDefault();
    if (nextForm === 2) {
      if (fullName) {
        setFormOn(2);
      }
    } else if (nextForm === 3) {
      if (email) {
        setFormOn(3);
      }
    } else if (nextForm === 4) {
      if (referral) {
        const formData = new FormData();
        formData.append('Name', fullName);
        formData.append('Email', email);
        formData.append('Referral', referral);
        
        fetch("https://script.google.com/macros/s/AKfycbwjQigVPHC0pSsE3aCZ8DRv-3aPhw9BI4UkspVseVrafwaZmoJ-5RX3YxjBCBZhuw3FVQ/exec", {
          method: "POST",
          body: formData
        })
        .then(response => {
          // Handle success
          console.log("Form data submitted successfully:", response);
        })
        .catch(error => {
          // Handle error
          console.error("Error submitting form data:", error);
        });
        
        setOnForm(true);
        setTimeout(() => (window.location.href = "/"), 8000);
      }
    }
  };

  return (
    <>
      {/* Include Nav here if needed */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#ffffff" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2225%", paddingBottom: 0, overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
            <iframe seamless="seamless" scrolling="no" frameborder="0" title="Canva Embed" loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIsgHjVs&#x2F;qJoLoTwrtzbXwrvXSHtqtQ&#x2F;view?embed" allowfullscreen={false}></iframe>
          </div>
        </div>
        <p>
          <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIsgHjVs&#x2F;qJoLoTwrtzbXwrvXSHtqtQ&#x2F;view?utm_content=DAGDIsgHjVs&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
        </p>
      </div>

      <div id="openBtnCont" style={{ bottom: GetScreenWidth >= 1260 && GetScreenWidth <= 1487 ? "13%" : "8%" }}>
        {!onForm ? (
          <button id="openBtn" className="form-input form-input-new" onClick={() => setOnForm(true)}>Request Presentation</button>
        ) : (
          <>
            {formOn === 1 ? (
              <form onSubmit={(e) => handleSubmit(e, 2)}>
                <input 
                  type="text" 
                  className="form-input form-input-new" 
                  placeholder="Enter your Full Name" 
                  value={fullName} 
                  onChange={(e) => handleInputChange(e, setFullName)}
                />
              </form>
            ) : formOn === 2 ? (
              <form onSubmit={(e) => handleSubmit(e, 3)}>
                <input 
                  type="text" 
                  className="form-input form-input-new" 
                  placeholder="Enter your Email" 
                  value={email} 
                  onChange={(e) => handleInputChange(e, setEmail)}
                />
              </form>
            ) : formOn === 3 ? (
              <form onSubmit={(e) => handleSubmit(e, 4)}>
                <input 
                  type="text" 
                  className="form-input form-input-new" 
                  placeholder="How did you hear about LeafTree?" 
                  value={referral} 
                  onChange={(e) => handleInputChange(e, setReferral)}
                />
              </form>
            ) : (
              <input 
                type="text" 
                id="popup"
                disabled={true}
                style={{color:"white"}}    
                className="form-input form-input-new" 
                placeholder="Your information has been submitted." 
              />
            )}
          </>
        )}
      </div>
      
      {GetScreenWidth <= 1200 && (
        <div id="blur">
          <p>The site can only be viewed in landscape mode. Please tilt your phone</p>
        </div>
      )}
    </>
  );
}

export default Home;
