import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import poster1 from '../Assets/Poster_1.jpg';
import poster2 from '../Assets/Poster_2.jpg';
import poster3 from '../Assets/Poster_3.jpg';
import poster4 from '../Assets/Poster_4.jpg';
import poster5 from '../Assets/Poster_5.jpg';
import poster6 from '../Assets/Poster_6.jpg';
import poster7 from '../Assets/Poster_7.jpg';
import poster8 from '../Assets/Poster_8.jpg';
import poster9 from '../Assets/Poster_9.jpg';
import poster10 from '../Assets/poster_10.jpg';

const ImageSlider = () => {
  const [count, setCount] = useState(0);
  const [forward, setForward] = useState(true);

  const images = [
    poster1, poster2, poster3, poster4, poster5,
    poster6, poster7, poster8, poster9, poster10
  ];

  const shiftImage = (count) => {
    const temp =  `-${count * 100}%`;
    
    return temp;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (forward) {
        if (count === images.length - 1) {
          setForward(false);
        } else {
          setCount(count + 1);
        }
      } else {
        if (count === 0) {
          setForward(true);
        } else {
          setCount(count - 1);
        }
      }
    }, 3000); // Set your preferred delay here (3 seconds)

    return () => clearTimeout(timer); // Clear timeout on unmount to avoid memory leaks
  }, [count, forward,images.length]);

  return (
    <div className='ImageSlider'>
      <div className="carousel-container">
        <div className="image-container" style={{ marginLeft: shiftImage(count) }}>
          {images.map((image, index) => (
            <div key={index} className="image">
              <img src={image} alt={`Poster ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
