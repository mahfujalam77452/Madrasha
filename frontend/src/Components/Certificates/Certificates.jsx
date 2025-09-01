import React, { useState } from "react";
import "./Certificates.css";
const Certificates = () => {
  const [certificate, setCertificate] = useState({
    name: "",
    roll: "",
    section: "",
    session: "",
    department: "",
    certificateName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCertificate({ ...certificate, [name]: value });
  }

  function submitFile(e) {
    e.preventDefault();
    alert(
      `Name :${certificate.name}\n Roll : ${certificate.roll}\nSection: ${certificate.section} \nDepartment: ${certificate.department} \nSession: ${certificate.session} \nCertificate Name : ${certificate.certificateName} \n`
    );
  }
  return (
    <div className="certificates">
      <form onSubmit={submitFile}>
        <div className="certificates-name">
          <p>Name</p>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="certificates-roll">
          <p>Roll</p>
          <input
            type="text"
            onChange={handleChange}
            name="roll"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="certificates-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="certificates-session">
          <p>Session</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="certificates-department">
          <p>Department</p>
          <input
            type="text"
            onChange={handleChange}
            name="department"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="certificates-name">
          <p>Certificate Name</p>
          <select name="certificateName" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="certificate one">Certificate one</option>
            <option value="certificate two">Certificate two</option>
          </select>
        </div>

        <div className="certificates-button">
          <button type="submit">Find</button>
        </div>
      </form>
    </div>
  );
};

export default Certificates;
