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
        Route} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './FlightForm.css'

let showFlightArrivalTable = false;
let showFlightDepartureTable = false;
let showGateAssignmentTable = false;
let showBaggageCarouselAssignmentTable = false;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {dropdownValue: '', flightsData: []};
    this.handleChange = this.handleChange.bind(this);
  }

  //GET API call to get all departing flights data
  getDepartingFlightsData() {
    fetch('/get-all-flights-dep').then((response) => 
        response.json()
    ).then((data) => {
        console.log(data);
        this.setState({ flightsData: data });
        this.forceUpdate();
        console.log(this.state.flightsData);
    });
  } 

  //GET API call to get all arriving flights data
  getArrivingFlightsData() {
    fetch('/get-all-flights-ar').then((response) => 
        response.json()
    ).then((data) => {
        console.log(data);
        this.setState({ flightsData: data });
        this.forceUpdate();
        console.log(this.state.flightsData);
    });
  } 
  
  //GET API call to get all flights data
  getAllFlightsData() {
    fetch('/get-all-flights').then((response) => 
        response.json()
    ).then((data) => {
        console.log(data);
        this.setState({ flightsData: data });
        this.forceUpdate();
        console.log(this.state.flightsData);
    });
  } 

  // Based on dropdown selection, show appropriate table
  handleChange(newValue) {
    this.setState({dropdownValue: newValue}, () => {

      showFlightArrivalTable = false;
      showFlightDepartureTable = false;
      showGateAssignmentTable = false;
      showBaggageCarouselAssignmentTable = false;

      if (this.state.dropdownValue == 1) {
    
        showFlightDepartureTable = true;
        showFlightArrivalTable = false;
        showGateAssignmentTable = false;
        showBaggageCarouselAssignmentTable = false;

        this.getDepartingFlightsData();
        this.forceUpdate();
      
      } 
      else if (this.state.dropdownValue == 2) {
       
        showFlightArrivalTable = true;
        showFlightDepartureTable = false;
        showGateAssignmentTable = false;
        showBaggageCarouselAssignmentTable = false;

        this.getArrivingFlightsData();
        this.forceUpdate();

      }
      else if (this.state.dropdownValue == 3) {
       
        showGateAssignmentTable = true;
        showFlightArrivalTable = false;
        showFlightDepartureTable = false;
        showBaggageCarouselAssignmentTable = false;

        this.getAllFlightsData();
        this.forceUpdate();

      }
      else if (this.state.dropdownValue == 4) {
        
        showBaggageCarouselAssignmentTable = true;
        showGateAssignmentTable = false;
        showFlightArrivalTable = false;
        showFlightDepartureTable = false;

        this.getAllFlightsData();
        this.forceUpdate();

      }
    });

  }
 
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path = "/" element={
            <div>
              <h1 style={{textAlign:"center", color: 'white', font: 'verdana', paddingBottom: '20px'}}>Welcome to San Francisco Airport!</h1>
              <FormControl fullWidth>
                <InputLabel id="choiceDropdown">What would you like to see?</InputLabel>
                <Select
                  class="home-page"
                  labelId="choice-dropdown"
                  id="choice-dropdown"
                  style={{backgroundColor: 'white'}}
                  onChange={(event) =>
                    this.handleChange(event.target.value)}
                >
                  <MenuItem value={1}>Flight Departures</MenuItem>
                  <MenuItem value={2}>Flight Arrivals</MenuItem>
                  <MenuItem value={3}>Gate assignments</MenuItem>
                  <MenuItem value={4}>Baggage Carousel assignments</MenuItem>
                </Select>
              </FormControl>
            </div>
          
          } />
            <Route path = "/airlineemployeepage" element={<AirlineEmployeePage />} />
            <Route path = "/airportemployeepage" element={<AirportEmployeePage />} />
            <Route path = "/airlineoptionpage" element={<AirlineOptionPage/>} />
            <Route path = "/airportoptionpage" element={<AirportOptionPage/>} />
            <Route path = "/loginpage" element={<LoginPage />} />
            <Route path = "/signuppage" element={<SignUpPage />} />
            <Route path = "/forms" element={<FlightForm />} />
          </Routes>
        </Router>

      {showFlightDepartureTable &&
        <div>
          <Paper className="contain">
              <Table sx={{ minWidth: 650 }} aria-label="Flight Departures table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No.</TableCell>
                  <TableCell align="center">Flight Code</TableCell>
                  <TableCell align="center">Source</TableCell>
                  <TableCell align="center">Destination</TableCell>
                  <TableCell align="center">Scheduled Time</TableCell>
                  <TableCell align="center">Status</TableCell>               
                  <TableCell align="center">Type</TableCell>               
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.flightsData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.flightCode}</TableCell>
                    <TableCell align="center">{row.flightSource}</TableCell>
                    <TableCell align="center">{row.flightDestination}</TableCell>
                    <TableCell align="center">{row.flightSchedule}</TableCell>
                    <TableCell align="center">{row.flightStatus}</TableCell>
                    <TableCell align="center">{row.flightType}</TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      }

      {showFlightArrivalTable &&
        <div>
          <Paper className="contain">
              <Table sx={{ minWidth: 650 }} aria-label="Flight Arrivals table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No.</TableCell>
                  <TableCell align="center">Flight Code</TableCell>
                  <TableCell align="center">Source</TableCell>
                  <TableCell align="center">Destination</TableCell>
                  <TableCell align="center">Scheduled Time</TableCell>
                  <TableCell align="center">Status</TableCell>               
                  <TableCell align="center">Type</TableCell>               
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.flightsData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.flightCode}</TableCell>
                    <TableCell align="center">{row.flightSource}</TableCell>
                    <TableCell align="center">{row.flightDestination}</TableCell>
                    <TableCell align="center">{row.flightSchedule}</TableCell>
                    <TableCell align="center">{row.flightStatus}</TableCell>
                    <TableCell align="center">{row.flightType}</TableCell>
                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      }

      {showGateAssignmentTable &&
         <div>
          <Paper className="contain">
              <Table sx={{ minWidth: 650 }} aria-label="Flight Gates table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No.</TableCell>
                  <TableCell align="center">Flight Code</TableCell>
                  <TableCell align="center">Source</TableCell>
                  <TableCell align="center">Destination</TableCell>
                  <TableCell align="center">Scheduled Time</TableCell>
                  <TableCell align="center">Gate number</TableCell>               
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.flightsData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.flightCode}</TableCell>
                    <TableCell align="center">{row.flightSource}</TableCell>
                    <TableCell align="center">{row.flightDestination}</TableCell>
                    <TableCell align="center">{row.flightSchedule}</TableCell>
                    <TableCell align="center">{row.flightGate}</TableCell>
                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      }
      
      {showBaggageCarouselAssignmentTable &&
        <div>
          <Paper className="contain">
              <Table sx={{ minWidth: 650 }} aria-label="Flight Baggage table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No.</TableCell>
                  <TableCell align="center">Flight Code</TableCell>
                  <TableCell align="center">Source</TableCell>
                  <TableCell align="center">Destination</TableCell>
                  <TableCell align="center">Scheduled Time</TableCell>
                  <TableCell align="center">Baggage Carousel number</TableCell>               
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.flightsData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.flightCode}</TableCell>
                    <TableCell align="center">{row.flightSource}</TableCell>
                    <TableCell align="center">{row.flightDestination}</TableCell>
                    <TableCell align="center">{row.flightSchedule}</TableCell>
                    <TableCell align="center">{row.flightCarouselNo}</TableCell>
                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
        
      }


    </div>

    );
  }
}