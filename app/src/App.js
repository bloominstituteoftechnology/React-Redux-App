import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getAdvice } from "./actions/AppActions";
import './App.css';

function App(props) {
  useEffect(() => {
    props.getAdvice();
        
  }, [props.getAdvice]);

  if (props.loading) {
    return <h2>Fetching The Best Advice!</h2>
  }
  return (
    <div className="App">
     <h1>The Best Advice Generator</h1>
     <p>Better Than Therapy....</p>

     <div className="adviceList">
     <h2>Don't Cry Laugh! {props.advice}</h2>
     <button className="getAdvice" 
     onClick={props.getAdvice}>Seek Another Opinion</button>
     </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    advice: state.advice,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getAdvice})  (App);
