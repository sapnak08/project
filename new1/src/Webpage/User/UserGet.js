import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class UserGet extends Component {
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
  handleDelete = (id) => {
    console.log(
      "Handle Delete",
      this.state.firstName,
      id
    );
    axios.delete(`https://manraj-ors-1.onrender.com/user/${id}`)
      .then((response) => {
        console.log("response", response);
        this.apiCalling();
      })
      .catch((error) => {
        console.log("I am catch error : ",error);
      });
  };
  render() {
    console.log(this.state.data);
    return (
      <div className='get'>
        <h1 style={{margin:"5px"}} >LIST OF USERS</h1>
        <table className="gettable" border="1">
          <thead >
            <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>LOGINID</th>
            <th>PASSWORD</th>
            <th>ROLL ID</th>
            <th>ACTIONS</th>
           
            {/* <th>DOB</th> */}
              
            </tr>
          </thead>
          <tbody >
            {this.state.data &&
              this.state.data.map((item, i) => {
                // console.log(":-",item)
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.loginId}</td>
                    <td>{item.password}</td>
                    <td>{item.roleId}</td>
                    <td>
                      <button className='btn-edit'><Link to={`/edit/${item._id }`} >Edit </Link></button>
                      <button className='btn-dlt' onClick={()=>this.handleDelete(item._id)}>Delete</button>
                    </td>
                    {/* <td>{item.dob}</td> */}
                     
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
