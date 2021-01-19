import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {fade} from '@material-ui/core/styles';  
import { white } from 'material-ui/styles/colors';

import {Link } from "react-router-dom";

import Timeline from './timeline';
import Appbar from './appbar'

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

  margin: {
    height: theme.spacing(3),
  },
  rail: {
    height: '2px',
    width: "75%",
    borderRadius: 24,
    opacity: 1,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  iconStepper: {
    fontSize: '25%',
    width: '50',
  },
  stepContent: {
    textAlign: 'center',
    border: '1px solid',
  }
}));





export default function ComplexGrid() {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');
  const handleChange = (event) => {
    setLang(event.target.value);
  };


  return (
    <div className={classes.root}>
      <Appbar/>
      
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
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
    <Timeline/>
    </div>
  );
}