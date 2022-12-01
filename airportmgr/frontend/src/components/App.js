import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import AirlineEmployeePage from "./AirlineEmployeePage";
import AirportEmployeePage from "./AirportEmployeePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <HomePage />
      {/* <AirlineEmployeePage />
      <AirportEmployeePage /> */}
    </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);