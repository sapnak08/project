import React, { Component } from 'react'

export default class Csbu_cdm extends Component {
    constructor(props){
        super(props);
        this.state ={
            favoritecolor:"blue"
        };
    }
    componentDidMount(){
        console.log("cdm",this.state.favoritecolor)
        this.setState({favoritecolor:"green"})
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate:-",prevProps,prevState)
        document.getElementById("div1").innerHTML ="before the update,the favorite was " + prevState.favoritecolor;
        return "sapna";
    }
  render() {
    return (
      <div>
        <h1>Get snapshot before update & Componentdid mount</h1>
        <div id="div1"></div>
      </div>
    )
  }
}
