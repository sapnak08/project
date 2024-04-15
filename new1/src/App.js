// import logo from './logo.svg';
// import './App.css';
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Contact from "./Component/Contact";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
// import Updating from "./lcm/Updating/Updating";
// import Mounting from "./lcm/Mounting/Getderivedststefromprops";
// import Csbu_cdm from "./lcm/Updating/Gsbu&cdm";
// import UserPractice from "./Component/UserPractice";
import User from "./ApiCalling/User";
import UserPost from "./ApiCalling/UserPost";


export default function App(){
return (
    <BrowserRouter>
       <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/userpractice">UserPractice</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
          {/* <li><Link to="/mounting">Mounting</Link></li>
          <li><Link to="/updating">Updating</Link></li> */}
          {/* <li><Link to="/csbu_cdm">Csbu_cdm</Link></li> */}
          <li><Link to="/user">User</Link></li>
          <li><Link to="/userpost">Userpost</Link></li>
          
        </ul>
    <h1>App page</h1>
    
    
     <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/userpractice" element={<UserPractice />}/>
        <Route path="/contact" element={<Contact />}/> */}
        {/* <Route path="/csbu_cdm" element={<Csbu_cdm />}/> */}
        {/* <Route path="/mounting" element={<Mounting color="red" />}/>
        <Route path="/updating" element={<Updating mycolor="red"/>}/> */}
        <Route path="/user" element={<User />}/>
        <Route path="/userpost" element={<UserPost />}/>
        
      
      </Routes>
  </BrowserRouter>
      
    
  );
}


