import React from 'react'
import './MobileNav.css'

export const MobileNav = ({ isOpen, toggleMenu }) => {

    const sendEmail = () => {
        window.location.href = 'mailto:rafaasigoli1@gmail.com';
      };

  return (
    <>
        <div 
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
                <img className = "logo" src="" alt="" />

                <ul>
                        <li>
                            <a className= "menu-item" href="#">Home</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#workexperience">Projects</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#contact-me">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={sendEmail}>
                            Hire Me
                        </button>
                    </ul>
            </div>
        </div>
    </>
  )
}
