import React, { useContext, useState } from "react";
import "./AllStudent.css";
import { DataContext } from "../../Context/DataContext";
import { toast } from "react-hot-toast";
const AllStudent = () => {
  const [section, setSection] = useState("");
  const [session, setSession] = useState("");
  const [department, setDepartment] = useState("");
  const [result, setResult] = useState([]);

  const { students,departments } = useContext(DataContext);
  function submitFile(e) {
    e.preventDefault();
    const resultStudent = students.filter(
      (item) =>
        item.section === section &&
        item.session === session &&
        item.department === department
    );
    console.log(resultStudent);
    setResult(resultStudent);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "session":
        setSession(value);
        break;
      case "section":
        setSection(value);
        break;
      case "department":
        setDepartment(value);
        break;

      default:
        break;
    }
  }
  function HandleClick(_id) {
    const jwtToken = localStorage.getItem("jwtToken");
    fetch(`http://localhost:8080/api/v1/admin/deletestudent/${_id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          setResult(result.filter((item) => item._id != _id));
          toast.success("Student deleted successfully!", {
            duration: 2000, // Slightly longer for better visibility
            position: "center-top", // Adjust position as needed
            style: {
              background: "#4CAF50", // Green success color
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "12px 16px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            },
          });
        } else {
          alert("Failed to upload Student: " + data.message);
        }
      })
      .catch((error) => {
        alert("Error uploading Student: " + error.message);
      });
  }

  return (
    <div className="all-student">
      <form onSubmit={submitFile}>
        <div className="all-student-search">
          <div className="all-student-section">
            <p>Section</p>
            <select name="section" onChange={handleChange} required>
              <option value="">--Choose an option--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="all-student-session">
            <p>Session</p>
            <input
              type="text"
              onChange={handleChange}
              name="session"
              placeholder="Type here.."
              required
            />
          </div>
          <div className="all-student-department">
            <p>Department</p>
            
            <select name="department" onChange={handleChange} required>
              <option value="">--Choose an option--</option>
              {
                departments.map(
                  (item,index) => (
                    <option value={item.department} id={index}>{item.department}</option>
                  )
                )
              }
            </select>
          </div>
        </div>
        <div className="all-student-button">
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="all-student-container">


      <div className="student-container">
        {result.map((item, index) => {
          return (
            <div key={index} className="student-image-container">
              <img src={item.picture} alt="Image" />
              <div className="student-info">
                <div className="name">{item.name}</div>
                <div className="roll">Roll : {item.rollNumber}</div>
              </div>
              <div
                className="student-delete-icon"
                onClick={() => HandleClick(item._id)}
              >
                +
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default AllStudent;
