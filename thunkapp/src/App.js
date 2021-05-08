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
        <div style={{paddingLeft:'20%', paddingTop:'10%'}}>
          <div>
          <h1 style={{}}>Brighten your day!</h1>
          <Button style={{marginLeft:'13%'}} color='primary' onClick={submitSearch}>
            Add smile to face
          </Button>
          </div>
              
        {props.isFetching && <p>loooooooading....</p>}
          {/* <label >
            <input name='search' onChange={ handleChange}>
            </input>
          </label> */}

        <Comics/>
       </div> 
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
