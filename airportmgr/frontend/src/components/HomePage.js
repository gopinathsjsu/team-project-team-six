import React, { Component, useState } from "react";
import AirlineEmployeePage from "./AirlineEmployeePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import AirportEmployeePage from "./AirportEmployeePage";
import AirlineOptionPage from "./AirlineOptionPage";
import AirportOptionPage from "./AirportOptionPage";
import FlightForm from './FlightForm'
import {BrowserRouter as Router, 
        Routes, 
        Route, 
        Link, 
        Redirect} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FlightDepartureTable from './FlightDepartureTable';
import FlightArrivalTable from './FlightArrivalTable';
import GateAssignmentTable from './GateAssignmentTable';
import BaggageCarouselAssignmentTable from './BaggageCarouselAssignmentTable';

let showFlightArrivalTable = false;
let showFlightDepartureTable = false;
let showGateAssignmentTable = false;
let showBaggageCarouselAssignmentTable = false;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.state = {dropdownValue: '', showFlightArrivalTable: false, showFlightDepartureTable: false, showGateAssignmentTable: false, showBaggageCarouselAssignmentTable: false};
    this.state = {dropdownValue: ''};
    this.handleChange = this.handleChange.bind(this);
    // this.showFlightArrivalTable = false;
    // this.showFlightDepartureTable = false;
    // this.showGateAssignmentTable = false;
    // this.showBaggageCarouselAssignmentTable = false;
  }

  handleChange(newValue) {
    this.setState({dropdownValue: newValue}, () => {
      // console.log(this.state.dropdownValue)
      // this.showFlightArrivalTable = false;
      // this.showFlightDepartureTable = false;
      // this.showGateAssignmentTable = false;
      // this.showBaggageCarouselAssignmentTable = false;

      showFlightArrivalTable = false;
      showFlightDepartureTable = false;
      showGateAssignmentTable = false;
      showBaggageCarouselAssignmentTable = false;

      
      // this.setState({showFlightArrivalTable: false, showFlightDepartureTable: false, showGateAssignmentTable: false, showBaggageCarouselAssignmentTable: false});

      if (this.state.dropdownValue == 1) {
        // this.showFlightDepartureTable = true;
        // this.showFlightArrivalTable = false;
        // this.showGateAssignmentTable = false;
        // this.showBaggageCarouselAssignmentTable = false;
        showFlightDepartureTable = true;
        showFlightArrivalTable = false;
        showGateAssignmentTable = false;
        showBaggageCarouselAssignmentTable = false;
        // this.setState({showFlightArrivalTable: false, showFlightDepartureTable: true, showGateAssignmentTable: false, showBaggageCarouselAssignmentTable: false});
        this.forceUpdate();
      } 
      else if (this.state.dropdownValue == 2) {
        // this.showFlightArrivalTable = true;
        // this.showFlightDepartureTable = false;
        // this.showGateAssignmentTable = false;
        // this.showBaggageCarouselAssignmentTable = false;
        showFlightArrivalTable = true;
        showFlightDepartureTable = false;
        showGateAssignmentTable = false;
        showBaggageCarouselAssignmentTable = false;
        this.forceUpdate();

        // this.setState({showFlightArrivalTable: true, showFlightDepartureTable: false, showGateAssignmentTable: false, showBaggageCarouselAssignmentTable: false});

      }
      else if (this.state.dropdownValue == 3) {
        // this.showGateAssignmentTable = true;
        // this.showFlightArrivalTable = false;
        // this.showFlightDepartureTable = false;
        // this.showBaggageCarouselAssignmentTable = false;
        showGateAssignmentTable = true;
        showFlightArrivalTable = false;
        showFlightDepartureTable = false;
        showBaggageCarouselAssignmentTable = false;
        // this.setState({showFlightArrivalTable: false, showFlightDepartureTable: false, showGateAssignmentTable: true, showBaggageCarouselAssignmentTable: false});
        this.forceUpdate();

      }
      else if (this.state.dropdownValue == 4) {
        // this.showBaggageCarouselAssignmentTable = true;
        // this.showGateAssignmentTable = false;
        // this.showFlightArrivalTable = false;
        // this.showFlightDepartureTable = false;
        showBaggageCarouselAssignmentTable = true;
        showGateAssignmentTable = false;
        showFlightArrivalTable = false;
        showFlightDepartureTable = false;
        // this.setState({showFlightArrivalTable: false, showFlightDepartureTable: false, showGateAssignmentTable: false, showBaggageCarouselAssignmentTable: true});
        this.forceUpdate();

      }
    });

    // console.log(this.state.dropdownValue);

  }

  // showFlightDepartures() {
  //   this.showFlightDepartureTable = true;
  //   this.showFlightArrivalTable = false;
  //   this.showGateAssignmentTable = false;
  //   this.showBaggageCarouselAssignmentTable = false;
  // }

  // showFlightArrivals() {
  //   this.showFlightArrivalTable = true;
  //   this.showFlightDepartureTable = false;
  //   this.showGateAssignmentTable = false;
  //   this.showBaggageCarouselAssignmentTable = false;
  // }

  // showGateAssignments() {
  //   this.showGateAssignmentTable = true;
  //   this.showFlightArrivalTable = false;
  //   this.showFlightDepartureTable = false;
  //   this.showBaggageCarouselAssignmentTable = false;
  // }

  // showBaggageCarouselAssignments() {
  //   this.showBaggageCarouselAssignmentTable = true;
  //   this.showGateAssignmentTable = false;
  //   this.showFlightArrivalTable = false;
  //   this.showFlightDepartureTable = false;
  // }
 
  render() {
    return (
      // <p>This is the Home page.</p>
      <div>
        <Router>
          <Routes>
            <Route exact path = "/" element={<h1 style={{textAlign:"center"}}>Welcome to San Francisco Airport</h1>} />
            <Route path = "/airlineemployeepage" element={<AirlineEmployeePage />} />
            <Route path = "/airportemployeepage" element={<AirportEmployeePage />} />
            <Route path = "/airlineoptionpage" element={<AirlineOptionPage/>} />
            <Route path = "/airportoptionpage" element={<AirportOptionPage/>} />
            <Route path = "/loginpage" element={<LoginPage />} />
            <Route path = "/signuppage" element={<SignUpPage />} />
            <Route path = "/forms" element={<FlightForm />} />
          </Routes>
        </Router>
        <FormControl fullWidth>
          <InputLabel id="choiceDropdown">What would you like to see?</InputLabel>
          <Select
            labelId="choice-dropdown"
            id="choice-dropdown"
            onChange={(event) =>
              this.handleChange(event.target.value)}
          >
            <MenuItem value={1}>Flight Departures</MenuItem>
            <MenuItem value={2}>Flight Arrivals</MenuItem>
            <MenuItem value={3}>Gate assignments</MenuItem>
            <MenuItem value={4}>Baggage Carousel assignments</MenuItem>
          </Select>
      </FormControl>

      {showFlightDepartureTable &&
        <FlightDepartureTable />}

      {showFlightArrivalTable &&
        <FlightArrivalTable />}

      {showGateAssignmentTable &&
        <GateAssignmentTable />}
      
      {showBaggageCarouselAssignmentTable &&
        <BaggageCarouselAssignmentTable />}


    </div>

    );
  }
}