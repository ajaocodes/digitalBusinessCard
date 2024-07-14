import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from "./Components/Main.jsx"
import Info from "./Components/Info.jsx"
import Interests from "./Components/Interests.jsx"
import Footer from "./Components/footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Info/>
    <div className="about-interest">
      <Main/>
      <Interests/>
    </div>
    <Footer/>
    </>
      
  )
}

export default App
