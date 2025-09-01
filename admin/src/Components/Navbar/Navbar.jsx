import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import navlogo from '../../assets/admin_icon.png';

const Navbar = () => {
  const [log,setLog] = useState('Login')
  
  useEffect (
    () => {
      if(localStorage.getItem('jwtToken')){
        setLog('Login')
      }
    }
    ,[localStorage.getItem('jwtToken')]
  )
  return (
    <div className='navbar'>
      <img src={navlogo} alt="Logo" />
      {
        log === "Log out"
        ?
        <Link to="/login" style={{ textDecoration: "none" }}>
        <p>Login</p>
        </Link>
        : <p onClick={() => {localStorage.removeItem('jwtToken'); setLog("Log out")}}>Log out</p>
      }
      
    </div>
  );
};

export default Navbar;
