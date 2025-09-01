import React, { useContext, useState } from "react";
import "./AddMark.css";
import { DataContext } from "../../Context/DataContext";
const AddMark = () => {
  const [mark, setMark] = useState({
    section: "",
    session: "",
    department: "",
    examName: "",
    file:null,
  });
  const [status,setStatus] = useState("Add")
  const {departments} = useContext(DataContext)
  function handleChange(e) {
    const { name, value } = e.target;
    setMark({ ...mark, [name]: value });
  }

  function handleFileChange(e) {
    setMark({...mark,file:e.target.files[0]});
  }

  function submitFile(e) {
    e.preventDefault();
    setStatus("Processing..")

    const formData = new FormData();
    
    formData.append('section',mark.section);
    formData.append('session',mark.session);
    formData.append('department',mark.department);
    formData.append('examName',mark.examName);
    formData.append('file', mark.file);
    const jwtToken = localStorage.getItem('jwtToken');

    fetch('http://localhost:8080/api/v1/admin/addresult', {
     method: 'POST',
     headers:{'Authorization': `Bearer ${jwtToken}`},
     body: formData,
   })
     .then(response => response.json())
     .then(data => {
       if (data.message === "success") {
         alert("Result uploaded successfully!");
       } else {
         alert("Failed to upload Result: " + data.message);
       }
       setStatus("Add")
     })
     .catch(error => {
       alert("Error uploading Result: " + error.message);
       setStatus("Add")
     });
  }
  return (
    <div className="add-mark">
      <form onSubmit={submitFile}>
        <div className="add-mark-section">
          <p>Section</p>
          <select name="section" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        
        <div className="add-mark-session">
          <p>Year</p>
          <input
            type="text"
            onChange={handleChange}
            name="session"
            placeholder="Type here..."
            required
          />
        </div>

        <div className="add-mark-department">
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
        
        <div className="add-mark-forwhich">
          <p>Exam Name</p>
          <select name="examName" onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="mid-term-exam">Mid Term Exam</option>
            <option value="final-exam">Final Exam</option> 
          </select>
        </div>
        
        <div className="add-mark-mark">
        <p>Result(PDF)</p>
          <input
            type="file"
            name='file'
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="add-mark-button">
          <button type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default AddMark;
