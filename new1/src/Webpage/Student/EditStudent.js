import axios from "axios";
import React, { Component } from "react";

export default class EditStudent extends Component {
  constructor() {
    super();
    this.state = {
        firstName: "",
        lastName: "",
        emailId: "",
        collegeId: "",
        mobileNo: "",
        msg: ""
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
      .get("https://manraj-ors-1.onrender.com/student/" + this.pid)
      .then((response) => {
        console.log("response", response.data);
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          emailId: response.data.emailId,
          collegeId: response.data.collegeId,
          mobileNo: response.data.mobileNo,
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
      .put("https://manraj-ors-1.onrender.com/student/" + this.pid, this.state)
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
        <h1 className='btn-adduser'>Edit student</h1>
        <form className='form-post'>
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
          <label htmlFor="emailId">emailId</label>
          <input
            type="text"
            placeholder="Enter your emailId"
            name="emailId"
            id="emailId"
            value={this.state.emailId}
            // onChange={(event) => this.setState({ loginId: event.target.value })}
            onChange={this.nameFun}
          />
          <br />
          
          <label htmlFor="collegeId">collegeId</label>
          <input
            type="text"
            placeholder="Enter your collegeId"
            name="collegeId"
            id="collegeId"
            value={this.state.collegeId}
            // onChange={(event) => this.setState({ roleId: event.target.value })}
            onChange={this.nameFun}
          />
          <br />
          
          <label htmlFor="mobileNo">mobileNo </label>
          <input
            type="mobileNo"
            name="mobileNo"
            placeholder="Enter your mobileNo"
            id="mobileNo"
            value={this.state.mobileNo}
            // onChange={(event) =>
            //   this.setState({ password: event.target.value })
            // }
            onChange={this.nameFun}
          /><br></br>
        <button className='btn-submit'onClick={this.handleEdit}>Submit</button>
        <br></br>
        </form>
      </div>
    );
  }
}