import axios from "axios";
import React, { Component } from "react";

export default class EditCollege extends Component {
  constructor() {
    super();
    this.state = {
      collegeName: "",
      address: "",
      city: "",
      state: "",
      mobileNo: "",
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
      .get("https://manraj-ors-1.onrender.com/college/" + this.pid)
      .then((response) => {
        console.log("response", response.data);
        this.setState({
            collegeName: response.data.collegeName,
            address: response.data.address,
            city: response.data.city,
            state: response.data.state,
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
      .put("https://manraj-ors-1.onrender.com/college/" + this.pid, this.state)
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
      <h1 className='btn-adduser'>Edit College</h1>
      <form className='form-post'>

        <label htmlFor="collegeName">collegeName</label>
        <input
          type="text"
          placeholder="Enter your collegeName"
          name="collegeName"
          id="collegeName"
          value={this.state.collegeName}
          onChange={(e) => this.setState({ collegeName: e.target.value })}
        />
        <br />

        <label htmlFor="address">address</label>
        <input
          type="text"
          placeholder="Enter your address"
          name="address"
          id="address"
          value={this.state.address}
          onChange={(e) => this.setState({ address: e.target.value })}
        />
        <br />
        <label htmlFor="city">city </label>
        <input
          type="text"
          placeholder="Enter your city"
          name="city"
          id="city"
          value={this.state.city}
          onChange={(e) => this.setState({ city: e.target.value })}
        />
        <br />

        <label htmlFor="state">state</label>
        <input
          type="text"
          placeholder="Enter your state"
          name="state"
          id="state"
          value={this.state.state}
          onChange={(e) => this.setState({ state: e.target.value })}
        />
        <br />

        <label htmlFor="mobileNo">mobileNo </label>
        <input
          type="number"
          name="mobileNo"
          id="mobileNo"
          // autoComplete="currentPassword"
          value={this.state.mobileNo}
          onChange={(e) => this.setState({ mobileNo: e.target.value })}
        />
        <br></br>
        <button className='btn-submit'onClick={this.handleEdit}>Submit</button>
        <br></br>
        </form>
      </div>
    );
  }
}