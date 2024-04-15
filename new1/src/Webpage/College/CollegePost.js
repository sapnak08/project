import React, { Component } from 'react'
import axios from 'axios';

export default class CollegePost extends Component {
    constructor() {
        super();
    
        this.state = {
          collegeName: "",
          address: "",
          city: "",
          state: "",
          mobileNo: "",
          msg: ""
        };
      }
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(
          "Handle submit",
          this.state.collegeName,
        );
        axios
          .post("https://manraj-ors-1.onrender.com/college", this.state)
          .then((response) => {
            console.log("response", response);
            if (
              !this.state.collegeName ||
              !this.state.address ||
              !this.state.city ||
              !this.state.state ||
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
          <div className="form-div">
            <h1 className='btn-adduser'>Add College here</h1>
            <form className='form-post'>
              <label htmlFor="collegeName"> College Name</label>
              <input
                type="text"
                placeholder="Enter your collegename"
                name="collegeName"
                id="collegeName"
                value={this.state.collegeName}
                // onChange={(event)=>this.setState({firstname : event.target.value})}
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.collegeName && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
              
              <label htmlFor="address">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                name="address"
                id="address"
                value={this.state.address}
                // onChange={(event) =>
                //   this.setState({ lastName: event.target.value })
                // }
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.address && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

              
              <label htmlFor="city">city </label>
              <input
                type="text"
                placeholder="Enter your city"
                name="city"
                id="city"
                value={this.state.city}
                // onChange={(event) => this.setState({ loginId: event.target.value })}
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.city && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

              
              <label htmlFor="state">state</label>
              <input
                type="text"
                placeholder="Enter your state"
                name="state"
                id="state"
                value={this.state.state}
                // onChange={(event) => this.setState({ roleId: event.target.value })}
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.state && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}&#128077;</p>}

              
              
              <label htmlFor="mobileNo">mobileNo </label>
              <input
                type="number"
                placeholder="Enter your mobileNo"
                name="mobileNo"
                id="mobileNo"
                value={this.state.mobileNo}
                // onChange={(event) =>
                //   this.setState({ password: event.target.value })
                // }
                onChange={this.nameFun}
              />
               {this.state.error && !this.state.mobileNo && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
               
              <button className='btn-submit' onClick={this.handleSubmit}>Submit</button><br></br>
              {!this.state.error && this.state.msg && <p style={{ color: "red",margin:"0" }}>{this.state.msg}&#128077;</p>}
              
            </form>
          </div>
        );
      }
}
