import React from 'react';
import { getJoke } from '../actions/index';
import { connect } from 'react-redux';

function Joke(props) {
  const { getJoke, joke, error, isFetching } = props;

  const handleClick = () => {
    getJoke();
  }

  return (
    <div className='joke'>
      <h1>Joke Generator</h1>
      {
        isFetching
          ? <p>...</p>
          : <p>{joke}</p>
      }
      {
        error 
          ? <p>Please try again</p>
          : ''
      }
      <button onClick={handleClick}>make me CHUCKle</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  };
};


export default connect(mapStateToProps, { getJoke })(Joke);