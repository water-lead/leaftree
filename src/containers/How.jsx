import Nav from "../component/Nav.jsx";
import WideSrc from "../assets/WidescreenHOW.mp4"; // Update the path
// import MinSrc from "../assets/WhatsApp Video 2024-04-11 at 20.45.02 (2).mp4";
import "../App.css";
import { useState } from "react";
import validator from "validator";

function determineSrc(type) {
  return (
    type === "w" ? WideSrc :
    type === "t" ? TabletscreenSrc :
    type === "l" ? LaptopscreenSrc : 
    type === "m" ? MobilescreenSrc :
    ""
  )
}

export default function Home() {
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
      <Nav />
      <div id="openBtnCont" style={{
        bottom: GetScreenWidth >= 1260 && 
        GetScreenWidth <= 1487 === true ?
        "13%" : "8%"
      }}>
        {!onForm ?
          <button id="openBtn" className="form-input form-input-new" onClick={() => setonForm(true)}>Request Presentation</button> :
          <>
            { 
              formOn === 1 ? 
              <Form1 fullName={fullName}    
                setFullName={setFullName} 
                setFormTo={setFormOn} 
              /> :
              formOn === 2 ?
              <Form2 email={email}    
                setEmail={setEmail} 
                setFormTo={setFormOn} 
              /> :
              formOn === 3 ? 
              <Form3 referral={referral}    
                setReferral={setReferral} 
                Payload={Payload}
              /> :
              ""
            }
          </>
        }
      </div>
      {GetScreenWidth <= 480 && <div id="blur">
        <p>The site can only be viewed in portrait mode. Please tilt your phone</p>
      </div>}
      <div id="HomescreenVideoContainer">
        <video id="HomescreenVideo" autoPlay muted loop>
          <source src={determineSrc(determineParams())} type="video/mp4" />
        </video>
      </div> 
    </>
  )
}
