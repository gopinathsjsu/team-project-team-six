import { TextField } from '@mui/material';
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { Form, Row, Col, Button } from 'react-bootstrap/Row';

export default class FlightForm extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <Row>
                <Col>
                    <TextField id="flightSource" label="Flight Source" variant="outlined"/>
                    <TextField id="flightDestination" label="Flight Destination" variant="outlined"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TextField id="flightArrival" label="Flight Arrival Time" variant="outlined"/>
                    <TextField id="flightDeparture" label="Flight Source" variant="outlined"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TextField id="flightStatus" label="Flight Status" variant="outlined"/>
                    <TextField id="flightType" label="Flight Type" variant="outlined"/>
                </Col>
            </Row>
            <Row>
                <TextField id="flightNoOfStops" label="Flight No of stops" variant="outlined"/>
            </Row>
            <Row>
                <Col>
                    <TextField id="flightGate" label="Flight Gate" variant="outlined"/>
                    <TextField id="flightCarouselNo" label="Flight Baggage carousel" variant="outlined"/>
                </Col>
            </Row>
            
        </form>
      );
    }
  }
