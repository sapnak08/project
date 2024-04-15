import axios from "axios";
import React, { Component } from "react";

export default class EditRole extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        discription: "",
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
      .get("https://manraj-ors-1.onrender.com/role/" + this.pid)
      .then((response) => {
        console.log("response", response.data);
        this.setState({
            name: response.data.name,
            discription: response.data.discription,
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
      .put("https://manraj-ors-1.onrender.com/role/" + this.pid, this.state)
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
      <h1 className='btn-adduser' style={{marginBottom:"200px"}}>Edit Role</h1>
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
        <br />

        <label htmlFor="discription">discription</label>
        <input
          type="text"
          placeholder="Enter your discription"
          name="discription"
          id="discription"
          value={this.state.discription}
          onChange={(e) => this.setState({ discription: e.target.value })}
        />
        <br></br>
        <button className='btn-submit'onClick={this.handleEdit}>Submit</button>
        <br></br>
        </form>
      </div>
    );
  }
}