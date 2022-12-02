import React, { Component } from "react";

export default class AirportOptionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() 
  {
    return (
      <div className="AirportOptionPage">
      <h2>Hello user! Choose one of the below option:</h2>
      <button variant="contained"> Assign baggage carousel to flight </button>
      <button variant="contained"> Assign gate to flight </button>
    </div>
    );
  }
}