import React, { useContext, useRef, useState } from 'react'
import './AddAdmitCard.css'
import { DataContext } from '../../Context/DataContext'
const AddAdmitCard = () => {
  const {students,departments} = useContext(DataContext);

  const [section,setSection] = useState("");
  const [status,setStatus] = useState("Add")
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
  function addAdmit(index) {
    
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
    fetch('http://localhost:8080/api/v1/admin/addadmit', {
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
    <div className='add-admit-card'>
      <form onSubmit={submitFile}>
           <div className="admit-student-search">
            <div className="admit-card-section">
             <p>Section</p>
             <select name='section' onChange={handleChange} required>
               <option value="">--Choose an option--</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
             </select>
            </div>
            <div className="admit-card-session">
                <p>Session</p>
                <input 
                type="text"
                onChange={handleChange}
                name='session'
                placeholder='Type here..'
                required
                 />
            </div>
            <div className="admit-card-department">
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
           <div className="admit-card-button">
            <button type='submit'>Search</button>
           </div>
      </form>
    {
      result.map(
        (item,index) => {
          return <div key={index} className="add-admit-box">
                    <div className="add-admit-info">
                      <p>{`Roll : ${item.rollNumber}`}</p>
                      <p>{item.name}</p>
                      <img src={item.picture} alt="image" />
                    </div>
                    <div className="add-admit-file">
                        <div className="add-admit">
                          <label htmlFor="admitFile" className='admit-card-lebel'>Add Admit</label>
                          <input 
                          type="file" 
                          name='file' 
                          id='admitFile'
                          className='admit-input-file'
                          
                          onChange={(e) => handleFileChange(e, index)}
                          required />
                        </div>
                        <div className="admit-card-examName">
                        <select name="examName" onChange={(e) => newHandleChange(e,index)} required>
                            <option value="">Select Exam</option>
                            <option value="mid-term-exam">Mid Term Exam</option>
                            <option value="final-exam">Final Exam</option>
                        </select>    
                        </div>
                        <div className="add-admit-button">
                          <button onClick={() => addAdmit(index)}>Add</button>
                        </div>
                    </div>
                  </div>
        }
      )
    }
      
    </div>
  )
}

export default AddAdmitCard
