import React, { Component } from 'react'
import axios from 'axios';

export default class MarksheetPost extends Component {
    constructor() {
        super();
    
        this.state = {
            name: '',
            studentId: '',
            rollNo: '',
            physics: '',
            chemistry: '',
            maths: '',
            msg: '',
            error: false
        };
      }
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(
          "Handle submit",
          this.state.collegeName,
        );
        axios
          .post("https://manraj-ors-1.onrender.com/marksheet", this.state)
          .then((response) => {
            console.log("response", response);
            if (
              !this.state.name ||
              !this.state.studentId ||
              !this.state.rollNo ||
              !this.state.physics ||
              !this.state.chemistry||
              !this.state.maths
            ) {
              this.setState({msg:"must not be empty"})
              this.setState({ error: true });
            }else if(response.data.message === "StudentId / roll number alredy exist"){
              this.setState({message :"StudentId / roll number alredy exist"})
              this.setState({error:true})
    
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
      handleReset =(event)=>{
        event.preventDefault();
        this.setState({
          name: '',
            studentId: '',
            rollNo: '',
            physics: '',
            chemistry: '',
            maths: '',
            msg: '',
            error: false
        })
        console.log("reset")
      }
    
      render() {
        return (
          <div className="form-div">
            <h1 className='btn-adduser'>Add Mark here</h1>
            {this.state.error &&  <p style={{ color: "red" ,margin:"0"}}>{this.state.message}</p>}
            <form className='form-post'>
              <label htmlFor="name"> Student Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
                value={this.state.name}
                // onChange={(event)=>this.setState({firstname : event.target.value})}
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.name && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
              
              <label htmlFor="studentId">StudentId</label>
              <input
                type="text"
                placeholder="Enter your studentId"
                name="studentId"
                id="studentId"
                value={this.state.studentId}
                // onChange={(event) =>
                //   this.setState({ lastName: event.target.value })
                // }
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.studentId && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

              
              <label htmlFor="rollNo">RollNo </label>
              <input
                type="text"
                placeholder="Enter your rollNo"
                name="rollNo"
                id="rollNo"
                value={this.state.rollNo}
                // onChange={(event) => this.setState({ loginId: event.target.value })}
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.rollNo && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

              
              <label htmlFor="physics">Physics</label>
              <input
                type="number"
                placeholder="Enter your physics"
                name="physics"
                id="physics"
                value={this.state.physics}
                // onChange={(event) => this.setState({ roleId: event.target.value })}
                onChange={this.nameFun}
              />
              {this.state.error && !this.state.physics && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

               <label htmlFor="chemistry">Chemistry </label>
              <input
                type="number"
                placeholder="Enter your chemistry"
                name="chemistry"
                id="chemistry"
                value={this.state.chemistry}
                // onChange={(event) =>
                //   this.setState({ password: event.target.value })
                // }
                onChange={this.nameFun}
              />
               {this.state.error && !this.state.chemistry && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}

               <label htmlFor="maths">Maths </label>
              <input
                type="number"
                placeholder="Enter your maths"
                name="maths"
                id="maths"
                value={this.state.maths}
                // onChange={(event) =>
                //   this.setState({ password: event.target.value })
                // }
                onChange={this.nameFun}
              />
               {this.state.error && !this.state.maths && <p style={{ color: "red" ,margin:"0"}}>{this.state.msg}</p>}
               <div>
              <button className='btn-submit' onClick={this.handleSubmit}>Submit</button>
              <button className='btn-submit' onClick={this.handleReset}>Reset</button>
              </div>
              {!this.state.error && this.state.msg && <p style={{ color: "red",margin:"0" }}>{this.state.msg}&#128077;</p>}
              
            </form>
          </div>
        );
      }
}