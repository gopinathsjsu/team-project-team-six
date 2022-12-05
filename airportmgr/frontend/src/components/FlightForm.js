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

const FlightForm = () => {
    const classes = useStyles();
    // create state variables for each input
    const [flightCode, setFlightCode] = useState('');
    const [flightSource, setFlightSource] = useState('');
    const [flightDestination, setFlightDestination] = useState('');
    
    const [value, setValue] = React.useState(dayjs());
    const [flightStatusDropdownValue, setFlightStatusDropdownValue] = React.useState('');
    const [flightTypeDropdownValue, setFlightTypeDropdownValue] = React.useState('');

    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    const handleStatusChange = (event) => {
        setFlightStatusDropdownValue(event.target.value);
        console.log(flightStatusDropdownValue);
    };
    
    const handleTypeChange = (event) => {
        setFlightTypeDropdownValue(event.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        // Call create flight API with information from form
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                flightCode: flightCode,
                flightSource: flightSource,
                flightDestination: flightDestination,
                flightSchedule: value,
                flightStatus: flightStatusDropdownValue,
                flightType: flightTypeDropdownValue,
                flightGate: 0,
                flightCarouselNo: 0,
            }),
            };
            fetch("/create-flight", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
        
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
                        id="flightCode"
                        label="Flight Code"
                        variant="outlined"
                        value={flightCode}
                        onChange={(e)=>{setFlightCode(e.target.value)}}
                    />
                    <TextField
                        id="flightSource"
                        label="Flight Source"
                        variant="outlined"
                        value={flightSource}
                        onChange={(e)=>{setFlightSource(e.target.value)}}
                    />
                    <TextField
                        id="flightDestination" 
                        label="Flight Destination" 
                        variant="outlined"
                        value={flightDestination}
                        onChange={(e)=>{setFlightDestination(e.target.value)}}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            id="flightArrival" 
                            label="Flight Arrival/Departure Time"
                            value={value}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} variant="outlined"/>}
                        />
                    </LocalizationProvider>
                    <FormControl fullWidth>
                        <InputLabel id="flightStatus">Flight Status</InputLabel>
                            <Select
                                labelId="flight-status-label"
                                id="flightStatus"
                                value={flightStatusDropdownValue}
                                label="Flight Status"
                                onChange={handleStatusChange}
                            >
                                <MenuItem value="Arriving">Arriving</MenuItem>
                                <MenuItem value="Departed">Departed</MenuItem>
                                <MenuItem value="Taxi">Taxi</MenuItem>
                                <MenuItem value="Cancelled">Cancelled</MenuItem>
                                <MenuItem value="In Transit">In Transit</MenuItem>
                                <MenuItem value="Landed">Landed</MenuItem>
                                <MenuItem value="Delayed">Delayed</MenuItem>
                            </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="flightType">Flight Type</InputLabel>
                            <Select
                                labelId="flight-type-label"
                                id="flightType"
                                value={flightTypeDropdownValue}
                                label="Flight Type"
                                onChange={handleTypeChange}
                            >
                                <MenuItem value="Passenger">Passenger</MenuItem>
                                <MenuItem value="Cargo">Cargo</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
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

export default FlightForm;
