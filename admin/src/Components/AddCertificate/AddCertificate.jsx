import React, { useContext, useRef, useState } from 'react'
import './AddCertificate.css'
import { DataContext } from '../../Context/DataContext'
const AddCertificate = () => {
  const {students,departments} = useContext(DataContext);

  const [section,setSection] = useState("");
  const [session,setSession] = useState("");
  const [department,setDepartment] = useState("");
  const [result,setResult] = useState([]);

  function submitFile(e){
    e.preventDefault();
    const resultStudent = students.filter(
      item =>
        item.section === section &&
        item.session === session &&
        item.department === department
    )
    setResult(resultStudent);
  }
  
 
  function handleFileChange(e, index) {
    console.log(index)
    const file = e.target.files[0];
    // Set the file for the specific index in the result array
    setResult((prevResult) => {
      const updatedResult = [...prevResult];
      updatedResult[index] = { ...updatedResult[index], file: file };
      return updatedResult;
    });
  }


  function newHandleChange(e, index) {
    const updatedResult = [...result];
    updatedResult[index] = { ...updatedResult[index], examName: e.target.value };
    setResult(updatedResult);
  }
  function addcertificate(index) {
    
     const newResult = result[index] ;
     console.log(newResult);
     if(!(newResult.file) || !(newResult.examName)){
      alert("Add required file or information !")
      return;
     }
    
     setStatus("Processing..")

     // Prepare form data for submission
    const formData = new FormData();
    formData.append('name', newResult.name);
    formData.append('rollNumber', newResult.rollNumber);
    formData.append('section', newResult.section);
    formData.append('session', newResult.session);
    formData.append('department', newResult.department);
    formData.append('examName', newResult.examName);
    formData.append('file', newResult.file);
    const jwtToken = localStorage.getItem('jwtToken');
    // Make API call
    fetch('http://localhost:8080/api/v1/admin/addcertificate', {
      method: 'POST',
      headers:{'Authorization': `Bearer ${jwtToken}`},
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          alert("Image uploaded successfully!");
        } else {
          alert("Failed to upload image: " + data.message);
        }
        e.target.reset();
        setStatus("Add")
      })
      .catch(error => {
        alert("Error uploading image: " + error.message);
        setStatus("Add")
      });
    
  }
 
  function handleChange(e){
    const {name,value} = e.target;
    switch(name){
      case 'session':
        setSession(value);
        break;
      case 'section':
        setSection(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      
      default:
        break;
    }

  }
  return (
    <div className='add-certificate'>
      <form onSubmit={submitFile}>
           <div className="certificate-student-search">
            <div className="certificate-section">
             <p>Section</p>
             <select name='section' onChange={handleChange} required>
               <option value="">--Choose an option--</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
             </select>
            </div>
            <div className="certificate-session">
                <p>Session</p>
                <input 
                type="text"
                onChange={handleChange}
                name='session'
                placeholder='Type here..'
                required
                 />
            </div>
            <div className="certificate-department">
                <p>Department</p>
               
              <select name='department' onChange={handleChange} required>
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
           <div className="certificate-button">
            <button type='submit'>Search</button>
           </div>
      </form>
    {
      result.map(
        (item,index) => {
          return <div key={index} className="add-certificate-box">
                    <div className="add-certificate-info">
                      <p>{`Roll : ${item.rollNumber}`}</p>
                      <p>{item.name}</p>
                      <img src={item.picture} alt="image" />
                    </div>
                    <div className="add-certificate-file">
                        <div className="add-certificate">
                          <label htmlFor="certificateFile" className='certificate-lebel'>Add certificate</label>
                          <input 
                          type="file" 
                          name='file' 
                          id='certificateFile'
                          className='certificate-input-file'
                          
                          onChange={(e) => handleFileChange(e, index)}
                          required />
                        </div>
                        <div className="certificate-examName">
                        <select name="examName" onChange={(e) => newHandleChange(e,index)} required>
                            <option value="">Select Certificate</option>
                            <option value="mid-term-exam">B.S.C in electrical engineering</option>
                            <option value="final-exam">B.S.C in computer science</option>
                        </select>    
                        </div>
                        <div className="add-certificate-button">
                          <button onClick={() => addcertificate(index)}>Add</button>
                        </div>
                    </div>
                  </div>
        }
      )
    }
      
    </div>
  )
}

export default AddCertificate
