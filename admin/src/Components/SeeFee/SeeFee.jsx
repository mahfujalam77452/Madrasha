import React, { useState } from "react";
import "./SeeFee.css";
const SeeFee = () => {

  const [result,setResult] = useState([])
  const [state,setState] = useState("Search")
  const [searchFee, setSearchFee] = useState({
    startDate: null,
    endDate: null,
    section: "",
    session: "",
    department: "",
    forWhich: "",
  });

  function handleChange(e) {
    const {name, value} = e.target;
    
    setSearchFee({ ...searchFee, [name]: value });
  }
  const jwtToken = localStorage.getItem('jwtToken');
  function handleClick(){
    setState("Searching..")
    fetch("http://localhost:8080/api/v1/admin/querycollectedfee", {
      method: "POST",
      headers: { "content-type": "application/json", 'Authorization': `Bearer ${jwtToken}`},
      body:JSON.stringify(searchFee)
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.data) {
             console.log(data.data);
             setResult(data.data)
        } else {
          alert("Cannot get donation");
        }
        setState("Search")
      })
      .catch((err) => {
        setState("Search")
        alert("Error found while getting students");
      });
  }
  return (
    <div className="see-fee">
      <div className="see-fee-search">
        <div className="see-fee-search-date">
          <div className="see-fee-search-startingDate">
            <p>Staring date :</p>
            <input
              type="date"
              onChange={handleChange}
              name="startDate"
              required
            />
          </div>
          <div className="see-fee-search-endingDate">
            <p>Ending date :</p>
            <input
              type="date"
              onChange={handleChange}
              name="endDate"
              required
            />
          </div>
        </div>
        <div className="see-fee-search-option">
          <div className="see-fee-search-section">
            <p>Section :</p>
            <select name="section" onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="see-fee-search-session">
            <p>Session :</p>
            <input
              type="text"
              onChange={handleChange}
              name="session"
              placeholder="Like 20-21"
            />
          </div>
          <div className="see-fee-search-department">
            <p>Department :</p>
            <input
              type="text"
              onChange={handleChange}
              name="department"
              placeholder="Like :- হিফজ শাখা"
            />
          </div>

          <div className="see-fee-search-forWhich">
            <p>For Which :</p>
            <select name="forWhich" onChange={handleChange}>
              <option value="">Select</option>
              <option value="tution fee">Tution Fee</option>
              <option value="admission fee">Admission Fee</option>
              <option value="exam fee">Exam Fee</option>
            </select>
          </div>
        </div>
        <div className="see-fee-search-button">
          <button onClick={handleClick}>{state}</button>
        </div>
      </div>
      <div className="see-fee-result">
        {
          result.map((item,index) => {
            
              const dateString = item.date; // Example date string
              const date = new Date(dateString);

              // Extract day, month, and year
              const day = date.getDate();
              const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              const month = monthNames[date.getMonth()];
              const year = date.getFullYear();

              // Format the date
              const formattedDate = `${day}-${month}-${year}`;

              return (
              <div key={index} className="see-fee-result-card">
                   <div className="see-fee-result-aditional-info">
                       <div className="section">
                          <p>{item.section}</p>
                       </div>
                       <div className="session">
                            <p>{item.session}</p>
                       </div>
                       <div className="department">
                               <p>{item.department}</p>
                       </div>
                       <div className="forWhich">
                          <p>{item.forWhich}</p>
                       </div>
                   </div>
                   <div className="see-fee-result-main-info">
                        <div className="date">
                          <p>{formattedDate}</p>
                        </div>
                        <div className="rol-number">
                            <p>Roll : {item.roll}</p>
                        </div>
                        <div className="name">
                            <p>{item.name}</p>
                        </div>
                        <div className="payment-status">
                            {
                              item.paymentStatus?<p className="paid">Paid</p>:<p className="unpaid">Due</p>
                            }
                            
                        </div>
                   </div>
              </div>)
          })
        }
      </div>
    </div>
  );
};

export default SeeFee;
