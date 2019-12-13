import React from 'react';
import { connect } from "react-redux";

import { getQuote, addFavorite } from './actions/index';

import Favorites from './components/Favorites';

import Loader from 'react-loader-spinner';
import KanyeWest from './img/KanyeWest.jpg'
import './App.css';

function App(props) {
  // console.log('Props on App: ', props)
  return (
    <div className="App">
      <div className="body">
        <div className="header">
          <h1>Kanyes Quotes</h1>
          <p>You're daily dose of Kanye inspiration</p>
        </div>
        <button onClick={props.getQuote}>Click for Quotes</button>
        {!props.quote.quote && !props.isFetching && (<img src={KanyeWest} alt='Kanye West' className='kanye'/>)}
        {props.isFetching && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            />
        )}
        {props.quote.quote && (
          <div className='quote'>
            <p>"{props.quote.quote}" -Kanye West</p>
            <p onClick={() => props.addFavorite(props.quote.quote)} className='favorite'>Favorite</p>
          </div>)}
          <div className='header'>
            <h4>Favorites</h4>
              {props.favorites.length ? (
                <ul type="1">
                  {props.favorites.map(item => {
                    // console.log('Item: ', item)
                    return (
                    <Favorites quote={item}/>
                  )})}
                </ul>
              ) : (
                <p>No Favorites</p>
              )}
          </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, { getQuote, addFavorite })(App);
