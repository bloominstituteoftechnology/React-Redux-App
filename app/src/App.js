import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import { Myreducer } from './reducer';
import {FetchDog} from './actions'



const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className = 'imagecontainer'>
      <img src = {props.dogpic}></img>
      </div>
      <button onClick = {props.FetchDog}>Get Random Picture of Lab</button>
      </header>
    </div>
  );
};


const mapStateToProps = (state) =>{
  return(
    {
      dogpic: state.image
    }
  )
}
export default connect(mapStateToProps, {FetchDog})(App);
