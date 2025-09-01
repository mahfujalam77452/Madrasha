import React, { useState } from "react";
import "./AdmitCard.css";

const AdmitCard = () => {
  const [admit, setAdmit] = useState({
    name: "",
    roll: "",
    section: "",
    session: "",
    department: "",
    examName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAdmit({ ...admit, [name]: value });
  }

  function submitFile(e) {
    e.preventDefault();
    alert(
      `Name :${admit.name}\n Roll : ${admit.roll}\nSection: ${admit.section} \nDepartment: ${admit.department} \nSession: ${admit.session} \nExam Name : ${admit.examName} \n`
    );
  }

  return (
    <div className="admit-card">
      <form onSubmit={submitFile}>
        <div className="admit-card-name">
          <p>Name</p>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="admit-card-roll">
          <p>Roll</p>
          <input
            type="text"
            onChange={handleChange}
            name="roll"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="admit-card-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="admit-card-session">
          <p>Session</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="admit-card-department">
          <p>Department</p>
          <input
            type="text"
            onChange={handleChange}
            name="department"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="admit-card-exam-name">
          <p>Exam Name</p>
          <select name="examName" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="mid-term-exm">Mid Term Exam</option>
            <option value="final-exam">Final Exam</option>
          </select>
        </div>

        <div className="admit-card-button">
          <button type="submit">Find</button>
        </div>
      </form>
    </div>
  );
};

export default AdmitCard;
