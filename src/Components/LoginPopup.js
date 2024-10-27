// LoginPopup.js
import React, { useState } from 'react';
import '../styles/loginpopup.css';

const LoginPopup = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Handle form data as needed (e.g., validate inputs, send to server, etc.)
        console.log('Username:', username);
        console.log('Password:', password);

        // Close the login popup
        onClose();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleClose = () => {
        onClose(); // Close the login pop-up when the close button is clicked
    };

    return (
        <div className="loginPopup">
            <div className="loginContent">
                <span className="closeButton" onClick={handleClose}>
                    &times;
                </span>
                <h2>Login</h2>

                <p className='welcome'>Welcome to 1Stop</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                    <br></br>

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
<br></br>

                    <button type="submit" className='login'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
