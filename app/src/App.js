import React from 'react'
import { connect } from 'react-redux';
import { getDogImg } from './actions';
import './App.css';
import Dog from './components/Dog.js'


function App(props) {
  const handleClick = ()=> {
    props.getDogImg()
  };
  console.log(props.dogImg);


  return (
    <div className="App">
     <h1>Dogs</h1>
     <Dog dogImg={props.dogImg} error={props.error} />
    <button onClick={handleClick}>Fetch a Dog</button>
    </div>
  
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    dogImg: state.dogImg
  }
}

export default connect(mapStateToProps, { getDogImg })(App);
