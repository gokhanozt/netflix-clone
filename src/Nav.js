import React, { useEffect, useState } from 'react';
import './Nav.scss';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);


    return (
        <div className={`nav  ${show && "nav__black"}`}>
            <img 
                className="nav__logo" 
                src="/images/netflixLogo.png"
                alt="Netflix Logo"
            />
             <img 
                className="nav__avatar" 
                src="/images/avatarIcon.png"
                alt="Avatar Profile Icon"
            />
        </div>
    )
}

export default Nav
