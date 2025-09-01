import React, { useContext, useState } from 'react'
import './AllPicture.css'
import { DataContext } from '../../Context/DataContext'
import { toast } from 'react-hot-toast';
const AllPicture = () => {
  const {pictures,setPictures} = useContext(DataContext)
  const [srcCategory,SetSrcCategory] = useState("")
  const uniqueCategories = [...new Set(pictures.map(picture => picture.category))];
  const [result,setResult] = useState([])
  function HandleSearch(){
    setResult(pictures.filter(item => item.category === srcCategory))
    
  }
  function HandleClick( _id){

    
    const jwtToken = localStorage.getItem('jwtToken');
    fetch(`http://localhost:8080/api/v1/admin/deletepicture/${_id}`, {
      method: 'DELETE',
      headers:{'Authorization': `Bearer ${jwtToken}`}
      
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setResult(result.filter(item => item._id != _id))
          toast.success(' Picture deleted successfully!', {
            duration: 2000, // Slightly longer for better visibility
            position: 'center-top', // Adjust position as needed
            style: {
              background: '#4CAF50', // Green success color
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '8px',
              padding: '12px 16px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            },
            
          });
          
          
        } else {
          alert("Failed to upload Notice: " + data.message);
        }
       
      })
      .catch(error => {
        alert("Error uploading Notice: " + error.message);
        
      });
    
          
  }
  function handleChange(e){
    SetSrcCategory(e.target.value)
  }
  return (
    <div className='all-picture'>
      <div className="all-picture-search">
        <select name="src" id="" onChange={handleChange}>
          <option value="">Select One</option>
          {
            uniqueCategories.map(
              (item,index) =>{
                return <option key={index} value={item}>{item}</option>
              }
            )
          }
        </select>
        <div className="all-picture-button">
            <button onClick={HandleSearch}>Search</button>
         </div>
      </div>
      <div className="picture-container">
        {
          result.map(
               (item,index) => {
                return <div key={index} className="image-container">
                  <img className = "image-container-image" src={item.image} alt="" />
                   <div onClick={() => HandleClick(item._id)} className="delete-icon">
                    +
                   </div>
                </div>
               }
          )
        }
      </div>
    </div>
  )
}

export default AllPicture
