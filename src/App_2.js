import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import picLabel1 from './hathras.png';
import picLabel2 from './CAA.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles';  
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { white } from 'material-ui/styles/colors';
import { Button } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';

import {Link } from "react-router-dom";


function valuetext(value) {
  return `${value}°C`;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // margin: 'auto',
    maxWidth: 1200,
    // marginTop: 60,
    marginLeft: 120,
    borderRadius: 12,

  },
  loginButton: {
    backgroundColor: 'rgb(51,51,51)',
    color: white,
    height:30,
    fontWeight: 1000,
    fontSize: 15,
    borderRadius: 5,
    marginTop: theme.spacing(3),
  },
  image: {
    width: 256,
    height: 256,
    padding: theme.spacing(2),
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '0ch',
      },
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '0%',
    marginTop:theme.spacing(3),

    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  margin: {
    height: theme.spacing(3),
  },
  rail: {
    height: '2px',
    width: "75%",
    borderRadius: 24,
    opacity: 1,
  }
}));


const imp_dates = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 10,
    label: '20°C',
  },
  {
    value: 20,
    label: '37°C',
  },
  {
    value: 30,
    label: '100°C',
  },
  {
    value: 40,
    label: '100°C',
  },
  {
    value: 50,
    label: '100°C',
  },
  {
    value: 60,
    label: '100°C',
  },
  {
    value: 70,
    label: '100°C',
  },
  {
    value: 80,
    label: '100°C',
  },
  {
    value: 90,
    label: '100°C',
  },

];


export default function ComplexGrid() {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color='inherit' elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            VERITAS
          </Typography>
          <div className={classes.search}>
            
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={lang}
                onChange={handleChange}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Hindi</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
            
            </div>
            
            <Button className={classes.loginButton}>
              <b>Login</b>
            </Button>
        
        </Toolbar>
      </AppBar>
      
      
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6
          <Typography gutterBottom variant="subtitle1" variant="h5" >
            <b>2020 Hathras Gang Rape and Murder Case </b> <br></br>
       </Typography>
       <Typography variant="caption">
           19 Oct 2020, Monday
       </Typography>
       <Typography variant="body2" color="textSecondary">
         <ul>
         <li>There are some news sources which reported that the victim was cremated in the middle of the night without the 
             permission of the family and the authorities are misleading people saying the family had been present at the funeral. [1]<br></br><br></br>
         </li>
         <li>There are some news sources which reported that the police had taken permissions from the family prior to 
             cremation and the family was now lying. [2]<br></br><br></br>
        </li>
         <li>Some news sources reported that the UP administration and police have clearly established using forensic 
             evidence that no rape occured. [3]<br></br><br></br>
         </li>
         <li>Some news have reported that the administration is pushing false propoganda and questioned the analysis of “no 
             rape” with the victims official statement mentioning rape. [4]<br></br><br></br>
         </li>
         </ul>
       </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography display='flex'>
             <Link color='inherit'>[1] The Wire</Link> <br></br>
             <Link color='inherit'>[2] TIMES NOW </Link> <br></br>
             <Link color='inherit'>[3] Hindustan Times</Link> <br></br>
             <Link color='inherit'>[4] Scroll</Link> <br></br>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Grid
        container
        // direction="column"
        alignItems="center"
        justify="center"
      > 
      <Grid item xs = {12} >
        <Typography id="discrete-slider" gutterBottom>
          Timeline
        </Typography>
        <Slider className={classes.rail}
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks={imp_dates}
          min={0}
          max={100}
        />
      </Grid>
      </Grid>
     
    </div>
  );
}

// <Grid container 
// spacing={2}
// >
// <Grid item>
// </Grid>
// <Grid item xs={6} sm={3} container>
//   <Grid item xs container direction="column" spacing={2}>
//     <Grid item xs>
//       <Typography gutterBottom variant="subtitle1" variant="h5" >
//       <b>2020 Hathras Gang Rape and Murder Case</b><br></br>
//       </Typography>
//       <Typography variant="caption">
//           19 Oct 2020, Monday
//       </Typography>
//       <Typography variant="body2" color="textSecondary">
//         <ul>
//         <li>There are some news sources which reported that the victim was cremated in the middle of the night without the 
//             permission of the family and the authorities are misleading people saying the family had been present at the funeral. [1]<br></br><br></br>
//         </li>
//         <li>There are some news sources which reported that the police had taken permissions from the family prior to 
//             cremation and the family was now lying. [2]<br></br><br></br>
//         </li>
//         <li>Some news sources reported that the UP administration and police have clearly established using forensic 
//             evidence that no rape occured. [3]<br></br><br></br>
//         </li>
//         <li>Some news have reported that the administration is pushing false propoganda and questioned the analysis of “no 
//             rape” with the victims official statement mentioning rape. [4]<br></br><br></br>
//         </li>
//         </ul>
//       </Typography>
//     </Grid>
//   </Grid>

//   <ButtonBase className={classes.image}>
//     <img className={classes.img} alt="complex" src={picLabel1} />
//   </ButtonBase>
// </Grid>
// </Grid>
// </Paper>

// <Paper className={classes.paper} elevation={3}>
// <Grid container 
// spacing={2}
// >
// <Grid item>
// </Grid>
// <Grid item xs={6} sm={3} container>
//   <Grid item xs container direction="column" spacing={2}>
//     <Grid item xs>
//     </Grid>
//   </Grid>
// </Grid>
// </Grid>