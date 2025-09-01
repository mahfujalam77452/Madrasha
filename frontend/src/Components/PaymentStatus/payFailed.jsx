import React from "react";
import "./Failed.css";

const payFailed = () => {
  return (
    <div className="failed-container">
      <div className="failed-box">
        <div className="cross-circle">
          <div className="cross"></div>
        </div>
        <h1>Payment Failed</h1>
        <p>We couldn't process your payment. Please try again or contact support.</p>
        <button className="failed-button" onClick={() => window.location.href = "/fee"}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default payFailed;
