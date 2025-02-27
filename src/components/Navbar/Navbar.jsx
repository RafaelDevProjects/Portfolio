import React, {useState} from "react";
import './Navbar.css'
import { MobileNav } from "../MobileNav/MobileNav";


 const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const sendEmail = () => {
        window.location.href = 'mailto:rafaasigoli1@gmail.com';
      };

    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className = "logo" src="./assets/images/imgportifolio.png" alt="" />

                    <ul>
                        <li>
                            <a className= "menu-item" href="#">Home</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#workexperience">Projetos</a>
                        </li>
                        <li>
                            <a className= "menu-item" href="#contact-me">Me contate</a>
                        </li>

                        <button className="contact-btn" onClick={sendEmail}>
                        Me contrate
                        </button>
                    </ul>

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span class = {"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar