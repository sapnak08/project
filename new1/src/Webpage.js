import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Webpage/Home";
import Marksheet from "./Webpage/Marksheet";
import "./Webpage/nav.css";
// import "./Webpage/navbar.css"
// import "./Webpage/dashboard.css"
import UserGet from "./Webpage/User/UserGet";
import UserPost1 from "./Webpage/User/UserPost1";
import CollegePost from "./Webpage/College/CollegePost";
import Navbar from "./Webpage/Navbar";
import Collegeget from "./Webpage/College/Collegeget";
import { useState } from "react";
import Edit from "./Webpage/User/Edit";
import RoleGet from "./Webpage/Role/RoleGet";
import RolePost from "./Webpage/Role/RolePost";
import EditCollege from "./Webpage/College/EditCollege";
import EditRole from "./Webpage/Role/EditRole";
import StudentPost from "./Webpage/Student/StudentPost";
import StudentGet from "./Webpage/Student/StudentGet";
import EditStudent from "./Webpage/Student/EditStudent";
import Login from "./Webpage/Login";
import Registration from "./Webpage/Registration";
import MarksheetGet from "./Webpage/Marksheet/MarksheetGet";
import MarksheetPost from "./Webpage/Marksheet/MarksheetPost";
import EditMarksheet from "./Webpage/Marksheet/EditMarksheet";
// import Navbar1 from './Webpage/Navbar1';
// import Dashboard from "./Webpage/Dashboard"

export default function Webpage() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`container ${theme}`}>
      <BrowserRouter>
        {/* <h1>Web page</h1> */}

        <Navbar theme={theme} setTheme={setTheme} />

        {/* <Navbar1 theme={theme} setTheme={setTheme}/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Userget" element={<UserGet />} />
          <Route path="/Userpost1" element={<UserPost1 />} />
          <Route path="/edit/:id" element={<Edit />} />

          <Route path="/Collegeget" element={<Collegeget />} />
          <Route path="/Collegepost" element={<CollegePost />} />
          <Route path="/editcollege/:id" element={<EditCollege />} />

          <Route path="/Marksheet" element={<Marksheet />} />
          <Route path="/Marksheetget" element={<MarksheetGet />} />
          <Route path="/Marksheetpost" element={<MarksheetPost />} />
          <Route path="/editmarksheet/:id" element={<EditMarksheet />} />

          <Route path="/Roleget" element={<RoleGet />} />
          <Route path="/Rolepost" element={<RolePost />} />
          <Route path="/editrole/:id" element={<EditRole />} />

          <Route path="/Studentpost" element={<StudentPost />} />
          <Route path="/Studentget" element={<StudentGet />} />
          <Route path="/editstudent/:id" element={<EditStudent />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
