import React from "react";

import "./TeacherCard.css";

export const TeacherCard = ({
  imgSrc,
  name,
  description,
}) => {
 
  return (
    <div className="card-container">
      { 
        <img src={imgSrc} alt="" className="card-img" />
      }
      {<h1 className="card-title">{name}</h1>}
      { <p className="card-description">{description}</p>}
    
    </div>
  );
};
