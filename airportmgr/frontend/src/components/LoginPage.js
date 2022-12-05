import React, { Component } from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
    } from "@material-ui/core";
import "../App.css" ;

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password:"", authflag:1 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    handleChange(event) {
    this.setState({ username: event.state.username, password: event.state.password });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch("/get-employee" + "?employeeEmail=" + this.state.username).then((response) => 
        response.json()
        ).then((data) => {
            if(data.toString() === 'Employee not found: Invalid employee ID') {
                alert('User doesn not exist. Please create an account.');
            }
            else if (data.password == this.state.password) {
                if(data.employeeType == 1) {
                    window.location.href = '/airlineemployeepage';
                }
                else {
                    window.location.href = '/airportemployeepage';
                }
            } 
            else if(data.password != this.state.password) {
                alert ('Incorrect Credentials. Please try again');
            }
        }
        )
    }

  render() {
    return (
        <div className="bg-image">
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
                    Sign in
                    </Typography>
                </Grid>
                <Grid item>
                <form onSubmit={this.handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                        <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="username"
                        variant="outlined"
                        value={this.state.username}
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
                    Don't have an account?
                </Typography>
                <Link href='/signuppage' variant="body2">
                 Sign up now!
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