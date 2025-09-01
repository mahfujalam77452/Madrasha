import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Copyright © 2024 <strong>Manaratus Sunnah
          </strong> - all rights reserved.
        </p>
       
        <div className="footer-links">
          <a href="/terms-and-conditions" className="footer-link">Terms and conditions</a> | 
          <a href="/privacy-policy" className="footer-link"> Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
