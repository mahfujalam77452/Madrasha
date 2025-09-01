import React from "react";
import "./FailedDonation.css";

const FailedDonation = () => {
  return (
    <div className="failed-container">
      <div className="failed-box">
        <div className="cross-circle">
          <div className="cross"></div>
        </div>
        <h1>Donation Failed</h1>
        <p>We couldn't process your Donation. Please try again or contact support.</p>
        <button className="failed-button" onClick={() => window.location.href = "/donate"}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default FailedDonation;
