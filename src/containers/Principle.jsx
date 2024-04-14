import Nav from "../component/Nav.jsx";
import MobileSrc from "../assets/WhatsApp Video 2024-04-11 at 20.45.02 (1).mp4";
import WideSrc from "../assets/WidescreenOP.mp4";
import MinSrc from "../assets/WhatsApp Video 2024-04-11 at 20.45.02 (2).mp4";
import "../App.css";
import { useState } from "react";
import validator from "validator";
import { v4 as uuidv4 } from 'uuid';

function determineSrc(type) {
  return (
    type === "w" ? WideSrc :
    type === "l" ? MinSrc : 
    type === "m" ? MobileSrc :
    ""
  );
}

function Form1({ fullName, setFullName, setFormTo, onSubmit }) {
  const handleInputChange = (e) => {
    setFullName(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Create FormData object from the form
    formData.set("Name", fullName); // Set the correct key for fullName
    onSubmit(formData);
    fullName && setFormTo(2);
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

function Form2({ email, setEmail, setFormTo, onSubmit }) {
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Create FormData object from the form
    formData.set("Email", email); // Set the correct key for email
    validator.isEmail(email) && setFormTo(3);
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

function Form3({ referral, setReferral, setOnsnack, onSubmit }) {
  const handleInputChange = (e) => {
    setReferral(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Create FormData object from the form
    formData.set("SessionID", getSessionID());
    formData.set("Referral", referral); // Set the correct key for referral
    referral && setOnsnack(true);
    setTimeout(() => (window.location.href = "/"), 8000);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input form-input-new"
        placeholder="How did you hear about LeafTree?"
        value={referral}
        onChange={(e) => handleInputChange(e)}
      />
    </form>
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
   )
}

export default function Principle() {
  const GetScreenWidth = window.innerWidth;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [onForm, setOnForm] = useState(false);
  const [formOn, setFormOn] = useState(1);
  const [onSnack, setOnSnack] = useState(false);

  const scriptUrl = "https://script.google.com/macros/s/AKfycbx1-lYJGqjW-sxzj8syRo-E0xknHxQvkyuda6cvKzomAugpTnTcVWr1eupziAyLiKMqrg/exec";

  const determineParams = () => {
    if (GetScreenWidth <= 480) {
      return "m";
    } else if (GetScreenWidth <= 768) {
      return "l";
    } else {
      return "w";
    }
  };

  const handleSubmit = (formData) => {
    fetch(scriptUrl, {
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
  };

  const handleFormSubmit = (formData) => {
    handleSubmit(formData);
    setOnForm(false); // Close the form after submission if needed
  };

  return (
    <>
      <div
        id="openBtnCont"
        style={{
          bottom:
            GetScreenWidth >= 1260 && GetScreenWidth <= 1487 === true
              ? "13%"
              : "8%",
        }}
      >
        {!onForm ? (
          <button
            id="openBtn"
            className="form-input form-input-new"
            onClick={() => setOnForm(true)}
          >
            Request Presentation
          </button>
        ) : (
          <>
            {formOn === 1 ? (
              <Form1
                fullName={fullName}
                setFullName={setFullName}
                setFormTo={setFormOn}
                onSubmit={handleFormSubmit} // Pass handleSubmit to Form1
              />
            ) : formOn === 2 ? (
              <Form2
                email={email}
                setEmail={setEmail}
                setFormTo={setFormOn}
                onSubmit={handleFormSubmit} // Pass handleSubmit to Form2
              />
            ) : formOn === 3 ? (
              <Form3
                referral={referral}
                setReferral={setReferral}
                setOnsnack={setOnSnack}
                onSubmit={handleFormSubmit} // Pass handleSubmit to Form3
              />
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
      <div id="HomescreeVideoContainer">
        <video id="HomescreenVideo" autoPlay muted loop>
          <source src={determineSrc(determineParams())} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
