import React, { useState } from "react";
import "./AddNotice.css";
const AddNotice = () => {
  const [addNtc, setAddNtc] = useState({
    title: "",
    date:"",
    notice: null,
  });
  const [status,setStatus] = useState("Add")
  function handleChange(e) {
    const { name, value } = e.target;
    setAddNtc({ ...addNtc, [name]: value });
  }

  function handleFileChange(e) {
    setAddNtc({ ...addNtc, notice: e.target.files[0] });
  }

  function submitFile(e) {
    e.preventDefault();
    setStatus("Processing..")
       const options = { day: '2-digit', month: 'long', year: 'numeric' };
       const currentDate = new Date().toLocaleDateString('en-GB', options);
       addNtc.date = currentDate;

       const formData = new FormData();
       formData.append('notice_title', addNtc.title);
       formData.append('notice_date', addNtc.date);
       formData.append('file', addNtc.notice);
       const jwtToken = localStorage.getItem('jwtToken');

       fetch('http://localhost:8080/api/v1/admin/addnotice', {
        method: 'POST',
        headers:{'Authorization': `Bearer ${jwtToken}`},
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "Notice successfully added") {
            alert("Notice uploaded successfully!");
          } else {
            alert("Failed to upload Notice: " + data.message);
          }
          setStatus("Add")
        })
        .catch(error => {
          alert("Error uploading Notice: " + error.message);
          setStatus("Add")
        });
    
  }
  return (
    <div className="add-notice">
    <form onSubmit={submitFile}>
         
         <div className="add-notice-title">
           <p>Title</p>
           <input
             type="text"
             onChange={handleChange}
             name='title'
             placeholder='Type here...'
             required
           />
         </div>
         <div className="add-notice-file">
           <p>Notice file</p>
           <input
             type="file"
             name='file'
             onChange={handleFileChange}
             required
           />
         </div>
         <div className="add-notice-button">
         <button type="submit" required>{status}</button>
         </div>
         
       </form>
   </div>
  );
};

export default AddNotice;
