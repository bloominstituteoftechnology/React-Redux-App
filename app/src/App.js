
import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import './App.css'
import { fetchFacts } from './actions';

import DisplayInfo from './components/DisplayInfo';
const App = ( props) => {
  
  useEffect(() => {
    props.fetchFacts();
  }, []);
  if (props.isFetching) {
    
    return <h2>Loading ...</h2>;
  }
  
         
    return (
    <div className="container">
      <header><h1>Facts About Cats</h1></header>
      {props.error && <h2 style={{ color: "red" }}>{props.error}</h2>}
      {!props.error && props.catFacts.map(fact => (
        <DisplayInfo key={fact._id} text={fact.text} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    catFacts: state.catFacts,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFacts }
)(App);
