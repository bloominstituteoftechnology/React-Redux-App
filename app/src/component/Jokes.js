import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import {getJoke} from '../actions/JokeActions'

 const useStyles = makeStyles({
    root: {
     minWidth: 275,
     maxWidth: 500,
     marginLeft: '35%',
     marginTop: '10%'
    },
    title: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
     pos: {
       marginBottom: 12,
     },
     button: {
         marginLeft: '35%',
         marginBottom: '2%'
     }
   });


const Jokes = props => {
    const classes = useStyles();
    

    useEffect(() => {
        getJoke();
    });

    if(props.fetching){
        return <h2 className={classes.root}>Programmers at work...</h2>
    }

    return(
        
        
        <Card className={classes.root}>
        <h2 className={classes.title}>Programming Jokes</h2>
            <CardContent className={classes.pos}>
                <Typography>
                    {props.joke}
                </Typography>
            </CardContent>
            <button className={classes.button}onClick={() => props.getJoke()}>click for new joke</button>
        </Card>
        
        
    )


}

const mapStateToProps = state => {
    return{
        joke: state.joke,
        fetching: state.fetching,
        error: state.error
    };
};
export default connect(mapStateToProps, {getJoke})(Jokes);