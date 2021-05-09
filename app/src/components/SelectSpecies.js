import React, { useEffect } from 'react';

import { connect } from "react-redux";
import { selectSpecies, getSpecies } from '../actions/index';

import { makeStyles } from '@material-ui/core/styles';
import { gsap } from "gsap";

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { useSnackbar } from 'notistack';

// Material UI styles
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundColor: "dodgerblue",
  },
}));

// component data
const speciesList = [
    "orca", 
    "minke", 
    "gray whale", 
    "humpback", 
    "atlantic white-sided dolphin", 
    "pacific white-sided dolphin", 
    "dalls porpoise", 
    "harbor porpoise", 
    "harbor seal", 
    "northern elephant seal", 
    "southern elephant seal", 
    "california sea lion", 
    "steller sea lion", 
    "sea otter", 
    "other", 
    "unknown"
];

const SelectSpecies = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (e) => {
    // dispatch to the action creator... change species state
console.log("e.currentTarget.id: ", e.currentTarget.id) // gives species name
    let selectedSpecies = e.currentTarget.id;
    
    props.selectSpecies(selectedSpecies);
    props.getSpecies(selectedSpecies);
  }

  useEffect (() => {
    enqueueSnackbar('Click on a species...');
  }, []);

  useEffect(() => {
    gsap.to(".species-button", {duration: 2, y: 30});
}, []); // creates login form animation, slide down

  return (
    <div className="whale-background">

      <Snackbar
        message="Get started by selecting a species..."
      />
      <div className={classes.root}>

        {
          speciesList.map(species => {
          return <Button className="species-button" key={`${species}`} id={`${species}`} onClick={handleClick} variant="contained" color="secondary">{species}</Button>
          })
        } 
      </div>
    </div>
  )

};


const mapDispatchToProps = { getSpecies, selectSpecies };

export default connect(null, mapDispatchToProps)(SelectSpecies);
