import React from 'react'
import './MobileNav.css'

export const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
        <div 
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
                <img className = "logo" src="./assets/images/imagemportifolioNavMobile.png" alt="" />

                <ul>
                        <li>
                            <a className= "menu-item" href="#">Home</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#workexperience">Work Experience</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#contact-me">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>
            </div>
        </div>
    </>
  )
}
