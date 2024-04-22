import React from "react";
//import Nav from "../component/Nav.jsx";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function How() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#ffffff" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2225%", paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
            <iframe title="Canva Embed" loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }} src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDIkjEZ8A&#x2F;XpptsF2iV8gpK2GXLkYGfQ&#x2F;view?embed" allowfullscreen={true}></iframe>
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

export default function How() {
  const GetScreenWidth = window.innerWidth;

  const determineParams = () => {
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

  function Form1({ fullName, setFullName, setFormTo }) {
    const handleInputChange = (e) => {
      setFullName(e.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      fullName ? setFormTo(2) : '';
    }
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="form-input form-input-new" 
          placeholder="Enter your Full Name" 
          value={fullName} 
          onChange={(e) => handleInputChange(e)}
        /> 
      </form>
    )
  }
  
  function Form2({ email, setEmail, setFormTo }) {
    const handleInputChange = (e) => {
      setEmail(e.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      validator.isEmail(email) ? setFormTo(3) : '';
    }
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="form-input form-input-new" 
          placeholder="Enter your Email" 
          value={email} 
          onChange={(e) => handleInputChange(e)}
        /> 
      </form>
    )
  }
  
  function Form3({ referral, setReferral, Payload }) {
    const [onSnack, setOnsnack] = useState(false)
    const handleInputChange = (e) => {
      setReferral(e.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('Name', Payload.fullName);
      formData.append('Email', Payload.email);
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
      
      setOnsnack(true);
      setTimeout(() => (window.location.href = "/"), 8000);
    }
    return (
      <>
        { !onSnack ?
          <>    
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="form-input form-input-new" 
                placeholder="How did you hear about LeafTree?" 
                value={referral} 
                onChange={(e) => handleInputChange(e)}
              /> 
            </form>
          </> : 
          <input 
            type="text" 
            id="popup"
            disabled={true}
            style={{color:"white"}}    
            // id={"openBtn"}
            className="form-input form-input-new" 
            placeholder="Your information has been submitted." 
          />
        }
      </>
    )
  }

  const [fullName, setFullName] = useState(''); 
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');
  const Payload = {
    fullName,
    email,
    referral
  }
  
  const [onForm, setonForm] = useState(false)
  const [formOn, setFormOn] = useState(1)

 return (
    <>
      <div id="openBtnCont" style={{
        bottom: GetScreenWidth >= 1260 && GetScreenWidth <= 1487 ? "13%" : "8%"
      }}>
        {!onForm ? (
          <button id="openBtn" className="form-input form-input-new" onClick={() => setonForm(true)}>Request Presentation</button>
        ) : (
          <>
            {formOn === 1 ? (
              <Form1 fullName={fullName} setFullName={setFullName} setFormTo={setFormOn} />
            ) : formOn === 2 ? (
              <Form2 email={email} setEmail={setEmail} setFormTo={setFormOn} />
            ) : formOn === 3 ? (
              <Form3 referral={referral} setReferral={setReferral} Payload={Payload} />
            ) : (
              ""
            )}
          </>
        )}
      </div>
      {GetScreenWidth <= 480 && (
        <div id="blur">
          <p>The site can only be viewed in portrait mode. Please tilt your phone</p>
        </div>
      )}
    </>
  );
}
