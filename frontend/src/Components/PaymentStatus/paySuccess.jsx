import React from "react";
import "./Success.css";

const successPay = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your payment. Your transaction has been successfully completed.</p>
        <button className="success-button" onClick={() => window.location.href = "/"}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default successPay;
