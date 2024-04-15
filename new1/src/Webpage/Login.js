import React, { Component } from "react";
import axios from 'axios';


export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginId: "",
      password: "",
      error: false,
      msg: "",
    };
  }
  handleReset =(event)=>{
    event.preventDefault();
    this.setState({loginId:"",password:"",msg: "",error: false,})
    console.log("reset")
  }


  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Handle submit",this.state.loginId,this.state.password);
    axios
      .post("https://manraj-ors-1.onrender.com/login", 
      {loginId:this.state.loginId,password:this.state.password})
      .then((response) => {
        console.log("response", response);
        if (response.data.message === 'Enter LoginId And Password') {
            this.setState({
               msg:response.data.result,
                error: true,
            })
        
          } else if (response.data.message === 'No result found') {
            this.setState({
                msg:response.data.message,
                error:true,
            })
          } else {
            localStorage.setItem("user", JSON.stringify(response.data));
            this.setState({msg:"",error:false})
            window.location.pathname ="/home"
          }
      })
  };
  render() {
    return (
      <div className="form-div" >
        <h1 className='btn-adduser'>LOGIN HERE</h1>
        {this.state.error && this.state.msg &&<p className="edit-msg">{this.state.msg} &#128577; </p>}
        <form className='form-post'>
          <label htmlFor="loginId"> loginId</label>
          <input
            type="text"
            placeholder="Enter your loginId"
            name="loginId"
            id="loginId"
            value={this.state.loginId}
            onChange={(event) => this.setState({ loginId: event.target.value })}
          />
          {this.state.error && !this.state.loginId && <p style={{color:"red",margin:"0px"}}>must not be empty</p>}
          <br />

          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            autoComplete="currentPassword"
            value={this.state.password}
            onChange={(event) =>  this.setState({ password: event.target.value })}
          />
          {this.state.error && !this.state.password && <p style={{color:"red",margin:"0px"}}>must not be empty</p>}
          <br />
          <div>
          <button className="btn-submit" onClick={this.handleSubmit}> Submit</button>
          <button className='btn-submit' onClick={this.handleReset}>Reset</button>
          </div>
          <br></br>
        </form>
      </div>
    );
  }
}
