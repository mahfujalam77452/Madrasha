import React, { useContext, useState, useEffect, memo } from 'react';
import './AllNotice.css';
import { DataContext } from '../../Context/DataContext';
import toast from 'react-hot-toast';

const AllNotice = () => {
  const { notices } = useContext(DataContext);
  
  const [result, setResult] = useState([]);

  // Update result when notices change
  useEffect(() => {
    setResult(notices);
  }, [notices]);

  console.log("Result:", result); // Check updates

  function HandleClick(_id) {
    const jwtToken = localStorage.getItem('jwtToken');
    fetch(`http://localhost:8080/api/v1/admin/deletenotice/${_id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${jwtToken}` }
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setResult(prevResult => prevResult.filter(item => item._id !== _id));
          toast.success('Notice deleted successfully!', {
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
          alert("Failed to delete Notice: " + data.message);
        }
      })
      .catch(error => {
        alert("Error deleting Notice: " + error.message);
      });
  }

  return (
    <div className='all-notice'>
      {result && result.length > 0 ? (
        result.map((item, index) => (
          <div className="notice-container" key={index}>
            <div className="notice-date">{item.notice_date}</div>
            <div className="notice-title">{item.notice_title}</div>
            <div className="notice-delete-icon" onClick={() => HandleClick(item._id)}>+</div>
          </div>
        ))
      ) : (
        <p>No notices available</p>
      )}
    </div>
  );
};

export default memo(AllNotice);
