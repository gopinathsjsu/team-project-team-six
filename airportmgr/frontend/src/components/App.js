import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import AirlineEmployeePage from "./AirlineEmployeePage";
import AirportEmployeePage from "./AirportEmployeePage";
import "./App.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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