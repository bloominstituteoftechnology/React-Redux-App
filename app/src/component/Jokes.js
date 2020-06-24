import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import {getJoke} from '../actions/JokeActions'

// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });


const Jokes = props => {
    

    useEffect(() => {
        getJoke();
    });

    if(props.fetching){
        return <h2>Programmers at work...</h2>
    }

    return(
        <div>
        <h2>Programming Jokes</h2>
        <Card>
            <CardContent>
                <Typography>
                    {props.joke}
                </Typography>
            </CardContent>
        </Card>
        <button onClick={() => props.getJoke()}>click for new joke</button>
        </div>
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