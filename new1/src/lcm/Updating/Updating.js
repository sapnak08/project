import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props){
        super(props);
        this.state ={color:"yellow"};
        console.log("m1 constructor:-",this.state.color)
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProp:-",state.color)
        return {color:props.mycolor};
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate:-")
        return true;
    }
    changeColor =()=>{
        this.setState({color:"blue"})
        console.warn("changecolor",this.state.color)
    }
  render() {
    console.log("render",this.state.color)
    return (
      <div>
        <h1>my favorite color is <span style={{background:this.state.color}}>{this.state.color}</span></h1>
        <button type='button' onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}
