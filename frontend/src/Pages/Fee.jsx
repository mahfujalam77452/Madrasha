import React, { useState } from 'react'
import './CSS/Fee.css'
const Fee = () => {

  const [fee, setFee] = useState({
    name:"",
    roll:"",
    section: "",
    session: "",
    department: "",
    forWhich: "",
    date:null
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFee({ ...fee, [name]: value });
  }

  function submitFile(e) {
    e.preventDefault();
    fee.date = new Date().toISOString();
    fetch("http://localhost:8080/api/v1/user/payment",
      {
        method:"POST",
        headers:{'content-type':"application/json"},
        body:JSON.stringify(fee)
      }
    ).then((res) => res.json())
     .then((result) => {
      if(result.url)window.location.replace(result.url)
      else alert(`${result.message}`) 
      
     })
    //alert(`Name :${fee.name}\n Roll : ${fee.roll}\nSection: ${fee.section} \nDepartment: ${fee.department} \nSession: ${fee.session} \nFor Which : ${fee.forWhich} \n`);
  }
  return (
    <div className='fee'>
      

      <div className="fee-container">

    
      <form onSubmit={submitFile}>

      <div className="fee-name">
          <p>Name</p>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="fee-roll">
          <p>Roll</p>
          <input
            type="text"
            onChange={handleChange}
            name="roll"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="fee-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div className="fee-session">
          <p>Session</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="fee-department">
          <p>Department</p>
          <input
            type="text"
            onChange={handleChange}
            name="department"
            placeholder="Type here..."
            required
          />
        </div>
        
        <div className="fee-forwhich">
          <p>For Which</p>
          <select name="forWhich" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="tution fee">Tution Fee</option>
            <option value="admission fee">Admission Fee</option>
            <option value="exam fee">Exam Fee</option>
          </select>
        </div>
        

        <div className="add-fee-button">
          <button type="submit">Next</button>
        </div>
      </form>
      </div>
      </div>
   
  )
}

export default Fee
