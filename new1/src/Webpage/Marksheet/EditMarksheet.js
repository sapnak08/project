import axios from "axios";
import React, { Component } from "react";

export default class EditMarksheet extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        studentId: '', 
        rollNo: '',
        physics: '',
        chemistry: '',
        maths: '',
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
      .get("https://manraj-ors-1.onrender.com/marksheet/" + this.pid)
      .then((response) => {
        console.log("response", response.data);
        this.setState({
            name: response.data.name,
            studentId: response.data.studentId,
            rollNo: response.data.rollNo,
            physics: response.data.physics,
            chemistry: response.data.chemistry,
            maths: response.data.maths,
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
      .put("https://manraj-ors-1.onrender.com/marksheet/" + this.pid, this.state)
      .then((response) => {
        console.log("response", response);
        if (response.status === 200 ) {
          this.setState({ msg: "Data sucessfully updated!!" })
        }
      })
      .catch((error) => {
        console.log("I am catch error : ");
        // this.setState({ msg: "I am catch error /  Server down" });
      });
  };

  render() {
    return (
      <div className="form-div">
      <h1 className='btn-adduser'>Edit Marksheet</h1>
      <form className='form-post'>

        <label htmlFor="name">name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          id="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        <label htmlFor="studentId">studentId</label>
        <input
          type="text"
          placeholder="Enter your studentId"
          name="studentId"
          id="studentId"
          value={this.state.studentId}
          onChange={(e) => this.setState({ studentId: e.target.value })}
        />
        
        <label htmlFor="rollNo">rollNo</label>
        <input
          type="text"
          placeholder="Enter your rollNo"
          name="rollNo"
          id="rollNo"
          value={this.state.rollNo}
          onChange={(e) => this.setState({ rollNo: e.target.value })}
        />
        <label htmlFor="physics">physics </label>
        <input
          type="text"
          placeholder="Enter your physics"
          name="physics"
          id="physics"
          value={this.state.physics}
          onChange={(e) => this.setState({ physics: e.target.value })}
        />

        <label htmlFor="chemistry">chemistry</label>
        <input
          type="text"
          placeholder="Enter your chemistry"
          name="chemistry"
          id="chemistry"
          value={this.state.chemistry}
          onChange={(e) => this.setState({ chemistry: e.target.value })}
        />

        <label htmlFor="maths">maths </label>
        <input
          type="number"
          name="maths"
          id="maths"
          // autoComplete="currentPassword"
          value={this.state.maths}
          onChange={(e) => this.setState({ maths: e.target.value })}
        />
        
        <button className='btn-submit'onClick={this.handleEdit}>Submit</button>
        {!this.state.error && this.state.msg && <p style={{ color: "red",margin:"0" }}>{this.state.msg}&#128077;</p>}
        </form>
      </div>
    );
  }
}