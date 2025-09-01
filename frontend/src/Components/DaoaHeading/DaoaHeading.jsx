import React, { useEffect, useState } from 'react'
import './DaoaHeading.css'
import background_img from '../Assets/daoa4.png'
const DaoaHeading = () => {

  const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(prev => !prev);
        }, 2000); // Change text every 4 seconds

        return () => clearInterval(interval);
    }, []);
  return (
    <div className='daoa-heading'>
         <img src={background_img} alt="" />
        <h1>ইসলামিক দাওয়াহ কোর্স </h1>
        <div className="banner-text">
            <h2 className={toggle ? 'active' : ''}></h2>
        </div>
    </div>
  )
}

export default DaoaHeading
