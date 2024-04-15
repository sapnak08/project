import React, { Component } from "react";
// import "./Api.css";
import axios from "axios"

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  apiCalling = () => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((re) => {
    //     console.log(re);
    //     this.setState({ data: re });
    //   });
    axios.get("https://manraj-ors-1.onrender.com/user").then((result)=>{console.log("Axios :",result.data)
    this.setState({data:result.data})

  })
  };
  componentDidMount() {
    this.apiCalling();
  }
  handleEdit=(id)=>{
    console.log("handleedit")
    axios
    .put("https://manraj-ors-1.onrender.com/user", this.state.data)
    .then((response) => {
      console.log("response", response);
    })
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>USER DATA</h1>
        <table border="1">
          <thead >
            <tr>
            {/* <th>ID</th> */}
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>LOGINID</th>
            <th>password</th>
            <th>ROLL ID</th>
            <th>Actions</th>
            {/* <th>DOB</th> */}
              
            </tr>
          </thead>
          <tbody >
            {this.state.data &&
              this.state.data.map((item, i) => {
                // console.log(":-",item)
                return (
                  <tr key={i}>
                    {/* <td>{item._id}</td> */}
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.loginId}</td>
                    <td>{item.password}</td>
                    <td>{item.roleId}</td>
                    {/* <td>{item.dob}</td> */}
                    <td>
                      <button onClick={this.handleEdit}>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}