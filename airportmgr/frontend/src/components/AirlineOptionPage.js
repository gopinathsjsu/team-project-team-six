import React, { Component } from "react";

export default class AirlineOptionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() 
  {
    return (
      <div className="AirlineOptionPage" style={{alignItems:'center'}}>
      <h2 style={{textAlign : 'center'}}>Hello user! Choose one of the below option:</h2>
      <button variant="contained" style={{height:"38px", fontSize:"12px", color: 'red' }}> Add flight information </button>
      <button variant="contained" style={{height:"38px", fontSize:"12px", color: 'red', marginLeft :"100px"}}> Change flight information </button>
    </div>
    );
  }
}