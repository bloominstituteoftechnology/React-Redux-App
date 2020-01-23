import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fetchFact } from '../actions/index'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Fact = (props) => {
  const classes = useStyles();
  const Div = styled.div `
  text:align-center;
  background-color:grey;
`;
    console.log('this is props', props)
    return (
        <Div>
            {props.fact && !props.isLoading && <h2>{props.fact.fact}</h2>}
            <Button variant="contained" onClick={props.fetchFact}> Get A Fact </Button>
        </Div> 
    )
}


const mapStateToProps = (state) => {
    console.log('this is state', state)
    return {
      isLoading: state.isLoading,
      fact: state.fact,
      error: state.error
    }
  }
export default connect(mapStateToProps,{fetchFact})(Fact);