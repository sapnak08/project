import React from "react";
import { Link } from "react-router-dom";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import { useNavigate } from "react-router-dom";
// import name from "../assets/night.png";

export default function Navbar({ theme, setTheme }) {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  let auth = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div >
      <ul className="dropdown">
        {/* <li>
          {" "}
          <img className="nav-img" src={name} alt=""></img>
        </li> */}
        {!auth ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registration</Link>
            </li>
            <img
              onClick={() => {
                toggle_mode();
              }}
              src={theme === "light" ? toggle_light : toggle_dark}
              alt=""
              className="toggle-icon"
            ></img>
          </>
        ) : (
          <>
            <li className="dropdown-1">
              <Link to="/home">Home</Link>
            </li>

            <li className="dropdown-1">
              <Link to="user" >User</Link>
              <div className="dropdown-content">
                <Link to="/userpost1">Add user</Link>
                <Link to="/userget">User List</Link>
              </div>
            </li>

            <li className="dropdown-1">
              <Link to="college">College</Link>
              <div className="dropdown-content">
                <Link to="/Collegelist">Add College</Link>
                <Link to="/Collegeget">College List</Link>
              </div>
            </li>

            <li className="dropdown-1">
              <Link to="/Marksheet">Marksheet</Link>
              <div className="dropdown-content">
                <Link to="/marksheetpost">Add Marksheet</Link>
                <Link to="/marksheetget">Marksheet List</Link>
              </div>
            </li>

            <li className="dropdown-1">
              <Link to="role">Role</Link>
              <div className="dropdown-content">
                <Link to="/Rolepost">Add Role</Link>
                <Link to="/Roleget">Role List</Link>
              </div>
            </li>

            <li className="dropdown-1">
              <Link to="student">Student</Link>
              <div className="dropdown-content">
                <Link to="/Studentpost">Add Student</Link>
                <Link to="/studentget">Student List</Link>
              </div>
            </li>
            <li>
              <button className="btn-logout" onClick={handleLogout}>
                <Link to="/logout">Logout({auth.firstName})</Link>
              </button>
            </li>
            <img
              onClick={() => {
                toggle_mode();
              }}
              src={theme === "light" ? toggle_light : toggle_dark}
              alt=""
              className="toggle-icon"
            ></img>
          </>
        )}
      </ul>
    </div>
  );
}
