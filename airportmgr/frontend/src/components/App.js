import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import "./App.css";
import './FlightForm.css'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div class="bg home" style={{justifyContent:"center"}}>
      <HomePage />
    </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);