import React, { Component } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class MarksheetGet extends Component {
  constructor() {
    super();
    this.state = {
      data: [], 
    };
  }
  apiCalling = () => {
    axios.get("https://manraj-ors-1.onrender.com/marksheet").then((result)=>{console.log("Axios :",result.data)
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
    axios.delete(`https://manraj-ors-1.onrender.com/marksheet/${id}`)
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
        <h1 style={{margin:"5px"}}>MARKSHEET LIST</h1>
        <table className="gettable" border="1">
          <thead >
            <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>NAME</th>
            <th>STUDENT ID</th>
            <th>ROLL NO</th>
            <th>PHYSICS</th>
            <th>CHEMISTRY</th>
            <th>MATHS</th>
            <th>ACTIONS</th>
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
                    <td>{item.name}</td>
                    <td>{item.studentId}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.physics}</td>
                    <td>{item.chemistry}</td>
                    <td>{item.maths}</td>
                    <td>
                      {/* <button className='btn-edit'><Link to={`/editcollege/${item._id }`} >Edit </Link></button> */}
                      <button className='btn-dlt' onClick={()=>this.handleDelete(item._id)}>Delete</button>
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