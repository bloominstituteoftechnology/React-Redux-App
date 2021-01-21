import React from 'react';
import { getJoke } from '../actions/index';
import { connect } from 'react-redux';

function Joke(props) {
  const { getJoke, joke, error, isFetching } = props;

  const handleClick = () => {
    getJoke();
  }
  // if (error) {
  //   return <p>Sorry, there's a problem. Please try again.</p>
  // }

  // if (isFetching) {
  //   return <p>Loading!</p>
  // }


  return (
    <div className='joke'>
      <h1>Dad Joke Generator</h1>
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
      <button onClick={handleClick}>make my eyes roll</button>
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