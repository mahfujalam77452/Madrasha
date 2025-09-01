import React, { useContext, useEffect, useState } from 'react'
import './AllVideo.css'
import VideoCard from '../VideoCard/VideoCard'
import { DataContext } from '../../Context/DataContext'
import toast from 'react-hot-toast'
const AllVideo = () => {
  const {videos} = useContext(DataContext)

  const [result,setResult] = useState([])
   useEffect(() => {
       setResult(videos);
     }, [videos]);
  function HandleClick( _id){

    
    const jwtToken = localStorage.getItem('jwtToken');
    fetch(`http://localhost:8080/api/v1/admin/deletevideo/${_id}`, {
      method: 'DELETE',
      headers:{'Authorization': `Bearer ${jwtToken}`}
      
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          setResult(result.filter(item => item._id != _id))
        
          toast.success(' Video deleted successfully!', {
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

  return (
  
    <div className='video-page'>
      <div className="video-container">
          {
            result.map(
              (item,i) => {
                
                return <div className="video-container-videos" key={i}>
                        <VideoCard videolink = {item.videoLink} description = {item.description} key={i} />
                        <div onClick={() => HandleClick(item._id)} className="video-delete-icon">+</div>
                       </div>
                
              }
            )
          }
      </div>
    </div>
  )
}

export default AllVideo
