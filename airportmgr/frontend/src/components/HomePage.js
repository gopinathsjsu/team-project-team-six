import React, { Component } from "react";
import AirlineEmployeePage from "./AirlineEmployeePage";
import AirportEmployeePage from "./AirportEmployeePage";
import FlightForm from "./FlightForm";

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
          <Route exact path = "/" element={<p>This is the home page</p>} />
          <Route path = "/airlineemployeepage" element={<AirlineEmployeePage />} />
          <Route path = "/airportemployeepage" element={<AirportEmployeePage />} />
          <Route path = "/forms" element={<FlightForm />} />
        </Routes>
      </Router>
    );
  }
}