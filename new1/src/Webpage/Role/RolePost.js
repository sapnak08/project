import React, { Component } from 'react'
import axios from 'axios';

export default class RolePost extends Component {
    constructor() {
        super();
    
        this.state = {
          name: "",
        discription: "",
        // id: "",
        msg: "",
        };
      }
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(
          "Handle form",
          this.state.collegeName,
        );
        axios
          .post("https://manraj-ors-1.onrender.com/role", this.state)
          .then((response) => {
            console.log("response", response);
            if (
              !this.state.name ||
              !this.state.discription
            ) {
              this.setState({msg:"must not be empty"})
              this.setState({ error: true });
            }else if (response.status === 200 ) {
              
              this.setState({ msg: "Data sucessfully updated!!" })
            }
          })
          
      };
    
      render() {
        return (
          <div className="form-div">
            <h1 className='btn-adduser'>Add Role here</h1>
           <form className='form-post'>
            {/* <label htmlFor="id">id</label>
        <input
          type="text"
          placeholder="Enter your id"
          name="id"
          id="id"
          value={this.state.id}
          onChange={(e) => this.setState({ id: e.target.value })}
        /> */}
        <br />
            <label htmlFor="name">name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          id="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        {this.state.error && !this.state.name && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
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
        {this.state.error && !this.state.discription && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
        <br></br>
              <button className='btn-submit' onClick={this.handleSubmit}>Submit</button>
              {!this.state.error && this.state.msg && <p style={{ color: "red",margin:"0" }}>{this.state.msg}&#128077;</p>}
            </form>
          </div>
        );
      }
}