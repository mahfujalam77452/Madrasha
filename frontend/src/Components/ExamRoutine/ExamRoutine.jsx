import React, { useContext, useState } from 'react'
import './ExamRoutine.css'
import axios from "axios";
import { DataContext } from '../../Context/DataContext';
const ExamRoutine = () => {
  
  const [routine, setRoutine] = useState({
    section: "",
    session:"",
    department: "",
    forWhich:"exam routine",
    examName: "",
   
  });
  
  const {departments,examNames} = useContext(DataContext)
  const [routineFile, setRoutineFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setRoutine({ ...routine, [name]: value });
  }

  async function submitFile(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRoutineFile(null);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/admin/getroutine", routine, {
        headers: { "Content-Type": "application/json" },
      });

      setRoutineFile(response.data.data); // Assuming the API returns the routine file as `data`
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch routine");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='exam-routine'>
      <form onSubmit={submitFile}>
        
        <div className="exam-routine-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="exam-routine-department">
          <p>Department</p>
          <select name="department" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            {
              departments.map((item,index) => (
                <option value={item.department} key={index}>{item.department}</option>
              ))
            }
          </select>
        </div>

        <div className="exam-routine-exam-name">
          <p>Exam Name</p>
          <select name="examName" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
           {
            examNames.map((item,index) => (
              <option value={item.examName} key={index}>{item.examName}</option>
            ))
           }
          </select>
        </div>
        <div className="exam-routine-year">
          <p>Year</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>
        <div className="exam-routine-button">
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Find"}
          </button>
        </div>
      </form>
      {error && <div className="error-exam-routine">
        <p style={{ color: "red" }}>{error}</p>
      </div> }

      {routineFile && (
        <div className="exam-routine-file">
          <h3>Routine File</h3>
          <a href={routineFile} target="_blank" rel="noopener noreferrer">
            View Routine
          </a>
        </div>
      )}
    </div>
  )
}

export default ExamRoutine
