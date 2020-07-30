import React, {useState}from 'react';
import{connect} from 'react-redux'
import './App.css';
import {getPics} from './actions'
import Comics from './Comics'
import {Button} from 'reactstrap'

const App=(props)=> {

const submitSearch = (e) => {
  e.preventDefault()
  props.getPics()

}
  return (
    <>
    <div>
      <h1>Brighten your day!</h1>
      <Button color='primary' onClick={submitSearch}>
        Add smile to face
      </Button>
    </div>      
  {props.isFetching && <p>loooooooading....</p>}
      {/* <label >
        <input name='search' onChange={ handleChange}>
        </input>
      </label> */}

      <Comics/>
    </>
  );
}

const mapStateToProps = state => ({
  pics: state.pics,
  err: state.err,
  isFetching: state.isFetching 
})

export default connect(
  mapStateToProps,
  {getPics}
  )(App);
