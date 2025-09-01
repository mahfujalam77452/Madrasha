import React from "react";
import "./VideoCard.css";
const VideoCard = ({ videolink, description }) => {
  return (
    <div className="videocard">
      <iframe
        width ="100%"
        height="180"
        src={videolink}
        title= "YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
      <div className="description-container">
        <p> {description} </p>
      </div>
    </div>
  );
};

export default VideoCard;
