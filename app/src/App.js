import React, { useEffect } from 'react';
import Facts from './components/Facts'
import './App.css';
import { connect } from 'react-redux'
import { fetchFacts } from './store/actions/HolidaysAction'

function App({ fetchFacts, loadingFacts, errorMessage }) {
  useEffect(() => {
    fetchFacts()
  }, [fetchFacts])

  return (
    <div className="App">
     <h1>Countries of Europa </h1> 
     {!loadingFacts ? <Facts /> : <div>... Fetching facts</div>}
     {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadingFacts: state.loadingFacts,
    errorMessage: state.errorMessage
  }
}
export default connect(mapStateToProps, { fetchFacts } )(App);