import React, { createContext, useState, useEffect, useMemo } from "react";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {
  const [students, setStudents] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);
  const [notices, setNotices] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [addedFees, setAddedFees] = useState([]);
  const [categories,setCategories] = useState([]);
  const [departments,setDepartments] = useState([]);
  const [examNames,setExamNames] = useState([]);
  const API_BASE_URL = "http://localhost:8080/api/v1/admin";

  const getData = async (endpoint, setter) => {
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
        setter(data.data);
      } else {
        console.warn(`No data received for ${endpoint}`);
      }
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      alert(`Error fetching ${endpoint}`);
    }
  };

  useEffect(() => {
    getData("getstudent", setStudents);
    getData("getpicture", setPictures);
    getData("getvideo", setVideos);
    getData("getnotice", setNotices);
    getData("getteacher", setTeachers);
    getData("getallroutine", setRoutines);
    getData("getaddedfee", setAddedFees);
    getData("getdepartment",setDepartments);
    getData("getcategory",setCategories);
    getData("getexamname",setExamNames);
  }, []);

  const contextValue = useMemo(() => ({
    students, pictures, videos, routines, teachers, addedFees, notices, departments,categories,examNames
  }), [students, pictures, videos, routines, teachers, addedFees, notices]);

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
