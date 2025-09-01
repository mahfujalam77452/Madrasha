import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/Manaratus_Sunna_icon.png.png";
import nav_bar_icon from "../Assets/nav_bar_icon.png";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navbarRef = useRef(null);

  // Function to handle menu item click and set the active item
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsNavbarVisible(false); // Close navbar after clicking a menu item
  };

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  // Handle click outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the navbar is visible and the clicked element is outside the navbar, hide it
      if (isNavbarVisible && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarVisible(false);
      }
    };

    // Add event listener when the navbar is visible
    if (isNavbarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when the component is unmounted or navbar is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarVisible]);

  return (
    <div className="navbar">
      <div className="navbar-up">
        <div className="nav-logo">
          <img src={logo} alt="" className="logo"/>
          <img src={nav_bar_icon} alt="" className="nav-bar-icon" onClick={toggleNavbar}/>
          <div className="nav-name">
            <p className="name">মানারাতুস সুন্নাহ</p>
            <p className="mini-description">একটি বিশ্বস্ত ইসলামিক শিক্ষা প্রতিষ্ঠান</p>
          </div>
        </div>
        <div className="nav-pay">
          <Link to="/fee">
            <button onClick={() => handleMenuItemClick("")}>ফি জমা</button>
          </Link>
          <Link to="/donate">
            <button onClick={() => handleMenuItemClick("")}>দান করুন</button>
          </Link>
        </div>
      </div>
      <div ref={navbarRef} className={`navbar-down ${isNavbarVisible ? 'show' : ''}`}>
        <ul className="nav-menu">
          <li
            className={activeMenuItem === "home" ? "active" : ""}
            onClick={() => handleMenuItemClick("home")}
          >
            <Link to="/">হোম</Link>
          </li>

          <Link to="/daoa">
            <li
              className={activeMenuItem === "shikkhok" ? "active" : ""}
              onClick={() => handleMenuItemClick("shikkhok")}
            >
              দাওয়া
            </li>
          </Link>

          <Link to="/exam/">
            <li
              className={activeMenuItem === "porikkha" ? "active" : ""}
              onClick={() => handleMenuItemClick("porikkha")}
            >
              পরীক্ষা 
            </li>
          </Link>

          <li
            className={activeMenuItem === "vorti" ? "active" : ""}
            onClick={() => handleMenuItemClick("vorti")}
          >
            <Link to="/admission">ভর্তি</Link>
          </li>

          <Link to="/notice">
            <li
              className={activeMenuItem === "notic" ? "active" : ""}
              onClick={() => handleMenuItemClick("notic")}
            >
              নোটিস
            </li>
          </Link>

          <Link to="/gallery">
            <li
              className={activeMenuItem === "gellary" ? "active" : ""}
              onClick={() => handleMenuItemClick("gellary")}
            >
              গ্যালারি
            </li>
          </Link>

          <Link to="/video">
            <li
              className={activeMenuItem === "video" ? "active" : ""}
              onClick={() => handleMenuItemClick("video")}
            >
              ভিডিও
            </li>
          </Link>

          <li
            className={activeMenuItem === "jogajog" ? "active" : ""}
            onClick={() => {
              handleMenuItemClick("jogajog");
              window.location.href = "/#contact-page"; // Use href for redirection
            }}
          >
            <a href="#contact-page">যোগাযোগ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
