import React, { useState } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit form logic here
  };

  return (
    <form className="admission-form" onSubmit={handleSubmit}>
      
       <div className="header">
       <h2>New Admission</h2>
       </div>
      {/* Academic Details */}
      <section className='academic-details'>
        <h3>Academic Details</h3>
      <div className="first-half">
        <div className="institute-name">
          <label>Institute Name <strong>*</strong></label>
          <input type="text" name="instituteName" value="Manarasatus Sunnah" readOnly />
        </div>

        <div className="class">
          <label>Class <strong>*</strong></label>
          <select name="class" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            {/* More options can be added here */}
          </select>
        </div>
         
        <div className="section">
          <label>Section <strong>*</strong></label>
          <select name="section" onChange={handleChange} required>
            <option value="">Select Class First</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>
      </div>
        
         <div className="second-half">
         <div className="admission-date">
          <label>Admission Date<strong>*</strong></label>
          <input type="date" name="admissionDate" value="2024-09-11" readOnly />
        </div>

        <div className="category">
          <label>Category <strong>*</strong></label>
          <select name="category" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            {/* More options can be added here */}
          </select>
        </div>
         </div>
        
      </section>

      {/* Student Details */}
      <section className='student-detail'>
        <h3>Student Details</h3>
       <div className="first-half">
       <div className="first-name">
          <label>First Name <strong>*</strong></label>
          <input type="text" name="firstName" onChange={handleChange} required />
        </div>

        <div className="last-name">
          <label>Last Name <strong>*</strong></label>
          <input type="text" name="lastName" onChange={handleChange} required />
        </div>

        <div className="gender">
          <label>Gender</label>
          <select name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
       </div>
       <div className="second-half">
       <div className="birthday">
          <label>Birthday</label>
          <input type="date" name="birthday" onChange={handleChange} />
        </div>

        <div className="blood-group">
          <label>Blood Group</label>
          <select name="bloodGroup" onChange={handleChange}>
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
          </select>
        </div>
       </div>


      <div className="third-half">
       <div className="student-mobile">
          <label>Student Mobile No</label>
          <input type="text" name="studentMobile" onChange={handleChange} />
        </div>

        <div className="student-gmail">
          <label>Student Email</label>
          <input type="email" name="studentEmail" onChange={handleChange} />
        </div>

        <div className="mother-tongue">
          <label>Mother Tongue</label>
          <input type="text" name="motherTongue" onChange={handleChange} />
        </div>
       </div>
        

      <div className="forth-half">
        <div className="religion">
          <label>Religion</label>
          <input type="text" name="religion" onChange={handleChange} />
        </div>

        <div className="caste">
          <label>Caste</label>
          <input type="text" name="caste" onChange={handleChange} />
        </div>
        <div className="city">
          <label>City</label>
          <input type="text" name="city" onChange={handleChange} />
        </div>
      </div>

        

        
        <div className="present-address">
          <label>Present Address</label>
          <textarea name="presentAddress" onChange={handleChange}></textarea>
        </div>

        <div className="permanent-address">
          <label>Permanent Address</label>
          <textarea name="permanentAddress" onChange={handleChange}></textarea>
        </div>

       

        <div className="student-photo">
          <label>Upload Student Photo</label>
          <input type="file" name="studentPhoto" onChange={handleFileChange} />
        </div>
      </section>

      {/* Guardian Details */}
      <section className='guardian-details'>
        <h3>Guardian Details</h3>
        <div className="first-half">
        <div className="father-name">
          <label>Father Name</label>
          <input type="text" name="fatherName" onChange={handleChange} />
        </div>

        <div className="mothername">
          <label>Mother Name</label>
          <input type="text" name="motherName" onChange={handleChange} />
        </div>
        </div>


        <div className="second-half">
        <div className="guardian-name">
          <label>Guardian Name <strong>*</strong></label>
          <input type="text" name="guardianName" onChange={handleChange} required />
        </div>

        <div className="relation">
          <label>Relation <strong>*</strong></label>
          <input type="text" name="relation" onChange={handleChange} required />
        </div>
        <div className="occupation">
          <label>Occupation <strong>*</strong></label>
          <input type="text" name="occupation" onChange={handleChange} required />
        </div>
        </div>




        <div className="third-half">
        <div className="income">
          <label>Income <strong>*</strong></label>
          <input  type="text" name="income" onChange={handleChange} required />
        </div>

        <div className="education">
          <label>Education <strong>*</strong></label>
          <input type="text" name="education" onChange={handleChange} required />
        </div>
        </div>


        <div className="forth-half">
        <div className="guardian-email">
          <label>Guardian Email <strong>*</strong></label>
          <input type="email" name="guardianEmail" onChange={handleChange} required />
        </div>

        <div className="guardian-mobile">
          <label>Guardian Mobile No <strong>*</strong></label>
          <input type="text" name="guardianMobile" onChange={handleChange} required />
        </div>

        <div className="guardian-city">
          <label>Guardian City</label>
          <input type="text" name="guardianCity" onChange={handleChange} />
        </div>
        </div>
        


        <div className="guardian-address">
          <label>Guardian Address <strong>*</strong></label>
          <textarea name="guardianAddress" onChange={handleChange}></textarea>
        </div>
        <div className="guardian-photo">
          <label>Upload Guardian Photo</label>
          <input type="file" name="guardianPhoto" onChange={handleFileChange} />
        </div>
      </section>
       <section className="upload-document">
        
            <label>Upload Documents<strong>*</strong></label>
            <input type="file" name="guardianPhoto" onChange={handleFileChange} />
       
       </section>
       <div className="btn">
          <button type="submit">Submit</button>
       </div>
     
    </form>
  );
};

export default AdmissionForm;
