import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(){
        super();
        this.state ={favoritecolor:"green",color:"green"};
        console.log("first constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("first",state.color)
        // return null;
        return {favoritecolor:props.color};
        // return {favoritecolor:state.color};
    }
    changeState =()=>{
        console.warn("changestate")
        this.setState({favoritecolor:"black",color:"black"})

    }
  render() {
    return (
      <div>
        <h1>
        My favoritecolor is <span style={{backgroundColor:this.state.favoritecolor}}>{this.state.favoritecolor }</span> 
         and color :-<span style={{backgroundColor:this.state.color,color:"white"}}>{this.state.color}</span>
        </h1> 
        <button onClick={this.changeState}>Click to change state</button>
      </div>
    )
  }
}
