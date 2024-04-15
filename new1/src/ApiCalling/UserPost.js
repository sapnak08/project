import React, { Component } from "react";
// import "./Api.css";
import axios from "axios";

export default class UserPost extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      loginId: "",
      lastName: "",
      roleId: "",
      password: "",
      msg: ""
    };
  }
  handleForm = (event) => {
    event.preventDefault();
    console.log(
      "Handle form",
      this.state.firstName,
      this.state.loginId,
      this.state.roleId
    );
    axios
      .post("https://manraj-ors-1.onrender.com/user", this.state)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("I am catch error : ");
        this.setState({ msg: "I am catch error /  Server down" });
      });
  };
  handleUpdate = (event) => {
    event.preventDefault();
    console.log(
      "Handle update",
      this.state.firstName,
      this.state.loginId,
      this.state.roleId
    );
    axios
      .put("https://manraj-ors-1.onrender.com/user/65f7e5e5b26299e2593bc78f", this.state)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("I am catch error : ");
        this.setState({ msg: "I am catch error /  Server down" });
      });
  };
  handleDelete = (event) => {
    event.preventDefault();
    console.log(
      "Handle Delete",
      this.state.firstName,
      this.state.loginId,
      this.state.roleId
    );
    axios
      .delete("https://manraj-ors-1.onrender.com/user/65f7e5e5b26299e2593bc78f")
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("I am catch error : ");
        this.setState({ msg: "I am catch error /  Server down" });
      });
  };
  nameFun = (event) => {
    console.log("first", event.target.value);
    let data = event.target.name;
    this.setState({ [data]: event.target.value });
  };

  render() {
    return (
      <div >
        <h1>This is my form</h1>
        <p style={{ color: "red" }}>{this.state.msg}</p>
        <form >
          <label htmlFor="firstname">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="firstName"
            id="firstname"
            value={this.state.firstName}
            // onChange={(event)=>this.setState({firstname : event.target.value})}
            onChange={this.nameFun}
          />
          <br />
          <br />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="lastName"
            id="lastName"
            value={this.state.lastName}
            // onChange={(event) =>
            //   this.setState({ lastName: event.target.value })
            // }
            onChange={this.nameFun}
          />
          <br />
          <br />
          <label htmlFor="email">LOGINID :</label>
          <input
            type="text"
            placeholder="Enter your loginid"
            name="loginId"
            id="loginid"
            value={this.state.loginId}
            // onChange={(event) => this.setState({ loginId: event.target.value })}
            onChange={this.nameFun}
          />
          <br />
          <br />
          <br />
          <label htmlFor="roleid">ROLEID :</label>
          <input
            type="text"
            placeholder="Enter your roleid"
            name="roleId"
            id="roleid"
            value={this.state.roleId}
            // onChange={(event) => this.setState({ roleId: event.target.value })}
            onChange={this.nameFun}
          />
          <br />
          <br />
          <label htmlFor="pass">Password :</label>
          <input
            type="password"
            name="password"
            id="pass"
            autoComplete="currentPassword"
            value={this.state.password}
            // onChange={(event) =>
            //   this.setState({ password: event.target.value })
            // }
            onChange={this.nameFun}
          /><br></br>
          <button onClick={this.handleForm}>Submit</button><br></br>
          <button onClick={this.handleUpdate}>Update</button>
          <button onClick={this.handleDelete}>Delete</button>
        </form>
      </div>
    );
  }
}
