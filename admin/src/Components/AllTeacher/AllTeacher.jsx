import React, { useContext, useState, useEffect, memo } from 'react';
import './AllTeacher.css';
import { DataContext } from '../../Context/DataContext';
import toast from 'react-hot-toast';

const AllTeacher = () => {
  const { teachers } = useContext(DataContext);
  
  const [result, setResult] = useState([]);

  // Update result when notices change
  useEffect(() => {
    setResult(teachers);
  }, [teachers]);

  console.log("Result:", result); // Check updates

  function HandleClick(_id) {
    const jwtToken = localStorage.getItem('jwtToken');
    fetch(`http://localhost:8080/api/v1/admin/deleteteacher/${_id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setResult(prevResult => prevResult.filter(item => item._id !== _id));
          toast.success('Teacher deleted successfully!', {
            duration: 2000,
            position: 'top-center',
            style: {
              background: '#4CAF50',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '8px',
              padding: '12px 16px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            },
          });
        } else {
          alert("Failed to delete Teacher: " + data.message);
        }
      })
      .catch(error => {
        alert("Error deleting Teacher: " + error.message);
      });
  }

  return (
    <div className='all-teacher'>
      <div className="all-teacher-container">
      {result && result.length > 0 ? (
        result.map((item, index) => (
          <div className="teacher-container" key={index}>
            <img src={item.image} alt="Image" />
            <div className="teacher-info">
              <div className="name">{item.fullName}</div>
              <div className="designation">{item.designation}</div>
            </div>
            <div className="teacher-delete-icon" onClick={() => HandleClick(item._id)}>+</div>
          </div>
        ))
      ) : (
        <p>No teacher available</p>
      )}
      </div>
      
    </div>
  );
};

export default memo(AllTeacher);
