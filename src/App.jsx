import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import Professional from './Components/Professional/Professional'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe/ContactMe'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Professional />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default App