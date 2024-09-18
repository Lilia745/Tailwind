import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Explore from './Components/Explore/Explore'
import Journal from './Components/Journal/Journal'
import Footer from './Components/Footer/Footer'

const bgImage={
  backgroundImage:`url(https://outdoor-travel.netlify.app/assets/hero-BAVXA6tY.jpg)`,
  backgroundRepeat:"no-reapet",
  backgroundPosition:"bottom",
  backgroundSize:"cover",
  position:"relative",
}

function App() {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
      <Explore/>
      <Journal/>
      <Footer/>
    </div>
  )
}

export default App
