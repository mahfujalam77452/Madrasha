import React, { useState } from 'react'
import './AddTeacher.css'
const AddTeacher = () => {
  
  const [teacher, setTeacher] = useState({
    name: '',
    designation: '',
    teacher: null,
  });
  const [status,setStatus] = useState("Add")
  function handleChange(e) {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  }

  function handleFileChange(e) {
    setTeacher({ ...teacher, teacher: e.target.files[0] });
  }

  function submitFile(e) {
    e.preventDefault();
    setStatus("Processing..")
    const formData = new FormData();
       formData.append('fullName', teacher.name);
       formData.append('designation', teacher.designation);
       formData.append('file', teacher.teacher);
       const jwtToken = localStorage.getItem('jwtToken');

       fetch('http://localhost:8080/api/v1/admin/addteacher', {
        method: 'POST',
        headers:{'Authorization': `Bearer ${jwtToken}`},
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "Teacher successfully added") {
            alert("Teacher uploaded successfully!");
          } else {
            alert("Failed to upload Teacher: " + data.message);
          }
          setStatus("Add")
        })
        .catch(error => {
          alert("Error uploading Teacher: " + error.message);
          setStatus("Add")
        });
    
  }

  return (
    <div className='add-teacher'>
      <form onSubmit={submitFile}>
        <div className="add-teacher-name">
          <p>Name</p>
          <input
            type="text"
            onChange={handleChange}
            name='name'
            placeholder='Type here...'
            required
          />
        </div>
        <div className="add-teacher-designation">
          <p>Desighnation</p>
          <input
            type="text"
            onChange={handleChange}
            name='designation'
            placeholder='Type here...'
            required
          />
        </div>
        <div className="add-teacher-picture">
          <p>teacher file</p>
          <input
            type="file"
            name='picture'
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="add-teacher-button">
        <button type="submit" >{status}</button>
        </div>
        
      </form>
    </div>
  )
}

export default AddTeacher
