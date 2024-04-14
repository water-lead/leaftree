import { Routes, Route } from "react-router-dom"
import Home from "./containers/Home.jsx"
import About from "./containers/About.jsx"
import Principle from "./containers/Principle.jsx"

function App() {

  return (
    <>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/About Us" element={<About />} />
       <Route exact path="/Our Principles" element={<Principle />} />
      </Routes>
    </>
  )
}

export default App
