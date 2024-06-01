import React from "react";
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
// import { useNavigate } from "react-router-dom";
// import name from "../assets/night.png";

export default function Navbar1({ theme, setTheme }) {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const[clicked,setClicked]=useState(false);

   const handleClick=()=>{
    setClicked(!clicked)
  };

  let auth = JSON.parse(localStorage.getItem("user"));

  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   console.log("logout");
  //   localStorage.clear();
  //   navigate("/login");
  // };

  return (
      <nav>
        <a className="logo" href="/index.html"><svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> </svg></a>
      <div className="navbar">
      <ul className={clicked ? "dropdown active" : "dropdown"}>
    
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registration</Link>
            </li>
            
          
            <li className="dropdown-1">
              <Link to="/">Home</Link>
            </li>

            <li className="dropdown-1">
              <NavLink to="user" >User</NavLink>
              <div className="dropdown-content">
                <Link to="/userpost1">Add user</Link>
                <Link to="/userget">User List</Link>
              </div>
            </li>

            <li className="dropdown-1">
              <NavLink to="college">College</NavLink>
              {/* <div className="dropdown-content">
                <Link to="/Collegepost">Add College</Link>
                <Link to="/Collegeget">College List</Link>
              </div> */}
            </li>

            <li className="dropdown-1">
              <NavLink to="/Marksheet">Marksheet</NavLink>
              {/* <div className="dropdown-content">
                <Link to="/marksheetpost">Add Marksheet</Link>
                <Link to="/marksheetget">Marksheet List</Link>
              </div> */}
            </li>

            <li className="dropdown-1">
              <NavLink to="role">Role</NavLink>
              {/* <div className="dropdown-content">
                <Link to="/Rolepost">Add Role</Link>
                <Link to="/Roleget">Role List</Link>
              </div> */}
            </li>

            <li className="dropdown-1">
              <NavLink to="student">Student</NavLink>
              {/* <div className="dropdown-content">
                <Link to="/Studentpost">Add Student</Link>
                <Link to="/studentget">Student List</Link>
              </div> */}
            </li>
            <li>
              <button className="btn-logout" >
                <Link to="/logout">Logout({auth.firstName})</Link>
              </button>
            </li>
            <li>
            <img
              onClick={() => {
                toggle_mode();
              }}
              src={theme === "light" ? toggle_light : toggle_dark}
              alt=""
              className="toggle-icon"
            ></img>
            </li>
        
      </ul>
      </div>
      {/* <div id="mobile">
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div> */}
      <div id="mobile" onClick={handleClick}>
        <i className={clicked ?"fas fa-times":"fas fa-bars"}></i>

      </div>
    </nav>
  );
}