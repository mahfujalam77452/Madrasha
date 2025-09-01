import React, { useState } from "react";
import "./AddVideo.css";
const AddVideo = () => {
  
  const [addVid, setAddVid] = useState({
    videoLink: "",
    title: "",
    date: null
  });
  const [status,setStatus] = useState("Add")
  function handleChange(e) {
    const { name, value } = e.target;
    setAddVid({ ...addVid, [name]: value });
  }

  function submitFile(e) {
    e.preventDefault();
    setStatus("Processing..")
    const link = addVid.videoLink;
    // Extract the video ID from the YouTube URL
    const videoId = link.split("v=")[1].split("&")[0];
    // Constructing the embed URL
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    addVid.videoLink = embedUrl;
    
    const today = new Date();
    addVid.date = today.toISOString().split('T')[0];

    const jwtToken = localStorage.getItem('jwtToken');
    fetch('http://localhost:8080/api/v1/admin/addvideo', {
      method: 'POST',
      headers:{'content-type':"application/json",'Authorization': `Bearer ${jwtToken}`},
      body:JSON.stringify({videoLink:addVid.videoLink,description:addVid.title,date:addVid.date})
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Video successfully added") {
          alert("Video uploaded successfully!");
        } else {
          alert("Failed to upload video: " + data.message);
        }
        setStatus("Add")
      })
      .catch(error => {
        alert("Error uploading video: " + error.message);
        setStatus("Add")
      });
  }

  return (
    <div className="add-video">
      <form onSubmit={submitFile}>
        <div className="add-video-category">
          <p>Video Link</p>
          <input
            type="url"
            onChange={handleChange}
            name="videoLink"
            placeholder="Type here..."
            required
          />
        </div>
        <div className="add-video-title">
          <p>Title</p>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            placeholder="Type here..."
            required
          />
        </div>
        
        <div className="add-video-button">
          <button type="submit" >
            {status}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideo;
