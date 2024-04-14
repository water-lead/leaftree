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

function Form() {
  const [pageNumber, setPageNumber] = useState(1)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  }
  const Payload = {
    fullName,
    email,
    referral
  }
  const handleSubmit = () => {
    console.log(Payload)
  }
  return (
    <div id="form-container">
      <>
        {
          pageNumber === 1 ? <input type="text" className="form-input" placeholder="Enter your Full Name" value={fullName} onChange={(e) => handleInputChange(e, setFullName)} /> :
          pageNumber === 2 ? <input type="email" className="form-input" placeholder="Enter your Email" value={email} onChange={(e) => handleInputChange(e, setEmail)} /> :
          pageNumber === 3 ? <input type="text" className="form-input" placeholder="How did you hear about LeafTree?" value={referral} onChange={(e) => handleInputChange(e, setReferral)} />
          : ""
        }
        
        <button id="form-btn"
        style={{opacity: 
          pageNumber === 1 && fullName || 
          pageNumber === 2 && validator.isEmail(email) ||
          pageNumber === 3 && referral  ? 1 : 0.5}}
        onClick={() => pageNumber === 3 ? handleSubmit() : setPageNumber(pageNumber + 1)}
        disabled={
          pageNumber === 1 && fullName || 
          pageNumber === 2 && validator.isEmail(email) ||
          pageNumber === 3 && referral ? false : true
        }>{pageNumber === 3 ? 'Request Presentation':'Enter'}</button>
        {/* <button id="form-btn" 
        onClick={()=> window.location.href = "/principle"}
        style={{
           background: "#f9f9f9", border: "1px solid #ccc" , color: "black"
        }}>Go Back</button> */}
    </>
    </div>
  )
}

export default function Principle() {
  const GetScreenWidth = window.innerWidth;

  const determineParams = ()=> {
    if (GetScreenWidth <= 480) {
       return "m"
    } else if (GetScreenWidth <= 768) {
       return "l"
    } else if (GetScreenWidth <= 1200) {
       return "w"
    }  else {
       return "w"
    }
  }

  const [onForm, setonForm] = useState(false)
  return (
    <>
      <Nav />
      {onForm ? <Form /> : 
       <>
       <div id="openBtnCont"  style={{
          bottom: GetScreenWidth >= 1260  && 
          GetScreenWidth <= 1487 === true ?
          "13%" : "8%"
        }}>
      <button id="openBtn" onClick={()=> setonForm(true)}>
        Request Form</button>
      </div>
      <div id="HomescreeVideoContainer">
        <video id="HomescreenVideo" autoPlay muted loop>
            <source src={determineSrc(determineParams())} type="video/mp4" />
        </video>
      </div> 
      </>
    } 
    </>
  )
}
