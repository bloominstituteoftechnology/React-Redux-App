import React from 'react';
import { connect } from "react-redux";

import { getQuote } from './actions/index';

import Loader from 'react-loader-spinner';
import KanyeWest from './img/KanyeWest.jpg'
import './App.css';

function App(props) {
  console.log('Props on App: ', props)
  return (
    <div className="App">
      <div className="body">
        <div className="header">
          <h1>Kanyes Kuotes</h1>
          <p>You're daily dose of Kanye inspiration</p>
        </div>
        <button onClick={props.getQuote}>Klick for Kuotes</button>
        {!props.quote && !props.isFetching && (<img src={KanyeWest} alt='Kanye West' className='kanye'/>)}
        {props.isFetching && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            />
        )}
        
        {props.quote && (
          <div className='quote'>
            <p>"{props.quote}" -Kanye West</p>
          </div>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getQuote })(App);
