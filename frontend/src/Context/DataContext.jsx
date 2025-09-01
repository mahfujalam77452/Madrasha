import React, { createContext, useEffect, useState } from "react";

import Gallery from "../Components/Assets/Gallery_pic";
export const DataContext = createContext(null);

const DataContextProvider = (props) => {
  const [AllNotice, setAllNotice] = useState([]); // ✅ Use state instead of a regular variable
  const [videoinfo,setVideoinfo] = useState([])
  const [teachers,setTeachers] = useState([])
  const [Gallery,setGallery] = useState([])
  const [examNames,setExamNames] = useState([])
  const [departments,setDepartments] = useState([])
  const API_BASE_URL = "http://localhost:8080/api/v1/admin";

  useEffect(() => {
    const getData = async (endpoint,setter) => {
      try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.data) {
           setter(data.data); // ✅ Update state correctly
        } else {
          console.warn(`No data received for ${endpoint}`);
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        console.log(`Error fetching ${endpoint}`);
      }
    };

    getData("getnotice",setAllNotice);
    getData("getvideo",setVideoinfo);
    getData("getteacher",setTeachers);
    getData("getpicture",setGallery);
    getData("getdepartment",setDepartments);
    getData('getexamname',setExamNames);
  }, []); 

  const contextValue = { teachers, Gallery, videoinfo, AllNotice,departments,examNames };

  
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
