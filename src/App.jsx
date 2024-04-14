import { Routes, Route } from "react-router-dom"
import Home from "./containers/Home.jsx"
import About from "./containers/About.jsx"
import Principle from "./containers/Principle.jsx"

function App() {

  return (
    <>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about us" element={<About />} />
       <Route exact path="/our principles" element={<Principle />} />
      </Routes>
    </>
  )
}

export default App
