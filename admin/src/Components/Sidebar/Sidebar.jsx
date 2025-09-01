import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addpicture"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Picture</p>
        </div>
      </Link>
      <Link to={"/addvideo"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Video</p>
        </div>
      </Link>
      <Link to={"/addnotice"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Notice</p>
        </div>
      </Link>
      <Link to={"/addteacher"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Teacher</p>
        </div>
      </Link>
      <Link to={"/addstudent"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Student</p>
        </div>
      </Link>
      <Link to={"/addfee"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Fee</p>
        </div>
      </Link>
      <Link to={"/addroutine"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Routine</p>
        </div>
      </Link>
      <Link to={"/addadmitcard"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Admit-Card</p>
        </div>
      </Link>
      <Link to={"/addmarks"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Result</p>
        </div>
      </Link>
      <Link to={"/addcertificate"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Certificate</p>
        </div>
      </Link>
      <Link to={"/addcategory"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Category</p>
        </div>
      </Link>
      <Link to={"/adddepartment"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Add Department</p>
        </div>
      </Link>
      <Link to={"/seedonation"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>See Donation</p>
        </div>
      </Link>
      <Link to={"/seefee"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>See Fees</p>
        </div>
      </Link>
      <Link to={"/addedfees"} style={{ textDecoration: "none" }}>
        <div className = "sidebar-item">
          <p>Added Fees</p>
        </div>
      </Link>
      <Link to={"/allpicture"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>All Picture</p>
        </div>
      </Link>
      <Link to={"/allvideo"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>All Video</p>
        </div>
      </Link>
      <Link to={"/allnotice"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>All Notice</p>
        </div>
      </Link>
      <Link to={"/allteachers"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>All Teachers</p>
        </div>
      </Link>
      <Link to={"/allstudents"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>All Students</p>
        </div>
      </Link>
      <Link to={"/allroutine"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>All Routine</p>
        </div>
      </Link>
      <Link to={"/addexamname"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Exam Name</p>
        </div>
      </Link>
      
      <Link to={"/editcontact"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <p>Edit Contact</p>
        </div>
      </Link>
      
     
      
    </div>
  );
};

export default Sidebar;
