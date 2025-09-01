import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { toast } from "react-hot-toast";
import './AllRoutine.css'
const AllRoutine = () => {

  const [section, setSection] = useState("");
  const [session, setSession] = useState("");
  const [department, setDepartment] = useState("");
  const [result, setResult] = useState([]);

  const { routines,departments } = useContext(DataContext);
  function submitFile(e) {
    e.preventDefault();
    const resultRoutines = routines.filter(
      (item) =>
        item.section === section &&
        item.session === session &&
        item.department === department
    );
    console.log(resultRoutines);
    setResult(resultRoutines);
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
    fetch(`http://localhost:8080/api/v1/admin/deleteroutine/${_id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          setResult(result.filter((item) => item._id != _id));
          toast.success("Routine deleted successfully!", {
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
          alert("Failed to upload Routine: " + data.message);
        }
      })
      .catch((error) => {
        alert("Error uploading Routine: " + error.message);
      });
  }

  return (
    <div className='all-routine'>
        <form onSubmit={submitFile}>
        <div className="all-routine-search">
          <div className="all-routine-section">
            <p>Section</p>
            <select name="section" onChange={handleChange} required>
              <option value="">--Choose an option--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="all-routine-session">
            <p>Session</p>
            <input
              type="text"
              onChange={handleChange}
              name="session"
              placeholder="Type here.."
              required
            />
          </div>
          <div className="all-routine-department">
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
        <div className="all-routine-button">
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="all-routine-box">
      <div className="all-routine-container">
         {
          result.map(
            (item,index) => {
              return  <div key={index} className="routine-container" >
                      <a href={item.routineFile} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{textDecoration:"none"}} >
                      <div className="routine">{item.forWhich}</div>
                      </a>
                  <div
                   className="routine-delete-icon"
                   onClick={() => HandleClick(item._id)}
                  >
                   +
                  </div>
              </div>
           
               
            }
          )
         }
      </div>
      </div>
    </div>
  )
}

export default AllRoutine
