import React, { useContext, useState } from "react";
import "./ExamResult.css";
import axios from "axios";
import { DataContext } from "../../Context/DataContext";
const ExamResult = () => {
  const [result, setResult] = useState({
    section: "",
    session: "",
    department: "",
    examName: "",
  });

  const { departments, examNames } = useContext(DataContext);
  const [routineFile, setRoutineFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setResult({ ...result, [name]: value });
  }

  async function submitFile(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRoutineFile(null);
    try {
      const response = await axios.post("http://localhost:8080/api/v1/admin/getroutine", result, {
        headers: { "Content-Type": "application/json" },
      });

      setRoutineFile(response.data.data); // Assuming the API returns the routine file as `data`
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch Result");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="exam-result">
      <form onSubmit={submitFile}>
        <div className="exam-result-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="exam-result-department">
          <p>Department</p>
          <select name="department" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            {departments.map((item, index) => (
              <option value={item.department} key={index}>
                {item.department}
              </option>
            ))}
          </select>
        </div>

        <div className="exam-result-exam-name">
          <p>Exam Name</p>
          <select name="examName" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            {examNames.map((item, index) => (
              <option value={item.examName} key={index}>
                {item.examName}
              </option>
            ))}
          </select>
        </div>
        <div className="exam-result-year">
          <p>Year</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>
        <div className="exam-result-button">
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Find"}
          </button>
        </div>
      </form>
      {error && <div className="error-exam-result">
        <p style={{ color: "red" }}>{error}</p>
      </div> }

      {routineFile && (
        <div className="exam-result-file">
          <h3>Result File</h3>
          <a href={routineFile} target="_blank" rel="noopener noreferrer">
            View Result
          </a>
        </div>
      )}
    </div>
  );
};

export default ExamResult;
