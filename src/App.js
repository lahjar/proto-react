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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1150,
    marginTop: 60,
    borderRadius: 12,
  },
  readButton: {
    backgroundColor: 'rgb(51,51,51)',
    color: white,
    height:30,
    fontWeight: 1000,
    fontSize: 15,
    borderRadius: 5,
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
}));

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
      
      
      
            <Paper className={classes.paper} elevation={3}>
        <Grid container 
          spacing={2}
          >
          <Grid item>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" variant="h4" >
                <b>2020 Hathras Gang Rape and Murder Case</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                19 Oct 2020, Monday
                </Typography>
                <Typography variant="body2" color="textSecondary">
                                  On 14 September 2020, a 19-year-old Dalit woman was gang-raped in Hathras district, Uttar Pradesh, India. After fighting for 
                  her life for two weeks, she died in a Delhi hospital. Initially, it was reported that one accused had tried to kill her, though later 
                  in her statement to the magistrate, the victim named four accused as having raped her. <br></br><br></br>

                  The police registered a complaint on 20 September 2020 and were able to record a statement from the victim on 22 
                  September 2020. The victim was initially admitted to the Jawaharlal Nehru Medical College and Hospital in Aligarh on 14 
                  September with her spinal cord severely damaged and was later shifted to Safdarjung Hospital in New Delhi after her 
                  conditions worsened. <br></br><br></br>

                  She died on 29 September 2020. The victim was cremated at about 2:30am on 29 September 2020 by the Uttar Pradesh 
                  Police. Following the cremation, Allahabad High Court has taken suo moto cognizance of the case asking the family, the 
                  District Magistrate and the Superintendent of Police to appear before it.<br></br>
                </Typography>
              </Grid>
              <Grid item>
                <button variant="contained" className={classes.readButton}>
                  Read Full Story
                </button>
              </Grid>
            </Grid>

            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={picLabel1} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} elevation={3}>
        <Grid container 
          spacing={2}
          >
          <Grid item>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" variant="h4" >
                <b>CAA-NRC Protests</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                19 Oct 2020, Monday
                </Typography>
                <Typography variant="body2" color="textSecondary">
                                  The Citizenship Amendment Act protests (CAA Protests) are a series of nationwide protests that occurred after the 
                  Government of India introduced and subsequently enacted the Citizenship Amendment Act in the parliament. The protests 
                  started primarily in Assam on 4 December 2019 after the bill was introduced in the Parliament. Later, protests erupted across 
                  Northeast India and eventually spread to the major cities in India.
                  <br></br><br></br>
                  On 15 December, protests were held across the campuses of Jamia Millia Islamia University and Aligarh Muslim University, 
                  facing retaliation by the police. Around the same time, protests started in the area of Shaheen Bagh participated in mainly by 
                  house wives and old women who were sitting on roads as a sign of peaceful resistance. On 5 January 2020, a masked mob 
                  allegedly composed of Hindu extremists armed with rods and sticks attacked the campus of Jawaharlal Nehru University. The 
                  act was later alleged to be an attempt to suppress activism in the CAA Protests.
                  <br></br><br></br>
                  Prime Minister Narendra Modi cancelled his visit to Assam while the protests continued in Assam and across the nation. On 10 
                  January, the Delhi High Court dismissed a plea to remove the protestors occupying Shaheen Bagh, while the CAA Protests 
                  had spread to a majority of states in the country. 
                  <br></br><br></br>

                  On 14 January the Kerala Government approached the Supreme Court to challenge the CAA under Section 131 of the 
                  Constitution and became the first state to do so. By 17 January, inspired by the Shaheen Bagh protests, a massive protest was 
                  started in Mumbai and smaller ones in other parts of the country. On 30 January, a man opened fire at the protests in Jamia 
                  Millia and another on the protestors in Shaheen Bagh on 1 February. 
                  <br></br><br></br>

                  Amnesty International subsequently informed the US lawmakers that the CAA clearly violated International human rights and 
                  legitimized discrimination on the basis of religion. On 3 March, the UN High Commissioner for human rights filed an 
                  intervention plea in the Supreme Court to be made a party in the CAA Protest case.
                  <br></br><br></br>
                </Typography>
              </Grid>
              <Grid item>
                <button variant="contained" className={classes.readButton}>
                  Read Full Story
                </button>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography variant="subtitle1">$19.00</Typography> */}
            </Grid>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={picLabel2} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
