
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
import {
  Button, Grid, Paper, Link
  } from "@material-ui/core";
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

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
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label=" Gate Maintenance" onClick={handleClick} />
        <Tab label="Gate/Baggage assignment" />
      </Tabs>
    </Box>
      <TabPanel value={value} index={0}>
        <Paper>
          <Button variant="contained" color="primary" className="button-block">
            <Link href='/' centered>
                 <p style={{color:"white"}}> Click to view the dashboard!</p>
            </Link>
          </Button>        
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="posts-container">
          {/* {gateData.map((data) => { */}
            <Paper>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Gate Id</TableCell>
                  <TableCell align="center">Gate Number</TableCell>
                  <TableCell align="center">Gate Status</TableCell>
                  <TableCell align="center">Gate Maintenance Status</TableCell>
                  <TableCell align="left">Change Gate Status</TableCell>
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
                    <Stack direction="row" align="center" spacing={1} alignItems="center">
                        <Typography>Off</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography>On</Typography>
                    </Stack>
                    </TableCell>
                    <TableCell align="center">{row.terminalNo}</TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Paper>
          {/* })} */}
        </div>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        Gate/Baggage assignment
      </TabPanel>
    </Box>
  );
}
