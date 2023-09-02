import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="images/luminar-trans.png" alt="Logo" />
            </div>
            <button className="burger-button" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <div className={`navbar-items ${isOpen ? 'open' : ''}`}>
            <button className="lead-button" onClick={()=>{setIsOpen(false); window.scrollTo(0,document.body.scrollHeight);}}>להזמנות</button>

                <a href="#privateWorkshops">סדנאות פרטיות</a>
                <a href="#businessWorkshops">סדנאות למגזר העסקי</a>
                <a href="#gallery">גלריה</a>
                <a href="#contact">צור קשר</a>

            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    );
}

export default NavBar;


