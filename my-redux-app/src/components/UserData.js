import React from "react";
import { connect } from "react-redux";
import { getRandomUserData } from "../actions";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

const UserData = props => {
    const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}
        onClick={() => {
          props.getRandomUserData();
        }}
      >
        Get Random Yeezy Quote
      </Button>
      {props.error && <div>{props.error}</div>}
      {props.isloading ? (
        <div>loading...</div>
      ) : (
        <section>
          <h2>{props.user.quote}</h2>
          <h1>-{props.user.name}</h1>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isloading: state.isloading,
    error: state.error,
    user: state.user
  };
};

export default connect(mapStateToProps, { getRandomUserData })(UserData);
