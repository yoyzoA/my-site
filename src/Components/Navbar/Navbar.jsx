import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-nobg.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="Logo" className="logo"/>
        <ul className="nav-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Contact">Contact Me</a></li>
            <li>
              <a href="/YorgoAssalCV.pdf" download className='btn'>
                Download CV
              </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar