import React, { Component } from "react";
import axios from "axios";

export default class UserPost1 extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      loginId: "",
      lastName: "",
      roleId: "",
      password: "",
      msg: "",
      error: false,
    };
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
        // if(!this.state.firstName && !this.state.lastName &&!this.state.loginId && !this.state.password&&!this.state.roleId){
        //   console.log("Must not be empty")
        // }
        if (
          !this.state.firstName ||
          !this.state.lastName ||
          !this.state.loginId ||
          !this.state.password ||
          !this.state.roleId
        ) {
          this.setState({msg:"must not be empty"})
          this.setState({ error: true });
        }else if (response.status === 200 ) {
          
          this.setState({ msg: "Data sucessfully updated!! "})
        }
        console.log("response", response);
        // this.setState({ msg: 'Enter LoginId And Password', error: true });
        // this.setState({
        //   firstName: "",
        //   loginId: "",
        //   lastName: "",
        //   roleId: "",
        //   password: "",
        // });
      });
  };
  // handleUpdate = (event) => {
  //   event.preventDefault();
  //   console.log(
  //     "Handle update",
  //     this.state.firstName,
  //     this.state.loginId,
  //     this.state.roleId
  //   );
  //   axios
  //     .put("https://manraj-ors-1.onrender.com/user/65f7e5e5b26299e2593bc78f", this.state)
  //     .then((response) => {
  //       console.log("response", response);
  //     })
  //     .catch((error) => {
  //       console.log("I am catch error : ");
  //       this.setState({ msg: "I am catch error /  Server down" });
  //     });
  // };
  // handleDelete = (event) => {
  //   event.preventDefault();
  //   console.log(
  //     "Handle Delete",
  //     this.state.firstName,
  //     this.state.loginId,
  //     this.state.roleId
  //   );
  //   axios
  //     .delete("https://manraj-ors-1.onrender.com/user/65f7e5e5b26299e2593bc78f")
  //     .then((response) => {
  //       console.log("response", response);
  //     })
  //     .catch((error) => {
  //       console.log("I am catch error : ");
  //       this.setState({ msg: "I am catch error /  Server down" });
  //     });
  // };
  nameFun = (event) => {
    console.log("first", event.target.value);
    let data = event.target.name;
    this.setState({ [data]: event.target.value });
  };

  handleReset =(event)=>{
    event.preventDefault();
    this.setState({
      firstName: "",
      loginId: "",
      lastName: "",
      roleId: "",
      password: "",
      msg: "",
      error: false,
    })
    console.log("reset")
  }
  render() {
    return (
      <div className="form-div">
        <h1 className="btn-adduser">Add User here</h1>
        <form className="form-post">
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
          {this.state.error && !this.state.firstName && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

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
          {this.state.error && !this.state.lastName && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

          <label htmlFor="loginId">LoginId</label>
          <input
            type="text"
            placeholder="Enter your loginId"
            name="loginId"
            id="loginId"
            value={this.state.loginId}
            // onChange={(event) => this.setState({ loginId: event.target.value })}
            onChange={this.nameFun}
          />
          {!this.state.loginId && this.state.error && (
            <p style={{ color: "red",margin:"0" }}>must not be empty</p>
          )}

          <label htmlFor="roleId">RoleId</label>
          <input
            type="text"
            placeholder="Enter your roleId"
            name="roleId"
            id="roleId"
            value={this.state.roleId}
            // onChange={(event) => this.setState({ roleId: event.target.value })}
            onChange={this.nameFun}
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
            // onChange={(event) =>
            //   this.setState({ password: event.target.value })
            // }
            onChange={this.nameFun}
          />
         {this.state.error && !this.state.password && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          <div>
          <button className="btn-submit" onClick={this.handleSubmit}>Submit</button>
          <button className='btn-submit' onClick={this.handleReset}>Reset</button>
          </div>
         {!this.state.error && this.state.msg && <p style={{ color: "red",margin:"0" }}>{this.state.msg}&#128077;</p>}
        </form>
      </div>
    );
  }
}
