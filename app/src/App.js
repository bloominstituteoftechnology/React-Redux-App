import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getAdvice } from "./actions/AppActions";
import logo from './logo.jpg';
import './App.css';

function App(props) {
  //console.log(props, "Advice from App")
  useEffect(() => {
    props.getAdvice();
        
  }, [props.getAdvice]);

  if (props.loading) {
    return <h2>Fetching The Best Advice!</h2>
  }
  return (
    <div className="App">
      <div className="appHolder">
      <div className="titles">
        <h1>{props.title}</h1>
        <p>Better Than Therapy....</p>
      </div>
     <div className="therapyImage">
       <img src={logo} alt="happy man" />
     </div>
     <div className="adviceList">
       <h2>Doc Says... {props.advice}</h2>
       <button className="getAdvice" 
       onClick={props.getAdvice}>Seek Another Opinion</button>
     </div>
     </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    advice: state.advice,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getAdvice})  (App);
