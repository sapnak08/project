import axios from "axios";
import React, { Component } from "react";

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      loginId: "",
      lastName: "",
      roleId: "",
      password: "",
      id: "",
      msg: "",
    };
    this.pid = window.location.pathname.split("/")[2];
    console.log("first", this.pid);
    if (this.pid) {
      this.getData();
    }
  }

  getData = () => {
    // event.preventDefault();
    console.log("Get adata", this.pid);
    axios
      .get("https://manraj-ors-1.onrender.com/user/" + this.pid)
      .then((response) => {
        console.log("response", response.data);
        this.setState({
          firstName: response.data.firstName,
          loginId: response.data.loginId,
          lastName: response.data.lastName,
          roleId: response.data.roleId,
          password: response.data.password,
          id: response.data._id,
        });
      })
      .catch((error) => {
        console.log("I am catch error : ");
        // this.setState({ msg: "I am catch error /  Server down" });
      });
  };


  handleEdit = (event) => {
    event.preventDefault();
    // console.log("Get adata", pid);
    axios
      .put("https://manraj-ors-1.onrender.com/user/" + this.pid, this.state)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("I am catch error : ");
        // this.setState({ msg: "I am catch error /  Server down" });
      });
  };

  render() {
    return (
      <div className="form-div">
        <h1 className='btn-adduser'>Edit user</h1>
        <form className='form-post'>
        <label htmlFor="firstname">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="firstName"
          id="firstname"
          value={this.state.firstName}
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <br />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="lastName"
          id="lastName"
          value={this.state.lastName}
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <br />
        <label htmlFor="email">LoginId</label>
        <input
          type="text"
          placeholder="Enter your loginid"
          name="loginId"
          id="loginid"
          value={this.state.loginId}
          onChange={(e) => this.setState({ loginId: e.target.value })}
        />
        <br />

        <label htmlFor="roleid">RoleId</label>
        <input
          type="text"
          placeholder="Enter your roleid"
          name="roleId"
          id="roleid"
          value={this.state.roleId}
          onChange={(e) => this.setState({ roleId: e.target.value })}
        />
        <br />

        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="password"
          id="pass"
          // autoComplete="currentPassword"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br></br>
        <button className='btn-submit'onClick={this.handleEdit}>Submit</button>
        <br></br>
        </form>
      </div>
    );
  }
}
