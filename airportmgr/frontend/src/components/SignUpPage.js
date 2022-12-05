import React, { Component } from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
    FormControl,
    InputLabel,
    Select, MenuItem
    } from "@material-ui/core";

import "../App.css" ;

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

        this.state = { employeeFirstName: "", employeeLastName:"", employeeEmail:"",  employeeType:"", password:"", confirmpassword:"", error:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
        }
        
    handleChange = name => e => {
        this.setState({
          [name]: e.target.value      
        });
      };
    passwordMatch = () => this.state.password === this.state.confirmpassword;

    handleSubmit(e) {
        e.preventDefault();
        
        //Call POST API to create new employee in db
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                employeeFirstName: this.state.employeeFirstName,
                employeeLastName: this.state.employeeLastName,
                employeeType: this.state.employeeType,
                employeeEmail: this.state.employeeEmail,
                password: this.state.password,
            }),
            };
            fetch("/create-employee", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
            window.location.href = '/loginpage';
        
      };

  render() {
    return (      
        <div className="bg-image" styel={{marginTop:"5px"}}>
        <Grid justifyContent="center" align="center">
        <Grid item>
        <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={2}
        className="login-form "
        >
        <Paper
        variant="elevation"
        elevation={2}
        className="login-background"
        >
        <Grid item>
            <Typography component="h1" variant="h5">
            Sign Up
            </Typography>
        </Grid>
        <Grid item>
        <form onSubmit={this.handleSubmit}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <TextField
                    type="name"
                    placeholder="First Name"
                    fullWidth
                    name="employeeFirstName"
                    variant="outlined"
                    value={this.state.employeeFirstName}
                    onChange={(event) =>
                    this.setState({
                    [event.target.name]: event.target.value,
                    })
                    }
                    required
                    autoFocus
                    />
                </Grid>

                <Grid item>
                    <TextField
                    type="name"
                    placeholder="Last Name"
                    fullWidth
                    name="employeeLastName"
                    variant="outlined"
                    value={this.state.employeeLastName}
                    onChange={(event) =>
                    this.setState({
                    [event.target.name]: event.target.value,
                    })
                    }
                    required
                    autoFocus
                    />
                </Grid>
                <Grid item>
                    <TextField
                    type="email"
                    placeholder="Email"
                    fullWidth
                    name="employeeEmail"
                    variant="outlined"
                    value={this.state.email}
                    onChange={(event) =>
                    this.setState({
                    [event.target.name]: event.target.value,
                    })
                    }
                    required
                    autoFocus
                    />
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choose Employee Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="emptype"
                            name="employeeType"
                            onChange={(event) =>
                            this.setState({
                                [event.target.name]: event.target.value,
                            })                               
                            }
                        >
                            <MenuItem value={1}>AirlineEmployee</MenuItem>
                            <MenuItem value={2}>AirportEmployee</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <TextField
                    type="password"
                    placeholder="Password"
                    fullWidth
                    name="password"
                    variant="outlined"
                    value={this.state.password}
                    onChange={(event) =>
                    this.setState({
                    [event.target.name]: event.target.value,
                    })
                    }
                    required
                    />
                </Grid>
                <Grid item>
                    <TextField
                    type="password"
                    placeholder="Confirm Password"
                    fullWidth
                    name="confirmpassword"
                    variant="outlined"
                    onChange={this.handleChange("confirmpassword")}
                    value={this.state.confirmpassword}
                    required
                    />
                </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="button-block"
                    >
                    Submit
                </Button>
            </Grid>
        </Grid>
        </form>
        </Grid>
        <Grid item>
        <Typography>
            Already have an account?
        </Typography>
        <Link href='/loginpage' variant="body2">
         Login now!
        </Link>
        </Grid>
        </Paper>
        </Grid>
        </Grid>
    </Grid>
    
    </div>  
    );
  }
}