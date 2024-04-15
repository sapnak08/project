import React, { Component } from 'react'
import axios from 'axios';

export default class StudentPost extends Component {
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
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(
    //   "Handle submit",
    //   this.state.firstName,
    // );
    axios
      .post("https://manraj-ors-1.onrender.com/student", this.state)
      .then((response) => {
        console.log("response", response);
        if (
          !this.state.firstName ||
          !this.state.lastName ||
          !this.state.emailId ||
          !this.state.collegeId ||
          !this.state.mobileNo
        ) {
          this.setState({msg:"must not be empty"})
          this.setState({ error: true });
        }else if (response.status === 200 ) {
          
          this.setState({ msg: "Data sucessfully updated!!" })
        }
      })
  };  
  nameFun = (event) => {
    console.log("first", event.target.value);
    let data = event.target.name;
    this.setState({ [data]: event.target.value });
  };

  render() {
    return (
      <div className="form-div" >
        <h1 className='btn-adduser'>Add Student here</h1>
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
          {this.state.error && !this.state.emailId && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          
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
          {this.state.error && !this.state.collegeId && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          
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
          />
          {this.state.error && !this.state.mobileNo && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
          <button className='btn-submit' onClick={this.handleSubmit}>Submit</button>
          {!this.state.error && this.state.msg && <p style={{ color: "red",margin:"0" }}>{this.state.msg}&#128077;</p>}
        </form>
      </div>
    );
  }
}