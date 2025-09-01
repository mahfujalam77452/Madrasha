import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import "./PicSidebar.css";

const PicSidebar = () => {
  const [activeItem, setActiveItem] = useState("বৃক্ষরোপণ");
  const { Gallery } = useContext(DataContext);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const filteredImages = Gallery.filter(item => item.category === activeItem).map(item => item.image);

  useEffect(() => {
    const categories = Gallery.map((item) => item.category);
    const uniqueCategoriesSet = [...new Set(categories)];
    setUniqueCategories(uniqueCategoriesSet);
  }, [Gallery]);

  return (
    <div className="gallery-container">
      <div className="sidebar">
        <ul>
          {uniqueCategories.map((item, index) => (
            <li
              key={index}
              className={item === activeItem ? "active" : ""}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="images-container">
        {filteredImages.map((image, index) => (
          <img key={index} src={image} alt={`Gallery item ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default PicSidebar;
