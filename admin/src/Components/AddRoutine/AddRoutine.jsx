import React, { useContext, useState } from "react";
import "./AddRoutine.css";
import { DataContext } from "../../Context/DataContext";

const AddRoutine = () => {
  const [routine, setRoutine] = useState({
    section: "",
    session: "",
    department: "",
    forWhich: "",
    routineFile: null,
  });
 const [status,setStatus] = useState("Add")
 const {examNames} = useContext(DataContext);
 const {departments} = useContext(DataContext)
  function handleChange(e) {
    const { name, value } = e.target;
    setRoutine({ ...routine, [name]: value });
  }

  function handleFileChange(e) {
    setRoutine({ ...routine, routineFile: e.target.files[0] });
  }

  function submitFile(e) {
    e.preventDefault();
      setStatus("Processing..")
       const date = new Date().toISOString();
       const {section,session,department,forWhich,routineFile} = routine;
       const formData = new FormData();
       formData.append('section', section);
       formData.append('session', session);
       formData.append('department', department);
       formData.append('forWhich', forWhich);
       formData.append('examName',routine.examName?routine.examName:"")
       formData.append('file', routineFile);
       formData.append('date', date);
       const jwtToken = localStorage.getItem('jwtToken');

       fetch('http://localhost:8080/api/v1/admin/addroutine', {
        method: 'POST',
        headers:{'Authorization':`Bearer ${jwtToken}`},
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "Routine successfully added") {
            alert("Routine uploaded successfully!");
          } else {
            alert("Failed to upload Routine: " + data.message);
          }
          setStatus("Add");
        })
        .catch(error => {
          alert("Error uploading Routine: " + error.message);
          setStatus("Add");
        });

        

  }

  return (
    <div className="add-routine">
      <form onSubmit={submitFile}>
        <div className="add-routine-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="add-routine-session">
          <p>Year</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="add-routine-department">
          <p>Department</p>
          
          <select name="department" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            {
              departments.map(
                (item,index) => (
                  <option value={item.department} id={index}>{item.department}</option>
                )
              )
            }
          </select>
        </div>

        <div className="add-routine-forwhich">
          <p>For Which</p>
          <select name="forWhich" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="class routine">Class Routine</option>
            <option value="exam routine">Exam Routine</option>
          </select>
        </div>
        {
          routine.forWhich === "exam routine"?<div className="add-routine-examName">
             <p>Exam Name</p>
             <select name="examName" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            {
              examNames.map((item,index) => (
                <option value={item.examName} key={index}>{item.examName}</option>
              ))
            }
          </select>
          </div>:null
        }
        <div className="add-routine-file">
          <p>Routine file</p>
          <input type="file" name="file" onChange={handleFileChange} required />
        </div>
        <div className="add-routine-button">
          <button type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default AddRoutine;
