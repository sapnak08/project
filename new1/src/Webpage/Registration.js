import React, { Component } from 'react';
import axios from "axios";


export default class Registration extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      loginId: "",
      password: "",
      roleId: "",
      msg: "",
      error: false,
    };
  }
  handleReset =(event)=>{
    event.preventDefault();
    this.setState({
    firstName: "",
    lastName: "",
    loginId: "",
    password: "",
    roleId: "",
    msg: "",})
    console.log("reset")
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(
    //   "Handle submit",
    //   this.state.firstName,
    // );
    axios
      .post("https://manraj-ors-1.onrender.com/user", this.state)
      .then((response) => {
        console.log("response", response);
        if (
          !this.state.firstName ||
          !this.state.lastName ||
          !this.state.loginId ||
          !this.state.password ||
          !this.state.roleId
        ) {
          // console.log("error ,Must not be empty");
          this.setState({msg:"must not be empty"})
          this.setState({ error: true });
        }
        else if (response.status === 200 ) {
        this.setState({ msg: "Data sucessfully updated" })
          window.location.pathname ="/login";
        }
        
      })
  };  
  render() {
    return (
      <div className="form-div">
        <h1 className='btn-adduser'>Registration form</h1>
        <form className="form-post">
          <label htmlFor="firstname">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={(event)=>this.setState({firstName : event.target.value})}
          />
          {this.state.error && !this.state.firstName && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          
        <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="lastName"
            id="lastName"
            value={this.state.lastName}
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          />
          {this.state.error && !this.state.lastName && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          
          <label htmlFor="loginId">LoginId</label>
          <input
            type="text"
            placeholder="Enter your loginId"
            name="loginId"
            id="loginId"
            value={this.state.loginId}
            onChange={(event) => this.setState({ loginId: event.target.value })}
          />
          {this.state.error && !this.state.loginId && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          
        

          <label htmlFor="roleId">RoleId</label>
          <input
            type="text"
            placeholder="Enter your roleId"
            name="roleId"
            id="roleId"
            value={this.state.roleId}
            onChange={(event) => this.setState({ roleId: event.target.value })}
          />
          {this.state.error && !this.state.roleId && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          

          <label htmlFor="pass">Password </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="pass"
            autoComplete="currentPassword"
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          {this.state.error && !this.state.password && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          <div>
          <button className="btn-submit" onClick={this.handleSubmit}> Submit </button>
          <button className='btn-submit' onClick={this.handleReset}>Reset</button>
          </div>
          {!this.state.error && <p style={{ color: "red",margin:"0" }}>{this.state.msg}&#128077;</p>}
         
        </form>

      </div>
    )
  }
}
