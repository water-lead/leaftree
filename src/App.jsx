import { Routes, Route } from "react-router-dom"
import Home from "./containers/Home.jsx"
import How from "./containers/How.jsx"
import What from "./containers/What.jsx"
import Who from "./containers/Who.jsx"
import Jobs from "./containers/Jobs.html"

function App() {

  return (
    <>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/how we invest" element={<How />} />
       <Route exact path="/what we believe" element={<What />} />
       <Route exact path="/who we are" element={<Who />} />
       <Route exact path="/jobs" element={<Jobs />} />
      </Routes>
    </>
  )
}

export default App
