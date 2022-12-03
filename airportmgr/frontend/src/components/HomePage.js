import React, { Component } from "react";
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

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <p>This is the Home page.</p>
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
    );
  }
}