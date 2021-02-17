import React from 'react';
import {connect } from 'react-redux'
import {getJoke} from './../actions/ApiActions'


const ApiResults = (props) => {
    const { joke, isFetching, error, getJoke } = props;

    const handleButton = ()=>{
      getJoke()

    }
   
  
    if (error) {
      return <h2>We got an error: {error}</h2>;
    }
  
    if (isFetching) {
      return <h2>Looking for some HAHAHs</h2>;
    }
  
    return (
      <>
        <h2>{joke.setup}</h2>
        <h2 className='punchline'>{joke.punchline}</h2>
        <button onClick={handleButton}>Get Some Laughs</button>
      </>
    );
  };

  const mapStateToProps =(state)=>{
    return{
      joke: state.joke,
      isFetching: state.isFetching,
      error: state.error
    }
  }

  export default connect(mapStateToProps, {getJoke})(ApiResults)