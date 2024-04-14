import Nav from "../component/Nav.jsx"
import MobileSrc from "../assets/WhatsApp Video 2024-04-11 at 20.45.02 (1).mp4"
import WideSrc from "../assets/WidescreenOP.mp4"
import MinSrc from "../assets/WhatsApp Video 2024-04-11 at 20.45.02 (2).mp4"
import "../App.css"
import { useState } from "react";
import validator from "validator";

function determineSrc(type) {
 return (
 type === "w" ? WideSrc :
 type === "l" ? MinSrc : 
 type = "m" ? MobileSrc :
 ""
 )
}

function Form1({ fullName, setFullName, setFormTo }) {
  const handleInputChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fullName ? setFormTo(2) : "";
  };

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
  );
}

function Form2({ email, setEmail, setFormTo }) {
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validator.isEmail(email) ? setFormTo(3) : "";
  };

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
  );
}

function Form3({ referral, setReferral, Payload, setOnsnack }) {
  const handleInputChange = (e) => {
    setReferral(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    referral ? console.log(Payload) : "";
    setOnsnack(true);
    setTimeout(() => (window.location.href = "/"), 8000);
  };

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
  );
}

export default function Principle() {
 function Submit(e){
  const formEle = document.querySelector("form")
  e.preventDefault()
  console.log("Submitted")
  const formData = new formData(formEle)
  fetch("https://script.google.com/macros/s/AKfycbyPtpfpH3kALRcy7X8mPodlF8EUQZVklkWj-x6cA-29yo7cLEwY5v60DJ_i9OVNJCOAWw/exec", {
    method: "POST",
    body: formData
  })
  const GetScreenWidth = window.innerWidth;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [onForm, setOnForm] = useState(false);
  const [formOn, setFormOn] = useState(1);
  const [onSnack, setOnSnack] = useState(false);

  const Payload = { fullName, email, referral };

  const determineParams = () => {
    if (GetScreenWidth <= 480) {
      return "m";
    } else if (GetScreenWidth <= 768) {
      return "l";
    } else {
      return "w";
    }
  };

  return (
    <>
      <Nav />
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
                scriptUrl={scriptUrl}
              />
            ) : formOn === 2 ? (
              <Form2
                email={email}
                setEmail={setEmail}
                setFormTo={setFormOn}
                scriptUrl={scriptUrl}
              />
            ) : formOn === 3 ? (
              <Form3
                referral={referral}
                setReferral={setReferral}
                Payload={Payload}
                setOnsnack={setOnSnack}
                scriptUrl={scriptUrl}
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
