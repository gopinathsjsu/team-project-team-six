import React, { Component } from "react";
import AirlineEmployeePage from "./AirlineEmployeePage";
import AirportEmployeePage from "./AirportEmployeePage";
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
      <Router>
        <Routes>
          <Route exact path = "/">
            <p>This is the home page</p>
          </Route>
          <Route path = "/airlineemployeepage" component= {AirlineEmployeePage}></Route>
          <Route path = "/airportemployeepage" component= {AirportEmployeePage}></Route>
        </Routes>
      </Router>
    );
  }
}