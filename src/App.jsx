import { useState } from 'react'
import { Navbar, AboutMe, Contact, Hero, Projects, Techstack } from './components'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Techstack/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
