import React, { Component } from "react";
import AirlineEmployeePage from "./AirlineEmployeePage";
import AirportEmployeePage from "./AirportEmployeePage";
import {BrowserRouter as Router, 
        Switch, 
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
        <Switch>
          <Route exact path = "/">
            <p>This is the home page</p>
          </Route>
          <Route path = "/airlineemployeepage" component= {AirlineEmployeePage}></Route>
          <Route path = "/airportemployeepage" component= {AirportEmployeePage}></Route>
        </Switch>
      </Router>
    );
  }
}