import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { borders } from '@mui/system';

const useStyles = makeStyles(theme => ({
root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    border: 1,
    borderColor: 'grey',  

    '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '300px',
    },
    '& .MuiButtonBase-root': {
    margin: theme.spacing(2),
    },
},
}));

const Form = ({ handleClose }) => {
    const classes = useStyles();
    // create state variables for each input
    const [flightSource, setFlightSource] = useState('');
    const [flightDestination, setFlightDestination] = useState('');
    const [flightArrival, setFlightArrival] = useState('');
    const [flightDeparture, setFlightDeparture] = useState('');
    const [flightStatus, setFlightStatus] = useState('');
    const [flightType, setFlightType] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(flightSource, flightDestination, flightArrival, flightDeparture, flightStatus, flightType);
        handleClose();
    };
    
    const [value, setValue] = React.useState(dayjs());
    const [flightStatusDropdownValue, setFlightStatusDropdownValue] = React.useState('');
    const [flightTypeDropdownValue, setFlightTypeDropdownValue] = React.useState('');

    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    const handleStatusChange = (event) => {
        setFlightStatusDropdownValue(event.target.value);
    };
    
    const handleTypeChange = (event) => {
        setFlightTypeDropdownValue(event.target.value);
    };
    

    return (

        <div class="form-style">
            <Box sx={{
                borderRadius: '7px',
                p: 2,
                display: 'flex',
                gap: 2,
                border: '1px solid grey',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}>
                <form className={classes.root} onSubmit={handleSubmit}>
                <div style={{justifyContent: 'left'}}>Add flight data</div>

                    <TextField
                        id="flightSource"
                        label="Flight Source"
                        variant="outlined"
                    />
                    <TextField
                        id="flightDestination" 
                        label="Flight Destination" 
                        variant="outlined"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            id="flightArrival" 
                            label="Flight Arrival Time"
                            value={value}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} variant="outlined"/>}
                        />
                        <DateTimePicker
                            id="flightDeparture" 
                            label="Flight Departure Time"
                            value={value}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} variant="outlined"/>}
                        />
                    </LocalizationProvider>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                        <InputLabel id="flightStatus">Flight Status</InputLabel>
                            <Select
                                labelId="flight-status-label"
                                id="flightStatus"
                                value={flightStatusDropdownValue}
                                label="Flight Status"
                                onChange={handleStatusChange}
                            >
                                <MenuItem value={1}>Arriving</MenuItem>
                                <MenuItem value={2}>Departed</MenuItem>
                                <MenuItem value={3}>Taxi</MenuItem>
                                <MenuItem value={4}>Cancelled</MenuItem>
                                <MenuItem value={5}>In Transit</MenuItem>
                                <MenuItem value={6}>Landed</MenuItem>
                                <MenuItem value={7}>Delayed</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                        <InputLabel id="flightType">Flight Type</InputLabel>
                            <Select
                                labelId="flight-type-label"
                                id="flightType"
                                value={flightTypeDropdownValue}
                                label="Flight Type"
                                onChange={handleTypeChange}
                            >
                                <MenuItem value={1}>Passenger</MenuItem>
                                <MenuItem value={2}>Cargo</MenuItem>
                                <MenuItem value={3}>Private</MenuItem>
                            </Select>
                    </FormControl>
                    <div>
                        <Button variant="contained">Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </div>
                </form>
            </Box>
        </div>
    );
};

export default Form;
