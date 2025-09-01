import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

import './LogIn.css';

const LogIn = () => {
  const [loginInput, setLoginInput] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!loginInput.username || !loginInput.password) {
      setError('Please fill in both fields.');
    } else {
      setError('');

      fetch('http://localhost:8080/api/v1/admin/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loginInput.username, password: loginInput.password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
           
            localStorage.setItem('jwtToken', data.jwtToken);
            setSuccessMessage('Login successfully!');
            setTimeout(() => {
                window.location.href = '/' // Redirect after showing the message
              }, 2000); // Delay for 2 seconds before redirect
           
          } else {
            alert(data.message);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
      {successMessage && <div className="success-message">{successMessage}</div>}
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginInput.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginInput.password}
            onChange={handleInputChange}
            required
          />
          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button> {/* Corrected button text */}
        </form>
        <Link to={"/changepassword"} style={{ textDecoration: "none" }}>
          <p className='change-password-link'>Change Password</p>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
