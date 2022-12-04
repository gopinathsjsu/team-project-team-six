
import React, {useEffect, useState, } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FlightForm from './FlightForm';
import FlightUpdateForm from './FlightUpdateForm';
import LoginPage from './LoginPage';
import {
  Button, Grid, Paper, Link
  } from "@material-ui/core";
import { render } from 'react-dom';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function renderForm() {
  return (
    <FlightForm />
  );
}

function renderUpdateForm() {
  return (
    <FlightUpdateForm />
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [formVisible, showForm] = useState(false);
  const [updateFormVisible, showUpdateForm] = useState(false);

  const inputHandler = (e) => {  
    console.log("im here");  
     showForm(true);    
     showUpdateForm(false);
  };
  const updateInputHandler = (e) => {  
    console.log("im here");  
    showUpdateForm(true);    
    showForm(false);
  };

  const handleOnChange = (e) => {
    console.log("got here");
    showForm(false);
    console.log(formVisible);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addEvent = false;
  const updateEvent = false;
  const handleClick = (event) => {
    console.log("button is working here");
  } 

    return (
      <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Home" onChange={handleOnChange}/>
          <Tab label="Add Or Upadte flights" onClick={handleClick} />
         
        </Tabs>
      </Box>
        <TabPanel value={value} index={0} >
          <Paper>
            <Button variant="contained" color="primary" className="button-block">
            <Link href='/' centered>
                 <p style={{color:"white"}}> Click to view the dashboard!</p>
            </Link>
            </Button>        
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ display: "flex", gap: "1rem" }}>
              <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button-block"
                  value = 'add'
                  onClick={inputHandler}
                  >
                  Add Flights
              </Button>
              <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button-block"
                  value = 'update'
                  onClick={updateInputHandler}
                  >
                  Update Flights
              </Button>
              </Grid>
        </Grid>
        </TabPanel>  
      </Box> 

      {formVisible && renderForm()}
      {updateFormVisible && renderUpdateForm()}
      </div>
    );
}
