// Navbar.js
import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import LoginPopup from './LoginPopup';


const Navbar = ({ size, setShow }) => {
    const [showLoginPopup, setShowLoginPopup] = useState(false); // State for showing login popup

    const handleLoginClick = () => {
        setShowLoginPopup(true); // Show the login popup 
    };

    const handleCloseLoginPopup = () => {
        setShowLoginPopup(false); // Close the login popup 
    };
    const [darkMode, setDarkMode] = useState(false); // State for dark mode
    const [buttonText, setButtonText] = useState('Switch to Dark Mode'); // State for button text
    useEffect(() => {
        // Apply or remove 'dark-mode' class to the body based on the value of 'darkMode'
        document.body.classList.toggle('dark-mode', darkMode);
        // Update button text based on dark mode state
        setButtonText(darkMode ? 'Light Mode' : 'Dark Mode');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode); // Toggle dark mode state
    };

 


    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={() => setShow(true)}>
                    <img src='./images/logo-black.png' className='mainlogo' />
                </span>

                <div className='mainlinks'>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Men</a>
                        </li>
                        <li>
                            <a>Women</a>
                        </li>
                    </ul>
                </div>


                <input className="searchbar" placeholder="Search by Product or Collection"></input>
                <div>
                <button onClick={toggleDarkMode} className='dm'>Theme</button>



                </div>

                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>

                <button className='log' onClick={handleLoginClick}>Login/SignUp</button>
            </div>


            {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
        </nav>

    );
};

export default Navbar;


