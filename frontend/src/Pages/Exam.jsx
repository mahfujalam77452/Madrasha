import React, { useState } from "react";
import "./CSS/Exam.css";
import { Link, Outlet } from "react-router-dom"; // Import Outlet for rendering nested routes

const Exam = () => {
  
  const [activeItem, setActiveItem] = useState("Admit Card"); // Track the active sidebar item

  return (
    <div className="exam-container">
      <div className="exam-sidebar">
        <ul>
          <li className={activeItem === "Admit Card" ? "active" : ""}>
            <Link to="/exam/" onClick={() => setActiveItem("Admit Card")}>
              Admit Card
            </Link>
          </li>
          <li className={activeItem === "Class Routine" ? "active" : ""}>
            <Link to="/exam/classRoutine" onClick={() => setActiveItem("Class Routine")}>
              Class Routine
            </Link>
          </li>
          <li className={activeItem === "Exam Result" ? "active" : ""}>
            <Link to="/exam/examResult" onClick={() => setActiveItem("Exam Result")}>
              Exam Result
            </Link>
          </li>
          <li className={activeItem === "Exam Routine" ? "active" : ""}>
            <Link to="/exam/examRoutine" onClick={() => setActiveItem("Exam Routine")}>
              Exam Routine
            </Link>
          </li>
          <li className={activeItem === "Certificates" ? "active" : ""}>
            <Link to="/exam/certificates" onClick={() => setActiveItem("Certificates")}>
              Certificates
            </Link>
          </li>
        </ul>
      </div>
      <div className="exam-content">
        {/* This will render the nested route content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Exam;
