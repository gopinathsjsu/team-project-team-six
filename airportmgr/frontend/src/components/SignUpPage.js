import React, { Component } from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
    FormControl,
    InputLabel,
    Select, MenuItem
    } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import "../App.css" ;
import ErrorIcon from "@material-ui/icons/Error";

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

        //this.state = { username: "", password:"", authflag:1 };
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    // handleChange(event) {
    // this.setState({ username: event.state.username, password: event.state.password });
    // }
    
    
    handleChange = name => e => {
        this.setState({
          [name]: e.target.value
        });
      };
    passwordMatch = () => this.state.password === this.state.confirmpassword;
    handleSubmit(event) {
    event.preventDefault();
    // if (this.state.username == 'admin@littech.in' && this.state.password == 'secret') {
    // this.props.history.push("/home");
    // } else {
    // alert('Incorrect Credntials!');
    // }
    if (!this.passwordMatch()) {
        this.setState({
          errorOpen: true,
          error: "Passwords don't match"
        });
    
    }
    else {window.location.href = '/loginpage'}
}

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
                    name="name"
                    variant="outlined"
                    //value={this.state.username}
                    // onChange={(event) =>
                    // this.setState({
                    // [event.target.name]: event.target.value,
                    // })
                    // }
                    required
                    autoFocus
                    />
                </Grid>

                <Grid item>
                    <TextField
                    type="name"
                    placeholder="Last Name"
                    fullWidth
                    name="lname"
                    variant="outlined"
                    //value={this.state.username}
                    // onChange={(event) =>
                    // this.setState({
                    // [event.target.name]: event.target.value,
                    // })
                    // }
                    required
                    autoFocus
                    />
                </Grid>
                <Grid item>
                    <TextField
                    type="email"
                    placeholder="Email"
                    fullWidth
                    name="username"
                    variant="outlined"
                    // value={this.state.username}
                    // onChange={(event) =>
                    // this.setState({
                    // [event.target.name]: event.target.value,
                    // })
                    // }
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
                            //value={age}
                            label="Age"
                            //onChange={handleChange}
                        >
                            <MenuItem value={10}>AirlineEmployee</MenuItem>
                            <MenuItem value={20}>AirportEmployee</MenuItem>
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
                    onChange={this.handleChange("password")}
                    // value={this.state.password}
                    // onChange={(event) =>
                    // this.setState({
                    // [event.target.name]: event.target.value,
                    // })
                    // }
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
                    // value={this.state.password}
                    // onChange={(event) =>
                    // this.setState({
                    // [event.target.name]: event.target.value,
                    // })
                    // }
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