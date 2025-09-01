import React, { useContext, useState } from "react";
import "./AddStudent.css";
import { DataContext } from "../../Context/DataContext";
const AddStudent = () => {
  const [student, setStudent] = useState({
    section: "",
    name: "",
    rollNumber: "",
    department: "",
    session: "",
    picture: null,
  });
  const {departments} = useContext(DataContext)
const [status,setStatus] = useState("Add")
  function handleChange(e) {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  }

  function handleFileChange(e) {
    setStudent({ ...student, picture: e.target.files[0] });
  }

  function submitFile(e) {
    e.preventDefault();
    setStatus("Processing..")
    const formData = new FormData();
    
    formData.append('section',student.section);
    formData.append('name',student.name);
    formData.append('rollNumber',student.rollNumber);
    formData.append('department',student.department);
    formData.append('session',student.session);
    formData.append('file', student.picture);
    const jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8080/api/v1/admin/addstudent', {
     method: 'POST',
     headers:{'Authorization': `Bearer ${jwtToken}`},
     body: formData,
   })
     .then(response => response.json())
     .then(data => {
       if (data.message === "Student successfully added") {
         alert("Student uploaded successfully!");
       } else {
         alert("Failed to upload Student: " + data.message);
       }
       setStatus("Add")
     })
     .catch(error => {
       alert("Error uploading Student: " + error.message);
       setStatus("Add")
     });
    

  }

  return (
    <div className="add-student">
      <form onSubmit={submitFile}>
        <div className="add-student-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
          <option value="">--Please choose an option--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          </select> 
        </div>
        <div className="add-student-name">
          <p>Name</p>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Type here..."
            required
          />
        </div>
        <div className="add-student-rollnumber">
          <p>Roll Number</p>
          <input
            type="text"
            onChange={handleChange}
            name="rollNumber"
            placeholder="Type here..."
            required
          />
        </div>
        
        <div className="add-student-department">
          <p>Department</p>
          
          <select name="department" onChange={handleChange} required>
          <option value="">--Please choose an option--</option>
          {
               departments.map(
                (item,index) => 
                (
                  <option value={item.department} id={index}>{item.department}</option>
                )
                
               )
          }
         
          </select>
        </div>
        <div className="add-student-session">
          <p>Session</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>
        <div className="add-student-file">
          <p>Picture file</p>
          <input type="file" name="file" onChange={handleFileChange} required />
        </div>
        <div className="add-student-button">
          <button type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
