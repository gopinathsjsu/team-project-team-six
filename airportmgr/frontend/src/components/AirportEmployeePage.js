
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import {
  Button, Grid, Paper, Link
  } from "@material-ui/core";
import { TabContainer } from 'react-bootstrap';
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [gateData, setGateData] = React.useState([]);
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
  //const [active, setMaintainenceStatus] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleClick = (event) => {
    console.log("button is working here");
    //React.useEffect(() => {
      fetch("/get-all-gates").then((response) => 
      response.json()
      ).then((data) => {
        console.log("data is?");
        console.log(data.toString());
        setGateData(data);
      })
      .catch((err) => {
        console.log(err.message);
     });
    //}, []);
  } 
   
  // const handleToggle = (activeStatus) => {
  //   console.log('this is the db status', activeStatus);
  //   setMaintainenceStatus(activeStatus);
  //   if(activeStatus === 'Enable') {
  //     setMaintainenceStatus(true);
  //   }
  //   else {
  //     setMaintainenceStatus(false);
  //   }
  //   //return active;
  // }
  const changeStatus = (currentMaintainenceStatus, currentGateNo, currentGateStatus, currentTerminalNo) => {
    if(currentMaintainenceStatus === 'Enabled') {
      console.log(currentMaintainenceStatus, currentGateNo, currentGateStatus);
      currentMaintainenceStatus = 'Disabled';
    }
    else {
      console.log("Gate is disabled");
      currentMaintainenceStatus = 'Enabled';
    }
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          gateNo: currentGateNo,
          gateStatus: currentGateStatus,
          gateMaintainenceStatus: currentMaintainenceStatus,
          terminalNo: currentTerminalNo,
      }),
      };
      fetch("/update-gate", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
      forceUpdate();
      //alert('You have changed the Gate Maintenance Status for gate number '+  currentGateNo + '. Go back to Home Page to verify your changes.');
      
  }
  const handleGateClick = () => {
    fetch("/assign-gate").then((response) => 
        response.json()
        ).then((data) => {
          console.log(data);
        }
        )
  }
  const handleBaggageClick = () => {
    fetch("/assign-baggage").then((response) => 
        response.json()
        ).then((data) => {
          console.log(data);
        }
        )
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label=" Gate Maintenance" onClick={handleClick} />
        <Tab label="Gate/Baggage assignment" />
        <Tab label="Logout" />
      </Tabs>
    </Box>
      <TabPanel value={value} index={0}>
        <Paper  >
          <Button variant="contained" color="primary" className="button-block">
            <Link href='/' centered>
                 <p style={{color:"white"}}> Click to view the dashboard!</p>
            </Link>
          </Button>        
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>  
          {/* {gateData.map((data) => { */}
            <Paper className="contain">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Gate Id</TableCell>
                  <TableCell align="center">Gate Number</TableCell>
                  <TableCell align="center">Gate Status</TableCell>
                  <TableCell align="center">Gate Maintenance Status</TableCell>
                  <TableCell align="center">Change Gate Status</TableCell>
                  <TableCell align="center">Terminal Number</TableCell>               
                </TableRow>
              </TableHead>
              <TableBody>
                {gateData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.gateNo}</TableCell>
                    <TableCell align="center">{row.gateStatus}</TableCell>
                    <TableCell align="center">{row.gateMaintainenceStatus}</TableCell>
                    <TableCell align="center">
                      {/* <Stack direction="row" align="center" spacing={1} alignItems="center">
                          <Typography>Disable</Typography>
                          <AntSwitch onClick={() => handleToggle(row.gateMaintainenceStatus)} defaultChecked ={active}
                            value="active" inputProps={{ 'aria-label': 'ant design' }} />
                          <Typography>Enable</Typography>
                      </Stack> */}
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit" 
                        onClick={()=> changeStatus(row.gateMaintainenceStatus, row.gateNo, row.gateStatus, row.terminalNo)}>
                        Enable/Disable Gate
                      </Button>
                    </TableCell>
                    <TableCell align="center">{row.terminalNo}</TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          {/* })} */}
      </TabPanel>
      
      <TabPanel value={value} index={2}>
      <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ display: "flex", gap: "1rem" }}>
              <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button-block"
                  value = 'add'
                  onClick={handleGateClick}
                  >
                  Assign Gates
              </Button>
              <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button-block"
                  value = 'update'
                  onClick={handleBaggageClick}
                  >
                  Assign Baggage Carousel
              </Button>
              </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Paper>
            <Button variant="contained" color="primary" className="button-block">
            <Link href='/loginpage' centered>
                 <p style={{color:"white"}}> Click to logout</p>
            </Link>
            </Button>        
          </Paper>
      </TabPanel>
    </Box>
  );
}
