import React, { useEffect, useState } from 'react'
import './SeeDonation.css'
const SeeDonation = () => {
  const [day,setDay] = useState("");
  const [sector,setSector] = useState("")
  const [donations,setDonations] = useState([])
  function handleChange(e){
    const {name,value} = e.target;
    switch(name){
      case 'day':
        setDay(value);
        break;
      case 'sector':
        setSector(value);
        break;
      
      default:
        break;
    }

  }

function handleClick(){
 
  if(day === ""){
    alert("Add days..")
  }

  fetch("http://localhost:8080/api/v1/admin/querydonation", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body:JSON.stringify({
      "day":day,
      "sector":sector
    })
  })
    .then((result) => result.json())
    .then((data) => {
      if (data.data) {
       setDonations(data.data)
      } else {
        alert("Cannot get donation");
      }
    })
    .catch((err) => {
      alert("Error found while getting students");
    });
}
    
  return (
    <div className='see-donation'>
      <div className="search-donation-section">
        <div className="search-donation-day">
          
          <input 
          type="number" 
          name="day"
          onChange={handleChange}
          placeholder='Up to (days..)'
          required/>
        </div>
        <div className="search-donation-sector">
          <select name="sector" onChange={handleChange}>
            <option value="">Select sector</option>
            <option value="যাকাত তহবিল">যাকাত তহবিল</option>
            <option value="শীতার্ত তহবিল">শীতার্ত তহবিল</option>
            <option value="জরুরী বন্যা তহবিল">জরুরী বন্যা তহবিল</option>
            <option value="সাধারণ">সাধারণ</option>
          </select>
        </div>
        <div className="search-donation-button">
          <button onClick={() => handleClick()}>Search</button>
        </div>
      </div>
      <div className="donation-result-section">
        {
          donations.map(
            (item,index) => {
              
              const dateString = item.date; // Example date string
              const date = new Date(dateString);

              // Extract day, month, and year
              const day = date.getDate();
              const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              const month = monthNames[date.getMonth()];
              const year = date.getFullYear();

              // Format the date
              const formattedDate = `${day}-${month}-${year}`;

              return <div className="donation-info">
                <p className='donation-info-date'>{formattedDate}</p>
                <p className='donation-info-name'>{item.name?item.name:"No name"}</p>
                <p className='donation-info-mail'>{item.mobileOrEmail}</p>
                <p className='donation-info-amount'>{item.donatedAmount} ৳</p>
              </div>
            }
          )
        }
      </div>
    </div>
  )
}

export default SeeDonation
