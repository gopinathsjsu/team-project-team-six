import React, { Component } from "react";

export default class AirlineOptionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() 
  {
    return (
      <div className="AirlineOptionPage">
      <h2>Hello user! Choose one of the below option:</h2>
      <button variant="contained"> Add flight information </button>
      <button variant="contained"> Change flight information </button>
    </div>
    );
  }
}