import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { toast } from "react-hot-toast";
import "./AddedFees.css";
const AddedFees = () => {
  const [section, setSection] = useState("");
  const [session, setSession] = useState("");
  const [department, setDepartment] = useState("");
  const [result, setResult] = useState([]);

  const { addedFees } = useContext(DataContext);
  function submitFile(e) {
    e.preventDefault();
    const resultFees = addedFees.filter(
      (item) =>
        item.section === section &&
        item.session === session &&
        item.department === department
    );
    console.log(resultFees);
    setResult(resultFees);
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

  function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function HandleClick(_id) {
    const jwtToken = localStorage.getItem("jwtToken");
    fetch(`http://localhost:8080/api/v1/admin/deleteaddedfee/${_id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          setResult(result.filter((item) => item._id != _id));
          toast.success("Added Fee deleted successfully!", {
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
          alert("Failed to upload Added Fee: " + data.message);
        }
      })
      .catch((error) => {
        alert("Error uploading Added Fee: " + error.message);
      });
  }

  return (
    <div className="added-fees">
      <form onSubmit={submitFile}>
        <div className="added-fees-search">
          <div className="added-fees-section">
            <p>Section</p>
            <select name="section" onChange={handleChange} required>
              <option value="">--Choose an option--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="added-fees-session">
            <p>Session</p>
            <input
              type="text"
              onChange={handleChange}
              name="session"
              placeholder="Type here.."
              required
            />
          </div>
          <div className="added-fees-department">
            <p>Department</p>
            <input
              type="text"
              onChange={handleChange}
              name="department"
              placeholder="Type here.."
              required
            />
          </div>
        </div>
        <div className="added-fees-button">
          <button type="submit">Search</button>
        </div>
      </form>
      <div className="added-fees-box">
        <div className="added-fees-container">
          { result.length >=1 ?result.map((item, index) => {
            return (
              <div key={index} className="added-fee-container">
                <div className="added-fees-info">
                  <div className="forWhich">{capital(item.forWhich)}</div>
                  <div className="fee">{item.fee} Taka</div>
                </div>

                <div
                  className="added-fees-delete-icon"
                  onClick={() => HandleClick(item._id)}
                >
                  +
                </div>
              </div>
            );
          }):null
          }
        </div>
      </div>
    </div>
  );
};

export default AddedFees;
