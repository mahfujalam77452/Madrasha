import React from "react";
import "./SuccessDonation.css";

const SuccessDonation = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>
        <h1>Donation Successful!</h1>
        <p>Thank you for your Donation. Your transaction has been successfully completed.</p>
        <button className="success-button" onClick={() => window.location.href = "/"}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessDonation;
