import React, { useState } from "react";
import "./AddFee.css";
const AddFee = () => {
  const [fee, setFee] = useState({
    section: "",
    session: "",
    department: "",
    forWhich: "",
    fee: "",
  });
  const [status,setStatus] = useState("Add")
  function handleChange(e) {
    const { name, value } = e.target;
    setFee({ ...fee, [name]: value });
  }

  function submitFile(e) {
    e.preventDefault();
    setStatus("Processing..")

    const jwtToken = localStorage.getItem('jwtToken');
    fetch('http://localhost:8080/api/v1/admin/addaddedfee', {
      method: 'POST',
      headers:{'content-type':"application/json",'Authorization': `Bearer ${jwtToken}`},
      body:JSON.stringify(fee)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "AddedFee successfully added") {
          alert("Fee added successfully!");
        } else {
          alert("Failed to add fee: " + data.message);
        }
        setStatus("Add")
      })
      .catch(error => {
        alert("Error uploading fee: " + error.message);
        setStatus("Add")
      });
  }
  return (
    <div className="add-fee">
      <form onSubmit={submitFile}>
        <div className="add-fee-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div className="add-fee-session">
          <p>Session</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="add-fee-department">
          <p>Department</p>
          <input
            type="text"
            onChange={handleChange}
            name="department"
            placeholder="Type here..."
            required
          />
        </div>
        
        <div className="add-fee-forwhich">
          <p>For Which</p>
          <select name="forWhich" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="tution fee">Tution Fee</option>
            <option value="admission fee">Admission Fee</option>
            <option value="exam fee">Exam Fee</option>
          </select>
        </div>
        
        <div className="add-fee-fee">
          <p>Fee</p>
          <input
            type="text"
            onChange={handleChange}
            name="fee"
            placeholder="Taka..."
            required
          />
        </div>

        <div className="add-fee-button">
          <button type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default AddFee;
