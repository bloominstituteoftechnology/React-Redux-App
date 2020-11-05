import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchJokes } from '../actions/jokeActions'
import axios from 'axios'

const Joke = (props) => {


    return (
        <div>
            <h2>Christmas Jokes</h2>
           
        <p>{props.jokeData.setup}</p>
        <button>Next</button>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    jokeData: state.jokeData,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchJokes })(Joke)