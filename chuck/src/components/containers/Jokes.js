import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '3em',
  },
}));

export default function Jokes() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getJoke = () => dispatch(actions.getJoke());
  const searchResults = useSelector(state => {
    return state.searchResults;
  });
  const joke = useSelector(state => {
    return state.joke;
  });

  console.log(searchResults);

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.mainContainer}>
      <Grid item style={{ marginTop: '1em' }}>
        <Button variant='contained' onClick={() => getJoke()}>
          Random Chuck
        </Button>
      </Grid>
      <Grid item>
        <Typography variant='h4' style={{ margin: '2em' }}>
          {joke}
        </Typography>
      </Grid>
      <Grid item>
        {searchResults.map(r => (
          <Typography variant='h4' style={{ margin: '2em' }}>
            {r}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}
